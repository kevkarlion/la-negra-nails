// // components/BackgroundWithLogo.tsx - VERSIÓN MEJORADA
// import React from 'react';
// import Image from 'next/image';

// interface BackgroundWithLogoProps {
//   backgroundUrl: string;
//   logoUrl: string;
// }

// export const BackgroundWithLogo: React.FC<BackgroundWithLogoProps> = ({ 
//   backgroundUrl, 
//   logoUrl 
// }) => {
//   return (
//     <div className="relative w-full h-[389px] sm:h-[500px] md:h-[700px] lg:h-[850px] xl:h-[1000px] overflow-hidden">
      
//       {/* Contenedor de fondo mejorado */}
//       <div className="absolute inset-0 -z-10">
//         <Image
//           src={backgroundUrl}
//           alt="Fondo"
//           fill
//           priority
//           quality={85}
//           className="object-cover"
//           style={{ 
//             objectPosition: '50% 10%',
//             // Fondo de respaldo mientras carga
//             backgroundColor: '#f3f4f6' 
//           }}
//           // Solo usar blur si es imagen local
//           placeholder={backgroundUrl.startsWith('/') ? "blur" : "empty"}
//           // Para evitar layout shift
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
//         />
//       </div>

//       {/* Logo */}
//       <div className="relative z-10 pt-4 pr-4">
//         <div className="w-36 h-32 sm:w-48 sm:h-40 md:w-56 md:h-48 lg:w-64 lg:h-56 xl:w-72 xl:h-64">
//           <Image
//             src={logoUrl}
//             alt="Logo"
//             fill
//             className="object-contain"
//             priority
//           />
//         </div>
//       </div>
      
//     </div>
//   );
// };