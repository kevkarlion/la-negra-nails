"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ButtonLink } from "@/components/shared/Buttons/Button";
const images = [
  {
    src: "/images/carrusel/image1.webp",
    leftDetail: "Detalle izquierdo 1",
    rightDetail: "Detalle derecho 1",
  },
  {
    src: "/images/carrusel/image2.webp",
    leftDetail: "Detalle izquierdo 2",
    rightDetail: "Detalle derecho 2",
  },
  {
    src: "/images/carrusel/image3.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
];


export const Creaciones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rotation, setRotation] = useState<number[]>(
    Array(images.length).fill(0)
  );

  useEffect(() => {
    const checkImageOrientation = async () => {
      const newRotation = await Promise.all(
        images.map(async (image) => {
          const img = document.createElement("img"); // Crea un elemento de imagen HTML
          img.src = image.src; // Asigna la fuente
          return new Promise<number>((resolve) => {
            img.onload = () => {
              resolve(img.height > img.width ? 90 : 0); // Si es vertical, rota 90°
            };
          });
        })
      );
      setRotation(newRotation);
    };

    checkImageOrientation();
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="p-6 bg-gradient-to-br from-secondary-brightPink to-secondary-hotPink relative text-white"
      id="creaciones"
    >
      <div className="absolute inset-0 bg-[url('/images/marble-texture.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-screen-lg mx-auto text-center px-4 flex flex-col items-center">
        <h1
          className={`font-title font-bold text-black text-6xl sm:text-5xl lg:text-[5rem]`}
        >
          Creaciones
        </h1>
        <p className="mt-2 w-full sm:w-4/6 text-black font-light text-lg sm:text-xl">
          Cada diseño de uñas es una expresión única de estilo y personalidad.
          Usamos técnicas innovadoras y productos de alta calidad para ofrecerte
          arte y precisión.
        </p>
      </div>

      <div className="flex items-center justify-center mt-2 p-2 md:m-8">
        <div className="relative w-full max-w-6xl overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="min-w-full h-[400px] md:h-[700px] flex items-center justify-center bg-black"
                
              >
                <Image
                  src={image.src}
                  alt={`Imagen ${index + 1}`}
                  width={800}
                  height={600}
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                  style={{
                    transform: `rotate(${rotation[index]}deg)`, // Rotación dinámica
                  }}
                />
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-quaternary-red/80 hover:bg-quaternary-darkPink/90 text-white p-3 rounded-full"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-quaternary-red/80 hover:bg-quaternary-darkPink/90 text-white p-3 rounded-full"
          >
            ❯
          </button>
        </div>
      </div>

      <div className="hidden md:flex md:justify-center w-full mx-auto mt-14">
        <Link
          href="https://wa.me/5492984207525"
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-white p-6 w-1/2 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
        >
          <h3 className=" md:text-[27px] lg:text-3xl font-title  font-semibold text-black">
            ¡Reservá tu cita!
          </h3>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-8 mb-8 md:hidden">
        <ButtonLink
          text="¡Reservá tu cita!"
          href="https://wa.me/5492984207525"
          borderColor="border-[#ff1a84]"
          textColor="text-black"
        />
      </div>
    </section>
  );
};
