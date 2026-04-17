import React, { useState } from 'react';
import { FaSearch, FaFilter, FaTimes } from 'react-icons/fa';
import '../styles/components.css';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onCategoryFilter: (category: string) => void;
  onLevelFilter: (level: string) => void;
  onPriceFilter: (priceRange: string) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  onSearch,
  onCategoryFilter,
  onLevelFilter,
  onPriceFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', label: 'Toutes les catégories' },
    { id: 'Développement', label: 'Développement' },
    { id: 'Design', label: 'Design' },
    { id: 'Marketing', label: 'Marketing Digital' },
    { id: 'Data', label: 'Data Science' },
    { id: 'Cybersécurité', label: 'Cybersécurité' },
    { id: 'Cloud', label: 'Cloud & DevOps' },
    { id: 'Bureautique', label: 'Bureautique' }
  ];

  const levels = [
    { id: 'all', label: 'Tous les niveaux' },
    { id: 'debutant', label: 'Débutant' },
    { id: 'intermediaire', label: 'Intermédiaire' },
    { id: 'avance', label: 'Avancé' }
  ];

  const priceRanges = [
    { id: 'all', label: 'Tous les prix' },
    { id: '0-50000', label: 'Moins de 50 000 FCFA' },
    { id: '50000-100000', label: '50 000 - 100 000 FCFA' },
    { id: '100000+', label: 'Plus de 100 000 FCFA' }
  ];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    onCategoryFilter(category);
  };

  const handleLevelChange = (level: string) => {
    setSelectedLevel(level);
    onLevelFilter(level);
  };

  const handlePriceRangeChange = (priceRange: string) => {
    setSelectedPriceRange(priceRange);
    onPriceFilter(priceRange);
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedLevel('all');
    setSelectedPriceRange('all');
    onSearch('');
    onCategoryFilter('all');
    onLevelFilter('all');
    onPriceFilter('all');
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedLevel !== 'all' || selectedPriceRange !== 'all';

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="flex flex-col lg:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher une formation..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="btn-primary relative"
        >
          <FaFilter className="mr-2" />
          Filtres
          {hasActiveFilters && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
              {[selectedCategory, selectedLevel, selectedPriceRange].filter(f => f !== 'all').length}
            </span>
          )}
        </button>
      </div>

      {/* Filters Panel */}
      {showFilters && (
        <div className="border-t pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Filtres avancés</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
              >
                <FaTimes className="mr-2" />
                Effacer les filtres
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Catégorie
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="form-select"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Level Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Niveau
              </label>
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="form-select"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Prix
              </label>
              <select
                value={selectedPriceRange}
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                className="form-select"
              >
                {priceRanges.map(range => (
                  <option key={range.id} value={range.id}>
                    {range.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Active Filters Display */}
          {hasActiveFilters && (
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800">
                  {categories.find(c => c.id === selectedCategory)?.label}
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              {selectedLevel !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                  {levels.find(l => l.id === selectedLevel)?.label}
                  <button
                    onClick={() => handleLevelChange('all')}
                    className="ml-2 text-green-600 hover:text-green-800"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
              {selectedPriceRange !== 'all' && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-800">
                  {priceRanges.find(p => p.id === selectedPriceRange)?.label}
                  <button
                    onClick={() => handlePriceRangeChange('all')}
                    className="ml-2 text-purple-600 hover:text-purple-800"
                  >
                    <FaTimes className="text-xs" />
                  </button>
                </span>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchFilters;
