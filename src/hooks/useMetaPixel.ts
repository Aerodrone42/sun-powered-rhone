import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

export const useMetaPixelLead = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  
  useEffect(() => {
    // Détecte les redirections après soumission de formulaire
    const isCallbackSuccess = searchParams.get('callback') === 'true';
    const isContactSuccess = searchParams.get('success') === 'true';
    
    if ((isCallbackSuccess || isContactSuccess) && typeof window.fbq === 'function') {
      window.fbq('track', 'Lead');
      console.log('Meta Pixel: Lead event tracked');
    }
  }, [searchParams, location]);
};
