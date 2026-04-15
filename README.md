# ARCHYVE ACADEMY - Plateforme de Formation en Ligne

ARCHYVE ACADEMY est une plateforme de formation en ligne dédiée à l'apprentissage des métiers du numérique. Notre mission est de rendre la formation en informatique accessible à tous, quel que soit votre niveau initial.

## Fonctionnalités

### Formations Disponibles
- **Développement Web** : HTML5, CSS3, JavaScript, React.js, TypeScript
- **Développement Mobile** : React Native, Flutter
- **Data Science** : Python, Machine Learning, Deep Learning
- **Cybersécurité** : Sécurité des réseaux, Tests d'intrusion
- **Cloud Computing** : AWS, Azure, Google Cloud Platform
- **Design UI/UX** : Figma, Adobe XD, Design Systems
- **Bureautique Avancée** : Microsoft Office, Productivité

### Niveaux de Formation
- **Débutant** : 25 000 FCFA (1-2 mois)
- **Intermédiaire** : 60 000 FCFA (3 mois)
- **Avancé** : 100 000 FCFA (4 mois)
- **Frais d'inscription** : 5 000 FCFA
- **Certification** : +70 000 FCFA

### Fonctionnalités Implémentées
- Page d'accueil avec présentation des formations
- Catalogue de formations avec filtres et recherche
- Pages de détail pour chaque formation
- Formulaire d'inscription complet
- Page de témoignages
- Section témoignages sur la page d'accueil
- Navigation responsive
- Intégration WhatsApp pour contact
- Design moderne avec Tailwind CSS

## Technologies Utilisées

### Frontend
- **React 18** avec TypeScript
- **React Router** pour la navigation
- **Tailwind CSS** pour le style
- **React Icons** pour les icônes

### Développement
- **Create React App** pour le setup
- **ESLint** pour la qualité du code
- **TypeScript** pour le typage statique

## Structure du Projet

```
src/
|-- components/
|   |-- formations/
|   |   |-- FormationCard.tsx
|   |   `-- FormationDetail.tsx
|   `-- layout/
|       |-- Header.tsx
|       |-- Footer.tsx
|       `-- Layout.tsx
|-- data/
|   `-- formations.ts
|-- pages/
|   |-- Home.tsx
|   |-- formations/
|   |   |-- FormationsPage.tsx
|   |   `-- FormationDetail.tsx
|   |-- InscriptionPage.tsx
|   `-- TemoignagesPage.tsx
`-- App.tsx
```

## Installation

### Prérequis
- Node.js (version 16 ou supérieure)
- npm ou yarn

### Installation des dépendances
```bash
npm install
```

### Démarrage du serveur de développement
```bash
npm start
```

L'application sera disponible sur `http://localhost:3000`

### Build pour la production
```bash
npm run build
```

Le build sera généré dans le dossier `build/`

## Pages et Routes

- `/` : Page d'accueil
- `/courses` : Catalogue des formations
- `/courses/:id` : Détail d'une formation
- `/inscription/:id` : Formulaire d'inscription
- `/temoignages` : Page des témoignages
- `/about` : Page À propos
- `/contact` : Page de contact

## Contact

### Téléphones
- +237 657 02 90 80
- +237 620 97 25 79

### WhatsApp
- Contact direct via les boutons WhatsApp intégrés

### Email
- contact@archyve-academy.com

## Fonctionnalités à Venir

- Système de paiement en ligne
- Espace étudiant avec suivi des cours
- Panel administrateur
- Blog et articles
- Système de certification automatique
- Vidéos de démonstration
- Tests de positionnement

## Contribuer

Ce projet est développé et maintenu par l'équipe ARCHYVE ACADEMY.

## Licence

 2024 ARCHYVE ACADEMY. Tous droits réservés.
