import React, { useState } from "react";
import { Language } from "@/src/data/portfolioData";
import { TECH_ITEMS } from "@/src/components/TechIcons";
import { Cpu } from "lucide-react";

interface TechStripProps {
  lang: Language;
}

export const TechStrip: React.FC<TechStripProps> = ({ lang }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate items for seamless continuous looping
  const items = [...TECH_ITEMS, ...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <div
      id="stack"
      className="relative z-20 py-8 bg-background/80 border-y border-white/[0.07] backdrop-blur-md overflow-hidden select-none"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16 mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-primary shrink-0">
          <Cpu className="w-4 h-4" />
          <span>{lang === "fr" ? "Stack principale" : "Core Tech Stack"}</span>
        </div>
        <div className="text-[11px] font-mono text-muted-foreground hidden sm:flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>{lang === "fr" ? "Survoler pour ralentir" : "Hover to slow down"}</span>
        </div>
      </div>

      {/* Infinite Slider Marquee Container with Left-to-Right motion */}
      <div
        className="relative w-full overflow-hidden flex items-center group py-2"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee Track: translating from -50% to 0% creates Left-to-Right motion with smooth, relaxed pace */}
        <div
          className="flex items-center gap-4 shrink-0 will-change-transform"
          style={{
            display: "flex",
            width: "max-content",
            animation: `marquee-ltr ${isHovered ? "140s" : "60s"} linear infinite`,
            animationPlayState: "running",
            transition: "animation-duration 0.6s ease",
          }}
        >
          {items.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.id}-${index}`}
                className="group/item flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-primary/50 transition-all duration-300 hover:scale-105 cursor-pointer shadow-sm hover:shadow-primary/15"
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center p-1 bg-white/[0.05] border border-white/10 group-hover/item:border-primary/40 transition-colors"
                  style={{
                    boxShadow: `0 0 15px ${tech.color}15`,
                  }}
                >
                  <Icon className="w-5 h-5 transition-transform duration-300 group-hover/item:scale-110" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-semibold text-foreground group-hover/item:text-primary transition-colors tracking-tight">
                    {tech.name}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono leading-none">
                    {tech.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
      `}</style>
    </div>
  );
};
