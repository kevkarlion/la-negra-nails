'use client';
import { useState, useEffect } from 'react';

const usePageLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    // Verificar si la página ya está cargada
    if (document.readyState === 'complete') {
      setIsLoaded(true);
    } else if (typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad);
      
      // Limpieza del evento
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return isLoaded;
};

export default usePageLoad;
