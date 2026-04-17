import React, { useState, useEffect } from 'react';
import { FaQuestionCircle, FaChevronDown, FaChevronUp, FaGraduationCap, FaMoneyBillWave, FaClock, FaCertificate, FaUsers, FaLaptop, FaMobileAlt, FaShieldAlt, FaServer, FaDatabase, FaChartBar, FaCreditCard, FaPhone, FaEnvelope, FaWhatsapp, FaCalendarAlt, FaUser, FaTrophy, FaExchangeAlt, FaUndo } from 'react-icons/fa';
import '../styles/components.css';

const FAQPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  useEffect(() => {
    document.title = 'FAQ | ARCHYVE ACADEMY';
  }, []);

  const toggleItem = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = [
    { id: 'all', name: 'Toutes les questions', icon: <FaQuestionCircle /> },
    { id: 'general', name: 'Général', icon: <FaGraduationCap /> },
    { id: 'formations', name: 'Formations', icon: <FaLaptop /> },
    { id: 'inscription', name: 'Inscription', icon: <FaUser /> },
    { id: 'paiement', name: 'Paiement', icon: <FaMoneyBillWave /> },
    { id: 'certification', name: 'Certification', icon: <FaCertificate /> }
  ];

  const faqItems = [
    // Général
    {
      category: 'general',
      question: 'Qu\'est-ce que ARCHYVE ACADEMY?',
      answer: 'ARCHYVE ACADEMY est une institution de formation professionnelle spécialisée dans les technologies digitales. Nous offrons des formations pratiques et orientées métier pour vous aider à développer des compétences recherchées sur le marché du travail.',
      icon: <FaGraduationCap className="text-blue-600" />
    },
    {
      category: 'general',
      question: 'Quelles sont les formations proposées?',
      answer: 'Nous proposons des formations dans plusieurs domaines: Développement Web, Développement Mobile, Cybersécurité, Base de Données, Data Science, et bien d\'autres. Chaque formation est disponible à différents niveaux (Débutant, Intermédiaire, Avancé).',
      icon: <FaLaptop className="text-green-600" />
    },
    {
      category: 'general',
      question: 'Comment vos formations se comparent-elles à celles d\'autres institutions?',
      answer: 'Nos formations se distinguent par leur approche pratique (70% pratique, 30% théorie), l\'accompagnement personnalisé, et le fait que nos formateurs sont des professionnels actifs dans leur domaine. Nous offrons également un support carrière après la formation.',
      icon: <FaTrophy className="text-purple-600" />
    },

    // Formations
    {
      category: 'formations',
      question: 'Quelle est la durée typique d\'une formation?',
      answer: 'La durée varie selon le niveau et la formation: Niveau Débutant (3-4 mois), Intermédiaire (2-3 mois), Avancé (1-2 mois). Les cours sont généralement dispensés en semaine avec des sessions pratiques le weekend.',
      icon: <FaClock className="text-orange-600" />
    },
    {
      category: 'formations',
      question: 'Les formations sont-elles en ligne ou en présentiel?',
      answer: 'Nous offrons les deux options! Vous pouvez choisir entre des formations 100% en ligne, des formations hybrides (mixte en ligne/présentiel), ou des formations entièrement en présentiel selon vos préférences et disponibilités.',
      icon: <FaMobileAlt className="text-blue-600" />
    },
    {
      category: 'formations',
      question: 'Quel est le niveau requis pour s\'inscrire?',
      answer: 'Chaque formation a trois niveaux: Débutant (aucun prérequis), Intermédiaire (connaissances de base), Avancé (expérience pratique). Nos conseillers peuvent vous aider à choisir le niveau approprié.',
      icon: <FaUser className="text-green-600" />
    },
    {
      category: 'formations',
      question: 'Obtient-on un certificat à la fin?',
      answer: 'Oui! À la fin de chaque formation, vous recevez un certificat de completion reconnu. Pour une certification professionnelle, vous pouvez passer un examen supplémentaire moyennant des frais additionnels.',
      icon: <FaCertificate className="text-purple-600" />
    },

    // Inscription
    {
      category: 'inscription',
      question: 'Comment s\'inscrire à une formation?',
      answer: 'Le processus d\'inscription est simple: 1) Choisissez votre formation, 2) Remplissez le formulaire d\'inscription, 3) Finalisez via WhatsApp avec notre équipe, 4) Procédez au paiement, 5) Commencez votre formation!',
      icon: <FaCalendarAlt className="text-blue-600" />
    },
    {
      category: 'inscription',
      question: 'Quand puis-je commencer ma formation?',
      answer: 'Nous avons des sessions de démarrage régulières. Une fois votre inscription confirmée, vous pouvez commencer dès la prochaine session disponible (généralement dans les 2-3 semaines).',
      icon: <FaClock className="text-orange-600" />
    },
    {
      category: 'inscription',
      question: 'Puis-je changer de formation après inscription?',
      answer: 'Oui, vous pouvez changer de formation dans les 7 premiers jours après le début des cours, sous réserve de disponibilité. Des frais de changement peuvent s\'appliquer.',
      icon: <FaExchangeAlt className="text-green-600" />
    },

    // Paiement
    {
      category: 'paiement',
      question: 'Quels sont les modes de paiement acceptés?',
      answer: 'Nous acceptons: Mobile Money (Orange Money, MTN Mobile Money), Virement bancaire, Espèces (sur place), Carte bancaire (via notre plateforme en ligne).',
      icon: <FaCreditCard className="text-purple-600" />
    },
    {
      category: 'paiement',
      question: 'Y a-t-il des facilités de paiement?',
      answer: 'Oui! Nous proposons des plans de paiement échelonnés sur 2, 3 ou 4 mois selon le montant de la formation. Contactez-nous pour discuter des options disponibles.',
      icon: <FaChartBar className="text-blue-600" />
    },
    {
      category: 'paiement',
      question: 'Y a-t-il des frais d\'inscription?',
      answer: 'Oui, des frais d\'inscription non remboursables de 10,000 FCFA s\'appliquent à toutes les formations pour couvrir les frais administratifs et matériel.',
      icon: <FaMoneyBillWave className="text-green-600" />
    },
    {
      category: 'paiement',
      question: 'La formation est-elle remboursable?',
      answer: 'Nous offrons un remboursement complet si vous annulez 14 jours avant le début de la formation. Après le début, aucun remboursement n\'est possible, mais vous pouvez transférer votre inscription à une autre personne.',
      icon: <FaUndo className="text-orange-600" />
    },

    // Certification
    {
      category: 'certification',
      question: 'Vos certificats sont-ils reconnus?',
      answer: 'Oui! Nos certificats sont reconnus par les entreprises partenaires et validés par nos formateurs experts. Nous avons également des partenariats avec des organismes de certification internationaux.',
      icon: <FaTrophy className="text-purple-600" />
    },
    {
      category: 'certification',
      question: 'Comment obtenir la certification professionnelle?',
      answer: 'Après avoir complété votre formation, vous pouvez vous inscrire à l\'examen de certification. L\'examen comprend une partie théorique et un projet pratique. La réussite vous décerne la certification professionnelle.',
      icon: <FaCertificate className="text-blue-600" />
    },
    {
      category: 'certification',
      question: 'Y a-t-il des frais pour la certification?',
      answer: 'Oui, des frais supplémentaires de 25,000 FCFA s\'appliquent pour l\'examen de certification professionnelle. Ces frais couvrent l\'examen, la correction et la délivrance du certificat.',
      icon: <FaMoneyBillWave className="text-green-600" />
    }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? faqItems 
    : faqItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">FAQ</h1>
            <p className="text-xl mb-8 text-blue-100">
              Questions fréquemment posées sur nos formations et services
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Items */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {filteredFAQs.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">Aucune question trouvée dans cette catégorie.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredFAQs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden transition-all hover:shadow-lg"
                  >
                    <button
                      onClick={() => toggleItem(index)}
                      className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        {expandedItems.includes(index) ? (
                          <FaChevronUp className="text-gray-500" />
                        ) : (
                          <FaChevronDown className="text-gray-500" />
                        )}
                      </div>
                    </button>
                    {expandedItems.includes(index) && (
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">
            Vous ne trouvez pas votre réponse?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est là pour vous aider. N'hésitez pas à nous contacter directement pour toute question supplémentaire.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <FaEnvelope className="mr-2" />
              Nous Contacter
            </a>
            <a
              href="https://wa.me/237657029080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-600 transition-colors"
            >
              <FaWhatsapp className="mr-2" />
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-blue-100">Étudiants satisfaits</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-blue-100">Formations disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-blue-100">Taux de satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support disponible</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQPage;
