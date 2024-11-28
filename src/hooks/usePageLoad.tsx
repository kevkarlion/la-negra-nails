// hooks/usePageLoad.js
'use client'
import { useState, useEffect } from 'react';

const usePageLoad = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true);

    if (typeof window !== 'undefined') {
      window.addEventListener('load', handleLoad);

      // Limpieza del evento al desmontar el componente
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  return isLoaded;
};

export default usePageLoad;
