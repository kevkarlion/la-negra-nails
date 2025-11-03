import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/private/',
          '/dashboard/',
          '/checkout/',
          '/cart/'
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      'https://lanegraunias.com.ar/sitemap.xml',
      'https://lanegraunias.com.ar/sitemap-pages.xml',
      'https://lanegraunias.com.ar/sitemap-services.xml',
      'https://lanegraunias.com.ar/sitemap-locations.xml'
    ],
    host: 'https://lanegraunias.com.ar',
  }
}