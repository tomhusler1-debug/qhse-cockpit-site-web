import { ReactNode } from "react";
import { Container } from "@/components/ui/Container";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

export function LegalPage({
  title,
  updatedAt,
  intro,
  sections,
}: {
  title: string;
  updatedAt: string;
  intro?: ReactNode;
  sections: LegalSection[];
}) {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">
            <nav aria-label="Sommaire" className="sticky top-24">
              <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary">
                Sommaire
              </p>
              <ul className="mt-4 space-y-2.5 border-l border-border pl-4">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-text-secondary hover:text-indigo-600"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="max-w-2xl">
            <h1 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">
              {title}
            </h1>
            <p className="mt-3 text-sm text-text-secondary">
              Dernière mise à jour : {updatedAt}
            </p>

            {intro && (
              <div className="mt-6 space-y-4 text-sm leading-6 text-text-secondary">
                {intro}
              </div>
            )}

            <div className="mt-10 space-y-12">
              {sections.map((s) => (
                <div key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="text-xl font-bold text-text">{s.title}</h2>
                  <div className="mt-3 space-y-4 text-sm leading-6 text-text-secondary [&_a]:text-indigo-600 [&_a]:underline [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-text [&_ul]:space-y-2">
                    {s.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
