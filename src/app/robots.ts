export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { siteUrl } from "@/config/empresa";

export default function robots(): MetadataRoute.Robots {
  return {
    // Endereço provisório: não indexar (NEXT_PUBLIC_NOINDEX=1). O site oficial será o domínio próprio.
    rules: process.env.NEXT_PUBLIC_NOINDEX === "1" ? { userAgent: "*", disallow: "/" } : { userAgent: "*", allow: "/" },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
