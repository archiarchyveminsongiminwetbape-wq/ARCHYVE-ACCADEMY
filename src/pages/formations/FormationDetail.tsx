import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaMoneyBillWave, FaCertificate, FaWhatsapp, FaCheckCircle, FaUsers, FaLaptop, FaAward, FaEdit } from 'react-icons/fa';
import { formations } from '../../data/formations';
import { usePageTitle } from '../../hooks/usePageTitle';
import '../../styles/components.css';

const FormationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const formation = formations.find(f => f.id === id);
  
  // Définir le titre dynamiquement basé sur la formation
  useEffect(() => {
    if (formation) {
      document.title = `${formation.title.toUpperCase()} | DÉTAILS | ARCHYVE ACADEMY`;
    } else {
      document.title = 'FORMATION NON TROUVÉE | ARCHYVE ACADEMY';
    }
  }, [formation]);

  const totalPrice = formation ? formation.price + formation.registrationFee : 0;
  const certificationPrice = totalPrice + (formation?.certificationPrice || 0);

  if (!formation) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Formation non trouvée</h1>
        <Link to="/courses" className="text-blue-600 hover:text-blue-800">
          Retour aux formations
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <Link 
          to="/courses" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Retour aux formations
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img 
              src={formation.image} 
              alt={formation.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6 text-white">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{formation.title}</h1>
                <p className="text-lg opacity-90">{formation.description}</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <FaClock className="text-blue-600 text-2xl mr-3" />
                  <h3 className="font-semibold text-gray-800">Durée</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">{formation.duration}</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <FaMoneyBillWave className="text-green-600 text-2xl mr-3" />
                  <h3 className="font-semibold text-gray-800">Prix total</h3>
                </div>
                <p className="text-2xl font-bold text-green-600">{totalPrice.toLocaleString()} FCFA</p>
                <p className="text-sm text-gray-600 mt-1">
                  Formation: {formation.price.toLocaleString()} FCFA<br />
                  Frais: {formation.registrationFee.toLocaleString()} FCFA
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <FaCertificate className="text-yellow-600 text-2xl mr-3" />
                  <h3 className="font-semibold text-gray-800">Avec certification</h3>
                </div>
                <p className="text-2xl font-bold text-yellow-600">{certificationPrice.toLocaleString()} FCFA</p>
                <p className="text-sm text-gray-600 mt-1">
                  +{formation.certificationPrice.toLocaleString()} FCFA
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Contenu de la formation</h3>
                <div className="space-y-3">
                  {formation.details.map((detail, index) => (
                    <div key={index} className="flex items-start">
                      <FaCheckCircle className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">À la fin de cette formation</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <FaAward className="text-blue-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Certification reconnue dans le domaine</span>
                  </div>
                  <div className="flex items-start">
                    <FaLaptop className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Portfolio de projets pratiques</span>
                  </div>
                  <div className="flex items-start">
                    <FaUsers className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">Accès à la communauté des anciens</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Section POUR QUI */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-xl border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold">?</span>
                </div>
                Cette formation est pour vous si...
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-purple-800 mb-3">Profil Idéal</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Vous souhaitez débuter ou évoluer dans le domaine du numérique</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Vous êtes motivé(e) et prêt(e) à investir du temps dans votre formation</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Vous voulez acquérir des compétences pratiques et recherchées</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Vous cherchez une formation avec un accompagnement personnalisé</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-blue-800 mb-3">Objectifs Visés</h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Trouver un emploi dans le secteur du numérique</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Lancer votre propre projet digital</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Évoluer dans votre poste actuel</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <span className="text-white text-xs">+</span>
                      </div>
                      <span className="text-gray-700">Obtenir une certification reconnue</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-white rounded-lg border border-purple-200">
                <div className="flex items-center text-purple-800">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-purple-600 font-bold">!</span>
                  </div>
                  <span className="font-medium">
                    Prérequis : Aucun prérequis spécifique n'est demandé pour le niveau débutant. 
                    Pour les niveaux intermédiaire et avancé, des connaissances de base sont recommandées.
                  </span>
                </div>
              </div>
            </div>

            {/* Section FAQ */}
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Questions Fréquemment Posées
              </h3>
              
              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Quelle est la durée de la formation ?</h4>
                  <p className="text-gray-600">
                    La formation dure {formation.duration}. 
                    Les cours sont dispensés en ligne avec des sessions pratiques chaque semaine.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Quels sont les prérequis ?</h4>
                  <p className="text-gray-600">
                    Pour le niveau débutant, aucun prérequis n'est nécessaire. Pour les niveaux intermédiaire 
                    et avancé, des connaissances de base en informatique sont recommandées.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Comment se déroule la certification ?</h4>
                  <p className="text-gray-600">
                    À la fin de la formation, vous passez un examen pratique et théorique. 
                    La certification est reconnue par les entreprises du secteur.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-2">Y a-t-il un accompagnement après la formation ?</h4>
                  <p className="text-gray-600">
                    Oui, nous offrons un support carrière pendant 6 mois après la formation : 
                    aide à la recherche d'emploi, préparation aux entretiens, et accès à notre réseau.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre formation ?</h3>
                <p className="mb-6 opacity-90">
                  Rejoignez des centaines d'étudiants qui ont déjà transformé leur carrière avec nos formations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to={`/inscription/${formation.id}`}
                    className="btn-outline"
                  >
                    <FaEdit className="mr-2" />
                    Formulaire d'inscription
                  </Link>
                  <a 
                    href={`https://wa.me/237657029080?text=Bonjour, je suis intéressé(e) par la formation ${formation.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-success"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp direct
                  </a>
                  <a 
                    href="tel:+237657029080"
                    className="btn-outline"
                  >
                    Appeler pour plus d'infos
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationDetail;
