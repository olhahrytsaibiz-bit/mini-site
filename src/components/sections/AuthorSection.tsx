import { motion } from "framer-motion";
import { TrendingUp, Award, Users, Shield } from "lucide-react";
import speakerImage from "@/assets/speaker-2.jpg";

const achievements = [
  { icon: TrendingUp, text: "Інвестую з 2007 року — пройшла через крипту, фондовий ринок, нерухомість і альтернативні активи" },
  { icon: Award, text: "Втратила понад 100 000$ — не через незнання інструментів, а через відсутність системи. Повернула — вже усвідомлено" },
  { icon: Users, text: "Пройшла шлях від «заробляю і не розумію куди йдуть гроші» до власної фінансової системи, яка працює незалежно від доходу" },
  { icon: Shield, text: "Допомагала формувати портфелі людям з капіталом від сотень тисяч до мільйонів доларів" },
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
              <p className="text-xl mt-2 text-primary">Підприємиця. Інвесторка. 20+ років у фінансах</p>
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
                Я вивчала фінанси роками — 20+ курсів, десятки книг, власний досвід у бізнесі та інвестиціях на трьох континентах.
              </p>
              <p className="text-lg italic">
                Але найголовніше я зрозуміла не з курсів. А через власні втрати.
              </p>
              <p className="text-lg font-semibold">
                Гроші не залишаються — не тому що їх мало.
                <br />
                <span className="text-primary">А тому що немає системи.</span>
              </p>
              <p className="text-lg italic">
                Саме її я даю в «Точці відліку».
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
