import React from 'react';

import { ServiceCard } from '@/components/shared/ServiceCard';
import { ButtonLink, ButtonBorder } from '@/components/shared/Buttons';
import Link from 'next/link';


interface SectionProps {
  title: string;
  subtitle: string;
}

export const Servicios: React.FC<SectionProps> = ({ title, subtitle }) => {
  return (
    <section
      className="px-4 py-6 md:px-8 md:py-10 lg:pt-16 h-auto bg-cover bg-secondary"
      style={{ backgroundImage: 'url(/bg/bg-section.svg)' }} id='servicios'
    >
      <div className="max-w-screen-lg mx-auto text-center mt-9 flex flex-col items-center">
        {/* Título principal */}
        <h1 className={`font-title  font-bold text-black text-[2.25rem] sm:text-[3rem] lg:text-[5rem]`}>
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="w-full sm:w-4/6 font-sans text-black font-light  text-lg sm:text-xl md:text-lg lg:text-xl">
          {subtitle}
        </p>

        {/* Cards con sombras y efecto de hover */}
        <div className="grid grid-cols-1 justify-items-center gap-6 mt-8 w-full sm:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            propertyClassName="shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            title="Manicura tradicional"
            description="Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante."
          />
          <ServiceCard
            propertyClassName="shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            title="Baños de parafina"
            description="Un tratamiento que hidrata y suaviza la piel de manos y pies mediante la inmersión en parafina caliente, proporcionando alivio y bienestar."
          />
          <ServiceCard
            propertyClassName="shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            title="Pedicura Spa"
            description="Un tratamiento de lujo que cuida y rejuvenece los pies, combinando exfoliación, hidratación y masaje, dejando la piel suave y las uñas impecables."
          />
          <ServiceCard
            propertyClassName="shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            title="Uñas esculpidas"
            description="Un servicio de manicura que utiliza técnicas avanzadas para crear uñas de acrílico o gel, permitiendo una forma y diseño personalizados que ofrecen durabilidad y estilo."
          />
          <ServiceCard
            propertyClassName="shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            title="SOFT gel"
            description="Un tratamiento de uñas que utiliza un gel ligero y flexible, ideal para lograr un acabado natural y duradero. Proporciona un brillo excepcional y permite una fácil aplicación y eliminación."
          />
          <ServiceCard
            propertyClassName="shadow-lg transition-all duration-700 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            title="Capping gel"
            description="Técnica que cubre y protege las uñas naturales con una capa de gel, acrílico o polygel, sin extender su longitud. Esta técnica es ideal para reforzar la uña natural, evitar que se quiebre y proporcionar un acabado más resistente y duradero."
          />
        </div>

        {/* Espacio para botones */}
        <div className="flex flex-col justify-center items-center mt-8 mb-8 md:hidden">
          <ButtonBorder text="Conocé más" href="#"  />
          <ButtonLink text="Contactanos" href="#" borderColor="border-[#ff1a84]" textColor='text-black' />
        </div>

         {/* Espacio para botones */}
          <div className="hidden md:flex gap-4 w-3/4  mx-auto md:grid-cols-2 mt-14">
            <Link href='#' className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg">
              <h3 className={` text-3xl font-title  font-semibold text-black`}>Conocé más</h3>
            </Link>
            <Link href='#footer' className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg">
              <h3 className={` text-3xl font-title  font-semibold text-black`}>Contactanos</h3>
            </Link>
          </div>
      </div>
    </section>
  );
};
