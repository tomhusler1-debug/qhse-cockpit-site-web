import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Un tarif QHSE Cockpit adapté à la taille de votre organisation, au nombre de sites et aux modules activés. Demandez un devis personnalisé.",
};

const plans = [
  {
    name: "Essentiel",
    tagline: "Pour démarrer le pilotage QHSE sur un site.",
    features: [
      "1 site",
      "Non-conformités & actions",
      "Tableau de bord d'indicateurs",
      "Support par e-mail",
    ],
    highlighted: false,
  },
  {
    name: "Multi-sites",
    tagline: "Pour les organisations avec plusieurs établissements.",
    features: [
      "Sites illimités",
      "Tous les modules Essentiel",
      "Audits & inspections",
      "Vue consolidée direction",
      "Support prioritaire",
    ],
    highlighted: true,
  },
  {
    name: "Sur mesure",
    tagline: "Pour les groupes avec des besoins spécifiques.",
    features: [
      "Déploiement multi-entités",
      "Intégrations avec vos outils existants",
      "Accompagnement au déploiement",
      "Interlocuteur dédié",
    ],
    highlighted: false,
  },
];

const faqItems = [
  {
    question: "Pourquoi les tarifs ne sont-ils pas affichés directement ?",
    answer:
      "Le prix dépend du nombre de sites, d'utilisateurs et de modules activés. Nous préférons comprendre votre organisation avant de vous proposer un tarif juste, plutôt que d'appliquer une grille standard qui ne correspondrait pas à votre réalité.",
  },
  {
    question: "Existe-t-il une période d'essai ?",
    answer:
      "Nous en discutons lors de l'échange initial, en fonction de votre contexte et de vos objectifs de déploiement.",
  },
  {
    question: "Peut-on changer de formule en cours de contrat ?",
    answer:
      "Oui, la formule peut évoluer avec votre organisation : ajout de sites, de modules ou d'utilisateurs supplémentaires.",
  },
];

export default function TarifsPage() {
  return (
    <>
      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Tarifs
            </p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              Un tarif adapté à votre organisation
            </h1>
            <p className="mt-5 text-base leading-7 text-text-secondary">
              Chaque déploiement QHSE Cockpit dépend du nombre de sites,
              d&apos;utilisateurs et de modules nécessaires. Contactez-nous
              pour recevoir un devis précis, sans engagement.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-2xl border p-8 ${
                  plan.highlighted
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-xl shadow-indigo-600/20"
                    : "border-border bg-white"
                }`}
              >
                {plan.highlighted && (
                  <Badge variant="neutral">Le plus choisi</Badge>
                )}
                <h2
                  className={`mt-4 text-xl font-bold ${
                    plan.highlighted ? "text-white" : "text-text"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`mt-2 text-sm ${
                    plan.highlighted ? "text-indigo-100" : "text-text-secondary"
                  }`}
                >
                  {plan.tagline}
                </p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-3 text-sm ${
                        plan.highlighted ? "text-indigo-50" : "text-text"
                      }`}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className={`mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-white" : "text-success"
                        }`}
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <ButtonLink
                  href="/contact"
                  variant={plan.highlighted ? "secondary" : "primary"}
                  size="lg"
                  className="mt-8 w-full"
                >
                  Demander un devis
                </ButtonLink>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Questions sur nos tarifs
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>
    </>
  );
}
