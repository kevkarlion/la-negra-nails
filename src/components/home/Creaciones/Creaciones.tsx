'use client'
import React, { useState } from 'react';
import { Dancing_Script } from 'next/font/google';
import { ButtonLink } from '@/components/shared/Buttons'
import Image from 'next/image';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface CarouselSectionProps {
  title: string;
  subtitle: string;
  images: string[]; // Array con las URLs de las imágenes para el carrusel
}

export const Creaciones: React.FC<CarouselSectionProps> = ({ title, subtitle, images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Funciones para navegar en el carrusel
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section
      className="px-4 py-6 md:px-8 md:py-10 lg:py-16 bg-secondary-mediumPink h-auto bg-cover"
      style={{ backgroundImage: 'url(/bg/bg-section.svg)' }}
    >
      <div className="max-w-screen-lg mx-auto text-center mt-9 flex flex-col items-center">
        {/* Título principal */}
        <h1 className={`${dancingScript.className} text-title-mobile-md font-bold text-black md:text-3xl lg:text-4xl`}>
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="md:text-base lg:text-lg w-4/6 mt-4 font-medium text-black text-subtitle-mobile-md font-subtitle">
          {subtitle}
        </p>

        {/* Carrusel de imágenes */}
        <div className="flex items-center justify-center relative w-80 max-w-md mt-8 overflow-hidden h-96 bg-black">
          <div
            className="flex transition-transform duration-500 ease-in-out items-center "
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="min-w-full h-full">
                <Image
                  src={image}
                  alt={`Imagen ${index + 1}`}
                  layout="responsive"
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>

          {/* Controles de navegación */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          >
            ❯
          </button>
        </div>

        {/* Espacio para el botón */}
        <div className="flex justify-center mt-8 mb-8">
          <ButtonLink text='Mirá la galería' href='#' bgColor='bg-[#ffc0db]' border='none' textColor='text-black'/>
        </div>
      </div>
    </section>
  );
};
