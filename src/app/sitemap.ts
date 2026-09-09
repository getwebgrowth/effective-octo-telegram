import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";
import { allPosts } from "content-collections";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = DATA.url.replace(/\/$/, "");
  const staticLastModified = new Date();

  // Core static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/chrome-extension-developer-for-hire`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/full-stack-saas-developer-for-hire`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/llms.txt`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/llms-full.txt`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pricing.md`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/okf.json`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/okf/index.md`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/okf/services.md`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/okf/case-studies.md`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
    {
      url: `${baseUrl}/okf/pricing.md`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    },
  ];

  // Dynamic project case study routes
  const projectRoutes: MetadataRoute.Sitemap = allPosts.map((post) => {
    const slug = post._meta.path.replace(/\.mdx$/, "");
    return {
      url: `${baseUrl}/projects/${slug}`,
      lastModified: post.updatedAt ? new Date(post.updatedAt) : new Date(post.publishedAt),
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  return [...staticRoutes, ...projectRoutes];
}
