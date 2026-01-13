// JSON-LD Schema components for SEO

interface ArticleSchemaProps {
  title: string
  description: string
  url: string
  publishedAt?: string
  updatedAt?: string
  wordCount?: number
}

export function ArticleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  wordCount,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    wordCount: wordCount,
    author: {
      "@type": "Organization",
      name: "TaxFolio",
      url: "https://taxfolio.io",
    },
    publisher: {
      "@type": "Organization",
      name: "TaxFolio",
      url: "https://taxfolio.io",
      logo: {
        "@type": "ImageObject",
        url: "https://taxfolio.io/logo.webp",
      },
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface FAQSchemaProps {
  faqs: Array<{ question: string; answer: string }>
}

export function FAQSchema({ faqs }: FAQSchemaProps) {
  if (!faqs || faqs.length === 0) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface BreadcrumbItem {
  name: string
  url: string
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[]
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

interface HowToStep {
  name: string
  text: string
}

interface HowToSchemaProps {
  name: string
  description: string
  steps: HowToStep[]
}

export function HowToSchema({ name, description, steps }: HowToSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: name,
    description: description,
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.name,
      text: step.text,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TaxFolio",
    url: "https://taxfolio.io",
    logo: "https://taxfolio.io/logo.webp",
    description: "AI-powered tax software for UK self-employed and landlords",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
    },
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "TaxFolio",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "29",
      priceCurrency: "GBP",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "150",
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
