import React from "react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Download, MapPin, GraduationCap, Target, UserCheck } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/src/components/ui/ScrollReveal";
import { Magnetic } from "@/src/components/core/magnetic";
import { BlurHighlightAnimatedParagraph } from "@/src/components/ui/BlurHighlightAnimatedParagraph";

interface AboutSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  lang,
  onOpenContact,
}) => {
  const t = TRANSLATIONS[lang];

  return (
    <section
      id="about"
      className="relative z-20 py-24 bg-background text-foreground border-b border-white/[0.06]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Portrait */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up" distance={20} delay={0.05}>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
                <UserCheck className="w-3.5 h-3.5" />
                <span>{t.about.eyebrow}</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" distance={24} delay={0.1}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground uppercase mb-8 leading-tight">
                <span>{t.about.title1}</span>
                <br />
                <span className="text-primary">{t.about.title2}</span>
              </h2>
            </ScrollReveal>

            {/* Portrait Card */}
            <ScrollReveal direction="up" distance={30} delay={0.2}>
              <div className="relative group max-w-sm rounded-2xl overflow-hidden border border-white/10 bg-hero-bg shadow-2xl p-2">
                <div className="relative aspect-4/5 rounded-xl overflow-hidden">
                  <picture>
                    <source srcSet="/images/me/moi.webp" type="image/webp" />
                    <img
                      src="/images/me/moi.jpeg"
                      alt="Roni Ratsimba"
                      width={400}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover object-center grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          "https://raw.githubusercontent.com/roniratsimba/portfolio-v2/main/images/me/moi.jpeg";
                      }}
                    />
                  </picture>
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-xs uppercase font-mono tracking-widest text-primary font-semibold">
                      Roni Ratsimbazafy
                    </p>
                    <p className="text-sm font-light text-foreground/90">
                      Full-Stack Engineer & Product Builder
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio Copy & Details */}
          <div className="lg:col-span-7 space-y-6 pt-2">
            <BlurHighlightAnimatedParagraph
              highlightedBits={["Roni"]}
              highlightColor="hsl(119, 99%, 44%, 0.3)"
              highlightDirection="right"
              highlightDelay={0.4}
              highlightDuration={1}
              blurAmount={8}
              inactiveOpacity={0.3}
              blurDelay={0}
              blurDuration={0.8}
              viewportOptions={{ once: false, amount: 0.5 }}
              className="text-xl sm:text-2xl font-light text-foreground/90 leading-relaxed"
            >
              {t.about.lead}
            </BlurHighlightAnimatedParagraph>

            <BlurHighlightAnimatedParagraph
              highlightedBits={["Symfony", "React", "TypeScript", "PostgreSQL"]}
              highlightColor="hsl(119, 99%, 44%, 0.3)"
              highlightDirection="right"
              highlightDelay={0.4}
              highlightDuration={1}
              blurAmount={8}
              inactiveOpacity={0.3}
              blurDelay={0}
              blurDuration={0.8}
              viewportOptions={{ once: false, amount: 0.5 }}
              className="text-muted-foreground font-light text-base sm:text-lg leading-relaxed"
            >
              {t.about.p1}
            </BlurHighlightAnimatedParagraph>

            <BlurHighlightAnimatedParagraph
              highlightedBits={["ingénierie logicielle approfondie", "software craftsmanship"]}
              highlightColor="hsl(119, 99%, 44%, 0.3)"
              highlightDirection="right"
              highlightDelay={0.4}
              highlightDuration={1}
              blurAmount={8}
              inactiveOpacity={0.3}
              blurDelay={0}
              blurDuration={0.8}
              viewportOptions={{ once: false, amount: 0.5 }}
              className="text-muted-foreground font-light text-base sm:text-lg leading-relaxed"
            >
              {t.about.p2}
            </BlurHighlightAnimatedParagraph>

            {/* Key Facts / Details grid */}
            <StaggerContainer
              staggerDelay={0.08}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/[0.08]"
            >
              <StaggerItem>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{t.about.location}</span>
                  </div>
                  <strong className="text-sm font-semibold text-foreground">
                    {t.about.locationValue}
                  </strong>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <Target className="w-3.5 h-3.5 text-primary" />
                    <span>{t.about.focus}</span>
                  </div>
                  <strong className="text-sm font-semibold text-foreground">
                    {t.about.focusValue}
                  </strong>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.06] hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                    <GraduationCap className="w-3.5 h-3.5 text-primary" />
                    <span>{t.about.education}</span>
                  </div>
                  <strong className="text-sm font-semibold text-foreground">
                    {t.about.educationValue}
                  </strong>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* CTAs */}
            <ScrollReveal direction="up" distance={20} delay={0.35}>
              <div className="pt-6 flex flex-wrap items-center gap-4">
                <Magnetic>
                  <a
                    href="/CV_Roni_Ratsimbazafy.pdf"
                    download="CV_Roni_Ratsimbazafy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-background px-6 py-3 rounded-sm font-semibold text-sm inline-flex items-center gap-2 hover:brightness-90 transition-all active:scale-[0.97]"
                  >
                    <Download className="w-4 h-4" />
                    <span>{t.hero.ctaCv}</span>
                  </a>
                </Magnetic>

                <button
                  type="button"
                  onClick={onOpenContact}
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-sm font-semibold text-sm hover:brightness-110 transition-all active:scale-[0.97] cursor-pointer"
                >
                  {t.hero.ctaContact}
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
