import React, { useState, useEffect } from "react";
import { Navbar } from "@/src/components/Navbar";
import { HeroSection } from "@/src/components/HeroSection";
import { TechStrip } from "@/src/components/TechStrip";
import { ProjectsSection } from "@/src/components/ProjectsSection";
import { CapabilitiesSection } from "@/src/components/CapabilitiesSection";
import { ExperienceSection } from "@/src/components/ExperienceSection";
import { AboutSection } from "@/src/components/AboutSection";
import { ContactSection } from "@/src/components/ContactSection";
import { Footer } from "@/src/components/Footer";
import { ContactModal } from "@/src/components/ContactModal";
import { Language } from "@/src/data/portfolioData";

export default function Index() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("roro-language");
    return saved === "en" || saved === "fr" ? saved : "fr";
  });

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("roro-language", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="bg-hero-bg min-h-screen text-foreground font-sora selection:bg-primary selection:text-primary-foreground">
      {/* Floating Navbar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Hero Section (with Spline 3D Scene background and adapted portfolio content) */}
      <HeroSection
        lang={lang}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Tech Stack Strip */}
      <TechStrip lang={lang} />

      {/* Projects Section */}
      <ProjectsSection lang={lang} />

      {/* Engineering / Capabilities Section */}
      <CapabilitiesSection lang={lang} />

      {/* Experience Section */}
      <ExperienceSection lang={lang} />

      {/* About Section */}
      <AboutSection
        lang={lang}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Contact Section */}
      <ContactSection lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
