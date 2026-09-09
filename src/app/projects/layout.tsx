import { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "Projects & Portfolio | Chrome Extensions & Web Apps",
  description:
    "Explore custom Chrome extensions (Manifest V3), browser automation tools, web scrapers, and full-stack web applications developed by Pasindu Piumal.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects & Portfolio | Pasindu Piumal - Chrome Extension Developer",
    description:
      "Explore custom Chrome extensions (Manifest V3), browser automation tools, web scrapers, and full-stack web applications developed by Pasindu Piumal.",
    url: `${DATA.url}/projects`,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    title: "Projects & Portfolio | Pasindu Piumal - Chrome Extension Developer",
    description:
      "Explore custom Chrome extensions (Manifest V3), browser automation tools, web scrapers, and full-stack web applications developed by Pasindu Piumal.",
    card: "summary_large_image",
  },
};

const projectsJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${DATA.url}/projects#collection`,
      url: `${DATA.url}/projects`,
      name: "Chrome Extensions & Software Projects Portfolio | Pasindu Piumal",
      description:
        "Comprehensive portfolio of 113+ custom Chrome extensions (Manifest V3), AI floating copilots, browser automation bots, web scrapers, and full-stack SaaS applications.",
      isPartOf: {
        "@type": "WebSite",
        "@id": `${DATA.url}/#website`,
      },
      author: {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: DATA.name,
      },
      mainEntity: {
        "@type": "ItemList",
        name: "Featured Chrome Extensions & Production Software",
        numberOfItems: 6,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "FUT Snipe Bot (EliteFutBot)",
            url: `${DATA.url}/projects/fut-snipe-bot`,
            description: "Real-time EA FC web app sniper extension scaling to 100k+ active users and $1M+ revenue.",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Tech Copilot",
            url: `${DATA.url}/projects/tech-copilot`,
            description: "Automotive technical assistant with Manifest V3, OpenAI/Gemini Pro RAG, and viewport screen snip capture.",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "RoboApply & Sociax — AI Job Application Autofill & Auto-Apply",
            url: `${DATA.url}/projects/roboapply-ats-automation`,
            description: "AI-powered job application autofill Chrome extension supporting 100+ ATS platforms with OpenAI GPT-4o resume tailoring and auto-apply.",
          },
          {
            "@type": "ListItem",
            position: 4,
            name: "SuperDev Pro",
            url: `${DATA.url}/projects/superdev-pro`,
            description: "Developer productivity suite with live CSS inspection, font detection, and 6,000+ active professional users.",
          },
          {
            "@type": "ListItem",
            position: 5,
            name: "Amazon Shift Sniper",
            url: `${DATA.url}/projects/amazon-shift-sniper`,
            description: "High-frequency slot monitoring engine with dual-world script execution and CSRF token auto-discovery.",
          },
          {
            "@type": "ListItem",
            position: 6,
            name: "Business OS – Google Sheets Web App",
            url: `${DATA.url}/projects/business-os`,
            description: "Google Apps Script enterprise workspace turning spreadsheets into interactive full-stack management apps.",
          },
        ],
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${DATA.url}/projects#breadcrumb`,
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
          name: "Projects & Portfolio",
          item: `${DATA.url}/projects`,
        },
      ],
    },
  ],
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectsJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {children}
    </>
  );
}
