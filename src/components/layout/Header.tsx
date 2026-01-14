import React from 'react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const Header: React.FC = () => {
  const phoneNumbers = [
    { number: '+237 657029080', label: 'Contact 1' },
    { number: '+237 620972579', label: 'Contact 2' }
  ];

  const handleWhatsAppClick = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber.replace(/\D/g, '')}`, '_blank');
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/logo.jpg" 
              alt="ARCHYVE ACCADEMY Logo" 
              className="h-12 w-12 mr-3"
            />
            <h1 className="text-2xl md:text-3xl font-bold">ARCHYVE ACCADEMY</h1>
          </div>
          
          <div className="flex flex-col md:items-end">
            <nav className="mb-3">
              <ul className="flex flex-wrap gap-4 justify-center md:justify-end">
                <li><Link to="/" className="hover:underline font-medium">Accueil</Link></li>
                <li><Link to="/courses" className="hover:underline font-medium">Nos Formations</Link></li>
                <li><Link to="/about" className="hover:underline font-medium">À propos</Link></li>
                <li><Link to="/contact" className="hover:underline font-medium">Contact</Link></li>
              </ul>
            </nav>
            
            <div className="flex flex-wrap gap-3 justify-center md:justify-end">
              {phoneNumbers.map((contact, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(contact.number)}
                  className="flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FaWhatsapp className="mr-2" />
                  <span className="hidden sm:inline">{contact.label}:</span> {contact.number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
