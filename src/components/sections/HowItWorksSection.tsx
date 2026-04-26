import { motion } from "framer-motion";
import { PlayCircle, Clock, UserCheck, Target, Infinity as InfinityIcon, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: PlayCircle,
    title: "4 модулі у відеоформаті",
    description: "Кожен відкривається поступово — щоб ти не дивилась «про запас», а одразу застосовувала",
  },
  {
    icon: Clock,
    title: "Лише 10 хвилин на день",
    description: "Можеш дивитись з телефона у транспорті, за сніданком або ввечері в ліжку",
  },
  {
    icon: UserCheck,
    title: "Персональний супровід від мене",
    description: "Після проходження — міні-діагностика. Я допоможу визначити наступні кроки та який тариф підходить саме тобі",
  },
  {
    icon: Target,
    title: "Практика замість теорії",
    description: "Кожен модуль завершується конкретним завданням: «Зроби неідеально, але зроби»",
  },
  {
    icon: InfinityIcon,
    title: "Доступ назавжди",
    description: "Ніяких обмежень. Ти можеш повертатись до уроків, коли захочеш",
  },
  {
    icon: ShieldCheck,
    title: "Гарантія повернення коштів",
    description: "Якщо відчуєш, що курс не для тебе — повернемо гроші. Без питань.",
  },
];

export const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-10 bg-card/30 my-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Як буде проходити <span className="text-gradient">навчання?</span>
            </h2>
            <p className="text-xl text-primary font-semibold">
              Все просто. Без перевантаження. Без складної термінології
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border card-shadow hover:border-primary/50 transition-all"
              >
                <div className="flex gap-4 items-start">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
