import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const Thanks = () => {
  return (
    <div className="min-h-screen bg-graphite text-foreground flex flex-col">
      <header className="border-b border-white/5">
        <div className="container mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
          <Link to="/" className="text-lg font-semibold tracking-tight text-gold">
            Точка відліку
          </Link>
          <Link to="/" className="text-sm text-foreground/70 hover:text-gold transition-colors">
            На головну
          </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center px-5 lg:px-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-xl mx-auto space-y-8"
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex justify-center"
          >
            <div className="w-20 h-20 rounded-full border border-[#C8A96B]/40 flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9 text-[#C8A96B]" strokeWidth={1.4} />
            </div>
          </motion.div>

          <h1 className="text-[32px] md:text-[44px] font-semibold leading-[1.1] tracking-[-0.025em] text-gold">
            Дякуємо за оплату
          </h1>

          <div className="space-y-5 text-base lg:text-lg leading-[1.75] text-foreground/80">
            <p>
              Доступ до міні-курсу <span className="text-foreground/95">«Точка відліку»</span> вже
              формується для тебе.
            </p>
            <p>
              Посилання на курс надійде на твій email протягом кількох хвилин. Якщо листа немає у
              «Вхідних» — перевір папку «Спам» або «Промоакції».
            </p>
            <p className="text-foreground/65 text-sm pt-2">
              Якщо посилання не прийшло протягом години, напиши нам:{" "}
              <a href="mailto:olhafair@gmail.com" className="text-gold hover:underline">
                olhafair@gmail.com
              </a>
            </p>
          </div>

          <div className="pt-4">
            <Link
              to="/"
              className="inline-block text-sm text-foreground/70 hover:text-gold transition-colors"
            >
              ← Повернутися на головну
            </Link>
          </div>
        </motion.div>
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

export default Thanks;
