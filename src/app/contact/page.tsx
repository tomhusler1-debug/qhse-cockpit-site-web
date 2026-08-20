import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez l'équipe QHSE Cockpit pour organiser une démonstration ou obtenir un devis personnalisé.",
};

const channels = [
  {
    label: "E-mail",
    value: "[À RENSEIGNER]",
    icon: (
      <path
        d="M3 6l9 7 9-7M3 6v12h18V6M3 6h18"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Téléphone",
    value: "[À RENSEIGNER]",
    icon: (
      <path
        d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    label: "Adresse",
    value: "[À RENSEIGNER]",
    icon: (
      <>
        <path
          d="M12 21s7-6.1 7-11.5A7 7 0 005 9.5C5 14.9 12 21 12 21z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.8" />
      </>
    ),
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Contact
            </p>
            <h1 className="mt-3 text-balance text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
              Parlons de votre organisation QHSE
            </h1>
            <p className="mt-5 max-w-md text-base leading-7 text-text-secondary">
              Que vous souhaitiez une démonstration, un devis ou simplement
              poser une question, notre équipe vous répond rapidement.
            </p>

            <ul className="mt-10 space-y-6">
              {channels.map((channel) => (
                <li key={channel.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                    >
                      {channel.icon}
                    </svg>
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {channel.label}
                    </p>
                    <p className="text-sm text-text-secondary">
                      {channel.value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-bg-muted p-8">
            <h2 className="text-lg font-semibold text-text">
              Coordonnées en cours de finalisation
            </h2>
            <p className="mt-3 text-sm leading-6 text-text-secondary">
              Les canaux de contact directs (e-mail, téléphone, adresse) de
              QHSE Cockpit seront publiés ici une fois les informations
              légales de l&apos;entreprise finalisées. En attendant, ces
              champs sont volontairement laissés comme{" "}
              <span className="font-semibold text-text">
                [À RENSEIGNER]
              </span>{" "}
              afin de ne publier aucune donnée inexacte.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
