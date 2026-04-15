import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaClock, FaMoneyBillWave, FaCertificate, FaWhatsapp, FaCheckCircle, FaUsers, FaLaptop, FaAward, FaEdit } from 'react-icons/fa';
import { formations } from '../../data/formations';

const FormationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedLevel, setSelectedLevel] = useState<'debutant' | 'intermediaire' | 'avance'>('debutant');

  const formation = formations.find(f => f.id === id);

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

  const levels = [
    { id: 'debutant', label: 'Débutant', color: 'blue' },
    { id: 'intermediaire', label: 'Intermédiaire', color: 'green' },
    { id: 'avance', label: 'Avancé', color: 'purple' }
  ] as const;

  const currentLevel = formation.levels[selectedLevel];

  const totalPrice = currentLevel.price + formation.registrationFee;
  const certificationPrice = totalPrice + formation.certificationPrice;

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
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Choisissez votre niveau</h2>
              <div className="flex flex-wrap gap-3">
                {levels.map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSelectedLevel(level.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      selectedLevel === level.id
                        ? `bg-${level.color}-600 text-white shadow-lg transform scale-105`
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <FaClock className="text-blue-600 text-2xl mr-3" />
                  <h3 className="font-semibold text-gray-800">Durée</h3>
                </div>
                <p className="text-2xl font-bold text-blue-600">{currentLevel.duration}</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <FaMoneyBillWave className="text-green-600 text-2xl mr-3" />
                  <h3 className="font-semibold text-gray-800">Prix total</h3>
                </div>
                <p className="text-2xl font-bold text-green-600">{totalPrice.toLocaleString()} FCFA</p>
                <p className="text-sm text-gray-600 mt-1">
                  Formation: {currentLevel.price.toLocaleString()} FCFA<br />
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
                  {currentLevel.details.map((detail, index) => (
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

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 rounded-xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Prêt à commencer votre formation ?</h3>
                <p className="mb-6 opacity-90">
                  Rejoignez des centaines d'étudiants qui ont déjà transformé leur carrière avec nos formations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to={`/inscription/${formation.id}`}
                    className="flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    <FaEdit className="mr-2" />
                    Formulaire d'inscription
                  </Link>
                  <a 
                    href={`https://wa.me/237657029080?text=Bonjour, je suis intéressé(e) par la formation ${formation.title} (${selectedLevel})`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    <FaWhatsapp className="mr-2" />
                    WhatsApp direct
                  </a>
                  <a 
                    href="tel:+237657029080"
                    className="flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-3 rounded-lg font-medium transition-colors"
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
