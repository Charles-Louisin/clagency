/** Remplacez par le numéro WhatsApp international (sans + ni espaces). */
export const WHATSAPP_NUMBER = "237682601458";

/** Remplacez par votre adresse email de contact. */
export const CONTACT_EMAIL = "clynlouisin@gmail.com";

export const AGENCY_NAME = "CL Agency";

export const NAV_LINKS = [
  { href: "#expertise", label: "Expertise" },
  { href: "#processus", label: "Processus" },
  { href: "#atelier", label: "Atelier" },
  { href: "#projets", label: "Projets" },
  { href: "#tarifs", label: "Tarifs" },
  { href: "#contact", label: "Contact" },
] as const;

export type ServiceId =
  | "one-page"
  | "vitrine"
  | "ecommerce"
  | "redaction"
  | "sur-mesure"
  | "licence";

export type ServiceOffer = {
  id: ServiceId;
  title: string;
  tag: string;
  description: string;
  includes: string[];
  delivery?: string;
  priceLabel: string;
  priceHint?: string;
  featured?: boolean;
  priorities: string[];
};

export const SERVICES: ServiceOffer[] = [
  {
    id: "one-page",
    title: "One-page / Landing page",
    tag: "Conversion",
    description:
      "Une page unique pensée pour convertir : message clair, parcours fluide, impact immédiat.",
    includes: [
      "4 à 7 sections",
      "Design thinking orienté conversion",
      "Site responsive",
      "Structure optimisée pour le SEO",
    ],
    delivery: "Livré en 1 à 3 semaines",
    priceLabel: "1 000 €",
    priceHint: "À partir de",
    priorities: [
      "Conversion maximale",
      "Design impactant",
      "SEO & vitesse",
    ],
  },
  {
    id: "vitrine",
    title: "Site Vitrine Pro",
    tag: "Présence digitale",
    description:
      "Une vitrine premium multi-pages pour présenter votre activité avec une expérience soignée.",
    includes: [
      "5 pages",
      "UI/UX sur mesure et attractif",
      "Formulaire optimisé",
      "Tableau de bord admin",
      "Formation pour être autonome",
    ],
    delivery: "Livré en 4 à 8 semaines",
    priceLabel: "2 000 €",
    priceHint: "À partir de",
    priorities: [
      "Design UI/UX premium",
      "Référencement local",
      "Autonomie (formation)",
    ],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    tag: "Vente en ligne",
    description:
      "Une boutique complète, prête à vendre, avec catalogue, panier et moyens de paiement.",
    includes: [
      "5 pages + pages de commande & panier",
      "50 fiches produits remplies pour vous",
      "Dashboard admin + statistiques",
      "Intégration de moyens de paiement",
    ],
    delivery: "Livré en 8 à 16 semaines",
    priceLabel: "4 000 €",
    priceHint: "À partir de",
    featured: true,
    priorities: [
      "Tunnel de commande fluide",
      "Paiements sécurisés",
      "Catalogue & performance",
    ],
  },
  {
    id: "redaction",
    title: "Rédaction web",
    tag: "Contenu",
    description:
      "Des textes clairs et convaincants pour donner de la voix à votre site et nourrir votre présence.",
    includes: [
      "Rédaction des textes",
      "Réécriture de contenu existant",
      "Mise à jour de blog",
    ],
    priceLabel: "300 €",
    priceHint: "À partir de",
    priorities: [
      "Ton de marque",
      "SEO éditorial",
      "Volume & rythme",
    ],
  },
  {
    id: "sur-mesure",
    title: "Développement Sur Mesure",
    tag: "Sur devis",
    description:
      "Plateformes e-commerce complexes, applications métiers et SaaS développés pour vos processus.",
    includes: [
      "Architecture adaptée à vos flux",
      "Applications métiers / SaaS",
      "Intégrations & automatisations",
      "Contrôle qualité & déploiement",
    ],
    priceLabel: "Sur devis",
    featured: true,
    priorities: [
      "Architecture scalable",
      "Fonctions complexes",
      "Sécurité & fiabilité",
    ],
  },
  {
    id: "licence",
    title: "Licences Logicielles",
    tag: "Licence",
    description:
      "Acquisition ou exploitation commerciale de nos architectures existantes (ex. marketplace KOUMALE).",
    includes: [
      "Architecture prête à déployer",
      "Adaptation à votre marché",
      "Documentation & transfert",
    ],
    priceLabel: "Sur devis",
    priorities: [
      "Déploiement rapide",
      "Adaptation marché",
      "Support & maintenance",
    ],
  },
];

export function buildContactMessage(
  need: string,
  priorities: string[],
  note?: string
) {
  const prioritiesLine =
    priorities.length === 1
      ? `avec une priorité sur « ${priorities[0]} »`
      : `avec les priorités suivantes : ${priorities.map((p) => `« ${p} »`).join(", ")}`;

  let message = `Bonjour,\n\nJe souhaite un projet « ${need} » ${prioritiesLine}.`;

  if (note?.trim()) {
    message += `\n\n${note.trim()}`;
  }

  message += `\n\nCordialement.`;
  return message;
}

export function buildWhatsAppUrl(
  need: string,
  priorities: string[],
  note?: string
) {
  const text = buildContactMessage(need, priorities, note);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function buildMailtoUrl(
  need: string,
  priorities: string[],
  note?: string
) {
  const subject = `Demande de projet — ${need}`;
  const body = buildContactMessage(need, priorities, note);
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const OPEN_SERVICE_EVENT = "cl-open-service";

export const PREFERRED_SERVICE_STORAGE_KEY = "preferredService";

const SERVICE_IDS = new Set<ServiceId>(SERVICES.map((service) => service.id));

export function isValidServiceId(id: string): id is ServiceId {
  return SERVICE_IDS.has(id as ServiceId);
}
