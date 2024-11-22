// components/VideoLoop.js
"use client"; // Instrucción necesaria en Next.js 15 para componentes de cliente

import React from 'react';

export const VideoLoop = () => {
  return (
    <div className="relative w-full h-[200px] ">
      <video
        src="/video/video-oro-luces.webm"  // Asegúrate de que el archivo esté en la carpeta public
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-auto object-cover rotate-180"
        
      />
    </div>
  );
};

