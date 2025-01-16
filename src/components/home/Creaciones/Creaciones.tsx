"use client";

import React from "react";
import { Carousel } from "react-bootstrap";
import Image from "next/image";

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
  {
    src: "/images/carrusel/image4.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image5.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image6.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image7.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image8.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image9.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image10.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image11.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image14.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image15.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image16.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image17.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  {
    src: "/images/carrusel/image9-kapping.webp",
    leftDetail: "Detalle izquierdo 3",
    rightDetail: "Detalle derecho 3",
  },
  // Añadir más imágenes según sea necesario
];

export const Creaciones = () => {
  return (
    <section
      className="p-6 bg-gradient-to-br from-secondary-brightPink to-secondary-hotPink relative text-white"
      id="creaciones"
    >
      <div className="absolute inset-0 bg-[url('/images/marble-texture.png')] opacity-10 pointer-events-none"></div>

      <div className="max-w-screen-lg pt-9 mx-auto text-center flex flex-col items-center">
        <h1
          className={`font-title font-bold text-black text-6xl sm:text-5xl lg:text-[5rem]`}
        >
          Creaciones
        </h1>
        <p className="mt-2 mb-6 font-sans w-full sm:w-4/6 text-black font-light text-lg sm:text-xl">
          Cada diseño de uñas es una expresión única de estilo y personalidad.
          Usamos técnicas innovadoras y productos de alta calidad para ofrecerte
          arte y precisión.
        </p>
      </div>

      <div className="flex items-center justify-center mt-2 p-2 md:m-8">
        <div className="w-full max-w-6xl">
          <Carousel>
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <div className="flex justify-center items-center h-[600px] md:h-[800px] bg-black">
                  <Image
                    src={image.src}
                    alt={`Imagen ${index + 1}`}
                    width={1200}
                    height={700}
                    className="rounded-lg shadow-lg"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    quality={85}
                    priority
                  />
                </div>
              
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="hidden md:flex md:justify-center w-full mb-8 mx-auto mt-14">
        <a
          href="https://wa.me/5492984207525"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 w-1/2 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
        >
          <h3 className="text-xl md:text-[27px] lg:text-3xl font-title  font-semibold text-black">
            ¡Reservá tu cita!
          </h3>
        </a>
      </div>

      <div className="flex flex-col justify-center items-center mt-8 mb-8 md:hidden">
        <a
          href="https://wa.me/5492984207525"
          target="_blank"
          rel="noopener noreferrer"
          className="w-[19rem] h-7 relative flex items-center justify-center px-6 py-2 text-md font-semibold transition duration-300 ease-in-out rounded-lg shadow-lg overflow-hidden group fluid-bg text-center mb-4"
        >
          <h3 className="text-xl md:text-[27px] lg:text-3xl font-title  font-semibold text-black">
            ¡Reservá tu cita!
          </h3>
        </a>
      </div>
    </section>
  );
};
