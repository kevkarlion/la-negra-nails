// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Para resolver el problema de fuentes
  experimental: {
    optimizeCss: false
  }
}

module.exports = nextConfig