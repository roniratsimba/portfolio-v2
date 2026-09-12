import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language } from "@/src/data/portfolioData";

interface PreloaderProps {
  lang: Language;
  onComplete?: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ lang, onComplete }) => {
  const [index, setIndex] = useState(0);
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  // Exactly the two requested strings
  const words = ["Roni Ratsimba", "Full-Stack Developer"];

  useEffect(() => {
    // Lock scroll while preloader is active
    document.body.style.overflow = "hidden";

    // Duration for clear, comfortable reading: ~2.8s total
    const start = performance.now();
    const duration = 2800;

    let animFrame: number;
    const updateProgress = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(Math.floor((elapsed / duration) * 100), 100);
      setPercent(progress);

      if (progress < 100) {
        animFrame = requestAnimationFrame(updateProgress);
      } else {
        setTimeout(() => {
          setIsFinished(true);
          document.body.style.overflow = "";
          onComplete?.();
        }, 400);
      }
    };
    animFrame = requestAnimationFrame(updateProgress);

    // Transition to the second title at ~1.3s so each title stays on screen clearly
    const switchTimer = setTimeout(() => {
      setIndex(1);
    }, 1300);

    return () => {
      cancelAnimationFrame(animFrame);
      clearTimeout(switchTimer);
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isFinished && (
        <motion.div
          key="skiper8-preloader"
          initial={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[99999] flex flex-col justify-between bg-[#08090a] text-foreground p-8 sm:p-14 select-none cursor-default"
        >
          {/* Header Row without "Portfolio V2" and without "Skip" */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                RONI RATSIMBA
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground/60 tracking-wider">
              {index === 0 ? "01 / 02" : "02 / 02"}
            </span>
          </div>

          {/* Central Animated Text */}
          <div className="relative w-full max-w-4xl mx-auto my-auto overflow-hidden py-8 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={words[index]}
                initial={{ y: 35, opacity: 0, filter: "blur(4px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                exit={{ y: -35, opacity: 0, filter: "blur(4px)" }}
                transition={{
                  duration: 0.4,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col items-center justify-center gap-3"
              >
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white uppercase font-sora">
                  {words[index]}
                </span>
                <span className="font-mono text-xs sm:text-sm tracking-widest text-primary/80 uppercase">
                  {index === 0
                    ? lang === "fr"
                      ? "Ingénieur Logiciel"
                      : "Software Engineer"
                    : "Symfony · React · TypeScript"}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer with Counter and Progress Bar */}
          <div className="w-full max-w-4xl mx-auto flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="text-primary font-bold">R.</span>
                <span>Madagascar ➔ Remote</span>
              </div>
              <div className="font-bold text-base sm:text-xl text-primary tabular-nums tracking-widest">
                {String(percent).padStart(2, "0")}%
              </div>
            </div>

            {/* Progress line */}
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${percent}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
