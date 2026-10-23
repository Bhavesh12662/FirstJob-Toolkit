import type { MetadataRoute } from "next";
import { siteConfig, siteRoutes } from "@/lib/site";

/**
 * XML sitemap. Next.js serves this at /sitemap.xml.
 * Every entry uses the same base URL as canonical tags and OG metadata.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return siteRoutes.map((route) => ({
    url: `${siteConfig.url}${route.path === "/" ? "" : route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
