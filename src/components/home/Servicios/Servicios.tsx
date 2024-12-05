// import React from "react";
// import { ServiceCard } from "@/components/shared/ServiceCard";
// import { ButtonLink } from "@/components/shared/Buttons";
// import Link from "next/link";

// interface SectionProps {
//   title: string;
//   subtitle: string;
// }

// export const Servicios: React.FC<SectionProps> = ({ title, subtitle }) => {
//   return (
//     <section
//       className="px-4 py-6 md:px-8 md:py-10 lg:pt-16 lg:pb-16 h-auto bg-cover bg-secondary-pinkWhite"
//       style={{ backgroundImage: "url(/bg/bg-section.svg)" }}
//       id="servicios"
//     >
//       <div className="max-w-screen-lg mx-auto text-center mt-9 flex flex-col items-center">
//         {/* Título principal */}
//         <h1
//           className={font-title font-bold text-black text-[3.75rem] sm:text-[3rem] lg:text-[5rem] mb-2}
//         >
//           {title}
//         </h1>

//         {/* Subtítulo */}
//         <p className="w-full sm:w-4/6 font-sans text-black font-light text-lg sm:text-xl md:text-lg lg:text-xl">
//           {subtitle}
//         </p>

//         {/* Cards */}
//         <div className="grid grid-cols-1 justify-items-center gap-6 mt-6 w-full sm:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               title: "Manicura tradicional",
//               description:
//                 "Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante.",
//             },
//             {
//               title: "Baños de parafina",
//               description:
//                 "Un tratamiento que hidrata y suaviza la piel de manos y pies mediante la inmersión en parafina caliente, proporcionando alivio y bienestar.",
//             },
//             {
//               title: "Pedicura Spa",
//               description:
//                 "Un tratamiento de lujo que cuida y rejuvenece los pies, combinando exfoliación, hidratación y masaje, dejando la piel suave y las uñas impecables.",
//             },
//             {
//               title: "Uñas esculpidas",
//               description:
//                 "Un servicio de manicura que utiliza técnicas avanzadas para crear uñas de acrílico o gel, permitiendo una forma y diseño personalizados que ofrecen durabilidad y estilo.",
//             },
//             {
//               title: "SOFT gel",
//               description:
//                 "Un tratamiento de uñas que utiliza un gel ligero y flexible, ideal para lograr un acabado natural y duradero.",
//             },
//             {
//               title: "Kapping gel",
//               description:
//                 "Técnica que cubre y protege las uñas naturales con una capa de gel, acrílico o polygel, sin extender su longitud.",
//             },
//           ].map((service, index) => (
//             <ServiceCard
//               key={index}
//               propertyClassName={
//                 // Aseguramos que las animaciones solo se apliquen en dispositivos >= "md" (tabletas y desktop)
//                 shadow-lg transform transition-all duration-300 ease-in-out ${
//                   // Solo aplicar las animaciones y transiciones en pantallas grandes
//                   "md:hover:scale-105 md:hover:shadow-2xl"
//                 }
//               }
//               title={service.title}
//               description={service.description}
//             />
//           ))}
//         </div>

//         {/* Botones */}
//         <div className="flex flex-col justify-center items-center mt-8 mb-8 md:hidden">
//           <ButtonLink
//             text="Conocé más"
//             href="/servicios"
//             textColor="text-black"
//           />
//           <ButtonLink
//             text="Dónde encontrarnos"
//             href="#footer"
//             textColor="text-black"
//           />
//         </div>

//         <div className="hidden md:flex justify-center gap-4 w-3/4 mx-auto md:grid-cols-2 mt-14">
          
//           <Link
//             href="#footer"
            
//             className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
//           >
//             <h3
//               className={md:text-[27px] lg:text-3xl font-title  font-semibold text-black}
//             >
//               Dónde encontrarnos
//             </h3>
//           </Link>
//           <Link
//             href="/servicios"
//             className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
//           >
//             <h3
//               className={md:text-[27px] lg:text-3xl font-title  font-semibold text-black}
//             >
//               Conocé más
//             </h3>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };
















// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// interface Servicio {
//   title: string;
//   description: string;
//   description2?: string;
//   image: string;
// }

