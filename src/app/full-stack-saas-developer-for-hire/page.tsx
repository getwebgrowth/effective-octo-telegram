import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/contact-form";
import { ProjectCard } from "@/components/project-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Cpu,
  CreditCard,
  Database,
  ExternalLink,
  Globe,
  Layers,
  Lock,
  Network,
  RefreshCw,
  Rocket,
  Server,
  ShieldCheck,
  Sparkles,
  Star,
  Terminal,
  TrendingUp,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

const BLUR_FADE_DELAY = 0.04;

export const metadata: Metadata = {
  title: "Hire Expert Freelance Full-Stack SaaS Developer (Next.js · Node · AI · Stripe) | Pasindu Piumal",
  description:
    "Hire Pasindu Piumal — Top Rated Full-Stack SaaS Developer with 175+ shipped projects, $1M+ software revenue enabled, and 100k+ active users. Specializing in Next.js, React, Node.js, AI copilots (GPT-4o/Claude/Gemini), Stripe subscription billing, micro-SaaS monorepos, and cloud architecture. $20/hr or fixed milestones.",
  keywords: [
    "Hire Full-Stack SaaS Developer",
    "Freelance SaaS Developer for hire",
    "Next.js SaaS Developer",
    "React Node.js SaaS Developer",
    "AI SaaS Developer for hire",
    "Micro-SaaS developer",
    "SaaS MVP developer",
    "Stripe subscription billing developer",
    "SaaS Chrome Extension Monorepo",
    "Upwork SaaS Developer",
    "Full-Stack freelance engineer",
    "Supabase SaaS Developer",
    "PostgreSQL SaaS developer",
    "AI Copilot SaaS",
    "Pasindu Piumal",
  ],
  alternates: {
    canonical: "/full-stack-saas-developer-for-hire",
  },
  openGraph: {
    title: "Hire Expert Freelance Full-Stack SaaS Developer (Next.js · Node · AI · Stripe) | Pasindu Piumal",
    description:
      "Hire Pasindu Piumal — Top Rated Full-Stack SaaS Developer with 175+ shipped projects, $1M+ software revenue enabled, and 100k+ active users. Next.js, Node.js, AI integrations, Stripe monetization, and scalable cloud architecture.",
    url: `${DATA.url}/full-stack-saas-developer-for-hire`,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Hire Expert Freelance Full-Stack SaaS Developer | Pasindu Piumal",
    description:
      "Hire Pasindu Piumal — Top Rated Full-Stack SaaS Developer with 175+ shipped projects, $1M+ software revenue enabled, and 100k+ active users. Next.js, Node.js, AI integrations, Stripe monetization.",
    card: "summary_large_image",
    creator: "@pasindupiumal03",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${DATA.url}/full-stack-saas-developer-for-hire#service`,
      name: "Pasindu Piumal - Freelance Full-Stack SaaS Development Services",
      url: `${DATA.url}/full-stack-saas-developer-for-hire`,
      image: `${DATA.url}${DATA.avatarUrl}`,
      description:
        "Professional full-stack SaaS engineering specializing in Next.js, React 19, Node.js, AI integrations (OpenAI GPT-4o, Claude, Gemini Pro RAG), Stripe subscription monetization, and micro-SaaS browser extension monorepos with 175+ shipped production projects.",
      priceRange: "$$ - $20/hr or Fixed Milestone",
      telephone: DATA.contact.tel,
      email: DATA.contact.email,
      provider: {
        "@type": "Person",
        name: DATA.name,
        jobTitle: "Freelance Full-Stack SaaS Developer",
        url: DATA.url,
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "175",
        bestRating: "5.0",
        worstRating: "1.0",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Full-Stack SaaS Development Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Full-Stack SaaS MVP Development",
              description: "Turnkey MVP engineering using Next.js App Router, TypeScript, PostgreSQL/Supabase, and modern auth delivered in 1-3 weeks.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "AI-Powered SaaS & Copilot Applications",
              description: "Context-aware AI applications with OpenAI GPT-4o, Anthropic Claude, Gemini Pro RAG, vector embeddings, and streaming responses.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Micro-SaaS & Browser Extension Monorepos",
              description: "Unified platforms combining Manifest V3 Chrome extensions with Next.js web dashboards, synchronized state, and shared auth.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Stripe Subscription Billing & Monetization",
              description: "Tiered subscription paywalls, usage-based metering, customer portals, automated webhooks, and churn mitigation.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Scalable Backend APIs & Cloud Infrastructure",
              description: "High-performance Node.js/Express APIs, WebSockets, background job queues, Redis caching, AWS and Vercel deployments.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${DATA.url}/full-stack-saas-developer-for-hire#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How fast can you build and launch a full-stack SaaS MVP?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A production-ready SaaS MVP with user authentication, database architecture, core functional workflow, responsive UI dashboard, and Stripe subscription billing is typically delivered in 1 to 3 weeks. Comprehensive enterprise or multi-tiered platforms take 3 to 6 weeks, broken down into testable weekly milestones.",
          },
        },
        {
          "@type": "Question",
          name: "What tech stack do you use for full-stack SaaS development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "For modern SaaS builds, I primarily use Next.js 15/16 (App Router, Server Actions, SSR), React 19, TypeScript, and Tailwind CSS on the frontend. On the backend, I leverage Node.js, Express, PostgreSQL with Prisma or Drizzle ORM, Supabase, Redis for caching/rate-limiting, Stripe for billing, and deploy to Vercel or AWS with Docker containers.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build AI-powered SaaS products with OpenAI, Claude, or Gemini?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. I have extensive production experience building AI-native SaaS products, including streaming LLM responses (GPT-4o, Claude 3.5 Sonnet, Gemini Pro), Retrieval-Augmented Generation (RAG) with vector databases (Pinecone, pgvector), document parsing, OCR pipelines (Tesseract.js), and intelligent automation agents.",
          },
        },
        {
          "@type": "Question",
          name: "Can you build a micro-SaaS pairing a Chrome extension with a web dashboard?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, this is one of my strongest specializations. I build monorepo architectures where a Manifest V3 Chrome extension and a Next.js web application share a single authentication system (Clerk, NextAuth, or Supabase), unified database state, and synchronized Stripe subscriptions (such as SuperDev Pro, Tech Copilot, and SuperX).",
          },
        },
        {
          "@type": "Question",
          name: "How do you integrate Stripe subscription billing and monetization?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I implement full-cycle Stripe Billing workflows: monthly and annual tiered subscription plans, free trial enforcement, metered usage-based billing, self-serve Stripe Customer Portals, resilient webhook handlers for payment events (charge.succeeded, customer.subscription.deleted), and dunning management.",
          },
        },
        {
          "@type": "Question",
          name: "What are your hiring rates and engagement models?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I offer both hourly contracts at $20/hr tracked on Upwork (Top Rated with 100% Job Success Score and automated work diary) and fixed-price milestone escrows with clear functional deliverables, automated test suites, and transparent sprint reviews.",
          },
        },
        {
          "@type": "Question",
          name: "How much does it cost to build a full-stack SaaS product?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Core MVP SaaS builds generally range from $800 to $1,800. AI-native applications with RAG and LLM integrations range from $1,500 to $3,500. Micro-SaaS monorepos pairing browser extensions with web dashboards range from $1,800 to $4,500. Dedicated engineering is available at $20/hr on Upwork.",
          },
        },
        {
          "@type": "Question",
          name: "Should I hire a freelance full-stack developer or an agency?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Hiring a specialized freelance full-stack developer gives you direct senior engineer communication, zero agency overhead, faster iteration cycles, and significant cost savings. Agencies frequently charge $100–$200/hr while delegating the actual coding to junior staff. With Pasindu, you get senior-level craftsmanship directly at $20/hr.",
          },
        },
        {
          "@type": "Question",
          name: "How do you handle security, authentication, and database integrity?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "I build with security-first architecture: secure session tokens via NextAuth/Clerk/Supabase Auth, PostgreSQL Row-Level Security (RLS) policies, environment variable encryption, CSRF protection, input validation via Zod schemas, rate-limiting on sensitive API endpoints with Redis, and regular dependency vulnerability audits.",
          },
        },
        {
          "@type": "Question",
          name: "Where is Pasindu Piumal based and what time zones does he support?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Pasindu Piumal is based in Kegalle, Sri Lanka (GMT+5:30) and works remotely with founders and teams across the United States (EST/PST), United Kingdom (GMT/BST), Europe (CET), and Australia (AEST) with overlapping working hours and daily async updates via Slack, Telegram, Discord, or Upwork Messages.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${DATA.url}/full-stack-saas-developer-for-hire#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: DATA.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Full-Stack SaaS Developer for Hire",
          item: `${DATA.url}/full-stack-saas-developer-for-hire`,
        },
      ],
    },
  ],
};

