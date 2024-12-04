"use client";


import { Dancing_Script } from "next/font/google";
import Carrusel from "@/components/Carrusel/Carrusel";


import { ButtonLink } from "@/components/shared/Buttons";
import { HiOutlineUserGroup, HiOutlineBadgeCheck } from "react-icons/hi";
import { RiToolsLine, RiBookOpenLine } from "react-icons/ri";

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
});



const CursoPresencial = () => {
  

  

  return (
    <main className="bg-gradient-to-br from-pink-50 to-pink-100 min-h-screen text-black pt-6">
      <section
        className="px-4 py-16 md:px-8 md:py-24 lg:py-24 h-auto bg-cover"
        style={{
          backgroundImage: 'url("/background/cursos.svg")',
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Encabezado */}
        <div className={`${dancingScript.className} text-center mt-9 `}>
          <h1 className=" font-bold text-black  text-[3.75rem] sm:text-[3rem] md:text-[4rem]">
            Cursos Presenciales
          </h1>
          <p className="text-lg sm:text-xl md:text-lg lg:text-xl lg:mb-8 text-black font-sans mt-2">
            Aprende con los mejores cursos en un entorno práctico y
            personalizado.
          </p>
        </div>

        {/* Cuerpo */}
        <div className="flex flex-col lg:flex-row lg:items-start items-center justify-center mt-6">
          {/* Imagen dinámica */}
          <div className="w-full lg:w-1/2 h-[400px] md:h-[700px] lg:h-[700px] overflow-hidden rounded-lg relative">
          <Carrusel />
          </div>

          {/* Descripción */}
          <div className="lg:w-1/2 mt-12 md:p-6">
            <h2 className="text-4xl text-title text-center sm:text-left  font-semibold text-black mb-4">
              ¡Transforma tu pasión en una profesión!
            </h2>
            <p className="text-black font-sans text-center sm:text-left text-lg md:text-xl mb-6">
              Aprende las técnicas modernas de diseño de uñas con nuestros
              cursos presenciales, diseñados para proporcionarte una experiencia
              práctica, personalizada y profesional.
            </p> 
            <div className="space-y-4 mb-12">
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <HiOutlineUserGroup size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Clases prácticas en pequeños grupos.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <HiOutlineBadgeCheck size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Certificación profesional incluida.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <RiToolsLine size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Materiales de alta calidad proporcionados.
                </span>
              </div>
              <div className="flex items-center p-4 bg-white shadow-lg rounded-lg border-l-4 border-pink-600">
                <RiBookOpenLine size={40} className="text-pink-600 mr-4" />
                <span className="text-black font-sans text-lg font-medium">
                  Acceso a recursos exclusivos para alumnos.
                </span>
              </div>
            </div>

            {/* Vista mobile */}
            <div className="flex justify-center">
              <ButtonLink
                text="Inscribite ahora!"
                href="'https://wa.me/5492984207525"
                textColor="text-black"
                bgColor="bg-[#ff5ba4]"
              />
            </div>

            {/* Vista desktop */}
          </div>
        </div>
        <div className="hidden mt-8 text-center md:flex flex-col justify-center items-center">
          <div className="font-title bg-white lg:w-[21.37rem] p-6 rounded-lg shadow-lg flex items-center self-center mt-6 justify-center fluid-bg">
            <a
              href="https://wa.me/5492984207525"
              target="_blank"
              rel="noopener noreferrer"
              className="md:text-[27px] lg:text-3xl  font-semibold text-black"
            >
              ¡Inscribite ahora!
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CursoPresencial;
