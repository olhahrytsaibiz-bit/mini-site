import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import speakerImage from "@/assets/speaker-1.png";
import speakerMobileImage from "@/assets/speaker-mobile.png";
import money from "@/assets/money.png";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      style={{
        backgroundImage: `url(${money})`
      }}
      className="min-h-screen md:pt-32 md:pb-20 relative overflow-hidden bg-no-repeat bg-[position:-60px_-40px] bg-[length:40%] md:!bg-none"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-dark via-background to-background opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10 min-h-screen">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-block max-w-xl px-4 py-2 bg-card/50 rounded-lg border border-border">
              <span className="text-sm md:text-base uppercase tracking-widest text-muted-foreground font-medium leading-relaxed">
                Міні-курс для тих, хто заробляє — але гроші не залишаються
              </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-[#cbba9c]">ТОЧКА</span>
              <br />
              <span className="text-[#cbba9c]">ВІДЛІКУ</span>
            </h1>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground">
                Фінансова система, де гроші стають капіталом, а не зникають
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <motion.div
                animate={{
                  scale: [1, 1.03, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Button size="lg" className="text-lg px-8 py-6 glow-effect" asChild>
                  <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                    Придбати курс за 9€
                  </a>
                </Button>
              </motion.div>
              
              <div className="bg-destructive text-destructive-foreground rounded-full w-16 h-16 flex flex-col items-center justify-center text-xs font-bold">
                <span>Знижка</span>
                <span>72%</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground italic">
              При оплаті курсу сьогодні ти отримаєш бонусні матеріали!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative glow-effect rounded-2xl overflow-hidden">
              <img
                src={speakerImage}
                alt="Ольга Грицай - автор курсу"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col">
          <motion.div
            style={{ backdropFilter: "blur(3px)" }}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-4 mb-4 rounded-lg overflow-hidden shadow-[0_20px_30px_-10px_#000] border border-border"
          >
            <div className="">
              <span
                className="
                  text-sm
                  uppercase
                  tracking-wide
                  text-muted-foreground
                  font-medium
                  px-2
                  py-3
                  bg-card/50
                  block"
              >
                Міні-курс для тих, хто заробляє — але гроші не залишаються
              </span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-5xl font-bold leading-tight text-left mb-4 -z-10"
          >
            <span className="text-[#cbba9c]">ТОЧКА</span>
            <br />
            <span className="text-[#cbba9c]">ВІДЛІКУ</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left mb-4"
          >
            <p className="text-base text-muted-foreground">
              Фінансова система,
              <br />
              де гроші стають капіталом,
              <br />
              а не зникають
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              backgroundImage: `url(${speakerMobileImage})`
            }}
            className="
              absolute
              bottom-0
              -right-14
              pointer-events-none
              -z-10
              overflow-hidden
              w-[77%]
              h-[72%]
              bg-contain
              bg-[position:0_bottom]
              bg-no-repeat"
          >
            {/* <img
              src={speakerMobileImage}
              alt="Ольга Грицай - автор курсу"
              className="-mb-16"
            /> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-20 left-0 right-0 w-full max-w-[400px] mx-auto flex items-center px-6"
          >
            <div className="flex-1">
              <Button size="lg" className="w-full text-lg py-8 px-4 glow-effect bg-gradient-to-t from-[#00611e] to-[#07d81f] text-[#ecf3ec] rounded-[10px] tracking-wider border-t border-b border-t-[#8ef19d] border-b-[#003b11] text-center leading-[1.3]" asChild>
                <a href="https://wayforpay.com" target="_blank" rel="noopener noreferrer">
                  Придбати курс
                  <br />
                  за 9€
                </a>
              </Button>
            </div>
            
            <motion.div
              animate={{
                rotate: [15, -15, 15],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-[#e50000] rounded-full w-[75px] h-[75px] shadow-[-2px_0px_10px_-3px_#000,_0px_0px_2px_0px_#330000_inset] flex flex-col items-center justify-center text-xs flex-shrink-0 -ml-8 z-0 rotate-[20deg] border-[7px] border-solid border-[#009c19]">
              <span>Знижка</span>
              <span>72%</span>
            </motion.div>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-8 left-0 w-full text-sm italic text-center"
          >
            При оплаті курсу сьогодні ти отримаєш
            <br />
            бонусні матеріали!
          </motion.p>

          <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(0,#000,transparent)] -z-10"></div>
        </div>
      </div>
    </section>
  );
};
