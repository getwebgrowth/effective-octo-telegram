import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = DATA.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "PerplexityBot",
          "ClaudeBot",
          "anthropic-ai",
          "Google-Extended",
          "Googlebot",
          "Bingbot",
          "msnbot",
          "BingPreview",
          "Yandex",
          "YandexBot",
          "Applebot",
          "Applebot-Extended",
          "DuckDuckBot",
          "Slurp",
          "Baiduspider",
          "Sogou",
          "NaverBot",
          "Yeti",
          "Meta-ExternalAgent",
          "Cohere-ai",
          "Amazonbot",
          "Bytespider",
          "YouBot",
          "Brave-Search",
          "CCBot",
        ],
        allow: [
          "/",
          "/llms.txt",
          "/llms-full.txt",
          "/okf.json",
          "/okf/",
          "/pricing.md",
          "/.well-known/ai-plugin.json",
        ],
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

