import { allPosts } from "content-collections";
import { DATA } from "@/data/resume";
import type { Metadata } from "next";
import { ProjectsClient, type SerializedProject, type TabType, type FiverrSubFilter } from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Complete Project Portfolio & Client Case Studies",
  description:
    "Explore 113+ production Manifest V3 Chrome extensions, AI copilots, high-frequency web scrapers, and verified freelance deliverables built by Pasindu Piumal.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Complete Project Portfolio & Case Studies | Pasindu Piumal",
    description:
      "Explore 113+ production Manifest V3 Chrome extensions, AI copilots, high-frequency web scrapers, and verified freelance deliverables.",
    url: `${DATA.url}/projects`,
    siteName: `${DATA.name} Portfolio`,
    type: "website",
  },
};

const ADDITIONAL_PROJECTS: any[] = [];

function extractTechnologies(title: string, content: string = ""): string[] {
  const techs: string[] = [];
  const text = (title + " " + content).toLowerCase();
  
  if (text.includes("manifest v3") || text.includes("extension") || text.includes("chrome")) techs.push("Manifest V3", "Chrome Extension API");
  if (text.includes("openai") || text.includes("gpt") || text.includes("ai")) techs.push("OpenAI API");
  if (text.includes("react")) techs.push("React.js");
  if (text.includes("next.js") || text.includes("nextjs")) techs.push("Next.js");
  if (text.includes("tailwind")) techs.push("TailwindCSS");
  if (text.includes("google apps script") || text.includes("sheets")) techs.push("Google Apps Script");
  if (text.includes("dom") || text.includes("automation")) techs.push("DOM Automation");
  if (text.includes("solana") || text.includes("web3") || text.includes("crypto")) techs.push("Web3.js");

  if (techs.length === 0) {
    techs.push("TypeScript", "React.js", "Web Engineering");
  }
  return Array.from(new Set(techs));
}

