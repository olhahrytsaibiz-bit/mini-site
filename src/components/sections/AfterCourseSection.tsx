import { motion } from "framer-motion";

const items = [
  "З'ясуєш, чому гроші зникають. І вперше це не буде схоже на звинувачення. Просто все стане зрозумілим.",
  "Побачиш механізми, які змушують витрачати більше, ніж ти планувала — і більше не зможеш цього не помічати.",
  "Отримаєш точку відліку — чітке розуміння, де ти зараз і що варто змінити насамперед.",
  "Відчуєш, що фінансова система — це не про дисципліну і таблиці. Це про те, як один раз налаштувати своє життя — і перестати думати про гроші щодня.",
];

export const AfterCourseSection = () => {
  return (
    <section id="after-course" className="bg-ivory-warm ink relative">
      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-32 max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.15] tracking-[-0.025em] mb-12 lg:mb-16"
        >
          Після курсу ти:
        </motion.h2>

        <ul className="space-y-6 lg:space-y-8 max-w-3xl">
          {items.map((text, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex gap-4 lg:gap-5 items-start text-base lg:text-lg leading-[1.75] ink-strong"
            >
              <span
                className="flex-shrink-0 w-[6px] h-[6px] rounded-full bg-[#BD9852] mt-[12px] lg:mt-[14px]"
                aria-hidden="true"
              />
              <span>{text}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
