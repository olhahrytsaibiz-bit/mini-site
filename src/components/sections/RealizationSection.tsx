import { motion } from "framer-motion";
import lightBgDesktop from "@/assets/light-bg-desktop.jpg";
import lightBgMobile from "@/assets/light-bg-mobile.jpg";

export const RealizationSection = () => {
  return (
    <section id="realization" className="bg-ivory ink relative overflow-hidden">
      {/* Light editorial backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden opacity-90"
        style={{ backgroundImage: `url(${lightBgMobile})` }}
      />
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${lightBgDesktop})` }}
      />
      {/* Soft ivory veil for legibility */}
      <div className="absolute inset-0 bg-ivory/55 lg:bg-ivory/40" />

      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-32 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.025em] max-w-3xl">
            Найнебезпечніше — новий рівень життя дуже швидко стає нормою
          </h2>

          <div className="space-y-6 text-lg lg:text-xl leading-[1.7] ink-muted max-w-2xl">
            <p>
              Одна думка: <span className="ink italic">«А так можна було?»</span>
            </p>
            <p>І все.</p>
            <p>
              Дорожчі звички, нові витрати, рівень життя, який тепер теж потрібно постійно
              підтримувати.
            </p>
            <p>
              Саме тому відчуття «мені просто треба трохи більше» може тривати роками.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
