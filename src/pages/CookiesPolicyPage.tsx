import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaCookie, FaShieldAlt, FaEye, FaCog } from 'react-icons/fa';
import '../styles/components.css';

const CookiesPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'POLITIQUE DE COOKIES | ARCHYVE ACADEMY';
  }, []);

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-lg p-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaCookie className="text-blue-600 text-3xl" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Politique de Cookies
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ARCHYVE ACADEMY utilise des cookies et technologies similaires pour améliorer votre expérience 
              sur notre plateforme de formation en ligne.
            </p>
          </div>

          {/* Content */}
          <div className="space-y-12">
            {/* Qu'est-ce qu'un cookie */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCookie className="text-blue-600 mr-3" />
                Qu'est-ce qu'un Cookie ?
              </h2>
              <div className="prose prose-lg text-gray-700 bg-blue-50 p-6 rounded-lg">
                <p className="mb-4">
                  Un cookie est un petit fichier texte déposé sur votre navigateur lors de votre visite 
                  de notre site. Il permet de stocker des informations techniques et de reconnaissance 
                  pour faciliter votre navigation et personnaliser votre expérience.
                </p>
                <p>
                  Les cookies nous aident à comprendre comment vous utilisez notre plateforme 
                  et à améliorer continuellement nos services.
                </p>
              </div>
            </section>

            {/* Types de cookies utilisés */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCog className="text-blue-600 mr-3" />
                Types de Cookies Utilisés
              </h2>
              <div className="space-y-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies essentiels</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Finalité :</strong> Nécessaires au fonctionnement du site</p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Authentification et maintien de session</li>
                      <li>Sécurité et prévention des fraudes</li>
                      <li>Panier d'achat et processus d'inscription</li>
                    </ul>
                    <p className="text-sm mt-2"><strong>Durée :</strong> Session ou 24 heures maximum</p>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies de performance</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Finalité :</strong> Analyse et optimisation du site</p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Mesure du trafic et de l'audience</li>
                      <li>Temps de chargement des pages</li>
                      <li>Détection des erreurs techniques</li>
                    </ul>
                    <p className="text-sm mt-2"><strong>Durée :</strong> 13 mois maximum</p>
                  </div>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies fonctionnels</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Finalité :</strong> Amélioration de l'expérience utilisateur</p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Mémorisation des préférences (langue, mode)</li>
                      <li>Personnalisation du contenu</li>
                      <li>Fonctionnalités de partage social</li>
                    </ul>
                    <p className="text-sm mt-2"><strong>Durée :</strong> 12 mois maximum</p>
                  </div>
                </div>

                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookies de marketing</h3>
                  <div className="space-y-3 text-gray-700">
                    <p><strong>Finalité :</strong> Publicité ciblée et suivi marketing</p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Publicités personnalisées</li>
                      <li>Analyse des campagnes marketing</li>
                      <li>Retargeting sur d'autres sites</li>
                    </ul>
                    <p className="text-sm mt-2"><strong>Durée :</strong> 6 mois maximum</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gestion des cookies */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaCog className="text-blue-600 mr-3" />
                Gestion des Cookies
              </h2>
              <div className="space-y-6">
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Consentement</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Lors de votre première visite, nous vous présentons une bannière de cookies 
                      pour recueillir votre consentement éclairé.
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Acceptation de tous les cookies</li>
                      <li>Refus partiel (catégories spécifiques)</li>
                      <li>Personnalisation des préférences</li>
                      <li>Conservation de votre choix</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Modification et suppression</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Vous pouvez modifier vos préférences de cookies à tout moment :
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Via les paramètres de votre navigateur</li>
                      <li>En utilisant notre panneau de configuration</li>
                      <li>En supprimant les cookies stockés</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Note :</strong> La suppression des cookies peut affecter certaines fonctionnalités du site.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Cookies tiers */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaEye className="text-blue-600 mr-3" />
                Cookies Tiers
              </h2>
              <div className="bg-orange-50 p-6 rounded-lg text-gray-700">
                <p className="mb-4">
                  Notre site peut contenir des cookies de tiers pour des services externes :
                </p>
                <ul className="list-disc list-inside ml-6 space-y-2">
                  <li><strong>Réseaux sociaux :</strong> Facebook, Twitter, LinkedIn pour le partage</li>
                  <li><strong>Analyse web :</strong> Google Analytics pour les statistiques</li>
                  <li><strong>Vidéos :</strong> YouTube, Vimeo pour les contenus multimédia</li>
                  <li><strong>Publicité :</strong> Google Ads pour les campagnes marketing</li>
                </ul>
                <p className="mt-4">
                  Nous ne contrôlons pas ces cookies tiers. Consultez leurs politiques 
                  respectives pour plus d'informations.
                </p>
              </div>
            </section>

            {/* Légal et conformité */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FaShieldAlt className="text-blue-600 mr-3" />
                Conformité Légale
              </h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Réglementation applicable</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Notre politique de cookies respecte :
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li><strong>RGPD européen :</strong> Protection des données personnelles</li>
                      <li><strong>CNIL française :</strong> Recommandations cookies</li>
                      <li><strong>Loi camerounaise :</strong> Protection des consommateurs</li>
                      <li><strong>ePrivacy Directive :</strong> Confidentialité des communications</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Mises à jour</h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Cette politique de cookies peut être mise à jour pour :
                    </p>
                    <ul className="list-disc list-inside ml-6 space-y-1">
                      <li>Nouveaux types de cookies nécessaires</li>
                      <li>Changements technologiques du site</li>
                      <li>Évolutions réglementaires</li>
                      <li>Améliorations des services</li>
                    </ul>
                    <p className="text-sm mt-2">
                      <strong>Date de dernière mise à jour : 23 Avril 2026</strong>
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact</h2>
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Pour toute question sur notre politique de cookies ou pour exercer vos droits :
                </p>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Email :</strong> privacy@archyve-academy.com</p>
                  <p><strong>Téléphone :</strong> +237 657 02 90 80</p>
                  <p><strong>Formulaire de contact :</strong> Disponible sur notre site</p>
                  <p><strong>DPO (Délégué Protection Données) :</strong> dpo@archyve-academy.com</p>
                </div>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t text-center">
            <p className="text-gray-600 mb-4">
              En continuant à utiliser notre site, vous acceptez notre utilisation des cookies 
              conformément à cette politique.
            </p>
            <div className="space-y-2">
              <Link 
                to="/privacy" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mr-6"
              >
                ← Politique de Confidentialité
              </Link>
              <Link 
                to="/terms" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mr-6"
              >
                Conditions Générales
              </Link>
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

export default CookiesPolicyPage;
