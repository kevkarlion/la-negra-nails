'use client'

import Image from 'next/image';
import { FC } from 'react';
import { ButtonLink } from '@/components/shared/Buttons/Button'
import Link from 'next/link';

export const SobreMi: FC = () => {
  return (
    <section id="about" className="py-16 bg-gradient-to-r from-secondary-brightPink via-secondary-deepPink to-secondary-hotPink">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12">
        <div className="text-center mb-12 w-full flex flex-col items-center">
          <h2 className="font-title text-[2.25rem] sm:text-[3rem] lg:text-[4rem] font-extrabold text-white">Sobre Maridania García</h2>
          <p className="w-full sm:w-4/6 text-center text-white font-light  text-lg lg:text-xl mt-2 leading-relaxed">
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
            <h3 className="text-center lg:text-left font-semibold text-white text-[2.5rem] font-title sm:text-[3rem] mb-4">Mi Historia</h3>
            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light  leading-relaxed mt-4">
              Mi nombre es Maridania García, soy una profesional dedicada al arte de las uñas con más de 7 años de experiencia. 
              A lo largo de mi carrera, he logrado combinar técnicas innovadoras y tendencias de diseño para ofrecer a mis clientes una experiencia única.
            </p>

            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light  leading-relaxed mt-4">
              Me encanta jugar con colores, texturas y detalles para crear diseños que reflejan la personalidad y estilo de cada cliente. 
              Cada uno de mis trabajos es una pieza única, pensada cuidadosamente para que mis clientes se sientan especiales y satisfechos.
            </p>

            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light  leading-relaxed mt-4">
              Mi misión es ofrecer una experiencia excepcional a través de un servicio personalizado, siempre con la mejor calidad en productos y una atención al detalle inigualable.
            </p>

            {/* CTA */}
            <div className="mt-8 flex justify-center md:hidden">
              <ButtonLink text='¡Hablemos de tu diseño!' href="tel:+5492984207525" textColor='text-black'/>
            </div>
            
            {/* CTA MD */}
            <div className="hidden md:flex md:justify-center w-full mx-auto mt-14">
              <Link href="tel:+5492984207525" className="bg-white p-6 w-1/2 rounded-lg shadow-lg flex items-center justify-center fluid-bg">
                <h3 className=" md:text-[27px] lg:text-3xl font-title  font-semibold text-black">¡Hablemos sobre tu diseño!</h3>
              </Link>
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

