import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description:
    "Comment le site QHSE Cockpit traite les données lors de votre visite.",
};

export default function ConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      updatedAt="20 août 2026"
      intro={
        <p>
          Cette politique décrit les traitements de données réalisés par le
          site vitrine QHSE Cockpit (le « Site »), accessible à
          l&apos;adresse de ce nom de domaine. Elle ne couvre pas
          l&apos;éventuel logiciel QHSE Cockpit lui-même, dont
          l&apos;utilisation, une fois commercialisée, fera l&apos;objet
          d&apos;une politique de confidentialité et de traitements
          spécifiques communiqués aux clients.
        </p>
      }
      sections={[
        {
          id: "responsable",
          title: "1. Responsable de traitement",
          content: (
            <p>
              Le responsable de traitement est <strong>[À RENSEIGNER]</strong>,
              éditeur du Site, dont les coordonnées complètes figurent dans
              les <a href="/mentions-legales">mentions légales</a>.
            </p>
          ),
        },
        {
          id: "donnees",
          title: "2. Données traitées",
          content: (
            <>
              <p>
                Le Site est un site vitrine de présentation. Il ne comporte
                actuellement aucun formulaire de collecte de données
                personnelles : la page « Contact » affiche des coordonnées
                statiques, sans transmission de données au serveur.
              </p>
              <p>
                Si un formulaire de contact ou de demande de démonstration
                venait à être ajouté, cette politique serait mise à jour pour
                préciser les données collectées, leur finalité, leur base
                légale et leur durée de conservation, avant toute mise en
                ligne.
              </p>
              <p>
                Comme tout site web, des données techniques de connexion
                (adresse IP, type de navigateur, pages consultées, date et
                heure de visite) sont traitées de manière ponctuelle par
                notre hébergeur à des fins de sécurité et de mesure
                d&apos;audience — voir la section « Mesure d&apos;audience »
                ci-dessous.
              </p>
            </>
          ),
        },
        {
          id: "mesure-audience",
          title: "3. Mesure d'audience",
          content: (
            <>
              <p>
                Le Site utilise Vercel Web Analytics, un outil de mesure
                d&apos;audience qui ne dépose pas de cookie et ne collecte
                aucune donnée permettant d&apos;identifier directement un
                visiteur (pas d&apos;adresse IP complète conservée, pas de
                profilage, pas de croisement avec d&apos;autres sites).
                Il produit uniquement des statistiques agrégées et
                anonymes de fréquentation.
              </p>
              <p>
                Conformément aux recommandations de la CNIL, cet outil étant
                strictement nécessaire au fonctionnement du service, exempté
                de finalité publicitaire et sans traçage individuel, il ne
                nécessite pas de recueil de consentement préalable.
              </p>
            </>
          ),
        },
        {
          id: "cookies",
          title: "4. Cookies",
          content: (
            <p>
              Le détail des cookies et traceurs utilisés (ou non) par le
              Site est décrit dans notre{" "}
              <a href="/cookies">politique cookies</a>.
            </p>
          ),
        },
        {
          id: "destinataires",
          title: "5. Destinataires et sous-traitants",
          content: (
            <>
              <p>
                Les données techniques de connexion sont hébergées par notre
                prestataire d&apos;hébergement, Vercel Inc., qui agit en
                qualité de sous-traitant pour l&apos;hébergement du Site et
                la mesure d&apos;audience.
              </p>
              <p>
                Aucune donnée n&apos;est vendue ni cédée à des tiers à des
                fins commerciales.
              </p>
            </>
          ),
        },
        {
          id: "transferts",
          title: "6. Transferts hors Union européenne",
          content: (
            <p>
              Notre hébergeur, Vercel Inc., est une société basée aux
              États-Unis. Les transferts de données associés à
              l&apos;hébergement s&apos;appuient sur les garanties
              prévues par la réglementation européenne applicable (clauses
              contractuelles types ou mécanisme équivalent). Pour plus de
              détails, consultez la politique de confidentialité de{" "}
              <a
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>
              .
            </p>
          ),
        },
        {
          id: "duree",
          title: "7. Durée de conservation",
          content: (
            <p>
              Les données techniques de connexion sont conservées pour une
              durée limitée, strictement nécessaire aux finalités de
              sécurité et de mesure d&apos;audience, conformément aux
              recommandations de la CNIL.
            </p>
          ),
        },
        {
          id: "droits",
          title: "8. Vos droits",
          content: (
            <>
              <p>
                Conformément au Règlement général sur la protection des
                données (RGPD) et à la loi Informatique et Libertés, vous
                disposez d&apos;un droit d&apos;accès, de rectification,
                d&apos;effacement, de limitation, d&apos;opposition et de
                portabilité sur les données vous concernant, ainsi que du
                droit de définir des directives relatives à leur sort après
                votre décès.
              </p>
              <p>
                Pour exercer ces droits, contactez-nous via notre{" "}
                <a href="/contact">page de contact</a>. Vous disposez
                également du droit d&apos;introduire une réclamation auprès
                de la{" "}
                <a
                  href="https://www.cnil.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CNIL
                </a>
                .
              </p>
            </>
          ),
        },
      ]}
    />
  );
}
