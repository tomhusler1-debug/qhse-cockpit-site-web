import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CTABanner } from "@/components/marketing/CTABanner";
import { FAQAccordion } from "@/components/marketing/FAQAccordion";
import { DashboardMock } from "@/components/marketing/DashboardMock";

const features = [
  {
    title: "Non-conformités & actions",
    description:
      "Déclarez, qualifiez et suivez chaque non-conformité jusqu'à sa clôture, avec un plan d'actions correctives assigné et daté.",
    icon: (
      <path
        d="M12 3l8 4v5c0 5-3.4 8.6-8 10-4.6-1.4-8-5-8-10V7l8-4z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Indicateurs & tableaux de bord",
    description:
      "Centralisez vos KPI qualité, sécurité et environnement dans des vues consolidées, exportables et partageables en un clic.",
    icon: (
      <path
        d="M4 19V9m6 10V5m6 14v-7m4 7H2"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Audits & inspections",
    description:
      "Planifiez vos audits internes et externes, digitalisez vos grilles de contrôle et suivez les écarts constatés sur le terrain.",
    icon: (
      <>
        <path
          d="M9 11l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  },
  {
    title: "Documents & preuves",
    description:
      "Rattachez procédures, certificats et preuves d'action à chaque événement pour être prêt en cas d'audit ou de contrôle.",
    icon: (
      <path
        d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8l-5-5z M14 3v5h5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Plans d'actions partagés",
    description:
      "Assignez les actions aux bons responsables, fixez des échéances et relancez automatiquement les retards.",
    icon: (
      <path
        d="M9 18l-5-5 1.4-1.4L9 15.2l9.6-9.6L20 7z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Multi-sites & multi-équipes",
    description:
      "Une vue consolidée pour la direction QHSE, des vues filtrées et pertinentes pour chaque site et chaque responsable terrain.",
    icon: (
      <path
        d="M3 21V9l9-6 9 6v12M9 21v-6h6v6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Connectez vos données",
    description:
      "Importez vos non-conformités, audits et indicateurs existants ou démarrez directement dans QHSE Cockpit.",
  },
  {
    number: "02",
    title: "Configurez vos processus",
    description:
      "Adaptez les statuts, les seuils d'alerte et les circuits de validation à votre organisation et à vos référentiels.",
  },
  {
    number: "03",
    title: "Pilotez en continu",
    description:
      "Suivez l'avancement des actions, anticipez les échéances et partagez des rapports clairs avec vos équipes et votre direction.",
  },
];

const faqItems = [
  {
    question: "QHSE Cockpit s'adapte-t-il à nos référentiels (ISO 9001, ISO 45001, ISO 14001) ?",
    answer:
      "Oui. La structure des modules — non-conformités, actions correctives, audits, indicateurs — s'adapte aux exigences des référentiels qualité, sécurité et environnement les plus courants, sans imposer un cadre rigide.",
  },
  {
    question: "Peut-on utiliser QHSE Cockpit sur plusieurs sites ?",
    answer:
      "Oui, la plateforme est pensée pour les organisations multi-sites : chaque site dispose de sa propre vue opérationnelle, tandis que la direction QHSE accède à une vue consolidée.",
  },
  {
    question: "Combien de temps prend la mise en place ?",
    answer:
      "Cela dépend du périmètre et du nombre de sites concernés. Nous en discutons ensemble lors d'un échange pour vous proposer un calendrier de déploiement réaliste.",
  },
  {
    question: "Comment se passe la migration de nos données existantes ?",
    answer:
      "Notre équipe vous accompagne pour importer vos données actuelles (tableurs, outils existants) afin de démarrer avec un historique exploitable dès le premier jour.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-indigo-900 via-indigo-700 to-indigo-600">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        <Container className="relative grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:py-32">
          <div className="animate-fade-up">
            <Badge variant="neutral">Logiciel QHSE pour organisations exigeantes</Badge>
            <h1 className="mt-6 text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Le pilotage QHSE, en un coup d&apos;œil.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-7 text-indigo-100">
              QHSE Cockpit centralise vos non-conformités, actions, audits et
              indicateurs qualité, hygiène, sécurité et environnement dans un
              tableau de bord unique — clair pour le terrain, fiable pour la
              direction.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Demander une démo
              </ButtonLink>
              <ButtonLink href="/fonctionnalites" variant="onDark" size="lg">
                Découvrir les fonctionnalités
              </ButtonLink>
            </div>
          </div>

          <div className="animate-fade-up [animation-delay:150ms]">
            <DashboardMock />
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Le problème
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Vos données QHSE méritent mieux qu&apos;un tableur éclaté
            </h2>
            <p className="mt-4 text-base leading-7 text-text-secondary">
              Fichiers Excel dispersés, e-mails de relance, classeurs papier :
              le suivi qualité, sécurité et environnement s&apos;essouffle
              vite quand chaque site et chaque service travaille séparément.
              QHSE Cockpit réunit toutes vos données dans un seul outil,
              lisible par tous.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Fonctionnalités
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Tout votre système QHSE, dans un seul cockpit
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-white p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="mt-4 text-base font-semibold text-text">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Mise en place
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Opérationnel en trois étapes
            </h2>
          </div>

          <div className="mt-14 grid gap-10 sm:grid-cols-3">
            {steps.map((step) => (
              <div key={step.number}>
                <span className="text-sm font-bold text-indigo-600">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-text">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Questions fréquentes
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Tout ce qu&apos;il faut savoir
            </h2>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            <FAQAccordion items={faqItems} />
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
