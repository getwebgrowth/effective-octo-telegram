import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { OrganizationJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site-config";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "ConceptOne Labs | Software & Product Engineering",
    template: "%s | ConceptOne Labs",
  },
  description:
    "ConceptOne Labs is a technology and product engineering company building SaaS, browser extensions, AI automation, IoT systems and digital products from concept to launch.",
  applicationName: "ConceptOne Labs",
  authors: [{ name: "ConceptOne Labs LLC" }],
  generator: "Next.js",
  keywords: [
    "ConceptOne Labs",
    "ConceptOne Labs LLC",
    "SaaS development",
    "Chrome extension engineering",
    "Manifest V3",
    "browser extensions",
    "AI automation",
    "IoT engineering",
    "embedded systems",
    "product engineering",
    "hardware prototyping",
    "ExamGhost",
    "Elite FUT Bot",
  ],
  creator: "ConceptOne Labs LLC",
  publisher: "ConceptOne Labs LLC",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.siteUrl,
    title: "ConceptOne Labs | Software & Product Engineering",
    description:
      "From concept to product. SaaS platforms, browser extensions, AI automation, and connected technology engineered by ConceptOne Labs LLC.",
    siteName: "ConceptOne Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "ConceptOne Labs | Software & Product Engineering",
    description:
      "From concept to product. SaaS platforms, browser extensions, AI automation, and connected technology engineered by ConceptOne Labs LLC.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <OrganizationJsonLd />
      </head>
      <body className="bg-white text-neutral-900 font-sans antialiased min-h-screen flex flex-col selection:bg-cyan-500/15 selection:text-cyan-950">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
