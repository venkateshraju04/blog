import { allBlogs } from 'contentlayer/generated'
import type { MetadataRoute } from 'next'
import { SITE_METADATA } from '~/data/site-metadata'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = SITE_METADATA.siteUrl
  const blogRoutes = allBlogs
    .filter((p) => !p.draft)
    .map(({ path, lastmod, date }) => ({
      url: `${siteUrl}/${path}`,
      lastModified: lastmod || date,
    }))

  const routes = ['', 'projects', 'about', 'tags'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogRoutes]
}
