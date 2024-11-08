'use client'

import Image from 'next/image';
import { FC } from 'react';

export const SobreMi: FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="font-title text-[2.25rem] sm:text-[3rem] lg:text-[4rem] font-extrabold text-white">Sobre Maridania García</h2>
          <p className="font-subtitle text-base md:text-lg lg:text-2xl  leading-relaxed mt-4">
            Una apasionada profesional del arte de las uñas, siempre buscando nuevas formas de expresarme a través de cada diseño.
          </p>
        </div>

        <div className="lg:flex lg:justify-between lg:items-center gap-12">
          {/* Imagen de Maridania */}
          <div className="lg:w-1/3 mb-8 lg:mb-0">
            <Image
              src="/images/sobre-mi.webp"
              alt="Maridania García"
              width={400}
              height={400}
              className="w-full h-full object-cover  border-4 border-white shadow-lg"
            />
          </div>

          {/* Información sobre Maridania */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl  font-semibold text-white text-[2rem] font-title sm:text-[3rem]">Mi Historia</h3>
            <p className="font-subtitle text-base md:text-lg lg:text-xl  leading-relaxed mt-4">
              Mi nombre es Maridania García, soy una profesional dedicada al arte de las uñas con más de 7 años de experiencia. 
              A lo largo de mi carrera, he logrado combinar técnicas innovadoras y tendencias de diseño para ofrecer a mis clientes una experiencia única.
            </p>

            <p className="font-subtitle text-base md:text-lg lg:text-xl  leading-relaxed mt-4">
              Me encanta jugar con colores, texturas y detalles para crear diseños que reflejan la personalidad y estilo de cada cliente. 
              Cada uno de mis trabajos es una pieza única, pensada cuidadosamente para que mis clientes se sientan especiales y satisfechos.
            </p>

            <p className="font-subtitle text-base md:text-lg lg:text-xl  leading-relaxed mt-4">
              Mi misión es ofrecer una experiencia excepcional a través de un servicio personalizado, siempre con la mejor calidad en productos y una atención al detalle inigualable.
            </p>

            {/* CTA */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-white text-pink-600 font-bold py-3 px-6 rounded-full shadow-lg hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                ¡Hablemos de tu diseño!
              </a>
            </div>
          </div>
        </div>

        {/* Sección de Testimonios */}
        <div className="mt-16">
          <h3 className="text-[2.25rem] sm:text-[3rem] lg:text-[4rem] font-title text-white text-center mb-6">
            Lo que dicen mis clientes
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="text-lg italic mb-4">¡Maridania siempre hace magia con mis uñas! Cada diseño refleja exactamente lo que quiero, ¡es una verdadera artista!</p>
              <p className="font-semibold">Lucía M.</p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="text-lg italic mb-4">No solo me encanta el diseño, sino que su atención al detalle y su dedicación me hicieron sentir muy cómoda. ¡Totalmente recomendada!</p>
              <p className="font-semibold">Karina S.</p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="text-lg italic mb-4">El mejor lugar para hacerme las uñas. Cada visita es una experiencia única, siempre salgo feliz con los resultados.</p>
              <p className="font-semibold">Sofía L.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

