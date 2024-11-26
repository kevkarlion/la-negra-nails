'use client';

import React from 'react';
import { Dancing_Script } from 'next/font/google';
import Image from 'next/image';
import { HiOutlinePlusCircle } from 'react-icons/hi';

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const classDetails = [
  {
    src: '/images/classes/class1.webp',
    title: 'Diseño Avanzado',
    description: 'Perfecciona tus habilidades con técnicas modernas.',
    seoKeywords: ['curso de diseño avanzado', 'técnicas modernas', 'clases de diseño'],
  },
  {
    src: '/images/classes/class2.webp',
    title: 'Técnicas Profesionales',
    description: 'Aprende de expertos en un ambiente práctico.',
    seoKeywords: ['técnicas profesionales', 'curso práctico', 'aprender de expertos'],
  },
  {
    src: '/images/classes/class3.webp',
    title: 'Conceptos Básicos',
    description: 'Comienza desde cero con nuestras guías paso a paso.',
    seoKeywords: ['conceptos básicos', 'cursos para principiantes', 'guías paso a paso'],
  },
];

 const MiraNuestrasClases = () => {
  return (
    <main className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen text-gray-800">
      <section className="px-4 py-16 md:px-8 md:py-24 lg:py-24">
        {/* Encabezado */}
        <div className={`${dancingScript.className} text-center mt-9`}>
          <h1 className="font-bold text-gray-900 text-[2.25rem] sm:text-[3rem] md:text-[4rem]">
            Mira nuestras clases
          </h1>
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl text-gray-600 font-sans mt-2">
            Descubre cómo nuestras clases transforman pasiones en habilidades
            profesionales. Aprende con expertos y prepárate para destacar.
          </p>
        </div>

        {/* Información y tarjetas */}
        <div className="grid gap-6 mt-12 md:grid-cols-3">
          {classDetails.map((classItem, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white"
            >
              <Image
                src={classItem.src}
                alt={`${classItem.title} - ${classItem.seoKeywords.join(', ')}`}
                width={400}
                height={300}
                className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent group-hover:from-gray-900/90 transition-colors duration-300"></div>
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h2 className="text-lg font-semibold">{classItem.title}</h2>
                <p className="text-sm mt-2">{classItem.description}</p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300">
                  <HiOutlinePlusCircle size={24} />
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Llamado a la acción */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            No esperes más para alcanzar tus metas
          </h3>
          <p className="text-gray-700 text-base mb-6">
            Inscríbete hoy y da el primer paso hacia tu éxito. Nuestros cursos están diseñados para todas las etapas, desde principiantes hasta profesionales.
          </p>
          <a
            href="tel:+5492984207525"
            className="inline-block bg-blue-500 text-white text-lg font-medium py-3 px-8 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          >
            ¡Contáctanos ahora!
          </a>
        </div>
      </section>
    </main>
  );
};

export default MiraNuestrasClases