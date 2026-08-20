import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export function CTABanner() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 to-indigo-900 px-8 py-16 text-center sm:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "20px 20px",
            }}
          />
          <div className="relative">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Prêt à piloter votre QHSE en un coup d&apos;œil ?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-indigo-100">
              Échangez avec notre équipe pour voir comment QHSE Cockpit peut
              s&apos;adapter à vos process qualité, hygiène, sécurité et
              environnement.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="secondary" size="lg">
                Demander une démo
              </ButtonLink>
              <ButtonLink href="/tarifs" variant="onDark" size="lg">
                Voir les tarifs
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
