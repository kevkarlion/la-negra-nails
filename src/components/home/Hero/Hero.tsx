import React from "react";
import Image from "next/image";
import { ButtonLink } from "@/components/shared/Buttons";
import Link from 'next/link';

export const Hero: React.FC = () => {
  return (
   
    <section
      className="relative z-30 w-full min-h-screen flex items-center justify-center bg-cover  bg-top pt-16 md:pt-20 "
      style={{ backgroundImage: "url(/images/la-negra-hero.webp)" } }
      id="inicio"
    >
      {/* Filtro de fondo */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-70"></div>

      {/* Contenedor del contenido del hero */}
      <div className="relative z-10 flex flex-col items-center text-center p-6 md:px-12 max-w-screen-lg mx-auto space-y-6 md:space-y-8">
        {/* Logo grande y centrado */}
        <div className="relative w-[16rem]  h-[12rem] md:w-[32rem] md:h-[24rem] ">
          <Image
            src="/logos/logo-dorado-white-nvo.png" // Cambia esto por la ruta de tu logo
            alt="Logo"
            fill
            priority
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Subtítulo con fuente moderna */}
        <h2 className="text-white text-xl md:text-3xl font-semibold w-4/5 md:w-3/5 leading-snug md:leading-relaxed tracking-wide">
          Estilo y elegancia con el cuidado que tus uñas merecen. ¡Luce
          impecable y saludable!
        </h2>

        {/* Botón de llamada a la acción */}
        <ButtonLink
          text="Contáctanos"
          href="#footer"
          textColor="text-black"
          bgColor="bg-primary-onix hover:bg-opacity-80 transition duration-300"
        />

        <div className="hidden  w-3/4 !mt-8 !mb-24 h-10 md:flex justify-center   mx-auto">
          <div className="hidden md:flex md:justify-center w-full mx-auto mt-14">
              <Link href="#footer" className="bg-white p-6 w-1/2 rounded-lg shadow-lg flex items-center justify-center fluid-bg">
                <h3 className="text-3xl font-title  font-semibold text-black">¡Contáctanos!</h3>
              </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
