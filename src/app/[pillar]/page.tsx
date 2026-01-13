import { notFound } from "next/navigation"
import { Metadata } from "next"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPillarBySlug, getClustersByPillar, PILLARS, getPillarInfo } from "@/lib/mdx"
import { GuideLayout } from "@/components/guides/guide-layout"
import { mdxComponents } from "@/components/guides/mdx-components"
import { ArticleSchema, FAQSchema, BreadcrumbSchema } from "@/components/seo/json-ld"
import rehypeSlug from "rehype-slug"
import rehypeAutolinkHeadings from "rehype-autolink-headings"

interface PageProps {
  params: Promise<{ pillar: string }>
}

export async function generateStaticParams() {
  return PILLARS.map((pillar) => ({ pillar: pillar.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { pillar: pillarSlug } = await params
  const article = getPillarBySlug(pillarSlug)
  const pillarInfo = getPillarInfo(pillarSlug)

  if (!article || !pillarInfo) {
    return {}
  }

  return {
    title: `${article.meta.title} | TaxFolio`,
    description: article.meta.description,
    keywords: article.meta.keywords,
    openGraph: {
      title: article.meta.title,
      description: article.meta.description,
      type: "article",
      url: `https://taxfolio.io/${pillarSlug}`,
      siteName: "TaxFolio",
    },
    twitter: {
      card: "summary_large_image",
      title: article.meta.title,
      description: article.meta.description,
    },
    alternates: {
      canonical: `https://taxfolio.io/${pillarSlug}`,
    },
  }
}

export default async function PillarPage({ params }: PageProps) {
  const { pillar: pillarSlug } = await params
  const article = getPillarBySlug(pillarSlug)
  const pillarInfo = getPillarInfo(pillarSlug)

  if (!article || !pillarInfo) {
    notFound()
  }

  const clusters = getClustersByPillar(pillarSlug)
  const url = `https://taxfolio.io/${pillarSlug}`

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
          { name: pillarInfo.title, url },
        ]}
      />

      <GuideLayout
        meta={{ ...article.meta, slug: pillarSlug }}
        clusters={clusters}
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
