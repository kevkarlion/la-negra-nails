// components/Hero.tsx

import React from 'react';
import Image from 'next/image';
import { BackgroundWithLogo } from './BackgroundImage'
import { ButtonLink } from '@/components/shared/Buttons'

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-auto flex items-center justify-center bg-cover bg-center z-0 " style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}>
      {/* Filtro de fondo */}
      <div className="absolute inset-0 bg-black opacity-50 w-full" />
            <div className='mt-28 w-full'>

                  {/* Contenedor del contenido del hero */}
                  <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 mb-28 mt-20">
                  {/* Logo */}
                  <div className="mb-4 w-[28rem] h-[12rem] md:w-[32rem] md:h-[18rem] relative">
                  <Image
                        src="/logos/logo-dorado-white-nvo.png" // Cambia esto por la ruta de tu logo
                        alt="Logo"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        className="w-full"
                  />
                  </div>

                  {/* Subtítulo */}
                  <h2 className="text-white font-subtitle title-mobile-sm md:text-2xl font-bold w-3/4 mb-10">
                  Estilo y elegancia con el cuidado que tus uñas merecen. Luce impecable y saludable!
                  </h2>

                  {/* Botón */}
                  <ButtonLink text='Contactanos' href='#' textColor='text-primary-onix'  bgColor='bg-secondary' />
            </div>
            <BackgroundWithLogo backgroundUrl='/images/la-negra-hero.webp'  logoUrl='/logos/logo-negro.webp'/>
      </div>
    </section>
  );
};

