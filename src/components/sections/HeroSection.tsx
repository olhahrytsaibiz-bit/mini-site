import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { startCheckout } from "@/lib/payment";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgDesktop from "@/assets/hero-bg-desktop.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-graphite text-foreground"
    >
      {/* Background — mobile vertical; desktop landscape */}
      <div
        className="absolute inset-0 bg-cover bg-[position:62%_72%] bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgDesktop})` }}
      />

      {/* Left dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/95 from-0% via-[#0F1115]/75 via-40% to-transparent to-70% lg:from-[#0F1115]/85 lg:from-15% lg:via-[#0F1115]/55 lg:via-40% lg:to-transparent lg:to-60%" />

      {/* Bottom vignette */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0F1115]" />

      {/* Subtle grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Desktop layout */}
        <div className="hidden lg:flex flex-col justify-center min-h-screen pt-32 pb-20 max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="glass-plate inline-flex items-center gap-3 rounded-2xl px-5 py-3 max-w-[34rem]">
              <ShieldCheck className="w-4 h-4 text-[#BD9852] flex-shrink-0" strokeWidth={1.4} />
              <span className="text-[11px] xl:text-xs uppercase tracking-[0.18em] text-foreground/85 font-medium leading-relaxed">
                Для тих, хто хоче більше, ніж просто витрачати
              </span>
            </div>

            <h1 className="text-[68px] xl:text-[96px] font-semibold leading-[0.95] tracking-[-0.03em]">
              <span className="block text-gold">Точка</span>
              <span className="block text-gold">відліку</span>
            </h1>

            <p className="text-lg xl:text-xl text-foreground/75 max-w-md leading-[1.7]">
              Для тих, хто втомився жити без відчуття опори.
            </p>

            <div className="space-y-6 pt-2">
              <Button
                size="lg" className="group text-base px-8 py-7 text-[#111111] font-medium tracking-wide rounded-md bg-[#D4B06A] hover:bg-[#E1BE7A] shadow-[0_8px_24px_-8px_rgba(212,176,106,0.45)] transition-colors" onClick={() => startCheckout()}>Отримати доступ за 9€
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" /></Button>

              <p className="text-sm text-foreground/70 pt-1">
                Без складної економіки. Без перевантаження. І без відчуття, що тобі потрібно стати «фінансовою людиною».
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile layout — badge top, title+subtitle centered, button bottom */}
        <div className="lg:hidden relative flex flex-col min-h-[88svh] pt-16 pb-4">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-plate flex items-center gap-3 rounded-2xl px-4 py-3"
          >
            <ShieldCheck className="w-4 h-4 text-[#BD9852] flex-shrink-0" strokeWidth={1.4} />
            <span className="block text-[10px] uppercase tracking-[0.16em] text-foreground/90 font-medium leading-relaxed">
              Для тих, хто хоче більше, ніж просто витрачати
            </span>
          </motion.div>

          <div className="mt-28">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-[44px] sm:text-5xl font-semibold leading-[1.0] tracking-[-0.025em] text-left max-w-[58%]"
            >
              <span className="block text-gold">Точка</span>
              <span className="block text-gold">відліку</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="text-[15px] text-foreground/80 max-w-[52%] leading-[1.75] mt-6"
            >
              Для тих, хто втомився жити без відчуття опори.
            </motion.p>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-auto space-y-3 pb-2 pt-2"
          >
            <Button
              size="lg" className="group w-full text-base py-7 text-[#111111] font-medium tracking-wide rounded-md bg-[#D4B06A] hover:bg-[#E1BE7A] shadow-[0_8px_24px_-8px_rgba(212,176,106,0.45)] transition-colors" onClick={() => startCheckout()}>Отримати доступ за 9€
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" /></Button>

            <p className="text-xs text-foreground/70 text-center px-4 pt-2">
              Без складної економіки. Без перевантаження. І без відчуття, що тобі потрібно стати «фінансовою людиною».
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
