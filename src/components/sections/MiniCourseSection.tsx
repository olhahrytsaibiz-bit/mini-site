import { motion } from "framer-motion";

const lessons = [
  {
    number: "01",
    title: "Чому твої помилки з грошима насправді передбачувані",
  },
  {
    number: "02",
    title: "Що насправді визначає твоє ставлення до грошей — набагато сильніше за зарплату",
  },
  {
    number: "03",
    title: "Як маркетинг, дофамін і нова «норма життя» змушують нас витрачати більше",
  },
  {
    number: "04",
    title: "Чому без системи навіть хороший дохід не дає відчуття стабільності",
  },
];

export const MiniCourseSection = () => {
  return (
    <section id="course" className="bg-charcoal text-foreground relative">
      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mb-16 lg:mb-20"
        >
          <h2 className="text-[32px] md:text-[44px] lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.025em]">
            4 уроки, після яких ти почнеш зовсім інакше дивитися на гроші
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6 max-w-6xl">
          {lessons.map((lesson, i) => (
            <motion.div
              key={lesson.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="border border-white/8 rounded-md p-8 lg:p-10 hover:border-[#C8A96B]/40 transition-colors duration-500 bg-[#1B1F26]"
            >
              <div className="text-[#C8A96B] text-sm font-medium tracking-widest mb-6">
                {lesson.number}
              </div>
              <h3 className="text-xl lg:text-[26px] font-medium leading-[1.25] tracking-[-0.01em]">
                {lesson.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 lg:mt-16 max-w-4xl"
        >
          <ul className="flex flex-wrap gap-x-8 gap-y-3 text-sm lg:text-base text-muted-foreground">
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C8A96B]" /> Короткі відеоуроки
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C8A96B]" /> Доступ одразу після оплати
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C8A96B]" /> Можна проходити у своєму темпі
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-[#C8A96B]" /> Без перевантаження та складних термінів
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
