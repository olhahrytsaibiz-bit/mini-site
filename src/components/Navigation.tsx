import { motion } from "framer-motion";

const navLinks = [
  { href: "#hero", label: "Головна" },
  { href: "#for-whom", label: "Для кого" },
  { href: "#author", label: "Про автора" },
  { href: "#structure", label: "Структура" },
  { href: "#bonuses", label: "Бонуси" },
  { href: "#faq", label: "Питання" },
];

export const Navigation = () => {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="hidden lg:block fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="text-xl md:text-2xl font-bold text-gradient">
            Фінансова свобода
          </a>
          <div className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
