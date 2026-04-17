import React, { useState, useMemo } from 'react';
import { formations } from '../../data/formations';
import FormationCard from '../../components/formations/FormationCard';
import SearchFilters from '../../components/SearchFilters';
import { FaWhatsapp, FaGraduationCap, FaStar } from 'react-icons/fa';
import { usePageTitle } from '../../hooks/usePageTitle';

const FormationsPage: React.FC = () => {
  usePageTitle('NOS FORMATIONS');
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');

  // Filtrer les formations
  const filteredFormations = useMemo(() => {
    return formations.filter(formation => {
      // Filtre par recherche
      const matchesSearch = formation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           formation.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      // Filtre par catégorie
      const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory;
      
      // Filtre par niveau (toutes les formations sont maintenant complètes)
      const matchesLevel = true;
      
      // Filtre par prix
      let matchesPrice = true;
      if (selectedPriceRange !== 'all') {
        const totalPrice = formation.price + formation.registrationFee;
        
        switch (selectedPriceRange) {
          case '0-50000':
            matchesPrice = totalPrice <= 50000;
            break;
          case '50000-100000':
            matchesPrice = totalPrice >= 50000 && totalPrice <= 100000;
            break;
          case '100000+':
            matchesPrice = totalPrice >= 100000;
            break;
        }
      }
      
      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedPriceRange]);

  const handleSearch = (query: string) => setSearchQuery(query);
  const handleCategoryFilter = (category: string) => setSelectedCategory(category);
  const handleLevelFilter = (level: string) => setSelectedLevel(level);
  const handlePriceFilter = (priceRange: string) => setSelectedPriceRange(priceRange);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <FaGraduationCap className="text-blue-600 text-2xl" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nos Formations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre catalogue complet de formations en informatique, 
            adaptées à tous les niveaux et tous les budgets
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">{formations.length}</div>
            <div className="text-gray-600">Formations</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">3</div>
            <div className="text-gray-600">Niveaux</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <div className="text-gray-600">Satisfaction</div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
            <div className="text-gray-600">Étudiants</div>
          </div>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          onSearch={handleSearch}
          onCategoryFilter={handleCategoryFilter}
          onLevelFilter={handleLevelFilter}
          onPriceFilter={handlePriceFilter}
        />

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center">
          <div>
            <span className="text-gray-600">
              {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} trouvée{filteredFormations.length > 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FaStar className="text-yellow-400 mr-1" />
            <span>Note moyenne: 4.8/5</span>
          </div>
        </div>

        {/* Formations Grid */}
        {filteredFormations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredFormations.map((formation) => (
              <FormationCard key={formation.id} formation={formation} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl shadow-sm mb-12">
            <div className="max-w-md mx-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-gray-400 text-3xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucune formation trouvée
              </h3>
              <p className="text-gray-600 mb-4">
                Essayez de modifier vos critères de recherche ou de filtres
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedLevel('all');
                  setSelectedPriceRange('all');
                }}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                Réinitialiser les filtres
              </button>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">
            Vous ne trouvez pas votre formation idéale ?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Contactez-nous pour une formation personnalisée adaptée à vos besoins spécifiques
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+237657029080"
              className="flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 px-8 py-4 rounded-lg font-bold transition-colors"
            >
              Appeler un conseiller
            </a>
            <a 
              href="https://wa.me/237657029080" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-bold transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationsPage;
