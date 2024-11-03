// components/BackgroundWithLogo.tsx

import React from 'react';
import Image from 'next/image';

interface BackgroundWithLogoProps {
  backgroundUrl: string;
  logoUrl: string;
}

export const BackgroundWithLogo: React.FC<BackgroundWithLogoProps> = ({ backgroundUrl, logoUrl }) => {
  return (
    <div className="relative w-full h-[389px] sm:h-[500px] md:h-[700px] lg:h-[850px] xl:h-[1000px] overflow-hidden flex items-start justify-end z-20 	">
      
      {/* Imagen de fondo */}
      <div className="absolute inset-0 w-full h-[389px] sm:h-[500px] md:h-[700px] lg:h-[850px] xl:h-[1000px] -z-10 pt-3 overflow-hidden">
        <Image
          src={backgroundUrl}
          alt="Fondo"
          layout="fill"
          objectFit="cover"
          // objectPosition="top" // Esto baja la imagen
          priority
          className="w-full h-full top"
          style={{objectPosition: '50% 10%'}}
        />
       
      </div>

      {/* Logo en la esquina superior derecha con tamaños aumentados */}
      <div className="absolute top-[-0.75rem] md:top-[-0.5rem] -right-1 sm:right-2 md:right-2 w-36 h-32 sm:w-42 sm:h-36 md:w-52 md:h-54 lg:w-64 lg:h-48 xl:w-80 xl:h-52">
        <Image
          src={logoUrl}
          alt="Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      
    </div>
  );
};

