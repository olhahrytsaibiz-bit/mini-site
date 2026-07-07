# AI Diagnostics — Calibration Log

This document tracks every methodology change to the system prompt, why it was made, and what we expected to change. Each release of the prompt is a version, stored per-audit in `audits.prompt_version` so we can regenerate old analyses under new methodology.

**Rule:** after each real user test we add ONE observation and ONE rule. Do not rewrite the prompt "from feelings".

---

## v0.3 — 2026-XX-XX

### Trigger
Second live test showed:
- AI paraphrased answers instead of finding patterns ("Ти вже інвестувала в нерухомість і криптовалюту…")
- AI reached for generic financial-advice conclusions ("треба зробити план")
- AI barely used our methodology; it slipped into a standard "budget-planning" frame

### Root cause found
We told GPT to "analyze the financial system" but never defined what WE mean by that. GPT substituted its own default meaning: budget + expenses + income.

### Changes
1. Added `# Що таке фінансова система` at the top. Explicit definition: "rules, habits and decisions that determine what happens with money after it arrives".
2. Added `# Критерій успіху`: success = user understands their OWN system better, NOT just agrees with description.
3. Added `# Причинно-наслідкові зв'язки`: every conclusion follows the shape "особливість системи → наслідок для результату".
4. Reframed `current_system` block: describe the PRINCIPLE, not the elements. Ban on listing concrete assets unless they are the key factor.
5. Softened `main_limitation`: 1–2 key limitations, may be merged into one shared pattern.

### Hypothesis
GPT will stop paraphrasing facts and start showing the internal logic of the system. current_system will read as a diagnostic insight, not a summary.

### What to look for in next live test
- Does current_system describe LOGIC (e.g. "система орієнтована на збереження, а не на створення капіталу"), or does it list what the user did?
- Do main_limitations follow causal-chain shape ("X → Y")?
- Does the reader feel "AI understood something I didn't articulate", not "AI listed what I said"?

---

## v0.2 — earlier

### Trigger
First live test: prompt v0.1 was too heavy on negative instructions ("Заборонено...", "Не використовувати..."). Result was correct but stiff, and GPT was over-focused on avoiding pitfalls.

### Changes
- Removed ban-lists, replaced with compact style guide
- Softened main_limitation from "one main problem" to "1-2 key limitations, may be merged"
- Removed detailed internal-classification instructions (kept only via json_schema enum)

### Hypothesis
Response will be more holistic, less list-like.

### Outcome
Improvement, but revealed a deeper issue — see v0.3 trigger.

---

## v0.1 — initial

Initial prompt built from methodology document. Structured but over-verbose.

---

## v0.5 — 2026-XX-XX (methodology consolidation)

### Trigger
v0.4 introduced a 5-stage internal model but as a rigid checklist ("ознаки сформованості" x3 per stage). Also proposed splitting internal into 5 integer fields in the JSON schema. Before shipping the DB change, we consolidated the methodology.

### Root decision
The DB schema evolves LATER. The methodology evolves NOW. Do one at a time. Ship the reasoning-first prompt with the same JSON contract, then evolve DB after MVP calibration on real users.

### Changes vs v0.4
1. Tighter definition of "фінансова система" — "система готових фінансових рішень для різних життєвих ситуацій". More concrete, action-oriented.
2. Explicit 4-step reasoning procedure BEFORE writing the analysis (analyze holistically → apply model → find what's missing → explain causally).
3. Internal model condensed: one line per stage instead of three checklist markers. Reduces the risk of GPT slipping into checklist mode.
4. Added explicit ban on stage names as terms ("грошовий потік", "накопичення" as vocabulary) — the model exists to sharpen analysis, never to give a report.
5. JSON schema INTENTIONALLY reverted to v0.3 shape (financial_stage enum). Per-stage integer fields will land post-MVP.

### Hypothesis
Analysis becomes more natural and diagnostic (less "checklist by hidden stages"). GPT is forced to speak in causal chains ("система робить X → результат Y"), not in labels.

### What to look for in next live test
- Does the reader hear a DIAGNOSIS ("твоя система вміє X, але не має Y — тому Z"), not a list?
- Does GPT still slip into concrete-asset lists (real estate, crypto, courses)?
- Does the model correctly identify the NEXT missing element, not just any missing element?

### Post-MVP roadmap (parked, not lost)
When we've calibrated on ~30-50 real users and the natural language output is good, we split `internal` into per-stage integer fields for analytics. That will require:
- ALTER TABLE audits ADD COLUMN stage_cashflow INTEGER (+ 4 more);
- Corresponding indexes;
- Update code to read per-stage integers from the schema and dual-write.
No changes to existing rows — old audits will just have NULL stage columns and be re-analyzable via stored answers.

---

## v0.6 — 2026-XX-XX (final baseline before real users)

### Trigger
v0.5 was correct in structure but we noticed reasoning could still drift into paraphrasing on some inputs. Before real-user testing we lock in the final baseline with explicit reasoning schemas and hard gates.

### Decision to STOP calibrating
No more prompt changes without real user data. Any further guessing pollutes the methodology. Ship v0.6 → collect ~30-50 live audits → then next revision based on evidence.

### Changes vs v0.5
1. Explicit gate: "внутрішня модель формується ДО написання". Before writing anything, GPT MUST first classify all 5 elements internally. This is stated as a hard order, not a suggestion.
2. Added 5 concrete logical-schema examples ("особливість → безпосередній наслідок → фінансовий результат"), one per model element. These seed the causal-chain thinking with real templates while explicitly not being templates for the output text.
3. Rules for incomplete/contradictory answers strengthened: contradiction can BE the insight, not a problem to avoid.
4. Language/style consolidated into one compact section instead of scattered instructions.
5. JSON schema unchanged from v0.5 — per-stage integers still parked.

### Hypothesis
Analysis becomes noticeably more diagnostic. Reader gets "твоя система робить X, тому Y" rather than "твоя система робить X" (implicit end). Reasoning gate reduces cases where GPT skips the model and jumps to paraphrasing.

### What to look for in FIRST live users
- Diagnostic voice vs summary voice: does the reader hear analysis or a mirror of their own answers?
- Model discipline: any leaked stage names, level talk ("рівень"), or numbered stages?
- Causal fidelity: does main_limitation follow the "особливість → наслідок → результат" shape?
- Reader impact: does the person say "AI зрозумів щось, що я не проговорила" — the north-star response?

### Next steps (product-level, NOT prompt-level)
- Day 4: polish `/audit/result` UX (block timing, readability with long outputs, empty-state fallbacks).
- Day 5: rate limiting via Cloudflare Turnstile + IP throttle, cost cap on OPENAI_API_KEY.
- Day 6: end-to-end analytics events (start_audit / complete_audit / view_result / click_next_step) in GA4 + Meta Pixel.
- Then: collect real users. Only THEN return to this document with v0.7+ evidence-based revisions.
