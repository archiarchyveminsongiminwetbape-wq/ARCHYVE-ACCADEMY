import React from 'react';

const FAQPage = () => {
  React.useEffect(() => {
    document.title = 'FAQ | ARCHYVE ACADEMY';
    // Redirect to external FAQ page
    window.location.href = '/faq.html';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Redirection vers la FAQ...</p>
      </div>
    </div>
  );
};

export default FAQPage;
