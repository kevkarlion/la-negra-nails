"use client";

import Image from "next/image";
import { FC } from "react";

export const SobreMi: FC = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center p-6 bg-gradient-to-r from-secondary-brightPink via-secondary-deepPink to-secondary-hotPink "
    >
      <div className="max-w-screen-xl lg:pt-12">
        <div className="text-center  w-full flex flex-col items-center">
          <h2 className="font-title font-bold text-white text-5xl sm:text-[3rem] md:text-[4rem] mb-4 mt-16">
            Sobre Maridania García
          </h2>
          <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider w-full mb-8 sm:w-4/6 font-sans text-white font-light">
            Una apasionada profesional del arte de las uñas, siempre buscando
            nuevas formas de expresarme a través de cada diseño.
          </p>
        </div>

        <div className="xl:flex xl:justify-between  xl:items-start gap-12">
          {/* Imagen de Maridania */}
          <div className="xl:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/images/sobre-mi.webp"
              alt="Maridania García"
              width={500}
              height={500}
              className="w-full h-auto object-cover border-2 rounded-lg border-white shadow-2xl"
            />
          </div>

          {/* Información sobre Maridania */}
          <div className="xl:w-1/2 flex flex-col justify-center">
            <h3 className="text-center lg:text-left font-semibold text-white text-[2.5rem] font-title sm:text-[3rem] ">
              Mi Historia
            </h3>
            <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider mb-4 w-full  sm:w-4/6 font-sans text-white font-lig text-center lg:text-left lg:w-full">
              Mi nombre es Maridania García, soy nacida en República Dominicana
              pero vivo en Argentina desde 2011.
            </p>
            <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider mb-4 w-full  sm:w-4/6 font-sans text-white font-light text-center lg:text-left lg:w-full">
              Mi pasión por las uñas empezó cuando tenía 14 años, estudié
              pedicura, manicura y uñas esculpidas en 2006. En 2010 decidí
              emigrar a Argentina, lugar donde traje mi pasión por las uñas.
            </p>
            <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider mb-4 w-full  sm:w-4/6 font-sans text-white font-light text-center lg:text-left lg:w-full">
              Amo embellecer las manos y los pies, siempre enfocándome en la
              salud ungueal. Me capacito constantemente para brindar un buen
              servicio, aprendiendo de grandes mentores y conociendo nuevos
              químicos y sus componentes.
            </p>
            <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider mb-4 w-full  sm:w-4/6 font-sans text-white font-light text-center lg:text-left lg:w-full">
              Actualmente curso la carrera de técnica en podología. He
              finalizado talleres de auxiliar en podología, infecciones
              micóticas, congresos podológicos y de bioseguridad. Participé en
              Expo Belleza ganando el tercer premio en uñas esculpidas.
            </p>
            <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider mb-4 w-full  sm:w-4/6 font-sans text-white font-light text-center lg:text-left lg:w-full">
              Hace menos de 5 años decidí dar capacitaciones para compartir
              conocimientos enfocados en la salud de la uña y químicos
              saludables. Formé un grupo de mujeres emprendedoras para compartir
              conocimientos, impulsar el crecimiento y crear una red de apoyo
              mutuo.
            </p>
            <p className="leading-relaxed text-balance text-base lg:text-xl lg:tracking-wide tracking-wider mb-4 w-full  sm:w-4/6 font-sans text-white font-light text-center lg:text-left lg:w-full">
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
                className="md:hidden w-[18rem] h-7 flex items-center justify-center py-6 text-md font-semibold transition duration-300 ease-in-out rounded-lg shadow-lg overflow-hidden group fluid-bg text-center mb-4"
              >
                <h3 className="text-2xl font-title font-semibold text-black">
                  Hablemos sobre tu diseño
                </h3>
              </a>
            </div>
          </div>
        </div>

        {/* CTA desktop - CENTRADO DEBAJO DE TODO EL CONTENIDO */}
        <div className="hidden md:flex justify-center w-full mt-12">
          <a
            href="https://wa.me/5492984207525"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg max-w-md mx-auto"
          >
            <h3 className="text-xl md:text-[27px] lg:text-3xl font-title text-center font-semibold text-black">
              Hablemos sobre tu diseño
            </h3>
          </a>
        </div>

        {/* Sección de Testimonios */}
        <div className="mt-16 mb-16 flex flex-col items-center">
          <h3 className="font-title mb-8 mt-16 text-center font-bold text-white text-5xl sm:text-[3rem] md:text-[4rem]">
            Lo que dicen mis clientes
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="font-sans w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="text-lg italic mb-4">
              ¡Increíble servicio y atención al detalle! Mis uñas quedaron espectaculares, y la experiencia fue súper relajante. Sin duda, volveré negrita, besos...
              </p>
              <p className="font-semibold font-sans">Marcela Beatriz Álvarez</p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="font-sans text-lg italic mb-4">
              No solo me encantaron mis uñas, sino que también me llevé muchos consejos útiles para el cuidado en casa. El ambiente es muy profesional e higienico
              </p>
              <p className="font-semibold font-sans">Livia Mexi
              </p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="font-sans text-lg italic mb-4 ">
              Las capacitaciones fueron excepcionales. Aprendí técnicas modernas y prácticas de negocio que cambiaron mi enfoque profesional. ¡Altamente recomendado!
              </p>
              <p className="font-semibold font-sans">Zoe riffo
              </p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="font-sans text-lg italic mb-4">
              La mejor inversión que he hecho fue inscribirme en este curso. Aprendí todo lo necesario para comenzar mi propio emprendimiento de uñas con seguridad y calidad.
              </p>
              <p className="font-semibold font-sans">Marianela packo</p>
            </div>
            <div className="w-full sm:w-1/3 p-4 bg-white/30 backdrop-blur-lg rounded-lg shadow-lg text-white">
              <p className="font-sans text-lg italic mb-4">
              La creatividad y el profesionalismo que tienes negri es increíble . Siempre salgo feliz con diseños únicos, gracias.
              </p>
              <p className="font-semibold font-sans">Poli Ramírez</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};