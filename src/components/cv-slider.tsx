"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Briefcase
} from "lucide-react";

export function openCVSlider() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-cv-slider"));
  }
}

export function closeCVSlider() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("close-cv-slider"));
  }
}

export default function CVSlider() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const checkHash = () => {
      if (window.location.hash === "#cv" || window.location.hash === "#resume") {
        setIsOpen(true);
      }
    };

    window.addEventListener("open-cv-slider", handleOpen);
    window.addEventListener("close-cv-slider", handleClose);
    window.addEventListener("hashchange", checkHash);

    // Initial hash check
    checkHash();

    return () => {
      window.removeEventListener("open-cv-slider", handleOpen);
      window.removeEventListener("close-cv-slider", handleClose);
      window.removeEventListener("hashchange", checkHash);
    };
  }, []);

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-200"
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div 
        className="relative z-50 w-full max-w-3xl h-full bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-300 ease-out animate-in slide-in-from-right"
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum Vitae — Pasindu Piumal"
      >
        {/* Header Bar */}
        <div className="px-5 py-4 border-b border-border/70 bg-card/90 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <FileText className="size-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold text-foreground">
                  Pasindu Piumal
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                  <ShieldCheck className="size-3" />
                  Top Rated
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Curriculum Vitae (CV) & Resume • 2026
              </p>
            </div>
          </div>

          {/* Quick Actions & Close Button */}
          <div className="flex items-center gap-2">
            <a
              href="/cv.pdf"
              download="Pasindu_Piumal_CV.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity shadow-xs"
              title="Download CV as PDF"
            >
              <Download className="size-3.5" />
              <span className="hidden sm:inline">Download PDF</span>
            </a>

            <Link
              href="/cv"
              onClick={() => setIsOpen(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors"
              title="View full dedicated CV page"
            >
              <ExternalLink className="size-3.5" />
              <span className="hidden sm:inline">Full Page</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="size-9 rounded-xl border border-border bg-background hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close CV slider"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Drawer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Quick Stats Banner */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
            <div className="p-2.5 rounded-xl border bg-muted/30">
              <div className="text-sm font-bold text-foreground">175+ Projects</div>
              <div className="text-[10px] text-muted-foreground">Delivered Track Record</div>
            </div>
            <div className="p-2.5 rounded-xl border bg-muted/30">
              <div className="text-sm font-bold text-emerald-700 dark:text-emerald-400">100% JSS</div>
              <div className="text-[10px] text-muted-foreground">Upwork Top Rated</div>
            </div>
            <div className="p-2.5 rounded-xl border bg-muted/30">
              <div className="text-sm font-bold text-amber-800 dark:text-amber-300">Manifest V3</div>
              <div className="text-[10px] text-muted-foreground">Specialist Expertise</div>
            </div>
            <div className="p-2.5 rounded-xl border bg-muted/30">
              <div className="text-sm font-bold text-primary">Uni of Westminster</div>
              <div className="text-[10px] text-muted-foreground">BSc Software Eng</div>
            </div>
          </div>

          {/* Quick Hire CTA Toolbar */}
          <div className="p-3 rounded-xl border border-primary/20 bg-primary/5 flex flex-wrap items-center justify-between gap-2.5">
            <div className="text-xs">
              <span className="font-bold text-foreground">Available for contract & full-time roles: </span>
              <span className="text-primary font-semibold">$20/hr tracked or fixed milestones</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.upwork.com/freelancers/pasindupiumal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity"
              >
                <span>Upwork Profile</span>
                <ArrowUpRight className="size-3" />
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center gap-1 px-3 py-1 rounded-lg border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors"
              >
                <span>Contact Direct</span>
              </Link>
            </div>
          </div>

          {/* Embedded Interactive PDF Viewer */}
          <div className="rounded-2xl border border-border overflow-hidden bg-muted/20 shadow-lg relative min-h-[500px] flex flex-col">
            <div className="px-4 py-2 bg-muted/40 border-b border-border/60 flex items-center justify-between text-xs text-muted-foreground">
              <span className="font-mono text-[11px]">pasindu-piumal-cv.pdf</span>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors inline-flex items-center gap-1 text-[11px]"
              >
                <span>Open in Native Viewer</span>
                <ArrowUpRight className="size-3" />
              </a>
            </div>
            
            <iframe
              src="/cv.pdf#view=FitH&toolbar=0&navpanes=0"
              className="w-full flex-1 min-h-[600px] border-none"
              title="Pasindu Piumal CV Preview"
            />
          </div>

          {/* Text Summary Fallback & Details for Mobile / Search */}
          <div className="p-4 rounded-xl border border-border bg-card/50 space-y-3 text-xs text-muted-foreground">
            <div className="font-bold text-foreground text-sm flex items-center gap-2">
              <Briefcase className="size-4 text-primary" />
              <span>Core Specializations</span>
            </div>
            <p className="leading-relaxed">
              <strong>Browser Extensions:</strong> Manifest V3, Chrome APIs, Background Service Workers, Side Panel, Content Scripts, DOM MutationObserver, Shadow DOM, React Fiber Synthetic Events.
            </p>
            <p className="leading-relaxed">
              <strong>Full-Stack & Cloud:</strong> Next.js, React, Node.js, TypeScript, Supabase, PostgreSQL, MongoDB, Stripe, ExtensionPay, Docker, AWS, Vercel.
            </p>
            <div className="pt-2 flex items-center justify-between border-t border-border/50">
              <span className="text-[11px]">University of Westminster • BSc (Hons) Software Engineering</span>
              <a 
                href="/cv.pdf" 
                download="Pasindu_Piumal_CV.pdf"
                className="text-primary font-bold hover:underline inline-flex items-center gap-1 text-[11px]"
              >
                <span>Download Official Copy (PDF)</span>
                <Download className="size-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
