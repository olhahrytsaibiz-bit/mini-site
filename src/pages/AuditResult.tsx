import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Same shape as sent to /api/audit
type Answer = string | { choice: string; other?: string };

interface AnalysisResult {
  id: string;
  current_system: string;
  what_works: string;
  main_limitation: string;
  new_perspective: string;
}

// MVP Telegram deep link — replace here if the funnel changes.
const NEXT_STEP_URL =
  "https://tg.pulse.is/olhafair_bot?start=69eea85f845885ba59010b24&username=value1&telegram_id=value2";

const LOADING_STEPS = [
  "AI аналізує твої відповіді…",
  "Шукаю закономірності у твоїх фінансових рішеннях…",
  "Формую персональний результат…",
];

const AuditResult = () => {
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [loadingText, setLoadingText] = useState(LOADING_STEPS[0]);

  // Rotate loading copy every ~4 seconds so it feels alive
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i = (i + 1) % LOADING_STEPS.length;
      setLoadingText(LOADING_STEPS[i]);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const raw = sessionStorage.getItem("auditAnswers");
    if (!raw) {
      setPhase("error");
      return;
    }
    let answers: Answer[];
    try {
      answers = JSON.parse(raw);
    } catch {
      setPhase("error");
      return;
    }

    (async () => {
      try {
        const res = await fetch("/api/audit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            answers,
            utm: {
              source: new URLSearchParams(window.location.search).get("utm_source") ?? undefined,
              medium: new URLSearchParams(window.location.search).get("utm_medium") ?? undefined,
              campaign: new URLSearchParams(window.location.search).get("utm_campaign") ?? undefined,
              referrer: document.referrer || undefined,
            },
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = (await res.json()) as AnalysisResult;
        setResult(data);
        setPhase("ready");
      } catch (e) {
        console.error(e);
        setPhase("error");
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-graphite text-foreground flex flex-col">
      <header className="border-b border-white/5">
        <div className="container mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-gold">
            Точка відліку
          </Link>
          <Link to="/audit" className="text-sm text-foreground/60 hover:text-gold transition-colors">
            Пройти ще раз
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          {phase === "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="min-h-[60vh] flex items-center justify-center px-5"
            >
              <div className="text-center space-y-8 max-w-md">
                <div className="flex justify-center">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border border-[#BD9852]/20" />
                    <div className="absolute inset-0 rounded-full border-t border-[#BD9852] animate-spin" />
                  </div>
                </div>
                <motion.p
                  key={loadingText}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-base lg:text-lg text-foreground/80 leading-relaxed"
                >
                  {loadingText}
                </motion.p>
                <p className="text-xs text-foreground/40">Це може зайняти до 30 секунд.</p>
              </div>
            </motion.div>
          )}

          {phase === "error" && (
            <motion.div
              key="error"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="min-h-[60vh] flex items-center justify-center px-5"
            >
              <div className="text-center space-y-6 max-w-md">
                <h1 className="text-2xl font-semibold text-foreground">Щось пішло не так</h1>
                <p className="text-foreground/70">
                  Не вдалося отримати аналіз. Спробуй пройти діагностику ще раз.
                </p>
                <Link
                  to="/audit"
                  className="inline-block px-6 py-3 rounded-md bg-[#D4B06A] hover:bg-[#E1BE7A] text-[#111] font-medium transition-colors"
                >
                  Почати спочатку
                </Link>
              </div>
            </motion.div>
          )}

          {phase === "ready" && result && (
            <motion.div
              key="ready"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="container mx-auto px-5 lg:px-10 py-14 lg:py-20 max-w-3xl space-y-14 lg:space-y-20"
            >
              <ResultBlock
                delay={0.0}
                icon="🧭"
                title="Як зараз працює твоя фінансова система"
                text={result.current_system}
              />
              <ResultBlock
                delay={0.2}
                icon="✅"
                title="Що вже працює добре"
                text={result.what_works}
              />
              <ResultBlock
                delay={0.4}
                icon="⚠️"
                title="Що зараз найбільше обмежує твою фінансову систему"
                text={result.main_limitation}
              />
              <ResultBlock
                delay={0.6}
                icon="🌱"
                title="Що може змінити результат"
                text={result.new_perspective}
              />

              {/* CTA card — this is UI, NOT part of the AI response */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7 }}
                className="rounded-lg border border-[#BD9852]/25 bg-[#BD9852]/[0.06] p-8 lg:p-10 text-center space-y-6"
              >
                <div className="text-2xl">🎁</div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gold tracking-[-0.015em]">
                  Що далі?
                </h2>
                <div className="space-y-4 text-base lg:text-lg leading-[1.75] text-foreground/85 max-w-xl mx-auto">
                  <p>
                    Твоя діагностика показала, як сьогодні працює твоя фінансова система.
                    Але щоб змінити результат, важливо зрозуміти, чому вона працює саме так.
                  </p>
                  <p>У безкоштовному вступному уроці ти дізнаєшся:</p>
                  <ul className="text-left space-y-2 max-w-xl mx-auto pl-4">
                    <li>• чому навіть люди з однаковим доходом отримують зовсім різні фінансові результати;</li>
                    <li>• чому навіть високий дохід без фінансової системи не перетворюється на капітал;</li>
                    <li>• з чого починається побудова системи, що працює без щоденного контролю.</li>
                  </ul>
                </div>
                <a
                  href={NEXT_STEP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-medium tracking-wide rounded-md bg-[#D4B06A] hover:bg-[#E1BE7A] text-[#111] shadow-[0_8px_24px_-8px_rgba(212,176,106,0.5)] transition-colors"
                >
                  Перейти до безкоштовного уроку →
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="border-t border-white/5">
        <div className="container mx-auto px-5 lg:px-10 py-6 text-xs text-foreground/50 flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-between">
          <span>© {new Date().getFullYear()} ФОП Грицай Ольга Григорівна</span>
          <span className="flex gap-4">
            <Link to="/terms" className="hover:text-gold">Оферта</Link>
            <Link to="/refund" className="hover:text-gold">Повернення</Link>
            <Link to="/contacts" className="hover:text-gold">Контакти</Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

// Individual result block — appears on scroll with a small delay
function ResultBlock({
  delay,
  icon,
  title,
  text,
}: {
  delay: number;
  icon: string;
  title: string;
  text: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
      className="space-y-4"
    >
      <div className="flex items-center gap-3">
        <span className="text-xl">{icon}</span>
        <h2 className="text-xl lg:text-2xl font-semibold tracking-[-0.015em] text-gold">
          {title}
        </h2>
      </div>
      <p className="text-base lg:text-lg leading-[1.8] text-foreground/85 whitespace-pre-line">
        {text}
      </p>
    </motion.section>
  );
}

export default AuditResult;
