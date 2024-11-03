import React from 'react';

import { HiOutlineStar } from "react-icons/hi2";


interface ServiceCardProps {
  
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="flex my-3 justify-center flex-col items-center bg-white shadow-md  p-6 w-full max-w-sm text-center hover:shadow-lg transition-shadow duration-300 ease-in-out h-auto border-secondary-deepPink border-2">
      {/* Logo */}
      <div className="flex justify-center items-center mb-2 bg-black rounded-full w-14 h-14">
        <HiOutlineStar size={24}/>
      </div>
      
      {/* Título del servicio */}
      <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>
      
      {/* Descripción */}
      <p className="w-2/3 text-black text-sm z-20">{description}</p>
    </div>
  );
};