// const servicios: Servicio[] = [
//   {
//     title: "Manicura tradicional",
//     description:
//       "Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante.",
//     image: "/images/carrusel/image6.webp",
//   },
//   {
//     title: "Pedicura Spa",
//     description:
//       "La Pedicura Caribeña es una experiencia única que combina cuidado profesional con la frescura y los aromas del Caribe. Este tratamiento está diseñado para embellecer y revitalizar tus pies, priorizando la salud de la piel y las uñas, mientras disfrutas de productos inspirados en ingredientes naturales como coco y aceites naturales.",
//     description2:
//       "Con un enfoque en la relajación y el bienestar, este servicio incluye exfoliación, hidratación profunda y técnicas avanzadas de pedicura, todo realizado con productos de alta calidad que nutren y reparan. Ideal para quienes desean lucir pies impecables y sentir la frescura del Caribe en cada detalle.",
//     image: "/images/carrusel/pedicura-spa.webp",
//   },
//   {
//     title: "Uñas esculpidas",
//     description:
//       "Un servicio de manicura que utiliza técnicas avanzadas para crear uñas de acrílico o gel, permitiendo una forma y diseño personalizados que ofrecen durabilidad y estilo.",
//     image: "/images/carrusel/image8.webp",
//   },
//   {
//     title: "SOFT gel",
//     description:
//       "Un tratamiento de uñas que utiliza un gel ligero y flexible, ideal para lograr un acabado natural y duradero.",
//     image: "/images/carrusel/soft-gel.webp",
//   },
//   {
//     title: "Kapping gel",
//     description:
//       "Técnica que cubre y protege las uñas naturales con una capa de gel, acrílico o polygel, sin extender su longitud.",
//     image: "/images/carrusel/image9.webp",
//   },
// ];

// interface FAQ {
//   question: string;
//   answer: string;
// }

// const faqs: FAQ[] = [
//   {
//     question: "¿Con qué frecuencia debo hacerme una manicura?",
//     answer:
//       "Recomendamos una manicura cada 2-3 semanas para mantener tus uñas y manos en perfecto estado.",
//   },
//   {
//     question: "¿Los baños de parafina son adecuados para todo tipo de piel?",
//     answer:
//       "Sí, los baños de parafina son ideales para hidratar piel seca, aunque no son recomendables si tienes heridas abiertas o infecciones.",
//   },
//   {
//     question: "¿Cuánto duran las uñas esculpidas?",
//     answer:
//       "Con el cuidado adecuado, las uñas esculpidas pueden durar de 3 a 4 semanas antes de requerir un retoque.",
//   },
//   {
//     question: "¿Qué diferencia hay entre Soft Gel y Kapping Gel?",
//     answer:
//       "El Soft Gel es más flexible y natural, mientras que el Kapping Gel refuerza las uñas sin alargar su longitud.",
//   },
// ];

// export const Servicios = () => {
//   return (
//     <section className="px-6 pt-6 pb-24 bg-secondary-mediumPink" id="servicios">
//       <div className="max-w-screen-lg mx-auto md:pt-28 lg:pt-32">
//         {/* Sección de Introducción */}
//         <h1 className="font-title mb-2 mt-9 text-center font-bold text-black text-[3.75rem] sm:text-[3rem] md:text-[4rem]">
//           Descubre Nuestros Servicios
//         </h1>
//         <p className="text-center text-lg md:text-xl font-sans text-black mb-9">
//           Cada uno de nuestros servicios está diseñado para ofrecerte la mejor
//           experiencia en cuidado y belleza. Elige el que mejor se adapte a tus
//           necesidades y déjanos consentirte.
//         </p>

//         {/* Cards (Horizontales y Modernas) */}
//         <div className="grid grid-cols-1 gap-8">
//           {servicios.map((servicio, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform flex"
//             >
//               {/* Imagen */}
//               <Image
//                 src={servicio.image}
//                 alt={servicio.title}
//                 width={600}
//                 height={300}
//                 className="object-cover w-1/3 h-full"
//               />
//               {/* Contenido */}
//               <div className="p-6 flex-1">
//                 <h2 className="text-xl font-sans font-bold text-secondary-hotPink mb-4 border-b-2 border-black">
//                   {servicio.title}
//                 </h2>
//                 <p className="text-gray-700 text-sm font-sans">
//                   {servicio.description}
//                 </p>
//                 {servicio.description2 && (
//                   <p className="text-gray-700 text-sm font-sans mt-2">
//                     {servicio.description2}
//                   </p>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Sección de Preguntas Frecuentes */}
//         <div className="mt-16">
//           <h2 className="text-3xl font-sans font-bold text-center text-black mb-6">
//             Preguntas Frecuentes
//           </h2>
//           <div className="space-y-6">
//             {faqs.map((faq, index) => (
//               <div key={index} className="bg-white p-6 rounded-lg shadow-md">
//                 <h3 className="text-xl font-sans font-semibold text-secondary-hotPink mb-2">
//                   {faq.question}
//                 </h3>
//                 <p className="text-black font-sans">{faq.answer}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="hidden md:flex justify-center gap-4 w-3/4 mx-auto md:grid-cols-2 mt-14">
//           <Link
//             href="#footer"
//             className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
//           >
//             <h3
//               className={`md:text-[27px] lg:text-3xl font-title font-semibold text-black`}
//             >
//               Dónde encontrarnos
//             </h3>
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };


