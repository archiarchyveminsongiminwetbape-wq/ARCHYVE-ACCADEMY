import React, { useEffect } from 'react';
import { FaGraduationCap, FaUsers, FaAward, FaClock, FaBullseye, FaHandshake, FaLightbulb, FaRocket } from 'react-icons/fa';
import '../styles/components.css';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'À PROPOS | ARCHYVE ACADEMY';
  }, []);

  
  const values = [
    {
      icon: <FaBullseye className="text-4xl text-blue-600 mb-4" />,
      title: 'Excellence',
      description: 'Nous nous engageons à fournir une formation de la plus haute qualité avec des standards académiques rigoureux.'
    },
    {
      icon: <FaHandshake className="text-4xl text-green-600 mb-4" />,
      title: 'Intégrité',
      description: 'Nous agissons avec honnêteté, transparence et respect dans toutes nos interactions.'
    },
    {
      icon: <FaLightbulb className="text-4xl text-yellow-600 mb-4" />,
      title: 'Innovation',
      description: 'Nous intégrons les dernières technologies et méthodologies pour rester à la pointe de l\'industrie.'
    },
    {
      icon: <FaRocket className="text-4xl text-purple-600 mb-4" />,
      title: 'Croissance',
      description: 'Nous accompagnons nos étudiants dans leur développement professionnel et personnel.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">À Propos d'ARCHYVE ACADEMY</h1>
            <p className="text-xl mb-8 text-blue-100">
              Votre partenaire de confiance pour une excellence dans la formation professionnelle
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      
      {/* Notre Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Notre Mission</h2>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Chez ARCHYVE ACADEMY, notre mission est de démocratiser l'accès à une formation de qualité 
                et de permettre à chacun de réaliser son potentiel professionnel. Nous croyons fermement que 
                l'éducation est le levier le plus puissant pour transformer des vies et construire un avenir meilleur.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous nous engageons à offrir des programmes de formation pratiques, pertinents et adaptés 
                aux besoins du marché du travail actuel, en mettant l'accent sur l'acquisition de compétences 
                concrètes et immédiatement applicables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Nos Valeurs</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Approche */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Notre Approche Pédagogique</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Apprentissage Pratique</h3>
                <p className="text-gray-700 mb-4">
                  70% de pratique, 30% de théorie. Nos formations sont conçues pour vous donner 
                  des compétences concrètes à travers des projets réels et des études de cas.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li> projets réels</li>
                  <li>Études de cas industrielles</li>
                  <li>Mise en situation professionnelle</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-green-600">Accompagnement Personnalisé</h3>
                <p className="text-gray-700 mb-4">
                  Chaque étudiant bénéficie d'un suivi personnalisé avec des formateurs 
                  experts et un mentorat continu tout au long de sa formation.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>Sessions de mentorat individuelles</li>
                  <li>Feedback régulier et constructif</li>
                  <li>Support carrière après la formation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Notre Équipe */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Notre Équipe d'Experts</h2>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Notre équipe est composée de professionnels passionnés avec des années d'expérience 
              dans leurs domaines respectifs. Tous nos formateurs sont des praticiens actifs 
              qui apportent une expertise fraîche et pertinente du monde réel.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaGraduationCap className="text-4xl text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Experts Académiques</h3>
                <p className="text-gray-600">Docteurs et chercheurs spécialisés</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaUsers className="text-4xl text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Praticiens Industry</h3>
                <p className="text-gray-600">Professionnels du secteur actifs</p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <FaAward className="text-4xl text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Mentors Carrière</h3>
                <p className="text-gray-600">Coachs certifiés et expérimentés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Commencer Votre Voyage?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Rejoignez-nous et transformez votre avenir professionnel
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/courses"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Découvrir Nos Formations
            </a>
            <a
              href="/contact"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
