import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeft, FaUser, FaEnvelope, FaPhone, FaWhatsapp, FaGraduationCap, FaCalendarAlt, FaCreditCard } from 'react-icons/fa';
import { formations } from '../data/formations';

const InscriptionPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedLevel, setSelectedLevel] = useState<'debutant' | 'intermediaire' | 'avance'>('debutant');
  const [wantsCertification, setWantsCertification] = useState(false);
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

  const currentLevel = formation.levels[selectedLevel];
  const totalPrice = currentLevel.price + formation.registrationFee;
  const finalPrice = wantsCertification ? totalPrice + formation.certificationPrice : totalPrice;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Préparer le message WhatsApp avec toutes les informations
    const message = `*NOUVELLE DEMANDE D'INSCRIPTION - ARCHYVE ACADEMY*

*FORMATION:* ${formation.title}
*NIVEAU:* ${selectedLevel.charAt(0).toUpperCase() + selectedLevel.slice(1)}
*CERTIFICATION:* ${wantsCertification ? 'Oui' : 'Non'}

*INFORMATIONS PERSONNELLES:*
*Nom:* ${formData.firstName} ${formData.lastName}
*Email:* ${formData.email}
*Téléphone:* ${formData.phone}
*Niveau d'études:* ${formData.education}
*Expérience:* ${formData.experience}

*MOTIVATION:*
${formData.motivation}

*COÛT TOTAL:* ${finalPrice.toLocaleString()} FCFA

---
Merci de contacter ce candidat dès que possible pour finaliser son inscription.`;

    // Ouvrir WhatsApp avec le message pré-rempli
    window.open(`https://wa.me/237657029080?text=${encodeURIComponent(message)}`, '_blank');
    
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
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Niveau souhaité</label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value as any)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="debutant">Débutant - {currentLevel.price.toLocaleString()} FCFA</option>
                      <option value="intermediaire">Intermédiaire - {formation.levels.intermediaire.price.toLocaleString()} FCFA</option>
                      <option value="avance">Avancé - {formation.levels.avance.price.toLocaleString()} FCFA</option>
                    </select>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="certification"
                      checked={wantsCertification}
                      onChange={(e) => setWantsCertification(e.target.checked)}
                      className="mr-2"
                    />
                    <label htmlFor="certification" className="text-sm text-gray-700">
                      Je veux la certification (+{formation.certificationPrice.toLocaleString()} FCFA)
                    </label>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center">
                  <FaCreditCard className="mr-2 text-green-600" />
                  Récapitulatif des coûts
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Formation ({selectedLevel}):</span>
                    <span className="font-semibold">{currentLevel.price.toLocaleString()} FCFA</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Frais d'inscription:</span>
                    <span className="font-semibold">{formation.registrationFee.toLocaleString()} FCFA</span>
                  </div>
                  {wantsCertification && (
                    <div className="flex justify-between">
                      <span>Certification:</span>
                      <span className="font-semibold">{formation.certificationPrice.toLocaleString()} FCFA</span>
                    </div>
                  )}
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-green-600">{finalPrice.toLocaleString()} FCFA</span>
                    </div>
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
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+237 XXX XXX XXX"
                  />
                </div>
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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

            <div className="mt-8 bg-blue-50 p-6 rounded-lg">
              <p className="text-sm text-blue-800 mb-4">
                <strong>Important :</strong> En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour finaliser votre inscription avec notre équipe.
              </p>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-medium transition-colors"
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
