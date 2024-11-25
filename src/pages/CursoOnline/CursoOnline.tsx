'use client';

import React, { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

import { ButtonLink } from '@/components/shared/Buttons';
import { HiOutlineDeviceTablet, HiOutlineClock } from "react-icons/hi";
import { RiVideoLine, RiEarthLine } from "react-icons/ri";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const imagePaths = [
  "/images/cursosOnline/online1.webp",
  "/images/cursosOnline/online2.webp",
  "/images/cursosOnline/online3.webp",
];

export const CursoOnline = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFade(false); // Comienza el efecto de fade-out
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % imagePaths.length
        );
        setFade(true); // Aplica el fade-in con la nueva imagen
      }, 500); // Tiempo de transición
    }, 3500); // Intervalo para cambiar imagen

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-black">
      <section
        className="px-4 py-16 md:px-8 md:py-24 lg:py-24 h-auto bg-cover"
        style={{
          backgroundImage: 'url("/background/online.svg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Encabezado */}
        <div className={`${dancingScript.className} text-center mt-9`}>
          <h1 className="font-bold text-black text-[2.25rem] sm:text-[3rem] md:text-[4rem]">
            Cursos Online
          </h1>
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-black font-sans mt-2">
            Aprende desde cualquier lugar, en cualquier momento.
          </p>
        </div>

        {/* Cuerpo */}
        <div className="flex flex-col md:flex-row md:items-start items-center justify-center mt-12">
          {/* Imagen dinámica */}
          <div className="w-full md:w-1/2 h-[400px] md:h-[600px] overflow-hidden rounded-lg relative">
            <Image
              src={imagePaths[currentImageIndex]}
              alt="Curso Online"
              fill
              objectFit="cover"
              className={`transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Descripción */}
          <div className="md:w-1/2 p-6">
            <h2 className="text-2xl text-center sm:text-left md:text-3xl font-semibold text-blue-600 mb-4">
              ¡Aprende a tu propio ritmo!
            </h2>
            <p className="text-black text-center sm:text-left text-base md:text-lg mb-6">
              Nuestros cursos online están diseñados para brindarte acceso a
              contenido de alta calidad, donde y cuando quieras.
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-600">
                <HiOutlineDeviceTablet size={40} className="text-blue-600 mr-4" />
                <span className="text-gray-700 text-lg font-medium">
                  Acceso desde cualquier dispositivo.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-600">
                <HiOutlineClock size={40} className="text-blue-600 mr-4" />
                <span className="text-gray-700 text-lg font-medium">
                  Clases disponibles las 24 horas.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-600">
                <RiVideoLine size={40} className="text-blue-600 mr-4" />
                <span className="text-gray-700 text-lg font-medium">
                  Lecciones grabadas y en vivo.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-blue-600">
                <RiEarthLine size={40} className="text-blue-600 mr-4" />
                <span className="text-gray-700 text-lg font-medium">
                  Aprende desde cualquier parte del mundo.
                </span>
              </div>
            </div>

            {/* Vista mobile */}
            <div className="flex justify-center">
              <ButtonLink
                text="Regístrate ahora"
                href="/registro"
                textColor="text-black"
                bgColor="bg-[#007BFF]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

