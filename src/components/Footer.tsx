import React from "react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-20 py-12 bg-background border-t border-white/[0.08] text-foreground text-xs font-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="font-bold text-primary text-base">R.</span>
          <span className="text-muted-foreground">
            © {new Date().getFullYear()} Roni Ratsimbazafy. {t.footer.rights}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/roniratsimba/portfolio-v2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            GitHub Repo
          </a>
          <a
            href="https://about-roni.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            about-roni.vercel.app
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors font-medium cursor-pointer"
          >
            <span>{t.footer.top}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
