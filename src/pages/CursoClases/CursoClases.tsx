"use client";

import React from "react";
import { Dancing_Script } from "next/font/google";
import Carrusel from "@/components/Carrusel/Carrusel";
import { ButtonLink } from "@/components/shared/Buttons/Button";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MiraNuestrasClases = () => {
  return (
    <main className="pt-6 bg-gradient-to-br from-secondary-mediumPink to-secondary-brightPink min-h-screen text-gray-800">
      <section className="px-4 py-16 md:px-8 md:py-24 lg:py-24">
        {/* Encabezado */}
        <div className={`${dancingScript.className} text-center mt-9  flex flex-col items-center w-full`}>
          <h1 className="font-bold text-black text-[3.75rem] sm:text-[3rem] md:text-[4rem]">
            Mira nuestras clases
          </h1>
          <p className="text-2xl md:text-3xl  font-bold mb-2 sm:text-xl  text-black font-sans mt-2 md:!mb-4">
            Cursos especializados en salud ungueal y técnicas profesionales
          </p>
          <p className="text-lg  xl:px-20 mb-9 sm:text-xl md:text-lg xl:w-11/12 lg:text-xl text-black font-sans mt-2 md:!mb-9">
            En nuestras capacitaciones, priorizamos la salud de las uñas y el
            uso de productos de alta calidad para garantizar resultados
            duraderos y seguros. Creemos que una manicura exitosa comienza con
            el cuidado responsable de las uñas naturales, combinando técnicas
            avanzadas con una selección cuidadosa de materiales que respetan su
            integridad.
          </p>
        </div>

        {/* Información y tarjetas */}
        <Carrusel />
        <div className={`text-center mt-9 flex flex-col items-center`}>
          <p className="text-lg mb-2 xl:w-11/12 xl:px-20 sm:text-xl md:text-lg lg:text-xl text-black font-sans mt-2 md:!mb-4">
            Cada curso está diseñado para brindarte conocimientos sólidos, desde
            las bases de la salud ungueal hasta las últimas tendencias en diseño
            y estilos. Con un enfoque práctico y guiado, te acompañamos en cada
            paso para que desarrolles habilidades profesionales que te destaquen
            en el mercado.
          </p>
          <p className="text-3xl md:!text-[2.5rem] mb-8 font-bold mt-12 font-title lg:!text-[3rem] text-black  md:!mb-4">
          &quot;Aprende a cuidar, crear y emprender con confianza.&quot;
          </p>
        </div> 

        {/* Llamado a la acción mobile */}
        <div className="md:hidden mt-20 text-center flex flex-col justify-center items-center">
          <h3 className="text-2xl font-sans font-semibold text-black ">
            No esperes más para alcanzar tus metas
          </h3>
          <p className="mb-4 text-lg xl:w-11/12  sm:text-xl md:text-lg lg:text-xl text-black font-sans mt-2 md:!mb-4">
            Inscríbete hoy y da el primer paso hacia tu éxito. Nuestros cursos
            están diseñados para todas las etapas, desde principiantes hasta
            profesionales.
          </p>
          <ButtonLink
            text="¡Contactanos ahora!"
            href="/cursos/online"
            textColor="text-black"
          />
        </div>

        {/* CTA desktop */}
        <div className="hidden mt-20 text-center md:flex flex-col justify-center items-center">
          <h3 className="text-2xl font-sans font-semibold text-black mb-2">
            No esperes más para alcanzar tus metas
          </h3>
          <p className="mb-4 text-lg  sm:text-xl md:text-lg lg:text-xl text-black font-sans mt-2 md:!mb-4">
            Inscríbete hoy y da el primer paso hacia tu éxito. Nuestros cursos
            están diseñados para todas las etapas, desde principiantes hasta
            profesionales.
          </p>
          <div className="font-title bg-white lg:w-[21.37rem] p-6 rounded-lg shadow-lg flex items-center self-center mt-6 justify-center fluid-bg">
            <a
              href="https://wa.me/5492984207525"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-[27px] lg:text-3xl  font-semibold text-black"
            >
              ¡Contactanos ahora!
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MiraNuestrasClases;
