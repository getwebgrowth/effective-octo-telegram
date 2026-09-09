import { withContentCollections } from "@content-collections/next";
import { readFileSync } from "fs";

let fiverrRedirects = [];
try {
  fiverrRedirects = JSON.parse(readFileSync("./src/data/fiverr-redirects.json", "utf8"));
} catch (e) {
  fiverrRedirects = [];
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 80],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },
  experimental: {
    optimizePackageImports: [
      "react-icons",
      "react-icons/si",
      "motion",
      "@radix-ui/react-icons",
    ],
  },
  async redirects() {
    return fiverrRedirects;
  },
  async rewrites() {
    return [
      {
        source: "/_vercel/insights/script.js",
        destination: "/vercel-stub/insights.js",
      },
      {
        source: "/_vercel/speed-insights/script.js",
        destination: "/vercel-stub/speed-insights.js",
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/:all*(jpg|jpeg|png|webp|avif|svg|mp4|webm|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "X-Robots-Tag",
            value: "max-snippet:-1, max-image-preview:large, max-video-preview:-1",
          },
        ],
      },
    ];
  },
};

// withContentCollections must be the outermost plugin
export default withContentCollections(nextConfig);
