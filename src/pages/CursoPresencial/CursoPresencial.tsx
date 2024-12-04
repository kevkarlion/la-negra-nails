"use client";

import React, { useEffect, useState } from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

import { ButtonLink } from '@/components/shared/Buttons'
import { HiOutlineUserGroup, HiOutlineBadgeCheck } from "react-icons/hi";
import { RiToolsLine, RiBookOpenLine } from "react-icons/ri";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const imagePaths = [
  "/images/carrusel/image1.webp",
  "/images/carrusel/image2.webp",
  "/images/carrusel/image3.webp",
];

const CursoPresencial = () => {
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
    <main className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen text-black">
      <section
        className="px-4 py-16 md:px-8 md:py-24 lg:py-24 h-auto bg-cover"
        style={{
          backgroundImage: 'url("/background/cursos.svg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Encabezado */}
        <div className={`${dancingScript.className} text-center mt-9`}>
          <h1 className=" font-bold text-black text-[3.75rem] sm:text-[3rem] md:text-[4rem]">
            Cursos Presenciales
          </h1>
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-black font-sans mt-2">
            Aprende de los mejores en un entorno práctico y personalizado.
          </p>
        </div>

        {/* Cuerpo */}
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center mt-6">
          {/* Imagen dinámica */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] overflow-hidden rounded-lg relative">
            <Image
              src={imagePaths[currentImageIndex]}
              alt="Curso Presencial Nails"
              fill
              objectFit="cover"
              className={`transition-opacity duration-500 ${
                fade ? "opacity-100" : "opacity-0"
              }`}
            />
          </div>

          {/* Descripción */}
          <div className="lg:w-1/2 mt-12 md:p-6">
            <h2 className="text-4xl text-title text-center sm:text-left  font-semibold text-black mb-4">
              ¡Transforma tu pasión en una profesión!
            </h2>
            <p className="text-black font-sans text-center sm:text-left text-lg md:text-lg mb-6">
              Aprende las técnicas modernas de diseño de uñas con nuestros
              cursos presenciales, diseñados para proporcionarte una experiencia
              práctica, personalizada y profesional.
            </p>
            <div className="space-y-4 mb-12">
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <HiOutlineUserGroup size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Clases prácticas en pequeños grupos.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <HiOutlineBadgeCheck size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Certificación profesional incluida.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <RiToolsLine size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Materiales de alta calidad proporcionados.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <RiBookOpenLine size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Acceso a recursos exclusivos para alumnos.
                </span>
              </div>
            </div>

            {/* Vista mobile */}
            <div className="flex justify-center">
              <ButtonLink
                text="Inscribite ahora!"
                href="tel:+5492984207525"
                textColor="text-black"
                bgColor="bg-[#ff5ba4]"
              />
            </div>

            {/* Vista desktop */}
          </div>
        </div>
            <div className="hidden md:grid gap-4 w-1/2 mt-4 max-w-screen-lg mx-auto md:grid-cols-2 md:grid-rows-2 md:grid-flow-row">
              <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg col-span-2">
                <a
                  href="tel:+5492984207525"
                  className="text-3xl  font-semibold text-black font-title"
                >
                  Inscribite ahora!{" "}
                </a>
              </div>
            </div>
      </section>
    </main>
  );
};

export default CursoPresencial

