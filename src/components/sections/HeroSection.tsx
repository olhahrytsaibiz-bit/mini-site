import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import speakerImage from "@/assets/speaker-1.png";
import speakerMobileImage from "@/assets/speaker-mobile.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-graphite text-foreground"
    >
      {/* Soft radial glow */}
      <div className="absolute inset-0 soft-glow pointer-events-none" />
      {/* Subtle grain */}
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 relative z-10">
        {/* Desktop layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center min-h-screen pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="space-y-10"
          >
            <div className="glass-plate inline-flex max-w-[34rem] rounded-xl px-5 py-3">
              <span className="text-[11px] xl:text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium">
                Для тих, хто вміє заробляти — та хоче будувати майбутнє, а не лише витрачати
              </span>
            </div>

            <h1 className="text-[64px] xl:text-[88px] font-semibold leading-[0.95] tracking-[-0.03em]">
              <span className="block text-gold">Точка</span>
              <span className="block text-gold">відліку</span>
            </h1>

            <p className="text-lg xl:text-xl text-muted-foreground max-w-xl leading-relaxed">
              Міні-курс про гроші, систему і життя, де фінанси перестають бути постійною тривогою.
            </p>

            <div className="space-y-5 pt-2">
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-[#C8A96B] hover:bg-[#b89656] text-[#0F1115] font-medium tracking-wide rounded-md transition-colors"
                asChild
              >
                <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                  Отримати доступ за 9€
                </a>
              </Button>

              <p className="text-sm text-muted-foreground/80 italic">
                4 короткі уроки без складної економіки та фінансової «мови експертів»
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden">
              <img
                src={speakerImage}
                alt="Ольга Грицай"
                className="w-full h-auto object-cover"
              />
              {/* Soft vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1115]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>

        {/* Mobile layout */}
        <div className="lg:hidden relative flex flex-col min-h-[100svh] pt-20 pb-10">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-plate rounded-xl px-4 py-3 mb-8"
          >
            <span className="block text-[10px] uppercase tracking-[0.16em] text-muted-foreground font-medium leading-relaxed text-center">
              Для тих, хто вміє заробляти — та хоче будувати майбутнє, а не лише витрачати
            </span>
          </motion.div>

          {/* Photo — top right, head at title level */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ backgroundImage: `url(${speakerMobileImage})` }}
            className="absolute top-28 -right-4 pointer-events-none -z-10 overflow-hidden w-[68%] h-[58%] bg-contain bg-[position:center_top] bg-no-repeat"
          />
          {/* Bottom vignette over photo */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F1115] to-transparent pointer-events-none -z-10" />

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-[42px] sm:text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-left mt-14 mb-4 max-w-[52%]"
          >
            <span className="block text-gold">Точка</span>
            <span className="block text-gold">відліку</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-sm text-muted-foreground max-w-[52%] leading-relaxed mb-6"
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
              className="w-full text-base py-6 bg-[#C8A96B] hover:bg-[#b89656] text-[#0F1115] font-medium tracking-wide rounded-md"
              asChild
            >
              <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                Отримати доступ за 9€
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
