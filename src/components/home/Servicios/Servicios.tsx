import React from 'react';
import { Dancing_Script } from 'next/font/google';
import { ServiceCard } from '@/components/shared/ServiceCard'
import { ButtonLink } from '@/components/shared/Button'

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

interface SectionProps {
  title: string;
  subtitle: string;
}

export const Servicios: React.FC<SectionProps> = ({ title, subtitle}) => {
  return (
    <section
      className="px-4 py-6 md:px-8 md:py-10 lg:py-16  h-auto bg-cover bg-secondary"
      style={{ backgroundImage: 'url(/bg/bg-section.svg)' }} // Cambia la URL si necesitas otro fondo
    >
      <div className={`max-w-screen-lg mx-auto text-center mt-9 flex flex-col items-center`}>
        {/* Título principal */}
        <h1 className={` ${dancingScript.className}  text-title-mobile-md font-bold text-white md:text-3xl lg:text-4xl`}>
          {title}
        </h1>
        
        {/* Subtítulo */}
        <p className="md:text-base lg:text-lg w-4/6 mt-4 font-medium text-white text-subtitle-mobile-md font-subtitle">
          {subtitle}
        </p>
        
        {/* Espacio para las cards */}
        <div className="flex flex-col w-full mt-8 justify-center items-center">
            <ServiceCard title='Manicura tradicional' description='Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante.'/>
            <ServiceCard title='Baños de parafina' description='Un tratamiento que hidrata y suaviza la piel de manos y pies mediante la inmersión en parafina caliente, proporcionando alivio y bienestar.'/>
            <ServiceCard title='Pedicura Spa' description='Un tratamiento de lujo que cuida y rejuvenece los pies, combinando exfoliación, hidratación y masaje, dejando la piel suave y las uñas impecables.'/>
            <ServiceCard title='Uñas esculpidas' description='Un servicio de manicura que utiliza técnicas avanzadas para crear uñas de acrílico o gel, permitiendo una forma y diseño personalizados que ofrecen durabilidad y estilo.'/>
            <ServiceCard title='SOFT gel' description='Un tratamiento de uñas que utiliza un gel ligero y flexible, ideal para lograr un acabado natural y duradero. Proporciona un brillo excepcional y permite una fácil aplicación y eliminación.'/>
            <ServiceCard title='Capping gel' description='Un producto que se aplica sobre las uñas para sellar y proteger diseños o esmaltes, ofreciendo un acabado brillante y duradero. Ideal para mantener la belleza de tus uñas por más tiempo.'/>
        </div>

        {/* Espacio para botones */}
        <div className="flex flex-col justify-center mt-8 mb-8">
          <ButtonLink text='Conocé más' href='#' borderColor='border-[#ff5ba4]'/>
          <ButtonLink text='Contactanos' href='#' bgColor='bg-[#ff5ba4]' border='none' textColor='text-black'/>
        </div>
      </div>
    </section>
  );
};


