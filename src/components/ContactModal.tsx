import React, { useState } from "react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Check, Copy, ExternalLink, Github, Mail, Send, X } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  lang,
}) => {
  const t = TRANSLATIONS[lang];
  const [copied, setCopied] = useState(false);
  const email = t.contact.email;

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-hero-bg border border-white/15 p-6 sm:p-8 shadow-2xl text-foreground"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors"
          aria-label={t.contact.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-xs font-mono tracking-widest text-primary uppercase mb-2">
          {t.contact.eyebrow}
        </div>
        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-3">
          {t.contact.title}
        </h3>
        <p className="text-muted-foreground text-sm sm:text-base font-light mb-6">
          {t.contact.description}
        </p>

        {/* Email Box */}
        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3 overflow-hidden">
            <Mail className="w-5 h-5 text-primary shrink-0" />
            <span className="font-mono text-sm sm:text-base text-foreground truncate">
              {email}
            </span>
          </div>

          <button
            type="button"
            onClick={handleCopyEmail}
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium inline-flex items-center gap-1.5 shrink-0 transition-all active:scale-95"
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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={`mailto:${email}?subject=Opportunité%20/%20Prise%20de%20contact`}
            className="w-full sm:w-auto flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-[0.98]"
          >
            <Send className="w-4 h-4" />
            <span>{t.contact.openEmail}</span>
          </a>

          <a
            href="https://github.com/roniratsimba"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/15 text-foreground py-3 px-6 rounded-lg font-semibold text-sm inline-flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};
