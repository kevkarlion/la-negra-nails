"use client";
import React from "react";
import Image from "next/image";

interface Service {
  title: string;
  description: string;
  image: string;
  benefits: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

const services: Service[] = [
  {
    title: "Manicura tradicional",
    description:
      "Embellece tus manos con limado, pulido y esmaltado para un acabado elegante.",
    image: "/images/carrusel/image6.webp",
    benefits: [
      "Acabado limpio y elegante.",
      "Fortalece y protege las uñas.",
      "Variedad de colores y estilos.",
    ],
  },
  {
    title: "Baños de parafina",
    description:
      "Hidrata y suaviza la piel mediante inmersión en parafina caliente.",
    image: "/images/services/banos-parafina.jpg",
    benefits: [
      "Hidratación profunda para manos y pies.",
      "Mejora la elasticidad de la piel.",
      "Ideal para piel seca o agrietada.",
    ],
  },
  {
    title: "Pedicura Spa",
    description:
      "Cuida y rejuvenece tus pies con exfoliación, hidratación y masajes relajantes.",
    image: "/images/services/pedicura-spa.jpg",
    benefits: [
      "Elimina células muertas y suaviza la piel.",
      "Relaja los músculos de los pies.",
      "Mejora la salud de las uñas.",
    ],
  },
  {
    title: "Uñas esculpidas",
    description:
      "Técnica avanzada para crear uñas de gel o acrílico personalizadas.",
    image: "/images/carrusel/image8.webp",
    benefits: [
      "Durabilidad y resistencia superiores.",
      "Posibilidad de personalización completa.",
      "Perfectas para quienes buscan diseños únicos.",
    ],
  },
  {
    title: "Soft Gel",
    description: "Gel ligero y flexible para un acabado natural y duradero.",
    image: "/images/services/soft-gel.jpg",
    benefits: [
      "Ideal para un look natural.",
      "Fácil aplicación y remoción.",
      "Proporciona un brillo excepcional.",
    ],
  },
  {
    title: "Kapping Gel",
    description:
      "Refuerza las uñas naturales con una capa de gel, sin alargar su longitud.",
    image: "/images/carrusel/image7.webp",
    benefits: [
      "Protege las uñas naturales.",
      "Aumenta la resistencia a quiebres.",
      "Proporciona un acabado más resistente.",
    ],
  },
];

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
    question: "¿Qué diferencia hay entre Soft Gel y Capping Gel?",
    answer:
      "El Soft Gel es más flexible y natural, mientras que el Capping Gel refuerza las uñas sin alargar su longitud.",
  },
];

const DetalleServicios = () => {
  return (
    <section className="px-6 py-10 bg-gray-50">
      <div className="max-w-screen-lg mx-auto pt-20 md:pt-28 lg:pt-32">
        {/* Sección de Introducción */}
        <h1 className="font-title text-center font-bold text-black text-[2.25rem] sm:text-[3rem] md:text-[4rem]">
          Descubre Nuestros Servicios
        </h1>
        <p className="text-center text-lg text-black mb-12">
          Cada uno de nuestros servicios está diseñado para ofrecerte la mejor
          experiencia en cuidado y belleza. Elige el que mejor se adapte a tus
          necesidades y déjanos consentirte.
        </p>

        {/* Cards de Servicios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-56">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="list-disc list-inside text-gray-700 mb-4">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="mb-2">
                      {benefit}
                    </li>
                  ))}
                </ul>
                <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors duration-300">
                  Conoce Más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Preguntas Frecuentes */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {faq.question}
                </h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetalleServicios;
