-- Cloudflare D1 schema for AI-diagnostics audits.
-- One row per completed diagnostic. Stores raw answers + AI's internal classification.
-- Full analysis text is regenerated on demand — we don't store the "current_system / what_works / main_limitation / new_perspective" strings,
-- so future prompt improvements can re-analyze old submissions.

CREATE TABLE IF NOT EXISTS audits (
  id TEXT PRIMARY KEY,                 -- ULID
  created_at INTEGER NOT NULL,         -- unix seconds

  -- Raw input (JSON array of 9 answers, question 7 is object {choice, other})
  answers TEXT NOT NULL,

  -- AI internal classification (JSON object, enum-based)
  --   decision_style: "reactive" | "planned" | "mixed"
  --   financial_stage: "survival" | "stability" | "growth"
  --   emotion: "anxiety" | "calm" | "confidence" | "mixed"
  internal TEXT,

  -- Optional PII (only if user provided email before viewing result)
  email TEXT,
  phone TEXT,

  -- Attribution
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  referrer TEXT,

  -- Which prompt version generated this analysis (for A/B and later re-analysis)
  prompt_version TEXT DEFAULT 'v0.1',
  model TEXT DEFAULT 'gpt-4o',

  -- Meta
  ip_hash TEXT,                        -- hashed for rate limiting, not stored raw
  user_agent TEXT
);

CREATE INDEX IF NOT EXISTS idx_created_at ON audits(created_at);
CREATE INDEX IF NOT EXISTS idx_email ON audits(email);
