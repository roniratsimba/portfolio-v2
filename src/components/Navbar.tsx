import React from "react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";

interface NavbarProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onOpenContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  onLanguageChange,
}) => {
  const t = TRANSLATIONS[lang];

  const navLinks = [
    { name: t.nav.work, href: "#work" },
    { name: t.nav.engineering, href: "#capabilities" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.contact, href: "#contact" },
  ];

  return (
    <nav
      id="main-navbar"
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-8 lg:px-16 py-5 bg-background/30 backdrop-blur-md border-b border-white/[0.04]"
    >
      {/* Left: Brand Identity */}
      <div className="flex items-center gap-4">
        <a
          id="nav-logo"
          href="#top"
          className="group flex items-center gap-2 text-foreground text-xl font-bold tracking-tight select-none"
        >
          <span className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 flex items-center justify-center font-bold text-primary group-hover:border-primary/50 transition-colors">
            R.
          </span>
        </a>

        {/* Status indicator on desktop */}
        <div className="hidden xl:flex items-center gap-2 pl-3 border-l border-white/10 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span>{t.nav.available}</span>
        </div>
      </div>

      {/* Center: Nav links */}
      <div id="nav-links" className="hidden md:flex items-center gap-7 lg:gap-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xs lg:text-sm text-muted-foreground hover:text-foreground transition-colors uppercase tracking-widest font-medium"
          >
            {link.name}
          </a>
        ))}
      </div>

      {/* Right: Language switch */}
      <div className="flex items-center gap-3">
        {/* Language selector */}
        <div
          id="language-switcher"
          className="flex items-center rounded-lg bg-white/5 border border-white/10 p-1 text-xs"
        >
          <button
            type="button"
            onClick={() => onLanguageChange("fr")}
            className={`px-2 py-1 rounded transition-all font-medium ${
              lang === "fr"
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Français"
          >
            FR
          </button>
          <span className="text-white/20 select-none">/</span>
          <button
            type="button"
            onClick={() => onLanguageChange("en")}
            className={`px-2 py-1 rounded transition-all font-medium ${
              lang === "en"
                ? "bg-primary text-primary-foreground font-semibold shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="English"
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  );
};
