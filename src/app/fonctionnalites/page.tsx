import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "Découvrez les modules de QHSE Cockpit : non-conformités, actions correctives, audits, indicateurs, documents et pilotage multi-sites.",
};

const modules = [
  {
    badge: "Critique",
    tone: "danger" as const,
    title: "Non-conformités",
    description:
      "Déclarez une non-conformité en quelques champs, qualifiez sa gravité, associez les preuves et suivez son cycle de vie jusqu'à la clôture.",
    points: [
      "Formulaire de déclaration rapide, accessible depuis le terrain",
      "Classification par gravité, origine et processus concerné",
      "Historique complet et horodaté de chaque événement",
    ],
    image: "/images/rugged-device.jpg",
    imageAlt:
      "Déclaration d'une non-conformité sur terminal durci porté par un opérateur en usine",
  },
  {
    badge: "En cours",
    tone: "brand" as const,
    title: "Plans d'actions",
    description:
      "Transformez chaque écart en action corrective assignée, avec une échéance, un responsable et un statut suivi automatiquement.",
    points: [
      "Attribution nominative et échéances calendaires",
      "Relances automatiques avant échéance",
      "Vue consolidée de l'avancement par service ou par site",
    ],
    image: "/images/van-field-inspection.jpg",
    imageAlt:
      "Plan d'actions et inspection de site renseignés sur tablette QHSE Cockpit",
  },
  {
    badge: "Maîtrisé",
    tone: "success" as const,
    title: "Audits & inspections",
    description:
      "Planifiez vos audits internes et externes, digitalisez vos grilles de contrôle et transformez chaque écart constaté en action.",
    points: [
      "Grilles d'audit personnalisables par référentiel",
      "Planification et affectation des auditeurs",
      "Génération de rapports d'audit exportables",
    ],
    image: "/images/tablet-technician.jpg",
    imageAlt: "Auditeur consultant une grille d'audit QHSE Cockpit sur tablette",
  },
  {
    badge: "À surveiller",
    tone: "warning" as const,
    title: "Indicateurs & tableaux de bord",
    description:
      "Suivez vos KPI qualité, hygiène, sécurité et environnement dans des vues consolidées, filtrables par site, période ou processus.",
    points: [
      "Tableaux de bord configurables par rôle",
      "Export des données pour vos comités de direction",
      "Seuils d'alerte personnalisés",
    ],
    image: "/images/office-monitor.jpg",
    imageAlt: "Équipe QHSE suivant les indicateurs du tableau de bord sur écran de bureau",
  },
];

const extras = [
  {
    title: "Documents & preuves",
    description:
      "Centralisez procédures, certificats et preuves d'action, rattachés directement aux événements concernés.",
  },
  {
    title: "Multi-sites & multi-équipes",
    description:
      "Une vue consolidée pour la direction QHSE, des vues filtrées et pertinentes pour chaque site.",
  },
  {
    title: "Gestion des accès",
    description:
      "Définissez des rôles et permissions adaptés à chaque profil : direction, responsable QHSE, référent terrain.",
  },
  {
    title: "Export & reporting",
    description:
      "Générez des rapports clairs pour vos audits de certification et vos comités de direction, en quelques clics.",
  },
];

export default function FonctionnalitesPage() {
  return (
    <>
      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Fonctionnalités
            </p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              Un cockpit complet pour votre démarche QHSE
            </h1>
            <p className="mt-5 text-base leading-7 text-text-secondary">
              Chaque module de QHSE Cockpit répond à une réalité opérationnelle
              du terrain : déclarer, agir, contrôler et rendre compte —
              sans jongler entre plusieurs outils.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="space-y-20 sm:space-y-28">
            {modules.map((mod, index) => (
              <div
                key={mod.title}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal variant={index % 2 === 1 ? "right" : "left"}>
                  <Badge variant={mod.tone}>{mod.badge}</Badge>
                  <h2 className="mt-4 text-2xl font-bold tracking-tight text-text sm:text-3xl">
                    {mod.title}
                  </h2>
                  <p className="mt-4 text-base leading-7 text-text-secondary">
                    {mod.description}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {mod.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-text">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="mt-0.5 shrink-0 text-success"
                        >
                          <path
                            d="M20 6L9 17l-5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
                <Reveal variant="scale" delay={100}>
                  <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm">
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={mod.image}
                        alt={mod.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute left-4 top-4">
                      <Badge variant={mod.tone}>{mod.badge}</Badge>
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Et bien plus encore
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {extras.map((extra, index) => (
              <Reveal key={extra.title} delay={index * 60}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100">
                  <h3 className="text-base font-semibold text-text">
                    {extra.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {extra.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
