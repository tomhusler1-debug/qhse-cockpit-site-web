import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// TODO [À RENSEIGNER]: remplacer par le nom de domaine réel une fois défini.
const SITE_URL = "https://qhse-cockpit.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QHSE Cockpit — Le pilotage QHSE, en un coup d'œil",
    template: "%s — QHSE Cockpit",
  },
  description:
    "QHSE Cockpit centralise vos indicateurs qualité, hygiène, sécurité et environnement dans un tableau de bord unique : non-conformités, actions, audits et documents pilotés en temps réel.",
  keywords: [
    "QHSE",
    "logiciel QHSE",
    "pilotage qualité sécurité environnement",
    "gestion non-conformités",
    "plan d'actions QHSE",
    "audit qualité",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "QHSE Cockpit",
    title: "QHSE Cockpit — Le pilotage QHSE, en un coup d'œil",
    description:
      "La plateforme qui centralise vos indicateurs qualité, hygiène, sécurité et environnement.",
  },
  twitter: {
    card: "summary_large_image",
    title: "QHSE Cockpit — Le pilotage QHSE, en un coup d'œil",
    description:
      "La plateforme qui centralise vos indicateurs qualité, hygiène, sécurité et environnement.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-indigo-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
