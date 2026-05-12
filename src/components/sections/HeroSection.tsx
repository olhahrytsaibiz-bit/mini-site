import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import heroBgDesktop from "@/assets/hero-bg-desktop.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-graphite text-foreground"
    >
      {/* Background — mobile shifted up so face aligns with title */}
      <div
        className="absolute inset-0 bg-[length:auto_135%] bg-[position:62%_top] bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-right bg-no-repeat"
        style={{ backgroundImage: `url(${heroBgDesktop})` }}
      />

      {/* Left dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/90 from-0% via-[#0F1115]/55 via-50% to-transparent to-80% lg:from-[#0F1115] lg:from-25% lg:via-[#0F1115]/85 lg:via-45% lg:to-transparent lg:to-65%" />

      {/* Bottom vignette into next section */}
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
            <div className="inline-flex items-center gap-3 rounded-xl px-5 py-3 max-w-[34rem] bg-[#171A20]/70 border border-[#C8A96B]/50 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#C8A96B] flex-shrink-0" strokeWidth={1.8} />
              <span className="text-[11px] xl:text-xs uppercase tracking-[0.18em] text-foreground/90 font-medium leading-relaxed">
                Міні-курс для тих, хто заробляє — але гроші не залишаються
              </span>
            </div>

            <h1 className="text-[68px] xl:text-[96px] font-semibold leading-[0.95] tracking-[-0.03em] uppercase">
              <span className="block text-gold">Точка</span>
              <span className="block text-gold">відліку</span>
            </h1>

            <p className="text-lg xl:text-xl text-muted-foreground max-w-md leading-relaxed">
              Фінансова система, де гроші стають капіталом, а не зникають.
            </p>

            <div className="space-y-5 pt-2">
              <Button
                size="lg"
                className="group text-base px-8 py-7 bg-[#C8A96B] hover:bg-[#b89656] text-[#0F1115] font-medium tracking-wide rounded-md transition-all border border-[#E0C68A] shadow-[0_0_30px_-8px_rgba(200,169,107,0.6)]"
                asChild
              >
                <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                  Придбати курс за 9€
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <p className="text-sm text-muted-foreground/80 italic">
                При оплаті курсу сьогодні ти отримуєш бонусні матеріали!
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden relative flex flex-col min-h-[100svh] pt-10 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="inline-flex items-center gap-3 rounded-xl px-4 py-3 mb-6 bg-[#171A20]/70 border border-[#C8A96B]/50 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-[#C8A96B] flex-shrink-0" strokeWidth={1.8} />
            <span className="block text-[10px] uppercase tracking-[0.16em] text-foreground/95 font-medium leading-relaxed">
              Міні-курс для тих, хто заробляє — але гроші не залишаються
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[44px] sm:text-5xl font-semibold leading-[0.95] tracking-[-0.03em] uppercase text-left max-w-[58%]"
          >
            <span className="block text-gold">Точка</span>
            <span className="block text-gold">відліку</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm text-muted-foreground max-w-[55%] leading-relaxed mt-4"
          >
            Фінансова система,
            <br />
            де гроші стають капіталом,
            <br />
            а не зникають
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-auto space-y-3 pt-8"
          >
            <Button
              size="lg"
              className="group w-full text-base py-7 bg-[#C8A96B] hover:bg-[#b89656] text-[#0F1115] font-medium tracking-wide rounded-md border border-[#E0C68A] shadow-[0_0_30px_-8px_rgba(200,169,107,0.6)]"
              asChild
            >
              <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                Придбати курс за 9€
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground/80 italic text-center px-4">
              При оплаті курсу сьогодні ти отримуєш бонусні матеріали!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
