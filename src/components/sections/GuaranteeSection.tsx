import { motion } from "framer-motion";
import { Shield, Check } from "lucide-react";

const guaranteePoints = [
  "Якщо протягом двох тижнів ти зрозумієш, що курс не дає користі — я поверну гроші без зайвих питань",
  "Без допитів",
  "Без «розкажіть, чому»",
  "Без сорому",
];

export const GuaranteeSection = () => {
  return (
    <section className="py-10 bg-card/30 my-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card p-8 md:p-12 rounded-2xl border-2 border-primary/30 card-shadow space-y-8">
            <div className="flex justify-center">
              <div className="bg-primary/10 p-6 rounded-full">
                <Shield className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-center">
              14-денна <span className="text-gradient">гарантія повернення коштів</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground">
              <p className="italic">
                Я надзвичайно пишаюсь цим міні-курсом.
              </p>
              
              <p className="italic">
                Він створений не як «контент для перегляду», а як{" "}
                <strong className="text-foreground">інструмент для змін</strong>
              </p>
              
              <p className="italic">
                Але я знаю, що іноді є страх:
              </p>
              
              <ul className="space-y-2 ml-6">
                <li>• «А раптом це знову не спрацює?»</li>
                <li>• «А якщо я не зрозумію?»</li>
                <li>• «А якщо це буде як черговий курс з YouTube?»</li>
              </ul>
              
              <p className="text-xl font-bold text-foreground">
                Тому я забираю з тебе ризики
              </p>
            </div>
            
            <div className="bg-primary/10 border-2 border-primary p-8 rounded-xl space-y-6">
              <div className="flex items-center gap-4">
                <Shield className="w-10 h-10 text-primary flex-shrink-0" />
                <h3 className="text-2xl font-bold">
                  Гарантія повернення коштів протягом 14 днів
                </h3>
              </div>
              
              <ul className="space-y-3">
                {guaranteePoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <span className="text-lg">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-xl space-y-3">
              <p className="text-xl font-semibold">Тому що:</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-primary">✔</span> я впевнена в якості курсу
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">✔</span> і мені важливо, щоб ти була задоволена результатом
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
