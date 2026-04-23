import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import '../../styles/components.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { path: '/', label: 'Accueil' },
    { path: '/courses', label: 'Formations' },
    { path: '/about', label: 'À propos' },
    { path: '/blog', label: 'Blog' },
    { path: '/temoignages', label: 'Témoignages' },
    { path: '/faq', label: 'FAQ' },
    { path: '/contact', label: 'Contact' },
  ];

  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg py-1' : 'bg-white/95 backdrop-blur-sm py-2'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src="/logo.jpg" 
                alt="ARCHYVE ACADEMY" 
                className="h-8 w-8 rounded-lg transition-transform group-hover:scale-110"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                ARCHYVE ACADEMY
              </h1>
              <p className="text-xs text-gray-600 hidden lg:block">Formation Excellence</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+237657029080"
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <FaPhone className="mr-2" />
              <span className="hidden xl:block">+237 657 02 90 80</span>
            </a>
            <Link
              to="/courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-full font-medium transition-all transform hover:scale-105 shadow-lg text-sm"
            >
              Découvrir
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <FaTimes className="text-2xl text-gray-700" />
            ) : (
              <FaBars className="text-2xl text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-80 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-left px-4 py-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-50"
              >
                {item.label}
              </a>
            ))}
            
            <div className="border-t pt-4 space-y-3">
              <a
                href="tel:+237657029080"
                className="flex items-center justify-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <FaPhone className="mr-2" />
                +237 657 02 90 80
              </a>
              <Link 
                to="/courses" 
                className="btn-primary"
              >
                Formations
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
