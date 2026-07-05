// AI Diagnostics — question set v0.1.
// Editing here changes only the frontend copy. Question count and order MUST match `/api/audit` validation and prompt.

export type QuestionKind = "open" | "choice-with-other";

export interface QuestionChoice {
  value: string; // stored in DB, passed to AI
  label: string; // shown to user
}

export interface Question {
  num: number; // 1..9
  kind: QuestionKind;
  title: string;
  hint?: string;
  choices?: QuestionChoice[];
  otherLabel?: string; // for choice-with-other only
  placeholder?: string;
}

export const QUESTIONS: Question[] = [
  {
    num: 1,
    kind: "open",
    title:
      "Уяви, що сьогодні ти отримала свій основний дохід. Що ти зазвичай робиш далі?",
    placeholder: "Розкажи своїми словами…",
  },
  {
    num: 2,
    kind: "open",
    title:
      "Що ти робиш, коли несподівано отримуєш гроші? Наприклад: подарунок, премію, бонус або несподіваний додатковий дохід.",
    placeholder: "Розкажи своїми словами…",
  },
  {
    num: 3,
    kind: "open",
    title:
      "Що ти зазвичай робиш, коли виникають несподівані витрати? Наприклад: зламалася пральна машина або холодильник, потрібно терміново поїхати, захворіла дитина чи сталася інша незапланована ситуація.",
    placeholder: "Розкажи своїми словами…",
  },
  {
    num: 4,
    kind: "open",
    title:
      "Як ти зазвичай приймаєш рішення про великі покупки? Що допомагає тобі зрозуміти, що зараз саме час купувати?",
    placeholder: "Розкажи своїми словами…",
  },
  {
    num: 5,
    kind: "open",
    title:
      "Як ти вирішуєш, чи варто брати кредит або розстрочку? Що для тебе є вирішальним у цей момент?",
    placeholder: "Розкажи своїми словами…",
  },
  {
    num: 6,
    kind: "open",
    title:
      "Чи вкладаєш ти зараз гроші у своє майбутнє? Наприклад: депозит, нерухомість, акції, облігації, власний бізнес, пенсійні програми чи щось інше. Чому ти обрала саме цей варіант? Якщо поки не вкладаєш — що тебе зупиняє?",
    placeholder: "Розкажи своїми словами…",
  },
  {
    num: 7,
    kind: "choice-with-other",
    title:
      "Які почуття найчастіше виникають у тебе наприкінці місяця, коли ти думаєш про свої фінанси?",
    choices: [
      { value: "anxiety", label: "😟 Тривога — здається, що ситуація стає гіршою." },
      { value: "calm", label: "🙂 Спокій — загалом усе під контролем." },
      { value: "confidence", label: "😊 Задоволення — рухаюся у правильному напрямку." },
      { value: "other", label: "✍️ Інше" },
    ],
    otherLabel: "Якщо обрала «Інше» — опиши почуття своїми словами",
  },
  {
    num: 8,
    kind: "open",
    title:
      "Яке фінансове рішення зараз для тебе найскладніше? Чому саме воно?",
    placeholder: "Розкажи своїми словами…",
  },
  {
    num: 9,
    kind: "open",
    title:
      "Уяви, що минуло 5 років і твоє фінансове життя стало саме таким, як ти хотіла. Як ти зрозумієш, що це вже сталося? Що ти відчуєш? Що перестанеш робити? Що зможеш робити, чого не можеш зараз? Що зробиш уперше?",
    placeholder: "Розкажи своїми словами…",
  },
];
