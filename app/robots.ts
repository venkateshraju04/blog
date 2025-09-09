import type { MetadataRoute } from 'next'
import { SITE_METADATA } from '~/data/site-metadata'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: `${SITE_METADATA.siteUrl}/sitemap-back.xml`,
    host: SITE_METADATA.siteUrl,
  }
}
