"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/Buttons";

interface SectionProps {
  title: string;
  subtitle: string;
  header: string;
  children: React.ReactNode;
}

const imagePaths = [
  "/images/cursos/image1.webp",
  "/images/cursos/image2.webp",
  "/images/cursos/image3.webp",
  "/images/cursos/image4.webp",
  "/images/cursos/image5.webp",
  "/images/cursos/image6.webp",
];

export const Cursos: React.FC<SectionProps> = ({
  title,
  subtitle,
  header,
  children,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Detecta que estamos en el cliente antes de renderizar animaciones
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % imagePaths.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isClient]);

  // 👇 Evita el error de hidratación (no renderiza hasta estar en cliente)
  if (!isClient) return null;

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden">
      {/* Fondo decorativo */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            radial-gradient(circle 600px at 0% 200px, #fce7f3, transparent),
            radial-gradient(circle 600px at 100% 200px, #fce7f3, transparent)
          `,
        }}
      />

      <section
        className="relative z-10 p-6 md:px-8 md:py-10 lg:py-16 h-auto"
        id="cursos"
      >
        <div className="font-title mx-auto mt-16 text-center flex flex-col md:flex-row items-center md:items-start">
          {/* MOBILE */}
          <div className="md:hidden flex flex-col items-center justify-center">
            <h1 className="font-title text-5xl mb-8 font-bold text-black sm:text-[3rem]">
              {title}
            </h1>
            <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider w-full mb-8 sm:w-4/6 font-sans text-black font-light">
              {subtitle}
            </p>

            {/* Imágenes crossfade */}
            <div className="flex justify-center mb-8 mt-8 w-full">
              <div className="relative w-[300px] h-[400px] overflow-hidden rounded-lg shadow-2xl">
                {imagePaths.map((src, index) => (
                  <Image
                    key={index}
                    src={src}
                    alt="Imagen de la sección"
                    fill
                    sizes="(max-width: 768px) 100vw"
                    style={{ objectFit: "cover" }}
                    {...(index === 0
                      ? { priority: true }
                      : { loading: "lazy" })}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentImageIndex
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>

            <ButtonLink
              text="Mirá nuestras clases"
              href="/cursos"
              textColor="text-black"
            />
          </div>

          {/* HEADER MOBILE */}
          <h2 className="text-[2.25rem] font-title font-semibold text-black md:hidden md:text-xl lg:text-2xl mt-20 mb-3">
            {header}
          </h2>
          <div className="flex justify-center mb-8 md:hidden">{children}</div>

          {/* DESKTOP */}
          <div className="hidden md:flex w-full justify-around items-center md:px-8 lg:px-16">
            {/* Contenedor imágenes crossfade */}
            <div className="my-6 relative w-[390px] h-[600px] xl:w-[455px] xl:h-[700px] overflow-hidden rounded-lg shadow-2xl">
              {imagePaths.map((src, index) => (
                <Image
                  key={index}
                  src={src}
                  alt="Imagen de la sección"
                  fill
                  sizes="(max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: "cover" }}
                  {...(index === 0
                    ? { priority: true }
                    : { loading: "lazy" })}
                  className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                    index === currentImageIndex
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Texto y CTA */}
            <div className="flex flex-col items-start justify-start w-1/2 z-20">
              <div className="flex flex-col items-start justify-start w-full">
                <h1 className="text-start font-bold text-gray-800 text-[3.5rem] sm:text-[4rem] lg:text-[4rem]">
                  {title}
                </h1>
                <p className="tracking-wider lg:tracking-wide md:text-base md:text-left md:flex lg:text-lg mt-4 font-sans text-subtitle-mobile-md font-medium text-black">
                  Transforma tu pasión en una profesión. Aprende a proteger la
                  salud de las uñas mientras dominas técnicas avanzadas y usas
                  materiales de alta calidad. Nuestros cursos combinan fundamentos
                  sólidos con las últimas tendencias, para que desarrolles
                  confianza, creatividad y destaque en el mundo de la manicura
                  profesional.
                </p>
                <div className="font-title bg-white lg:w-[21.37rem] p-6 rounded-lg shadow-lg flex items-center self-center mt-12 justify-center fluid-bg z-20">
                  <Link
                    href="/cursos"
                    className="md:text-[27px] lg:text-3xl font-semibold text-black"
                  >
                    Mirá nuestras clases
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN MODALIDADES */}
        <div className="hidden md:flex justify-center flex-col mt-12 relative z-20">
          <h3 className="hidden md:flex md:self-center md:mt-12 md:mb-6 text-black text-[2rem] font-title sm:text-[3rem]">
            Modalidades
          </h3>
          <div className="hidden md:flex flex-wrap gap-4 w-3/4 max-w-screen-lg mx-auto">
            <div className="flex-1 min-w-[calc(50%-1rem)] font-title bg-white p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg z-20">
              <Link
                href="/cursos"
                className="md:text-[27px] lg:text-3xl font-semibold text-black"
              >
                Presencial
              </Link>
            </div>

            <div
              className="flex-1 min-w-[calc(50%-1rem)] font-title bg-white p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg relative z-20"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <div className="md:text-[27px] cursor-pointer lg:text-3xl font-semibold text-black">
                Online (Próximamente)
              </div>
              {showTooltip && (
                <div className="absolute top-full mt-2 font-sans bg-white text-secondary-brightPink text-sm p-2 rounded shadow-lg z-30">
                  Estamos trabajando para ofrecerte una experiencia de aprendizaje desde casa
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
