import React from "react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { HeroBackground } from "@/src/components/HeroBackground";
import { Magnetic } from "@/src/components/core/magnetic";

interface HeroSectionProps {
  lang: Language;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  lang,
  onOpenContact,
}) => {
  const t = TRANSLATIONS[lang];

  const scrollToWork = () => {
    const el = document.getElementById("work");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden hero select-none"
    >
      {/* High-Performance Canvas Background (0 external network dependencies, 60fps) */}
      <HeroBackground />

      {/* Dark overlay pour garantir un contraste parfait du texte */}
      <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-black/30 to-black/50 z-[1] pointer-events-none" />

      {/* Conteneur de contenu Hero avec animations fluides JS via motion/react */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative z-10 pointer-events-none w-full max-w-[92%] sm:max-w-xl lg:max-w-3xl px-6 md:px-12 lg:px-16 pb-12 md:pb-16 pt-32"
      >
        {/* Eyebrow / Kicker badge */}
        <motion.div
          variants={itemVariants}
          id="hero-eyebrow"
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.08] border border-white/10 backdrop-blur-md text-xs uppercase tracking-widest text-muted-foreground mb-4 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="font-semibold text-foreground/90">{t.hero.badge}</span>
        </motion.div>

        {/* Heading principal - typographie fluide */}
        <motion.h1
          variants={itemVariants}
          id="hero-title"
          className="text-[clamp(2rem,5vw,4rem)] font-extrabold leading-[1.03] tracking-[-0.04em] text-foreground mb-3 md:mb-5 uppercase"
        >
          {t.hero.titleMain}
          <span className="text-primary">{t.hero.titleAccent}</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          id="hero-subheading"
          className="text-foreground/90 text-[clamp(1.125rem,2.2vw,1.75rem)] font-light tracking-tight mb-3 md:mb-5"
        >
          {t.hero.subheading}
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          id="hero-description"
          className="text-muted-foreground text-[clamp(0.875rem,1.4vw,1.15rem)] font-light leading-relaxed mb-6 md:mb-8 max-w-2xl"
        >
          {t.hero.description}
        </motion.p>

        {/* Boutons d'action CTA avec pointer-events-auto */}
        <motion.div
          variants={itemVariants}
          id="hero-cta-group"
          className="flex flex-wrap items-center gap-3.5 font-bold"
        >
          {/* Primary CTA: Voir les projets */}
          <button
            id="hero-view-work-btn"
            type="button"
            onClick={scrollToWork}
            className="pointer-events-auto bg-primary text-primary-foreground px-6 py-3.5 md:px-8 md:py-4 text-sm font-semibold rounded-sm cursor-pointer hover:brightness-110 transition-all active:scale-[0.97] inline-flex items-center gap-2 shadow-lg shadow-primary/20"
          >
            <span>{t.hero.ctaWork}</span>
            <ArrowDown className="w-4 h-4" />
          </button>

          {/* Secondary CTA: Télécharger CV */}
          <Magnetic>
            <a
              id="hero-download-cv-btn"
              href="/CV_Roni_Ratsimbazafy.pdf"
              download="CV_Roni_Ratsimbazafy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="pointer-events-auto bg-white text-background px-6 py-3.5 md:px-8 md:py-4 text-sm font-semibold rounded-sm cursor-pointer hover:brightness-90 transition-all active:scale-[0.97] inline-flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-background" />
              <span>{t.hero.ctaCv}</span>
            </a>
          </Magnetic>

          {/* Contact shortcut */}
          <button
            id="hero-contact-trigger-btn"
            type="button"
            onClick={onOpenContact}
            className="pointer-events-auto text-foreground/80 hover:text-foreground bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-3.5 md:py-4 text-sm font-medium rounded-sm cursor-pointer transition-all active:scale-[0.97]"
          >
            {t.hero.ctaContact}
          </button>
        </motion.div>

        {/* Ligne de réassurance / trust */}
        <motion.p
          variants={itemVariants}
          id="hero-trust-line"
          className="text-muted-foreground/75 text-xs sm:text-sm font-light mt-5 md:mt-8 flex flex-wrap items-center gap-2"
        >
          <span>{t.hero.trust}</span>
        </motion.p>
      </motion.div>

      {/* Floating Aside Profile Card (Desktop only, positioned bottom-right with Roni's photo) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
        className="hidden xl:flex absolute bottom-12 right-12 z-20 pointer-events-auto flex-col items-end gap-3 max-w-xs"
      >
        <div className="p-4 rounded-xl bg-background/70 backdrop-blur-xl border border-white/10 shadow-2xl flex items-center gap-4 group hover:border-primary/40 transition-all">
          <div className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/15 shrink-0">
            <picture>
              <source srcSet="/images/me/moi.webp" type="image/webp" />
              <img
                src="/images/me/moi.jpeg"
                alt="Roni Ratsimba"
                width={64}
                height={64}
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://raw.githubusercontent.com/roniratsimba/portfolio-v2/main/images/me/moi.jpeg";
                }}
              />
            </picture>
            <span className="absolute bottom-1 right-1 w-2.5 h-2.5 rounded-full bg-primary ring-2 ring-background"></span>
          </div>

          <div className="text-left">
            <div className="flex items-center gap-1.5 text-xs text-primary font-mono font-medium">
              <Sparkles className="w-3 h-3" />
              <span>{lang === "fr" ? "PROFIL" : "PROFILE"}</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">
              Roni Ratsimbazafy
            </h4>
            <p className="text-xs text-muted-foreground line-clamp-2 mt-0.5">
              {t.hero.asideNote}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
