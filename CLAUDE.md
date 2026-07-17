@AGENTS.md
Rôle & Objectif :
Tu es un Développeur Fullstack et Creative Technologist de niveau mondial. Ton objectif est de coder le site vitrine d'une entreprise de développement web. Le ton du site doit exclusivement utiliser le "Nous" ou le "[Nom de l'Entreprise]" (ne jamais utiliser le "Je"). Tout le site sera hébergé sur Vercel, les images seront ajoutées en dur dans le code (utilise le composant next/image de Next.js pour l'optimisation). Le design doit être de type "Éditorial Tactile", combinant minimalisme premium, 3D (React Three Fiber) et animations fluides (Framer Motion, GSAP).
Stack Technique : Next.js (App Router), React, TypeScript, Tailwind CSS, Framer Motion, GSAP, React Three Fiber.
Architecture et Composants Détaillés (Section par Section) :

1. Hero Section : Immersion 3D
 * Texte : "Nous concevons des plateformes web sur mesure, des solutions e-commerce et des applications métiers pour digitaliser et propulser votre entreprise."
 * Design : Titre massif animé en stagger. En arrière-plan (z-index négatif), un objet 3D abstrait en Glassmorphism qui réagit au mouvement de la souris.
 * Call-to-Action : Un "Magnetic Button" (bouton avec effet d'attraction au survol) indiquant "Démarrer un projet".

2. Section "Ce que nous construisons" (Services Élargis)
 * Objectif : Montrer que l'entreprise fait tout type de sites, pas seulement de l'e-commerce.
 * Design : Utilise un Sticky Scroll-Jacking. À gauche le titre reste fixe, à droite le texte défile avec un effet de "Text Reveal on Scroll" (opacité qui passe de 20% à 100%).
 * Contenu : Mentionner la création de Sites Vitrines (SEO), Plateformes E-commerce complexes, Applications Métiers (SaaS, ERP, CRM) et Outils sur mesure.

3. Section "Notre Méthode de Travail" (Le Processus)
 * Objectif : Rassurer le client sur le professionnalisme de l'entreprise.
 * Design : Une timeline interactive ou une grille asymétrique ("Blueprint grid" avec bordures fines 1px).
 * Étapes à afficher :
   * Audit & Stratégie (Comprendre le besoin business).
   * Conception & UI/UX (Maquettes et validation).
   * Développement & Tests (Code propre et contrôle qualité rigoureux).
   * Déploiement & Suivi (Mise en ligne et maintenance).

4. Section "Études de Cas" (Chaque projet a son propre design)
 * Objectif : Présenter les projets majeurs avec une mise en page différente et unique pour chacun, pour prouver la flexibilité de l'agence. Les images sont codées en dur.
 * Layout Projet 1 (KOUMALE - Marketplace multi-vendeurs) : Design centré sur le mobile. Utilise un mockup d'iPhone flottant en 3D ou en parallaxe montrant le flux de mise en relation acheteur/vendeur directement via WhatsApp (sans paiement en ligne).
 * Layout Projet 2 (HEVECAM - SaaS Gestion Hospitalière) : Design large et technique. Utilise une grille complexe (Bento évolué) pour montrer l'envergure du projet déployé sur 19 villages, avec des mini-cartes de data.
 * Layout Projet 3 (Mes Poches - App de gestion) : Design minimaliste avec un shader WebGL (effet de distorsion liquide au survol) sur l'image du dashboard.

5. Section "Tarification & Licences"
 * Objectif : Présenter les prix de manière transparente, notamment pour l'achat ou la location des applications déjà développées par l'entreprise (comme la licence de l'app e-commerce).
 * Design : Des cartes de prix élégantes (Pricing Cards) avec un effet de brillance (glow effect) au passage de la souris.
 * Contenu : Mettre en avant des offres claires (ex: Licence d'application prête à l'emploi, Développement Sur Mesure, Site Vitrine Pro) avec les avantages inclus.

6. Section Contact : Le Simulateur Interactif "WhatsApp Checkout"
 * Objectif : Supprimer le classique et ennuyeux formulaire "Dites m'en plus". Le remplacer par un flux de choix rapides qui redirige vers WhatsApp.
 * Design & UX : Une interface en plusieurs étapes cliquables (comme un quiz interactif rapide).
   * Étape 1 : "De quoi avez-vous besoin ?" -> Boutons cliquables : [Site Vitrine] / [E-commerce] / [Application Métier SaaS] / [Licence Application].
   * Étape 2 : "Quelle est votre priorité ?" -> [Vitesse] / [Design] / [Fonctionnalités complexes].
   * Action finale : Un gros bouton "Discuter de ce projet sur WhatsApp". Ce bouton génère dynamiquement un lien wa.me/ avec un message pré-rempli contenant les choix précis du client.

7. Footer : Le Void Lumineux
 * Design : Fond noir absolu. Le texte "LANCER UN PROJET AVEC NOUS" prend 100vw.
 * Effet : Utilise un masque SVG (mask-image) lié aux coordonnées de la souris pour révéler le texte en blanc vif uniquement là où l'utilisateur passe son curseur (effet Spotlight).
Consignes strictes d'exécution :
 * Génère le code de manière très modulaire.
 * N'utilise jamais la première personne du singulier dans les textes de remplissage.
 * Prépare les balises <Image src="..."/> pour que je puisse juste glisser mes chemins d'images en dur.
 * Assure-toi que les layouts des projets dans la section 4 soient structurellement différents dans le code (pas de simple .map() sur un composant générique, crée ProjectKoumale.tsx, ProjectHevecam.tsx, etc.).


Les textes à inscrire :

PARTIE 1 : Les Textes du Site (Le Copywriting)
1. Hero Section (L'entête du site)
 * Sur-titre (très discret) : Agence de Développement & Ingénierie Web
 * Titre Principal : Nous concevons des plateformes web sur mesure, des solutions e-commerce et des applications métiers pour digitaliser et propulser votre entreprise.
 * Bouton d'action (CTA) : Démarrer un projet
2. Section Expertise (Le texte qui défile)
 * Titre (Fixe) : Ce que nous construisons.
 * Paragraphe 1 : Sites Vitrines & Visibilité. Votre présence en ligne ne doit pas être une simple carte de visite. Nous développons des vitrines ultra-rapides et optimisées, conçues spécifiquement pour transformer vos visiteurs en contacts qualifiés.
 * Paragraphe 2 : Plateformes E-commerce. Nous créons des boutiques performantes, adaptées aux réalités de votre marché. Nous concevons des tunnels de vente sans friction pour maximiser votre chiffre d'affaires.
 * Paragraphe 3 : Applications Métiers & SaaS. De l'outil interne de gestion au déploiement de logiciels complexes, nous digitalisons vos processus pour vous faire gagner en temps, en sécurité et en efficacité.
3. Section Processus (Notre Méthode de Travail)
 * Titre : Notre processus d'ingénierie.
 * Étape 1 : Audit & Stratégie. Nous analysons vos processus et vos enjeux business pour définir l'architecture technologique exacte dont vous avez besoin.
 * Étape 2 : Conception UI/UX. Nous créons des interfaces modernes, fluides et centrées sur l'utilisateur pour garantir la meilleure expérience possible.
 * Étape 3 : Développement & Tests. Nous écrivons un code propre, performant et soumis à un contrôle qualité rigoureux avant chaque livraison.
 * Étape 4 : Déploiement. Nous assurons une mise en production sécurisée et une intégration parfaite au cœur de votre activité.
4. Section Études de Cas (Vos 3 Projets)
 * PROJET 1 : KOUMALE
   * Catégorie : Marketplace Multi-vendeurs
   * Le Défi : Digitaliser les commerçants locaux tout en respectant les habitudes des acheteurs, pour qui les systèmes de paiement en ligne traditionnels représentent souvent un obstacle.
   * Notre Solution : Nous avons conçu et déployé une marketplace sur mesure, ultra-rapide sur mobile. La force de notre architecture ? Un tunnel de conversion direct. L'acheteur parcourt le catalogue et finalise sa commande directement dans la messagerie privée WhatsApp du vendeur, sans aucun module de paiement en ligne complexe à configurer.
   * Le Résultat : Des ventes accélérées, une relation client instantanée, et une technologie tellement robuste que la solution est aujourd'hui licenciée à l'international.
 * PROJET 2 : HEVECAM
   * Catégorie : SaaS / Système de Gestion Hospitalière
   * Le Défi : Unifier et moderniser la gestion sanitaire d'un réseau médical étendu, en abandonnant les processus manuels pour une infrastructure centralisée.
   * Notre Solution : Nous avons architecturé et développé un système de gestion complet, pensé pour être extrêmement robuste et sécurisé. La plateforme digitalise et synchronise les opérations médicales et administratives à travers 19 villages différents.
   * Le Résultat : Une plateforme métier haute performance démontrant notre capacité à structurer des flux de données critiques sur de multiples sites physiques simultanément.
 * PROJET 3 : MES POCHES
   * Catégorie : Application Web / Gestion Financière
   * Le Défi : Transformer le suivi des finances quotidiennes en une expérience utilisateur intuitive et instantanée, sans friction.
   * Notre Solution : Nous avons conçu une application web fluide, épurée à l'essentiel. Déployée sur une infrastructure cloud moderne, elle garantit une sécurité maximale et des temps de chargement quasi nuls.
   * Le Résultat : Un outil de gestion de trésorerie moderne, léger et redoutablement efficace au quotidien.
5. Section Tarification & Licences
 * Titre : Nos Solutions & Tarification.
 * Offre 1 : Sites Vitrines Pro. Conception sur mesure, design premium et référencement optimisé pour amorcer votre présence digitale.
 * Offre 2 : Développement Sur Mesure. Plateformes e-commerce, applications métiers et SaaS développés spécifiquement pour vos processus complexes. (Sur devis).
 * Offre 3 : Licences Logicielles. Acquisition ou exploitation commerciale de nos architectures existantes (ex: technologie Marketplace KOUMALE) prêtes à être déployées sur votre marché.
6. Section Contact (Le Simulateur WhatsApp)
 * Question 1 : De quoi avez-vous besoin ?
   * [Boutons] : Site Vitrine / E-commerce / Application Métier / Licence Logicielle.
 * Question 2 : Quelle est votre priorité technique ?
   * [Boutons] : Vitesse extrême / Design Premium / Fonctions complexes.
 * Bouton de validation : Discuter de ce projet (WhatsApp)
7. Footer
 * Texte géant : LANCER UN PROJET AVEC NOUS

PARTIE 2 : 
Copiez le bloc suivant et donnez-le à votre IA en complément du Prompt V2 que nous avons élaboré précédemment. Cela lui indiquera exactement comment injecter le texte dans le design.
[DÉBUT DES INSTRUCTIONS D'INTÉGRATION DU CONTENU POUR CURSOR]
En te basant sur l'architecture UI/UX définie dans mon prompt précédent, voici le contenu textuel exact (Copywriting) que tu dois intégrer dans chaque composant. Tu dois respecter scrupuleusement ces textes. Ne génère pas de "Lorem Ipsum".
1. Composant : HeroSection.tsx
 * Insère le sur-titre "Agence de Développement & Ingénierie Web" en tout petit (police Monospace, taille 12px) juste au-dessus du titre.
 * Le titre animé en 3D (stagger) doit être : "Nous concevons des plateformes web sur mesure, des solutions e-commerce et des applications métiers pour digitaliser et propulser votre entreprise."
 * Le Magnetic Button doit afficher : "Démarrer un projet".
2. Composant : ExpertiseScrollSection.tsx (Sticky Left / Scroll Right)
 * Titre gauche (collant) : "Ce que nous construisons."
 * Texte droit (opacité dynamique au scroll) : Crée 3 blocs de paragraphes div distincts, séparés par un espace généreux (ex: gap-32).
   * Bloc 1 : Titre en gras "Sites Vitrines & Visibilité." + texte "Votre présence en ligne ne doit pas être..."
   * Bloc 2 : Titre en gras "Plateformes E-commerce." + texte "Nous créons des boutiques performantes..."
   * Bloc 3 : Titre en gras "Applications Métiers & SaaS." + texte "De l'outil interne de gestion au déploiement..."
3. Composant : MethodologyGrid.tsx
 * Crée une grille asymétrique (Bento grid ou Timeline avec lignes 1px).
 * Titre de section : "Notre processus d'ingénierie."
 * Intègre 4 cartes ou nœuds distincts :
   *      * Audit & Stratégie : "Nous analysons vos processus et vos enjeux..."
   *      * Conception UI/UX : "Nous créons des interfaces modernes..."
   *      * Développement & Tests : "Nous écrivons un code propre..."
   *      * Déploiement : "Nous assurons une mise en production..."
4. Composants des Études de Cas (Dossiers distincts)
 * Dans ProjectKoumale.tsx (Mockup mobile 3D) :
   * Titre : "KOUMALE" | Catégorie : "Marketplace Multi-vendeurs"
   * Structure le texte en 3 sous-parties claires : "Le Défi : [insérer texte]", "Notre Solution : [insérer texte avec mention WhatsApp direct]", "Le Résultat : [insérer texte]".
 * Dans ProjectHevecam.tsx (Bento Grid Dashboard SaaS) :
   * Titre : "HEVECAM" | Catégorie : "SaaS / Système de Gestion Hospitalière"
   * Même structure en 3 parties (Défi, Solution, Résultat) en insistant sur les "19 villages" dans le texte de la solution.
 * Dans ProjectMesPoches.tsx (Distorsion liquide minimaliste) :
   * Titre : "MES POCHES" | Catégorie : "Application Web / Gestion Financière"
   * Même structure en 3 parties.
5. Composant : PricingCards.tsx
 * Titre de la section : "Nos Solutions & Tarification."
 * Génère 3 cartes élégantes avec effet "glow" on hover.
 * Carte 1 : Titre "Sites Vitrines Pro" + Texte explicatif.
 * Carte 2 : Titre "Développement Sur Mesure" + Texte explicatif.
 * Carte 3 : Titre "Licences Logicielles" + Texte explicatif.
6. Composant : WhatsAppSimulator.tsx
 * C'est l'interface interactive. Étape 1 : Question "De quoi avez-vous besoin ?" avec les 4 choix en boutons cliquables. Étape 2 : Question "Quelle est votre priorité technique ?" avec les 3 choix.
 * Le bouton final doit être "Discuter de ce projet (WhatsApp)".
 * Logique : Implémente une fonction qui concatène les choix de l'utilisateur pour générer l'URL WhatsApp. Exemple de l'URL finale générée par la fonction : [https://wa.me/TON_NUMERO?text=Bonjour,%20je%20souhaite%20un%20projet%20de%20](https://wa.me/TON_NUMERO?text=Bonjour,%20je%20souhaite%20un%20projet%20de%20)[CHOIX_1]%20avec%20une%20priorité%20sur%20[CHOIX_2].
7. Composant : VoidFooter.tsx
 * Le masque dynamique SVG doit révéler le texte exact : "LANCER UN PROJET AVEC NOUS".


logo svg :

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="100%" height="500">
  <!-- Fond de présentation de la marque -->
  <rect width="100%" height="100%" fill="#0A0A0C" rx="16"/>
  
  <defs>
    <!-- Gradient Premium pour les structures solides -->
    <linearGradient id="monolithGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="60%" stop-color="#A3A3A3" />
      <stop offset="100%" stop-color="#262626" />
    </linearGradient>

    <!-- Gradient Néon pour le noyau d'énergie imaginaire -->
    <linearGradient id="neonCore" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00F5D4" />
      <stop offset="100%" stop-color="#7B2CBF" />
    </linearGradient>

    <!-- Filtre de lueur (Glow Effect) -->
    <filter id="superGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>

  <!-- LE LOGO ABSTRAIT (L'ANOMALIE GÉOMÉTRIQUE) -->
  <g transform="translate(0, -20)">
    <!-- 1. La lueur interne diffuse -->
    <path d="M 250,130 L 330,270 L 170,250 Z" fill="url(#neonCore)" opacity="0.4" filter="url(#superGlow)"/>

    <!-- 2. Le Shard principal (Forme coupée tranchante) -->
    <path d="M 250,110 L 320,260 L 220,290 Z" fill="url(#monolithGrad)" />

    <!-- 3. La structure secondaire en opposition (Lignes de structure vides) -->
    <path d="M 160,210 L 250,110 L 200,280 Z" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-opacity="0.7" stroke-dasharray="4 2"/>

    <!-- 4. Le fragment de précision suspendu (Le point de fuite) -->
    <circle cx="340" cy="190" r="5" fill="#00F5D4" filter="url(#superGlow)"/>
    
    <!-- 5. Ligne de tension technologique fine -->
    <line x1="250" y1="110" x2="340" y2="190" stroke="#FFFFFF" stroke-dasharray="2 8" stroke-opacity="0.4" stroke-width="1.5" />
  </g>

  <!-- Grille de repère design subtile en arrière-plan -->
  <path d="M 50,0 L 50,500 M 450,0 L 450,500 M 0,50 L 500,50 M 0,450 L 500,450" fill="none" stroke="#ffffff" stroke-opacity="0.02" stroke-width="1"/>
</svg>