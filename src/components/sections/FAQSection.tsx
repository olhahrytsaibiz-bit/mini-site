import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "А раптом у мене нічого не вийде?",
    answer: (
      <>
        <p>У тебе вийде! Це не «ще одна лекція на 40 хвилин»</p>
        <p className="mt-2">
          Уроки зроблені у форматі коротких анімаційних відео-мультиків — я пояснюю складні речі простими образами
        </p>
        <p className="mt-2">
          Дивитись їх легко і приємно — тобі не доведеться змушувати себе «сісти і вчитись»
        </p>
        <p className="mt-4 italic text-primary">
          ☝ Багато мам пишуть, що уроки дивляться навіть їхні діти
        </p>
      </>
    ),
  },
  {
    question: "У мене немає часу. Я постійно в роботі / сім'я / справи",
    answer: (
      <>
        <ul className="space-y-2">
          <li>• 10 хвилин на день</li>
          <li>• Замість довгих лекцій — короткі кольорові анімаційні блоки</li>
          <li>• Ти можеш дивитись під час сніданку, в метро або стоячи в черзі за кавою</li>
        </ul>
      </>
    ),
  },
  {
    question: "У мене хаос у фінансах і я навіть не знаю, з чого почати…",
    answer: (
      <>
        <p>Саме для цього і створений курс</p>
        <p className="mt-2">
          Ти побачиш, <strong>куди зникають гроші</strong>, і зробиш перший крок до контролю
        </p>
      </>
    ),
  },
  {
    question: "Я пробувала вести облік витрат — не працює",
    answer: (
      <>
        <p>
          Тут інше! Ми не «рахуємо гроші», ми міняємо <strong>механізм прийняття рішень про покупки</strong>
        </p>
        <p className="mt-2">
          Після "Модулю 3" ти перестанеш робити імпульсивні покупки, бо зрозумієш, як працюють дофамін і реклама
        </p>
      </>
    ),
  },
  {
    question: "А якщо я не розберуся або передумаю?",
    answer: (
      <>
        <ul className="space-y-2">
          <li>• 14 днів гарантії повернення коштів</li>
          <li>• Не підійшло — повернемо</li>
        </ul>
      </>
    ),
  },
  {
    question: "Я не планую інвестувати зараз. Мені буде корисно?",
    answer: (
      <>
        <p>Так! Міні-курс — це фундамент: контроль, система, поведінка</p>
        <p className="mt-2">Тільки після цього має сенс інвестувати</p>
        <p className="mt-4 italic text-primary">
          Ти не повинна одразу знати все
          <br />
          Ти повинна зробити перший крок
        </p>
      </>
    ),
  },
  {
    question: "Що робити, якщо я не отримаю доступи?",
    answer: (
      <>
        <p>
          Система обробляє кожний платіж та автоматично відправляє лист на електронну пошту та перенаправляє в Telegram, де проходить курс.
        </p>
        <p className="mt-2">
          Буває так, що приблизно один відсоток учнів не знаходить доступи до уроків, в такому випадку напиши нам у{" "}
          <a
            href="https://t.me/manager_olhafair"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-semibold"
          >
            Telegram
          </a>
        </p>
      </>
    ),
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="py-10">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Ще є <span className="text-gradient">сумніви?</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="bg-card border border-border rounded-xl px-6 card-shadow hover:border-primary/50 transition-all"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <div className="text-center pt-8">
            <Button size="lg" className="text-lg px-8 py-6" asChild>
              <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                Купити курс
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
