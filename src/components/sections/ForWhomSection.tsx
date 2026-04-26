import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Clock, Shield, Users, BookOpen } from "lucide-react";

const targetAudience = [
  "Гроші заробляєш, але не розумієш, куди вони зникають… То вони є, то їх немає, і ти відчуваєш безсилля, бо не можеш це змінити",
  "Хочеш почати будувати капітал для себе та своїх дітей, але не розумієш із чого почати",
  "Тобі здається, що всі навколо вміють інвестувати, крім тебе, і ти боїшся, що втрачаєш час і можливості",
  "Ти постійно відкладаєш фінансові рішення на 'потім', бо вони здаються занадто складними чи нудними",
];

const features = [
  { icon: Clock, text: "10 хвилин навчання у день" },
  { icon: Users, text: "Персональний розбір від інвесторки підприємиці" },
  { icon: Shield, text: "Гарантія повернення коштів" },
  { icon: BookOpen, text: "4 модулі навчання" },
];

export const ForWhomSection = () => {
  return (
    <section id="for-whom" className="py-10 bg-card/30 my-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="flex items-center gap-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border card-shadow"
            >
              <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
              <span className="text-sm">{feature.text}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Цей міні-курс <span className="text-gradient">для тебе</span>, якщо ти:
          </h2>
          
          <div className="space-y-6">
            {targetAudience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary/50 transition-colors"
              >
                <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <p className="text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl"
          >
            <p className="text-xl italic text-center">
              "Якщо всередині промайнуло «це про мене», — значить ти там, де треба!"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
