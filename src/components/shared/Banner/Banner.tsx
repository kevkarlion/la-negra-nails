// components/Banner.tsx
'use client';
import React from 'react';
import Image from 'next/image';
import { VideoLoop } from '@/components/shared/Video'; // Asegúrate de que la ruta sea correcta

interface BannerProps {
  logoSrc: string; // URL del logo
}

export const Banner: React.FC<BannerProps> = ({ logoSrc }) => {
  return (
    <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden">
      {/* Video de fondo */}
      <VideoLoop />

      {/* Contenido del banner */}
      <div
        className="absolute inset-0 flex justify-center items-center"
      >
        {/* Rectángulo con fondo semi-transparente */}
        <div className="bg-black bg-opacity-60 flex justify-center  p-4 md:p-6  w-full h-full">

          <div className="p-4 md:p-6 flex md:flex-row items-center justify-center w-full md:w-3/4 lg:w-2/3">
            
            {/* Logo responsivo */}
            <div className="flex-shrink-0 md:mb-0 md:mr-4 w-40 h-24 md:w-44 md:h-30 lg:w-80 lg:h-52">
              <Image
                src={logoSrc}
                alt="Logo del emprendimiento"
                layout="responsive"
                width={350}  // Anchura base
                height={200} // Altura base
                className="object-contain"
              />
            </div>

            {/* Texto con tipografía moderna */}
            <div className="font-title text-white text-center text-2xl  lg:text-4xl font-medium ">
              Transforma tu pasión <br />en una carrera profesional
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
