"use client";

import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";
import { useState, useMemo } from "react";
import { Star, CheckCircle, ShieldCheck, Zap, ArrowUpRight } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

export type TabType = "all" | "extensions" | "websites" | "google apps script" | "fiverr";
export type FiverrSubFilter = "all" | "ai" | "extensions" | "scraping" | "web3";

export interface SerializedProject {
  title: string;
  href: string;
  dates: string;
  active: boolean;
  description: string;
  technologies: string[];
  image: string;
  video: string;
  links: { type: string; href: string }[];
  category: TabType;
  isFiverr: boolean;
  fiverrSubCategory: FiverrSubFilter | null;
  searchCorpus: string;
}

const PAGE_SIZE = 16;

export function ProjectsClient({
  initialProjects,
}: {
  initialProjects: SerializedProject[];
}) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  const [fiverrSubFilter, setFiverrSubFilter] = useState<FiverrSubFilter>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const primaryCount = useMemo(
    () => initialProjects.filter((p) => !p.isFiverr).length,
    [initialProjects]
  );
  const fiverrCount = useMemo(
    () => initialProjects.filter((p) => p.isFiverr).length,
    [initialProjects]
  );
  const extensionsCount = useMemo(
    () => initialProjects.filter((p) => p.category === "extensions").length,
    [initialProjects]
  );
  const websitesCount = useMemo(
    () => initialProjects.filter((p) => p.category === "websites").length,
    [initialProjects]
  );
  const gasCount = useMemo(
    () => initialProjects.filter((p) => p.category === "google apps script").length,
    [initialProjects]
  );

  const fiverrAiCount = useMemo(
    () => initialProjects.filter((p) => p.isFiverr && p.fiverrSubCategory === "ai").length,
    [initialProjects]
  );
  const fiverrExtCount = useMemo(
    () => initialProjects.filter((p) => p.isFiverr && p.fiverrSubCategory === "extensions").length,
    [initialProjects]
  );
  const fiverrScrapeCount = useMemo(
    () => initialProjects.filter((p) => p.isFiverr && p.fiverrSubCategory === "scraping").length,
    [initialProjects]
  );
  const fiverrWeb3Count = useMemo(
    () => initialProjects.filter((p) => p.isFiverr && p.fiverrSubCategory === "web3").length,
    [initialProjects]
  );

  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    const searchTokens = q ? q.split(/\s+/).filter(Boolean) : [];

    return initialProjects.filter((project) => {
      // 1. Tab & Sub-filter Check
      let passesTab = false;
      if (activeTab === "all") {
        passesTab = !project.isFiverr;
      } else if (activeTab === "fiverr") {
        if (!project.isFiverr) return false;
        if (fiverrSubFilter === "all") {
          passesTab = true;
        } else {
          passesTab = project.fiverrSubCategory === fiverrSubFilter;
        }
      } else {
        passesTab = project.category === activeTab;
      }

      if (!passesTab) return false;

      // 2. Search Query Matching (Scoped within active tab)
      if (searchTokens.length === 0) return true;

      return searchTokens.every((token) => project.searchCorpus.includes(token));
    });
  }, [initialProjects, activeTab, fiverrSubFilter, searchQuery]);

  const displayedProjects = useMemo(() => {
    if (searchQuery.trim()) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, visibleCount);
  }, [filteredProjects, visibleCount, searchQuery]);

  const handleTabChange = (tab: TabType) => {
    setActiveTab(tab);
    setFiverrSubFilter("all");
    setVisibleCount(PAGE_SIZE);
  };

  const handleSubFilterChange = (filter: FiverrSubFilter) => {
    setFiverrSubFilter(filter);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <main id="projects">
      <div className="max-w-3xl mx-auto py-12 pb-24 sm:py-20 px-6">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">
                  Complete Project Portfolio
                </span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col gap-y-2 items-center justify-center text-center">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Case Studies & Technical Proof
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base max-w-[580px] text-pretty">
                Explore {primaryCount}+ production browser extensions and SaaS platforms, alongside {fiverrCount}+ verified client deliverables.
              </p>
            </div>

            {/* UPWORK & FIVERR HIRE CALLOUT RIBBON */}
            <div className="w-full p-3.5 rounded-2xl border-2 border-primary/30 bg-primary/5 dark:bg-primary/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-left my-1">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-foreground">Need a custom extension or automation bot?</span>
                <p className="text-[11px] text-foreground/80 dark:text-muted-foreground">Available for $20/hr tracked work or fixed-milestone deliverables.</p>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href="https://www.upwork.com/freelancers/pasindupiumal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-primary text-primary-foreground text-xs font-bold shadow-xs shrink-0 hover:opacity-90 transition-opacity"
                >
                  Hire on Upwork ↗
                </a>
                <a
                  href="https://www.fiverr.com/pasinduxyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border border-emerald-600/30 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs font-bold shadow-xs shrink-0 hover:bg-emerald-500/20 transition-colors"
                >
                  Fiverr Profile ↗
                </a>
              </div>
            </div>

            {/* Search Input */}
            <div className="w-full relative">
              <input
                type="text"
                aria-label="Search projects by keyword"
                placeholder={`Search ${activeTab === "all" ? "featured projects" : activeTab === "fiverr" ? "Fiverr orders" : activeTab} by keyword (e.g. AI, Manifest V3, WebSockets, Scraping)...`}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2.5 pl-4 pr-10 text-xs sm:text-sm rounded-xl border bg-background/60 backdrop-blur-xs placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs font-bold p-1 cursor-pointer"
                  title="Clear search"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Main Category Tabs */}
            <div className="flex flex-wrap gap-1.5 border border-border rounded-xl p-1 bg-muted/40 w-full justify-center">
              <button
                onClick={() => handleTabChange("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "all"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Featured ({primaryCount})
              </button>
              <button
                onClick={() => handleTabChange("fiverr")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "fiverr"
                    ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 shadow-xs border border-emerald-500/30 font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Fiverr Projects ({fiverrCount})
              </button>
              <button
                onClick={() => handleTabChange("extensions")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "extensions"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Extensions ({extensionsCount})
              </button>
              <button
                onClick={() => handleTabChange("websites")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "websites"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                SaaS & Web3 ({websitesCount})
              </button>
              <button
                onClick={() => handleTabChange("google apps script")}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  activeTab === "google apps script"
                    ? "bg-background text-foreground shadow-xs"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Google Apps Script ({gasCount})
              </button>
            </div>

            {/* DEDICATED FIVERR FREELANCER TRUST CARD & SUB-FILTERS */}
            {activeTab === "fiverr" && (
              <div className="w-full space-y-3.5 pt-1">
                <div className="p-4 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-500/10 space-y-3 text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-500/20 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400">
                        Verified Freelance Deliverables on Fiverr
                      </span>
                    </div>
                    <a
                      href="https://www.fiverr.com/pasinduxyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
                    >
                      <span>Visit Fiverr Profile</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-amber-500 font-bold text-xs sm:text-sm">
                        <Star className="size-3 fill-amber-500" />
                        <span>5.0 Rating</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">100% 5-Star Reviews</span>
                    </div>
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-xs sm:text-sm">
                        <CheckCircle className="size-3" />
                        <span>75+ Orders</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">{fiverrCount}+ Deliverables</span>
                    </div>
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-primary font-bold text-xs sm:text-sm">
                        <Zap className="size-3" />
                        <span>48h Delivery</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">Avg Turnaround</span>
                    </div>
                    <div className="p-2 rounded-xl bg-background/60 border border-emerald-500/20 text-center">
                      <div className="flex items-center justify-center gap-1 text-foreground font-bold text-xs sm:text-sm">
                        <ShieldCheck className="size-3" />
                        <span>MV3 Standard</span>
                      </div>
                      <span className="text-[10px] text-muted-foreground">Zero Policy Violations</span>
                    </div>
                  </div>
                </div>

                {/* Sub-Category Filter Buttons */}
                <div className="flex flex-wrap gap-1.5 w-full justify-center">
                  <button
                    onClick={() => handleSubFilterChange("all")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                      fiverrSubFilter === "all"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    All Fiverr ({fiverrCount})
                  </button>
                  <button
                    onClick={() => handleSubFilterChange("ai")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                      fiverrSubFilter === "ai"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    AI Copilots ({fiverrAiCount})
                  </button>
                  <button
                    onClick={() => handleSubFilterChange("extensions")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                      fiverrSubFilter === "extensions"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Extensions ({fiverrExtCount})
                  </button>
                  <button
                    onClick={() => handleSubFilterChange("scraping")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                      fiverrSubFilter === "scraping"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Scraping & Automation ({fiverrScrapeCount})
                  </button>
                  <button
                    onClick={() => handleSubFilterChange("web3")}
                    className={`px-3 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                      fiverrSubFilter === "web3"
                        ? "bg-foreground text-background font-bold shadow-xs"
                        : "bg-muted/60 text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    Web3 & APIs ({fiverrWeb3Count})
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between text-xs text-muted-foreground px-1">
            <span>
              Showing {displayedProjects.length} of {filteredProjects.length} projects
            </span>
            {searchQuery && (
              <button
                onClick={() => {
                  setSearchQuery("");
                  setVisibleCount(PAGE_SIZE);
                }}
                className="text-primary hover:underline font-medium cursor-pointer"
              >
                Clear search
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 w-full text-left">
            {displayedProjects.map((project, id) => {
              const card = (
                <ProjectCard
                  href={project.href}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                  priority={id < 4}
                />
              );

              return id < 8 ? (
                <BlurFade
                  key={project.href}
                  delay={BLUR_FADE_DELAY + (id % 8) * 0.02}
                  className="h-full"
                >
                  {card}
                </BlurFade>
              ) : (
                <div key={project.href} className="h-full">
                  {card}
                </div>
              );
            })}
          </div>

          {!searchQuery.trim() && visibleCount < filteredProjects.length && (
            <div className="flex flex-col items-center justify-center pt-4 pb-2 gap-2">
              <button
                onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
                className="px-6 py-2.5 rounded-xl border border-primary/30 bg-primary/10 hover:bg-primary/20 text-xs sm:text-sm font-bold text-foreground transition-all shadow-xs cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
              >
                Load More Projects ({filteredProjects.length - visibleCount} remaining)
              </button>
              <button
                onClick={() => setVisibleCount(filteredProjects.length)}
                className="text-[11px] text-muted-foreground hover:text-foreground underline cursor-pointer"
              >
                View all ({filteredProjects.length})
              </button>
            </div>
          )}

          {filteredProjects.length === 0 && (
            <div className="p-8 text-center border rounded-2xl bg-muted/20 space-y-2">
              <p className="text-sm font-semibold text-foreground">
                {searchQuery
                  ? `No projects found matching "${searchQuery}"`
                  : "No projects in this category"}
              </p>
              <p className="text-xs text-muted-foreground">Try searching for a different keyword or reset filters.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setActiveTab("all");
                  setFiverrSubFilter("all");
                  setVisibleCount(PAGE_SIZE);
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold cursor-pointer"
              >
                Reset Search & Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
