"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/Buttons";

interface Servicio {
  title: string;
  description: string;
  description2?: string;
  description3?: string;
  image: string;
}

const servicios: Servicio[] = [
  {
    title: "Manicura tradicional",
    description:
      "Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante.",
    image: "/images/carrusel/image6.webp",
  },
  {
    title: "Pedicura Spa",
    description:
      "La Pedicura Caribeña es una experiencia única que combina cuidado profesional con la frescura y los aromas del Caribe. Este tratamiento está diseñado para embellecer y revitalizar tus pies, priorizando la salud de la piel y las uñas, mientras disfrutas de productos inspirados en ingredientes naturales como coco y aceites naturales.",
    description2:
      "Con un enfoque en la relajación y el bienestar, este servicio incluye exfoliación, hidratación profunda y técnicas avanzadas de pedicura, todo realizado con productos de alta calidad que nutren y reparan. Ideal para quienes desean lucir pies impecables y sentir la frescura del Caribe en cada detalle.",
    description3:
      "Déjate llevar por esta experiencia tropical y dale a tus pies el cuidado que merecen.",
    image: "/images/carrusel/image15.webp",
  },
  {
    title: "Uñas esculpidas",
    description:
      "Un servicio de manicura que utiliza técnicas avanzadas para crear uñas de acrílico o gel, permitiendo una forma y diseño personalizados que ofrecen durabilidad y estilo.",
    image: "/images/carrusel/image8.webp",
  },
  {
    title: "SOFT gel",
    description:
      "Un tratamiento de uñas que utiliza un gel ligero y flexible, ideal para lograr un acabado natural y duradero.",
    image: "/images/carrusel/image17.webp",
  },
  {
    title: "Kapping gel",
    description:
      "Técnica que cubre y protege las uñas naturales con una capa de gel, acrílico o polygel, sin extender su longitud.",
    image: "/images/carrusel/image9-kapping.webp",
  },
];

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "¿Con qué frecuencia debo hacerme una manicura?",
    answer:
      "Recomendamos una manicura cada 2-3 semanas para mantener tus uñas y manos en perfecto estado.",
  },
  {
    question: "¿Los baños de parafina son adecuados para todo tipo de piel?",
    answer:
      "Sí, los baños de parafina son ideales para hidratar piel seca, aunque no son recomendables si tienes heridas abiertas o infecciones.",
  },
  {
    question: "¿Cuánto duran las uñas esculpidas?",
    answer:
      "Con el cuidado adecuado, las uñas esculpidas pueden durar de 3 a 4 semanas antes de requerir un retoque.",
  },
  {
    question: "¿Qué diferencia hay entre Soft Gel y Kapping Gel?",
    answer:
      "El Soft Gel es más flexible y natural, mientras que el Kapping Gel refuerza las uñas sin alargar su longitud.",
  },
];

export const Servicios = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      className="px-6 pt-6 py-16 pb-6 md:pb-16 bg-secondary"
      id="servicios"
    >
      <div className="max-w-screen-lg mx-auto lg:pt-12  flex flex-col justify-center items-center">
        {/* Sección de Introducción - Estilo similar */}
        <h1 className="font-title mb-8 mt-16 text-center font-bold text-black text-5xl sm:text-[3rem] md:text-[4rem]">
          Descubre Nuestros Servicios
        </h1>
        <p className="text-center text-base lg:text-xl lg:tracking-wide tracking-wider font-sans text-black mb-9 lg:w-4/6">
          Cada uno de nuestros servicios está diseñado para ofrecerte la mejor
          experiencia en cuidado y belleza. Elige el que mejor se adapte a tus
          necesidades y déjanos consentirte.
        </p>

        {/* Cards - Estilo similar al original */}
        <div className="grid grid-cols-1 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`bg-white min-h-[18.75rem] shadow-lg rounded-lg overflow-hidden 
                          ${
                            !isMobile
                              ? "transform hover:scale-105 transition-transform"
                              : ""
                          } 
                          flex flex-col md:flex-row`}
            >
              {/* Imagen */}
              <div className="relative min-h-[17.68rem] h-auto min-w-[18.75rem] md:w-2/5">
                <Image
                  src={servicio.image}
                  alt={servicio.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="w-full"
                />
              </div>

              {/* Contenido */}
              <div className="p-6  flex flex-col justify-center flex-1">
                <h2 className="text-2xl text-center lg:text-left font-sans font-bold text-gray-800 mb-4 border-b-2 border-tertiary">
                  {servicio.title}
                </h2>
                <p className="text-gray-700 text-center lg:text-left text-sm lg:text-base lg:tracking-wide tracking-wider font-sans mb-4">
                  {servicio.description}
                </p>

                {!isMobile && servicio.description2 && (
                  <div className="space-y-3">
                    <p className="text-gray-700 text-center lg:text-left text-sm lg:text-base lg:tracking-wide tracking-wider font-sans">
                      {servicio.description2}
                    </p>
                    {servicio.description3 && (
                      <p className="text-gray-700 text-center lg:text-left text-sm lg:text-base lg:tracking-wide tracking-wider font-sans italic">
                        {servicio.description3}
                      </p>
                    )}
                  </div>
                )}

                {isMobile &&
                  expandedCards.includes(index) &&
                  servicio.description2 && (
                    <div className="space-y-3">
                      <p className="text-gray-700 text-center lg:text-left text-sm lg:text-xl lg:tracking-wide tracking-wider font-sans">
                        {servicio.description2}
                      </p>
                      {servicio.description3 && (
                        <p className="text-gray-700 text-center lg:text-left text-sm lg:text-xl lg:tracking-wide tracking-wider font-sans italic">
                          {servicio.description3}
                        </p>
                      )}
                    </div>
                  )}

                {isMobile && servicio.description2 && (
                  <button
                    className="mt-4 font-sans text-secondary-hotPink underline text-sm"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedCards.includes(index) ? "Ver menos" : "Ver más"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Preguntas Frecuentes - Acordeón con Transición */}
        <div className="mt-16">
          <h2 className="text-3xl font-sans mt-24 font-bold text-center text-secondary-hotPink mb-8">
            FAQ
          </h2>
          <div className="space-y-4 max-w-4xl mx-auto ">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-red-50	 rounded-xl shadow-xl  border-t border-r border-secondary-hotPink overflow-hidden"
              >
                <button
                  className="w-full bg-red-200 px-6 py-5 text-left flex justify-between items-center  transition-colors duration-200 shadow-md"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="text-xl font-sans font-semibold text-secondary-hotPink pr-4 tracking-wider leading-relaxed">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-secondary-hotPink flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    openIndex === index
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-5 pt-4">
                    <p className="text-black text-base lg:text-lg font-sans  lg:tracking-wide tracking-wider leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Botones - Estilo similar */}
        <div className="flex flex-col justify-center items-center mt-8 mb-8 md:hidden">
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
              className={`md:text-[27px] lg:text-3xl font-title font-semibold text-black`}
            >
              Dónde encontrarnos
            </h3>
          </Link>
        </div>
      </div>
    </section>
  );
};
