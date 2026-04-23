import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaWhatsapp, FaCreditCard, FaCalendarAlt } from 'react-icons/fa';
import { formations } from '../data/formations';
import '../styles/components.css';

const InscriptionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  // Définir le titre de la page
  useEffect(() => {
    document.title = 'INSCRIPTION | ARCHYVE ACADEMY';
  }, []);
  const [selectedMode, setSelectedMode] = useState<'online' | 'presentiel'>('online');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    education: '',
    experience: '',
    motivation: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formation = formations.find(f => f.id === id);

  if (!formation) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Formation non trouvée</h1>
        <Link to="/courses" className="text-blue-600 hover:text-blue-800">
          Retour aux formations
        </Link>
      </div>
    );
  }

  const totalPrice = formation.price + formation.registrationFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validation des champs
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      setIsSubmitting(false);
      return;
    }

    // Validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setIsSubmitting(false);
      return;
    }

    // Validation téléphone
    const phoneRegex = /^[+]?[0-9]{9,15}$/;
    if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
  };


  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          to={`/courses/${id}`} 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Retour à la formation
        </Link>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">Inscription - {formation.title}</h1>
            <p className="opacity-90">Remplissez ce formulaire pour commencer votre formation</p>
          </div>

          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <FaGraduationCap className="mr-2 text-blue-600" />
                  Détails de la formation
                </h3>
                <div className="space-y-3">
                  <p className="text-sm text-green-600 font-semibold">
                    ✅ La certification est incluse dans le prix de la formation
                  </p>
                </div>
              </div>

              {/* Mode Selection */}
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <FaCalendarAlt className="mr-2 text-purple-600" />
                  Mode de formation
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setSelectedMode('online')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedMode === 'online'
                        ? 'border-purple-600 bg-purple-100 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-2xl">💻</span>
                      <div className="text-center">
                        <p className="font-medium">En ligne</p>
                        <p className="text-xs">Flexibilité totale</p>
                      </div>
                    </div>
                  </button>
                  
                  <button
                    type="button"
                    onClick={() => setSelectedMode('presentiel')}
                    className={`p-4 rounded-lg border-2 transition-all ${
                      selectedMode === 'presentiel'
                        ? 'border-purple-600 bg-purple-100 text-purple-700'
                        : 'border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-2xl">🏢</span>
                      <div className="text-center">
                        <p className="font-medium">Présentiel</p>
                        <p className="text-xs">Dans nos locaux</p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="mt-3 p-3 bg-purple-100 rounded-lg">
                  <p className="text-sm text-purple-800">
                    {selectedMode === 'online' 
                      ? '🌐 Vous avez choisi la formation en ligne avec accès 24/7.'
                      : '🏢 Vous avez choisi la formation en présentiel dans nos locaux de Douala.'
                    }
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <FaCreditCard className="mr-2 text-green-600" />
                  Récapitulatif des coûts
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Formation:</span>
                    <span className="font-semibold">{formation.price.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frais d'inscription:</span>
                    <span className="font-semibold">{formation.registrationFee.toLocaleString()} FCFA</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-green-600">{totalPrice.toLocaleString()} FCFA</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">Certification incluse</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Informations personnelles</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaUser className="mr-2 text-gray-400" />
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Votre nom"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaEnvelope className="mr-2 text-gray-400" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaPhone className="mr-2 text-gray-400" />
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+237 XXX XXX XXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                    <FaGraduationCap className="mr-2 text-gray-400" />
                    Niveau d'études *
                  </label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                  className="form-select"
                >
                  <option value="">Sélectionnez votre niveau</option>
                  <option value="aucun">Aucun diplôme</option>
                  <option value="bepc">BEPC</option>
                  <option value="probatoire">Probatoire</option>
                  <option value="bacc">Baccalauréat</option>
                  <option value="licence">Licence</option>
                  <option value="master">Master</option>
                  <option value="autre">Autre</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
                  <FaCalendarAlt className="mr-2 text-gray-400" />
                  Expérience professionnelle
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="form-select"
                >
                  <option value="">Sélectionnez votre expérience</option>
                  <option value="aucune">Aucune expérience</option>
                  <option value="moins1">Moins d'1 an</option>
                  <option value="1-3">1-3 ans</option>
                  <option value="3-5">3-5 ans</option>
                  <option value="plus5">Plus de 5 ans</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Pourquoi cette formation ? *</label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Expliquez ce qui vous motive à suivre cette formation..."
                />
              </div>
            </div>
            </div>

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800 mb-4">
                <strong>Important :</strong> En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour finaliser votre inscription avec notre équipe.
              </p>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-success w-full"
              >
                <FaWhatsapp className="mr-2" />
                {isSubmitting ? 'En cours...' : 'Soumettre et finaliser sur WhatsApp'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default InscriptionPage;
