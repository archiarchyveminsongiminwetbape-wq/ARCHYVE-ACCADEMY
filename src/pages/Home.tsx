import React from 'react';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaShieldAlt, FaServer, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import OptimizedImage from '../components/OptimizedImage';
import { usePageTitle } from '../hooks/usePageTitle';
import '../styles/components.css';

const Home: React.FC = () => {
  usePageTitle('ARCHYVE ACADEMY', false);
  
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


  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <OptimizedImage 
            src="https://images.unsplash.com/photo-1517245386807-bb14f71fc0c3"
            alt="Formation professionnelle" 
            className="w-full h-full object-cover"
            width={1920}
            height={1080}
            priority={true}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/80 to-blue-900/90"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-4">
                Formation Excellence Since 2024
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Transformez Votre Avenir
              <span className="block text-blue-300">Avec le Numérique</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Rejoignez la nouvelle génération de professionnels du digital. 
              Formations pratiques, mentorat d'experts et carrière garantie.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/courses" 
                className="btn-primary btn-lg"
              >
                Découvrir Nos Formations
              </Link>
              <a 
                href="#about" 
                className="btn-secondary btn-lg"
              >
                En Savoir Plus
              </a>
            </div>
            
                      </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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

      
      {/* À Propos Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">À Propos d'ARCHYVE ACADEMY</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Votre partenaire de confiance pour l'excellence dans la formation aux métiers du numérique
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Notre Mission</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    ARCHYVE ACADEMY est une plateforme de formation en ligne dédiée à l'apprentissage des métiers du numérique. 
                    Notre mission est de rendre la formation en informatique accessible à tous, quel que soit votre niveau initial.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Nous croyons en l'apprentissage par la pratique, avec des projets concrets et un accompagnement personnalisé 
                    pour garantir votre succès professionnel.
                  </p>
                </div>
                
                              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Notre Approche</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Formations Pratiques</h4>
                      <p className="text-gray-600">Apprentissage axé sur des projets concrets et des cas réels</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Mentorat d'Experts</h4>
                      <p className="text-gray-600">Accompagnement par des professionnels du secteur</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Certification Reconnue</h4>
                      <p className="text-gray-600">Diplômes valorisés sur le marché de l'emploi</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-orange-600 font-bold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Support Carrière</h4>
                      <p className="text-gray-600">Aide à la recherche d'emploi et préparation aux entretiens</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Contactez-Nous</h2>
              <p className="text-xl text-blue-200">
                Une question ? Besoin de conseils ? Notre équipe est là pour vous aider
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Envoyez-nous un message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Votre nom complet"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Votre email"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Votre téléphone"
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Votre message"
                      rows={4}
                      className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-white/70 focus:outline-none focus:border-white/50 resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-white text-blue-900 font-bold py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Téléphone</h4>
                      <p className="text-blue-200">+237 657 02 90 80</p>
                      <p className="text-blue-200">+237 620 97 25 79</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Email</h4>
                      <p className="text-blue-200">contact@archyve-academy.com</p>
                      <p className="text-blue-200">info@archyve-academy.com</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Localisation</h4>
                      <p className="text-blue-200">Douala, Cameroun</p>
                      <p className="text-blue-200">Formations en ligne et en présentiel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Prêt à Transformer Votre Carrière ?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Rejoignez ARCHYVE ACADEMY aujourd'hui et commencez votre voyage vers l'excellence digitale
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/courses" 
              className="bg-white text-blue-700 hover:bg-blue-50 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl"
            >
              Explorer les Formations
            </Link>
            <a 
              href="tel:+237657029080"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
            >
              Appeler Maintenant
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
