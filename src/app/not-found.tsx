import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-28 sm:py-36">
      <Container className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
          Erreur 404
        </p>
        <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          Cette page n&apos;existe pas
        </h1>
        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-text-secondary">
          La page que vous cherchez a peut-être été déplacée ou n&apos;a
          jamais existé. Retournez à l&apos;accueil pour continuer votre
          navigation.
        </p>
        <div className="mt-8 flex justify-center">
          <ButtonLink href="/" variant="primary" size="lg">
            Retour à l&apos;accueil
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
