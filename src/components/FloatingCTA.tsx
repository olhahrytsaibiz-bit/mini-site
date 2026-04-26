import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const firstScreenHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling past first screen
      const shouldShow = scrollPosition > firstScreenHeight;
      
      // Hide when near bottom (within 200px)
      const nearBottom = scrollPosition + windowHeight >= documentHeight - 200;
      
      setIsVisible(shouldShow && !nearBottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4"
        >
          <Button
            size="lg"
            className="shadow-2xl w-full max-w-xs"
            asChild
          >
            <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
              Купити курс за 9 €
            </a>
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
