import { motion } from "framer-motion";
import { Eye, Zap, ShoppingCart, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const achievements = [
  {
    icon: Eye,
    title: "Побачиш, де саме втрачаєш гроші",
    description: "Ти вперше проаналізуєш свій фінансовий цикл і зрозумієш, чому гроші зникають, навіть коли ти намагаєшся економити",
  },
  {
    icon: Zap,
    title: "Зламаєш фінансовий сценарій, який керує твоїм життям",
    description: "Ти визначиш свої 4 ключові тригери — і перестанеш діяти на автоматі",
  },
  {
    icon: ShoppingCart,
    title: "Перестанеш робити імпульсивні покупки",
    description: "Ти навчишся відрізняти реальну потребу від дофамінового «хочу прямо зараз»",
  },
  {
    icon: Target,
    title: "Сформуєш просту фінансову систему",
    description: "Без таблиць на 40 стовпчиків. Без заборон типу «не купуй каву». Ти нарешті зрозумієш, які гроші можна витрачати, а які потрібно відкладати для капіталу",
  },
];

export const WhatYouWillDoSection = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Що ти зробиш за <span className="text-gradient">4 модулі міні-курсу</span>
            </h2>
          </div>
          
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 md:p-8 rounded-xl border border-border card-shadow hover:border-primary/50 transition-all"
              >
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
                    <achievement.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">{achievement.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="
              bg-luxury-dark
              py-8
              rounded-2xl
              border-2
              border-accent/30
              text-center
              space-y-6
              bg-gift"
          >
            <div className="inline-block rounded-full py-3">
              <span className="text-xl font-bold text-accent uppercase tracking-wider">
                НАЙДОСТУПНІШИЙ КУРС
              </span>
            </div>
            
            <div className="flex justify-center">
              <div className="bg-accent/20 border-2 border-accent rounded-full px-6 py-3 rotate-3 glow-effect">
                <span className="text-2xl font-bold text-accent">ЗНИЖКА -72%</span>
              </div>
            </div>
            
            <Button size="lg" className="text-lg px-8 py-6 !mt-40" asChild>
              <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                Купити курс
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
