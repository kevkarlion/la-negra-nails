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
      'https://maridaniagarcia.com.ar/sitemap.xml',
    ],
    host: 'https://maridaniagarcia.com.ar',
  }
}