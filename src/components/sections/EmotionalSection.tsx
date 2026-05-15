import { motion } from "framer-motion";
import darkBgMobile from "@/assets/dark-block-mobile.jpg";
import darkBgDesktop from "@/assets/dark-block-desktop.jpg";

export const EmotionalSection = () => {
  return (
    <section
      id="pause"
      className="relative overflow-hidden bg-graphite text-foreground"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${darkBgMobile})` }}
      />
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${darkBgDesktop})` }}
      />
      {/* Soft darken so text breathes above details */}
      <div className="absolute inset-0 bg-[#0F1115]/55 lg:bg-[#0F1115]/40" />
      {/* Subtle grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 py-24 lg:py-40 relative z-10 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="space-y-8"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[52px] font-semibold leading-[1.1] tracking-[-0.025em]">
            Ти не помічаєш це одразу
          </h2>

          <div className="space-y-5 text-base lg:text-lg leading-[1.75] text-foreground/75 max-w-xl">
            <p>
              Спочатку здається: <span className="text-foreground/90 italic">«ще трохи — і стане легше»</span>.
            </p>
            <p>
              Але доходи ростуть. Разом із ними — витрати, нові звички й новий рівень життя.
            </p>
            <p className="text-foreground/90">
              І одного дня ти розумієш: ти багато працюєш — але спокою досі немає.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
