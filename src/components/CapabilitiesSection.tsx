import React from "react";
import { CAPABILITIES_DATA, Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Layers } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/src/components/ui/ScrollReveal";

interface CapabilitiesSectionProps {
  lang: Language;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="capabilities"
      className="relative z-20 py-24 bg-background text-foreground border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header with ScrollReveal */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up" distance={20} delay={0.05}>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>{t.engineering.eyebrow}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase mb-4">
              {t.engineering.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={0.18}>
            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              {t.engineering.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Cards Grid with Stagger animations */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {CAPABILITIES_DATA.map((item) => (
            <StaggerItem key={item.number} className="h-full">
              <div className="h-full p-8 rounded-xl bg-hero-bg/60 border border-white/[0.08] hover:border-primary/40 transition-all duration-300 relative group hover:-translate-y-1 shadow-lg">
                <div className="text-primary font-mono text-xs font-bold tracking-widest mb-4">
                  {item.number}
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title[lang]}
                </h3>

                <p className="text-muted-foreground font-light text-sm sm:text-base leading-relaxed mb-6">
                  {item.text[lang]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
