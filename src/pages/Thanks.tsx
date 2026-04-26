import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Thanks = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://site.com/start";
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 overflow-x-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center space-y-8 max-w-md"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="flex justify-center"
        >
          <div className="bg-primary/20 p-6 rounded-full">
            <CheckCircle className="w-20 h-20 text-primary" />
          </div>
        </motion.div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-gradient">
          Дякуємо за покупку!
        </h1>
        
        <p className="text-lg text-muted-foreground">
          Для того, щоб розпочати курс,
          <br />
          натисніть на кнопку
        </p>
        
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <Button size="lg" className="text-lg px-8 py-6 glow-effect" asChild>
            <a href="https://site.com/start">
              Розпочати курс
            </a>
          </Button>
        </motion.div>
        
        <p className="text-sm text-muted-foreground">
          Автоматичне перенаправлення через 5 секунд...
        </p>
      </motion.div>
    </div>
  );
};

export default Thanks;
