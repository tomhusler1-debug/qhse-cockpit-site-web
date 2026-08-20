import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site QHSE Cockpit.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      updatedAt="20 août 2026"
      sections={[
        {
          id: "editeur",
          title: "1. Éditeur du site",
          content: (
            <ul>
              <li>Dénomination sociale : <strong>[À RENSEIGNER]</strong></li>
              <li>Forme juridique : <strong>[À RENSEIGNER]</strong></li>
              <li>Capital social : <strong>[À RENSEIGNER]</strong></li>
              <li>Siège social : <strong>[À RENSEIGNER]</strong></li>
              <li>SIREN / SIRET : <strong>[À RENSEIGNER]</strong></li>
              <li>Numéro de TVA intracommunautaire : <strong>[À RENSEIGNER]</strong></li>
              <li>E-mail de contact : <strong>[À RENSEIGNER]</strong></li>
              <li>Téléphone : <strong>[À RENSEIGNER]</strong></li>
            </ul>
          ),
        },
        {
          id: "publication",
          title: "2. Directeur de la publication",
          content: (
            <p>
              Le directeur de la publication est <strong>[À RENSEIGNER]</strong>,
              en sa qualité de <strong>[À RENSEIGNER — ex. représentant légal]</strong>{" "}
              de l&apos;éditeur mentionné ci-dessus.
            </p>
          ),
        },
        {
          id: "hebergement",
          title: "3. Hébergement",
          content: (
            <>
              <p>Le site est hébergé par :</p>
              <ul>
                <li>Hébergeur : <strong>Vercel Inc.</strong></li>
                <li>Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis</li>
                <li>Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">vercel.com</a></li>
              </ul>
              <p>
                Des informations complémentaires sur l&apos;hébergement et les
                transferts de données associés figurent dans notre{" "}
                <a href="/confidentialite">politique de confidentialité</a>.
              </p>
            </>
          ),
        },
        {
          id: "propriete",
          title: "4. Propriété intellectuelle",
          content: (
            <p>
              L&apos;ensemble des contenus présents sur ce site (textes,
              graphismes, logo, icônes, structure) est, sauf mention
              contraire, la propriété de l&apos;éditeur du site ou de ses
              partenaires. Toute reproduction, représentation, modification
              ou exploitation, totale ou partielle, sans autorisation
              préalable est interdite.
            </p>
          ),
        },
        {
          id: "responsabilite",
          title: "5. Limitation de responsabilité",
          content: (
            <p>
              L&apos;éditeur s&apos;efforce d&apos;assurer l&apos;exactitude
              et la mise à jour des informations diffusées sur ce site, mais
              ne peut garantir l&apos;absence d&apos;erreur ou
              d&apos;interruption du service. L&apos;éditeur ne saurait être
              tenu responsable des dommages directs ou indirects résultant de
              l&apos;accès ou de l&apos;utilisation de ce site.
            </p>
          ),
        },
        {
          id: "liens",
          title: "6. Liens hypertextes",
          content: (
            <p>
              Ce site peut contenir des liens vers des sites tiers.
              L&apos;éditeur n&apos;exerce aucun contrôle sur ces sites et
              décline toute responsabilité quant à leur contenu.
            </p>
          ),
        },
        {
          id: "droit",
          title: "7. Droit applicable",
          content: (
            <p>
              Les présentes mentions légales sont soumises au droit français.
              En cas de litige, et à défaut de résolution amiable, les
              tribunaux français seront seuls compétents.
            </p>
          ),
        },
        {
          id: "contact",
          title: "8. Contact",
          content: (
            <p>
              Pour toute question relative à ces mentions légales, vous
              pouvez nous contacter via notre <a href="/contact">page de contact</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