function detectFiverrSubCategory(title: string, summary: string = "", content: string = ""): FiverrSubFilter {
  const badgeMatch = content.match(/bg-amber-500\/10[^\"]*\">([^<]+)<\/span>/);
  if (badgeMatch) {
    const b = badgeMatch[1].toLowerCase();
    if (b.includes("ai") || b.includes("copilot") || b.includes("gpt") || b.includes("prompt")) return "ai";
    if (b.includes("scrap") || b.includes("automation") || b.includes("harvest") || b.includes("crawl")) return "scraping";
    if (b.includes("web3") || b.includes("crypto") || b.includes("api") || b.includes("backend") || b.includes("chain")) return "web3";
    if (b.includes("chrome") || b.includes("extension")) return "extensions";
  }

  const text = (title + " " + summary).toLowerCase();
  if (/\b(ai|gpt|copilot|prompt|chatgpt|openai|claude|gemini|llm|summarizer|censor)\b/i.test(text)) return "ai";
  if (/\b(scraper|scraping|scrape|crawl|extract|autofill|logistics|klaviyo|leads|sheets|ats)\b/i.test(text)) return "scraping";
  if (/\b(crypto|web3|solana|bitcoin|deriver|trading|bitunix|bip39|bip32|spooler|esc\/pos|thermal|pos)\b/i.test(text)) return "web3";
  
  return "extensions";
}

function getProjectCategory(title: string, summary: string = "", content: string = ""): TabType {
  const t = title.toLowerCase();
  const text = (title + " " + summary + " " + content).toLowerCase();

  if (
    t.includes("walmart") ||
    t.includes("google apps script") ||
    t.includes("business os") ||
    t.includes("freelancer workspace") ||
    t.includes("office os") ||
    t.includes("sheets web app") ||
    (t.includes("sheets") && !t.includes("chrome extension")) ||
    (text.includes("google apps script") && !t.includes("chrome extension") && !t.includes("manifest v3"))
  ) {
    return "google apps script";
  }

  if (
    t.includes("solana") ||
    t.includes("web3") ||
    t.includes("saas platform") ||
    t.includes("superdev pro") ||
    t.includes("superx") ||
    t.includes("fraktom") ||
    t.includes("polybiuos") ||
    t.includes("alphyre") ||
    t.includes("design system") ||
    t.includes("api design") ||
    t.includes("portfolio") ||
    t.includes("git workflow") ||
    t.includes("next.js") ||
    (t.includes("saas") && !t.includes("chrome extension") && !t.includes("manifest v3"))
  ) {
    return "websites";
  }

  return "extensions";
}

function parseProjectDate(dateString: string): Date {
  if (!dateString) return new Date(0);
  if (dateString.toLowerCase().includes("present")) {
    return new Date();
  }

  const parts = dateString.split(/[-–—]/);
  const lastPart = (parts.length > 1 ? parts[parts.length - 1] : parts[0]).trim();
  const date = new Date(lastPart);
  
  if (isNaN(date.getTime())) {
    const yearMatch = lastPart.match(/\d{4}/);
    if (yearMatch) {
      return new Date(parseInt(yearMatch[0]), 0, 1);
    }
    return new Date(0);
  }
  
  return date;
}

export function getGasOrder(slugOrHref: string, title: string): number {
  const s = (slugOrHref + " " + title).toLowerCase();
  if (s.includes("walmart")) return 1; // 1st: Walmart Product Scraper (Top)
  if (s.includes("office-os") || s.includes("office os")) return 2; // 2nd: Office OS
  if (s.includes("zillow")) return 3; // 3rd: Zillow Scraper (3rd)
  if (s.includes("amazon-product-scraper") || (s.includes("amazon") && s.includes("scraper"))) return 4;
  if (s.includes("business-os") || s.includes("business os")) return 5;
  if (s.includes("freelancer-workspace") || s.includes("freelancer workspace")) return 6;
  return 10;
}

export default function ProjectsPage() {
  const mdxProjects: SerializedProject[] = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");
    const isExplicitNonFiverr = post.isFiverr === false || slug === "business-os" || slug === "freelancer-workspace";
    const isFiverr = 
      !isExplicitNonFiverr && (
        post.isFiverr === true ||
        post.content.includes("Commissioned on Fiverr") || 
        post.content.includes("fiverr.com/pasinduxyz") || 
        post.content.includes("Delivered on Fiverr") || 
        post.content.includes("Fiverr Order Deliverable") ||
        post.content.includes("Order on Fiverr") ||
        post.content.includes("<TrustBanner")
      );
      
    const fiverrSub = isFiverr ? (post.fiverrSubCategory || detectFiverrSubCategory(post.title, post.summary, post.content)) : null;
    const category = getProjectCategory(post.title, post.summary, post.content);
    const technologies = extractTechnologies(post.title, post.content);
    const hideFromFeatured = Boolean(
      post.hideFromFeatured === true ||
      slug === "business-os" ||
      slug === "freelancer-workspace"
    );
    
    const searchCorpus = (
      post.title + " " +
      (post.summary || "") + " " +
      technologies.join(" ") + " " +
      category + " " +
      (fiverrSub || "")
    ).toLowerCase();

    return {
      title: post.title,
      href: `/projects/${slug}`,
      dates: post.publishedAt || "2025 - 2026",
      active: true,
      description: post.summary,
      technologies,
      image: post.image || "",
      video: post.video || "",
      links: [],
      category,
      isFiverr,
      hideFromFeatured,
      fiverrSubCategory: fiverrSub,
      searchCorpus,
    };
  });

  const projectMap = new Map<string, SerializedProject>();

  [
    ...DATA.projects.map((p) => {
      const category = getProjectCategory(p.title, p.description);
      const searchCorpus = (
        p.title + " " +
        (p.description || "") + " " +
        p.technologies.join(" ") + " " +
        category
      ).toLowerCase();

      return {
        title: p.title,
        href: p.href || "#",
        dates: p.dates,
        active: p.active,
        description: p.description,
        technologies: [...p.technologies],
        image: p.image || "",
        video: (p as any).video || "",
        links: (p.links || []).map((l: any) => ({ type: l.type, href: l.href })),
        category,
        isFiverr: false,
        fiverrSubCategory: null,
        searchCorpus,
      };
    }),
    ...ADDITIONAL_PROJECTS.map((p) => {
      const searchCorpus = (
        p.title + " " +
        (p.description || "") + " " +
        p.technologies.join(" ") + " " +
        p.category
      ).toLowerCase();

      return {
        title: p.title,
        href: p.href,
        dates: p.dates,
        active: p.active,
        description: p.description,
        technologies: [...p.technologies],
        image: p.image || "",
        video: p.video || "",
        links: (p.links || []).map((l: any) => ({ type: l.type, href: l.href })),
        category: p.category,
        isFiverr: false,
        fiverrSubCategory: null,
        searchCorpus,
      };
    }),
    ...mdxProjects,
  ].forEach((p) => {
    const key = p.href.toLowerCase();
    if (!projectMap.has(key)) {
      projectMap.set(key, p);
    }
  });

  const allProjects = Array.from(projectMap.values()).sort((a, b) => {
    // Priority order within Google Apps Script category
    if (a.category === "google apps script" && b.category === "google apps script") {
      const rankA = getGasOrder(a.href, a.title);
      const rankB = getGasOrder(b.href, b.title);
      if (rankA !== rankB) return rankA - rankB;
    }

    // Projects hidden from featured (e.g. apps script tools with no priority) should not be hoisted
    if (a.hideFromFeatured && !b.hideFromFeatured) return 1;
    if (!a.hideFromFeatured && b.hideFromFeatured) return -1;

    if (a.isFiverr && !b.isFiverr) return 1;
    if (!a.isFiverr && b.isFiverr) return -1;
    if (a.title.includes("FUT Snipe Bot")) return -1;
    if (b.title.includes("FUT Snipe Bot")) return 1;
    if (a.title.includes("Tech Copilot")) return -1;
    if (b.title.includes("Tech Copilot")) return 1;
    if (a.title.includes("RoboApply")) return -1;
    if (b.title.includes("RoboApply")) return 1;
    if (a.title.includes("Amazon Shift Sniper")) return -1;
    if (b.title.includes("Amazon Shift Sniper")) return 1;
    const dateA = parseProjectDate(a.dates);
    const dateB = parseProjectDate(b.dates);
    return dateB.getTime() - dateA.getTime();
  });

  return <ProjectsClient initialProjects={allProjects} />;
}
