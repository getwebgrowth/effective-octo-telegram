import React from "react";
import type { Metadata } from "next";
import {
  Code2,
  AppWindow,
  Bot,
  Wifi,
  CircuitBoard,
  Layers,
  Server,
  Microscope,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/Button";
import { CTA } from "@/components/CTA";

export const metadata: Metadata = {
  title: "Software, AI, IoT & Product Engineering",
  description:
    "Explore engineering capabilities at ConceptOne Labs: SaaS platforms, Chrome/Edge browser extensions, AI automation, IoT firmware, and end-to-end product development.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  const serviceDetails = [
    {
      id: "saas-software",
      icon: <Code2 className="h-6 w-6 text-neutral-900" />,
      badge: "Flagship Capability",
      title: "Software & SaaS Development",
      summary:
        "Architecting and shipping high-performance, multi-tenant SaaS products and full-stack web applications. We specialize in building commercial web software with robust subscription billing, authentication, and responsive user interfaces.",
      deliverables: [
        "Production-grade Next.js, React, and TypeScript web applications",
        "Multi-tenant database schema architecture (PostgreSQL, Supabase)",
        "Stripe Billing integration (subscriptions, usage metering, webhook handling)",
        "Role-based access control (RBAC) and enterprise authentication flows",
        "Low-latency API design with Redis caching and query optimization",
        "Automated deployment pipelines and serverless cloud infrastructure",
      ],
      technologies: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
        "Stripe API",
        "Docker",
        "REST/GraphQL",
      ],
    },
    {
      id: "browser-extensions",
      icon: <AppWindow className="h-6 w-6 text-neutral-900" />,
      badge: "Specialized Depth",
      title: "Browser Extension Engineering (Manifest V3)",
      summary:
        "Industry-leading browser extension development across Google Chrome, Microsoft Edge, and Mozilla Firefox. From high-frequency DOM/WebSocket automation to native side-panel interfaces and extension-to-SaaS monetization.",
      deliverables: [
        "Full Manifest V3 migration and architectural compliance",
        "Chrome Side Panel interfaces (chrome.sidePanel) with zero DOM pollution",
        "Offscreen documents and background service worker keepalive mechanisms",
        "Secure hardware-locked licensing, user authentication, and tier entitlements",
        "Biometric humanized interaction engines and anti-detection safeguards",
        "Automated packaging for Chrome Web Store and Edge Add-ons marketplace",
      ],
      technologies: [
        "Manifest V3",
        "Chrome Extensions API",
        "WebExtensions",
        "Side Panel API",
        "Offscreen Documents",
        "TypeScript",
        "Playwright",
        "WebSocket",
      ],
    },
    {
      id: "ai-automation",
      icon: <Bot className="h-6 w-6 text-neutral-900" />,
      badge: "Applied Intelligence",
      title: "AI Integrations & Workflow Automation",
      summary:
        "Building practical AI systems that solve real operational friction. We connect leading LLMs to proprietary business logic, data extraction pipelines, and automated customer-facing agents.",
      deliverables: [
        "Structured LLM function calling and agentic tool-use pipelines",
        "Automated document processing, semantic search, and RAG architectures",
        "High-resilience web extraction and data transformation workflows",
        "Internal copilot dashboards and automated webhook dispatch engines",
        "Model routing strategies to minimize token costs and maximize throughput",
      ],
      technologies: [
        "OpenAI API",
        "Anthropic Claude",
        "AI SDK",
        "Python",
        "Node.js",
        "Vector Databases",
        "Redis",
        "Headless Chrome",
      ],
    },
    {
      id: "iot-embedded",
      icon: <Wifi className="h-6 w-6 text-neutral-900" />,
      badge: "Hardware & Firmware",
      title: "IoT & Embedded Systems",
      summary:
        "Connecting real-world sensors, microcontrollers, and embedded hardware to cloud platforms. We build firmware and telemetry pipelines designed for power efficiency and continuous uptime.",
      deliverables: [
        "Firmware development for ESP32, STM32, and Nordic microcontrollers",
        "Lightweight MQTT, HTTP, and WebSocket communication protocols",
        "Bluetooth Low Energy (BLE) peripheral and central implementations",
        "Over-the-air (OTA) remote firmware deployment infrastructure",
        "Hardware-level telemetry capture and sensor signal processing",
      ],
      technologies: [
        "ESP32",
        "STM32",
        "Embedded C/C++",
        "FreeRTOS",
        "MQTT",
        "BLE",
        "Wi-Fi",
        "I2C / SPI / UART",
      ],
    },
    {
      id: "electronics-pcb",
      icon: <CircuitBoard className="h-6 w-6 text-neutral-900" />,
      badge: "Physical Engineering",
      title: "Electronics & PCB Development",
      summary:
        "From circuit schematics to functional board prototypes. We engineer custom printed circuit boards (PCBs) tailored for consumer devices, industrial monitors, and custom electronic products.",
      deliverables: [
        "Schematic capture and multi-layer PCB layout design",
        "Bill of materials (BOM) optimization and component lifecycle analysis",
        "Benchtop assembly, soldering, and electrical verification testing",
        "Design for Manufacturing (DFM) and assembly preparation",
        "Integration with 3D enclosures and mechanical assemblies",
      ],
      technologies: [
        "KiCad",
        "Altium",
        "SMD Soldering",
        "Oscilloscopes",
        "Logic Analyzers",
        "Power Management",
      ],
    },
    {
      id: "product-prototyping",
      icon: <Layers className="h-6 w-6 text-neutral-900" />,
      badge: "Concept to MVP",
      title: "Product Prototyping & MVP Engineering",
      summary:
        "Fast-tracking new product concepts from concept to working, testable reality. We build functional prototypes and minimum viable products (MVPs) that validate core value propositions with real users.",
      deliverables: [
        "Product architecture specifications and tech-stack evaluation",
        "Interactive clickable prototypes and clean design systems",
        "Fast-turnaround functional MVPs ready for beta testers",
        "Telemetry and user instrumentation to capture early feedback",
        "Clear technical roadmap for transition into production scale",
      ],
      technologies: [
        "Rapid Prototyping",
        "Next.js",
        "Tailwind CSS",
        "Fast Prototyping Boards",
        "Figma",
        "Telemetry",
      ],
    },
    {
      id: "cloud-backend",
      icon: <Server className="h-6 w-6 text-neutral-900" />,
      badge: "Infrastructure",
      title: "Cloud & Backend Engineering",
      summary:
        "Building resilient server infrastructure, relational databases, and high-concurrency microservices. Designed for operational security, automated backups, and low maintenance overhead.",
      deliverables: [
        "Scalable REST and GraphQL backend services",
        "Relational database design, migrations, and query tuning",
        "Containerized deployments using Docker and cloud platforms",
        "Serverless background jobs, cron scheduling, and message queues",
        "Real-time health monitoring, logging, and error tracing",
      ],
      technologies: [
        "Node.js",
        "PostgreSQL",
        "Supabase",
        "Redis",
        "Docker",
        "Vercel",
        "AWS / DigitalOcean",
        "CI/CD",
      ],
    },
    {
      id: "technical-consulting",
      icon: <Microscope className="h-6 w-6 text-neutral-900" />,
      badge: "Advisory & R&D",
      title: "Technical Consulting & R&D",
      summary:
        "Deep technical exploration for companies tackling non-obvious engineering challenges. We evaluate emerging technologies, perform code audits, and prototype experimental solutions.",
      deliverables: [
        "Codebase architecture reviews and security assessments",
        "Browser ecosystem compliance and Manifest V3 transition audits",
        "Hardware-software feasibility analysis for new product concepts",
        "Performance optimization and bottleneck resolution",
        "Technical documentation and architectural blueprints",
      ],
      technologies: [
        "Code Audits",
        "Feasibility Studies",
        "Architecture Blueprints",
        "Benchmarking",
        "Compliance",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-16 sm:py-24 border-b border-neutral-100 bg-[#FAFAFA]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1 text-xs font-mono text-neutral-800 mb-6 shadow-xs">
            <span>Specialized Capabilities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-950 max-w-3xl mx-auto leading-tight">
            Product engineering across software, hardware, and AI.
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            ConceptOne Labs provides specialized engineering execution. We take projects
            from initial technical specifications through to hardened, scalable software
            and physical device deployments.
          </p>

          <div className="mt-8 flex justify-center">
            <Button href="/contact" variant="primary" size="md">
              Discuss Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {serviceDetails.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 clean-card shadow-xs"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  {/* Left Column: Summary */}
                  <div className="lg:col-span-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-10 w-10 rounded-xl border border-neutral-200 bg-neutral-50 flex items-center justify-center">
                          {service.icon}
                        </div>
                        <span className="rounded-full bg-neutral-100 px-3 py-0.5 text-xs font-mono text-neutral-700 border border-neutral-200">
                          {service.badge}
                        </span>
                      </div>

                      <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                        {service.title}
                      </h2>

                      <p className="mt-4 text-sm sm:text-base text-neutral-600 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-100">
                      <Button
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        variant="secondary"
                        size="sm"
                        icon={<ArrowRight className="h-3.5 w-3.5" />}
                      >
                        Inquire about this capability
                      </Button>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Tech */}
                  <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                    <div className="rounded-2xl border border-neutral-150 bg-neutral-50/80 p-6">
                      <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-800 font-semibold mb-4 flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-cyan-600" />
                        <span>Scope &amp; Engineering Deliverables</span>
                      </h3>
                      <ul className="space-y-3">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-700">
                            <CheckCircle2 className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="block text-xs font-mono uppercase tracking-wider text-neutral-500 mb-2.5">
                        Relevant Stack &amp; Frameworks
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs font-mono text-neutral-700 border border-neutral-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <CTA
          title="Ready to engineer your product?"
          description="Let's discuss requirements, technical architecture, and a realistic path to deployment."
          buttonText="Start a Project"
        />
      </div>
    </div>
  );
}
