import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaShieldAlt, FaServer, FaWhatsapp } from 'react-icons/fa';

const Home: React.FC = () => {
  const features = [
    {
      icon: <FaLaptopCode className="text-4xl mb-4 text-blue-600" />,
      title: 'Développement Web',
      description: 'Maîtrisez les dernières technologies pour créer des sites et applications web modernes et réactifs.'
    },
    {
      icon: <FaMobileAlt className="text-4xl mb-4 text-green-600" />,
      title: 'Développement Mobile',
      description: 'Créez des applications mobiles cross-plateformes avec des technologies de pointe.'
    },
    {
      icon: <FaServer className="text-4xl mb-4 text-purple-600" />,
      title: 'Cloud Computing',
      description: 'Apprenez à déployer et gérer des applications dans le cloud avec les leaders du marché.'
    },
    {
      icon: <FaShieldAlt className="text-4xl mb-4 text-red-600" />,
      title: 'Cybersécurité',
      description: 'Protégez les systèmes et données contre les menaces informatiques.'
    }
  ];

  const stats = [
    { number: '5+', label: 'Étudiants formés' },
    { number: '2+', label: 'Formations disponibles' },
    { number: '98%', label: 'Satisfaction' },
    { number: '50+', label: 'Projets réalisés' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Formez-vous aux métiers du numérique</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Développez vos compétences avec nos formations pratiques et certifiantes en informatique
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Découvrir nos formations
            </Link>
            <a 
              href="https://wa.me/237657029080" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-2 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Contactez-nous
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos domaines de formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à démarrer votre aventure numérique ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez ARCHYVE ACADEMY et développez les compétences qui feront de vous un expert en informatique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg text-lg transition-colors"
            >
              Voir toutes les formations
            </Link>
            <a 
              href="https://wa.me/237657029080" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg text-lg flex items-center justify-center gap-2 transition-colors"
            >
              <FaWhatsapp className="text-xl" />
              Parler à un conseiller
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
