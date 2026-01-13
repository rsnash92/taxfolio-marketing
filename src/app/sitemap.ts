import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const BASE_URL = 'https://taxfolio.io'

// Get all MDX content for dynamic routes
function getContentSlugs(): { pillar: string; cluster?: string }[] {
  const contentDir = path.join(process.cwd(), 'content')
  const slugs: { pillar: string; cluster?: string }[] = []

  if (!fs.existsSync(contentDir)) {
    return slugs
  }

  // Get pillar directories
  const pillars = fs.readdirSync(contentDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  for (const pillar of pillars) {
    const pillarPath = path.join(contentDir, pillar)

    // Add pillar page if index.mdx exists
    if (fs.existsSync(path.join(pillarPath, 'index.mdx'))) {
      slugs.push({ pillar })
    }

    // Get cluster pages
    const files = fs.readdirSync(pillarPath)
      .filter(file => file.endsWith('.mdx') && file !== 'index.mdx')
      .map(file => file.replace('.mdx', ''))

    for (const cluster of files) {
      slugs.push({ pillar, cluster })
    }
  }

  return slugs
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/pricing`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/resources`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/affiliates`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/accountants`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/disclaimer`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // Dynamic content pages (pillars and clusters)
  const contentSlugs = getContentSlugs()
  const contentPages: MetadataRoute.Sitemap = contentSlugs.map(({ pillar, cluster }) => {
    const url = cluster
      ? `${BASE_URL}/${pillar}/${cluster}`
      : `${BASE_URL}/${pillar}`

    return {
      url,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: cluster ? 0.7 : 0.8, // Pillar pages get higher priority
    }
  })

  return [...staticPages, ...contentPages]
}
