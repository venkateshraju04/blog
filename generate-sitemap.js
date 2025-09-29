import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const allBlogs = [
  {
    path: 'blog/202509/arctic_wolf',
    lastmod: '2025-09-18',
    date: '2025-09-18',
    draft: false,
  },
  {
    path: 'blog/202509/porsche',
    lastmod: '2025-09-11',
    date: '2025-09-11',
    draft: false,
  },
  {
    path: 'blog/202509/custom_roms',
    lastmod: '2025-09-10',
    date: '2025-09-10',
    draft: false,
  },
]

function generateSitemap() {
  const siteUrl = 'https://blog.venkateshraju.me'

  const blogRoutes = allBlogs
    .filter((p) => !p.draft)
    .map(
      ({ path, lastmod, date }) => `
  <url>
    <loc>${siteUrl}/${path}</loc>
    <lastmod>${lastmod || date}</lastmod>
  </url>`
    )
    .join('')

  const staticRoutes = ['', 'projects', 'about', 'tags']
    .map(
      (route) => `
  <url>
    <loc>${siteUrl}/${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`
    )
    .join('')

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticRoutes}
  ${blogRoutes}
</urlset>`

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap-back.xml'), sitemap)
  console.log('Sitemap generated successfully!')
}

generateSitemap()
