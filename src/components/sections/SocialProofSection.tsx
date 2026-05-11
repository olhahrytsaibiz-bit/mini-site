import { motion } from "framer-motion";

const quotes = [
  "Я навіть не помічала, скільки фінансових рішень приймала на автоматі",
  "Тепер я хоча б розумію, що зі мною відбувається і що робити далі",
  "Я не знала і не звертала уваги. Тепер я бачу інакше",
];

export const SocialProofSection = () => {
  return (
    <section id="reviews" className="bg-graphite text-foreground relative">
      <div className="container mx-auto px-5 lg:px-10 py-16 lg:py-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8 }}
          className="text-[28px] md:text-[36px] lg:text-[44px] font-semibold leading-[1.15] tracking-[-0.02em] max-w-3xl mb-14 lg:mb-20"
        >
          Після курсу люди найчастіше говорять:
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl">
          {quotes.map((quote, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative border-t border-white/10 pt-8 lg:pt-10"
            >
              <span className="absolute -top-3 left-0 text-[#C8A96B] text-3xl font-serif leading-none">
                “
              </span>
              <blockquote className="text-lg lg:text-xl leading-[1.55] text-foreground/90 font-light">
                {quote}
              </blockquote>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};
