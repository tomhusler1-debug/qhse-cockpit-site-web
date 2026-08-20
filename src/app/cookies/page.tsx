import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Cookies",
  description: "Politique relative aux cookies et traceurs du site QHSE Cockpit.",
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Politique cookies"
      updatedAt="20 août 2026"
      sections={[
        {
          id: "etat-actuel",
          title: "1. État actuel",
          content: (
            <>
              <p>
                À la date de mise à jour indiquée ci-dessus, ce site{" "}
                <strong>ne dépose aucun cookie publicitaire, de
                réseau social ou de mesure d&apos;audience nécessitant un
                consentement</strong>. Aucun bandeau de consentement
                n&apos;est donc affiché.
              </p>
              <p>
                La mesure d&apos;audience utilisée (Vercel Web Analytics) ne
                repose pas sur un cookie et ne trace pas les visiteurs
                individuellement — voir notre{" "}
                <a href="/confidentialite">politique de confidentialité</a>{" "}
                pour le détail.
              </p>
            </>
          ),
        },
        {
          id: "cookies-techniques",
          title: "2. Cookies strictement nécessaires",
          content: (
            <p>
              Le Site peut utiliser, le cas échéant, des éléments de stockage
              technique strictement nécessaires à son fonctionnement (par
              exemple la mémorisation d&apos;une préférence
              d&apos;affichage). Ces éléments, exemptés de consentement au
              titre de l&apos;article 82 de la loi Informatique et Libertés,
              ne sont pas utilisés à des fins de suivi publicitaire.
            </p>
          ),
        },
        {
          id: "evolution",
          title: "3. Évolution future",
          content: (
            <p>
              Si des cookies ou traceurs nécessitant un consentement
              (publicité, réseaux sociaux, vidéos intégrées, outils de chat
              tiers, etc.) venaient à être ajoutés au Site, un bandeau de
              consentement conforme aux recommandations de la CNIL serait mis
              en place avant leur activation, permettant d&apos;accepter, de
              refuser ou de personnaliser ces traceurs aussi facilement, et
              de modifier ce choix à tout moment.
            </p>
          ),
        },
        {
          id: "navigateur",
          title: "4. Gestion via votre navigateur",
          content: (
            <p>
              Vous pouvez à tout moment configurer votre navigateur pour
              refuser l&apos;installation de cookies ou en être informé.
              Chaque navigateur propose ses propres réglages, généralement
              accessibles dans le menu « Confidentialité » ou « Paramètres ».
            </p>
          ),
        },
        {
          id: "contact",
          title: "5. Contact",
          content: (
            <p>
              Pour toute question relative aux cookies et traceurs de ce
              Site, contactez-nous via notre{" "}
              <a href="/contact">page de contact</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
