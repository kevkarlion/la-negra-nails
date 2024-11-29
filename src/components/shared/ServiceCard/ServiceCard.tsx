import React from "react";

import { HiOutlineStar } from "react-icons/hi";

interface ServiceCardProps {
  title: string;
  description: string;
  propertyClassName?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  propertyClassName,
}) => {
  return (
    <div
      className={`${propertyClassName} rounded-lg flex my-3 justify-center flex-col items-center bg-white  p-6 w-full max-w-sm text-center h-auto border-secondary-deepPink border-2`}
    >
      {/* Logo */}
      <div className="flex z-10 relative justify-center items-center mb-2 bg-black rounded-full w-14 h-14">
        <HiOutlineStar size={24} className="z-40 relative" color="white"/>
      </div>

      {/* Título del servicio */}
      <h3 className="text-xl font-semibold mb-2 text-secondary">{title}</h3>

      {/* Descripción */}
      <p className="w-2/3 text-black font-light  text-sm z-20">{description}</p>
    </div>
  );
};
