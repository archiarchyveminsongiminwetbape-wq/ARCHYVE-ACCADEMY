import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFileContract, FaGraduationCap, FaCreditCard, FaShieldAlt, FaGavel } from 'react-icons/fa';
import '../styles/components.css';

const TermsConditionsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'CONDITIONS GÉNÉRALES | ARCHYVE ACADEMY';
  }, []);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaFileContract className="text-blue-600 text-3xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Conditions Générales d'Utilisation
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              En vous inscrivant à ARCHYVE ACADEMY, vous acceptez les conditions générales suivantes.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Acceptation des conditions */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaGavel className="text-blue-600 mr-3" />
                1. Acceptation des Conditions
              </h2>
              <div className="prose prose-lg text-gray-700 bg-blue-50 p-6 rounded-lg">
                <p className="mb-4">
                  L'utilisation de la plateforme ARCHYVE ACADEMY implique l'acceptation pleine et entière des 
                  présentes conditions générales. Ces conditions régissent l'accès et l'utilisation de nos 
                  services de formation en ligne.
                </p>
                <p>
                  En continuant à utiliser notre plateforme après la mise à jour de ces conditions, 
                  vous acceptez les modifications apportées.
                </p>
              </div>
            </section>

            {/* Description des services */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaGraduationCap className="text-blue-600 mr-3" />
                2. Description des Services
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Formations proposées</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Développement Web et Mobile</li>
                    <li>Data Science et Machine Learning</li>
                    <li>Cybersécurité et Réseaux</li>
                    <li>Cloud Computing et DevOps</li>
                    <li>Design UI/UX et Bureautique</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Modalités de formation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Formation en ligne (accès 24/7 à la plateforme)</li>
                    <li>Formation en présentiel (dans nos locaux de Douala)</li>
                    <li>Sessions live et enregistrements disponibles</li>
                    <li>Support technique par chat et email</li>
                    <li>Accès aux ressources et exercices</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Inscription et engagement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaFileContract className="text-blue-600 mr-3" />
                3. Inscription et Engagement
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Processus d'inscription</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Création d'un compte avec informations valides</li>
                    <li>Choix de la formation et du mode (en ligne/présentiel)</li>
                    <li>Paiement des frais d'inscription et de formation</li>
                    <li>Réception de l'accès à la plateforme</li>
                    <li>Commencement de la formation selon calendrier</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Engagements de l'étudiant</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Fournir des informations exactes et véridiques</li>
                    <li>Participer activement aux sessions de formation</li>
                    <li>Respecter le calendrier et les échéances</li>
                    <li>Respecter la propriété intellectuelle du contenu</li>
                    <li>Utiliser la plateforme de manière responsable</li>
                    <li>Payer les frais dans les délais impartis</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Tarifs et paiement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCreditCard className="text-blue-600 mr-3" />
                4. Tarifs et Paiement
              </h2>
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Structure des tarifs</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Frais d'inscription :</strong> 5,000 FCFA uniques</li>
                    <li><strong>Coût de formation :</strong> Variable selon la formation choisie</li>
                    <li><strong>Frais de certification :</strong> Optionnels, selon la formation</li>
                    <li><strong>Paiement échelonné :</strong> Possibilité sur 3 mois maximum</li>
                    <li><strong>Remboursement :</strong> Possible sous conditions (voir ci-dessous)</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Méthodes de paiement</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Paiement Mobile (Orange Money, MTN, MoMo)</li>
                    <li>Carte Bancaire (Visa, Mastercard)</li>
                    <li>Virement Bancaire</li>
                    <li>Paiement en espèces (sur place uniquement)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Politique de remboursement */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaShieldAlt className="text-blue-600 mr-3" />
                5. Politique de Remboursement
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-4 text-gray-700">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Conditions de remboursement</h3>
                    <ul className="list-disc list-inside space-y-2">
                      <li><strong>7 jours avant le début :</strong> Remboursement intégral (90%)</li>
                      <li><strong>3-7 jours avant le début :</strong> Remboursement intégral (75%)</li>
                      <li><strong>Moins de 3 jours :</strong> Aucun remboursement</li>
                      <li><strong>Après début de formation :</strong> Aucun remboursement possible</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Procédure</h3>
                    <ol className="list-decimal list-inside space-y-2">
                      <li>Envoyer une demande écrite à : contact@archyve-academy.com</li>
                      <li>Fournir les justificatifs nécessaires</li>
                      <li>Le remboursement sera effectué sous 15 jours ouvrables</li>
                      <li>Les frais de transfert bancaire sont à la charge de l'étudiant</li>
                    </ol>
                  </div>
                </div>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaShieldAlt className="text-blue-600 mr-3" />
                6. Propriété Intellectuelle
              </h2>
              <div className="bg-teal-50 p-6 rounded-lg text-gray-700">
                <p className="mb-4">
                  Tout le contenu pédagogique, supports de cours, exercices et matériels fournis par 
                  ARCHYVE ACADEMY demeurent la propriété exclusive de l'académie.
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Reproduction, distribution ou vente interdites sans autorisation écrite</li>
                  <li>Utilisation personnelle uniquement pour l'apprentissage</li>
                  <li>Le certificat délivré reste la propriété d'ARCHYVE ACADEMY</li>
                  <li>Toute violation entraînera des poursuites judiciaires</li>
                </ul>
              </div>
            </section>

            {/* Limitation de responsabilité */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaShieldAlt className="text-blue-600 mr-3" />
                7. Limitation de Responsabilité
              </h2>
              <div className="bg-pink-50 p-6 rounded-lg text-gray-700">
                <p className="mb-4">
                  ARCHYVE ACADEMY s'efforce de fournir des services de qualité mais ne peut garantir :
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>L'emploi après obtention du certificat</li>
                  <li>Des résultats spécifiques pour chaque étudiant</li>
                  <li>La disponibilité 100% de la plateforme (maintenance possible)</li>
                  <li>La compatibilité avec tous les appareils et navigateurs</li>
                </ul>
                <p className="mt-4 font-semibold">
                  Notre responsabilité est limitée au montant des frais de formation payés par l'étudiant.
                </p>
              </div>
            </section>

            {/* Résolution des litiges */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaGavel className="text-blue-600 mr-3" />
                8. Résolution des Litiges
              </h2>
              <div className="bg-blue-50 p-6 rounded-lg text-gray-700">
                <p className="mb-4">
                  En cas de désaccord entre ARCHYVE ACADEMY et un étudiant, les parties s'engagent à :
                </p>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Rechercher une solution amiable par dialogue direct</li>
                  <li>Faire appel à un médiateur indépendant si nécessaire</li>
                  <li>En dernier recours, saisir la juridiction compétente de Douala</li>
                  <li>Les présentes conditions sont soumises au droit camerounais</li>
                </ol>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-gray-600 mb-4">
              Ces conditions générales entrent en vigueur le 23 Avril 2026 et remplacent 
              toutes les versions précédentes.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                Dernière mise à jour : 23 Avril 2026
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                ← Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
