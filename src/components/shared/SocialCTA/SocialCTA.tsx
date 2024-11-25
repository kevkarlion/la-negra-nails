'use client';

import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaFacebook, FaBars, FaTimes } from 'react-icons/fa';

export const SocialCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: 'tel:+5492984207525', icon: FaWhatsapp, label: 'WhatsApp' },
    { href: 'https://www.instagram.com/lanegra_bymaridania', icon: FaInstagram, label: 'Instagram' },
    { href: 'https://www.facebook.com/lanegraunas', icon: FaFacebook, label: 'Facebook' },
  ];

  return (
    <>
      {/* Botón flotante para pantallas pequeñas */}
      <div className="fixed bottom-4 right-4 z-50 sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-center w-12 h-12 bg-black text-white rounded-full shadow-lg"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Lista de redes sociales */}
      <div
        className={`fixed top-1/2 right-4 transform -translate-y-1/2 z-50 ${
          isOpen ? 'block' : 'hidden'
        } sm:block`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {links.map(({ href, icon: Icon, label }, index) => (
            <li key={index}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center w-12 h-12 bg-black rounded-full hover:bg-white transition-colors duration-300"
                aria-label={label}
              >
                <Icon className="text-white group-hover:text-black text-xl" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