const SAAS_CAPABILITIES = [
  {
    icon: Globe,
    title: "Modern SaaS Web Frontends & Dashboards",
    badge: "Next.js 15/16 • React 19 • TailwindCSS",
    description:
      "High-performance user interfaces built with Next.js App Router, Server Components, and responsive Tailwind layouts. Clean interactive dashboards, real-time metrics charts, dark/light modes, keyboard shortcuts, and frictionless onboarding flows that convert visitors into paying subscribers.",
    projects: "Featured in: SuperDev Pro (6k+ users), SuperX Analytics, Business OS",
  },
  {
    icon: Server,
    title: "Scalable Backend APIs & Microservices",
    badge: "Node.js • Express • PostgreSQL • Supabase",
    description:
      "Robust REST and GraphQL APIs with structured relational or NoSQL databases. Schema design with Prisma or Drizzle ORM, automated migrations, Redis in-memory caching, rate-limited job queues, and asynchronous background workers that handle high-concurrency spikes effortlessly.",
    projects: "Featured in: FUT Snipe Engine ($1M+ revenue), RoboApply API, SuperX Backend",
  },
  {
    icon: Sparkles,
    title: "AI-Powered SaaS Products & Copilots",
    badge: "OpenAI GPT-4o • Claude 3.5 • Gemini Pro RAG",
    description:
      "Native generative AI integrations that make your software feel like magic. Low-latency token streaming, multi-modal vision inputs, RAG pipelines over user documents, client-side vector search, automated text summarization, and task-executing autonomous agents.",
    projects: "Featured in: Tech Copilot ($5.99/mo SaaS), Censor AI, RoboApply AI Auto-Apply",
  },
  {
    icon: Layers,
    title: "Micro-SaaS & Extension Monorepos",
    badge: "Manifest V3 + Web Dashboard Sync",
    description:
      "Unified hybrid platforms where a browser extension works alongside a centralized web application. Synchronized database state, shared authentication sessions, live background data piping, and consolidated billing across both web and browser environments.",
    projects: "Featured in: SuperDev Pro, Tech Copilot, FullGrab Screenshot Platform",
  },
  {
    icon: CreditCard,
    title: "Stripe Subscription Billing & Monetization",
    badge: "Stripe Billing • Webhooks • ExtensionPay",
    description:
      "Frictionless monetization engines with tiered monthly/annual subscriptions, usage-based metering, coupon codes, self-serve customer management portals, automated dunning, and secure webhook listeners that synchronize subscription status across your database instantly.",
    projects: "Featured in: Tech Copilot, SuperDev Pro, SuperX Twitter Platform",
  },
  {
    icon: Database,
    title: "Cloud Infrastructure, DevOps & Security",
    badge: "AWS • Vercel • Docker • PostgreSQL RLS",
    description:
      "Production-ready deployment pipelines with zero-downtime CI/CD. Containerized workloads on AWS or automated deployments on Vercel, Supabase Row-Level Security (RLS), edge functions, SSL/TLS certificate management, and continuous database backup routines.",
    projects: "Featured in: 175+ Shipped Production Deployments",
  },
];

