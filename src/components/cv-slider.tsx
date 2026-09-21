"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Sparkles, 
  ArrowUpRight, 
  ShieldCheck, 
  Briefcase,
  GraduationCap,
  Code2,
  Layers,
  CheckCircle2,
  Eye,
  Maximize2
} from "lucide-react";
import { Icons } from "@/components/icons";

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
  const [viewMode, setViewMode] = useState<"digital" | "pdf">("digital");
  const [pdfLoaded, setPdfLoaded] = useState(false);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
    };

    const checkHash = () => {
      if (typeof window !== "undefined" && (window.location.hash === "#cv" || window.location.hash === "#resume")) {
        setIsOpen(true);
      }
    };

    window.addEventListener("open-cv-slider", handleOpen);
    window.addEventListener("close-cv-slider", handleClose);
    window.addEventListener("hashchange", checkHash);

    checkHash();

    return () => {
      window.removeEventListener("open-cv-slider", handleOpen);
      window.removeEventListener("close-cv-slider", handleClose);
      window.removeEventListener("hashchange", checkHash);
    };
  }, [handleClose]);

  // Handle ESC key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
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
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in duration-150"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer Panel */}
      <div 
        className="relative z-50 w-full max-w-3xl h-full bg-background border-l border-border shadow-2xl flex flex-col transition-transform duration-200 ease-out animate-in slide-in-from-right"
        role="dialog"
        aria-modal="true"
        aria-label="Curriculum Vitae — Pasindu Piumal"
      >
        {/* Header Bar */}
        <div className="px-4 sm:px-6 py-3.5 border-b border-border bg-card/95 backdrop-blur-md flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="size-9 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
              <FileText className="size-4.5" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h2 className="text-sm sm:text-base font-bold text-foreground leading-tight">
                  Pasindu Piumal
                </h2>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
                  <ShieldCheck className="size-3" />
                  Top Rated
                </span>
              </div>
              <p className="text-[11px] text-muted-foreground leading-tight">
                Curriculum Vitae & Resume • 2026
              </p>
            </div>
          </div>

          {/* Quick Actions & Close Button */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href="/cv.pdf"
              download="Pasindu_Piumal_CV.pdf"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold hover:opacity-90 transition-opacity shadow-xs"
              title="Download official CV PDF"
            >
              <Download className="size-3.5" />
              <span className="hidden sm:inline">PDF</span>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors"
              title="Open raw PDF in new browser tab"
            >
              <Maximize2 className="size-3.5" />
              <span className="hidden sm:inline">Open</span>
            </a>

            <Link
              href="/cv"
              onClick={handleClose}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors"
              title="View full dedicated CV page"
            >
              <ExternalLink className="size-3.5" />
              <span className="hidden sm:inline">Full Page</span>
            </Link>

            <button
              type="button"
              onClick={handleClose}
              className="size-8.5 rounded-xl border border-border bg-background hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              aria-label="Close CV popup"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs (Instant Digital vs PDF Document) */}
        <div className="px-4 sm:px-6 py-2 bg-muted/30 border-b border-border flex items-center justify-between gap-2 shrink-0">
          <div className="inline-flex items-center p-1 rounded-xl bg-muted/60 border border-border/80 text-xs">
            <button
              type="button"
              onClick={() => setViewMode("digital")}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === "digital"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              ⚡ Fast Digital CV
            </button>
            <button
              type="button"
              onClick={() => {
                setViewMode("pdf");
                setPdfLoaded(true);
              }}
              className={`px-3 py-1 rounded-lg font-bold transition-all cursor-pointer ${
                viewMode === "pdf"
                  ? "bg-background text-foreground shadow-xs"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              📄 Raw PDF Embed
            </button>
          </div>

          <span className="text-[11px] text-muted-foreground hidden sm:inline-flex items-center gap-1">
            <Sparkles className="size-3 text-amber-500" />
            Instant 0ms reading
          </span>
        </div>

        {/* Scrollable Drawer Body with overscroll-contain */}
        <div className="flex-1 overflow-y-auto overscroll-contain p-4 sm:p-6 space-y-5">
          {viewMode === "digital" ? (
            <>
              {/* Quick Metrics Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2.5 rounded-xl border border-border bg-card/60">
                  <div className="text-base font-black text-foreground">175+ Projects</div>
                  <div className="text-[10px] text-muted-foreground">Upwork & Fiverr</div>
                </div>
                <div className="p-2.5 rounded-xl border border-border bg-card/60">
                  <div className="text-base font-black text-emerald-700 dark:text-emerald-400">100% JSS</div>
                  <div className="text-[10px] text-muted-foreground">Top Rated Freelancer</div>
                </div>
                <div className="p-2.5 rounded-xl border border-border bg-card/60">
                  <div className="text-base font-black text-amber-800 dark:text-amber-300">100k+ Users</div>
                  <div className="text-[10px] text-muted-foreground">Software Scale</div>
                </div>
                <div className="p-2.5 rounded-xl border border-border bg-card/60">
                  <div className="text-base font-black text-primary">5.0★</div>
                  <div className="text-[10px] text-muted-foreground">Client Rating</div>
                </div>
              </div>

              {/* Quick Hire CTA Toolbar */}
              <div className="p-3 rounded-xl border border-primary/25 bg-primary/5 flex flex-wrap items-center justify-between gap-2.5">
                <div className="text-xs">
                  <span className="font-bold text-foreground">Available for immediate hire: </span>
                  <span className="text-primary font-semibold">hourly or fixed milestones</span>
                </div>
                <div className="flex items-center gap-2">
                  <a
                    href="https://www.upwork.com/freelancers/pasindupiumal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14a800] hover:bg-[#129400] text-white text-xs font-bold transition-opacity"
                  >
                    <Icons.upwork className="size-3.5 fill-current" />
                    <span>Upwork</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                  <a
                    href="https://www.fiverr.com/pasinduxyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-600/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-bold hover:bg-emerald-500/20 transition-colors"
                  >
                    <Icons.fiverr className="size-3 fill-current" />
                    <span>Fiverr (5.0 ★)</span>
                  </a>
                  <Link
                    href="/contact"
                    onClick={handleClose}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-border bg-background hover:bg-muted text-xs font-semibold text-foreground transition-colors"
                  >
                    <span>Direct Message</span>
                  </Link>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-2">
                <div className="font-bold text-foreground text-sm flex items-center gap-2">
                  <Briefcase className="size-4 text-primary" />
                  <span>Professional Summary</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Top Rated Chrome Extension, browser automation, and full-stack SaaS engineer with 100% Upwork Job Success and 175+ delivered projects. Specializes in Manifest V3, React/Next.js, TypeScript, Node.js, AI model integrations (OpenAI GPT-4o, Gemini), browser automation (Playwright/Puppeteer), and commercial SaaS systems. Builds end-to-end products spanning extension UI, background service workers, APIs, authentication, licensing, databases, scraping, and resilient multi-ATS workflows.
                </p>
              </div>

              {/* Core Technical Skills */}
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-3">
                <div className="font-bold text-foreground text-sm flex items-center gap-2">
                  <Code2 className="size-4 text-primary" />
                  <span>Core Technical Skills</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-lg border bg-background/50 space-y-1">
                    <span className="font-bold text-foreground text-[11px]">Browser Extensions (MV3)</span>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      Manifest V3, Service Workers, Side Panel, Content Scripts, chrome.scripting, chrome.storage, MutationObserver, Shadow DOM, React Fiber Synthetic Events.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-background/50 space-y-1">
                    <span className="font-bold text-foreground text-[11px]">Full-Stack & SaaS</span>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      Next.js, React, Node.js, TypeScript, Tailwind CSS, PostgreSQL, Supabase, MongoDB, Stripe, ExtensionPay, REST APIs, WebSockets.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-background/50 space-y-1">
                    <span className="font-bold text-foreground text-[11px]">Automation & Scraping</span>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      Multi-ATS autofill (Ashby, Greenhouse, Lever, Workday), Playwright, Puppeteer, DOM scraping, Google Apps Script, Google Sheets API.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg border bg-background/50 space-y-1">
                    <span className="font-bold text-foreground text-[11px]">AI & Cloud Integrations</span>
                    <p className="text-[11px] text-muted-foreground leading-normal">
                      OpenAI GPT-4o, Gemini API, RAG, Webhooks, Docker, AWS, Vercel, Git/GitHub, Chrome Web Store automated deployment.
                    </p>
                  </div>
                </div>
              </div>

              {/* Work Experience */}
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-3">
                <div className="font-bold text-foreground text-sm flex items-center gap-2">
                  <Layers className="size-4 text-primary" />
                  <span>Work Experience</span>
                </div>
                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-lg border bg-background/50">
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-foreground">Software Engineer — ByteSquadLabs</span>
                      <span className="text-[11px] text-muted-foreground font-mono">2023 - Present</span>
                    </div>
                    <p className="text-muted-foreground mt-1 leading-normal text-[11px]">
                      Architect and build commercial Chrome extensions and full-stack web products using React, Next.js, TypeScript, Node.js, Supabase, and monetization workflows.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border bg-background/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-foreground">Freelance Chrome Extension & Automation Engineer</span>
                        <div className="text-emerald-700 dark:text-emerald-400 font-semibold text-[11px]">
                          Upwork Top Rated (100% JSS)
                        </div>
                      </div>
                      <span className="text-[11px] text-muted-foreground font-mono">2025 - Present</span>
                    </div>
                    <p className="text-muted-foreground mt-1 leading-normal text-[11px]">
                      Delivered 175+ client projects across browser extensions, web scraping, custom ATS form bots, and SaaS integrations with consistent 5-star reviews.
                    </p>
                  </div>

                  <div className="p-3 rounded-lg border bg-background/50">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="font-bold text-foreground">Freelance Browser Developer</span>
                        <div className="text-amber-800 dark:text-amber-300 font-semibold text-[11px]">
                          Fiverr Level Seller (5.0 ★ Rating)
                        </div>
                      </div>
                      <span className="text-[11px] text-muted-foreground font-mono">2025 - Present</span>
                    </div>
                    <p className="text-muted-foreground mt-1 leading-normal text-[11px]">
                      Build custom automation tools, extensions, AI-assisted productivity tools, and business scraping bots for clients worldwide.
                    </p>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="p-4 rounded-xl border border-border bg-card/60 space-y-3">
                <div className="font-bold text-foreground text-sm flex items-center gap-2">
                  <GraduationCap className="size-4 text-primary" />
                  <span>Education & Certifications</span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between items-start p-2.5 rounded-lg border bg-background/50">
                    <div>
                      <div className="font-bold text-foreground">BSc (Hons) in Software Engineering</div>
                      <div className="text-[11px] text-muted-foreground">University of Westminster</div>
                    </div>
                    <span className="text-[11px] text-muted-foreground font-mono">2024 - Present</span>
                  </div>
                  <div className="flex justify-between items-start p-2.5 rounded-lg border bg-background/50">
                    <div>
                      <div className="font-bold text-foreground">Foundation in Software Engineering</div>
                      <div className="text-[11px] text-muted-foreground">Informatics Institute of Technology</div>
                    </div>
                    <span className="text-[11px] text-muted-foreground font-mono">2023 - 2024</span>
                  </div>
                  <div className="flex justify-between items-start p-2.5 rounded-lg border bg-background/50">
                    <div>
                      <div className="font-bold text-foreground">LinkedIn Learning Professional Certifications</div>
                      <div className="text-[11px] text-muted-foreground">React Essential Training • TypeScript Essential Training</div>
                    </div>
                    <span className="text-[11px] text-muted-foreground font-mono">2025</span>
                  </div>
                </div>
              </div>

              {/* Bottom Download Footer */}
              <div className="p-3.5 rounded-xl border border-border bg-muted/30 flex items-center justify-between gap-3 text-xs">
                <span className="text-muted-foreground text-[11px]">
                  Looking for the official signed document?
                </span>
                <a
                  href="/cv.pdf"
                  download="Pasindu_Piumal_CV.pdf"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-bold hover:opacity-90 transition-opacity"
                >
                  <Download className="size-3.5" />
                  <span>Download PDF Copy</span>
                </a>
              </div>
            </>
          ) : (
            /* PDF Mode (Lazy-loaded with safe scroll handling) */
            <div className="space-y-3">
              <div className="p-3 rounded-xl border border-border bg-muted/40 flex items-center justify-between gap-2 text-xs">
                <span className="font-mono text-[11px] text-muted-foreground">
                  Official Document: pasindu-piumal-cv.pdf
                </span>
                <div className="flex items-center gap-2">
                  <a
                    href="/cv.pdf"
                    download="Pasindu_Piumal_CV.pdf"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-primary text-primary-foreground font-bold text-[11px]"
                  >
                    <Download className="size-3" />
                    <span>Download</span>
                  </a>
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-border bg-background hover:bg-muted text-foreground font-medium text-[11px]"
                  >
                    <span>Full Window</span>
                    <ArrowUpRight className="size-3" />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-border overflow-hidden bg-muted/20 shadow-inner">
                {pdfLoaded ? (
                  <iframe
                    src="/cv.pdf#view=FitH&toolbar=0&navpanes=0"
                    className="w-full h-[650px] border-none bg-white"
                    title="Pasindu Piumal CV PDF Document"
                    loading="lazy"
                  />
                ) : (
                  <div className="h-[400px] flex flex-col items-center justify-center p-6 text-center space-y-3">
                    <p className="text-xs text-muted-foreground">
                      Click below to initialize the browser PDF renderer.
                    </p>
                    <button
                      type="button"
                      onClick={() => setPdfLoaded(true)}
                      className="px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs hover:opacity-90 cursor-pointer"
                    >
                      Load PDF Document
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
