"use client";

import Image from "next/image";
import { FC } from "react";


export const SobreMi: FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center p-6 bg-gradient-to-r from-secondary-brightPink via-secondary-deepPink to-secondary-hotPink "
    >
      <div className="max-w-screen-xl ">
        <div className="text-center mb-6 w-full flex flex-col items-center">
          <h2 className="font-title mt-9 text-[3.75rem] sm:text-[3rem] lg:text-[4rem] font-extrabold text-white">
            Sobre Maridania García
          </h2>
          <p className="w-full font-sans sm:w-4/6 text-center text-white font-light  text-lg lg:text-xl mt-2 leading-relaxed">
            Una apasionada profesional del arte de las uñas, siempre buscando
            nuevas formas de expresarme a través de cada diseño.
          </p>
        </div>

        <div className="xl:flex xl:justify-between mt-10 xl:items-start gap-12">
          {/* Imagen de Maridania */}
          <div className="xl:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/images/sobre-mi.webp"
              alt="Maridania García"
              width={500}
              height={500}
              className="w-full h-auto object-cover border-4 border-white shadow-lg"
            />
          </div>

          {/* Información sobre Maridania */}
          <div className="xl:w-1/2 flex flex-col justify-center">
            <h3 className="text-center lg:text-left font-semibold text-white text-[2.5rem] font-title sm:text-[3rem] ">
              Mi Historia
            </h3>
            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light leading-relaxed mt-4">
              Mi nombre es Maridania García, soy nacida en República Dominicana
              pero vivo en Argentina desde 2010.
            </p>
            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light leading-relaxed mt-4">
              Mi pasión por las uñas empezó cuando tenía 14 años, estudié
              pedicura, manicura y uñas esculpidas en 2006. En 2010 decidí
              emigrar a Argentina, lugar donde traje mi pasión por las uñas.
            </p>
            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light leading-relaxed mt-4">
              Amo embellecer las manos y los pies, siempre enfocándome en la
              salud ungueal. Me capacito constantemente para brindar un buen
              servicio, aprendiendo de grandes mentores y conociendo nuevos
              químicos y sus componentes.
            </p>
            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light leading-relaxed mt-4">
              Actualmente curso la carrera de técnica en podología. He
              finalizado talleres de auxiliar en podología, infecciones
              micóticas, congresos podológicos y de bioseguridad. Participé en
              Expo Belleza ganando el tercer premio en uñas esculpidas.
            </p>
            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light leading-relaxed mt-4">
              Hace menos de 5 años decidí dar capacitaciones para compartir
              conocimientos enfocados en la salud de la uña y químicos
              saludables. Formé un grupo de mujeres emprendedoras para compartir
              conocimientos, impulsar el crecimiento y crear una red de apoyo
              mutuo.
            </p>
            <p className="text-center lg:text-left font-sans text-lg lg:text-xl text-white font-light leading-relaxed mt-4">
              Soy mamá de tres hijos que me acompañan en mi pasión por las uñas,
              y estoy en pareja con un extraordinario hombre argentino que me
              impulsa a crecer personal y profesionalmente.
            </p>

            {/* CTA mobile */}
            <div className="mt-8 flex justify-center md:hidden">
              <a
                href="https://wa.me/5492984207525"
                target="_blank"
                rel="noopener noreferrer"
                className="md:hidden w-[19rem] h-7 relative flex items-center justify-center px-6 py-2 text-md font-semibold transition duration-300 ease-in-out rounded-lg shadow-lg overflow-hidden group fluid-bg text-center mb-4"
              >
                <h3 className="text-xl md:text-[27px] lg:text-3xl font-title  font-semibold text-black">
                  ¡Hablemos sobre tu diseño!
                </h3>
              </a>
            </div>

         
            {/* CTA desktop */}
            <div className="hidden md:flex md:justify-center w-full mb-8 mx-auto mt-14">
              <a
                href="https://wa.me/5492984207525"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 w-1/2 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
              >
                <h3 className="text-xl md:text-[27px] lg:text-3xl font-title text-center  font-semibold text-black">
                  ¡Hablemos sobre tu diseño!
                </h3>
              </a>
            </div>
          </div>
        </div>
        {/* href="tel:+5492984207525" */}
        {/* Sección de Testimonios */}
        <div className="mt-16 mb-16 flex flex-col items-center">
          <h3 className="text-[2.25rem] sm:text-[3rem] lg:text-[4rem] font-title text-white text-center mb-6">
            Lo que dicen mis clientes
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="font-sans w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="text-lg italic mb-4">
                ¡Maridania siempre hace magia con mis uñas! Cada diseño refleja
                exactamente lo que quiero, ¡es una verdadera artista!
              </p>
              <p className="font-semibold">Lucía M.</p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="font-sans text-lg italic mb-4">
                No solo me encanta el diseño, sino que su atención al detalle y
                su dedicación me hicieron sentir muy cómoda. ¡Totalmente
                recomendada!
              </p>
              <p className="font-semibold">Karina S.</p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="font-sans text-lg italic mb-4">
                El mejor lugar para hacerme las uñas. Cada visita es una
                experiencia única, siempre salgo feliz con los resultados.
              </p>
              <p className="font-semibold">Sofía L.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
