import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/alternate/',
          '/light/',
          '/archive/',
        ],
      },
    ],
    sitemap: 'https://taxfolio.io/sitemap.xml',
  }
}
