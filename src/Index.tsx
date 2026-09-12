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
import { CustomCursor } from "@/src/components/CustomCursor";
import { Preloader } from "@/src/components/Preloader";
import { AssistantBubble } from "@/src/components/AssistantBubble";
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
      {/* Skiper8 Editorial Preloader */}
      <Preloader lang={lang} />

      {/* Interactive Custom Cursor with Target Morphing */}
      <CustomCursor />

      {/* Floating Navbar */}
      <Navbar
        lang={lang}
        onLanguageChange={setLang}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Hero Section */}
      <HeroSection
        lang={lang}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Core Tech Stack Infinite Slider */}
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

      {/* Contact Section with Phone and Email */}
      <ContactSection lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Assistant Bubble at bottom-right */}
      <AssistantBubble
        lang={lang}
        onOpenContact={() => setIsContactModalOpen(true)}
      />

      {/* Contact Modal with Phone, WhatsApp and Email */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        lang={lang}
      />
    </div>
  );
}
