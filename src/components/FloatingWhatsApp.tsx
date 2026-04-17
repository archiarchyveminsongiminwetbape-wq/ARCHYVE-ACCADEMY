import React, { useState } from 'react';
import { FaWhatsapp, FaTimes } from 'react-icons/fa';

const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = '+237657029080';
  const message = 'Bonjour, je suis intéressé(e) par les formations d\'ARCHYVE Academy';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-lg shadow-2xl p-4 mb-4 min-w-[250px] animate-fade-in">
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center mr-3">
              <FaWhatsapp className="text-white text-xl" />
            </div>
            <div>
              <div className="font-semibold text-gray-900">Besoin d'aide ?</div>
              <div className="text-sm text-gray-600">Réponse rapide garantie</div>
            </div>
          </div>
          <p className="text-sm text-gray-700 mb-3">
            Parlons de votre projet de formation. Nos experts sont là pour vous guider !
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
          >
            Démarrer la conversation
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 ${
          isOpen 
            ? 'bg-gray-500 hover:bg-gray-600' 
            : 'bg-green-500 hover:bg-green-600 animate-pulse'
        }`}
      >
        {isOpen ? (
          <FaTimes className="text-white text-xl" />
        ) : (
          <FaWhatsapp className="text-white text-xl" />
        )}
      </button>
    </div>
  );
};

export default FloatingWhatsApp;
