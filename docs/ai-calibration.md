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
