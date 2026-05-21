import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const FooterSection = () => {
  return (
    <footer className="bg-graphite text-foreground/80 border-t border-white/5">
      <div className="container mx-auto px-5 lg:px-10 py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-3 lg:gap-12"
        >
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-gold tracking-tight">Точка відліку</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Міні-курс про гроші, систему і фінансове мислення.
            </p>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-foreground/55">Документи</p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/terms" className="text-foreground/80 hover:text-gold transition-colors">
                  Публічна оферта
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-foreground/80 hover:text-gold transition-colors">
                  Політика повернення коштів
                </Link>
              </li>
              <li>
                <Link to="/contacts" className="text-foreground/80 hover:text-gold transition-colors">
                  Контакти
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-widest text-foreground/55">Зв'язок</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li>ФОП Грицай Ольга Григорівна</li>
              <li>
                <a href="mailto:olhafair@gmail.com" className="hover:text-gold transition-colors">
                  olhafair@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+380954564018" className="hover:text-gold transition-colors">
                  +380 95 456 40 18
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-12 pt-8 border-t border-white/5 text-xs text-muted-foreground/60 flex flex-col md:flex-row gap-2 justify-between">
          <span>© {new Date().getFullYear()} ФОП Грицай Ольга Григорівна. Всі права захищені.</span>
          <span>Оплата захищена WayForPay</span>
        </div>
      </div>
    </footer>
  );
};
