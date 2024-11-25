"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

import { FiMenu, FiX } from "react-icons/fi";
import { FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";
import Image from "next/image";

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleNavigate = async (hash: string) => {
    try {
      if (pathname === "/") {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      } else {
        await router.push("/");
        setTimeout(() => {
          document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
      setIsMenuOpen(false);
    } catch (error) {
      console.error("Error al navegar:", error);
    }
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

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    // Forzar visibilidad al cambiar de ruta
    setIsVisible(true);

    // Permitir que el scroll controle la visibilidad después de un tiempo
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500); // Ajusta el tiempo según tus necesidades

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={`fixed w-full z-40 !p-0 md:!p-4 transition-all duration-300 ease-in-out ${
        isVisible ? "top-0" : "-top-full"
      } ${isScrolled ? "bg-black/90 shadow-lg" : "bg-black"} p-3`}
      id="#inicio"
    >
      <div className="flex justify-between items-center mx-auto px-4 md:px-10">
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>

        <button onClick={() => handleNavigate("#inicio")}>
          <div className="flex items-center">
            <Image
              src="/header/logo-dorado-limpio.png"
              alt="Logo"
              width={150}
              height={60}
              className="object-contain"
            />
          </div>
        </button>

        <nav className="hidden lg:flex items-center space-x-6">
          {[
            { label: "Inicio", hash: "#inicio" },
            { label: "Cursos", hash: "#cursos" },
            { label: "Servicios", hash: "#servicios" },
            { label: "Creaciones", hash: "#creaciones" },
            { label: "Sobre mí", hash: "#about" },
            { label: "Contacto", hash: "#footer" },
          ].map(({ label, hash }) => (
            <button
              key={hash}
              onClick={() => handleNavigate(hash)}
              className="text-white font-semibold hover:text-gray-400 transition-all duration-200"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a
            href="https://www.instagram.com/lanegra_bymaridania/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram
              className="text-white hover:text-gray-400 transition-all duration-200"
              size={20}
            />
          </a>
          <a href="tel:+5492984207525" target="_blank" aria-label="WhatsApp">
            <FaWhatsapp
              className="text-white hover:text-gray-400 transition-all duration-200"
              size={20}
            />
          </a>
          <a
            href="https://www.facebook.com/lanegraunas"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF
              className="text-white hover:text-gray-400 transition-all duration-200"
              size={20}
            />
          </a>
        </div>

        {isMenuOpen && (
          <nav className="absolute top-16 left-0 w-full bg-black/95 backdrop-blur-md shadow-xl transition-all duration-300 ease-in-out z-50">
            <ul className="flex flex-col items-center py-6 space-y-4 text-white">
              {[
                { label: "Inicio", hash: "#inicio" },
                { label: "Cursos", hash: "#cursos" },
                { label: "Servicios", hash: "#servicios" },
                { label: "Creaciones", hash: "#creaciones" },
                { label: "Sobre mí", hash: "#about" },
                { label: "Contacto", hash: "#footer" },
              ].map(({ label, hash }) => (
                <li key={hash}>
                  <button
                    onClick={() => handleNavigate(hash)}
                    className="text-lg font-semibold hover:text-gray-400 transition-all duration-200"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};
