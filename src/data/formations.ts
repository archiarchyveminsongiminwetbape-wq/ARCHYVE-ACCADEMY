export interface Formation {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  details: string[];
  certificationPrice: number;
  registrationFee: number;
  category: string;
  image: string;
}

export const formations: Formation[] = [
  {
    id: 'developpement-web',
    title: 'Développement Web',
    description: 'Maîtrisez les technologies web modernes pour créer des sites et applications web dynamiques.',
    price: 78000,
    duration: '3 mois',
    details: [
      'HTML5 et CSS3 avancés',
      'JavaScript moderne (ES6+)',
      'React.js et Hooks',
      'Gestion d\'état avec Redux',
      'API REST et intégration backend',
      'Responsive Design et Mobile-First',
      'Git et version control',
      'Tests et débogage',
      'Performance et optimisation',
      'Projet: Application web complète déployée'
    ],
    certificationPrice: 25000,
    registrationFee: 5000,
    category: 'Développement',
    image: '/images/web-dev.jpg'
  },
  {
    id: 'developpement-mobile',
    title: 'Développement Mobile',
    description: 'Apprenez à créer des applications mobiles cross-plateformes avec les dernières technologies.',
    price: 83000,
    duration: '3 mois',
    details: [
      'React Native et Flutter',
      'Composants UI et Navigation',
      'Gestion d\'état (Redux, Provider)',
      'Accès aux fonctionnalités natives',
      'Intégration d\'API REST',
      'Animations et transitions',
      'Tests unitaires et intégration',
      'Performance et optimisation',
      'Publication sur App Store et Play Store',
      'Projet: Application mobile complète'
    ],
    certificationPrice: 25000,
    registrationFee: 5000,
    category: 'Développement',
    image: '/images/developpement-mobile.jpg'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Maîtrisez l\'analyse de données et le machine learning avec Python.',
    price: 93000,
    duration: '4 mois',
    details: [
      'Python avancé pour Data Science',
      'NumPy et Pandas pour la manipulation',
      'Visualisation avec Matplotlib et Seaborn',
      'Statistiques et probabilités',
      'Machine Learning avec Scikit-learn',
      'Deep Learning avec TensorFlow/Keras',
      'Réseaux de neurones et CNN',
      'Traitement du langage naturel',
      'Vision par ordinateur',
      'Déploiement de modèles ML',
      'Projet: Projet complet de Data Science'
    ],
    certificationPrice: 30000,
    registrationFee: 5000,
    category: 'Data',
    image: '/images/data-science.jpg'
  },
  {
    id: 'cybersecurite',
    title: 'Cybersécurité',
    description: 'Apprenez à protéger les systèmes et réseaux contre les cyberattaques.',
    price: 88000,
    duration: '3 mois',
    details: [
      'Fondamentaux de la cybersécurité',
      'Sécurité des réseaux et protocoles',
      'Sécurité des systèmes d\'exploitation',
      'Cryptographie et chiffrement',
      'Tests d\'intrusion et pentesting',
      'Sécurité des applications web',
      'Forensique numérique',
      'Blue Team et Red Team',
      'Sécurité du cloud',
      'Gestion des incidents',
      'Projet: Audit de sécurité complet'
    ],
    certificationPrice: 35000,
    registrationFee: 5000,
    category: 'Sécurité',
    image: '/images/cybersecurite.jpg'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Maîtrisez les services cloud avec AWS, Azure et Google Cloud Platform.',
    price: 98000,
    duration: '4 mois',
    details: [
      'Fondamentaux du Cloud Computing',
      'AWS, Azure et Google Cloud Platform',
      'Services de calcul et stockage',
      'Bases de données cloud',
      'Sécurité et conformité',
      'Infrastructure as Code (Terraform)',
      'Conteneurs (Docker) et Orchestration (Kubernetes)',
      'Serverless et microservices',
      'Migration vers le cloud',
      'Optimisation des coûts',
      'Projet: Architecture cloud complète'
    ],
    certificationPrice: 40000,
    registrationFee: 5000,
    category: 'Cloud',
    image: '/images/cloud-computing.jpg'
  },
  {
    id: 'design-ui',
    title: 'Design UI/UX',
    description: 'Apprenez à créer des interfaces utilisateur attrayantes et intuitives avec les outils de design modernes.',
    price: 73000,
    duration: '3 mois',
    details: [
      'Principes fondamentaux du design',
      'Théorie des couleurs et typographie',
      'Figma et Adobe XD avancés',
      'Wireframing et prototypage',
      'Design systems et composants',
      'User research et personas',
      'Accessibilité (WCAG)',
      'Motion design et animations',
      'Design thinking',
      'A/B testing et analytics',
      'Projet: Design system complet'
    ],
    certificationPrice: 25000,
    registrationFee: 5000,
    category: 'Design',
    image: '/images/design-ui.jpg'
  },
  {
    id: 'bureautique',
    title: 'Bureautique Avancée',
    description: 'Maîtrisez les outils bureautiques essentiels pour optimiser votre productivité professionnelle.',
    price: 48000,
    duration: '2 mois',
    details: [
      'Microsoft Word avancé',
      'Microsoft Excel expert (formules, tableaux croisés)',
      'PowerPoint professionnel',
      'Outlook et gestion email',
      'Google Workspace',
      'Automatisation avec macros et VBA',
      'Analyse de données avancée',
      'Gestion de projet avec MS Project',
      'Collaboration et partage',
      'Sécurité et protection des données',
      'Projet: Système de gestion complet'
    ],
    certificationPrice: 15000,
    registrationFee: 5000,
    category: 'Bureautique',
    image: '/images/bureautique.jpg'
  }
];
