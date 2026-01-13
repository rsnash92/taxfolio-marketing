import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import {
  getClusterBySlug,
  getClustersByPillar,
  PILLARS,
  getPillarInfo,
} from "@/lib/mdx"
import { GuideLayout } from "@/components/guides/guide-layout"
import { mdxComponents } from "@/components/guides/mdx-components"
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

interface PageProps {
  params: Promise<{ pillar: string; cluster: string }>
}

export async function generateStaticParams() {
  const params: { pillar: string; cluster: string }[] = []

  PILLARS.forEach((pillar) => {
    const clusters = getClustersByPillar(pillar.slug)
    clusters.forEach((cluster) => {
      params.push({ pillar: pillar.slug, cluster: cluster.slug })
    })
  })

  return params
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pillar: pillarSlug, cluster: clusterSlug } = await params
  const article = getClusterBySlug(pillarSlug, clusterSlug)
  const pillarInfo = getPillarInfo(pillarSlug)

  if (!article || !pillarInfo) {
    return {}
  }

  return {
    title: `${article.meta.title} | ${pillarInfo.shortTitle} | TaxFolio`,
    description: article.meta.description,
    keywords: article.meta.keywords,
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      type: "article",
      url: `https://taxfolio.io/${pillarSlug}/${clusterSlug}`,
      siteName: "TaxFolio",
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
    },
    alternates: {
      canonical: `https://taxfolio.io/${pillarSlug}/${clusterSlug}`,
    },
  }
}

export default async function ClusterPage({ params }: PageProps) {
  const { pillar: pillarSlug, cluster: clusterSlug } = await params
  const article = getClusterBySlug(pillarSlug, clusterSlug)
  const pillarInfo = getPillarInfo(pillarSlug)

  if (!article || !pillarInfo) {
    notFound()
  }

  const url = `https://taxfolio.io/${pillarSlug}/${clusterSlug}`

  return (
    <>
      <ArticleSchema
        title={article.meta.title}
        description={article.meta.description}
        url={url}
        publishedAt={article.meta.publishedAt}
        updatedAt={article.meta.updatedAt}
        wordCount={article.meta.wordCount}
      />
      {article.meta.faqs && article.meta.faqs.length > 0 && (
        <FAQSchema faqs={article.meta.faqs} />
      )}
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://taxfolio.io" },
          { name: "Resources", url: "https://taxfolio.io/resources" },
          { name: pillarInfo.title, url: `https://taxfolio.io/${pillarSlug}` },
          { name: article.meta.title, url },
        ]}
      />

      <GuideLayout
        meta={article.meta}
        pillarInfo={{ slug: pillarSlug, title: pillarInfo.title }}
      >
        <MDXRemote
          source={article.content}
          components={mdxComponents}
          options={{
            mdxOptions: {
              rehypePlugins: [
                rehypeSlug,
                [rehypeAutolinkHeadings, { behavior: "wrap" }],
              ],
            },
          }}
        />
      </GuideLayout>
    </>
  )
}
