/// <reference types="@cloudflare/workers-types" />
// AI Diagnostics endpoint.
// Live: OpenAI GPT-4o + Structured Outputs. Writes to `audits` and `audit_answers`.

import {
  SYSTEM_PROMPT_V0_1,
  PROMPT_VERSION,
  buildUserMessage,
  AUDIT_JSON_SCHEMA,
} from "./audit-prompt";

interface AnswerChoiceObject {
  choice: string;
  other?: string;
}
type Answer = string | AnswerChoiceObject;

interface AuditRequest {
  answers: Answer[];
  email?: string;
  phone?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    referrer?: string;
  };
}

interface AnalysisPayload {
  current_system: string;
  what_works: string;
  main_limitation: string;
  new_perspective: string;
  internal: {
    decision_style: "reactive" | "planned" | "mixed";
    financial_stage: "survival" | "stability" | "growth";
    emotion: "anxiety" | "calm" | "confidence" | "mixed";
  };
}

interface Env {
  DB: D1Database;
  OPENAI_API_KEY: string;
}

const MODEL = "gpt-4o";
const OPENAI_URL = "https://api.openai.com/v1/chat/completions";
const OPENAI_TIMEOUT_MS = 45000;

function ulid(): string {
  const t = Date.now();
  const rnd = crypto.getRandomValues(new Uint8Array(10));
  const enc = "0123456789ABCDEFGHJKMNPQRSTVWXYZ";
  let out = "";
  let n = t;
  for (let i = 9; i >= 0; i--) {
    out = enc[n % 32] + out;
    n = Math.floor(n / 32);
  }
  for (let i = 0; i < 10; i++) out += enc[rnd[i] % 32];
  return out;
}

async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(input));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

function validateAnswers(a: unknown): a is Answer[] {
  if (!Array.isArray(a) || a.length !== 9) return false;
  return a.every((x) => {
    if (typeof x === "string") return x.trim().length > 0;
    if (typeof x === "object" && x !== null) {
      const obj = x as Record<string, unknown>;
      return typeof obj.choice === "string" && obj.choice.trim().length > 0;
    }
    return false;
  });
}

function splitAnswer(a: Answer): { text: string | null; choice: string | null; length: number } {
  if (typeof a === "string") return { text: a, choice: null, length: a.length };
  const other = a.other ?? "";
  return { text: other || null, choice: a.choice, length: other.length };
}

async function callOpenAI(apiKey: string, answers: Answer[]): Promise<AnalysisPayload> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), OPENAI_TIMEOUT_MS);

  try {
    const res = await fetch(OPENAI_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: MODEL,
        temperature: 0.7,
        messages: [
          { role: "system", content: SYSTEM_PROMPT_V0_1 },
          { role: "user", content: buildUserMessage(answers) },
        ],
        response_format: { type: "json_schema", json_schema: AUDIT_JSON_SCHEMA },
      }),
      signal: controller.signal,
    });

    if (!res.ok) {
      const errText = await res.text();
      throw new Error(`OpenAI ${res.status}: ${errText.slice(0, 500)}`);
    }
    const data = (await res.json()) as {
      choices: Array<{ message: { content: string; refusal?: string | null } }>;
    };
    const msg = data.choices?.[0]?.message;
    if (msg?.refusal) throw new Error(`OpenAI refused: ${msg.refusal}`);
    if (!msg?.content) throw new Error("OpenAI returned empty content");
    return JSON.parse(msg.content) as AnalysisPayload;
  } finally {
    clearTimeout(timer);
  }
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: AuditRequest;
  try {
    body = await request.json();
  } catch {
    return jsonResponse(400, { error: "Invalid JSON" });
  }
  if (!validateAnswers(body.answers)) {
    return jsonResponse(400, { error: "answers must be an array of 9 non-empty items" });
  }
  if (!env.OPENAI_API_KEY) {
    return jsonResponse(500, { error: "OpenAI API key not configured" });
  }

  // 1) Call OpenAI
  let analysis: AnalysisPayload;
  try {
    analysis = await callOpenAI(env.OPENAI_API_KEY, body.answers);
  } catch (e) {
    console.error("OpenAI call failed", e);
    return jsonResponse(502, { error: "AI service unavailable" });
  }

  // 2) Persist to D1 (dual-write to `audits` + 9 rows in `audit_answers`)
  const id = ulid();
  const createdAt = Math.floor(Date.now() / 1000);
  const ipRaw = request.headers.get("CF-Connecting-IP") ?? "";
  const ipHash = ipRaw ? await sha256Hex(ipRaw) : null;
  const ua = (request.headers.get("User-Agent") ?? "").slice(0, 500);

  if (env.DB) {
    try {
      const stmts: D1PreparedStatement[] = [];
      stmts.push(
        env.DB.prepare(
          `INSERT INTO audits (id, created_at, answers, internal, email, phone,
             utm_source, utm_medium, utm_campaign, referrer, prompt_version, model,
             ip_hash, user_agent)
           VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        ).bind(
          id,
          createdAt,
          JSON.stringify(body.answers),
          JSON.stringify(analysis.internal),
          body.email ?? null,
          body.phone ?? null,
          body.utm?.source ?? null,
          body.utm?.medium ?? null,
          body.utm?.campaign ?? null,
          body.utm?.referrer ?? null,
          PROMPT_VERSION,
          MODEL,
          ipHash,
          ua
        )
      );
      body.answers.forEach((a, i) => {
        const { text, choice, length } = splitAnswer(a);
        stmts.push(
          env.DB.prepare(
            `INSERT INTO audit_answers (audit_id, question_num, text_answer, choice, answer_length)
             VALUES (?, ?, ?, ?, ?)`
          ).bind(id, i + 1, text, choice, length)
        );
      });
      await env.DB.batch(stmts);
    } catch (e) {
      console.error("D1 batch insert failed", e);
      // Don't fail the response — user already paid the OpenAI cost, they should see the result.
    }
  }

  return jsonResponse(200, {
    id,
    current_system: analysis.current_system,
    what_works: analysis.what_works,
    main_limitation: analysis.main_limitation,
    new_perspective: analysis.new_perspective,
  });
};
