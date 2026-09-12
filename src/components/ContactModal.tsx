import React, { useState } from "react";
import { Language, TRANSLATIONS } from "@/src/data/portfolioData";
import { Check, Copy, ExternalLink, Github, Mail, MessageSquare, Phone, Send, X } from "lucide-react";

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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = t.contact.email;
  const phone = t.contact.phone;

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
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
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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

        <div className="space-y-3 mb-6">
          {/* Email Box */}
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 overflow-hidden">
              <Mail className="w-4 h-4 text-primary shrink-0" />
              <span className="font-mono text-xs sm:text-sm text-foreground truncate">
                {email}
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="px-2.5 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium inline-flex items-center gap-1.5 shrink-0 transition-all active:scale-95 cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-primary" />
                  <span className="text-primary text-[11px]">{t.contact.copied}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span className="text-[11px]">{t.contact.copyEmail}</span>
                </>
              )}
            </button>
          </div>

          {/* Phone Box */}
          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <span className="font-mono text-xs sm:text-sm text-foreground truncate">
              {phone}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-3 gap-2">
          <a
            href={`mailto:${email}?subject=Opportunité%20/%20Prise%20de%20contact`}
            className="bg-primary text-primary-foreground py-2.5 px-3 rounded-lg font-semibold text-xs inline-flex items-center justify-center gap-1.5 hover:brightness-110 transition-all active:scale-[0.98]"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Email</span>
          </a>

          <a
            href={t.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-400 py-2.5 px-3 rounded-lg font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>

          <a
            href="https://github.com/roniratsimba"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/15 text-foreground py-2.5 px-3 rounded-lg font-semibold text-xs inline-flex items-center justify-center gap-1.5 transition-all active:scale-[0.98]"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
        </div>
      </div>
    </div>
  );
};
