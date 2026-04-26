import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Shield } from "lucide-react";
import speakerImage from "@/assets/speaker-2.jpg";

const achievements = [
  { icon: TrendingUp, text: "Інвестую з 2007 року (крипта, фондовий ринок, та інші активи)" },
  { icon: Award, text: "За цей час я втратила понад 100 000$, зробила болючі помилки і повернула ці гроші назад, вже усвідомлено" },
  { icon: Users, text: "Працювала над портфелями людей, чий капітал сягає мільйонів доларів" },
  { icon: Shield, text: "Допомагаю друзям та підприємцям формувати інвестиційні портфелі: від ETF та фондового ринку до криптовалют та альтернативних активів" },
];

export const AuthorSection = () => {
  return (
    <section id="author" className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <img
              src={speakerImage}
              alt="Ольга Грицай"
              className="w-full h-auto rounded-2xl card-shadow"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8 order-1 lg:order-2"
          >
            <div>
              <p className="text-lg text-muted-foreground mb-2">Мене звати</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gradient">
                Ольга Грицай
              </h2>
              <p className="text-xl mt-2 text-primary">Я підприємиця та інвесторка</p>
            </div>
            
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 bg-card/50 p-4 rounded-lg border border-border"
                >
                  <achievement.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm md:text-base">{achievement.text}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl space-y-4">
              <p className="text-lg italic">
                Я не народилась з фінансовою освітою
                <br />
                Я створила її собі сама — через досвід, ризики, втрати і перемоги
              </p>
              <p className="text-lg font-semibold">
                І тепер моя мета проста:
                <br />
                <span className="text-primary">
                  Навчити тебе контролювати гроші, ще до того, як ти почнеш їх інвестувати
                </span>
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Без складних термінів
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Без страху зробити помилку
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">•</span> Без відчуття, що "це не для мене"
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
