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

function extractTechnologies(title: string, content: string = "", category: string = ""): string[] {
  const techs: string[] = [];
  const t = title.toLowerCase();
  const text = (title + " " + content).toLowerCase();
  
  const isExtension = 
    category === "extensions" ||
    t.includes("extension") ||
    text.includes("manifest v3") ||
    text.includes("chrome extension") ||
    text.includes("chrome web store");

  if (isExtension) techs.push("Manifest V3", "Chrome Extension API");
  if (text.includes("openai") || text.includes("gpt") || text.includes("ai copilot") || t.includes("ai")) techs.push("OpenAI API");
  if (text.includes("react")) techs.push("React.js");
  if (text.includes("next.js") || text.includes("nextjs")) techs.push("Next.js");
  if (text.includes("tailwind")) techs.push("TailwindCSS");
  if (text.includes("google apps script") || text.includes("sheets")) techs.push("Google Apps Script");
  if ((text.includes("dom") || text.includes("automation")) && isExtension) techs.push("DOM Automation");
  if (text.includes("solana") || text.includes("web3") || text.includes("crypto") || text.includes("defi")) techs.push("Web3.js");

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

  const isDedicatedExtension = (t.includes("extension") || t.includes("chrome")) && !t.includes("superdev") && !t.includes("superx") && !t.includes("saas platform");

  if (
    !isDedicatedExtension && (
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
      (t.includes("portfolio") && !t.includes("extension")) ||
      t.includes("git workflow") ||
      t.includes("next.js") ||
      (t.includes("saas") && !t.includes("chrome extension") && !t.includes("manifest v3"))
    )
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

export function getFiverrOrder(slugOrHref: string, title: string): number {
  const h = slugOrHref.toLowerCase();
  const t = title.toLowerCase();
  if (h.includes("gmail-signature-manager") || t.includes("gmail signature manager")) return 1;
  if (h.includes("easy-input") || t.includes("easy input")) return 2;
  if (h.includes("auto-suggest") || t.includes("auto suggest")) return 3;
  if (h.includes("comment-assistant") || t.includes("comment assistant")) return 4;
  if (h.includes("positional-ai") || t.includes("positional ai")) return 5;
  if (h.includes("webmind") || t.includes("webmind")) return 6;
  if (h.includes("zillow-scraper") || t.includes("zillow real estate scraper")) return 7;
  if (h.includes("tandem-ai-browsing-copilot") || t.includes("tandem ai")) return 8;
  return 999;
}

function getPriorityRank(href: string, title: string): number {
  const h = href.toLowerCase();
  const t = title.toLowerCase();
  if (h.includes("fut-snipe-bot") || t.includes("elitefutbot") || t.includes("fut snipe")) return 1;
  if (h.includes("tech-copilot") || t.includes("tech copilot")) return 2;
  if (h.includes("roboapply") || t.includes("roboapply")) return 3;
  if (h.includes("amazon-shift-sniper") || t.includes("amazon shift sniper")) return 4;
  if (h.includes("superdev-pro") || t.includes("superdev pro")) return 5;
  if (h.includes("superx") || t.includes("superx")) return 6;
  if (h.includes("alphyre") || t.includes("alphyre")) return 7;
  if (h.includes("no-code-web-scraper") || t.includes("no-code web scraper") || t.includes("nocodewebscraper")) return 8;
  return 99;
}

export default function ProjectsPage() {
  const mdxProjects: SerializedProject[] = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");
    const isExplicitNonFiverr =
      post.isFiverr === false ||
      slug === "business-os" ||
      slug === "freelancer-workspace" ||
      slug === "bonk-terminal" ||
      slug === "no-code-web-scraper" ||
      slug === "office-os" ||
      slug === "amazon-product-scraper" ||
      slug === "polybiuos" ||
      slug === "solana-tracker";
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
    const technologies = extractTechnologies(post.title, post.content, category);
    const hideFromFeatured = Boolean(
      post.hideFromFeatured === true ||
      slug === "business-os" ||
      slug === "freelancer-workspace" ||
      slug === "walmart-product-scraper"
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

    // Explicit top featured projects order
    const priorityA = getPriorityRank(a.href, a.title);
    const priorityB = getPriorityRank(b.href, b.title);
    if (priorityA !== priorityB) return priorityA - priorityB;

    if (a.isFiverr && !b.isFiverr) return 1;
    if (!a.isFiverr && b.isFiverr) return -1;

    // Explicit priority order within Fiverr deliverables
    if (a.isFiverr && b.isFiverr) {
      const rankA = getFiverrOrder(a.href, a.title);
      const rankB = getFiverrOrder(b.href, b.title);
      if (rankA !== rankB) return rankA - rankB;
    }

    const dateA = parseProjectDate(a.dates);
    const dateB = parseProjectDate(b.dates);
    return dateB.getTime() - dateA.getTime();
  });

  return <ProjectsClient initialProjects={allProjects} />;
}
