import React from "react";
import { siteConfig } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.siteUrl}/#organization`,
        "name": siteConfig.companyName,
        "legalName": siteConfig.legalName,
        "alternateName": siteConfig.brandName,
        "url": siteConfig.siteUrl,
        "email": siteConfig.email,
        "description":
          "ConceptOne Labs LLC is a technology and product engineering company specializing in SaaS development, browser extensions, AI automation workflows, IoT, and end-to-end digital and physical products.",
        "foundingLocation": {
          "@type": "Place",
          "name": "Wyoming, United States",
        },
        "address": {
          "@type": "PostalAddress",
          "addressRegion": "Wyoming",
          "addressCountry": "US",
        },
        "knowsAbout": [
          "SaaS Development",
          "Google Chrome Extensions",
          "Manifest V3",
          "Browser Automation",
          "Artificial Intelligence Integrations",
          "IoT & Embedded Systems",
          "Product Engineering",
          "Hardware Prototyping",
        ],
        "sameAs": [
          siteConfig.socials.github,
          siteConfig.socials.x,
          siteConfig.socials.linkedin,
        ].filter(Boolean),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.siteUrl}/#website`,
        "url": siteConfig.siteUrl,
        "name": siteConfig.brandName,
        "publisher": {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        "inLanguage": "en-US",
      },
      {
        "@type": "SoftwareApplication",
        "name": "ExamGhost",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Web Browser",
        "url": "https://examghost.com/",
        "author": {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        "publisher": {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        "description":
          "A software platform and SaaS application developed and operated under ConceptOne Labs LLC.",
      },
      {
        "@type": "SoftwareApplication",
        "name": "FUT Snipe Engine",
        "applicationCategory": "BrowserApplication",
        "operatingSystem": "Chrome, Edge, Firefox",
        "url": `${siteConfig.siteUrl}/#portfolio`,
        "author": {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        "publisher": {
          "@id": `${siteConfig.siteUrl}/#organization`,
        },
        "description":
          "A high-performance browser extension and SaaS software product developed and operated under ConceptOne Labs LLC.",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
