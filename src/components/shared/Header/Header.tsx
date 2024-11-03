'use client'; // Asegúrate de que este archivo es un componente del lado del cliente.

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { TbMinusVertical } from 'react-icons/tb';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa'; // Importa los iconos de las redes sociales
import Image from 'next/image';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-primary-onix shadow-md p-4 border-b w-full flex z-10">
      <div className="mx-auto md:mx-4 md:justify-between flex justify-around items-center flex-1">
        {/* Menú hamburguesa (lado izquierdo en mobile) */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú de navegación (visible en desktop y mobile) */}
        <nav className="flex items-center space-x-4 ml-6">
          <Link href="/" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold hidden lg:block">
            Inicio
          </Link>
          <TbMinusVertical className='hidden lg:block'/>
          <Link href="/cursos" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold">
            Cursos
          </Link>
          <TbMinusVertical /> 
          <Link href="/" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold">
            La negra uñas
          </Link>
          <TbMinusVertical className='hidden lg:block'/>
          <Link href="/" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold hidden lg:block">
            Creaciones
          </Link>
          <TbMinusVertical className='hidden lg:block'/>
          <Link href="/" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold hidden lg:block">
            Sobre mi
          </Link>
          <TbMinusVertical className='hidden lg:block'/>
          <Link href="/" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold hidden lg:block">
            Contacto
          </Link>
        </nav>

        {/* Logo a la derecha (versión mobile) */}
        <div className="flex items-center space-x-2 ml-auto md:hidden">
          <div className="w-32 h-16 flex-shrink-0 relative">
            <Image
              src="/header/logo-dorado-limpio.png"
              alt="Logo Maridania Garcia"
              fill={true}
              style={{ objectFit: 'contain' }}
              className="w-full"
            />
          </div>
        </div>

        {/* Menú de navegación (visible en mobile si el menú está abierto) */}
        <nav
          className={`absolute top-16 left-0 w-full bg-white shadow-lg lg:shadow-none lg:flex lg:items-center lg:relative lg:top-0 lg:w-auto transition-all duration-300 ease-in-out z-40 ${
            isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col p-4 lg:p-0">
            {/* Enlaces adicionales para la versión móvil */}
            <li>
              <Link href="/" className="text-gray-800 hover:text-pink-600 font-semibold">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/servicios" className="text-gray-800 hover:text-pink-600 font-semibold">
                Servicios
              </Link>
            </li>
            <li>
              <Link href="/creaciones" className="text-gray-800 hover:text-pink-600 font-semibold">
                Creaciones
              </Link>
            </li>
            <li>
              <Link href="/sobre-mi" className="text-gray-800 hover:text-pink-600 font-semibold">
                Sobre mí
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-gray-800 hover:text-pink-600 font-semibold">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>

        {/* Enlaces a redes sociales (visible en desktop) */}
        <div className="hidden md:flex items-center space-x-4 ml-10">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-pink-600" size={20} />
          </Link>
          <Link href="https://wa.me" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp className="text-white hover:text-pink-600" size={20} />
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-pink-600" size={20} />
          </Link>
        </div>

        {/* Logo a la derecha (versión desktop) */}
        <div className="hidden md:flex items-center space-x-2 ml-2">
          <div className="w-32 h-16 flex-shrink-0 relative ">
            <Image
              src="/header/logo-dorado-limpio.png"
              alt="Logo Maridania Garcia"
              fill={true}
              style={{ objectFit: 'contain' }}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
