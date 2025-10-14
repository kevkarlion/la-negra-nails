"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/Buttons"

interface Servicio {
  title: string;
  description: string;
  description2?: string;
  description3?: string,
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

 const Servicios = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

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
    <section className="px-6 pt-6 pb-6 md:pb-16 bg-gradient-to-br from-rose-300 via-pink-300 to-rose-400" id="servicios">
      <div className="max-w-screen-lg mx-auto md:pt-28 lg:pt-32">
        {/* Sección de Introducción */}
        <div className="text-center mb-16">
          <h1 className="font-title mb-4 font-bold text-gray-800 text-4xl sm:text-5xl md:text-6xl">
            Descubre Nuestros Servicios
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl font-sans text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Cada uno de nuestros servicios está diseñado para ofrecerte la mejor
            experiencia en cuidado y belleza. Elige el que mejor se adapte a tus
            necesidades y déjanos consentirte.
          </p>
        </div>

        {/* Cards con nuevo diseño elegante */}
        <div className="grid grid-cols-1 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 overflow-hidden 
                          ${!isMobile ? 'transform hover:scale-[1.02] hover:shadow-2xl transition-all duration-300' : ''} 
                          flex flex-col md:flex-row group`}
            >
              {/* Imagen con overlay elegante */}
              <div className="relative min-h-[17.68rem] h-auto min-w-[18.75rem] md:w-2/5 overflow-hidden">
                <Image
                  src={servicio.image}
                  alt={servicio.title}
                  fill
                  style={{objectFit:'cover'}}
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Contenido con diseño mejorado */}
              <div className="p-8 flex flex-col justify-center flex-1">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-8 bg-gradient-to-b from-rose-500 to-pink-600 rounded-full mr-4"></div>
                  <h2 className="text-2xl font-sans font-bold text-gray-800">
                    {servicio.title}
                  </h2>
                </div>
                
                <p className="text-gray-700 text-base font-sans leading-relaxed mb-4">
                  {servicio.description}
                </p>
                
                {!isMobile && servicio.description2 && (
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm font-sans leading-relaxed">
                      {servicio.description2}
                    </p>
                    {servicio.description3 && (
                      <p className="text-gray-600 text-sm font-sans leading-relaxed italic">
                        {servicio.description3}
                      </p>
                    )}
                  </div>
                )}
                
                {isMobile && expandedCards.includes(index) && servicio.description2 && (
                  <div className="space-y-3">
                    <p className="text-gray-600 text-sm font-sans leading-relaxed">
                      {servicio.description2}
                    </p>
                    {servicio.description3 && (
                      <p className="text-gray-600 text-sm font-sans leading-relaxed italic">
                        {servicio.description3}
                      </p>
                    )}
                  </div>
                )}
                
                {isMobile && servicio.description2 && (
                  <button
                    className="mt-4 font-sans text-rose-600 hover:text-rose-700 font-medium text-sm transition-colors duration-300 flex items-center"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedCards.includes(index) ? "Ver menos" : "Ver más"}
                    <svg 
                      className={`w-4 h-4 ml-2 transition-transform duration-300 ${expandedCards.includes(index) ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Preguntas Frecuentes con nuevo diseño */}
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-gray-800 mb-4">
              Preguntas Frecuentes
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center mt-1 mr-4">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-sans font-semibold text-gray-800 mb-3">
                      {faq.question}
                    </h3>
                    <p className="text-gray-700 font-sans leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
       
        {/* Botones con nuevo diseño */}
        <div className="flex flex-col justify-center items-center mt-12 mb-8 md:hidden">
          <div className="transform hover:scale-105 transition-all duration-300">
            <ButtonLink
              text="Dónde encontrarnos"
              href="#footer"
              textColor="text-white"
              bgColor="bg-gradient-to-r from-rose-500 to-pink-600"
            />
          </div>
        </div>

        <div className="hidden md:flex justify-center mt-16">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 transform hover:scale-105 transition-all duration-300">
            <Link
              href="#footer"
              className="text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text hover:from-rose-600 hover:to-pink-700 transition-all duration-300 px-8 py-4 block text-center"
            >
              Dónde Encontrarnos ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;