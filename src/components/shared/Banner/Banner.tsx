// components/Banner.tsx

'use client'
import React from 'react';
import Image from 'next/image';

interface BannerProps {
  logoSrc: string; // URL del logo
  bgColor: string; // Color de fondo del banner
}

export const Banner: React.FC<BannerProps> = ({ logoSrc, bgColor }) => {
  return (
    <div
      className={` ${bgColor} w-full py-4 px-6 flex `}
      
    >
      {/* Logo */}
        <div className="flex-shrink-0 flex-1 flex justify-center">
          <Image
            src={logoSrc}
            alt="Logo del emprendimiento"
            width={200}
            height={150}
            className="object-contain"
          />
        </div>
      <div className='flex justify-center items-center flex-1 font-lora'>
        {/* Texto */}
        <div className="text-black text-center text-sm md:text-lg font-subtitle font-medium">
          MIRA NUESTROS CURSOS DISEÑADOS PARA VOS
        </div>
      </div>
    </div>
  );
};
