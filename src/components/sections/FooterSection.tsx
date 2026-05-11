import { motion } from "framer-motion";

export const FooterSection = () => {
  return (
    <footer className="bg-graphite text-foreground/80 border-t border-white/5">
      <div className="container mx-auto px-5 lg:px-10 py-14 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row gap-6 lg:gap-10 justify-between items-start lg:items-center"
        >
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-gold tracking-tight">
              Точка відліку
            </h3>
            <p className="text-sm text-muted-foreground max-w-md">
              Міні-курс про гроші, систему і фінансове мислення.
            </p>
          </div>

          <div className="text-xs text-muted-foreground/60 lg:text-right">
            © {new Date().getFullYear()} Ольга Грицай. Всі права захищені.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