const COMPARISON_POINTS = [
  {
    criteria: "Hourly Rate & Value",
    others: "$100 - $200/hr (Agencies) or $15/hr (Unverified code)",
    pasindu: "$20/hr tracked on Upwork (Top Rated, 100% JSS, $1M+ software revenue)",
  },
  {
    criteria: "MVP Delivery Timeline",
    others: "2 - 4 months of prolonged discovery and bloated sprints",
    pasindu: "1 - 3 weeks from architecture blueprint to working live MVP with Stripe",
  },
  {
    criteria: "Communication & Hierarchy",
    others: "Account managers, project coordinators, and delayed email updates",
    pasindu: "Direct 1-on-1 engineer communication via Slack, Telegram, Discord, or Upwork",
  },
  {
    criteria: "Micro-SaaS + Extension Monorepos",
    others: "Usually lack specialized Manifest V3 expertise to pair with web apps",
    pasindu: "Specialist in unified monorepos (Next.js web dashboard + Manifest V3 extension)",
  },
  {
    criteria: "AI / LLM Production Experience",
    others: "Generic API wrappers that break under token limits and latency",
    pasindu: "Battle-tested streaming LLM responses, on-device OCR, RAG, and vector search",
  },
  {
    criteria: "Payment & Subscription Architecture",
    others: "Basic checkout buttons without webhook listeners or customer portals",
    pasindu: "Full Stripe Billing integration: tier enforcement, customer portal, webhooks",
  },
  {
    criteria: "Code Quality & Handover",
    others: "Tangled spaghetti code, undocumented APIs, zero test suites",
    pasindu: "Strict TypeScript, clean modular architecture, full documentation, Git history",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    time: "Day 1 - 2",
    title: "Architecture & Data Schema Blueprint",
    description:
      "We clarify user journeys, database schemas (PostgreSQL / Supabase), API endpoints, authentication workflows, third-party integrations, and UI wireframes.",
  },
  {
    step: "02",
    time: "Day 3 - 7",
    title: "Core Full-Stack MVP Engineering",
    description:
      "Fast implementation of Next.js frontend dashboards, Node.js backend controllers, database migrations, and core functional features with daily demo previews.",
  },
  {
    step: "03",
    time: "Day 8 - 14",
    title: "AI Integration, Stripe Billing & Auth",
    description:
      "Wiring OpenAI/Claude LLM endpoints, setting up Stripe subscription tiers and webhook handlers, implementing secure authentication, and end-to-end testing.",
  },
  {
    step: "04",
    time: "Day 15+",
    title: "Production Launch, CI/CD & Scaling",
    description:
      "Deploying to Vercel/AWS with custom domains, automated database backups, analytics tracking, error logging (Sentry), and seamless Git repository handover.",
  },
];

