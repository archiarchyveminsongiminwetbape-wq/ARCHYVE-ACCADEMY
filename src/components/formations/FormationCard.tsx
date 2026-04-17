import React from 'react';
import { Link } from 'react-router-dom';
import { FaClock, FaMoneyBillWave, FaCertificate, FaUsers, FaStar } from 'react-icons/fa';
import { Formation } from '../../data/formations';
import OptimizedImage from '../OptimizedImage';
import '../../styles/components.css';

interface FormationCardProps {
  formation: Formation;
}

const FormationCard: React.FC<FormationCardProps> = ({ formation }) => {
  const totalPrice = formation.price + formation.registrationFee;

  return (
    <div className="formation-card group">
      {/* Image Header */}
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={formation.image}
          alt={formation.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          width={400}
          height={200}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
            {formation.category}
          </span>
        </div>
        
        {/* Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1">{formation.title}</h3>
          <p className="text-white/90 text-sm line-clamp-2">{formation.description}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Key Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center text-gray-700">
            <FaClock className="mr-2 text-blue-600" />
            <div>
              <div className="text-xs text-gray-500">Durée</div>
              <div className="font-medium">{formation.duration}</div>
            </div>
          </div>
          <div className="flex items-center text-gray-700">
            <FaMoneyBillWave className="mr-2 text-green-600" />
            <div>
              <div className="text-xs text-gray-500">Prix</div>
              <div className="font-medium">{totalPrice.toLocaleString()} FCFA</div>
            </div>
          </div>
        </div>

        
        {/* Features */}
        <div className="mb-6">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <div className="flex items-center text-gray-600">
              <FaCertificate className="mr-2 text-yellow-500" />
              <span>Certification</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaUsers className="mr-2 text-blue-500" />
              <span>Mentorat</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaStar className="mr-2 text-orange-500" />
              <span>Projets pratiques</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaUsers className="mr-2 text-green-500" />
              <span>Support carrière</span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Frais d'inscription: {formation.registrationFee.toLocaleString()} FCFA</span>
            <span>Certification: +{formation.certificationPrice.toLocaleString()} FCFA</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-3">
          <Link 
            to={`/courses/${formation.id}`}
            className="btn-primary w-full text-center"
          >
            Voir les détails complets
          </Link>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center">
              <FaUsers className="mr-1" />
              Places limitées
            </span>
            <span className="flex items-center">
              <FaStar className="mr-1 text-yellow-500" />
              4.8/5
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationCard;
