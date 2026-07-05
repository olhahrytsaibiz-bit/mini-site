import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { QUESTIONS, Question } from "@/lib/auditQuestions";

// Answer shape sent to /api/audit
type Answer = string | { choice: string; other?: string };

function isValid(q: Question, val: unknown): boolean {
  if (q.kind === "open") {
    return typeof val === "string" && val.trim().length > 0;
  }
  if (q.kind === "choice-with-other") {
    const v = val as { choice?: string; other?: string } | undefined;
    if (!v?.choice) return false;
    if (v.choice === "other") return !!v.other && v.other.trim().length > 0;
    return true;
  }
  return false;
}

const Audit = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // 0..8
  const [values, setValues] = useState<Record<number, Answer>>({});
  const [submitting, setSubmitting] = useState(false);

  const q = QUESTIONS[step];
  const total = QUESTIONS.length;
  const isLast = step === total - 1;
  const val = values[q.num];
  const valid = isValid(q, val);

  const progressPct = useMemo(() => ((step + 1) / total) * 100, [step, total]);

  function next() {
    if (!valid) return;
    if (isLast) return submit();
    setStep((s) => Math.min(s + 1, total - 1));
  }

  function back() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function submit() {
    if (submitting) return;
    setSubmitting(true);
    // Build ordered answers array
    const answers: Answer[] = QUESTIONS.map((qq) => values[qq.num] as Answer);
    try {
      // Optimistic navigate — result page will call the API itself. Simpler & lets us show the loading UX right away.
      sessionStorage.setItem("auditAnswers", JSON.stringify(answers));
      navigate("/audit/result");
    } catch (e) {
      console.error(e);
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-graphite text-foreground flex flex-col">
      {/* Header */}
      <header className="border-b border-white/5">
        <div className="container mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-gold">
            Точка відліку
          </Link>
          <span className="text-xs text-foreground/60 tracking-widest uppercase">
            Діагностика
          </span>
        </div>
      </header>

      {/* Progress */}
      <div className="border-b border-white/5">
        <div className="container mx-auto px-5 lg:px-10 py-4">
          <div className="flex items-center justify-between text-xs text-foreground/60 mb-2 tracking-wide uppercase">
            <span>Питання {step + 1} із {total}</span>
            <span>{Math.round(progressPct)}%</span>
          </div>
          <div className="h-1 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full bg-[#BD9852]"
              initial={false}
              animate={{ width: `${progressPct}%` }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <main className="flex-1 flex items-start">
        <div className="container mx-auto px-5 lg:px-10 py-10 lg:py-16 max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={q.num}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="space-y-8"
            >
              <h1 className="text-[22px] md:text-[28px] lg:text-[32px] font-semibold leading-[1.3] tracking-[-0.015em] text-foreground">
                {q.title}
              </h1>

              {q.kind === "open" && (
                <textarea
                  value={(val as string) ?? ""}
                  onChange={(e) =>
                    setValues((v) => ({ ...v, [q.num]: e.target.value }))
                  }
                  placeholder={q.placeholder}
                  rows={5}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-md px-5 py-4 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#BD9852]/60 transition-colors leading-relaxed resize-none"
                />
              )}

              {q.kind === "choice-with-other" && (
                <div className="space-y-3">
                  {q.choices!.map((c) => {
                    const current = (val as { choice?: string })?.choice;
                    const selected = current === c.value;
                    return (
                      <button
                        key={c.value}
                        onClick={() =>
                          setValues((v) => ({
                            ...v,
                            [q.num]: { choice: c.value, other: (v[q.num] as { other?: string })?.other },
                          }))
                        }
                        className={`w-full text-left px-5 py-4 rounded-md border transition-colors ${
                          selected
                            ? "border-[#BD9852] bg-[#BD9852]/10 text-foreground"
                            : "border-white/10 bg-white/[0.03] text-foreground/85 hover:border-white/20"
                        }`}
                      >
                        {c.label}
                      </button>
                    );
                  })}
                  {(val as { choice?: string })?.choice === "other" && (
                    <textarea
                      value={(val as { other?: string })?.other ?? ""}
                      onChange={(e) =>
                        setValues((v) => ({
                          ...v,
                          [q.num]: { choice: "other", other: e.target.value },
                        }))
                      }
                      placeholder={q.otherLabel}
                      rows={3}
                      className="w-full mt-2 bg-white/[0.03] border border-white/10 rounded-md px-5 py-4 text-base text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-[#BD9852]/60 transition-colors leading-relaxed resize-none"
                    />
                  )}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Actions */}
      <div className="border-t border-white/5">
        <div className="container mx-auto px-5 lg:px-10 py-5 max-w-2xl flex items-center justify-between gap-4">
          <button
            onClick={back}
            disabled={step === 0}
            className="text-sm text-foreground/60 hover:text-gold transition-colors disabled:opacity-30 disabled:cursor-not-allowed px-2 py-2"
          >
            ← Назад
          </button>
          <button
            onClick={next}
            disabled={!valid || submitting}
            className={`px-8 py-4 text-base font-medium tracking-wide rounded-md transition-all ${
              valid && !submitting
                ? "bg-[#D4B06A] hover:bg-[#E1BE7A] text-[#111] shadow-[0_8px_24px_-8px_rgba(212,176,106,0.45)]"
                : "bg-white/10 text-foreground/40 cursor-not-allowed"
            }`}
          >
            {isLast ? "Отримати персональний аналіз" : "Далі"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Audit;
