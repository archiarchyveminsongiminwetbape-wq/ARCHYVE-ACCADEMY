import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaGraduationCap, FaUsers, FaAward, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <img 
                src="/logo.jpg" 
                alt="ARCHYVE ACADEMY" 
                className="h-10 w-10 rounded-lg mr-3"
              />
              <h3 className="text-2xl font-bold">ARCHYVE ACADEMY</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre partenaire de confiance pour l'excellence dans la formation aux métiers du numérique. 
              Nous transformons des ambitions en carrières réussies grâce à nos programmes pratiques et certifiants.
            </p>
            
            

            <div className="flex space-x-4">
              <a href="https://facebook.com/archyveacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <FaFacebookF className="text-white" />
              </a>
              <a href="https://twitter.com/archyveacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors">
                <FaTwitter className="text-white" />
              </a>
              <a href="https://linkedin.com/company/archyve-academy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-blue-700 hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors">
                <FaLinkedinIn className="text-white" />
              </a>
              <a href="https://instagram.com/archyveacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center transition-colors">
                <FaInstagram className="text-white" />
              </a>
              <a href="https://youtube.com/@archyveacademy" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                <FaYoutube className="text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/courses" className="text-gray-300 hover:text-white transition-colors">Nos Formations</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">À Propos</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <div>
                  <p className="text-gray-300">+237 657 02 90 80</p>
                  <p className="text-gray-300">+237 620 97 25 79</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaEnvelope className="text-green-400 mr-3" />
                <div>
                  <p className="text-gray-300">contact@archyve-academy.com</p>
                  <p className="text-gray-300">info@archyve-academy.com</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-purple-400 mr-3" />
                <div>
                  <p className="text-gray-300">Douala, Cameroun</p>
                  <p className="text-gray-300">Formations en ligne & présentiel</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <FaClock className="text-orange-400 mr-3" />
                <div>
                  <p className="text-gray-300">Lun-Ven: 8h-18h</p>
                  <p className="text-gray-300">Sam: 9h-16h</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Row */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <FaGraduationCap className="text-blue-400 text-2xl mr-3" />
              <div>
                <h5 className="font-semibold">Formations Certifiantes</h5>
                <p className="text-sm text-gray-400">Diplômes reconnus par les entreprises</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaUsers className="text-green-400 text-2xl mr-3" />
              <div>
                <h5 className="font-semibold">Support Continu</h5>
                <p className="text-sm text-gray-400">Accompagnement avant, pendant et après</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaAward className="text-purple-400 text-2xl mr-3" />
              <div>
                <h5 className="font-semibold">Garantie d'Emploi</h5>
                <p className="text-sm text-gray-400">80% de nos étudiants trouvent un emploi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              {currentYear} ARCHYVE ACADEMY. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                Politique de Confidentialité
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                Conditions Générales
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white transition-colors">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
