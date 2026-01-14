import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaClock, FaMoneyBillWave, FaCertificate, FaWhatsapp } from 'react-icons/fa';
import { Formation } from '../../data/formations';

interface FormationCardProps {
  formation: Formation;
}

const FormationCard: React.FC<FormationCardProps> = ({ formation }) => {
  const [selectedLevel, setSelectedLevel] = useState<'debutant' | 'intermediaire' | 'avance'>('debutant');
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const levels = [
    { id: 'debutant', label: 'Débutant' },
    { id: 'intermediaire', label: 'Intermédiaire' },
    { id: 'avance', label: 'Avancé' }
  ] as const;

  const currentLevel = formation.levels[selectedLevel];

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{formation.title}</h3>
            <p className="text-gray-600 mb-4">{formation.description}</p>
          </div>
          <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
            {formation.category}
          </span>
        </div>

        <div className="flex flex-wrap gap-2 my-4">
          {levels.map((level) => (
            <button
              key={level.id}
              onClick={() => setSelectedLevel(level.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedLevel === level.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {level.label}
            </button>
          ))}
        </div>

        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <div className="flex flex-wrap justify-between items-center">
            <div className="flex items-center text-gray-700 mb-2 sm:mb-0">
              <FaClock className="mr-2 text-blue-600" />
              <span>Durée: {currentLevel.duration}</span>
            </div>
            <div className="flex items-center text-gray-700">
              <FaMoneyBillWave className="mr-2 text-green-600" />
              <span className="font-bold">{currentLevel.price.toLocaleString()} FCFA</span>
            </div>
          </div>
          
          <div className="mt-3 flex items-center text-gray-700">
            <FaCertificate className="mr-2 text-yellow-600" />
            <span>Certification: {(formation.certificationPrice + currentLevel.price).toLocaleString()} FCFA</span>
          </div>
        </div>

        <button
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
        >
          {isDetailsOpen ? (
            <>
              <span>Moins de détails</span>
              <FaChevronUp className="ml-1" />
            </>
          ) : (
            <>
              <span>Plus de détails</span>
              <FaChevronDown className="ml-1" />
            </>
          )}
        </button>

        {isDetailsOpen && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-2">Contenu de la formation :</h4>
            <ul className="space-y-2">
              {currentLevel.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Certification :</strong> Obtenez une certification reconnue en ajoutant {formation.certificationPrice.toLocaleString()} FCFA au prix de la formation.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
        <a 
          href={`https://wa.me/237657029080?text=Bonjour, je suis intéressé(e) par la formation ${formation.title} (${selectedLevel})`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-medium transition-colors"
        >
          <FaWhatsapp className="mr-2" />
          S'inscrire maintenant
        </a>
        
        <span className="text-sm text-gray-500">
          Places limitées
        </span>
      </div>
    </div>
  );
};

export default FormationCard;
