import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import FormationsPage from './pages/formations/FormationsPage';
import './App.css';

// Pages à créer plus tard
const About = () => <div className="text-center py-12 px-4 max-w-4xl mx-auto">
  <h1 className="text-4xl font-bold mb-6 text-gray-800">À propos d'ARCHYVE ACCADEMY</h1>
  <div className="bg-white p-8 rounded-xl shadow-md text-left space-y-6">
    <p className="text-lg text-gray-700 leading-relaxed">
      ARCHYVE ACCADEMY est une plateforme de formation en ligne dédiée à l'apprentissage des métiers du numérique. 
      Notre mission est de rendre la formation en informatique accessible à tous, quel que soit votre niveau initial.
    </p>
    <div className="bg-blue-50 p-6 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Notre Approche</h2>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✓</span>
          <span>Formations pratiques axées sur des projets concrets</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✓</span>
          <span>Formateurs experts dans leur domaine</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✓</span>
          <span>Accompagnement personnalisé</span>
        </li>
        <li className="flex items-start">
          <span className="text-blue-500 mr-2">✓</span>
          <span>Certifications reconnues</span>
        </li>
      </ul>
    </div>
  </div>
</div>;

const Contact = () => <div className="text-center py-12 px-4 max-w-4xl mx-auto">
  <h1 className="text-4xl font-bold mb-8 text-gray-800">Contactez-nous</h1>
  <div className="bg-white p-8 rounded-xl shadow-md text-left space-y-8">
    <div>
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Informations de contact</h2>
      <p className="text-gray-700 mb-4">
        Pour toute question ou demande d'information, n'hésitez pas à nous contacter via les moyens suivants :
      </p>
      <div className="space-y-4">
        <div className="flex items-center">
          <span className="bg-blue-100 p-3 rounded-full mr-4">
            <FaWhatsapp className="text-green-500 text-xl" />
          </span>
          <div>
            <p className="font-medium text-gray-800">WhatsApp</p>
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <a href="https://wa.me/237657029080" className="text-blue-600 hover:underline">+237 657 02 90 80</a>
              <a href="https://wa.me/237620972579" className="text-blue-600 hover:underline">+237 620 97 25 79</a>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="bg-blue-100 p-3 rounded-full mr-4">
            <FaEnvelope className="text-blue-500 text-xl" />
          </span>
          <div>
            <p className="font-medium text-gray-800">Email</p>
            <a href="mailto:contact@archyve-academy.com" className="text-blue-600 hover:underline">contact@archyve-academy.com</a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="border-t border-gray-200 pt-8">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Heures d'ouverture</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Lundi - Vendredi</p>
          <p className="text-gray-700">08:00 - 18:00</p>
        </div>
        <div>
          <p className="font-medium">Samedi</p>
          <p className="text-gray-700">09:00 - 14:00</p>
        </div>
      </div>
    </div>
  </div>
</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<FormationsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
