import { MetadataRoute } from "next";
import { DATA } from "@/data/resume";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${DATA.name} | Freelance Chrome Extension Developer`,
    short_name: DATA.name,
    description: DATA.seoDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait-primary",
    background_color: "#ffffff",
    theme_color: "#000000",
    lang: "en",
    categories: ["developer", "productivity", "utilities", "business"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
