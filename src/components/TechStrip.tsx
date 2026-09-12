import React from "react";
import { TECH_STACK_TAGS, Language } from "@/src/data/portfolioData";
import { Cpu } from "lucide-react";
import { motion } from "motion/react";

interface TechStripProps {
  lang: Language;
}

export const TechStrip: React.FC<TechStripProps> = ({ lang }) => {
  return (
    <div
      id="stack"
      className="relative z-20 py-8 bg-background/70 border-y border-white/[0.07] backdrop-blur-md overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
      >
        <div className="flex items-center gap-2.5 text-xs font-mono uppercase tracking-widest text-primary shrink-0">
          <Cpu className="w-4 h-4" />
          <span>{lang === "fr" ? "Stack principale" : "Core Tech Stack"}</span>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.04,
              },
            },
          }}
          className="flex flex-wrap items-center gap-2 md:gap-3"
        >
          {TECH_STACK_TAGS.map((tag) => (
            <motion.span
              key={tag}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.4 },
                },
              }}
              className="px-3 py-1.5 rounded-md bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-primary/40 transition-colors text-xs font-medium text-foreground/80 hover:text-foreground cursor-default"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};
