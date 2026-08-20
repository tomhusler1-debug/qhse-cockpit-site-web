import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales d'utilisation",
  description:
    "Conditions générales d'utilisation du site vitrine QHSE Cockpit.",
};

export default function CGUPage() {
  return (
    <LegalPage
      title="Conditions générales d'utilisation"
      updatedAt="20 août 2026"
      intro={
        <p>
          Les présentes conditions générales d&apos;utilisation (« CGU »)
          régissent l&apos;accès et l&apos;utilisation du site vitrine QHSE
          Cockpit (le « Site »). Elles ne constituent pas les conditions
          contractuelles d&apos;utilisation du logiciel QHSE Cockpit, qui
          feront l&apos;objet d&apos;un contrat distinct entre l&apos;éditeur
          et ses clients.
        </p>
      }
      sections={[
        {
          id: "objet",
          title: "1. Objet",
          content: (
            <p>
              Le Site a pour objet de présenter l&apos;offre logicielle QHSE
              Cockpit et de permettre aux visiteurs de prendre contact avec
              l&apos;éditeur. L&apos;accès au Site est libre et gratuit.
            </p>
          ),
        },
        {
          id: "acces",
          title: "2. Accès au site",
          content: (
            <p>
              L&apos;éditeur met tout en œuvre pour assurer l&apos;accès au
              Site 24 heures sur 24, 7 jours sur 7, sauf cas de force
              majeure, maintenance ou panne technique. L&apos;éditeur ne
              saurait être tenu responsable d&apos;une indisponibilité
              temporaire du Site.
            </p>
          ),
        },
        {
          id: "propriete",
          title: "3. Propriété intellectuelle",
          content: (
            <p>
              L&apos;ensemble des éléments du Site (textes, logo,
              illustrations, structure, code) est protégé par le droit de la
              propriété intellectuelle. Toute reproduction ou représentation,
              totale ou partielle, sans autorisation préalable de
              l&apos;éditeur est interdite.
            </p>
          ),
        },
        {
          id: "usage",
          title: "4. Usage du site",
          content: (
            <p>
              L&apos;utilisateur s&apos;engage à utiliser le Site
              conformément à sa destination et à la réglementation en
              vigueur. Toute tentative d&apos;atteinte à l&apos;intégrité ou
              à la sécurité du Site (extraction massive de contenu,
              intrusion, perturbation du service) est strictement interdite.
            </p>
          ),
        },
        {
          id: "liens",
          title: "5. Liens hypertextes",
          content: (
            <p>
              Le Site peut contenir des liens vers des sites tiers.
              L&apos;éditeur n&apos;exerce aucun contrôle sur le contenu de
              ces sites et décline toute responsabilité à leur égard.
            </p>
          ),
        },
        {
          id: "responsabilite",
          title: "6. Responsabilité",
          content: (
            <p>
              L&apos;éditeur s&apos;efforce de fournir des informations
              exactes et à jour sur le Site, sans garantir l&apos;absence
              d&apos;erreur. L&apos;éditeur ne saurait être tenu responsable
              des dommages résultant de l&apos;utilisation du Site ou de
              l&apos;impossibilité d&apos;y accéder.
            </p>
          ),
        },
        {
          id: "modification",
          title: "7. Modification des CGU",
          content: (
            <p>
              L&apos;éditeur se réserve le droit de modifier les présentes
              CGU à tout moment. La version applicable est celle en vigueur
              à la date de consultation du Site.
            </p>
          ),
        },
        {
          id: "droit",
          title: "8. Droit applicable",
          content: (
            <p>
              Les présentes CGU sont soumises au droit français. À défaut de
              résolution amiable d&apos;un litige, les tribunaux français
              seront seuls compétents.
            </p>
          ),
        },
      ]}
    />
  );
}
