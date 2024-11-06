// components/Footer.tsx
import React from 'react';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaYoutube, FaFacebook } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-10">
      <div className="container mx-auto text-center mb-2">
        {/* Logo en la parte superior */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logos/logo-dorado-white-nvo.png" // Cambia esta ruta por la de tu logo
            alt="Logo"
            width={200}
            height={100}
          />
        </div>

        {/* Área de contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left px-4">
          {/* Información de contacto */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Contacto</h3>
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-lg" />
              <p className='font-subtitle'>Calle Falsa 123</p> {/* Cambia por la dirección real */}
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneAlt className="text-lg" />
              <p className='font-subtitle'>(+54) 123-456-789</p> {/* Cambia por el teléfono real */}
            </div>
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-lg" />
              <p className='font-subtitle'>contacto@tuemprendimiento.com</p> {/* Cambia por el email real */}
            </div>
          </div>

          {/* Redes Sociales */}
          <div className="space-y-2">
            <h3 className="font-bold text-lg">Visita nuestras redes</h3>
            <div className="flex items-center space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl hover:text-gray-400" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebook className="text-2xl hover:text-gray-400" />
              </a>
            </div>
          </div>

          {/* Horarios de atención */}
          <div className="space-y-2 mb-16">
            <h3 className="font-bold text-lg">Horarios de atención</h3>
            <p className='font-subtitle'>Lunes a Viernes: 8hs a 16hs</p>
            <p className='font-subtitle'>Sábado y Domingo: Cerrado</p>
            <p className='font-subtitle'>Feriado: Cerrado</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-sm text-center">
          <p className='font-subtitle'>© {new Date().getFullYear()} Todos los derechos reservados.</p>
          <p className='font-subtitle'>Belleza y estilo a tu alcance, con la elegancia que mereces.</p>
        </div>
      </div>
    </footer>
  );
};
