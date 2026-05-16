import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { startCheckout } from "@/lib/payment";

export const FinalCtaSection = () => {
  return (
    <section id="final" className="relative bg-graphite text-foreground overflow-hidden">
      <div className="absolute inset-0 soft-glow pointer-events-none" />
      <div className="grain absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-5 lg:px-10 py-20 lg:py-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="max-w-4xl mx-auto text-center space-y-10"
        >
          <h2 className="text-[30px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.025em]">
            <span className="text-gold">4 уроки</span>,
            <span className="block mt-3 text-foreground/95">
              після яких ти вже не зможеш дивитися на свої гроші як раніше
            </span>
          </h2>

          <p className="text-lg lg:text-xl text-foreground/75 max-w-2xl mx-auto leading-[1.7]">
            Без складної економіки. Без перевантаження. І без відчуття, що тобі потрібно стати «фінансовою людиною».
          </p>

          <div className="pt-4 flex justify-center">
            <Button
              size="lg" className="text-base px-10 py-7 bg-gradient-to-b from-[#C7A55A] to-[#9C7E3A] hover:from-[#b89a55] hover:to-[#8b7032] shadow-[0_10px_30px_-12px_rgba(156,126,58,0.55)] text-[#0F1115] font-medium tracking-wide rounded-md" onClick={() => startCheckout()}>Отримати доступ за 9€</Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
