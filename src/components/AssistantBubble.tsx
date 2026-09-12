import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Sparkles, X } from "lucide-react";

interface AssistantBubbleProps {
  lang: Language;
  onOpenContact: () => void;
}

export const AssistantBubble: React.FC<AssistantBubbleProps> = ({
  lang,
  onOpenContact,
}) => {
  const t = TRANSLATIONS[lang];
  const [isOpenBubble, setIsOpenBubble] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Auto show tooltip hint after a short delay on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpenBubble(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      id="assistant-bubble-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5 pointer-events-auto select-none"
    >
      {/* Speech bubble badge with animated close / message */}
      <AnimatePresence>
        {isOpenBubble && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="relative max-w-[240px] sm:max-w-[260px] p-3 rounded-2xl bg-neutral-900/95 border border-primary/30 text-foreground shadow-2xl backdrop-blur-md cursor-pointer group"
            onClick={onOpenContact}
          >
            {/* Dismiss button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpenBubble(false);
              }}
              className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-white/10 hover:bg-white/25 border border-white/15 flex items-center justify-center text-muted-foreground hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Fermer"
              title="Fermer la bulle"
            >
              <X className="w-3 h-3" />
            </button>

            {/* Bubble content */}
            <div className="flex items-start gap-2.5">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5 shrink-0 animate-pulse" />
              <div className="flex flex-col gap-0.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-primary font-semibold flex items-center gap-1">
                  <span>Roni</span>
                  <Sparkles className="w-3 h-3 text-primary" />
                </span>
                <p className="text-xs text-foreground/90 leading-tight font-medium">
                  {lang === "fr"
                    ? "Un projet ou une question ? Discutons-en !"
                    : "Have a project or a question? Let's talk!"}
                </p>
                <span className="text-[10px] text-muted-foreground font-mono mt-1 group-hover:text-primary transition-colors flex items-center gap-1">
                  {lang === "fr" ? "👉 Cliquez pour m'écrire" : "👉 Click to get in touch"}
                </span>
              </div>
            </div>

            {/* Speech bubble pointer / triangle */}
            <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-neutral-900 border-r border-b border-primary/30 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cute Floating Assistant Avatar Button */}
      <motion.button
        id="assistant-bubble-btn"
        type="button"
        onClick={onOpenContact}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={t.nav.getQuote}
        title={t.nav.getQuote}
        className="relative group flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-primary via-emerald-400 to-teal-300 text-background shadow-lg shadow-primary/30 border-2 border-white/20 cursor-pointer overflow-hidden transition-shadow hover:shadow-xl hover:shadow-primary/50"
      >
        {/* Soft pulsing glow behind */}
        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />

        {/* Cute Mascot / Message SVG Icon */}
        <div className="relative z-10 flex items-center justify-center">
          <svg
            className="w-7 h-7 transition-transform duration-300 group-hover:scale-110"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Cute rounded speech bubble body */}
            <path
              d="M16 4C9.37258 4 4 8.70101 4 14.5C4 17.5815 5.53037 20.3541 7.9719 22.3164C7.57509 24.321 6.55937 26.0463 5.48512 27.2343C5.23485 27.511 5.45479 27.9576 5.82488 27.9252C8.61869 27.6806 11.2366 26.3375 12.929 24.6391C13.9189 24.8762 14.9451 25 16 25C22.6274 25 28 20.299 28 14.5C28 8.70101 22.6274 4 16 4Z"
              fill="#08090a"
            />

            {/* Cute Happy Eyes */}
            <motion.ellipse
              cx="12"
              cy="14"
              rx="1.6"
              ry={isHovered ? "2.2" : "1.8"}
              fill="#22c55e"
              animate={isHovered ? { scaleY: [1, 0.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            />
            <motion.ellipse
              cx="20"
              cy="14"
              rx="1.6"
              ry={isHovered ? "2.2" : "1.8"}
              fill="#22c55e"
              animate={isHovered ? { scaleY: [1, 0.2, 1] } : {}}
              transition={{ repeat: Infinity, duration: 1.5, repeatDelay: 1 }}
            />

            {/* Cute Smile */}
            <path
              d="M13 17.5C14.2 19 17.8 19 19 17.5"
              stroke="#22c55e"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

            {/* Blushing Cheeks */}
            <circle cx="9.5" cy="16.5" r="1.2" fill="#ef4444" opacity="0.6" />
            <circle cx="22.5" cy="16.5" r="1.2" fill="#ef4444" opacity="0.6" />
          </svg>
        </div>

        {/* Small live online green badge indicator */}
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-neutral-900 z-20" />
      </motion.button>
    </div>
  );
};
