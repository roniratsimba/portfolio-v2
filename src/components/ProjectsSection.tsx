import React, { useState } from "react";
import { PROJECTS_DATA, Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Github, Image as ImageIcon, Sparkles } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/src/components/ui/ScrollReveal";
import { motion } from "motion/react";

interface ProjectsSectionProps {
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section
      id="work"
      className="relative z-20 py-24 bg-hero-bg text-foreground border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Section Header with smooth ScrollReveal */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up" distance={20} delay={0.05}>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.work.eyebrow}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase mb-4">
              {t.work.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={24} delay={0.18}>
            <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed">
              {t.work.subtitle}
            </p>
          </ScrollReveal>
        </div>

        {/* Projects Grid with Stagger animations */}
        <StaggerContainer
          staggerDelay={0.08}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROJECTS_DATA.map((project) => (
            <StaggerItem key={project.id} className="h-full">
              <article className="group relative flex flex-col justify-between h-full p-6 rounded-xl bg-background/50 hover:bg-background/80 border border-white/[0.08] hover:border-primary/50 transition-all duration-300 shadow-xl hover:-translate-y-1">
                <div>
                  
                  {/* Kicker & Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-mono tracking-widest uppercase text-primary/90 font-medium">
                      {project.kicker[lang]}
                    </span>

                    <div className="flex items-center gap-1.5">
                      {project.status === "in-progress" && (
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-amber-500/15 text-amber-400 border border-amber-500/30">
                          {lang === "fr" ? "En cours" : "In progress"}
                        </span>
                      )}

                      {project.featured && (
                        <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-primary/20 text-primary border border-primary/30">
                          Featured
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {/* Project Description */}
                  <p className="text-sm text-muted-foreground font-light leading-relaxed mb-6">
                    {project.description[lang]}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded bg-white/[0.04] text-[11px] text-foreground/75 font-mono"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        <span>{t.work.liveDemo}</span>
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.work.sourceCode}</span>
                    </a>
                  </div>

                  {project.images.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setSelectedImage(project.images[0])}
                      className="p-1.5 rounded-md hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                      title={lang === "fr" ? "Aperçu visuel" : "Preview image"}
                    >
                      <ImageIcon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>

      {/* Image Preview Modal with Motion */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
            className="relative max-w-4xl max-h-[85vh] bg-background border border-white/20 rounded-xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Project preview"
              loading="lazy"
              decoding="async"
              className="max-h-[75vh] w-auto mx-auto object-contain rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                // Try .png if .webp failed, otherwise github fallback
                if (target.src.endsWith(".webp")) {
                  target.src = target.src.replace(/\.webp$/, ".png");
                } else {
                  target.src = `https://raw.githubusercontent.com/roniratsimba/portfolio-v2/main/${selectedImage.replace(
                    /^\//,
                    ""
                  )}`;
                }
              }}
            />
            <div className="flex justify-end p-2">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="px-4 py-2 rounded-md bg-white/10 hover:bg-white/20 text-xs uppercase tracking-wider font-semibold text-foreground transition-all cursor-pointer"
              >
                {lang === "fr" ? "Fermer" : "Close"}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
