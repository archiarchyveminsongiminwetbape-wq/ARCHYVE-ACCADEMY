export interface Formation {
  id: string;
  title: string;
  description: string;
  levels: {
    debutant: {
      price: number;
      duration: string;
      details: string[];
    };
    intermediaire: {
      price: number;
      duration: string;
      details: string[];
    };
    avance: {
      price: number;
      duration: string;
      details: string[];
    };
  };
  certificationPrice: number;
  category: string;
  image: string;
}

export const formations: Formation[] = [
  {
    id: 'developpement-web',
    title: 'Développement Web',
    description: 'Maîtrisez les technologies web modernes pour créer des sites et applications web dynamiques.',
    levels: {
      debutant: {
        price: 25000,
        duration: '2 mois',
        details: [
          'Introduction au HTML5 et CSS3',
          'Bases de JavaScript',
          'Responsive Design avec Flexbox et Grid',
          'Introduction à Git et GitHub',
          'Projet pratique: Création d\'un site vitrine'
        ]
      },
      intermediaire: {
        price: 35000,
        duration: '3 mois',
        details: [
          'JavaScript avancé (ES6+)',
          'React.js ou Vue.js',
          'Gestion d\'état avec Redux/Vuex',
          'API REST et requêtes HTTP',
          'Projet: Application web complète'
        ]
      },
      avance: {
        price: 50000,
        duration: '4 mois',
        details: [
          'TypeScript',
          'Next.js ou Nuxt.js',
          'Tests unitaires et d\'intégration',
          'Performance et optimisation',
          'Projet: Application Full Stack'
        ]
      }
    },
    certificationPrice: 70000,
    category: 'Développement',
    image: '/images/web-dev.jpg'
  },
  {
    id: 'developpement-mobile',
    title: 'Développement Mobile',
    description: 'Apprenez à créer des applications mobiles cross-plateformes avec les dernières technologies.',
    levels: {
      debutant: {
        price: 25000,
        duration: '2 mois',
        details: [
          'Introduction à React Native ou Flutter',
          'Composants UI de base',
          'Navigation entre écrans',
          'Gestion d\'état simple',
          'Projet: Application mobile simple'
        ]
      },
      intermediaire: {
        price: 35000,
        duration: '3 mois',
        details: [
          'Navigation avancée',
          'Gestion d\'état avancée',
          'Accès aux fonctionnalités natives',
          'Intégration d\'API',
          'Projet: Application avec authentification'
        ]
      },
      avance: {
        price: 50000,
        duration: '4 mois',
        details: [
          'Animations avancées',
          'Tests et débogage',
          'Performance et optimisation',
          'Publication sur les stores',
          'Projet: Application complète avec backend'
        ]
      }
    },
    certificationPrice: 70000,
    category: 'Développement',
    image: '/images/mobile-dev.jpg'
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Maîtrisez l\'analyse de données et le machine learning avec Python.',
    levels: {
      debutant: {
        price: 25000,
        duration: '2 mois',
        details: [
          'Introduction à Python pour la data',
          'Numpy et Pandas',
          'Visualisation avec Matplotlib/Seaborn',
          'Nettoyage des données',
          'Projet: Analyse exploratoire de données'
        ]
      },
      intermediaire: {
        price: 35000,
        duration: '3 mois',
        details: [
          'Statistiques pour la data science',
          'Apprentissage automatique de base',
          'Scikit-learn',
          'Traitement du langage naturel',
          'Projet: Modèle de prédiction'
        ]
      },
      avance: {
        price: 50000,
        duration: '4 mois',
        details: [
          'Deep Learning avec TensorFlow/Keras',
          'Réseaux de neurones avancés',
          'Vision par ordinateur',
          'Déploiement de modèles',
          'Projet: Projet de deep learning complet'
        ]
      }
    },
    certificationPrice: 70000,
    category: 'Data',
    image: '/images/data-science.jpg'
  },
  {
    id: 'cybersecurite',
    title: 'Cybersécurité',
    description: 'Apprenez à protéger les systèmes et réseaux contre les cyberattaques.',
    levels: {
      debutant: {
        price: 25000,
        duration: '2 mois',
        details: [
          'Introduction à la cybersécurité',
          'Bases des réseaux',
          'Sécurité des systèmes d\'exploitation',
          'Cryptographie de base',
          'Projet: Analyse de vulnérabilités'
        ]
      },
      intermediaire: {
        price: 35000,
        duration: '3 mois',
        details: [
          'Tests d\'intrusion',
          'Sécurité des applications web',
          'Forensique numérique',
          'Sécurité des réseaux',
          'Projet: Audit de sécurité'
        ]
      },
      avance: {
        price: 50000,
        duration: '4 mois',
        details: [
          'Sécurité offensive avancée',
          'Blue team/Red team',
          'Sécurité du cloud',
          'Gestion des incidents de sécurité',
          'Projet: Projet de cybersécurité complet'
        ]
      }
    },
    certificationPrice: 70000,
    category: 'Sécurité',
    image: '/images/cyber-sec.jpg'
  },
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    description: 'Maîtrisez les services cloud avec AWS, Azure et Google Cloud Platform.',
    levels: {
      debutant: {
        price: 25000,
        duration: '2 mois',
        details: [
          'Introduction au cloud computing',
          'Bases d\'AWS/Azure/GCP',
          'Services de stockage cloud',
          'Mise en réseau de base',
          'Projet: Déploiement d\'une application simple'
        ]
      },
      intermediaire: {
        price: 35000,
        duration: '3 mois',
        details: [
          'Services de calcul (EC2, VMs, etc.)',
          'Bases de données cloud',
          'Sécurité et conformité',
          'Automatisation avec IAC',
          'Projet: Architecture cloud complète'
        ]
      },
      avance: {
        price: 50000,
        duration: '4 mois',
        details: [
          'Architecture cloud avancée',
          'Conteneurs et orchestration',
          'Serverless',
          'Migration vers le cloud',
          'Projet: Migration et optimisation cloud'
        ]
      }
    },
    certificationPrice: 70000,
    category: 'Cloud',
    image: '/images/cloud.jpg'
  }
];
