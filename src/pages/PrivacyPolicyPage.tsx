import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaUserShield, FaLock, FaDatabase } from 'react-icons/fa';
import '../styles/components.css';

const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'POLITIQUE DE CONFIDENTIALITÉ | ARCHYVE ACADEMY';
  }, []);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShieldAlt className="text-blue-600 text-3xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Confidentialité
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ARCHYVE ACADEMY s'engage à protéger la vie privée de ses utilisateurs et à garantir la sécurité de leurs données personnelles.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaUserShield className="text-blue-600 mr-3" />
                Introduction
              </h2>
              <div className="prose prose-lg text-gray-700">
                <p className="mb-4">
                  Cette politique de confidentialité décrit comment ARCHYVE ACADEMY collecte, utilise et protège les informations personnelles 
                  des utilisateurs de notre plateforme de formation en ligne. En utilisant nos services, vous acceptez les pratiques 
                  décrites dans cette politique.
                </p>
                <p>
                  Date de dernière mise à jour : <strong>23 Avril 2026</strong>
                </p>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaDatabase className="text-blue-600 mr-3" />
                Données Collectées
              </h2>
              <div className="space-y-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Informations personnelles</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Nom et prénom</li>
                    <li>Adresse email</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse postale</li>
                    <li>Formation suivie et progression</li>
                    <li>Historique des paiements</li>
                    <li>Données de connexion et d'utilisation</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Données techniques</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Adresse IP</li>
                    <li>Type de navigateur et système d'exploitation</li>
                    <li>Pages visitées et temps passé</li>
                    <li>Cookies et technologies similaires</li>
                    <li>Identifiants uniques d'appareil</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Utilisation des données */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaLock className="text-blue-600 mr-3" />
                Utilisation des Données
              </h2>
              <div className="space-y-6">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Finalités principales</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Fourniture des services :</strong> Accès aux formations, suivi de progression, certification</li>
                    <li><strong>Amélioration des services :</strong> Personnalisation de l'expérience, analyse de l'utilisation</li>
                    <li><strong>Communication :</strong> Envoi d'informations importantes, support technique</li>
                    <li><strong>Sécurité :</strong> Prévention des fraudes, protection des comptes</li>
                    <li><strong>Conformité légale :</strong> Respect des obligations réglementaires</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Protection des données */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaShieldAlt className="text-blue-600 mr-3" />
                Protection des Données
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Mesures de sécurité</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Chiffrement des données sensibles (SSL/TLS)</li>
                    <li>Contrôle d'accès strict et authentification</li>
                    <li>Sauvegardes régulières et sécurisées</li>
                    <li>Surveillance continue des menaces</li>
                    <li>Formation du personnel à la sécurité</li>
                    <li>Audits de sécurité réguliers</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Durée de conservation</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Données comptables :</strong> 10 ans (obligation légale)</li>
                    <li><strong>Données de formation :</strong> 5 ans après fin de formation</li>
                    <li><strong>Données de connexion :</strong> 2 ans</li>
                    <li><strong>Cookies :</strong> 13 mois maximum</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Droits des utilisateurs */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaUserShield className="text-blue-600 mr-3" />
                Vos Droits
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Droits RGPD</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Droit d'accès :</strong> Consulter vos données personnelles</li>
                    <li><strong>Droit de rectification :</strong> Corriger les informations inexactes</li>
                    <li><strong>Droit de suppression :</strong> Demander la suppression de vos données</li>
                    <li><strong>Droit de portabilité :</strong> Transférer vos données vers un autre service</li>
                    <li><strong>Droit d'opposition :</strong> Refuser certains traitements</li>
                    <li><strong>Droit à l'oubli :</strong> Suppression définitive des données</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant cette politique de confidentialité ou pour exercer vos droits, 
                  vous pouvez nous contacter :
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email :</strong> contactarchyve-academy@proton.me</p>
                  <p><strong>Téléphone :</strong> +237 657 02 90 80</p>
                  <p><strong>Adresse :</strong> Douala, Cameroun</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-gray-600 mb-4">
              Cette politique peut être modifiée à tout moment. Les modifications entreront en vigueur 
              dès leur publication sur notre site.
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
  );
};

export default PrivacyPolicyPage;
