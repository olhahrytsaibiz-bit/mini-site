import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-graphite text-foreground"
    >
      {/* Background image — full Olha composition.
          Mobile: cover, anchored slightly right-top so face stays in view.
          Desktop: contain by height, anchored right; left side stays dark. */}
      <div
        className="absolute inset-0 bg-cover bg-[position:62%_top] bg-no-repeat lg:bg-contain lg:bg-right lg:bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Left dark gradient overlay for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1115]/95 from-0% via-[#0F1115]/75 via-40% to-transparent to-70% lg:from-[#0F1115] lg:from-30% lg:via-[#0F1115]/90 lg:via-45% lg:to-transparent lg:to-65%" />

      {/* Bottom vignette into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#0F1115]" />

      {/* Subtle grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Desktop layout — single column, left aligned */}
        <div className="hidden lg:flex flex-col justify-center min-h-screen pt-32 pb-20 max-w-[640px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="glass-plate inline-flex items-center gap-3 rounded-xl px-5 py-3 max-w-[34rem]">
              <ShieldCheck className="w-4 h-4 text-[#C8A96B] flex-shrink-0" strokeWidth={1.8} />
              <span className="text-[11px] xl:text-xs uppercase tracking-[0.18em] text-foreground/85 font-medium leading-relaxed">
                Для тих, хто вміє заробляти — та хоче будувати майбутнє, а не лише витрачати
              </span>
            </div>

            <h1 className="text-[68px] xl:text-[96px] font-semibold leading-[0.95] tracking-[-0.03em]">
              <span className="block text-gold">Точка</span>
              <span className="block text-gold">відліку</span>
            </h1>

            <p className="text-lg xl:text-xl text-muted-foreground max-w-md leading-relaxed">
              Міні-курс про гроші, систему і життя, де фінанси перестають бути постійною тривогою.
            </p>

            <div className="space-y-5 pt-2">
              <Button
                size="lg"
                className="group text-base px-8 py-7 bg-[#C8A96B] hover:bg-[#b89656] text-[#0F1115] font-medium tracking-wide rounded-md transition-all"
                asChild
              >
                <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                  Отримати доступ за 9€
                  <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>

              <p className="text-sm text-muted-foreground/80 italic">
                4 короткі уроки без складної економіки та фінансової «мови експертів»
              </p>
            </div>
          </motion.div>
        </div>

        {/* Mobile layout — text top, photo as full background */}
        <div className="lg:hidden relative flex flex-col min-h-[100svh] pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-plate flex items-center gap-3 rounded-xl px-4 py-3 mb-6"
          >
            <ShieldCheck className="w-4 h-4 text-[#C8A96B] flex-shrink-0" strokeWidth={1.8} />
            <span className="block text-[10px] uppercase tracking-[0.16em] text-foreground/90 font-medium leading-relaxed">
              Для тих, хто вміє заробляти — та хоче будувати майбутнє, а не лише витрачати
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[44px] sm:text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-left max-w-[58%]"
          >
            <span className="block text-gold">Точка</span>
            <span className="block text-gold">відліку</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm text-muted-foreground max-w-[52%] leading-relaxed mt-4"
          >
            Міні-курс про гроші, систему і життя, де фінанси перестають бути постійною тривогою.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-auto space-y-3 pt-8"
          >
            <Button
              size="lg"
              className="group w-full text-base py-7 bg-[#C8A96B] hover:bg-[#b89656] text-[#0F1115] font-medium tracking-wide rounded-md"
              asChild
            >
              <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                Отримати доступ за 9€
                <ArrowRight className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground/80 italic text-center px-4">
              4 короткі уроки без складної економіки та фінансової «мови експертів»
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
