import type { Metadata } from "next";
import { Header } from '@/components/shared/Header'
import { Footer } from '@/components/shared/Footer'
import { SocialCTA } from '@/components/shared/SocialCTA'
import "./globals.css";
import { Dancing_Script } from 'next/font/google';

// Carga la fuente con pesos específicos
const title = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "La Negra Uñas | Cuidado y Estética de Uñas en Roca, Río Negro",
  description: "Servicios profesionales de manicura, pedicura y cuidado integral de uñas en Roca, Río Negro. Uñas esculpidas, semipermanente y tratamientos para la salud ungueal.",
  keywords: "uñas, manicura, pedicura, Roca Río Negro, uñas esculpidas, esmaltado semipermanente, cuidado de uñas, belleza de manos, La Negra Uñas",
  authors: [{ name: "La Negra Uñas" }],
  creator: "La Negra Uñas",
  publisher: "La Negra Uñas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://lanegraunias.com.ar'), // Reemplaza con tu dominio real
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "La Negra Uñas | Cuidado Profesional de Uñas en Roca, Río Negro",
    description: "Servicios especializados en estética y salud ungueal. Manicura, pedicura, uñas esculpidas y tratamientos personalizados.",
    url: 'https://lanegraunias.com.ar',
    siteName: 'La Negra Uñas',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/la-negra-hero.webp',
        width: 1200,
        height: 630,
        alt: 'La Negra Uñas - Servicios profesionales de uñas en Roca, Río Negro',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Agrega aquí tus códigos de verificación cuando los tengas
    // google: 'tu-codigo-de-verificacion-google',
    // yandex: 'tu-codigo-de-verificacion-yandex',
    // yahoo: 'tu-codigo-de-verificacion-yahoo',
  },
  category: 'beauty & cosmetics',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preload" href="/images/la-negra-hero.webp" as="image" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <main className={`${title.className} flex flex-col min-h-screen bg-transparent`}>
          <Header /> 
          <SocialCTA />                           
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}