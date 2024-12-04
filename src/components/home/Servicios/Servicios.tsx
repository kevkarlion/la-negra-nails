import React from "react";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { ButtonLink } from "@/components/shared/Buttons";
import Link from "next/link";

interface SectionProps {
  title: string;
  subtitle: string;
}

export const Servicios: React.FC<SectionProps> = ({ title, subtitle }) => {
  return (
    <section
      className="px-4 py-6 md:px-8 md:py-10 lg:pt-16 lg:pb-16 h-auto bg-cover bg-secondary-pinkWhite"
      style={{ backgroundImage: "url(/bg/bg-section.svg)" }}
      id="servicios"
    >
      <div className="max-w-screen-lg mx-auto text-center mt-9 flex flex-col items-center">
        {/* Título principal */}
        <h1
          className={`font-title font-bold text-black text-[3.75rem] sm:text-[3rem] lg:text-[5rem] mb-2`}
        >
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="w-full sm:w-4/6 font-sans text-black font-light text-lg sm:text-xl md:text-lg lg:text-xl">
          {subtitle}
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 justify-items-center gap-6 mt-8 w-full sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Manicura tradicional",
              description:
                "Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante.",
            },
            {
              title: "Baños de parafina",
              description:
                "Un tratamiento que hidrata y suaviza la piel de manos y pies mediante la inmersión en parafina caliente, proporcionando alivio y bienestar.",
            },
            {
              title: "Pedicura Spa",
              description:
                "Un tratamiento de lujo que cuida y rejuvenece los pies, combinando exfoliación, hidratación y masaje, dejando la piel suave y las uñas impecables.",
            },
            {
              title: "Uñas esculpidas",
              description:
                "Un servicio de manicura que utiliza técnicas avanzadas para crear uñas de acrílico o gel, permitiendo una forma y diseño personalizados que ofrecen durabilidad y estilo.",
            },
            {
              title: "SOFT gel",
              description:
                "Un tratamiento de uñas que utiliza un gel ligero y flexible, ideal para lograr un acabado natural y duradero.",
            },
            {
              title: "Kapping gel",
              description:
                "Técnica que cubre y protege las uñas naturales con una capa de gel, acrílico o polygel, sin extender su longitud.",
            },
          ].map((service, index) => (
            <ServiceCard
              key={index}
              propertyClassName={
                // Aseguramos que las animaciones solo se apliquen en dispositivos >= "md" (tabletas y desktop)
                `shadow-lg transform transition-all duration-300 ease-in-out ${
                  // Solo aplicar las animaciones y transiciones en pantallas grandes
                  "md:hover:scale-105 md:hover:shadow-2xl"
                }`
              }
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        {/* Botones */}
        <div className="flex flex-col justify-center items-center mt-8 mb-8 md:hidden">
          <ButtonLink
            text="Conocé más"
            href="/servicios"
            textColor="text-black"
          />
          <ButtonLink
            text="Dónde encontrarnos"
            href="#footer"
            textColor="text-black"
          />
        </div>

        <div className="hidden md:flex justify-center gap-4 w-3/4 mx-auto md:grid-cols-2 mt-14">
          
          <Link
            href="#footer"
            
            className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
          >
            <h3
              className={`md:text-[27px] lg:text-3xl font-title  font-semibold text-black`}
            >
              Dónde encontrarnos
            </h3>
          </Link>
          <Link
            href="/servicios"
            className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
          >
            <h3
              className={`md:text-[27px] lg:text-3xl font-title  font-semibold text-black`}
            >
              Conocé más
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};