const ARCHITECTURE_PILLARS = [
  {
    icon: Rocket,
    title: "Next.js App Router & Server Components",
    description:
      "Blazing-fast page loads with React Server Components, server actions, dynamic streaming rendering, and zero client-side JavaScript bloat.",
  },
  {
    icon: Database,
    title: "PostgreSQL & Supabase Row-Level Security",
    description:
      "Multi-tenant database architectures with bulletproof Row-Level Security (RLS), automated indexing for instant queries, and transactional integrity.",
  },
  {
    icon: Bot,
    title: "Low-Latency AI Streaming & RAG",
    description:
      "Real-time token streaming with Server-Sent Events (SSE), dynamic context window management, and semantic vector embeddings for domain-specific RAG.",
  },
  {
    icon: CreditCard,
    title: "Resilient Stripe Webhook Pipelines",
    description:
      "Idempotent webhook handlers that process subscription updates, invoice payments, customer churn, and trial expirations without data mismatch.",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End Type Safety & Zod Validation",
    description:
      "Full-stack TypeScript contracts spanning database queries, API request/response payloads, and React components to eliminate runtime crashes.",
  },
  {
    icon: Zap,
    title: "In-Memory Caching & Background Queues",
    description:
      "Redis caching for high-read endpoints and BullMQ background task workers for heavy computing, PDF generation, or third-party web scraping.",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Working with Pasindu has been one of the best decisions I've made for my startup. Tech AI-Copilot has gone from an idea to a polished product because of his technical ability, attention to detail, and willingness to tackle difficult problems. He's reliable, communicates clearly, and always works with me to find the best solution rather than the easiest one.",
    author: "Founder, Tech AI-Copilot",
    context: "Automotive AI SaaS • OpenAI & Gemini Pro Integration • ExtensionPay Recurring Monetization • 6 Milestones ($1,875+)",
    rating: 5,
  },
  {
    quote:
      "Excellent work! Professional, responsive, and delivered high-quality results on time. Great communication throughout the project. Highly recommended.",
    author: "Anil N., Founder at Sociax",
    context: "RoboApply AI Job Application SaaS • Multi-ATS Automation (Ashby, Workday, Greenhouse) • Delivered in 1 Week",
    rating: 5,
  },
  {
    quote:
      "Pasindu is a top-tier developer who truly understands software architecture. He delivered a fast, reliable platform that our users love. Will definitely hire again.",
    author: "SaaS Founder, SuperDev Pro",
    context: "Developer Productivity SaaS Platform • React & Tailwind • Stripe Licensing • 6,000+ Active Users",
    rating: 5,
  },
  {
    quote:
      "Excellent understanding of full-stack engineering and real-time systems. Successfully delivered a high-scale engine where past attempts had stalled. One of the best developers on Upwork.",
    author: "Upwork Enterprise Client",
    context: "FUT Snipe Engine • High-Scale WebSocket Infrastructure • $1M+ Software Revenue Generated",
    rating: 5,
  },
];

const FAQS = [
  {
    q: "How fast can you build and launch a functional SaaS MVP?",
    a: "A standard SaaS MVP featuring user authentication, database architecture, the core functional workflow, a responsive UI dashboard, and Stripe subscription billing is typically delivered in 1 to 3 weeks. Comprehensive platforms with multi-role permissions or complex AI pipelines generally take 3 to 6 weeks, delivered in transparent weekly milestones.",
  },
  {
    q: "What tech stack do you recommend for modern full-stack SaaS builds?",
    a: "I recommend Next.js 15/16 (App Router, Server Actions) with React 19, TypeScript, and Tailwind CSS on the frontend. For backend services and persistence: Node.js, PostgreSQL with Supabase or Prisma, Redis for fast caching and rate limiting, and Stripe for payments. Deployments are automated on Vercel or AWS with Docker.",
  },
  {
    q: "Can you build AI-native SaaS products with OpenAI, Claude, or Gemini?",
    a: "Yes. I have deep hands-on experience building AI-native web apps: streaming LLM chat interfaces (GPT-4o, Claude 3.5 Sonnet, Gemini Pro), Retrieval-Augmented Generation (RAG) over PDFs and documents using vector embeddings, local and cloud OCR pipelines (Tesseract.js), and autonomous workflow agents.",
  },
  {
    q: "Can you build a micro-SaaS pairing a Chrome extension with a web dashboard?",
    a: "Yes. This is one of my greatest competitive advantages. I engineer unified monorepos where a Manifest V3 browser extension and a Next.js web application share a single authentication provider (Supabase, Clerk, NextAuth), unified user database, and synchronized Stripe subscriptions (e.g., SuperDev Pro, Tech Copilot, SuperX).",
  },
  {
    q: "How do you implement Stripe subscription billing and monetization?",
    a: "I handle the complete billing lifecycle: tiered monthly/annual subscriptions, usage-based metered billing, free trial management, self-serve Stripe Customer Portals, and resilient webhook handlers that keep user accounts and access permissions in sync automatically.",
  },
  {
    q: "What are your hiring rates and engagement models?",
    a: "I offer both hourly contracts ($20/hr tracked on Upwork with full time tracking and work diary) and fixed-price milestone projects with clearly defined deliverables and acceptance criteria. You only pay for code that meets your specifications.",
  },
  {
    q: "How much does it cost to build a full-stack SaaS application?",
    a: "A focused MVP SaaS ranges between $800 and $1,800. An AI-powered SaaS with RAG pipelines ranges from $1,500 to $3,500. Micro-SaaS monorepos pairing browser extensions with web dashboards range from $1,800 to $4,500. Dedicated development is $20/hr on Upwork.",
  },
  {
    q: "Should I hire a freelance SaaS developer or an agency?",
    a: "Agencies often charge $100–$200/hr, add unnecessary management layers, and frequently assign the real work to junior developers. Working with me gives you direct senior engineer communication, faster turnarounds, and top-tier craftsmanship at $20/hr with 100% accountability.",
  },
  {
    q: "How do you handle database security, authentication, and user data privacy?",
    a: "Every application is built with security best practices: secure session cookies via NextAuth/Clerk/Supabase Auth, PostgreSQL Row-Level Security (RLS) ensuring strict tenant isolation, encrypted environment variables, Zod schema validation on all inputs, API rate limiting, and automated database backups.",
  },
  {
    q: "Where is Pasindu Piumal based and what time zones does he work with?",
    a: "I am based in Kegalle, Sri Lanka (GMT+5:30) and work smoothly with founders across the US (EST/PST), UK (GMT), Europe (CET), and Australia (AEST). I maintain overlapping working hours and provide proactive daily asynchronous updates via Slack, Telegram, Discord, or Upwork.",
  },
];

