import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import lightBgDesktop from "@/assets/light-bg-desktop.jpg";
import lightBgMobile from "@/assets/light-bg-mobile.jpg";

const faqs = [
  {
    q: "Це підійде мені, якщо я взагалі не розбираюся у фінансах?",
    a: "Так. Курс не про цифри і терміни — він про те, як ти думаєш про гроші і чому так відбувається. Фінансового досвіду не потрібно.",
  },
  {
    q: "Це курс про інвестиції?",
    a: "Ні. Це міні-курс про те, чому гроші зникають навіть при хорошому доході — і чому без системи складно створити стабільність.",
  },
  {
    q: "Скільки часу займає проходження?",
    a: "Курс складається з коротких уроків, які можна проходити у своєму темпі.",
  },
  {
    q: "Коли я отримаю доступ?",
    a: "Одразу після оплати.",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="bg-ivory ink relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat lg:hidden"
        style={{ backgroundImage: `url(${lightBgMobile})` }}
      />
      <div
        className="absolute inset-0 hidden lg:block bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${lightBgDesktop})` }}
      />
      <div className="absolute inset-0 bg-ivory/65 lg:bg-ivory/55" />

      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-28 max-w-3xl relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.15] tracking-[-0.02em] mb-12 lg:mb-16"
        >
          Питання, які виникають найчастіше
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="space-y-1">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-b border-black/15 last:border-b-0"
              >
                <AccordionTrigger className="text-left text-lg lg:text-xl font-medium py-8 ink hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base lg:text-lg leading-[1.75] ink-strong pb-10 pr-8">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
