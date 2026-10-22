import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "/", priority: 1, freq: "weekly" as const },
    { path: "/menu/", priority: 0.9, freq: "weekly" as const },
    { path: "/reservations/", priority: 0.9, freq: "monthly" as const },
    { path: "/gallery/", priority: 0.8, freq: "monthly" as const },
    { path: "/contact/", priority: 0.8, freq: "monthly" as const },
    { path: "/about/", priority: 0.8, freq: "monthly" as const },
    { path: "/privacy/", priority: 0.3, freq: "yearly" as const },
    { path: "/terms/", priority: 0.3, freq: "yearly" as const },
  ];
  const now = new Date();
  return routes.map((r) => ({
    url: `${SITE.domain}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));
}
