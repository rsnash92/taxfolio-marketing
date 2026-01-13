import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const contentDirectory = path.join(process.cwd(), 'content')

// Pillar definitions
export const PILLARS = [
  {
    slug: 'making-tax-digital',
    title: 'Making Tax Digital',
    shortTitle: 'MTD',
    description: 'Everything you need to know about HMRC\'s Making Tax Digital initiative and how to stay compliant.',
    icon: 'FileDigit',
  },
  {
    slug: 'self-assessment',
    title: 'Self Assessment',
    shortTitle: 'SA',
    description: 'Complete guide to UK self-assessment tax returns, deadlines, and what you need to report.',
    icon: 'FileText',
  },
  {
    slug: 'sole-trader-tax',
    title: 'Sole Trader Tax',
    shortTitle: 'Sole Trader',
    description: 'Tax guidance for self-employed individuals, freelancers, and sole traders in the UK.',
    icon: 'User',
  },
  {
    slug: 'landlord-tax',
    title: 'Landlord Tax',
    shortTitle: 'Landlord',
    description: 'Property income tax guide for UK landlords including allowable expenses and reliefs.',
    icon: 'Home',
  },
  {
    slug: 'tax-deductions',
    title: 'Tax Deductions',
    shortTitle: 'Deductions',
    description: 'Maximise your tax relief with our guide to allowable expenses and deductions.',
    icon: 'Receipt',
  },
  {
    slug: 'gig-economy-tax',
    title: 'Gig Economy Tax',
    shortTitle: 'Gig Economy',
    description: 'Tax advice for delivery drivers, rideshare drivers, and platform workers.',
    icon: 'Bike',
  },
  {
    slug: 'record-keeping',
    title: 'Record Keeping',
    shortTitle: 'Records',
    description: 'How to maintain proper records for HMRC compliance and Making Tax Digital.',
    icon: 'FolderOpen',
  },
] as const

export type PillarSlug = (typeof PILLARS)[number]['slug']

// Article metadata interface
export interface ArticleMeta {
  slug: string
  title: string
  description: string
  pillar?: string
  priority: 'high' | 'medium' | 'low'
  readingTime: string
  wordCount: number
  updatedAt?: string
  publishedAt?: string
  faqs?: Array<{ question: string; answer: string }>
  relatedArticles?: string[]
  keywords?: string[]
}

export interface Article {
  meta: ArticleMeta
  content: string
}

// Get a single pillar by slug
export function getPillarBySlug(slug: string): Article | null {
  const pillarPath = path.join(contentDirectory, slug, 'index.mdx')

  if (!fs.existsSync(pillarPath)) return null

  const fileContents = fs.readFileSync(pillarPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      priority: data.priority || 'medium',
      readingTime: stats.text,
      wordCount: stats.words,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      faqs: data.faqs || [],
      relatedArticles: data.relatedArticles || [],
      keywords: data.keywords || [],
    },
    content,
  }
}

// Get all cluster articles for a pillar
export function getClustersByPillar(pillarSlug: string): ArticleMeta[] {
  const pillarPath = path.join(contentDirectory, pillarSlug)

  if (!fs.existsSync(pillarPath)) return []

  const files = fs.readdirSync(pillarPath).filter(
    (file) => file.endsWith('.mdx') && file !== 'index.mdx'
  )

  const clusters = files.map((file) => {
    const filePath = path.join(pillarPath, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)
    const slug = file.replace('.mdx', '')

    return {
      slug,
      title: data.title,
      description: data.description,
      pillar: pillarSlug,
      priority: data.priority || 'medium',
      readingTime: stats.text,
      wordCount: stats.words,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      faqs: data.faqs || [],
      relatedArticles: data.relatedArticles || [],
      keywords: data.keywords || [],
    }
  })

  // Sort by priority
  const priorityOrder: Record<string, number> = { high: 0, medium: 1, low: 2 }
  return clusters.sort(
    (a, b) => (priorityOrder[a.priority] ?? 1) - (priorityOrder[b.priority] ?? 1)
  )
}

