import { motion } from "framer-motion";

const bonuses = [
  {
    label: "Бонус 1",
    title: "Фінансовий аудит за 5 хвилин",
    text: "ChatGPT-промпт із 7 запитань. Отримуєш одразу після оплати.",
  },
  {
    label: "Бонус 2",
    title: "Шаблон особистої фінансової карти",
    text: "Одна сторінка без таблиць.",
  },
  {
    label: "Бонус 3",
    title: "Чек-лист «7 ознак, що проблема не в доході»",
    text: "",
  },
];

export const BonusesSection = () => {
  return (
    <section id="bonuses" className="bg-ivory ink relative">
      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-32 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.025em] mb-12 lg:mb-16"
        >
          Що ти отримаєш додатково
        </motion.h2>

        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {bonuses.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-md border border-black/10 bg-white/40 backdrop-blur-sm p-7 lg:p-8"
            >
              <div className="text-xs tracking-[0.2em] uppercase text-[#BD9852] font-medium mb-5">
                {b.label}
              </div>
              <h3 className="text-lg lg:text-xl font-semibold leading-[1.3] tracking-[-0.01em] mb-3">
                {b.title}
              </h3>
              {b.text && (
                <p className="text-sm lg:text-base leading-[1.7] ink-strong">
                  {b.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
