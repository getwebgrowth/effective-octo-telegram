export interface ProductConfig {
  name: string;
  url: string;
  status: "Active" | "In Development" | "Beta";
  type: string;
  tagline: string;
  description: string;
  highlights: string[];
  ownershipDisclosure: string;
  role: string;
}

export interface SiteConfig {
  legalName: string;
  companyName: string;
  brandName: string;
  tagline: string;
  subTagline: string;
  positioning: string;
  jurisdiction: string;
  entityType: string;
  status: string;
  email: string;
  siteUrl: string;
  navLinks: { name: string; href: string }[];
  products: ProductConfig[];
  services: {
    id: string;
    title: string;
    badge: string;
    description: string;
    deliverables: string[];
    technologies: string[];
  }[];
  socials: {
    github?: string;
    x?: string;
    linkedin?: string;
  };
}

export const siteConfig: SiteConfig = {
  legalName: "ConceptOne Labs LLC",
  companyName: "ConceptOne Labs LLC",
  brandName: "ConceptOne Labs",
  tagline: "From concept to product.",
  subTagline: "Software. Hardware. AI. Products.",
  positioning:
    "End-to-end technology and product engineering under one roof. We take ideas from initial concept, research, and architecture through to high-scale software, browser extensions, AI automation, and physical product engineering.",
  jurisdiction: "Wyoming, United States",
  entityType: "Limited Liability Company (LLC)",
  status: "Active / Registered in Good Standing",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@conceptonelabs.com",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://conceptonelabs.com",
  navLinks: [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
  products: [
    {
      name: "ExamGhost",
      url: "https://examghost.com/",
      status: "Active",
      type: "SaaS Platform / Web Application",
      tagline: "Intelligent examination assistance and academic workflow software.",
      description:
        "ExamGhost is a dedicated software platform and SaaS application engineered and operated under ConceptOne Labs LLC. It delivers streamlined workflows, modern web interfaces, and high-availability cloud architecture.",
      highlights: [
        "Cloud-native SaaS infrastructure",
        "High-reliability real-time processing",
        "Modern responsive user dashboard",
        "Secure account authentication & data privacy",
      ],
      ownershipDisclosure:
        "ExamGhost is an independent commercial software product owned, operated, and maintained by ConceptOne Labs LLC.",
      role: "Owned & Operated SaaS Product",
    },
    {
      name: "FUT Snipe Engine",
      url: "https://conceptonelabs.com/#portfolio",
      status: "Active",
      type: "Chrome Extension + Full-Stack SaaS",
      tagline: "High-performance browser automation & market monitoring SaaS.",
      description:
        "FUT Snipe Engine is a proprietary browser-extension and SaaS software product engineered and operated under ConceptOne Labs LLC. Built on Manifest V3 with an integrated web management dashboard and subscription billing infrastructure.",
      highlights: [
        "Manifest V3 Chrome/Edge extension architecture",
        "High-frequency sub-second event monitoring",
        "Next.js web dashboard with Stripe billing integration",
        "Zero DOM bloat with native side-panel interface",
      ],
      ownershipDisclosure:
        "FUT Snipe Engine is an independent commercial browser-extension and SaaS product owned, operated, and maintained by ConceptOne Labs LLC.",
      role: "Owned & Operated Browser Extension + SaaS",
    },
  ],
  services: [
    {
      id: "software-saas",
      title: "Software & SaaS Development",
      badge: "Core Capability",
      description:
        "From early architectural validation to production-scale multi-tenant SaaS platforms. We architect, build, and deploy high-reliability web apps, APIs, and cloud services built to handle commercial scale.",
      deliverables: [
        "Production-ready Next.js / React web applications",
        "Scalable RESTful & GraphQL backend APIs",
        "Multi-tenant database architectures (PostgreSQL / Supabase)",
        "Stripe subscription billing & automated license systems",
        "Comprehensive CI/CD pipelines & zero-downtime deployment",
      ],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Tailwind CSS", "Stripe API"],
    },
    {
      id: "browser-extensions",
      title: "Browser Extension Engineering",
      badge: "Specialized Expertise",
      description:
        "Deep expertise in Google Chrome, Microsoft Edge, and Mozilla Firefox extensions. We specialize in Manifest V3 migrations, Side Panel APIs, offscreen documents, DOM automation, and extension-to-SaaS monetization.",
      deliverables: [
        "Modern Manifest V3 compliant extension architecture",
        "Offscreen documents & service worker keepalive implementations",
        "Chrome Side Panel interfaces and native UI components",
        "Secure hardware/account-locked licensing integrations",
        "Automated build systems for Chrome Web Store & Edge Add-ons",
      ],
      technologies: ["Manifest V3", "Chrome Extension API", "WebExtensions", "TypeScript", "SidePanel API", "Offscreen Documents", "Playwright"],
    },
    {
      id: "ai-automation",
      title: "AI & Workflow Automation",
      badge: "Applied Intelligence",
      description:
        "Pragmatic, production-ready AI integrations that drive operational leverage. We engineer custom LLM pipelines, autonomous worker agents, document intelligence, and automated data processing workflows.",
      deliverables: [
        "Structured LLM integrations & function calling systems",
        "Automated extraction, summarization, and data parsing pipelines",
        "Intelligent web scraping & headless browser automation",
        "Internal tool copilot interfaces & webhook dispatch engines",
        "Cost-optimized model routing and latency caching",
      ],
      technologies: ["OpenAI API", "Anthropic Claude", "LangChain / AI SDK", "Python", "Node.js", "Vector DBs", "Redis"],
    },
    {
      id: "iot-embedded",
      title: "IoT & Embedded Systems",
      badge: "Hardware & Firmware",
      description:
        "Bridging digital software with physical hardware. We build custom firmware, connected sensor nodes, and telemetry pipelines for real-world devices.",
      deliverables: [
        "Production firmware for ESP32, STM32, and Nordic chips",
        "Real-time sensor telemetry via MQTT, BLE, and Wi-Fi",
        "Over-the-air (OTA) firmware update infrastructure",
        "Device-to-cloud secure authentication and fleet management",
        "Power-optimized sleep states for battery-operated devices",
      ],
      technologies: ["ESP32", "STM32", "Embedded C/C++", "FreeRTOS", "MQTT", "Bluetooth Low Energy", "Wi-Fi"],
    },
    {
      id: "electronics-hardware",
      title: "Electronics & PCB Prototyping",
      badge: "Physical Engineering",
      description:
        "From schematic design to component sourcing and functional bench prototypes. We deliver verified hardware designs that integrate seamlessly with companion software.",
      deliverables: [
        "Custom schematic design & PCB layout routing",
        "Bill of materials (BOM) optimization & component selection",
        "Rapid functional prototyping & hardware bench testing",
        "Hardware-software communication protocol integration",
        "Design for Manufacturing (DFM) documentation",
      ],
      technologies: ["KiCad", "Altium", "Surface Mount Assembly", "Signal Routing", "I2C/SPI/UART", "Logic Analyzers"],
    },
    {
      id: "product-engineering",
      title: "End-to-End Product Engineering",
      badge: "Concept to Launch",
      description:
        "A holistic approach uniting product strategy, UX design, software engineering, and launch deployment. One dedicated technical team guiding your concept from day zero to a live commercial product.",
      deliverables: [
        "Technical feasibility studies & product architecture blueprints",
        "High-fidelity UI/UX wireframes & interactive design prototypes",
        "Rapid MVP builds for early market validation",
        "Compliance-ready infrastructure and documentation",
        "Launch support, monitoring, and scaling roadmaps",
      ],
      technologies: ["Product Architecture", "Design Systems", "Full-Stack Dev", "Observability", "Cloud Deployment"],
    },
  ],
  socials: {
    github: "https://github.com/conceptonelabs",
    x: "https://x.com/conceptonelabs",
    linkedin: "https://linkedin.com/company/conceptone-labs",
  },
};
