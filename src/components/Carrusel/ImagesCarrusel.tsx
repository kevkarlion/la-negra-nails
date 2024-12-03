import React from 'react';
import Image from 'next/image';

interface PropImages {
  text: string; // Texto descriptivo para la imagen
  src: string;  // Ruta de la imagen
}

const ExampleCarouselImage: React.FC<PropImages> = ({ text, src }) => {
  return (
    <Image
      src={src}
      alt={text}
      width={800} // Define un ancho consistente
      height={400} // Define una altura consistente
      className="w-full h-[400px] md:h-[700px]" // Ajusta el contenido al tamaño fijo
      style={{objectFit: 'contain'}}
    />
  );
};

export default ExampleCarouselImage;
