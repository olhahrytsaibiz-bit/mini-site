import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TIMER_DURATION = 3 * 60 * 60 * 1000; // 3 hours in milliseconds

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const startTime = localStorage.getItem("timerStartTime");
    const now = Date.now();
    
    let calculatedStartTime: number;
    
    if (startTime) {
      const stored = parseInt(startTime, 10);
      // If the stored timer already expired (or is invalid), restart it
      if (isNaN(stored) || now - stored >= TIMER_DURATION) {
        calculatedStartTime = now;
        localStorage.setItem("timerStartTime", calculatedStartTime.toString());
      } else {
        calculatedStartTime = stored;
      }
    } else {
      calculatedStartTime = now;
      localStorage.setItem("timerStartTime", calculatedStartTime.toString());
    }
    
    const elapsed = now - calculatedStartTime;
    const remaining = Math.max(0, TIMER_DURATION - elapsed);
    
    setTimeLeft(remaining);
    
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = Math.max(0, prev - 1000);
        if (newTime === 0) {
          clearInterval(interval);
        }
        return newTime;
      });
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const hours = Math.floor(timeLeft / (60 * 60 * 1000));
  const minutes = Math.floor((timeLeft % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((timeLeft % (60 * 1000)) / 1000);

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="text-xl md:text-2xl font-bold text-center uppercase tracking-wider">
        Знижка закінчиться через
      </h3>
      <div className="flex gap-3 md:gap-6 text-center">
        {[
          { value: hours, label: "Години" },
          { value: minutes, label: "Хвилини" },
          { value: seconds, label: "Секунди" },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <div className="bg-card border border-border rounded-lg py-3 md:py-6 min-w-[70px] md:min-w-[100px] card-shadow">
              <span className="text-3xl md:text-5xl font-bold text-gradient">
                {formatNumber(item.value)}
              </span>
            </div>
            <span className="mt-2 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
