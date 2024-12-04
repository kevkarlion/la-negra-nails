"use client";
import React from "react";
import Image from "next/image";

interface Servicio {
  title: string;
  description: string;
  image: string;
}

const servicios: Servicio[] = [
  {
    title: "Manicura tradicional",
    description:
      "Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante.",
    image: "/images/carrusel/image6.webp",
  },
  // {
  //   title: "Baños de parafina",
  //   description:
  //     "Un tratamiento que hidrata y suaviza la piel de manos y pies mediante la inmersión en parafina caliente, proporcionando alivio y bienestar.",
  //   image: "/images/banos-parafina.jpg",
  // },
  {
    title: "Pedicura Spa",
    description:
      "Un tratamiento de lujo que cuida y rejuvenece los pies, combinando exfoliación, hidratación y masaje, dejando la piel suave y las uñas impecables.",
    image: "/images/carrusel/pedicura-spa.webp",
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
    image: "/images/carrusel/soft-gel.webp",
  },
  {
    title: "Kapping gel",
    description:
      "Técnica que cubre y protege las uñas naturales con una capa de gel, acrílico o polygel, sin extender su longitud.",
    image: "/images/carrusel/image9.webp",
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

const DetalleServicios = () => {
  return (
    <section className="px-6 pt-10 pb-24 bg-secondary-mediumPink">
      <div className="max-w-screen-lg mx-auto pt-20 md:pt-28 lg:pt-32">
        {/* Sección de Introducción */}
        <h1 className="font-title mb-2 text-center font-bold text-black text-[3.75rem] sm:text-[3rem] md:text-[4rem]">
          Descubre Nuestros Servicios
        </h1>
        <p className="text-center text-lg md:text-xl font-sans text-black mb-9">
          Cada uno de nuestros servicios está diseñado para ofrecerte la mejor
          experiencia en cuidado y belleza. Elige el que mejor se adapte a tus
          necesidades y déjanos consentirte.
        </p>

        {/* Cards (Verticales y Modernas) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform"
            >
              {/* Imagen */}
              <Image
                src={servicio.image}
                alt={servicio.title}
                width={400}
                height={500}
                className="w-full h-[300px] object-cover"
              />
              {/* Contenido */}
              <div className="p-6">
                <h2 className="text-xl font-sans font-bold text-gray-900 mb-4">
                  {servicio.title}
                </h2>
                <p className="text-gray-700 text-sm font-sans">{servicio.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Preguntas Frecuentes */}
        <div className="mt-16">
          <h2 className="text-3xl font-sans font-bold text-center text-black mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-sans font-semibold text-secondary-hotPink mb-2">
                  {faq.question}
                </h3>
                <p className="text-black font-sans">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalleServicios;
