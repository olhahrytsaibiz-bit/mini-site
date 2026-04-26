import { Facebook, Instagram, Send, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com/OlhaABC", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/olhafair", label: "Instagram" },
  { icon: Send, href: "https://t.me/manager_olhafair", label: "Telegram" },
  { icon: Mail, href: "mailto:07allexa@gmail.com", label: "Email" },
];

const navLinks = [
  { href: "#hero", label: "Головна" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#author", label: "Про автора" },
  { href: "#structure", label: "Структура курсу" },
  { href: "#bonuses", label: "Бонуси" },
  { href: "#faq", label: "Питання" },
];

export const FooterSection = () => {
  return (
    <footer className="bg-luxury-dark border-t border-border py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gradient">Точка відліку</h3>
              <p className="text-muted-foreground">
                Міні-курс для тих, хто заробляє — але гроші не залишаються
              </p>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-xl font-bold">Соцмережі</h4>
              <p className="text-muted-foreground">Підпишіться та слідкуйте за новинами!</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-card p-3 rounded-lg border border-border hover:border-primary hover:bg-card/80 transition-all card-shadow"
                    aria-label={link.label}
                  >
                    <link.icon className="w-6 h-6 text-primary" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 space-y-8">
            <div className="flex flex-wrap justify-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Політика конфіденційності
              </a>
              <span>•</span>
              <a href="#" className="hover:text-foreground transition-colors">
                Публічна оферта
              </a>
            </div>
            
            <div className="text-center space-y-2">
              <p className="text-sm text-muted-foreground">ФОП Грицай О. Г.</p>
              <p className="text-xs text-muted-foreground">All rights reserved © {new Date().getFullYear()}</p>
              <p className="text-xs text-muted-foreground">
                Сайт створено{" "}
                <a 
                  href="https://kulser.com/showcase" 
                  target="_blank" 
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  KULSER
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
