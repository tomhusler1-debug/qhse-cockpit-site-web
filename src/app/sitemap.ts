import type { MetadataRoute } from "next";

// TODO [À RENSEIGNER]: remplacer par le nom de domaine réel une fois défini.
const SITE_URL = "https://qhse-cockpit.example.com";

const routes = [
  "",
  "/fonctionnalites",
  "/tarifs",
  "/a-propos",
  "/contact",
  "/mentions-legales",
  "/confidentialite",
  "/cookies",
  "/cgu",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.6,
  }));
}
