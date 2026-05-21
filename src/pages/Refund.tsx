import { LegalLayout } from "./LegalLayout";

const Refund = () => (
  <LegalLayout title="Політика повернення коштів">
    <p className="text-foreground/65 text-sm">
      Редакція від {new Date().toLocaleDateString("uk-UA", { day: "numeric", month: "long", year: "numeric" })}
    </p>

    <h2 className="text-xl font-semibold text-foreground mt-8">1. Право на повернення</h2>
    <p>
      Замовник має право вимагати повернення коштів, сплачених за міні-курс «Точка відліку», у двох
      випадках:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Якщо Замовник звернувся з вимогою про повернення <strong>до моменту відкриття перших
        матеріалів</strong> Міні-курсу (тобто доступ оплачений, але уроки ще не запускались).
      </li>
      <li>
        Якщо Замовник звернувся з вимогою <strong>протягом 14 календарних днів</strong> з моменту
        оплати, за умови, що Міні-курс фактично не пройдено (відкрито менше 25% уроків).
      </li>
    </ul>

    <h2 className="text-xl font-semibold text-foreground mt-8">2. Порядок звернення</h2>
    <p>
      Щоб ініціювати повернення, Замовник надсилає заяву у вільній формі на email{" "}
      <a href="mailto:olhafair@gmail.com" className="text-gold hover:underline">olhafair@gmail.com</a>{" "}
      із зазначенням:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>дати оплати;</li>
      <li>email або номера телефону, що використовувались при оформленні;</li>
      <li>причини звернення.</li>
    </ul>

    <h2 className="text-xl font-semibold text-foreground mt-8">3. Строки повернення</h2>
    <p>
      Кошти повертаються на ту ж банківську картку, з якої було здійснено оплату, протягом 5–10
      робочих днів з моменту підтвердження повернення. Конкретний строк зарахування залежить від
      банку-емітента картки Замовника.
    </p>

    <h2 className="text-xl font-semibold text-foreground mt-8">4. Випадки, коли повернення не здійснюється</h2>
    <p>
      Повернення не здійснюється, якщо:
    </p>
    <ul className="list-disc pl-6 space-y-2">
      <li>з моменту оплати минуло понад 14 календарних днів;</li>
      <li>Замовник пройшов 25% або більше матеріалу Міні-курсу;</li>
      <li>факт передачі облікових даних або матеріалів третім особам зафіксовано Виконавцем.</li>
    </ul>

    <h2 className="text-xl font-semibold text-foreground mt-8">5. Контакти для звернень</h2>
    <p>
      ФОП Грицай Ольга Григорівна<br />
      Email: <a href="mailto:olhafair@gmail.com" className="text-gold hover:underline">olhafair@gmail.com</a><br />
      Телефон: <a href="tel:+380954564018" className="text-gold hover:underline">+380 95 456 40 18</a>
    </p>
  </LegalLayout>
);

export default Refund;
