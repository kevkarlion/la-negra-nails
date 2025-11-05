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


const domain = "https://maridaniagarcia.com.ar";
const description = "💅 Marida Garcia - Especialista en uñas esculpidas, semipermanente y cuidado integral en General Roca. Servicios de manicura, pedicura y tratamientos para uñas y pies en Alto Valle, Neuquén y Cipolletti.";

export const metadata: Metadata = {
  title: "Marida Garcia - La Negra Uñas | Manicura y Pedicura Profesional en Roca, Río Negro",
  description: description,
  keywords: "Marida Garcia uñas, La Negra Uñas, uñas esculpidas Roca, manicura Río Negro, pedicura Alto Valle, esmaltado semipermanente Neuquén, cuidado de uñas Cipolletti, belleza de manos, pies, acrílico uñas, kapping gel, podología estética",
  authors: [{ name: "Marida Garcia - La Negra Uñas" }],
  creator: "Marida Garcia - La Negra Uñas",
  publisher: "Marida Garcia - La Negra Uñas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(domain),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Marida Garcia - La Negra Uñas | Manicura y Pedicura en Roca, Río Negro",
    description: "💅 Marida Garcia - Servicios profesionales de uñas esculpidas, semipermanente y tratamientos para manos y pies en General Roca. Atención en Alto Valle, Neuquén y Cipolletti.",
    url: domain,
    siteName: 'Marida Garcia - La Negra Uñas',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Marida Garcia - La Negra Uñas - Servicios profesionales de manicura y pedicura en General Roca',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Marida Garcia - La Negra Uñas | Cuidado Profesional de Uñas en Roca",
    description: "Marida Garcia - Especialista en uñas esculpidas, semipermanente y tratamientos para manos y pies en General Roca, Río Negro",
    images: ['/images/twitter-image.jpg'],
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
    // google: 'tu-codigo-de-verificacion-google',
  },
  category: 'beauty & cosmetics',
  other: {
    'geo.region': 'AR-R',
    'geo.placename': 'General Roca, Río Negro',
    'geo.position': '-39.0333;-67.5833',
    'ICBM': '-39.0333, -67.5833',
  }
};

// Datos estructurados para Local Business
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'NailSalon',
  name: 'La Negra Uñas - Marida Garcia',
  alternateName: ['La Negra Uñas', 'Marida Garcia'],
  description: 'Marida Garcia - Salón de belleza especializado en cuidado y estética de uñas en General Roca, Río Negro',
  url: domain,
  telephone: '+54-299-XXXXXXX',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Tu dirección aquí',
    addressLocality: 'General Roca',
    addressRegion: 'Río Negro',
    addressCountry: 'AR'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -39.0333,
    longitude: -67.5833
  },
  areaServed: ['General Roca', 'Río Negro', 'Alto Valle', 'Neuquén', 'Cipolletti'],
  openingHours: 'Mo-Sa 09:00-20:00',
  services: [
    'Manicura profesional',
    'Pedicura',
    'Uñas esculpidas',
    'Esmaltado semipermanente',
    'Kapping gel',
    'Acrílico',
    'Tratamientos para uñas'
  ],
  priceRange: '$$'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <head>
        <link rel="preload" href="/images/hero-image.webp" as="image" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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