// Get a specific cluster article
export function getClusterBySlug(
  pillarSlug: string,
  clusterSlug: string
): Article | null {
  const articlePath = path.join(
    contentDirectory,
    pillarSlug,
    `${clusterSlug}.mdx`
  )

  if (!fs.existsSync(articlePath)) return null

  const fileContents = fs.readFileSync(articlePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    meta: {
      slug: clusterSlug,
      title: data.title,
      description: data.description,
      pillar: pillarSlug,
      priority: data.priority || 'medium',
      readingTime: stats.text,
      wordCount: stats.words,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      faqs: data.faqs || [],
      relatedArticles: data.relatedArticles || [],
      keywords: data.keywords || [],
    },
    content,
  }
}

// Get all comparison articles
export function getComparisonArticles(): ArticleMeta[] {
  const comparePath = path.join(contentDirectory, 'compare')

  if (!fs.existsSync(comparePath)) return []

  const files = fs.readdirSync(comparePath).filter((file) =>
    file.endsWith('.mdx')
  )

  return files.map((file) => {
    const filePath = path.join(comparePath, file)
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)
    const stats = readingTime(content)
    const slug = file.replace('.mdx', '')

    return {
      slug,
      title: data.title,
      description: data.description,
      priority: data.priority || 'medium',
      readingTime: stats.text,
      wordCount: stats.words,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      faqs: data.faqs || [],
      keywords: data.keywords || [],
    }
  })
}

// Get a specific comparison article
export function getComparisonBySlug(slug: string): Article | null {
  const articlePath = path.join(contentDirectory, 'compare', `${slug}.mdx`)

  if (!fs.existsSync(articlePath)) return null

  const fileContents = fs.readFileSync(articlePath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      priority: data.priority || 'medium',
      readingTime: stats.text,
      wordCount: stats.words,
      updatedAt: data.updatedAt,
      publishedAt: data.publishedAt,
      faqs: data.faqs || [],
      keywords: data.keywords || [],
    },
    content,
  }
}

// Get all articles (for sitemap generation)
export function getAllArticles(): ArticleMeta[] {
  const articles: ArticleMeta[] = []

  // Get pillar pages
  PILLARS.forEach((pillar) => {
    const pillarArticle = getPillarBySlug(pillar.slug)
    if (pillarArticle) {
      articles.push(pillarArticle.meta)
    }

    // Get cluster pages
    const clusters = getClustersByPillar(pillar.slug)
    articles.push(...clusters)
  })

  // Get comparison pages
  const comparisons = getComparisonArticles()
  articles.push(...comparisons)

  return articles
}

// Get pillar info by slug
export function getPillarInfo(slug: string) {
  return PILLARS.find((p) => p.slug === slug)
}

// Blog post interface
export interface BlogPostMeta {
  slug: string
  title: string
  description: string
  publishedAt: string
  updatedAt?: string
  author?: string
  readingTime: string
  wordCount: number
  tags?: string[]
  featured?: boolean
}

export interface BlogPost {
  meta: BlogPostMeta
  content: string
}

// Get all blog posts (sorted by date, newest first)
export function getBlogPosts(): BlogPostMeta[] {
  const blogPath = path.join(contentDirectory, 'blog')

  if (!fs.existsSync(blogPath)) return []

  const files = fs.readdirSync(blogPath).filter((file) => file.endsWith('.mdx'))

  return files
    .map((file) => {
      const filePath = path.join(blogPath, file)
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)
      const slug = file.replace('.mdx', '')

      return {
        slug,
        title: data.title,
        description: data.description,
        publishedAt: data.publishedAt,
        updatedAt: data.updatedAt,
        author: data.author,
        readingTime: stats.text,
        wordCount: stats.words,
        tags: data.tags || [],
        featured: data.featured || false,
      }
    })
    .sort((a, b) => {
      return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    })
}

// Get a specific blog post
export function getBlogPostBySlug(slug: string): BlogPost | null {
  const postPath = path.join(contentDirectory, 'blog', `${slug}.mdx`)

  if (!fs.existsSync(postPath)) return null

  const fileContents = fs.readFileSync(postPath, 'utf8')
  const { data, content } = matter(fileContents)
  const stats = readingTime(content)

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      publishedAt: data.publishedAt,
      updatedAt: data.updatedAt,
      author: data.author,
      readingTime: stats.text,
      wordCount: stats.words,
      tags: data.tags || [],
      featured: data.featured || false,
    },
    content,
  }
}
