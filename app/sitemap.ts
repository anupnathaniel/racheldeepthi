import type { MetadataRoute } from "next";
import { programs } from "@/data/programs";
import { absoluteSiteUrl } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/programs",
    "/community-impact",
    "/corporate-wellness",
    "/media",
    "/contact",
    "/privacy",
    "/terms",
    "/disclaimer",
    "/video-notice",
    "/accessibility",
  ];
  return [
    ...routes.map((route) => ({
      url: `${absoluteSiteUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "" ? "weekly" as const : "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...programs.map((program) => ({
      url: `${absoluteSiteUrl}/programs/${program.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
