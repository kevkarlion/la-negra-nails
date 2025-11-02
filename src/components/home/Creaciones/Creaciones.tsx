"use client";

import React, { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const images = [
  {
    src: "/images/carrusel/image1.webp",
    title: "Diseño Elegante",
    description: "Uñas esculpidas con técnica premium",
  },
  {
    src: "/images/carrusel/image2.webp",
    title: "French Moderno",
    description: "Clásico renovado con detalles únicos",
  },
  {
    src: "/images/carrusel/image3.webp",
    title: "Artístico",
    description: "Expresión creativa en cada uña",
  },
  {
    src: "/images/carrusel/image4.webp",
    title: "Natural & Fresco",
    description: "Estilo minimalista y sofisticado",
  },
  {
    src: "/images/carrusel/image5.webp",
    title: "Bold & Beautiful",
    description: "Colores vibrantes que destacan",
  },
  {
    src: "/images/carrusel/image6.webp",
    title: "Lujo en Detalles",
    description: "Perfección en cada aplicación",
  },
  {
    src: "/images/carrusel/image7.webp",
    title: "Tendencia 2024",
    description: "Lo último en diseño de uñas",
  },
  {
    src: "/images/carrusel/image8.webp",
    title: "Clásico Atemporal",
    description: "Elegancia que nunca pasa de moda",
  },
  {
    src: "/images/carrusel/image9.webp",
    title: "Festivo",
    description: "Celebra cada ocasión especial",
  },
  {
    src: "/images/carrusel/image10.webp",
    title: "Minimalista",
    description: "Belleza en la simplicidad",
  },
  {
    src: "/images/carrusel/image11.webp",
    title: "Dramático",
    description: "Impacto visual inmediato",
  },
  {
    src: "/images/carrusel/image14.webp",
    title: "Romántico",
    description: "Delicadeza y suavidad",
  },
  {
    src: "/images/carrusel/image15.webp",
    title: "Geométrico",
    description: "Líneas y formas definidas",
  },
  {
    src: "/images/carrusel/image16.webp",
    title: "Naturaleza",
    description: "Inspiración en elementos naturales",
  },
  {
    src: "/images/carrusel/image17.webp",
    title: "Oro & Glamour",
    description: "Lujo y brillo excepcional",
  },
  {
    src: "/images/carrusel/image9-kapping.webp",
    title: "Kapping Perfecto",
    description: "Técnica profesional impecable",
  },
];

export const Creaciones = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Funciones estables con useCallback - SIN dependencias innecesarias
  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, []); // ✅ images.length es constante

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, []); // ✅ images.length es constante

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  // Auto-play corregido - SIN warning
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]); // ✅ Solo depende de isPlaying

  // Touch handlers con useCallback
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  }, [touchStart, touchEnd, nextSlide, prevSlide]);

  return (
    <section
      className="relative bg-secondary-mediumPink text-white overflow-hidden pt-6"
      id="creaciones"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[url('/images/marble-texture.png')] opacity-10 pointer-events-none" />

      {/* Header Section */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  lg:pt-12 text-center flex flex-col justify-center items-center">
        <h1 className="font-title font-bold text-black text-5xl sm:text-[3rem] md:text-[4rem] mb-4 mt-16">
          Creaciones
        </h1>
        <p className="text-center text-base lg:text-xl lg:tracking-wide tracking-wider font-sans text-black mb-9 lg:w-4/6">
          Cada diseño de uñas es una expresión única de estilo y personalidad.
          Usamos técnicas innovadoras y productos de alta calidad para ofrecerte
          arte y precisión.
        </p>
      </div>

      {/* Enhanced Carousel */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="relative bg-white/10 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          {/* Main Carousel */}
          <div
            className="relative aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-black/20"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Current Image */}
            <div className="relative w-full h-full">
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].title}
                fill
                className="object-contain"
                priority={currentIndex === 0}
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />

              {/* Image Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6">
                <h3 className="font-title font-semibold text-white text-xl sm:text-2xl lg:text-3xl">
                  {images[currentIndex].title}
                </h3>
                <p className="font-sans text-white/90 text-sm sm:text-base lg:text-lg">
                  {images[currentIndex].description}
                </p>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label="Siguiente imagen"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Play/Pause Button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
              aria-label={isPlaying ? "Pausar carrusel" : "Reproducir carrusel"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Play className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          </div>

          {/* Thumbnail Strip */}
          <div className="mt-6 lg:mt-8">
            <div className="flex space-x-2 sm:space-x-3 lg:space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`flex-shrink-0 relative aspect-square w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-lg overflow-hidden transition-all duration-300 ${
                    index === currentIndex
                      ? "ring-4 ring-white scale-105"
                      : "opacity-70 hover:opacity-100 hover:scale-105"
                  }`}
                  aria-label={`Ver ${image.title}`}
                >
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 80px, (max-width: 1024px) 100px, 120px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-4 lg:mt-6">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-white scale-125"
                    : "bg-white/50 hover:bg-white/80"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 lg:pb-20 mt-12">
        <div
          className="bg-white border-t-2 border-r-2 rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12 text-center transform hover:scale-[1.02] transition-transform duration-300"
          style={{
            background: `linear-gradient(270deg, #FFECB3 0%, #FFE0B2 20%, #FFCDD2 40%, #F8BBD9 60%, #E1BEE7 80%, #D1C4E9 100%)`,
          }}
        >
          <h3 className="font-title font-semibold text-black text-2xl sm:text-3xl lg:text-4xl mb-4 lg:mb-6">
            ¡Reservá tu cita!
          </h3>
          <p className="text-blacktext-base lg:text-xl lg:tracking-wide tracking-wider font-sans text-black mb-6 lg:mb-8 leading-relaxed">
            Transformá tus uñas en una obra de arte. Contactanos y empezá tu
            experiencia de belleza única.
          </p>
          <a
            href="https://wa.me/5492984207525"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-grey border-t border-r bg-secibdary text-black font-semibold text-lg sm:text-xl lg:text-2xl py-4 sm:py-6 px-8 sm:px-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Reservar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};