export default function FullStackSaaSDeveloperPage() {
  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Decorative background gradient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none overflow-hidden opacity-40 dark:opacity-20 z-0">
        <div className="absolute -top-32 left-1/4 size-96 rounded-full bg-gradient-to-br from-primary/30 to-blue-500/20 blur-3xl" />
        <div className="absolute -top-20 right-1/4 size-96 rounded-full bg-gradient-to-bl from-purple-500/20 to-indigo-500/30 blur-3xl" />
      </div>

      <div className="container max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 space-y-16 sm:space-y-24 relative z-10">
        {/* HERO SECTION */}
        <section className="space-y-6 sm:space-y-8 text-center pt-2 sm:pt-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold backdrop-blur-sm shadow-xs">
              <span className="flex items-center gap-1 text-amber-500">
                <Star className="size-3.5 fill-amber-500" />
                <span className="text-foreground font-bold">Top Rated Upwork</span>
              </span>
              <span className="text-muted-foreground">•</span>
              <span className="text-foreground font-medium">175+ Projects Shipped</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">$1M+ Software Revenue</span>
              <span className="text-muted-foreground">•</span>
              <span className="text-foreground font-semibold">$20/hr Tracked Rate</span>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 2}>
            <div className="space-y-4 max-w-3xl mx-auto">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-foreground">
                Hire Expert Freelance{" "}
                <span className="bg-gradient-to-r from-primary via-blue-600 to-indigo-500 bg-clip-text text-transparent">
                  Full-Stack SaaS Developer
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-muted-foreground leading-relaxed">
                Build and launch your next high-converting SaaS product in weeks, not months.
                Specializing in <strong className="text-foreground">Next.js 15/16</strong>,{" "}
                <strong className="text-foreground">React 19</strong>,{" "}
                <strong className="text-foreground">Node.js</strong>,{" "}
                <strong className="text-foreground">AI Copilots (GPT-4o &amp; Gemini RAG)</strong>,{" "}
                <strong className="text-foreground">Stripe subscription billing</strong>, and{" "}
                <strong className="text-foreground">Micro-SaaS browser extension monorepos</strong>.
              </p>
            </div>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <Link
                href="https://www.upwork.com/freelancers/pasindupiumal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="rounded-xl h-11 px-6 font-bold shadow-md hover:shadow-lg transition-all text-xs sm:text-sm bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icons.upwork className="mr-2 size-4 fill-current" />
                  Hire Pasindu on Upwork ($20/hr)
                </Button>
              </Link>
              <Link href="#saas-projects">
                <Button size="lg" variant="outline" className="rounded-xl h-11 px-6 font-semibold shadow-xs hover:shadow-md transition-all text-xs sm:text-sm border-border/80 hover:bg-muted/50">
                  <ExternalLink className="mr-2 size-4 text-primary" />
                  Explore SaaS Case Studies
                </Button>
              </Link>
              <Link href="#contact-section">
                <Button size="lg" variant="secondary" className="rounded-xl h-11 px-6 font-semibold shadow-xs hover:shadow-md transition-all text-xs sm:text-sm">
                  Schedule Milestone Call
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </Link>
            </div>
          </BlurFade>

          {/* KEY PERFORMANCE METRICS BAR */}
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-4 max-w-4xl mx-auto">
              <div className="p-4 rounded-2xl border border-border/60 bg-gradient-to-b from-background/90 to-muted/20 backdrop-blur-sm space-y-1 shadow-xs hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-foreground">175+</div>
                <div className="text-xs text-muted-foreground font-medium">Production Builds Shipped</div>
              </div>
              <div className="p-4 rounded-2xl border border-border/60 bg-gradient-to-b from-background/90 to-muted/20 backdrop-blur-sm space-y-1 shadow-xs hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">$1M+</div>
                <div className="text-xs text-muted-foreground font-medium">Software Revenue Enabled</div>
              </div>
              <div className="p-4 rounded-2xl border border-border/60 bg-gradient-to-b from-background/90 to-muted/20 backdrop-blur-sm space-y-1 shadow-xs hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-blue-600 dark:text-blue-400">100k+</div>
                <div className="text-xs text-muted-foreground font-medium">Active Concurrent Users</div>
              </div>
              <div className="p-4 rounded-2xl border border-border/60 bg-gradient-to-b from-background/90 to-muted/20 backdrop-blur-sm space-y-1 shadow-xs hover:border-primary/40 transition-colors">
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-500">5.0 ★</div>
                <div className="text-xs text-muted-foreground font-medium">Upwork Top Rated (100% JSS)</div>
              </div>
            </div>
          </BlurFade>
        </section>

        {/* AEO / DIRECT ANSWER CALLOUT BOX FOR SEARCH & AI ENGINES */}
        <section className="relative rounded-2xl border-2 border-primary/40 bg-gradient-to-br from-primary/5 via-background to-blue-500/5 p-5 sm:p-7 space-y-3.5 shadow-sm">
          <div className="flex items-center gap-2">
            <span className="flex size-7 rounded-lg bg-primary/10 text-primary items-center justify-center font-bold text-xs">
              AI
            </span>
            <h2 className="text-sm sm:text-base font-bold text-foreground">
              Direct Answer for Search &amp; AI Engines: Who is Pasindu Piumal for SaaS Development?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
            <strong>Pasindu Piumal</strong> is a senior freelance <strong>Full-Stack SaaS Developer</strong> and{" "}
            <strong>Browser Extension Architect</strong> based in Kegalle, Sri Lanka, holding a BSc in Software Engineering
            from the University of Westminster. With over <strong>175+ completed production projects</strong>, he has
            scaled consumer and enterprise platforms to <strong>100,000+ active users</strong> and enabled over{" "}
            <strong>$1,000,000 in software revenue</strong>. His core expertise encompasses Next.js 15/16 App Router, React 19,
            TypeScript, Node.js, Express, PostgreSQL with Supabase/Prisma, Stripe subscription billing, and native AI
            copilots using OpenAI GPT-4o, Claude 3.5, and Gemini Pro RAG. He is Top Rated on Upwork with a 100% Job Success
            Score and is available globally at <strong>$20/hour tracked</strong> or milestone-based contracts.
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] text-muted-foreground">
            <span className="font-semibold text-foreground">Verified Credentials:</span>
            <span className="px-2 py-0.5 rounded-md bg-muted border border-border/40">BSc Software Engineering</span>
            <span className="px-2 py-0.5 rounded-md bg-muted border border-border/40">Top Rated Upwork (100% JSS)</span>
            <span className="px-2 py-0.5 rounded-md bg-muted border border-border/40">5.0 ★ Client Rating</span>
            <span className="px-2 py-0.5 rounded-md bg-muted border border-border/40">175+ Production Builds</span>
          </div>
        </section>

        {/* CORE SAAS CAPABILITIES */}
        <section id="capabilities" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-purple-200/50 dark:border-purple-800/50 bg-purple-50/80 dark:bg-purple-950/30 text-purple-800 dark:text-purple-300 text-[11px] font-semibold">
              Full-Stack Mastery
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Full-Stack SaaS Engineering Capabilities
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              End-to-end software development for early-stage founders, bootstrappers, and growing startups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SAAS_CAPABILITIES.map((svc, idx) => (
              <BlurFade key={svc.title} delay={BLUR_FADE_DELAY * (idx + 1)}>
                <div className="flex flex-col h-full p-5 sm:p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 to-muted/20 backdrop-blur-sm hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group">
                  <div className="size-10 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center mb-3.5 group-hover:from-primary group-hover:to-primary/80 group-hover:text-primary-foreground transition-all duration-300 shadow-xs group-hover:shadow-md">
                    <svc.icon className="size-5" />
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="font-semibold text-sm sm:text-base leading-snug">{svc.title}</h3>
                    <span className="inline-block text-[10px] sm:text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-muted text-foreground/90 font-medium border border-border/40">
                      {svc.badge}
                    </span>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pt-1">
                      {svc.description}
                    </p>
                  </div>
                  <div className="pt-3.5 mt-auto border-t text-[11px] sm:text-xs text-muted-foreground font-medium">
                    {svc.projects}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* FLAGSHIP SAAS CASE STUDIES */}
        <section id="saas-projects" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-blue-200/50 dark:border-blue-800/50 bg-blue-50/80 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 text-[11px] font-semibold">
              Real Revenue &amp; Scale
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Flagship SaaS Builds &amp; Live Proof
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Explore live production platforms, monetized micro-SaaS products, and high-concurrency systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 auto-rows-fr">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 2 + id * 0.04}
                className="h-full"
              >
                <ProjectCard
                  href={project.href || "/projects"}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={"video" in project ? (project as any).video : ""}
                  links={"links" in project ? (project as any).links : []}
                />
              </BlurFade>
            ))}
          </div>

          <div className="flex items-center justify-center pt-2">
            <Link href="/projects">
              <Button
                variant="outline"
                className="rounded-xl h-11 px-8 font-semibold shadow-[0_2px_10px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition-all duration-300 group border-primary/20 hover:border-primary/50 text-xs sm:text-sm"
              >
                Explore All 113+ Projects &amp; Deep Case Studies
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        </section>

        {/* COMPARISON MATRIX ("WHY CHOOSE PASINDU FOR SAAS") */}
        <section id="why-choose-me" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-200/50 dark:border-amber-800/50 bg-amber-50/80 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-[11px] font-semibold">
              The Founder Advantage
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Why Founders Choose Pasindu for SaaS
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              How dedicated full-stack SaaS engineering compares to expensive agencies and generic generalists.
            </p>
          </div>

          <div className="border border-border/60 rounded-2xl overflow-hidden bg-gradient-to-b from-background/80 to-muted/10 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
            <div className="w-full overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b bg-gradient-to-r from-muted/60 via-muted/40 to-emerald-50/30 dark:to-emerald-950/20 text-foreground font-bold">
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider w-1/4">Feature / Requirement</th>
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider text-muted-foreground w-3/8">Traditional Agencies / Generalists</th>
                    <th className="p-4 sm:p-5 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-emerald-700 to-teal-700 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent w-3/8">Pasindu Piumal (SaaS Specialist)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {COMPARISON_POINTS.map((item, idx) => (
                    <tr key={idx} className="hover:bg-muted/20 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-foreground align-top text-xs sm:text-sm">
                        {item.criteria}
                      </td>
                      <td className="p-4 sm:p-5 text-muted-foreground align-top text-xs sm:text-sm leading-relaxed">
                        <span className="text-destructive font-bold mr-1.5">✕</span>
                        {item.others}
                      </td>
                      <td className="p-4 sm:p-5 text-foreground/90 font-medium align-top text-xs sm:text-sm leading-relaxed bg-gradient-to-r from-emerald-50/40 to-emerald-50/20 dark:from-emerald-950/20 dark:to-emerald-950/10">
                        <span className="text-primary font-bold mr-1.5">✓</span>
                        {item.pasindu}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 4-STEP FAST TURNAROUND SAAS DELIVERY PROCESS */}
        <section id="process" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-200/50 dark:border-cyan-800/50 bg-cyan-50/80 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-300 text-[11px] font-semibold">
              Rapid Execution
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              4-Step SaaS Turnaround Process
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              From initial architecture discovery to live production deployment with active billing.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((item) => (
              <div
                key={item.step}
                className="relative p-5 rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 to-muted/15 backdrop-blur-sm space-y-2.5 hover:border-primary/40 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-gradient-to-r from-primary/15 to-primary/5 text-primary border border-primary/20">
                      STEP {item.step}
                    </span>
                    <span className="text-[11px] font-semibold text-foreground/80 dark:text-muted-foreground">
                      {item.time}
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-foreground">{item.title}</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNICAL ARCHITECTURE SECTION */}
        <section id="architecture" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-200/50 dark:border-indigo-800/50 bg-indigo-50/80 dark:bg-indigo-950/30 text-indigo-800 dark:text-indigo-300 text-[11px] font-semibold">
              Engineered for Production
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              SaaS Architectural Principles
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Scalable foundations built to handle real traffic, secure payments, and zero unexpected outages.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {ARCHITECTURE_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="p-5 rounded-2xl border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 hover:from-muted/40 hover:to-muted/20 hover:border-border/80 transition-all duration-300 space-y-2.5 flex flex-col"
              >
                <div className="size-9 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 text-primary flex items-center justify-center shadow-xs">
                  <pillar.icon className="size-4.5" />
                </div>
                <h3 className="font-semibold text-xs sm:text-sm leading-snug">{pillar.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CLIENT TESTIMONIALS */}
        <section id="testimonials" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-200/50 dark:border-amber-800/50 bg-amber-50/80 dark:bg-amber-950/30 text-amber-800 dark:text-amber-300 text-[11px] font-semibold">
              Social Proof
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Client Endorsements &amp; Reviews
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Verified client testimonials from live contracts on Upwork.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {TESTIMONIALS.map((testimonial, idx) => (
              <BlurFade key={idx} delay={BLUR_FADE_DELAY * (idx + 1)}>
                <div className="relative flex flex-col justify-between h-full p-5 sm:p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 to-amber-50/10 dark:to-amber-950/5 backdrop-blur-sm space-y-3 hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300">
                  <div className="space-y-2.5">
                    <div className="flex items-center gap-1 text-amber-500">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-amber-500" />
                      ))}
                    </div>
                    <div className="relative">
                      <span className="absolute -top-1 -left-1 text-3xl leading-none text-primary/20 font-serif select-none">&ldquo;</span>
                      <p className="text-xs sm:text-sm text-foreground/90 italic leading-relaxed pl-4">
                        {testimonial.quote}
                      </p>
                    </div>
                  </div>
                  <div className="pt-3 border-t space-y-0.5">
                    <div className="font-bold text-xs sm:text-sm">{testimonial.author}</div>
                    <div className="text-[11px] text-foreground/80 dark:text-muted-foreground font-medium">{testimonial.context}</div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </section>

        {/* ENGAGEMENT & PRICING MODELS */}
        <section id="pricing" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-emerald-200/50 dark:border-emerald-800/50 bg-emerald-50/80 dark:bg-emerald-950/30 text-emerald-800 dark:text-emerald-300 text-[11px] font-semibold">
              Flexible &amp; Transparent
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              SaaS Pricing &amp; Engagement Models
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-xs sm:text-sm">
              Choose the right collaboration structure for your startup stage and roadmap.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 to-muted/15 flex flex-col justify-between space-y-4 hover:border-border hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300">
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-muted/80 border border-border/30">Fixed Scope</span>
                <div className="text-xl font-bold">SaaS MVP Sprint</div>
                <div className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">$800 – $1,800</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Turnkey MVP with Next.js, database, auth, core features, and Stripe billing ready for launch.
                </p>
                <ul className="space-y-1.5 text-xs text-muted-foreground pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Delivered in 1–3 weeks
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Milestone escrow protection
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Production Vercel/AWS launch
                  </li>
                </ul>
              </div>
              <Link href="#contact-section">
                <Button size="sm" variant="outline" className="w-full text-xs font-semibold rounded-lg h-9">Request MVP Blueprint</Button>
              </Link>
            </div>

            <div className="relative p-5 sm:p-6 rounded-2xl border-2 border-primary/70 bg-gradient-to-b from-primary/8 via-primary/4 to-background/80 flex flex-col justify-between space-y-4 shadow-[0_4px_25px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_25px_rgba(0,0,0,0.3)]">
              <div className="absolute -top-3 right-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground text-[9px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider shadow-md">
                Most Popular
              </div>
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-primary/10 text-primary border border-primary/20">Hourly Retainer</span>
                <div className="text-2xl font-bold flex items-baseline gap-1">
                  $20 <span className="text-xs font-normal text-foreground/80 dark:text-muted-foreground">/ hr</span>
                </div>
                <p className="text-xs text-foreground/80 dark:text-muted-foreground leading-relaxed">
                  Ideal for ongoing feature sprints, agile product iterations, refactoring, or dedicated engineering.
                </p>
                <ul className="space-y-1.5 text-xs text-foreground/80 dark:text-muted-foreground pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Upwork Top Rated (100% JSS)
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Transparent work diary
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Daily async Slack/Telegram sync
                  </li>
                </ul>
              </div>
              <Link
                href="https://www.upwork.com/freelancers/pasindupiumal"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" className="w-full text-xs font-bold rounded-lg h-9 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Icons.upwork className="mr-1.5 size-3.5 fill-current" />
                  Hire on Upwork ($20/hr)
                </Button>
              </Link>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 to-muted/15 flex flex-col justify-between space-y-4 hover:border-border hover:shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:hover:shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-all duration-300">
              <div className="space-y-2.5">
                <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-lg bg-indigo-100/80 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/40">Monorepo</span>
                <div className="text-xl font-bold">Micro-SaaS &amp; Extension</div>
                <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">$1,800 – $3,500</div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Hybrid platform combining a Manifest V3 extension with a Next.js web application and unified billing.
                </p>
                <ul className="space-y-1.5 text-xs text-muted-foreground pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Unified database &amp; auth
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Chrome Store + Web App sync
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="size-3.5 text-primary" /> Single Stripe subscription
                  </li>
                </ul>
              </div>
              <Link href="#contact-section">
                <Button size="sm" variant="outline" className="w-full text-xs font-semibold rounded-lg h-9">Discuss Architecture</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ ACCORDION */}
        <section id="faq" className="space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200/50 dark:border-sky-800/50 bg-sky-50/80 dark:bg-sky-950/30 text-sky-800 dark:text-sky-300 text-[11px] font-semibold">
              Got Questions?
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm">
              Key technical and operational details about hiring me for your full-stack SaaS build.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full border border-border/60 rounded-2xl p-4 sm:p-6 bg-gradient-to-b from-background/80 to-muted/10 backdrop-blur-sm shadow-[0_2px_15px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_15px_rgba(0,0,0,0.15)]">
            {FAQS.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b last:border-b-0 py-1">
                <AccordionTrigger className="text-left font-semibold text-xs sm:text-sm py-3 hover:no-underline hover:text-primary transition-colors">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-muted-foreground leading-relaxed pb-3">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* CONTACT / HIRE SECTION */}
        <section id="contact-section" className="space-y-6 pt-2">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-lime-300/50 dark:border-lime-700/50 bg-lime-50/80 dark:bg-lime-950/30 text-lime-700 dark:text-lime-400 text-[11px] font-semibold">
              Let&apos;s Build It
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Ready to Build Your SaaS?
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-xs sm:text-sm">
              Share your product vision, required features, or roadmap for an honest architectural assessment, timeline, and quote.
            </p>
          </div>

          <div className="relative p-6 sm:p-10 rounded-2xl border border-border/60 bg-gradient-to-b from-background/90 to-muted/10 backdrop-blur-xl shadow-[0_8px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.3)]">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-lime-500/3 via-transparent to-emerald-500/3 pointer-events-none" />
            <ContactForm />
          </div>

          {/* Quick Direct Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground pt-2">
            <span className="font-semibold text-foreground">Direct outreach:</span>
            <a
              href={`mailto:${DATA.contact.email}`}
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              {DATA.contact.email}
            </a>
            <span>•</span>
            <a
              href="https://www.upwork.com/freelancers/pasindupiumal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Upwork
            </a>
            <span>•</span>
            <a
              href="https://github.com/pasindupiumal"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              GitHub
            </a>
            <span>•</span>
            <Link
              href="/chrome-extension-developer-for-hire"
              className="hover:text-primary transition-colors underline underline-offset-4"
            >
              Chrome Extension Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
