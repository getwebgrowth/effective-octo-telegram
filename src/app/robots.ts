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
          "Applebot",
          "Applebot-Extended",
          "Meta-ExternalAgent",
          "Cohere-ai",
          "Amazonbot",
          "Bytespider",
          "YouBot",
          "Brave-Search",
          "CCBot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

