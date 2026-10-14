import type { MetadataRoute } from "next";
import { studies } from "@/content/portfolio";
import { siteUrl } from "@/lib/seo";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    ...studies.map((study) => ({ url: `${siteUrl}/work/${study.slug}` })),
  ];
}
