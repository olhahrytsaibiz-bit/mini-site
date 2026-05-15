import { motion } from "framer-motion";
import authorImage from "@/assets/speaker-2.jpg";

export const AuthorSection = () => {
  return (
    <section id="author" className="bg-ivory-warm ink relative">
      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-sm">
              <img
                src={authorImage}
                alt="Ольга Грицай"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="space-y-7"
          >
            <h2 className="text-[30px] md:text-[40px] lg:text-[48px] font-semibold leading-[1.1] tracking-[-0.025em]">
              Я теж колись думала, що проблема — просто в грошах
            </h2>

            <div className="space-y-5 text-base lg:text-lg leading-[1.75] ink-strong">
              <p>
                Я довго думала, що проблема — просто в сумі грошей. Що коли доходу стане більше — прийде й відчуття спокою.
              </p>
              <p>
                Але кожен новий рівень життя дуже швидко ставав нормою.
              </p>
              <p className="ink">
                І я зрозуміла: справа не тільки в доході. А в системі, без якої гроші постійно «розчиняються» в житті.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
