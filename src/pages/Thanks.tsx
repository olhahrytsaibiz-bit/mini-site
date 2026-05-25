import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import thanksBgMobile from "@/assets/thanks-bg-mobile.jpg";
import thanksBgDesktop from "@/assets/thanks-bg-desktop.jpg";

const Thanks = () => {
  return (
    <div className="min-h-screen bg-ivory ink relative overflow-hidden">
      {/* Background — vertical for mobile, landscape for desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${thanksBgMobile})` }}
      />
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${thanksBgDesktop})` }}
      />
      {/* Soft ivory veil for legibility */}
      <div className="absolute inset-0 bg-ivory/55 lg:bg-ivory/45" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="border-b border-black/5">
          <div className="container mx-auto px-5 lg:px-10 h-16 flex items-center justify-between">
            <Link to="/" className="text-lg font-semibold tracking-tight text-[#BD9852]">
              Точка відліку
            </Link>
            <Link to="/" className="text-sm ink-muted hover:text-[#BD9852] transition-colors">
              На головну
            </Link>
          </div>
        </header>

        <main className="flex-1 flex items-center justify-center px-5 lg:px-10 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-xl mx-auto space-y-8"
          >
            <h1 className="text-[36px] md:text-[52px] font-semibold leading-[1.05] tracking-[-0.025em] ink">
              Вітаю <span aria-hidden="true">🤗</span>
            </h1>

            <div className="space-y-5 text-base lg:text-lg leading-[1.75] ink-strong">
              <p>
                Це може бути початком зовсім інших стосунків із грошима.
              </p>
              <p>
                Більшість людей роками відкладають цей момент.
              </p>
              <p className="ink">
                Тож скоріше переходь до уроків <span aria-hidden="true">✨</span>
              </p>
            </div>

            <div className="pt-6">
              <a
                href="https://olhafair-bot.tg.pulse.is"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-10 py-5 text-base font-medium tracking-wide rounded-md bg-[#D4B06A] hover:bg-[#E1BE7A] text-[#111111] shadow-[0_8px_24px_-8px_rgba(212,176,106,0.5)] transition-colors"
              >
                Перейти до уроків
              </a>
            </div>
          </motion.div>
        </main>

        <footer className="border-t border-black/5">
          <div className="container mx-auto px-5 lg:px-10 py-6 text-xs ink-muted flex flex-wrap gap-x-6 gap-y-2 justify-center md:justify-between">
            <span>© {new Date().getFullYear()} ФОП Грицай Ольга Григорівна</span>
            <span className="flex gap-4">
              <Link to="/terms" className="hover:text-[#BD9852]">Оферта</Link>
              <Link to="/refund" className="hover:text-[#BD9852]">Повернення</Link>
              <Link to="/contacts" className="hover:text-[#BD9852]">Контакти</Link>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Thanks;
