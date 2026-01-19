import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Clock, Calendar, ChevronRight, ArrowRight, Lock } from "lucide-react"
import type { ArticleMeta } from "@/lib/mdx"

interface GuideLayoutProps {
  meta: ArticleMeta
  pillarInfo?: {
    slug: string
    title: string
  }
  clusters?: ArticleMeta[]
  children: React.ReactNode
}

export function GuideLayout({ meta, pillarInfo, clusters, children }: GuideLayoutProps) {
  const isPillarPage = !meta.pillar

  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src="/taxfolio.png"
                alt="Taxfolio"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/#features" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Features
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Pricing
              </Link>
              <Link href="/resources" className="text-[#00a8b0] font-medium text-sm">
                Resources
              </Link>
              <Link href="/#faq" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                FAQ
              </Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/login"
                className="inline-flex items-center gap-2 px-5 py-2 text-gray-700 font-medium text-sm rounded-full border border-gray-200 hover:border-gray-300 transition-colors bg-white"
              >
                <Lock className="w-3.5 h-3.5" />
                Login
              </Link>
              <Link
                href="https://intro.taxfolio.io"
                className="px-5 py-2 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white font-medium text-sm rounded-full hover:from-[#1e293b] hover:to-[#334155] transition-all"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumbs */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/resources" className="text-gray-500 hover:text-gray-900 transition-colors">
              Resources
            </Link>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            {pillarInfo && meta.pillar ? (
              <>
                <Link
                  href={`/${pillarInfo.slug}`}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  {pillarInfo.title}
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-gray-900 truncate max-w-xs font-medium">{meta.title}</span>
              </>
            ) : (
              <span className="text-gray-900 font-medium">{meta.title}</span>
            )}
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-4">
              {meta.title}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">{meta.description}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {meta.readingTime}
              </span>
              {meta.updatedAt && (
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  Updated {new Date(meta.updatedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-6 lg:px-12 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Article Content */}
          <article>
            {/* CTA Banner */}
            <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl p-6 mb-10">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Ready to simplify your taxes?
                  </h3>
                  <p className="text-gray-400 text-sm">
                    TaxFolio automates expense tracking and MTD submissions.
                  </p>
                </div>
                <Link
                  href="https://intro.taxfolio.io"
                  className="inline-flex items-center gap-2 bg-[#00e3ec] text-black px-5 py-2.5 rounded-full hover:bg-[#00d4dc] transition-colors font-medium whitespace-nowrap text-sm"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Content */}
            <div className="article-content max-w-none">
              {children}
            </div>

            {/* FAQs Section */}
            {meta.faqs && meta.faqs.length > 0 && (
              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {meta.faqs.map((faq, index) => (
                    <details key={index} className="group bg-white rounded-xl border border-gray-200">
                      <summary className="flex items-center justify-between p-5 cursor-pointer font-semibold text-gray-900">
                        {faq.question}
                        <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 text-gray-600">
                        {faq.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom CTA */}
            <div className="mt-10 bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Take control of your taxes today
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                Join thousands of UK taxpayers using TaxFolio to automate their
                self-assessment and stay MTD compliant.
              </p>
              <Link
                href="https://intro.taxfolio.io"
                className="inline-flex items-center gap-3 pl-2 pr-6 py-2 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-full font-semibold hover:from-[#1e293b] hover:to-[#334155] transition-all"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#0f172a] stroke-[3]" />
                </span>
                Get Started Free
              </Link>
            </div>
            {/* Related Articles Section (on pillar pages) */}
            {isPillarPage && clusters && clusters.length > 0 && (
              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  In This Guide
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {clusters.map((cluster) => (
                    <Link
                      key={cluster.slug}
                      href={`/${meta.slug}/${cluster.slug}`}
                      className="block p-4 rounded-xl bg-white border border-gray-200 hover:border-[#00e3ec] hover:shadow-lg transition-all group"
                    >
                      <span className="text-base font-medium text-gray-900 group-hover:text-[#00a8b0] transition-colors block mb-1">
                        {cluster.title}
                      </span>
                      <span className="text-sm text-gray-500">
                        {cluster.readingTime}
                      </span>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Back to pillar link (on cluster pages) */}
            {!isPillarPage && pillarInfo && (
              <div className="mt-10 pt-6 border-t border-gray-200">
                <Link
                  href={`/${pillarInfo.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#00a8b0] transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to {pillarInfo.title}
                </Link>
              </div>
            )}
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <Link href="/" className="flex items-center mb-4">
                <Image
                  src="/taxfolio.png"
                  alt="Taxfolio"
                  width={140}
                  height={35}
                  className="h-8 w-auto brightness-0 invert"
                />
              </Link>
              <p className="text-gray-400 text-sm">Self-assessment, sorted by AI.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/#pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
                <li><Link href="https://intro.taxfolio.io" className="text-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">Tax Guides</Link></li>
                <li><Link href="/making-tax-digital" className="text-gray-400 hover:text-white transition-colors">MTD Guide</Link></li>
                <li><Link href="/#faq" className="text-gray-400 hover:text-white transition-colors">Help Centre</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm text-center mb-2">
              © {new Date().getFullYear()} TAXFOLIO LTD. All rights reserved. Company registered in England & Wales (16482604).
            </p>
            <p className="text-gray-600 text-xs text-center">
              Bank connections provided by TrueLayer, authorised by the FCA. TaxFolio is not a financial advisor or accountant.
              Please consult a qualified accountant or tax advisor for complex tax matters.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
