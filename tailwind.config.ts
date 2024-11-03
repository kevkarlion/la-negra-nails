import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: '#FFFFFF',      // Blanco
          onix: '#0A0A0A',         // Negro Onix
          darkCeniza: 'rgb(19, 19, 19)', //Negro Ceniza
          darkGray: '#333333',     // Gris Oscuro
          mediumGray: 'rgb(128, 128, 128)',  // Gris Intermedio
        },
        secondary: {
          DEFAULT: '#ffc0db',      // Color principal secundario
          mediumPink: '#ff95c6',   // Rosa medio
          brightPink: '#ff5ba4',   // Rosa brillante
          deepPink: '#ff1a84',     // Rosa intenso
          hotPink: '#f70072',      // Rosa fuerte
        },
        tertiary: {
          DEFAULT: '#efb810',      // Oro La Negra
        },
        quaternary: {
          palePink: '#F8E1E7',     // Rosa Pálido
          burgundy: '#800020',     // Burdeos
          darkPink: 'rgb(178, 76, 112)',    // Rosa Oscuro
          red: 'rgb(198, 0, 59)',           // Rojo
        },
      },
      fontFamily: {
        title: ['"Dancing Script"', 'cursive'],
        subtitle: ['Lora', 'serif'],
        body: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        // Títulos
        'title-lg': ['3rem', '1.2'], // 48px
        'title-xl': ['4.25rem', '1.2'], // 68px
        'title-mobile-sm': ['1.75rem', '1.2'], // 28px
        'title-mobile-md': ['2.25rem', '1.2'], // 32px

        // Subtítulos
        'subtitle-lg': ['2.25rem', '1.2'], // 36px
        'subtitle-xl': ['3rem', '1.2'], // 48px
        'subtitle-mobile-sm': ['0.75rem', '1.2'], // 12px
        'subtitle-mobile-md': ['1rem', '1.2'], // 16px

        // Cuerpo del texto
        body: ['1.125rem', '1.5'], // 18px
      },
    },
  },
  plugins: [],
};
export default config;
