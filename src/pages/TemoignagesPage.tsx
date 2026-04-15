import React from 'react';
import { FaStar, FaQuoteLeft, FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const TemoignagesPage: React.FC = () => {
  const temoignages = [
    {
      id: 1,
      nom: "Jean-Pierre Mbarga",
      formation: "Développement Web",
      niveau: "Avancé",
      annee: "2023",
      note: 5,
      texte: "Grâce à ARCHYVE Academy, j'ai pu transformer ma passion pour le code en une carrière professionnelle. Les cours pratiques et l'accompagnement des formateurs m'ont permis de décrocher un poste de développeur senior dans une startup innovante.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      posteActuel: "Développeur Senior",
      entreprise: "TechInnov Cameroon"
    },
    {
      id: 2,
      nom: "Marie Claire Ngo",
      formation: "Data Science",
      niveau: "Intermédiaire",
      annee: "2023",
      note: 5,
      texte: "La formation en Data Science m'a ouvert les portes de l'analyse de données. J'ai particulièrement apprécié l'approche pratique avec des projets réels. Aujourd'hui, je travaille sur des projets d'IA pour une grande entreprise bancaire.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      posteActuel: "Data Analyst",
      entreprise: "Banque Internationale"
    },
    {
      id: 3,
      nom: "Alain Fotso",
      formation: "Cybersécurité",
      niveau: "Avancé",
      annee: "2022",
      note: 5,
      texte: "La formation en cybersécurité était très complète et à la pointe des dernières technologies. Les simulations d'attaques et les exercices pratiques m'ont permis de développer des compétences recherchées sur le marché.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      posteActuel: "Security Analyst",
      entreprise: "SecureNet Solutions"
    },
    {
      id: 4,
      nom: "Sophie Endene",
      formation: "Design UI/UX",
      niveau: "Intermédiaire",
      annee: "2023",
      note: 5,
      texte: "Je suis passée du marketing au design grâce à cette formation. L'apprentissage des outils comme Figma et la méthodologie design thinking m'ont permis de créer des interfaces utilisateur magnifiques et intuitives.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      posteActuel: "UI/UX Designer",
      entreprise: "Creative Agency"
    },
    {
      id: 5,
      nom: "Michel Tchamda",
      formation: "Cloud Computing",
      niveau: "Avancé",
      annee: "2022",
      note: 5,
      texte: "La maîtrise d'AWS et des services cloud m'a permis d'obtenir une certification et de travailler sur des projets d'envergure internationale. La formation est très bien structurée et les formateurs sont experts.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      posteActuel: "Cloud Architect",
      entreprise: "Global Tech Solutions"
    },
    {
      id: 6,
      nom: "Patricia Essama",
      formation: "Développement Mobile",
      niveau: "Débutant",
      annee: "2023",
      note: 4,
      texte: "Étant débutante, j'appréhendais la programmation mobile. Mais grâce à la pédagogie des formateurs et aux projets progressifs, j'ai pu créer ma première application en quelques mois seulement.",
      avatar: "https://images.unsplash.com/photo-1544725175-9a4b4d08d4f4?w=100&h=100&fit=crop&crop=face",
      posteActuel: "Mobile Developer",
      entreprise: "AppStudio Cameroon"
    }
  ];

  const stats = [
    { nombre: "500+", label: "Anciens étudiants", icone: <FaGraduationCap className="text-3xl" /> },
    { nombre: "95%", label: "Taux de satisfaction", icone: <FaStar className="text-3xl" /> },
    { nombre: "80%", label: "Emploi après 3 mois", icone: <FaBriefcase className="text-3xl" /> },
    { nombre: "200+", label: "Projets réalisés", icone: <FaCode className="text-3xl" /> }
  ];

  const renderStars = (note: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`text-lg ${index < note ? 'text-yellow-400' : 'text-gray-300'}`}
      />
    ));
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Témoignages de nos étudiants
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences de ceux qui ont transformé leur carrière grâce à nos formations
          </p>
        </div>

        {/* Section Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md text-center">
              <div className="text-blue-600 mb-3 flex justify-center">
                {stat.icone}
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.nombre}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Grille des témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {temoignages.map((temoignage) => (
            <div key={temoignage.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-start mb-4">
                  <img
                    src={temoignage.avatar}
                    alt={temoignage.nom}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900">{temoignage.nom}</h3>
                    <p className="text-sm text-gray-600">{temoignage.formation} - {temoignage.niveau}</p>
                    <div className="flex items-center mt-1">
                      {renderStars(temoignage.note)}
                    </div>
                  </div>
                </div>

                <div className="relative mb-4">
                  <FaQuoteLeft className="text-blue-200 text-2xl absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6">
                    {temoignage.texte}
                  </p>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600">
                    <div className="font-medium text-gray-900">{temoignage.posteActuel}</div>
                    <div>{temoignage.entreprise}</div>
                    <div className="mt-1 text-blue-600">Promotion {temoignage.annee}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Appel à l'action */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à écrire votre propre histoire ?</h2>
          <p className="text-xl mb-6 opacity-90">
            Rejoignez des centaines d'étudiants qui ont déjà transformé leur carrière
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Découvrir nos formations
            </a>
            <a
              href="https://wa.me/237657029080"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Contacter un conseiller
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemoignagesPage;
