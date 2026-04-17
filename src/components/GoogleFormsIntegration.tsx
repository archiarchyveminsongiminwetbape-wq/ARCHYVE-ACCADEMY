import React, { useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle, FaSpinner } from 'react-icons/fa';

interface GoogleFormsIntegrationProps {
  formData: {
    fullName: string;
    email: string;
    phone: string;
    formation: string;
    level: string;
    message?: string;
  };
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

const GoogleFormsIntegration: React.FC<GoogleFormsIntegrationProps> = ({
  formData,
  onSuccess,
  onError
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Google Form URL (remplacer avec votre vrai formulaire)
  const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSf_example/formResponse';

  // IDs des champs du formulaire (à adapter selon votre Google Form)
  const FORM_FIELD_IDS = {
    fullName: 'entry.123456789',
    email: 'entry.987654321',
    phone: 'entry.456789123',
    formation: 'entry.789123456',
    level: 'entry.321654987',
    message: 'entry.654987321'
  };

  const submitToGoogleForms = async () => {
    setIsSubmitting(true);
    setStatus('idle');

    try {
      // Créer les données du formulaire
      const formBody = new URLSearchParams();
      formBody.append(FORM_FIELD_IDS.fullName, formData.fullName);
      formBody.append(FORM_FIELD_IDS.email, formData.email);
      formBody.append(FORM_FIELD_IDS.phone, formData.phone);
      formBody.append(FORM_FIELD_IDS.formation, formData.formation);
      formBody.append(FORM_FIELD_IDS.level, formData.level);
      if (formData.message) {
        formBody.append(FORM_FIELD_IDS.message, formData.message);
      }

      // Envoyer au Google Form
      const response = await fetch(GOOGLE_FORM_URL, {
        method: 'POST',
        mode: 'no-cors', // Nécessaire pour les formulaires Google
        body: formBody,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      });

      // Simuler un délai pour l'expérience utilisateur
      await new Promise(resolve => setTimeout(resolve, 1000));

      setStatus('success');
      onSuccess?.();

      // Sauvegarder localement pour suivi
      const submissionData = {
        ...formData,
        timestamp: new Date().toISOString(),
        id: Date.now().toString()
      };
      
      // Stocker dans localStorage pour suivi administratif
      const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
      existingSubmissions.push(submissionData);
      localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));

    } catch (error) {
      console.error('Erreur lors de la soumission:', error);
      setStatus('error');
      onError?.("Une erreur s'est produite lors de l'envoi du formulaire. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusMessage = () => {
    switch (status) {
      case 'success':
        return (
          <div className="flex items-center text-green-600 bg-green-50 p-4 rounded-lg">
            <FaCheckCircle className="mr-2" />
            <span>Votre inscription a été envoyée avec succès ! Nous vous contacterons dans les 24h.</span>
          </div>
        );
      case 'error':
        return (
          <div className="flex items-center text-red-600 bg-red-50 p-4 rounded-lg">
            <FaExclamationTriangle className="mr-2" />
            <span>Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {status !== 'idle' && getStatusMessage()}
      
      <button
        onClick={submitToGoogleForms}
        disabled={isSubmitting}
        className={`w-full flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-colors ${
          isSubmitting
            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
            : 'bg-blue-600 hover:bg-blue-700 text-white'
        }`}
      >
        {isSubmitting ? (
          <>
            <FaSpinner className="animate-spin mr-2" />
            Envoi en cours...
          </>
        ) : (
          'Envoyer ma demande d\'inscription'
        )}
      </button>

      <div className="text-xs text-gray-500 text-center">
        <p>Vos données sont sécurisées et ne seront partagées qu'avec l'équipe d'ARCHYVE Academy.</p>
        <p className="mt-1">Alternative : <a href="https://wa.me/237657029080" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Contactez-nous sur WhatsApp</a></p>
      </div>
    </div>
  );
};

export default GoogleFormsIntegration;
