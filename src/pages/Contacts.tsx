import { LegalLayout } from "./LegalLayout";

const Contacts = () => (
  <LegalLayout title="Контакти">
    <p>
      Якщо у вас виникли запитання щодо міні-курсу, оплати, доступу або повернення коштів, ви можете
      зв'язатися з нами одним із способів нижче.
    </p>

    <div className="mt-10 space-y-6">
      <div>
        <p className="text-sm text-foreground/60 uppercase tracking-widest mb-1">Юридична особа</p>
        <p className="text-lg text-foreground">ФОП Грицай Ольга Григорівна</p>
      </div>

      <div>
        <p className="text-sm text-foreground/60 uppercase tracking-widest mb-1">Email</p>
        <a href="mailto:olhafair@gmail.com" className="text-lg text-gold hover:underline">
          olhafair@gmail.com
        </a>
      </div>

      <div>
        <p className="text-sm text-foreground/60 uppercase tracking-widest mb-1">Телефон</p>
        <a href="tel:+380954564018" className="text-lg text-gold hover:underline">
          +380 95 456 40 18
        </a>
      </div>

      <div>
        <p className="text-sm text-foreground/60 uppercase tracking-widest mb-1">Сайт</p>
        <a href="https://mini.olhafair.com" className="text-lg text-foreground/85 hover:text-gold">
          mini.olhafair.com
        </a>
      </div>
    </div>

    <p className="mt-12 text-foreground/65">
      Відповідаємо протягом робочого дня (Пн–Пт), у вихідні — за можливості.
    </p>
  </LegalLayout>
);

export default Contacts;
