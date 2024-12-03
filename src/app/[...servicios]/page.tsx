"use client";
import React from "react";

import Carrusel from '@/components/Carrusel/Carrusel'


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
        <h1 className="font-title mb-6 text-center font-bold text-black text-[2.25rem] sm:text-[3rem] md:text-[4rem]">
          Descubre Nuestros Servicios
        </h1>
        <p className="text-center text-lg text-black mb-6">
          Cada uno de nuestros servicios está diseñado para ofrecerte la mejor
          experiencia en cuidado y belleza. Elige el que mejor se adapte a tus
          necesidades y déjanos consentirte.
        </p>

        
        <Carrusel />


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
