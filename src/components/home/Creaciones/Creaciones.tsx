'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Dancing_Script } from 'next/font/google';

const images = [
  { src: '/images/carrusel/image1.webp', leftDetail: 'Detalle izquierdo 1', rightDetail: 'Detalle derecho 1' },
  { src: '/images/carrusel/image2.webp', leftDetail: 'Detalle izquierdo 2', rightDetail: 'Detalle derecho 2' },
  { src: '/images/carrusel/image3.webp', leftDetail: 'Detalle izquierdo 3', rightDetail: 'Detalle derecho 3' },
];

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const Creaciones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeTransition, setFadeTransition] = useState(false);

  const handlePrev = () => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setFadeTransition(false);
    }, 500);
  };

  const handleNext = () => {
    setFadeTransition(true);
    setTimeout(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setFadeTransition(false);
    }, 500);
  };

  return (
    <section className="py-16" style={{ background: 'linear-gradient(115deg, rgba(255,26,132,1) 0%, rgba(255,255,255,1) 97%)' }}>
      <div className="max-w-screen-lg mx-auto text-center flex flex-col items-center">
        <h1 className={`${dancingScript.className} font-bold text-black text-[2.25rem] sm:text-[3rem] lg:text-[4rem]`}>
          Creaciones
        </h1>
        <p className="w-4/6 text-black font-subtitle text-base md:text-lg lg:text-xl">
          Cada diseño de uñas es una expresión única de estilo y personalidad. Utilizamos técnicas innovadoras y productos de alta calidad para ofrecerte resultados que combinan arte y precisión.
        </p>
      </div>

      <div className="flex items-center justify-center min-h-screen p-6">
        <div className="relative w-full max-w-5xl mx-auto bg-white/20 backdrop-blur-lg rounded-lg shadow-lg p-8 flex flex-row items-center">
          
          <div className={`w-1/4 hidden lg:flex flex-col text-gray-700 p-4 transition-opacity duration-500 ${fadeTransition ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-lg font-semibold mb-2">{images[currentIndex].leftDetail}</p>
          </div>
          
          <div className="w-full lg:w-1/2 relative flex justify-center items-center">
            <div className="relative w-full h-96 bg-black overflow-hidden rounded-lg shadow-lg">
              {images.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                  <Image
                    src={image.src}
                    alt={`Imagen ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
              
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
          </div>

          <div className={`w-1/4 hidden lg:flex flex-col text-gray-700 p-4 transition-opacity duration-500 ${fadeTransition ? 'opacity-0' : 'opacity-100'}`}>
            <p className="text-lg font-semibold mb-2">{images[currentIndex].rightDetail}</p>
          </div>
        </div>
      </div>

      <div className="hidden md:flex md:justify-center w-full mx-auto mt-14">
        <Link href="" className="bg-white p-6 w-1/2 rounded-lg shadow-lg flex items-center justify-center fluid-bg">
          <h3 className="text-lg font-semibold text-black">Contáctanos</h3>
        </Link>
      </div>
    </section>
  );
};
