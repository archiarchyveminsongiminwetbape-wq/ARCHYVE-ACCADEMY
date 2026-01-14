import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">ARCHYVE ACADEMY</h3>
            <p className="text-sm text-gray-400">Votre partenaire pour l'apprentissage du développement web</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Facebook</span>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">Twitter</span>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <span className="sr-only">LinkedIn</span>
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} ARCHYVE ACADEMY. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