"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/shared/Buttons"

interface Servicio {
  title: string;
  description: string;
  description2?: string;
  description3?: string,
  image: string;
}

const servicios: Servicio[] = [
  {
    title: "Manicura tradicional",
    description:
      "Un tratamiento estético que embellece las manos mediante limado, pulido y esmalte de uñas, logrando un acabado elegante.",
    image: "/images/carrusel/image6.webp",
  },
  {
    title: "Pedicura Spa",
    description:
      "La Pedicura Caribeña es una experiencia única que combina cuidado profesional con la frescura y los aromas del Caribe. Este tratamiento está diseñado para embellecer y revitalizar tus pies, priorizando la salud de la piel y las uñas, mientras disfrutas de productos inspirados en ingredientes naturales como coco y aceites naturales.",
    description2:
      "Con un enfoque en la relajación y el bienestar, este servicio incluye exfoliación, hidratación profunda y técnicas avanzadas de pedicura, todo realizado con productos de alta calidad que nutren y reparan. Ideal para quienes desean lucir pies impecables y sentir la frescura del Caribe en cada detalle.",
      description3:
      "Déjate llevar por esta experiencia tropical y dale a tus pies el cuidado que merecen.",
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

export const Servicios = () => {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Considera 768px como el límite para mobile
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleExpand = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="px-6 pt-6 pb-6 md:pb-16 bg-secondary-mediumPink" id="servicios">
      <div className="max-w-screen-lg mx-auto md:pt-28 lg:pt-32">
        {/* Sección de Introducción */}
        <h1 className="font-title mb-2 mt-9 text-center font-bold text-black text-[3.75rem] sm:text-[3rem] md:text-[4rem]">
          Descubre Nuestros Servicios
        </h1>
        <p className="text-center text-lg md:text-xl font-sans text-black mb-9">
          Cada uno de nuestros servicios está diseñado para ofrecerte la mejor
          experiencia en cuidado y belleza. Elige el que mejor se adapte a tus
          necesidades y déjanos consentirte.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1  gap-8 ">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className={`bg-white min-h-[18.75rem] shadow-lg rounded-lg overflow-hidden 
                          ${!isMobile ? 'transform hover:scale-105 transition-transform' : ''} 
                          flex flex-col md:flex-row`}
            >
              {/* Imagen */}
              <div className="relative min-h-[17.68rem] h-auto min-w-[18.75rem]">

                <Image
                  src={servicio.image}
                  alt={servicio.title}
                  
                  fill
                  style={{objectFit:'cover'}}
                  className="w-full lg:w-1/3 "
                />
              </div>
              {/* Contenido */}
              <div className="p-6 flex flex-col justify-items">
                <h2 className="text-xl font-sans font-bold text-secondary-hotPink mb-4 border-b-2 border-tertiary">
                  {servicio.title}
                </h2>
                <p className="text-gray-700 text-sm font-sans">
                  {servicio.description}
                </p>
                {!isMobile && servicio.description2 && (
                  <p className="text-gray-700 text-sm font-sans">
                    {servicio.description2}
                    {<br />}
                    {servicio.description3}
                  </p>
                )}
                {isMobile && expandedCards.includes(index) && servicio.description2 && (
                  <p className="text-gray-700 text-sm font-sans">
                    {servicio.description2}
                    {<br />}
                    {servicio.description3}
                  </p>
                )}
                {isMobile && servicio.description2 && (
                  <button
                    className="mt-4 font-sans text-secondary-hotPink underline text-sm"
                    onClick={() => toggleExpand(index)}
                  >
                    {expandedCards.includes(index) ? "Ver menos" : "Ver más"}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
{/* Sección de Preguntas Frecuentes */}
         <div className="mt-16">
           <h2 className="text-3xl font-sans mt-24 font-bold text-center text-black mb-6">
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
       
        {/* Botones */}
         <div className="flex flex-col justify-center items-center mt-8 mb-8 md:hidden">
          
          <ButtonLink
            text="Dónde encontrarnos"
            href="#footer"
            textColor="text-black"
          />
        </div>

        <div className="hidden md:flex justify-center gap-4 w-3/4 mx-auto md:grid-cols-2 mt-14">
          
          <Link
            href="#footer"
            
            className="bg-white w-1/2 p-6 rounded-lg shadow-lg flex items-center justify-center fluid-bg"
          >
            <h3
              className={`md:text-[27px] lg:text-3xl font-title  font-semibold text-black`}
            >
              Dónde encontrarnos
            </h3>
          </Link>
        
        </div>
      
      </div>
      
    </section>
  );
};
