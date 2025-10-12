"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"], // conjunto de caracteres
  weight: ["400", "700"], // puedes agregar más: 100, 200, 300, 500, 600, 800
  variable: "--font-inter", // opcional: para usar en CSS
});

export const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const servicesButtonRef = useRef<HTMLButtonElement>(null);

  // Efecto para el comportamiento de scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efecto simplificado para cerrar menú móvil al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Solo cerrar si el menú móvil está abierto
      if (isMobileMenuOpen) {
        const target = event.target as Node;

        // Si el click fue fuera del menú móvil Y fuera del botón del menú
        if (
          mobileMenuRef.current &&
          !mobileMenuRef.current.contains(target) &&
          !document
            .querySelector('button[class*="lg:hidden"]')
            ?.contains(target)
        ) {
          setIsMobileMenuOpen(false);
          setIsServicesOpen(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Navegación suave
  const handleSmoothNavigate = (hash: string) => {
    if (pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push(`/${hash}`);
    }
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Manejar hover del dropdown con delay - SOLO DESKTOP
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300);
  };

  // Manejar mobile dropdown - SOLUCIÓN DEFINITIVA
  const handleMobileServicesToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Antes del toggle:", isServicesOpen);
    setIsServicesOpen((prev) => {
      const newValue = !prev;
      console.log("Después del toggle:", newValue);
      return newValue;
    });
  };

  // Manejar toggle del menú móvil - CORREGIDO
  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen((prev) => {
      const newValue = !prev;
      // Si estamos CERRANDO el menú móvil, también cerramos servicios
      if (!newValue) {
        setIsServicesOpen(false);
      }
      return newValue;
    });
  };

  // Cerrar todo el menú móvil
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Elementos del menú
  const menuItems = [
    { label: "Inicio", hash: "#inicio" },
    { label: "Servicios", hash: "#servicios" },
    { label: "Galería", hash: "#galeria" },
    { label: "Sobre Mí", hash: "#about" },
    { label: "Contacto", hash: "#footer" },
  ];

  // Servicios de uñas
  const serviceItems = [
    {
      label: "Manicura Clásica",
      href: "/servicios/manicura-clasica",
      description: "Cuidado y belleza tradicional",
    },
    {
      label: "Uñas Esculpidas",
      href: "/servicios/unas-esculpidas",
      description: "Extensiones perfectas",
    },
    {
      label: "Kapping Gel",
      href: "/servicios/kapping-gel",
      description: "Fortalecimiento natural",
    },
    {
      label: "Esmaltado Semipermanente",
      href: "/servicios/semipermanente",
      description: "Color que dura semanas",
    },
    {
      label: "Nail Art",
      href: "/servicios/nail-art",
      description: "Diseños creativos",
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        inter.className
      }  ${isVisible ? "translate-y-0" : "-translate-y-full"} ${
        isScrolled
          ? "bg-white/20 backdrop-blur-xl shadow-xl border-b border-white/20"
          : "bg-white/15 backdrop-blur-lg border-b border-white/15"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-all duration-300 hover:scale-105"
          >
            <div className="relative top-[-7px] w-52 h-16">
              <Image
                src="/header/logo-dorado-limpio.webp"
                alt="Logo NailStudio"
                width={180}
                height={56}
                className="object-contain drop-shadow-lg brightness-110 contrast-110"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {menuItems.map((item) =>
              item.label === "Servicios" ? (
                <div
                  key={item.hash}
                  className="relative"
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleSmoothNavigate(item.hash)}
                    className="text-white hover:text-rose-200 transition-all duration-300 font-medium text-sm uppercase tracking-wider flex items-center space-x-2 py-3 relative group"
                  >
                    <span className="font-normal">{item.label}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
                  </button>

                  {isServicesOpen && (
                    <div className="absolute top-full left-0 mt-4 w-80 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/30 overflow-hidden">
                      <div className="p-4">
                        {serviceItems.map((service, index) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className={`block px-4 py-3 text-gray-800 hover:bg-rose-50 rounded-xl transition-all duration-300 ${
                              index !== serviceItems.length - 1
                                ? "border-b border-gray-100"
                                : ""
                            }`}
                            onClick={() => {
                              setIsServicesOpen(false);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <div className="font-semibold text-sm">
                              {service.label}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.hash}
                  onClick={() => handleSmoothNavigate(item.hash)}
                  className="text-white hover:text-rose-200 transition-all duration-300 font-medium text-sm uppercase tracking-wider py-3 relative group"
                >
                  <span className="font-normal">{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-300 transition-all duration-300 group-hover:w-full"></span>
                </button>
              )
            )}
          </nav>

          {/* CTA Button & Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-5">
              <a
                href="https://www.instagram.com/lanegra_bymaridania/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-200 transition-all duration-300 p-2 rounded-full hover:bg-white/10"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5492984207525"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-rose-200 transition-all duration-300 p-2 rounded-full hover:bg-white/10"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
                </svg>
              </a>
            </div>
            <a
              href="https://wa.me/5492984207525"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-rose-400 to-pink-500 text-white px-8 py-3 rounded-full text-sm font-semibold tracking-wide shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/20 inline-block text-center"
            >
              Reservar Cita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleMobileMenuToggle}
            className="lg:hidden text-white p-3 rounded-xl hover:bg-white/10 transition-colors duration-300 border border-white/10"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - CORREGIDO */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="lg:hidden bg-white/20 backdrop-blur-xl border-t border-white/20 rounded-b-3xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="py-6 space-y-3">
              {menuItems.map((item) =>
                item.label === "Servicios" ? (
                  <div
                    key={item.hash}
                    className="border-b border-white/10 pb-3 mx-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      ref={servicesButtonRef}
                      onClick={handleMobileServicesToggle}
                      className="flex items-center justify-between w-full text-white hover:text-rose-200 transition-colors duration-300 font-medium text-sm uppercase tracking-wide py-4 px-4 rounded-xl hover:bg-white/10"
                    >
                      <span className="font-semibold">{item.label}</span>
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {isServicesOpen && (
                      <div className="ml-4 mt-3 space-y-3 bg-white/20 rounded-xl p-4 border border-white/20">
                        {serviceItems.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="block text-white hover:text-rose-200 transition-colors duration-300 text-sm py-3 px-4 rounded-lg hover:bg-white/10 border border-white/10"
                            onClick={closeMobileMenu}
                          >
                            <div className="font-semibold">{service.label}</div>
                            <div className="text-xs text-rose-100/80 mt-1">
                              {service.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.hash}
                    onClick={() => {
                      handleSmoothNavigate(item.hash);
                      closeMobileMenu();
                    }}
                    className="block w-full text-left text-white hover:text-rose-200 transition-colors duration-300 font-medium text-sm uppercase tracking-wide py-4 px-4 rounded-xl hover:bg-white/10 mx-4"
                  >
                    <span className="font-semibold">{item.label}</span>
                  </button>
                )
              )}

              {/* Mobile CTA Button */}
              <div className="pt-6 px-4">
                <button
                  onClick={() => {
                    handleSmoothNavigate("#footer");
                    closeMobileMenu();
                  }}
                  className="w-full bg-gradient-to-r from-rose-400 to-pink-500 text-white py-4 rounded-xl text-sm font-semibold tracking-wide shadow-2xl transition-all duration-300 border border-white/20"
                >
                  Reservar Cita
                </button>
              </div>

              {/* Mobile Social Links */}
              <div className="flex justify-center space-x-10 pt-8 border-t border-white/10 px-4">
                <a
                  href="https://www.instagram.com/lanegra_bymaridania/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-rose-200 transition-colors duration-300 p-3 rounded-full hover:bg-white/10 border border-white/10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/5492984207525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-rose-200 transition-colors duration-300 p-3 rounded-full hover:bg-white/10 border border-white/10"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893c0-3.189-1.248-6.189-3.515-8.444" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
