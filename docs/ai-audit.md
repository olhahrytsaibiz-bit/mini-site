# AI Diagnostics (Audit) — architecture & deploy notes

## Data flow

```
Browser → /audit (React quiz, 9 questions)
       → POST /api/audit { answers, email?, utm? }
       → Cloudflare Pages Function
           → validate
           → (day 3+) call OpenAI GPT-4o with structured outputs
           → INSERT row into D1 `audits`
           → return JSON { current_system, what_works, main_limitation, new_perspective }
       → /audit/result renders 4 blocks with headings from React (not from AI)
       → CTA card "Що далі?" → Telegram bot
```

## Storage (Cloudflare D1)

Schema: `functions/schema/audits.sql`.

**What we store:** raw answers, internal enum-classification, minimal PII, UTM, model+prompt version, hashed IP.

**What we do NOT store:** the analysis text itself. Reason: when the prompt improves, we can re-analyze old submissions with the new prompt using stored `answers` + `internal`.

## Setup steps (owner-only, one-time)

1. Cloudflare Dashboard → Workers & Pages → D1 → **Create database** → name: `audits-db`.
2. In the created DB → **Console** tab → paste contents of `functions/schema/audits.sql` → run.
3. Copy the `database_id` (UUID) from the DB overview page.
4. Update `wrangler.toml` line `database_id = "..."` with the real UUID → commit → push.
5. Cloudflare Dashboard → your Pages project → **Settings → Functions → D1 database bindings** → add binding:
   - Variable name: `DB`
   - D1 database: `audits-db`
6. **Settings → Environment variables** → add:
   - `OPENAI_API_KEY` = `sk-proj-...` (encrypted). Only needed from day 3.
7. Redeploy the project.

## Model & prompt

- **Startup model:** `gpt-4o`.
- **Prompt version tag:** stored in each row (`prompt_version` column). Bump when methodology changes.
- **Response format:** JSON Schema (Structured Outputs), enum-constrained `internal` fields.

## Adding a new SendPulse trigger for the "free lesson after diagnostics" flow

Currently WayForPay → SendPulse event fires the paid-course chain. The diagnostics flow needs a SECOND event URL that starts a DIFFERENT chain in the same bot. Owner creates it in SendPulse; URL then gets added to `/api/audit` (or served via the CTA button on `/audit/result`).
