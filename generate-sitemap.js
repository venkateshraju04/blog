import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const allBlogs = [
  {
    path: 'blog/202503/MCP_Quick_Start',
    lastmod: '2025-03-29',
    date: '2025-03-29',
    draft: false,
  },
  {
    path: 'blog/202505/Electron_Shadcn_Guide',
    lastmod: '2025-05-20',
    date: '2025-05-20',
    draft: false,
  },
  {
    path: 'blog/202506/Monad_Hackthon_Expirience',
    lastmod: '2025-06-01',
    date: '2025-06-01',
    draft: false,
  },
  {
    path: 'blog/202506/Weird_Data_Structures',
    lastmod: '2025-06-10',
    date: '2025-06-05',
    draft: false,
  },
  {
    path: 'blog/202506/How_To_Prompt',
    lastmod: '2025-06-15',
    date: '2025-06-15',
    draft: false,
  },
  {
    path: 'blog/202506/Product_Management_Guide',
    lastmod: '2025-06-30',
    date: '2025-06-30',
    draft: false,
  },
  {
    path: 'blog/202507/Custom_Kubernetes_Operator',
    lastmod: '2025-07-14',
    date: '2025-07-14',
    draft: false,
  },
  {
    path: 'blog/202508/College_Life_And_Friends',
    lastmod: '2025-08-03',
    date: '2025-08-03',
    draft: false,
  },
]

function generateSitemap() {
  const siteUrl = 'https://blog.mohitnagaraj.in'

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
