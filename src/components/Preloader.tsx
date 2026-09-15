import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language } from "@/src/data/portfolioData";
import { LumaSpin } from "@/src/components/ui/luma-spin";
import SplitText from "@/src/components/ui/SplitText";

interface PreloaderProps {
  lang: Language;
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ lang, onComplete }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Show the loader for 3 seconds then fade out
    const showTextTimer = setTimeout(() => {
      setShowText(true);
    }, 500);

    const finishTimer = setTimeout(() => {
      setIsFinished(true);
      document.body.style.overflow = "";
      onComplete?.();
    }, 3000);

    return () => {
      clearTimeout(showTextTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.8,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#08090a] text-foreground select-none cursor-default"
        >
          <div className="flex flex-col items-center gap-8">
            <LumaSpin 
              centerContent={
                <span className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-sora">
                  Rr.
                </span>
              }
            />
            
            {showText && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <SplitText
                  text="Roni Ratsimba"
                  className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white font-sora"
                  delay={100}
                  duration={0.8}
                  ease="power3.out"
                  splitType="chars"
                  from={{ opacity: 0, y: 30 }}
                  to={{ opacity: 1, y: 0 }}
                  textAlign="center"
                  tag="h1"
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
