// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaEnvelope, FaInstagram, FaFacebook, FaWhatsapp } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 mt-auto w-full" id='footer'>
      <div className="container mx-auto px-6 lg:px-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logos/logo-dorado-white-nvo.png"
            alt="Logo"
            width={160}
            height={80}
            className="w-40 h-auto"
          />
        </div>

        {/* Contact & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center md:text-left">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-bold font-sans text-xl mb-4 text-center md:text-left">Contacto</h3>
            <div className="flex flex-col items-center md:items-start space-y-3">
              <div className="flex items-start space-x-2 max-w-xs">
                <FaMapMarkerAlt className="text-lg text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="https://maps.app.goo.gl/Z3cmciywEhxdb5mAA" target="_blank" rel="noopener noreferrer">
                  <p className="font-sans text-gray-300 text-sm md:text-base">Misiónes 1675, local 3. General Roca - Río Negro</p>
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <FaWhatsapp className="text-lg text-gray-400 flex-shrink-0" />
                <a href="https://wa.me/5492984207525" target="_blank" rel="noopener noreferrer">
                  <p className="font-sans text-gray-300 text-sm md:text-base">298-4207525</p>
                </a>
              </div>
              <div className="flex items-start space-x-2 max-w-xs">
                <FaEnvelope className="text-lg text-gray-400 mt-0.5 flex-shrink-0" />
                <a href="mailto:maridaniagarciagroup@gmail.com" target="_blank" rel="noopener noreferrer">
                  <p className="font-sans text-gray-300 text-sm md:text-base">maridaniagarciagroup@gmail.com</p>
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-xl mb-4 text-center md:text-left">Síguenos en Redes</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-gray-500 transition-colors">
                <FaInstagram />
              </a>
              <a href="https://wa.me/5492984207525" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-gray-500 transition-colors">
                <FaWhatsapp />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl text-gray-300 hover:text-gray-500 transition-colors">
                <FaFacebook />
              </a>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h3 className="font-sans font-bold text-xl mb-4 text-center md:text-left">Horarios de atención</h3>
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="font-sans text-gray-300 text-sm md:text-base">Lunes a Viernes: 8hs a 20hs</p>
              <p className="font-sans text-gray-300 text-sm md:text-base">Sábado: 9hs a 15hs</p>
              <p className="font-sans text-gray-300 text-sm md:text-base">Domingo y Feriado: Cerrado</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-sm text-center text-gray-400">
          <p className="font-sans">© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className="font-sans mt-1">Belleza y estilo a tu alcance, con la elegancia que mereces.</p>
        </div>
      </div>
    </footer>
  );
};