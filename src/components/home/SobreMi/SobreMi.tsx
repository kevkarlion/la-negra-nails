// components/Section.tsx
"use client";
import React from "react";
import { Dancing_Script } from "next/font/google";
import Image from "next/image";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface SectionProps {
  title: string;
  subtitle: string;
  imageUrl: string; // URL de la imagen
  children: React.ReactNode; // Para el botón u otros componentes
}

export const SobreMi: React.FC<SectionProps> = ({
  title,
  subtitle,
  imageUrl,
  children,
}) => {
  return (
    <section
      className="px-4 py-6 md:px-8 md:py-10 lg:py-16 bg-[#f70072] h-auto bg-cover"
      style={{ backgroundImage: "url(/bg/bg-cursos.svg)" }}
    >
      <div
        className={`${dancingScript.className} max-w-screen-lg mx-auto text-center mt-9 flex flex-col items-center`}
      >
        {/* Título principal */}
        <h1 className="font-bold text-white md:text-3xl lg:text-4xl text-title-mobile-md">
          {title}
        </h1>

        {/* Subtítulo */}
        <p className="md:text-base lg:text-lg w-4/6 mt-4 font-subtitle text-subtitle-mobile-md font-medium text-white">
          {subtitle}
        </p>

        {/* Imagen */}
        <div className="my-6 w-full max-w-md overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt="Imagen de la sección"
            width={600}
            height={400}
            className="object-cover w-full h-auto"
          />
        </div>

        {/* Espacio para el botón */}
        <div className="flex justify-center mt-8 mb-14">{children}</div>
      </div>
    </section>
  );
};
