'use client'; // Asegúrate de que este archivo es un componente del lado del cliente.

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { TbMinusVertical } from 'react-icons/tb';
import Image from 'next/image';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header className="bg-primary-onix shadow-md p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        {/* Menú hamburguesa (lado izquierdo en mobile) */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Menú de navegación (visible en desktop y mobile) */}
        <nav className="flex items-center space-x-4 ml-10">
          <Link href="/cursos" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold">
            Cursos
          </Link>
          <TbMinusVertical /> {/* Ocultar en mobile */}
          <Link href="/" className="text-white title-mobile-sm font-subtitle hover:text-pink-600 font-semibold">
            La negra uñas
          </Link>
        </nav>

        {/* Logo a la derecha */}
        <div className="flex items-center space-x-2 ml-auto">
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
          className={`absolute top-16 left-0 w-full bg-white shadow-lg md:shadow-none md:flex md:items-center md:relative md:top-0 md:w-auto transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <ul className="flex flex-col p-4 md:p-0">
            <li>
              <Link href="/" className="text-gray-800 hover:text-pink-600 font-semibold">
                Título 1
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-800 hover:text-pink-600 font-semibold">
                Título 2
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-800 hover:text-pink-600 font-semibold">
                Título 3
              </Link>
            </li>
            <li>
              <Link href="/" className="text-gray-800 hover:text-pink-600 font-semibold">
                Título 4
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
