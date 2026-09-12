import React from "react";
import { EXPERIENCES_DATA, Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/src/components/ui/ScrollReveal";

interface ExperienceSectionProps {
  lang: Language;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="experience"
      className="relative z-20 py-24 bg-hero-bg text-foreground border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header with ScrollReveal */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up" distance={20} delay={0.05}>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>{t.experience.eyebrow}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase mb-4">
              {t.experience.title}
            </h2>
          </ScrollReveal>
        </div>

        {/* Timeline List with Stagger animations */}
        <StaggerContainer staggerDelay={0.12} className="space-y-6">
          {EXPERIENCES_DATA.map((exp, idx) => (
            <StaggerItem key={idx}>
              <div className="p-8 rounded-xl bg-background/50 border border-white/[0.08] hover:border-primary/40 transition-all flex flex-col md:flex-row md:items-start justify-between gap-6 hover:-translate-y-0.5 shadow-lg">
                <div className="md:w-1/3">
                  <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">
                    {exp.role[lang]}
                  </h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                    <span className="font-medium text-foreground/80">{exp.company}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1 text-xs">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="md:w-2/3">
                  <p className="text-muted-foreground font-light text-sm sm:text-base leading-relaxed mb-4">
                    {exp.description[lang]}
                  </p>

                  {exp.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((s) => (
                        <span
                          key={s}
                          className="px-2.5 py-1 rounded bg-white/[0.04] text-xs font-mono text-foreground/75"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
