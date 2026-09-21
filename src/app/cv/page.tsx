import type { Metadata } from "next";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { 
  ChevronLeft, 
  Download, 
  ExternalLink, 
  FileText, 
  ShieldCheck, 
  Sparkles, 
  ArrowUpRight, 
  GraduationCap, 
  Briefcase, 
  CheckCircle2, 
  Layers, 
  Code2, 
  Cpu
} from "lucide-react";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Pasindu Piumal — Curriculum Vitae (CV) & Resume",
  description:
    "Official Curriculum Vitae and Resume of Pasindu Piumal — Top Rated Freelance Chrome Extension Developer, Browser Automation Expert, and Full-Stack SaaS Engineer.",
  alternates: {
    canonical: "/cv",
  },
  openGraph: {
    title: "Pasindu Piumal — Curriculum Vitae (CV) & Resume",
    description:
      "Official Curriculum Vitae and Resume of Pasindu Piumal — Top Rated Freelance Chrome Extension Developer, Browser Automation Expert, and Full-Stack SaaS Engineer.",
    url: `${DATA.url}/cv`,
    type: "profile",
    images: [
      {
        url: `${DATA.url}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Pasindu Piumal — CV & Resume",
      },
    ],
  },
  twitter: {
    title: "Pasindu Piumal — Curriculum Vitae (CV) & Resume",
    description:
      "Official Curriculum Vitae and Resume of Pasindu Piumal — Top Rated Freelance Chrome Extension Developer, Browser Automation Expert, and Full-Stack SaaS Engineer.",
    card: "summary_large_image",
    creator: "@pasindupiumal03",
    images: [`${DATA.url}/og-image.jpg`],
  },
};

const cvJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${DATA.url}/cv#webpage`,
      url: `${DATA.url}/cv`,
      name: "Pasindu Piumal — Curriculum Vitae (CV) & Resume",
      description: "Official Curriculum Vitae and Resume of Pasindu Piumal.",
      about: {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: DATA.name,
        jobTitle: "Freelance Chrome Extension Developer & Full-Stack SaaS Engineer",
        url: DATA.url,
        email: DATA.contact.email,
        telephone: DATA.contact.tel,
        sameAs: [
          DATA.contact.social.LinkedIn.url,
          DATA.contact.social.GitHub.url,
          DATA.contact.social.Upwork.url,
          DATA.contact.social.Fiverr.url,
          DATA.contact.social.Contra.url,
        ],
      },
    },
    {
      "@type": "DigitalDocument",
      "@id": `${DATA.url}/cv.pdf#document`,
      name: "Pasindu Piumal Curriculum Vitae (CV)",
      url: `${DATA.url}/cv.pdf`,
      encodingFormat: "application/pdf",
      author: {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: DATA.name,
      },
    },
  ],
};

