import { useEffect } from 'react';

/**
 * Hook personnalisé pour gérer dynamiquement le titre de la page
 * @param title - Le titre de la page (sans le suffixe ARCHYVE ACADEMY)
 * @param includeSuffix - Si true, ajoute " | ARCHYVE ACADEMY" à la fin
 */
export const usePageTitle = (title: string, includeSuffix: boolean = true) => {
  useEffect(() => {
    const fullTitle = includeSuffix ? `${title} | ARCHYVE ACADEMY` : title;
    document.title = fullTitle;
  }, [title, includeSuffix]);
};
