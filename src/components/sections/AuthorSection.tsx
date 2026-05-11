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

            <div className="space-y-5 text-base lg:text-lg leading-[1.7] ink-muted">
              <p>
                Я багато працювала, запускала бізнеси, заробляла, втрачала, починала заново.
              </p>
              <p>
                І довгий час мені здавалося: якщо доходу стане більше — прийде й відчуття спокою.
              </p>
              <p>
                Саме тому я почала вивчати: економіку, фінансові системи, інвестиції і поведінку людей навколо грошей.
              </p>
              <p className="ink">
                І зрозуміла, як створити життя, де майбутнє не тримається лише на постійному заробітку.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
