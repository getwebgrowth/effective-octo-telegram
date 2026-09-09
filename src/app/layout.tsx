import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Freelance Chrome Extension Developer & Browser Automation Expert`,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.seoDescription,
  keywords: [
    "Freelance Chrome Extension Developer",
    "Chrome Extension Developer",
    "Manifest V3 Developer",
    "Manifest V3 Migration",
    "Manifest V3 Developer For Hire",
    "Browser Automation Developer",
    "Web Scraping Expert",
    "AI Chrome Extension Developer",
    "OpenAI Chrome Extension",
    "Custom Chrome Extensions",
    "Hire Chrome Extension Developer",
    "Upwork Chrome Extension Developer",
    "Fiverr Chrome Extension Developer",
    "Google Apps Script Developer",
    "Next.js Developer",
    "React Developer",
    "Pasindu Piumal",
  ],
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${DATA.name} | Freelance Chrome Extension Developer`,
    description: DATA.seoDescription,
    url: DATA.url,
    siteName: `${DATA.name} Portfolio`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Freelance Chrome Extension Developer`,
    description: DATA.seoDescription,
    card: "summary_large_image",
    creator: "@pasindupiumal03",
    site: "@pasindupiumal03",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${DATA.url}/#person`,
      name: DATA.name,
      url: DATA.url,
      image: `${DATA.url}${DATA.avatarUrl}`,
      jobTitle: "Chrome Extension Developer | Manifest V3 & Browser Automation Specialist",
      description: DATA.description,
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
        DATA.contact.social.X.url,
        DATA.contact.social.Upwork.url,
        DATA.contact.social.Fiverr.url,
        "https://elitefutbot.com/",
        "https://chromewebstore.google.com/detail/tech-copilot/iipllbfcpkhafndcobpljgkjhlhohkbl",
        "https://chromewebstore.google.com/detail/superdev-pro/jlkikimlceonbmfjieipbonnglnlchhl",
        "https://chromewebstore.google.com/detail/censor/elgfhammpjfmmgiflpjbohhbimlfdimm",
      ],
      nationality: {
        "@type": "Country",
        name: "Sri Lanka",
      },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Kegalle",
        addressCountry: "LK",
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Freelance Chrome Extension Developer",
        occupationalCategory: "15-1252.00",
        skills: "Manifest V3, Browser Automation, Shadow DOM, OpenAI GPT-4o, Web Scraping, TypeScript, React, Next.js",
        estimatedSalary: [
          {
            "@type": "MonetaryAmountDistribution",
            name: "Hourly Tracked Rate",
            currency: "USD",
            median: 20,
          },
        ],
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "BSc (Hons) in Software Engineering",
        educationalLevel: "Bachelor's Degree",
        recognizedBy: {
          "@type": "EducationalOrganization",
          name: "University of Westminster",
          url: "https://westminster.ac.uk",
        },
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Manifest V3 Chrome Extension Development",
            description: "Custom MV3 browser extensions with modern background service workers and content scripts.",
            url: `${DATA.url}/chrome-extension-developer-for-hire`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Browser Copilots & Floating Overlays",
            description: "Integrate OpenAI, Gemini Pro, and RAG into draggable browser overlays.",
            url: `${DATA.url}/chrome-extension-developer-for-hire`,
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Browser Automation & Web Scraping",
            description: "High-frequency slot monitoring, ATS auto-apply, and dynamic Shadow DOM data extraction.",
            url: `${DATA.url}/chrome-extension-developer-for-hire`,
          },
        },
      ],
      worksFor: {
        "@type": "Organization",
        name: "ByteSquadLabs",
        url: "https://bytesquadlabs.com",
      },
      alumniOf: [
        {
          "@type": "EducationalOrganization",
          name: "University of Westminster",
          url: "https://westminster.ac.uk",
        },
        {
          "@type": "EducationalOrganization",
          name: "Informatics Institute of Technology",
          url: "https://iit.ac.lk",
        },
      ],
      knowsAbout: [
        "Chrome Extension Development",
        "Manifest V3 Architecture",
        "Browser Automation",
        "Web Scraping",
        "AI Browser Copilots",
        "DOM Manipulation",
        "Shadow DOM Style Isolation",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Node.js",
        "Google Apps Script",
        "Chrome Web Store Publishing",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${DATA.url}/#website`,
      url: DATA.url,
      name: `${DATA.name} - Freelance Chrome Extension Developer`,
      description: DATA.seoDescription,
      publisher: {
        "@id": `${DATA.url}/#person`,
      },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="absolute inset-0 top-0 left-0 right-0 h-[120px] overflow-hidden z-0 pointer-events-none">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={4}
                gridGap={6}
                maxOpacity={0.2}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10">
              {children}
            </div>
            <Navbar />
            <Analytics />
            <SpeedInsights />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