export default function CVPage() {
  return (
    <main className="relative min-h-screen py-10 pb-28 px-4 sm:px-6">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(cvJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary/8 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Top Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground border-b border-border/50 pb-4">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-background/80 hover:bg-muted font-medium text-foreground transition-colors group shadow-2xs"
          >
            <ChevronLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              <span className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Official Verified CV
            </span>
          </div>
        </div>

        {/* CV Header Hero */}
        <header className="space-y-4 text-left">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold bg-primary/10 text-primary border border-primary/20">
              <Sparkles className="size-3" />
              Curriculum Vitae • 2026 Edition
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20">
              <ShieldCheck className="size-3" />
              Top Rated • 100% Upwork JSS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Pasindu Piumal
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Chrome Extension • Browser Automation • Full-Stack SaaS Engineer
          </p>

          <p className="text-xs sm:text-sm text-foreground/80 dark:text-muted-foreground leading-relaxed max-w-2xl">
            Top Rated engineer specializing in Manifest V3 extensions, React/Next.js, TypeScript, OpenAI/Gemini AI integrations, multi-ATS form automation, and production SaaS architecture. 175+ projects delivered with 100% Job Success.
          </p>

          {/* Action Toolbar */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            <a
              href="/cv.pdf"
              download="Pasindu_Piumal_CV.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-xs sm:text-sm font-bold shadow-md hover:opacity-90 transition-all hover:shadow-lg"
            >
              <Download className="size-4" />
              <span>Download CV (PDF)</span>
            </a>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-border bg-background hover:bg-muted text-xs sm:text-sm font-semibold text-foreground transition-colors shadow-2xs"
            >
              <ExternalLink className="size-3.5" />
              <span>Open Raw PDF</span>
            </a>

            <a
              href="https://www.upwork.com/freelancers/pasindupiumal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#14a800] hover:bg-[#129400] text-white text-xs sm:text-sm font-bold shadow-xs transition-opacity"
            >
              <Icons.upwork className="size-4 fill-current" />
              <span>Hire Me on Upwork</span>
              <ArrowUpRight className="size-3.5" />
            </a>

            <a
              href="https://www.fiverr.com/pasinduxyz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border border-emerald-600/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-bold hover:bg-emerald-500/20 transition-colors"
            >
              <Icons.fiverr className="size-3.5 fill-current" />
              <span>Fiverr Profile (5.0 ★)</span>
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border bg-muted/40 hover:bg-muted text-xs sm:text-sm font-medium text-foreground transition-colors"
            >
              <span>Direct Inquiry</span>
            </Link>
          </div>
        </header>

        {/* Quick Highlights Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <div className="p-3.5 rounded-2xl border border-border bg-card/60 backdrop-blur-xs text-left">
            <div className="text-xl sm:text-2xl font-black text-foreground">175+</div>
            <div className="text-xs font-semibold text-foreground/80 mt-0.5">Projects Delivered</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Upwork & Fiverr verified</div>
          </div>
          <div className="p-3.5 rounded-2xl border border-border bg-card/60 backdrop-blur-xs text-left">
            <div className="text-xl sm:text-2xl font-black text-emerald-700 dark:text-emerald-400">100%</div>
            <div className="text-xs font-semibold text-foreground/80 mt-0.5">Job Success Score</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Top Rated on Upwork</div>
          </div>
          <div className="p-3.5 rounded-2xl border border-border bg-card/60 backdrop-blur-xs text-left">
            <div className="text-xl sm:text-2xl font-black text-amber-800 dark:text-amber-300">100k+</div>
            <div className="text-xs font-semibold text-foreground/80 mt-0.5">Peak Product Users</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">$1M+ software revenue</div>
          </div>
          <div className="p-3.5 rounded-2xl border border-border bg-card/60 backdrop-blur-xs text-left">
            <div className="text-xl sm:text-2xl font-black text-primary">5.0★</div>
            <div className="text-xs font-semibold text-foreground/80 mt-0.5">Client Rating</div>
            <div className="text-[10px] text-muted-foreground mt-0.5">Across all platforms</div>
          </div>
        </div>

        {/* High-Resolution Embedded PDF Viewer Container */}
        <section aria-label="Curriculum Vitae PDF Preview" className="space-y-3">
          <div className="rounded-2xl overflow-hidden border border-border bg-zinc-950 shadow-2xl">
            {/* Window control bar */}
            <div className="px-4 py-3 bg-zinc-900 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-yellow-500/80 inline-block" />
                <span className="size-2.5 rounded-full bg-green-500/80 inline-block" />
                <span className="text-[11px] font-mono text-zinc-300 ml-2">pasindu-piumal-cv.pdf</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/cv.pdf"
                  download="Pasindu_Piumal_CV.pdf"
                  className="text-zinc-300 hover:text-white inline-flex items-center gap-1 text-[11px] font-medium transition-colors"
                >
                  <Download className="size-3" />
                  <span>Download</span>
                </a>
                <span className="text-zinc-600">|</span>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white inline-flex items-center gap-1 text-[11px] font-medium transition-colors"
                >
                  <span>Fullscreen</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>

            {/* Inline PDF rendering */}
            <div className="p-1 sm:p-3 bg-zinc-900/60 flex flex-col items-center">
              <iframe
                src="/cv.pdf#view=FitH&toolbar=1&navpanes=0"
                className="w-full h-[850px] sm:h-[1050px] rounded-xl border border-zinc-800 bg-white"
                title="Pasindu Piumal Curriculum Vitae Preview"
              />
            </div>
          </div>
        </section>

        {/* Full Text Transcript for Accessibility and SEO */}
        <section aria-label="CV Transcript & Details" className="space-y-6 pt-6 border-t border-border">
          <div className="space-y-1">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              CV Transcript & Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Direct text version of Pasindu Piumal&apos;s Curriculum Vitae for assistive devices and fast reading.
            </p>
          </div>

          <div className="space-y-6 p-6 rounded-2xl border border-border bg-card/40 text-left text-sm leading-relaxed">
            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <Briefcase className="size-4 text-primary" />
                <span>Professional Summary</span>
              </h3>
              <p className="text-foreground/90 dark:text-muted-foreground">
                Top Rated Chrome Extension, browser automation and full-stack SaaS engineer with 100% Upwork Job Success and 175+ delivered projects. Specializes in Manifest V3, React/Next.js, TypeScript, MERN/Node.js, AI integrations, browser automation and production SaaS. Builds end-to-end products spanning extension UI, background/service-worker logic, APIs, authentication, databases, subscriptions, dashboards, scraping and resilient automation across third-party web apps.
              </p>
            </div>

            {/* Core Skills */}
            <div className="space-y-3 pt-3 border-t border-border/60">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <Code2 className="size-4 text-primary" />
                <span>Core Skills</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-xl border bg-background/50 space-y-1">
                  <div className="font-bold text-foreground">Browser Extensions</div>
                  <p className="text-muted-foreground">
                    Manifest V3, Chrome Extension APIs, Content Scripts, Background Service Workers, Side Panel, chrome.scripting, chrome.storage, chrome.identity, Main/Isolated World execution, DOM Manipulation, MutationObserver, Shadow DOM, cross-browser Chrome/Edge workflows.
                  </p>
                </div>
                <div className="p-3 rounded-xl border bg-background/50 space-y-1">
                  <div className="font-bold text-foreground">Full-Stack & MERN</div>
                  <p className="text-muted-foreground">
                    MERN Stack (MongoDB, Express.js, React, Node.js), React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, REST APIs, WebSockets, SaaS architecture, authentication, OAuth/JWT, subscription and licensing flows.
                  </p>
                </div>
                <div className="p-3 rounded-xl border bg-background/50 space-y-1">
                  <div className="font-bold text-foreground">Automation & Data Extraction</div>
                  <p className="text-muted-foreground">
                    Playwright, Puppeteer, Browser Automation, Web Scraping, Data Extraction, form/workflow automation, real-time monitoring, API/network integration, multi-ATS automation, Google APIs, Google Apps Script, Google Sheets API.
                  </p>
                </div>
                <div className="p-3 rounded-xl border bg-background/50 space-y-1">
                  <div className="font-bold text-foreground">AI, Cloud & Infrastructure</div>
                  <p className="text-muted-foreground">
                    OpenAI API (GPT-4o), Gemini API, RAG, AI model integration, MongoDB, Firebase/Firestore, Supabase, Stripe, ExtensionPay, Python, Git, GitHub, Docker, AWS, Vercel.
                  </p>
                </div>
              </div>
            </div>

            {/* Professional Experience */}
            <div className="space-y-3 pt-3 border-t border-border/60">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <Layers className="size-4 text-primary" />
                <span>Professional Experience</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl border bg-background/50">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-foreground text-sm">Software Engineer — ByteSquadLabs</span>
                    <span className="text-muted-foreground">2023 - Present</span>
                  </div>
                  <p className="text-muted-foreground mt-1">
                    Develop Chrome extension and full-stack web products using React, Next.js, TypeScript, Node.js, APIs, authentication, databases and SaaS workflows.
                  </p>
                </div>
                <div className="p-3 rounded-xl border bg-background/50">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-foreground text-sm">Freelance Chrome Extension & SaaS Developer — Upwork</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">Top Rated (100% JSS) • 2025 - Present</span>
                  </div>
                  <p className="text-muted-foreground mt-1">
                    Focused on Manifest V3, browser automation, AI extensions, real-time monitoring, scraping, SaaS dashboards and third-party integrations across 175+ delivered projects.
                  </p>
                </div>
                <div className="p-3 rounded-xl border bg-background/50">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-foreground text-sm">Freelance Browser Automation Developer — Fiverr</span>
                    <span className="text-amber-800 dark:text-amber-300 font-semibold">5.0 ★ Rating • 2025 - Present</span>
                  </div>
                  <p className="text-muted-foreground mt-1">
                    Build custom Chrome extensions, browser automation tools, AI integrations, scraping/data workflows and SaaS-connected products for international clientele.
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Projects */}
            <div className="space-y-3 pt-3 border-t border-border/60">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <Sparkles className="size-4 text-primary" />
                <span>Selected Projects</span>
              </h3>
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl border bg-background/50 space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <span className="font-bold text-foreground text-sm">Tech Copilot</span>
                    <span className="text-muted-foreground font-mono text-[11px]">Manifest V3, OpenAI, Gemini RAG, ExtensionPay</span>
                  </div>
                  <p className="text-muted-foreground leading-normal">
                    Live automotive AI copilot for technicians that works alongside OEM manuals and service systems. It helps decode VIN context, capture/reference technical content, surface service/TSB information, explain repair steps and stream AI diagnostic guidance inside Chrome/Edge. Built through six paid Upwork milestones worth $1,875+ with a 5.0 client review, plus usage-based free trial and subscription gating.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-primary">
                    <a href="https://www.techaicopilot.com/how-it-works" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                      <span>Live Product</span>
                      <ExternalLink className="size-3" />
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <Link href="/projects/tech-copilot" className="hover:underline">
                      Case Study
                    </Link>
                  </div>
                </div>

                <div className="p-3 rounded-xl border bg-background/50 space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <span className="font-bold text-foreground text-sm">RoboApply & Sociax</span>
                    <span className="text-muted-foreground font-mono text-[11px]">Multi-ATS Automation, OpenAI, Browser Automation</span>
                  </div>
                  <p className="text-muted-foreground leading-normal">
                    AI-powered job application automation that fills and submits applications across Greenhouse, Workable, Ashby, Workday and Oracle, handles resume uploads, and supports AI-generated resumes/cover letters. Delivered RoboApply&apos;s first working Ashby integration in one week after 20+ previous developer attempts, then expanded the working multi-ATS system.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-primary">
                    <Link href="/projects/roboapply-ats-automation" className="hover:underline">
                      Case Study
                    </Link>
                    <span className="text-muted-foreground">•</span>
                    <Link href="/projects" className="hover:underline">
                      All Projects
                    </Link>
                  </div>
                </div>

                <div className="p-3 rounded-xl border bg-background/50 space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <span className="font-bold text-foreground text-sm">Amazon Shift Sniper Series</span>
                    <span className="text-muted-foreground font-mono text-[11px]">Manifest V3, Real-Time Monitoring, DOM/Session Automation</span>
                  </div>
                  <p className="text-muted-foreground leading-normal">
                    Series of six production extensions for Amazon hiring and scheduling workflows: sub-second shift detection and booking, OTP capture, real-time slot analytics, multi-profile synchronization, session-aware execution and automatic recovery from broken states. Used Main/Isolated World execution, MutationObserver, Shadow DOM traversal, persistent MV3 runtime patterns and 403/session recovery for long-running reliability.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-primary">
                    <Link href="/projects/amazon-shift-sniper" className="hover:underline">
                      Case Study
                    </Link>
                    <span className="text-muted-foreground">•</span>
                    <a href="https://www.upwork.com/freelancers/pasindupiumal?p=2062560822872154112" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                      <span>Verified Upwork Contract</span>
                      <ExternalLink className="size-3" />
                    </a>
                  </div>
                </div>

                <div className="p-3 rounded-xl border bg-background/50 space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <span className="font-bold text-foreground text-sm">SiteSafety Shield</span>
                    <span className="text-muted-foreground font-mono text-[11px]">Manifest V3, Google Safe Browsing, VirusTotal, PhishTank</span>
                  </div>
                  <p className="text-muted-foreground leading-normal">
                    Client browser-security extension built in 2023 through ByteSquad Labs. Checks URLs against multiple threat-intelligence sources, applies configurable risk scoring and local caching, and warns or blocks users before proceeding to known phishing, malware or scam pages.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-primary">
                    <Link href="/projects/sitesafety-shield-extension" className="hover:underline">
                      Case Study
                    </Link>
                  </div>
                </div>

                <div className="p-3 rounded-xl border bg-background/50 space-y-1.5">
                  <div className="flex flex-wrap justify-between items-baseline gap-1">
                    <span className="font-bold text-foreground text-sm">High-Scale Chrome Extension + SaaS (EliteFutBot)</span>
                    <span className="text-muted-foreground font-mono text-[11px]">Next.js, Supabase/PostgreSQL, Stripe, Browser Automation</span>
                  </div>
                  <p className="text-muted-foreground leading-normal">
                    Engineered a commercial browser-automation product as a complete extension + SaaS platform: Manifest V3 client, Next.js dashboard, Supabase/PostgreSQL backend, Stripe subscriptions, licensing and real-time automation. The public portfolio case study reports 100K+ users and $1M+ software revenue, demonstrating product architecture beyond a standalone extension.
                  </p>
                  <div className="flex flex-wrap items-center gap-3 pt-1 text-[11px] text-primary">
                    <a href="https://elitefutbot.com" target="_blank" rel="noopener noreferrer" className="hover:underline inline-flex items-center gap-1">
                      <span>Live Product</span>
                      <ExternalLink className="size-3" />
                    </a>
                    <span className="text-muted-foreground">•</span>
                    <Link href="/projects/fut-snipe-bot" className="hover:underline">
                      Case Study
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Education & Certifications */}
            <div className="space-y-3 pt-3 border-t border-border/60">
              <h3 className="text-base font-bold text-foreground flex items-center gap-2">
                <GraduationCap className="size-4 text-primary" />
                <span>Education & Certifications</span>
              </h3>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-start p-2.5 rounded-lg border bg-background/50">
                  <div>
                    <div className="font-bold text-foreground">BSc (Hons) in Software Engineering</div>
                    <div className="text-muted-foreground">University of Westminster</div>
                  </div>
                  <span className="text-muted-foreground font-mono">2024 - Present</span>
                </div>
                <div className="flex justify-between items-start p-2.5 rounded-lg border bg-background/50">
                  <div>
                    <div className="font-bold text-foreground">Foundation Programme in Software Engineering</div>
                    <div className="text-muted-foreground">Informatics Institute of Technology</div>
                  </div>
                  <span className="text-muted-foreground font-mono">2023 - 2024</span>
                </div>
                <div className="flex justify-between items-start p-2.5 rounded-lg border bg-background/50">
                  <div>
                    <div className="font-bold text-foreground">LinkedIn Learning Professional Certifications</div>
                    <div className="text-muted-foreground">React Essential Training, React Native Essential Training, TypeScript Essential Training</div>
                  </div>
                  <span className="text-muted-foreground font-mono">2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
