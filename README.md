# CLEA Web

Site web public et portail web de **CLEA**, construit avec Nuxt, Vue.js et TypeScript, et connecté au backend central Laravel via une API REST.

---

## Sommaire

- [Présentation](#présentation)
- [Architecture globale](#architecture-globale)
- [Stack technique](#stack-technique)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration](#configuration)
- [Lancement du projet](#lancement-du-projet)
- [Structure du projet](#structure-du-projet)
- [Architecture par domaines](#architecture-par-domaines)
- [Communication avec le backend](#communication-avec-le-backend)
- [API et versionnement](#api-et-versionnement)
- [Rendering : SSR, SSG et CSR](#rendering--ssr-ssg-et-csr)
- [Authentification](#authentification)
- [Gestion des données](#gestion-des-données)
- [State management](#state-management)
- [Composants](#composants)
- [Formulaires et validation](#formulaires-et-validation)
- [SEO](#seo)
- [Accessibilité](#accessibilité)
- [Responsive Design](#responsive-design)
- [Sécurité](#sécurité)
- [Tests](#tests)
- [Qualité du code](#qualité-du-code)
- [Git et conventions de commits](#git-et-conventions-de-commits)
- [Environnements](#environnements)
- [Build de production](#build-de-production)
- [Déploiement](#déploiement)
- [Monitoring](#monitoring)
- [Principes architecturaux](#principes-architecturaux)
- [Definition of Done](#definition-of-done)
- [Contribution](#contribution)

---

# Présentation

CLEA est une plateforme destinée à accompagner les femmes dans leur quotidien, notamment autour de leur santé, de leur cycle menstruel, de l'information et du mentorat.

Le présent repository contient le **frontend web public de CLEA**.

Il constitue une application indépendante du backend et communique avec celui-ci exclusivement via les interfaces prévues à cet effet.

Le projet peut évoluer progressivement d'un site public vers un véritable portail web CLEA.

## Objectifs

Le frontend doit être :

- moderne ;
- accessible ;
- responsive ;
- performant ;
- SEO-friendly ;
- maintenable ;
- évolutif ;
- sécurisé ;
- compatible avec les usages mobiles ;
- découplé du backend métier.

---

# Architecture globale

CLEA repose sur une architecture frontend/backend découplée.

```text
                         ┌───────────────────┐
                         │     Utilisateur   │
                         └─────────┬─────────┘
                                   │
                                   ▼
                         ┌───────────────────┐
                         │      Nuxt Web     │
                         │                   │
                         │ Vue.js 3          │
                         │ TypeScript        │
                         │ SSR / SSG / CSR   │
                         │ SEO               │
                         └─────────┬─────────┘
                                   │
                              HTTPS / JSON
                                   │
                                   ▼
                         ┌───────────────────┐
                         │    Laravel 13     │
                         │                   │
                         │ REST API          │
                         │ Sanctum           │
                         │ Domaines métier   │
                         │ Business Logic    │
                         └─────────┬─────────┘
                                   │
                                   ▼
                              PostgreSQL
```

Le backend Laravel est également utilisé par :

```text
                     Laravel API
                          │
             ┌────────────┼────────────┐
             │            │            │
             ▼            ▼            ▼
          Nuxt Web     Android App   Back-office
```

Il n'existe donc qu'un seul cœur métier.

---

# Stack technique

## Frontend

- **Nuxt**
- **Vue.js 3**
- **TypeScript**
- **Tailwind CSS**
- **Pinia**, lorsque nécessaire

## Backend

- **Laravel 13**
- **PHP 8.4+**
- **REST API**
- **Laravel Sanctum**

## Base de données

- **PostgreSQL**

## Tests

- tests unitaires et composants ;
- tests end-to-end ;
- outils de test adaptés à l'écosystème Nuxt/Vue.

## Qualité

- ESLint ;
- Prettier, si retenu par l'équipe ;
- TypeScript strict ;
- Git ;
- CI/CD.

---

# Prérequis

Avant de commencer, installer :

- Node.js ;
- npm, pnpm ou yarn selon le gestionnaire de paquets retenu ;
- Git.

Versions recommandées :

```text
Node.js : version LTS
npm     : version compatible avec Node.js
```

La version exacte de Node.js doit être définie dans le projet via `.nvmrc`, `package.json` ou un mécanisme équivalent.

Exemple :

```text
.nvmrc
```

permettant à toute l'équipe d'utiliser la même version de Node.js.

---

# Installation

Cloner le repository :

```bash
git clone <repository-url>
```

Entrer dans le projet :

```bash
cd clea-web
```

Installer les dépendances :

```bash
npm install
```

Créer le fichier d'environnement :

```bash
cp .env.example .env
```

Configurer les variables d'environnement.

Lancer ensuite le serveur de développement :

```bash
npm run dev
```

Le site sera accessible sur l'URL locale configurée par Nuxt.

---

# Configuration

La configuration du projet doit être réalisée via les variables d'environnement.

Exemple :

```env
NUXT_PUBLIC_APP_URL=http://localhost:3000
NUXT_PUBLIC_API_BASE_URL=http://localhost:8000/api/v1
```

Selon les besoins du projet, d'autres variables peuvent être ajoutées.

---

## Variables publiques

Les variables préfixées par :

```text
NUXT_PUBLIC_
```

peuvent être exposées au navigateur.

Elles ne doivent donc jamais contenir de secret.

Exemples :

```env
NUXT_PUBLIC_APP_URL=
NUXT_PUBLIC_API_BASE_URL=
NUXT_PUBLIC_GOOGLE_PLAY_URL=
NUXT_PUBLIC_ANALYTICS_ID=
```

---

## Variables privées

Les secrets doivent rester côté serveur.

Exemples :

```env
API_INTERNAL_KEY=
THIRD_PARTY_SECRET=
```

Ils ne doivent jamais être préfixés par `NUXT_PUBLIC_`.

---

# Lancement du projet

## Développement

```bash
npm run dev
```

## Développement avec ouverture automatique du navigateur

```bash
npm run dev -- --open
```

## Vérification TypeScript

```bash
npm run typecheck
```

## Lint

```bash
npm run lint
```

## Tests

```bash
npm run test
```

## Tests end-to-end

```bash
npm run test:e2e
```

## Build

```bash
npm run build
```

## Prévisualisation du build

```bash
npm run preview
```

Les scripts exacts doivent rester alignés avec ceux définis dans `package.json`.

---

# Structure du projet

L'organisation générale doit suivre une architecture par responsabilités et par domaines métier.

```text
clea-web/
│
├── app/
│   │
│   ├── components/
│   │   ├── ui/
│   │   └── shared/
│   │
│   ├── composables/
│   │
│   ├── domains/
│   │   ├── marketing/
│   │   ├── content/
│   │   ├── coaching/
│   │   ├── contact/
│   │   ├── application/
│   │   └── user/
│   │
│   ├── layouts/
│   │
│   ├── middleware/
│   │
│   ├── pages/
│   │
│   ├── plugins/
│   │
│   ├── services/
│   │
│   ├── stores/
│   │
│   ├── types/
│   │
│   └── utils/
│
├── assets/
│
├── public/
│
├── server/
│
├── tests/
│   ├── unit/
│   ├── component/
│   └── e2e/
│
├── .env.example
├── .gitignore
├── nuxt.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

La structure exacte peut évoluer, mais elle doit conserver les principes décrits dans ce document.

---

# Architecture par domaines

Le projet ne doit pas être organisé exclusivement selon les dossiers techniques.

À éviter :

```text
components/
services/
controllers/
models/
...
```

sans distinction fonctionnelle.

L'organisation doit refléter les domaines métier.

Exemple :

```text
domains/
├── content/
├── coaching/
├── application/
├── contact/
└── marketing/
```

Chaque domaine peut contenir ses propres :

- composants ;
- composables ;
- services API ;
- types ;
- utilitaires.

---

## Exemple de domaine

```text
domains/coaching/
│
├── components/
│   ├── CoachCard.vue
│   ├── CoachGrid.vue
│   └── CoachProfile.vue
│
├── composables/
│   └── useCoaches.ts
│
├── services/
│   └── coachingApi.ts
│
├── types/
│   └── coach.ts
│
└── index.ts
```

Cette organisation permet de faire évoluer un domaine sans disperser ses éléments dans toute l'application.

---

# Pages

Les pages Nuxt doivent représenter les routes accessibles par les utilisateurs.

Exemple :

```text
pages/
├── index.vue
├── a-propos.vue
├── fonctionnalites.vue
├── comment-ca-marche.vue
├── mentorat.vue
├── mentores/
│   ├── index.vue
│   └── [slug].vue
├── ressources/
│   ├── index.vue
│   └── [slug].vue
├── devenir-mentore.vue
├── contact.vue
├── faq.vue
├── telecharger.vue
├── politique-de-confidentialite.vue
├── conditions-utilisation.vue
└── mentions-legales.vue
```

Le routing est fourni par Nuxt.

Aucun routeur parallèle ne doit être introduit.

---

# Communication avec le backend

Le frontend communique avec le backend Laravel via HTTP/REST.

```text
Nuxt
  │
  │ HTTPS
  ▼
Laravel API
  │
  ▼
PostgreSQL
```

Le frontend ne communique jamais directement avec PostgreSQL.

---

# API Client

Les appels API doivent être centralisés.

Il faut éviter :

```text
Composant A → fetch()
Composant B → axios()
Composant C → fetch()
Page D → axios()
```

avec des configurations différentes.

Préférer :

```text
Vue
 ↓
Domain Service
 ↓
HTTP Client
 ↓
Laravel API
```

---

# Exemple d'organisation

```text
domains/
├── content/
│   └── services/
│       └── contentApi.ts
│
├── coaching/
│   └── services/
│       └── coachingApi.ts
│
└── contact/
    └── services/
        └── contactApi.ts
```

Les services doivent rester responsables de la communication avec l'API.

---

# API et versionnement

L'API Laravel doit être versionnée.

Exemple :

```text
/api/v1/
```

Les endpoints publics sont regroupés sous :

```text
/api/v1/public/
```

Exemples :

```text
GET  /api/v1/public/articles
GET  /api/v1/public/articles/{slug}

GET  /api/v1/public/coaches
GET  /api/v1/public/coaches/{slug}

GET  /api/v1/public/faq

POST /api/v1/public/contact
POST /api/v1/public/coach-applications
```

Les routes réelles doivent respecter le contrat officiel du backend.

---

# Contrat API

Le frontend dépend du **contrat de l'API**, et non de l'implémentation interne de Laravel.

Le frontend ne doit jamais supposer :

- le nom d'une table ;
- le nom d'une colonne PostgreSQL ;
- la structure d'un modèle Eloquent ;
- l'organisation interne du backend.

Le backend peut être refactorisé sans nécessiter de modification frontend tant que le contrat API reste compatible.

---

# Données publiques et privées

L'API doit séparer clairement :

```text
PUBLIC API
    ↓
Données pouvant être affichées publiquement

PRIVATE API
    ↓
Données nécessitant une authentification
```

Aucune donnée personnelle ou donnée de santé ne doit être exposée par une route publique.

---

# Rendering : SSR, SSG et CSR

Nuxt permet plusieurs stratégies de rendu.

CLEA doit utiliser une stratégie adaptée à chaque type de page.

---

## SSR

Le SSR est privilégié pour les pages publiques dont le contenu doit être disponible rapidement et indexable.

Exemples :

```text
Accueil
À propos
Fonctionnalités
Mentorat
Mentores
Articles
FAQ
```

Flux :

```text
Utilisateur
    ↓
Nuxt Server
    ↓
Laravel API
    ↓
Nuxt
    ↓
HTML
    ↓
Navigateur
```

---

## SSG / prerendering

Le prérendu peut être utilisé pour les pages dont le contenu change rarement.

Exemples :

- mentions légales ;
- pages institutionnelles ;
- certaines pages marketing.

La stratégie exacte doit être déterminée en fonction du rythme de publication.

---

## CSR

Le rendu côté client est pertinent pour :

- filtres ;
- recherches ;
- interactions ;
- formulaires ;
- composants dynamiques ;
- espaces authentifiés.

Il ne faut cependant pas transformer inutilement toutes les pages publiques en SPA.

---

# Authentification

L'authentification est centralisée dans Laravel.

Le frontend ne possède pas son propre système d'identité.

```text
Nuxt
  ↓
Laravel API
  ↓
Sanctum
  ↓
User
```

Si un espace authentifié est ajouté au site, il utilisera le même compte utilisateur que les autres applications CLEA.

Aucun deuxième compte ne doit être créé uniquement pour le site web.

---

# Autorisation

L'autorisation appartient au backend.

Le frontend peut adapter son interface en fonction des permissions connues, mais cette adaptation n'est jamais une mesure de sécurité.

Exemple :

```text
Nuxt
  → masque un bouton

Laravel
  → vérifie réellement la permission
```

Toute opération sensible doit être contrôlée côté Laravel.

---

# Gestion des données

Les données serveur ne doivent pas être dupliquées inutilement dans plusieurs stores.

Privilégier les mécanismes de récupération de données de Nuxt lorsque les données sont propres à une page.

Exemple :

```text
Page
 ↓
useAsyncData / mécanisme Nuxt
 ↓
Service API
 ↓
Laravel
```

---

# State management

Pinia est autorisé pour les états réellement globaux.

Exemples :

```text
auth
user
preferences
notifications
```

Éviter un store global pour :

- le contenu d'une seule page ;
- un formulaire local ;
- une liste temporaire ;
- une donnée récupérée une seule fois.

Principe :

> Utiliser le niveau de stockage le plus local possible.

---

# Composants

Les composants doivent être réutilisables et spécialisés.

## UI

```text
components/ui/
├── Button.vue
├── Input.vue
├── Textarea.vue
├── Select.vue
├── Modal.vue
├── Card.vue
├── Badge.vue
├── Alert.vue
├── Spinner.vue
└── Pagination.vue
```

## Métier

```text
domains/coaching/components/
├── CoachCard.vue
├── CoachGrid.vue
└── CoachProfile.vue
```

Les composants métier doivent utiliser les composants UI communs lorsqu'ils sont pertinents.

---

# Design System

Le projet doit disposer d'une identité visuelle cohérente.

Le design system doit centraliser notamment :

- couleurs ;
- typographies ;
- espacements ;
- boutons ;
- formulaires ;
- cartes ;
- alertes ;
- modales ;
- états ;
- icônes.

Les composants doivent éviter de recréer chacun leur propre style.

## Socle UI (implémenté)

Le socle UI frontend est configuré avec **Nuxt UI v4** et **Tailwind CSS v4** (thème CSS-first) :

- **Palettes de marque** définies dans `app/assets/css/main.css` (turquoise `clea`, vert `cleagreen`, orange `cleaorange`, jaune `cleayellow`, terre `cleaearth`, neutre chaud `cleaneutral`).
- **Aliases sémantiques** mappés dans `app/app.config.ts` (`primary`, `secondary`, `accent`, `highlight`, `earth`, `neutral`) — les composants les utilisent au lieu des palettes brutes.
- **Typographie** : Manrope (auto-chargée par `@nuxt/fonts`), via `--font-sans` / `--font-heading`.
- **Accessibilité** : les alias `primary`, `secondary` et `accent` basculent vers des nuances foncées en mode clair pour un contraste ≥ 4.5:1. Le mode sombre est activable via `UColorModeButton` et reste un fallback léger (`colorMode.preference: 'light'`).
- **Page de référence** : `/design-system` présente couleurs, typographie et composants disponibles.
- **Qualité** : `pnpm lint`, `pnpm typecheck` et `pnpm build` doivent passer avant fusion.

---

# Formulaires et validation

Les formulaires sont développés avec Vue.js.

Flux :

```text
Utilisateur
   ↓
Formulaire Vue
   ↓
Validation client
   ↓
API Laravel
   ↓
Validation serveur
   ↓
Traitement
```

La validation client sert à améliorer l'expérience.

La validation Laravel constitue la source de vérité.

---

# Gestion des erreurs

Le frontend doit gérer les erreurs API de manière uniforme.

Codes importants :

```text
400 Bad Request
401 Unauthorized
403 Forbidden
404 Not Found
409 Conflict
422 Unprocessable Content
429 Too Many Requests
500 Internal Server Error
502 Bad Gateway
503 Service Unavailable
```

Les erreurs doivent être transformées en messages compréhensibles.

Ne jamais afficher :

- stack trace ;
- exception brute ;
- informations internes ;
- détails SQL ;
- secrets.

---

# SEO

Le SEO est une exigence importante du site public.

Chaque page indexable doit définir :

- titre ;
- description ;
- canonical ;
- Open Graph ;
- image sociale ;
- métadonnées pertinentes.

Les pages doivent être accessibles avec des URLs propres.

Exemples :

```text
/mentorat
/mentores
/mentores/phila-ce
/ressources
/ressources/comprendre-son-cycle
```

---

# Sitemap

Le sitemap doit contenir les ressources publiques indexables.

Il peut inclure :

- pages publiques ;
- articles publiés ;
- profils publics de mentores.

Il ne doit pas inclure :

- pages privées ;
- dashboards ;
- données personnelles ;
- brouillons ;
- routes administratives.

---

# Robots

La configuration robots doit différencier les environnements.

```text
local
    ↓
noindex

staging
    ↓
noindex

production
    ↓
index
```

---

# Données structurées

Utiliser Schema.org lorsque pertinent.

Exemples :

```text
Organization
Article
BreadcrumbList
FAQPage
```

Les données structurées doivent uniquement décrire des informations réellement visibles ou pertinentes sur la page.

---

# Accessibilité

Le site doit être développé selon les bonnes pratiques WCAG.

Prévoir notamment :

- HTML sémantique ;
- navigation au clavier ;
- focus visible ;
- labels explicites ;
- contraste suffisant ;
- textes alternatifs ;
- messages d'erreur accessibles ;
- hiérarchie correcte des titres ;
- support des lecteurs d'écran.

L'accessibilité doit être prise en compte dès la conception des composants.

---

# Responsive Design

Le développement est mobile-first.

Le site doit être testé au minimum sur :

```text
Mobile
Tablet
Laptop
Desktop
Large Desktop
```

Les performances sur réseaux mobiles doivent être considérées comme une contrainte importante.

---

# Sécurité

La sécurité est une responsabilité partagée, mais les règles métier et contrôles critiques restent côté Laravel.

Le frontend doit notamment :

- utiliser HTTPS en production ;
- ne jamais exposer de secret ;
- éviter les injections HTML non maîtrisées ;
- traiter correctement les données externes ;
- utiliser des dépendances maintenues ;
- gérer correctement les cookies/tokens ;
- ne pas stocker inutilement de données sensibles ;
- respecter les politiques de sécurité du backend.

---

# Données sensibles

Le site public ne doit jamais exposer :

- données médicales ;
- cycles menstruels ;
- symptômes ;
- prédictions personnelles ;
- données privées de compte ;
- informations internes ;
- données administratives.

Ces informations ne doivent être accessibles qu'à travers les endpoints authentifiés et autorisés.

---

# Analytics

Les outils analytics peuvent être utilisés pour mesurer les performances du site et les parcours utilisateurs.

Événements possibles :

```text
page_view
download_app_clicked
coach_profile_viewed
coach_application_started
coach_application_submitted
contact_submitted
article_viewed
```

Ne jamais transmettre aux outils analytics des informations de santé ou autres données sensibles.

---

# Performance

Les objectifs sont :

- faible quantité de JavaScript inutile ;
- SSR pour le contenu public ;
- optimisation des images ;
- lazy loading ;
- code splitting ;
- cache ;
- CDN lorsque pertinent ;
- limitation des appels API ;
- chargement progressif.

Les performances doivent être mesurées avec des outils tels que Lighthouse et les Core Web Vitals.

---

# Images

Les images doivent être :

- optimisées ;
- adaptées à leur contexte ;
- correctement dimensionnées ;
- chargées avec une stratégie adaptée ;
- accompagnées d'un `alt` lorsqu'elles ont une fonction informative.

Les images purement décoratives doivent être traitées comme telles.

---

# Architecture Nuxt Server

La couche serveur de Nuxt peut être utilisée ponctuellement pour :

- proxy ;
- appels nécessitant un secret ;
- transformation de données ;
- cache ;
- intégration de services externes ;
- besoins spécifiques au SSR.

Elle ne doit pas devenir un deuxième backend métier.

---

# BFF

Un pattern Backend-for-Frontend peut être utilisé lorsque cela est nécessaire.

```text
Nuxt
  ↓
Nuxt Server
  ↓
Laravel API
```

Cependant, il ne faut pas déplacer dans Nuxt une logique métier qui doit être partagée avec :

- Android ;
- back-office ;
- autres clients ;
- futurs partenaires.

Cette logique appartient à Laravel.

---

# Ce qui appartient à Laravel

Les éléments suivants doivent rester dans le backend :

- règles métier ;
- authentification ;
- autorisation ;
- validation métier ;
- gestion des utilisateurs ;
- données ;
- calculs ;
- prédictions ;
- gestion du cycle ;
- paiements ;
- escrow ;
- traitement des candidatures ;
- logique de mentorat ;
- gestion des données sensibles.

---

# Ce qui appartient à Nuxt

Nuxt est responsable de :

- UI ;
- UX ;
- navigation ;
- présentation ;
- interactions ;
- SEO ;
- SSR ;
- SSG ;
- responsive design ;
- appels API ;
- états frontend ;
- formulaires côté client.

---

# Tests

Le frontend doit disposer de plusieurs niveaux de tests.

## Tests unitaires

Tester :

- utilitaires ;
- composables ;
- transformations ;
- fonctions pures ;
- logique frontend isolée.

## Tests composants

Tester :

- composants UI ;
- formulaires ;
- états ;
- interactions ;
- affichage des erreurs.

## Tests E2E

Tester les parcours utilisateur critiques.

---

# Parcours E2E prioritaires

## Parcours découverte

```text
Accueil
  ↓
Fonctionnalités
  ↓
Mentorat
  ↓
Téléchargement
```

## Parcours ressources

```text
Ressources
  ↓
Catégorie
  ↓
Article
```

## Parcours mentore

```text
Mentorat
  ↓
Devenir mentore
  ↓
Formulaire
  ↓
Validation
  ↓
Confirmation
```

## Parcours contact

```text
Contact
  ↓
Formulaire
  ↓
Validation
  ↓
Confirmation
```

---

# Qualité du code

Le code doit respecter :

- TypeScript strict ;
- conventions Vue ;
- conventions Nuxt ;
- ESLint ;
- formatage automatique ;
- absence de code mort ;
- absence de duplication inutile ;
- composants réutilisables ;
- architecture par domaines.

Les erreurs TypeScript doivent être corrigées avant fusion.

---

# Environnements

Trois environnements minimum sont recommandés :

```text
local
   ↓
staging
   ↓
production
```

## Local

Utilisé pour le développement quotidien.

## Staging

Utilisé pour :

- intégration ;
- tests ;
- validation fonctionnelle ;
- recette.

## Production

Environnement accessible aux utilisateurs.

---

# Git et conventions de commits

Les branches doivent suivre une convention claire.

Exemples :

```text
main
develop
feature/*
fix/*
hotfix/*
```

Exemples :

```text
feature/public-coaches
feature/article-pages
feature/contact-form
fix/mobile-navigation
fix/api-error-handling
```

---

# Conventional Commits

Les commits doivent suivre autant que possible :

```text
feat:
fix:
refactor:
docs:
test:
chore:
perf:
build:
ci:
```

Exemples :

```text
feat: add public coach directory
feat: add article detail page
feat: integrate contact endpoint
fix: handle API validation errors
test: add coach listing e2e test
refactor: extract API client
docs: update setup instructions
```

---

# Pull Requests

Une Pull Request doit :

- avoir un objectif clairement défini ;
- rester raisonnablement limitée ;
- expliquer les changements ;
- inclure les tests réalisés ;
- signaler les éventuelles modifications du contrat API ;
- ne pas introduire de secrets ;
- respecter l'architecture du projet.

Avant merge :

```text
Lint       ✓
Typecheck  ✓
Tests      ✓
Build      ✓
Review     ✓
```

---

# Environnement et secrets

Ne jamais committer :

```text
.env
.env.production
.env.local
```

Le repository doit uniquement contenir :

```text
.env.example
```

Les secrets doivent être fournis par l'environnement d'exécution ou le système de gestion des secrets.

---

# Build de production

Construire l'application :

```bash
npm run build
```

Tester localement le build :

```bash
npm run preview
```

Le build doit réussir sans erreur TypeScript ou erreur bloquante.

---

# Déploiement

Le frontend Nuxt et le backend Laravel sont déployés indépendamment.

```text
                 Production
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
       Nuxt Web             Laravel API
          │                     │
          │                     ▼
          │                 PostgreSQL
          │
          └──── HTTPS / API ────┘
```

Un déploiement frontend ne doit pas nécessiter de redéployer Laravel sauf lorsqu'une modification du contrat API l'exige.

---

# CI/CD

Le pipeline recommandé est :

```text
Git Push
   ↓
Install dependencies
   ↓
Lint
   ↓
Type checking
   ↓
Unit tests
   ↓
Component tests
   ↓
E2E tests
   ↓
Build
   ↓
Deploy staging
   ↓
Validation
   ↓
Production
```

---

# Monitoring

Le frontend doit surveiller au minimum :

- erreurs JavaScript ;
- erreurs SSR ;
- erreurs API ;
- temps de réponse ;
- Core Web Vitals ;
- disponibilité.

Le backend Laravel possède son propre monitoring.

---

# Gestion des erreurs de disponibilité

Si Laravel est temporairement indisponible, Nuxt doit afficher une interface utilisateur appropriée.

Exemples :

```text
Service temporairement indisponible.
Veuillez réessayer dans quelques instants.
```

Une erreur backend ne doit jamais produire une interface cassée ou afficher des informations techniques.

---

# Architecture des domaines métier

Les domaines principaux du site sont susceptibles d'être :

```text
marketing
content
coaching
application
contact
user
```

Ils pourront évoluer avec les fonctionnalités du projet.

---

## Marketing

Responsable des contenus et composants liés à la présentation de CLEA.

Exemples :

- hero ;
- fonctionnalités ;
- avantages ;
- témoignages ;
- appels à l'action ;
- téléchargement.

---

## Content

Responsable des contenus éditoriaux.

Exemples :

- articles ;
- catégories ;
- tags ;
- recherches ;
- pagination.

---

## Coaching

Responsable du mentorat public.

Exemples :

- liste des mentores ;
- profils ;
- expertises ;
- présentation du programme.

---

## Application

Responsable des candidatures.

Exemples :

- candidature mentore ;
- formulaire ;
- validation ;
- confirmation.

---

## Contact

Responsable des communications entrantes.

Exemples :

- formulaire de contact ;
- validation ;
- confirmation.

---

## User

Domaine réservé aux fonctionnalités nécessitant un compte utilisateur.

Il pourra notamment accueillir :

- profil ;
- préférences ;
- dashboard ;
- données utilisateur ;
- fonctionnalités privées.

Ce domaine pourra être développé progressivement.

---

# Règles architecturales fondamentales

## Règle 1 — Laravel est la source de vérité métier

Toute règle métier importante doit être implémentée côté Laravel.

---

## Règle 2 — Nuxt est la couche d'expérience

Nuxt doit principalement gérer :

```text
Présentation
Interaction
Navigation
SEO
UX
```

---

## Règle 3 — L'API est le contrat

Nuxt communique avec Laravel à travers le contrat API.

Il ne dépend jamais directement de PostgreSQL ou des modèles Eloquent.

---

## Règle 4 — Pas de deuxième backend

La couche `server/` de Nuxt ne doit pas devenir un backend métier parallèle.

---

## Règle 5 — Pas de duplication métier

Ne pas reproduire dans Vue :

```text
Calculs métier
Règles métier
Permissions
Validation critique
```

---

## Règle 6 — Organisation par domaines

Lorsqu'une fonctionnalité est ajoutée, elle doit être placée dans le domaine correspondant.

---

## Règle 7 — Mobile-first

Chaque fonctionnalité doit être utilisable sur mobile avant d'être optimisée pour les écrans larges.

---

## Règle 8 — Sécurité côté serveur

Tout ce qui est critique doit être vérifié par Laravel.

---

# Architecture de référence

L'architecture cible complète est :

```text
                               CLEA
                                │
               ┌────────────────┼────────────────┐
               │                │                │
               ▼                ▼                ▼
           Nuxt Web         Android App       Back-office
               │                │                │
               └────────────────┼────────────────┘
                                │
                                ▼
                       ┌─────────────────┐
                       │   Laravel 13    │
                       │                 │
                       │ REST API        │
                       │ Sanctum         │
                       │ Domaines métier │
                       │ Services        │
                       │ Policies        │
                       │ Validation      │
                       └────────┬────────┘
                                │
                                ▼
                           PostgreSQL
```

---

# Definition of Done

Une fonctionnalité frontend est considérée comme terminée lorsqu'elle :

- respecte l'architecture par domaines ;
- respecte le design system ;
- utilise TypeScript ;
- respecte le contrat API ;
- gère les états de chargement ;
- gère les états d'erreur ;
- gère les états de succès ;
- est responsive ;
- est accessible ;
- respecte les exigences SEO lorsqu'elles s'appliquent ;
- possède les tests nécessaires ;
- ne duplique pas la logique métier Laravel ;
- n'expose aucun secret ;
- passe le lint ;
- passe le type checking ;
- passe les tests ;
- passe le build de production.

---

# Contribution

Toute contribution au projet doit respecter :

1. l'architecture définie dans ce README ;
2. les conventions TypeScript/Vue/Nuxt ;
3. l'organisation par domaines ;
4. les règles de sécurité ;
5. les conventions Git ;
6. les exigences de qualité ;
7. les tests nécessaires.

Avant toute modification architecturale importante, la décision doit être documentée et validée par l'équipe.

---

# Philosophie du projet

L'architecture CLEA repose sur une séparation claire des responsabilités :

```text
Nuxt
→ construit l'expérience web.

Vue.js
→ construit les interfaces et interactions.

Laravel
→ porte le métier et sécurise les opérations.

REST API
→ constitue le contrat entre les clients et le backend.

PostgreSQL
→ assure la persistance des données.
```

Le principe directeur est :

> **Un seul cœur métier, plusieurs clients.**

Le site web Nuxt, l'application Android et le back-office doivent pouvoir évoluer indépendamment tout en partageant le même backend Laravel.

Cette architecture doit permettre à CLEA de passer progressivement d'un site public à un véritable portail web sans remettre en cause les fondations techniques du projet.
