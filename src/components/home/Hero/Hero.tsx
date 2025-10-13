'use client';

import React, { useState } from 'react';
import Image from 'next/image';

// Import estático (Next genera blur automático)
import heroBg from '@/assets/images/la-negra-hero.webp';
import logo from '@/assets/images/logo-dorado-white-nvo.png';

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

export const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section
      id="inicio"
      className={`relative w-full min-h-screen flex items-center justify-center overflow-hidden ${inter.className}`}
    >
      {/* Imagen de fondo con desenfoque progresivo */}
      <Image
        src={heroBg}
        alt="Fondo La Negra"
        fill
        priority
        placeholder="blur" // ✅ blur automático
        quality={90}
        onLoadingComplete={() => setIsLoaded(true)}
        className={`object-cover object-top transition-all duration-[1.2s] ease-out ${
          isLoaded ? 'blur-0 scale-100' : 'blur-2xl scale-105'
        }`}
      />

      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex md:pt-6 flex-col items-center text-center px-6 md:px-12 max-w-screen-lg mx-auto space-y-6 md:space-y-8">
        {/* Logo */}
        <div className="relative w-[20rem] h-[16rem] md:w-[32rem] md:h-[24rem]">
          <Image
            src={logo}
            alt="Logo La Negra"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* Subtítulo */}
        <h2 className="text-white mb-4  font-sans text-xl md:text-3xl  w-4/5 md:w-3/5 leading-snug md:leading-relaxed tracking-wide font-normal">
          Estilo y elegancia con el cuidado que tus uñas merecen. <br />
          <span>¡Luce impecable y saludable!</span>
        </h2>

        {/* CTA móvil */}
        <a
          href="https://wa.me/5492984207525"
          target="_blank"
          rel="noopener noreferrer"
          className="md:hidden w-[19rem] h-7 flex items-center justify-center px-6 py-2 text-md font-semibold transition duration-300 ease-in-out rounded-lg shadow-lg overflow-hidden group fluid-bg text-center mb-4"
        >
          <h3 className="text-xl font-title font-semibold text-black">
            ¡Contáctanos!
          </h3>
        </a>

        {/* CTA desktop */}
        <div className="hidden w-3/4 !mt-8 !mb-24 h-10 md:flex justify-center   mx-auto">
          <div className="hidden md:flex md:justify-center w-full mx-auto mt-14">
            <a
              href="https://wa.me/5492984207525"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 w-1/2 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
            >
              <h3 className=" md:text-[27px] lg:text-3xl font-title  font-semibold text-black">
                ¡Contáctanos!
              </h3>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
