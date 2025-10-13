"use client";

import { Dancing_Script, Inter } from "next/font/google";
import Carrusel from "@/components/Carrusel/Carrusel";
import { ButtonLink } from "@/components/shared/Buttons";
import { HiOutlineUserGroup, HiOutlineBadgeCheck } from "react-icons/hi";
import { RiToolsLine, RiBookOpenLine } from "react-icons/ri";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-inter",
});

const CursosUnificados = () => {
  return (
    <main className={`bg-gradient-to-br from-rose-50 via-pink-50 to-rose-100 min-h-screen text-gray-800 pt-6 ${inter.className}`}>
      {/* Sección Hero con Fondo Elegante */}
      <section
        className="relative px-4 py-20 md:px-8 md:py-28 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: 'url("/background/cursos.svg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-pink-100/30 backdrop-blur-[1px]"></div>
        
        {/* Encabezado Elegante */}
        <div className="relative z-10 text-center">
          <div className="mb-8">
            <h1 className={`${dancingScript.className} font-bold text-gray-800 text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-4 drop-shadow-lg`}>
              Cursos Presenciales
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-light font-sans max-w-4xl mx-auto leading-relaxed">
              Descubre el arte de la manicura profesional en un ambiente íntimo y exclusivo
            </p>
          </div>
        </div>

        {/* Contenido Principal */}
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 mt-16">
          
          {/* Galería de Imágenes Mejorada */}
          <div className="w-full lg:w-1/2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-200 to-pink-300 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden rounded-xl shadow-2xl border border-white/50 backdrop-blur-sm">
                <Carrusel />
              </div>
            </div>
          </div>

          {/* Información con Diseño Mejorado */}
          <div className="w-full lg:w-1/2">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center font-sans">
                Transforma tu <span className="text-transparent bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text">pasión</span> en profesión
              </h2>
              
              <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed font-light">
                Sumérgete en el mundo de la belleza de uñas con nuestra formación integral, 
                donde combinamos técnica, arte y emprendimiento en cada sesión.
              </p>

              {/* Características con Diseño Elegante */}
              <div className="space-y-6 mb-8">
                <div className="flex items-start p-6 bg-gradient-to-r from-white to-rose-50/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100/50 group hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiOutlineUserGroup size={28} className="text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Grupos Exclusivos</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Clases personalizadas en grupos reducidos para una atención dedicada y aprendizaje óptimo
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-white to-pink-50/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50 group hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <HiOutlineBadgeCheck size={28} className="text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Certificación Premium</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Diploma profesional reconocido que avala tu expertise en técnicas modernas de manicura
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-white to-rose-50/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-rose-100/50 group hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <RiToolsLine size={28} className="text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Materiales Premium</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Trabaja con productos de primera calidad y herramientas profesionales desde el primer día
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-6 bg-gradient-to-r from-white to-pink-50/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100/50 group hover:scale-[1.02]">
                  <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <RiBookOpenLine size={28} className="text-white" />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Recursos Exclusivos</h3>
                    <p className="text-gray-600 font-light leading-relaxed">
                      Acceso permanente a nuestra biblioteca digital, tutoriales y comunidad de alumnas
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Mobile Mejorado */}
              <div className="flex justify-center md:hidden mt-8">
                <div className="transform hover:scale-105 transition-all duration-300">
                  <ButtonLink
                    text="¡Quiero Empezar!"
                    href="https://wa.me/5492984207525"
                    textColor="text-white"
                    bgColor="bg-gradient-to-r from-rose-500 to-pink-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Desktop Mejorado */}
        <div className="relative z-10 hidden md:flex justify-center mt-12">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/50 transform hover:scale-105 transition-all duration-300">
            <a
              href="https://wa.me/5492984207525"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl lg:text-3xl font-semibold text-transparent bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text hover:from-rose-600 hover:to-pink-700 transition-all duration-300 px-8 py-4 block text-center"
            >
              ✨ Inscríbete Ahora ✨
            </a>
          </div>
        </div>
      </section>

      {/* Sección de Metodología Elegante */}
      <section className="relative px-4 py-20 md:px-8 md:py-24 bg-gradient-to-br from-white via-rose-50/30 to-pink-100/50">
        <div className="max-w-6xl mx-auto">
          
          {/* Encabezado de Metodología */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <h2 className={`${dancingScript.className} text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4`}>
                Nuestra Esencia
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-rose-400 to-pink-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl md:text-2xl text-gray-700 font-light max-w-4xl mx-auto leading-relaxed">
              Donde la técnica se encuentra con la elegancia, y cada detalle cuenta
            </p>
          </div>

          {/* Contenido de Metodología */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto Informativo */}
            <div className="space-y-8">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
                  Filosofía de <span className="text-transparent bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text">Enseñanza</span>
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed font-light mb-6">
                  Creemos en una formación que va más allá de la técnica. Priorizamos la salud ungueal 
                  y el uso de productos premium para garantizar resultados que perduran en el tiempo.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-light">
                  Cada curso está diseñado meticulosamente para brindarte bases sólidas, desde los 
                  fundamentos de la salud ungueal hasta las tendencias más vanguardistas en diseño.
                </p>
              </div>

              {/* Cita Elegante */}
              <div className="bg-gradient-to-r from-rose-500 to-pink-600 rounded-2xl p-8 shadow-2xl text-center transform hover:scale-[1.02] transition-all duration-300">
                <p className={`${dancingScript.className} text-2xl md:text-3xl font-light text-white italic leading-relaxed`}>
                  Aprende a cuidar, crear y emprender con confianza y elegancia
                </p>
                <div className="w-16 h-0.5 bg-white/50 mx-auto mt-4 rounded-full"></div>
              </div>
            </div>

            {/* Información Adicional */}
            <div className="space-y-6">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <h4 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                  ¿Por qué elegirnos?
                </h4>
                <ul className="space-y-4 text-gray-700 font-light">
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mr-4"></div>
                    <span>Enfoque personalizado según tu nivel y objetivos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mr-4"></div>
                    <span>Técnicas actualizadas con las últimas tendencias</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mr-4"></div>
                    <span>Soporte continuo incluso después de finalizar</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-400 to-pink-500 rounded-full mr-4"></div>
                    <span>Ambiente inspirador y equipamiento profesional</span>
                  </li>
                </ul>
              </div>

              {/* CTA Final */}
              <div className="text-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    ¿Lista para comenzar?
                  </h3>
                  <p className="text-gray-600 font-light mb-4">
                    Únete a nuestra comunidad de artistas de uñas
                  </p>
                  <div className="transform hover:scale-105 transition-all duration-300">
                    <ButtonLink
                      text="Contactar Ahora"
                      href="https://wa.me/5492984207525"
                      textColor="text-white"
                      bgColor="bg-gradient-to-r from-rose-500 to-pink-600"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CursosUnificados;