import React, { useState } from 'react';
import { formations } from '../../data/formations';
import FormationCard from '../../components/formations/FormationCard';
import { FaSearch, FaFilter, FaWhatsapp } from 'react-icons/fa';

const FormationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  // Extraire toutes les catégories uniques
  const categories = ['Tous', ...new Set(formations.map(f => f.category))];

  // Filtrer les formations
  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Tous' || formation.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nos Formations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre catalogue complet de formations en informatique, adaptées à tous les niveaux
          </p>
        </div>

        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Rechercher une formation..."
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="relative w-full md:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaFilter className="text-gray-400" />
              </div>
              <select
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-sm text-gray-600 mr-2">Niveaux :</span>
            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">Débutant (25,000 FCFA)</span>
            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Intermédiaire (35,000 FCFA)</span>
            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-0.5 rounded">Avancé (50,000 FCFA)</span>
            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded ml-2">+70,000 FCFA pour la certification</span>
          </div>
        </div>

        {filteredFormations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFormations.map((formation) => (
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-2">Aucune formation trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos critères de recherche</p>
          </div>
        )}

        <div className="mt-12 bg-blue-50 rounded-xl p-6 text-center">
          <h3 className="text-2xl font-bold text-blue-800 mb-3">Vous ne trouvez pas votre formation idéale ?</h3>
          <p className="text-blue-700 mb-4">Contactez-nous pour une formation personnalisée adaptée à vos besoins spécifiques.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="https://wa.me/237657029080" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              Nous contacter sur WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationsPage;
