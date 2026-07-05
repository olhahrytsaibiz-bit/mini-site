/// <reference types="@cloudflare/workers-types" />
// AI Diagnostics endpoint — day 1 skeleton.
// Accepts POST with 9 answers, validates shape, stores in D1, returns MOCK analysis.
// OpenAI wiring will land in day 3.

interface AnswerChoiceObject {
  choice: string;
  other?: string;
}

type Answer = string | AnswerChoiceObject;

interface AuditRequest {
  answers: Answer[];               // must be exactly 9 items
  email?: string;
  phone?: string;
  utm?: {
    source?: string;
    medium?: string;
    campaign?: string;
    referrer?: string;
  };
}

interface Env {
  DB: D1Database;
  OPENAI_API_KEY?: string;
}

// Minimal ULID generator (26-char sortable id).
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

function badRequest(msg: string): Response {
  return new Response(JSON.stringify({ error: msg }), {
    status: 400,
    headers: { "Content-Type": "application/json" },
  });
}

function validateAnswers(a: unknown): a is Answer[] {
  if (!Array.isArray(a)) return false;
  if (a.length !== 9) return false;
  return a.every((x) => {
    if (typeof x === "string") return true;
    if (typeof x === "object" && x !== null) {
      const obj = x as Record<string, unknown>;
      return typeof obj.choice === "string";
    }
    return false;
  });
}

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  let body: AuditRequest;
  try {
    body = await request.json();
  } catch {
    return badRequest("Invalid JSON");
  }

  if (!validateAnswers(body.answers)) {
    return badRequest("answers must be an array of 9 items");
  }

  // TODO (day 3): call OpenAI here with system prompt v0.1 + structured outputs.
  // For now return a deterministic mock so the frontend can be built in parallel.
  const mock = {
    current_system: "Тут буде опис того, як зараз працює твоя фінансова система. Це заглушка для day 1.",
    what_works: "Тут буде опис того, що вже працює. Це заглушка для day 1.",
    main_limitation: "Тут буде опис головного обмеження. Це заглушка для day 1.",
    new_perspective: "Тут буде інший погляд на фінансову систему. Це заглушка для day 1.",
    internal: {
      decision_style: "mixed" as const,
      financial_stage: "stability" as const,
      emotion: "mixed" as const,
    },
  };

  const id = ulid();
  const createdAt = Math.floor(Date.now() / 1000);
  const ipRaw = request.headers.get("CF-Connecting-IP") ?? "";
  const ipHash = ipRaw ? await sha256Hex(ipRaw) : null;
  const ua = request.headers.get("User-Agent") ?? "";

  try {
    if (env.DB) {
      await env.DB.prepare(
        `INSERT INTO audits (id, created_at, answers, internal, email, phone,
           utm_source, utm_medium, utm_campaign, referrer, prompt_version, model,
           ip_hash, user_agent)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
        .bind(
          id,
          createdAt,
          JSON.stringify(body.answers),
          JSON.stringify(mock.internal),
          body.email ?? null,
          body.phone ?? null,
          body.utm?.source ?? null,
          body.utm?.medium ?? null,
          body.utm?.campaign ?? null,
          body.utm?.referrer ?? null,
          "v0.1-mock",
          "mock",
          ipHash,
          ua.slice(0, 500)
        )
        .run();
    }
  } catch (e) {
    // Don't break the user flow on storage error — return analysis anyway,
    // log to Cloudflare Workers logs.
    console.error("D1 insert failed", e);
  }

  return new Response(
    JSON.stringify({
      id,
      current_system: mock.current_system,
      what_works: mock.what_works,
      main_limitation: mock.main_limitation,
      new_perspective: mock.new_perspective,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};
