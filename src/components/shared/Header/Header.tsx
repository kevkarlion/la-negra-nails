'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';
import Image from 'next/image';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`fixed w-full z-40 !p-0 md:!p-4 transition-all duration-300 ease-in-out  ${
        isVisible ? 'top-0' : '-top-full'
      } ${isScrolled ? 'bg-black/90 shadow-lg' : 'bg-black'} p-3`} id='#inicio'
    >
      <div className="flex justify-between items-center mx-auto px-4 md:px-10">
        {/* Menú hamburguesa en móvil */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        {/* Logo central en móvil */}
        <Link href='#inicio'>
          <div className="flex items-center">
            <Image
              src="/header/logo-dorado-limpio.png"
              alt="Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Menú de navegación en desktop */}
        <nav className="hidden lg:flex items-center space-x-6">
          <Link href="#inicio" className="text-white font-semibold hover:text-gray-400 transition-all duration-200">
            Inicio
          </Link>
          <Link href="#cursos" className="text-white font-semibold hover:text-gray-400 transition-all duration-200">
            Cursos
          </Link>
          <Link href="#servicios" className="text-white font-semibold hover:text-gray-400 transition-all duration-200">
            Servicios
          </Link>
          <Link href="#creaciones" className="text-white font-semibold hover:text-gray-400 transition-all duration-200">
            Creaciones
          </Link>
          <Link href="#about" className="text-white font-semibold hover:text-gray-400 transition-all duration-200">
            Sobre mí
          </Link>
          <Link href="#footer" className="text-white font-semibold hover:text-gray-400 transition-all duration-200">
            Contacto
          </Link>
        </nav>

        {/* Redes sociales en desktop */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-white hover:text-gray-400 transition-all duration-200" size={20} />
          </Link>
          <Link href="https://wa.me" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp className="text-white hover:text-gray-400 transition-all duration-200" size={20} />
          </Link>
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF className="text-white hover:text-gray-400 transition-all duration-200" size={20} />
          </Link>
        </div>

        {/* Menú desplegable en móvil */}
        {isMenuOpen && (
          <nav
            className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out z-50"
          >
            <ul className="flex flex-col items-center py-6 space-y-4 text-white">
              <li>
                <Link href="#inicio" className="text-lg font-semibold hover:text-gray-400 transition-all duration-200">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#cursos" className="text-lg font-semibold hover:text-gray-400 transition-all duration-200">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-lg font-semibold hover:text-gray-400 transition-all duration-200">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="#creaciones" className="text-lg font-semibold hover:text-gray-400 transition-all duration-200">
                  Creaciones
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-lg font-semibold hover:text-gray-400 transition-all duration-200">
                  Sobre mí
                </Link>
              </li>
              <li>
                <Link href="#footer" className="text-lg font-semibold hover:text-gray-400 transition-all duration-200">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
