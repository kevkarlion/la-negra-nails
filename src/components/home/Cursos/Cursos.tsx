// components/Section.tsx
import React from 'react'
import { Dancing_Script } from 'next/font/google';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'], // Puedes elegir los pesos que necesites
});

interface SectionProps {
  title: string;
  subtitle: string;
  header: string;
  children: React.ReactNode;
}

export const Cursos: React.FC<SectionProps> = ({ title, subtitle, header, children }) => {
  return (
    <section className="px-4 py-6 md:px-8 md:py-10 lg:py-16 bg-gray-100 h-auto bg-cover"
      style={{backgroundImage:'url(/bg/bg-cursos.svg)'}}
    >
      <div className={`${dancingScript.className} max-w-screen-lg mx-auto text-center mt-9 flex flex-col items-center `}>
        {/* Título principal */}
        <h1 className=" font-bold text-gray-800 md:text-3xl lg:text-4xl text-title-mobile-md">
          {title}
        </h1>
        {/* Subtítulo */}
        <p className="  md:text-base lg:text-lg w-4/6 mt-4 font-subtitle text-subtitle-mobile-md font-medium text-black">
          {subtitle}
        </p>
        {/* Encabezado "Modalidades" */}
        <h2 className="text-lg font-semibold text-black font-subtitle md:text-xl lg:text-2xl  mt-16 mb-3">
          {header}
        </h2>
        {/* Contenedor de botones */}
        <div className="flex justify-center  mb-8">{children}</div>
      </div>
    </section>
  );
};

