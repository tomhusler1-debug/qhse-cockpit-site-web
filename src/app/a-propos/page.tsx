import type { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { CTABanner } from "@/components/marketing/CTABanner";
import { Reveal } from "@/components/motion/Reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "QHSE Cockpit conçoit un outil de pilotage qualité, hygiène, sécurité et environnement pensé pour le terrain autant que pour la direction.",
};

const values = [
  {
    title: "Clarté",
    description:
      "Un indicateur QHSE n'a de valeur que s'il est compris en quelques secondes. Nous concevons chaque écran pour aller à l'essentiel.",
  },
  {
    title: "Fiabilité",
    description:
      "Les données QHSE servent de preuve en cas d'audit ou de contrôle. Nous les traitons avec la rigueur que cela impose.",
  },
  {
    title: "Terrain d'abord",
    description:
      "Un outil QHSE efficace est un outil que les équipes terrain utilisent réellement, pas seulement la direction.",
  },
];

export default function AProposPage() {
  return (
    <>
      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              À propos
            </p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              Un outil pensé pour le pilotage QHSE au quotidien
            </h1>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <Reveal variant="left">
              <h2 className="text-2xl font-bold tracking-tight text-text">
                Notre mission
              </h2>
              <p className="mt-4 text-base leading-7 text-text-secondary">
                QHSE Cockpit est né d&apos;un constat simple : la plupart des
                organisations gèrent leur qualité, leur sécurité et leur
                environnement dans des outils dispersés — tableurs, e-mails,
                classeurs papier — qui rendent le suivi difficile et le
                reporting chronophage.
              </p>
              <p className="mt-4 text-base leading-7 text-text-secondary">
                Notre mission est de donner aux responsables QHSE et à leurs
                équipes terrain un outil unique, clair et fiable pour piloter
                les non-conformités, les actions correctives, les audits et
                les indicateurs — du terrain jusqu&apos;au comité de
                direction.
              </p>
            </Reveal>
            <Reveal variant="scale" delay={100}>
              <div className="group relative overflow-hidden rounded-2xl border border-border shadow-sm">
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src="/images/site-plan-tablet.jpg"
                    alt="Responsable QHSE annotant un plan de site sur tablette QHSE Cockpit"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-bg-muted py-20 sm:py-28">
        <Container>
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-text sm:text-4xl">
              Nos principes
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 80}>
                <div className="h-full rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100">
                  <h3 className="text-base font-semibold text-text">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">
                    {value.description}
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
