import { motion } from "framer-motion";
import { BookOpen, Brain, ShieldAlert, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";

const modules = [
  {
    icon: BookOpen,
    number: 1,
    title: "Вступ: Життєвий цикл грошей",
    description: "Ти побачиш, що твої фінансові помилки — не «твоя вина». Це прогнозована поведінка, яка повторюється у більшості людей.",
    result: "вперше стане зрозуміло, чому гроші зникають, навіть коли ти намагаєшся економити",
  },
  {
    icon: Brain,
    number: 2,
    title: "4 фактори, які визначають твої фінанси",
    description: "Ми розберемо внутрішні установки, звички та моделі поведінки, які керують твоїми грошима «за тебе». Ти вперше побачиш зв'язок між емоціями, виборами й результатами",
    result: "ти зрозумієш свій фінансовий сценарій — і як його змінити",
  },
  {
    icon: ShieldAlert,
    number: 3,
    title: "Як нами маніпулюють",
    description: "Маркетинг, дофамін, «треба взяти, бо всі беруть». Ти навчишся бачити механізми, через які ми робимо покупки, які навіть не планували",
    result: "ти перестанеш робити імпульсивні покупки і відчуєш, що ти в кермі, а не реклама",
  },
  {
    icon: Settings,
    number: 4,
    title: "Чому без системи гроші не залишаються",
    description: "Ми розберемо реальні історії людей, які заробляли мільйони — і втратили все, тому що не мали системи управління грошима",
    result: "ти зрозумієш, що справа не в тому, скільки ти заробляєш, а в тому, наскільки ти керуєш",
  },
];

export const StructureSection = () => {
  return (
    <section id="structure" className="py-10 bg-card/30 my-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto space-y-16"
        >
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">
              Що ти пройдеш у
              <br />
              <span className="text-gradient">міні-курсі</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground">
              <span className="text-primary font-semibold">4 модулі</span>, після яких ти перестанеш губитись у своїх фінансах
              <br />
              <span className="text-gradient font-semibold">і нарешті відчуєш фінансову свободу</span>
            </p>
          </div>
          
          <div className="space-y-8">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card p-6 md:p-8 rounded-xl border border-border card-shadow hover:border-primary/50 transition-all"
              >
                <div className="flex gap-4 md:gap-6 items-start">
                  <div className="space-y-4 flex-1">
                    <div className="flex gap-4 items-start">
                      <div className="bg-primary/10 p-4 rounded-lg flex-shrink-0">
                        <module.icon className="w-8 h-8 text-primary" />
                      </div>

                      <div>
                        <span className="text-accent font-bold text-lg">Модуль {module.number}</span>
                        <h3 className="text-2xl font-bold mt-2">{module.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{module.description}</p>
                    
                    <div className="bg-primary/5 border-l-4 border-primary p-4 rounded-r-lg">
                      <p className="flex items-start gap-2">
                        <span className="text-primary font-bold">🎯</span>
                        <span>
                          <strong>Результат:</strong> {module.result}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="bg-luxury-dark p-8 rounded-2xl border border-primary/20 space-y-6">
            <p className="text-center text-lg md:text-xl">
              💡 <em>Цей міні-курс не про «економити на собі»</em>
              <br />
              <em>Це про те, щоб нарешті перестати жити у фінансовому тумані</em>
            </p>
            
            <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-r-xl">
              <p className="text-xl text-center italic">
                Після цих 4 модулів ти не станеш інвестором — але ти отримаєш фундамент, без якого інвестицій не існує
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="inline-block bg-accent/20 border-2 border-accent rounded-full px-6 py-3 rotate-3 glow-effect">
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
