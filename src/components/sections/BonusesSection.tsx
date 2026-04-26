import { motion } from "framer-motion";
import { Gift, Video, FileText, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";

const bonuses = [
  {
    icon: Video,
    number: 1,
    title: "Відеоурок: «Як говорити з дітьми про гроші»",
    points: [
      "Як формувати у дитини здорові фінансові звички",
      "Фрази, які ламають фінансове мислення (і чим їх замінити)",
      "Як пояснити різницю між «гроші → річ» і «гроші → можливості»",
    ],
    result: "ти перестаєш передавати дітям свої фінансові страхи та сценарії",
  },
  {
    icon: FileText,
    number: 2,
    title: "Персональний фінансовий розбір",
    points: [
      "Після проходження курсу ти зможеш пройти міні-діагностику",
      "Я покажу, де ти втрачаєш гроші зараз і що треба змінити в першу чергу",
    ],
    result: "ти отримуєш чітке розуміння, які конкретні кроки робити далі",
  },
  {
    icon: Filter,
    number: 3,
    title: "«Антиімпульсний фінансовий фільтр» (PDF + чек-лист на телефон)",
    points: [
      "Готовий інструмент, який за 30 секунд зупиняє 90% імпульсивних покупок",
    ],
    result: "зупиняє 90% імпульсивних покупок",
  },
];

export const BonusesSection = () => {
  return (
    <section id="bonuses" className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Gift className="w-16 h-16 text-accent" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold">
              БОНУСИ, ЯКІ ТИ ОТРИМАЄШ <span className="text-gradient">ПРИ ОПЛАТІ СЬОГОДНІ</span>
            </h2>

            <p className="text-lg text-muted-foreground italic">
              Ці матеріали не продаються окремо і доступні тільки для учасниць міні-курсу
            </p>
          </div>
          
          <div className="space-y-8">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 md:p-8 rounded-xl border border-border card-shadow hover:border-accent/50 transition-all"
              >
                <div className="flex gap-4 md:gap-6 items-start">                  
                  <div className="space-y-4 flex-1">
                    <div className="flex gap-4 items-start">
                      <div className="bg-accent/10 p-4 rounded-lg flex-shrink-0">
                        <bonus.icon className="w-8 h-8 text-accent" />
                      </div>

                      <div>
                        <span className="text-accent font-bold text-lg">⭐ БОНУС №{bonus.number}</span>
                        <h3 className="text-xl md:text-2xl font-bold mt-2">{bonus.title}</h3>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {bonus.points.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                      <p className="flex items-start gap-2">
                        <span className="text-accent font-bold">🎯</span>
                        <span>
                          <strong>Результат:</strong> {bonus.result}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-destructive/10 border-l-4 border-destructive p-6 rounded-r-xl"
          >
            <p className="text-xl text-center font-semibold">
              🔥 <strong>Увага!</strong> Ці бонуси доступні тільки при оплаті на даній сторінці
            </p>
          </motion.div>
          
          <div className="flex justify-center">
            <div className="inline-block bg-accent/20 border-2 border-accent rounded-full px-6 py-3 -rotate-3 glow-effect">
              <span className="text-2xl font-bold text-accent">ЗНИЖКА -72%</span>
            </div>
          </div>
          
          <CountdownTimer />
          
          <div className="text-center">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                Взяти участь за 9 €
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
