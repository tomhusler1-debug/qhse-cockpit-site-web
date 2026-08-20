import type { MetadataRoute } from "next";

// TODO [À RENSEIGNER]: remplacer par le nom de domaine réel une fois défini.
const SITE_URL = "https://qhse-cockpit.example.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
