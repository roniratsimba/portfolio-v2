import React, { useState } from "react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Check, Copy, Github, Mail, Send, Sparkles } from "lucide-react";
import { ScrollReveal } from "@/src/components/ui/ScrollReveal";

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);
  const email = t.contact.email;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="relative z-20 py-24 bg-hero-bg text-foreground border-b border-white/[0.06]"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ScrollReveal direction="up" distance={20} delay={0.05}>
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.contact.eyebrow}</span>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={24} delay={0.1}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground uppercase mb-4">
            {t.contact.title}
          </h2>
        </ScrollReveal>

        <ScrollReveal direction="up" distance={24} delay={0.18}>
          <p className="text-muted-foreground text-base sm:text-lg font-light leading-relaxed max-w-xl mx-auto mb-10">
            {t.contact.description}
          </p>
        </ScrollReveal>

        {/* Email Copy Card */}
        <ScrollReveal direction="up" distance={24} delay={0.25}>
          <div className="max-w-md mx-auto p-4 rounded-xl bg-background/80 border border-white/10 flex items-center justify-between gap-3 shadow-2xl mb-8 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-3 overflow-hidden">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span className="font-mono text-sm sm:text-base text-foreground truncate">
                {email}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium inline-flex items-center gap-1.5 shrink-0 transition-all active:scale-95 cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary">{t.contact.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{t.contact.copyEmail}</span>
                </>
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* Actions */}
        <ScrollReveal direction="up" distance={20} delay={0.32}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${email}?subject=Prise%20de%20contact`}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-sm font-semibold text-sm inline-flex items-center gap-2 hover:brightness-110 transition-all active:scale-[0.97]"
            >
              <Send className="w-4 h-4" />
              <span>{t.contact.openEmail}</span>
            </a>

            <a
              href="https://github.com/roniratsimba"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 border border-white/10 text-foreground px-8 py-4 rounded-sm font-semibold text-sm inline-flex items-center gap-2 transition-all active:scale-[0.97]"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Profile</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
