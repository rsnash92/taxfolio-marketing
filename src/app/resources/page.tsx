import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import {
  FileDigit,
  FileText,
  User,
  Home,
  Receipt,
  Bike,
  FolderOpen,
  ArrowRight,
  Clock,
  ChevronRight,
  BookOpen,
  TrendingUp,
  Building2,
  Lock,
} from "lucide-react"
import { PILLARS, getClustersByPillar, getPillarBySlug, getBlogPosts } from "@/lib/mdx"

export const metadata: Metadata = {
  title: "Tax Guides & Resources | TaxFolio",
  description:
    "Free UK tax guides covering Making Tax Digital, self assessment, sole trader tax, landlord tax, and more. Expert advice to help you save money and stay compliant.",
  keywords: [
    "UK tax guides",
    "self assessment help",
    "MTD guide",
    "sole trader tax",
    "landlord tax guide",
    "tax deductions UK",
  ],
}

const pillarIcons: Record<string, React.ElementType> = {
  FileDigit,
  FileText,
  User,
  Home,
  Receipt,
  Bike,
  FolderOpen,
}

export default function ResourcesPage() {
  const pillarsWithCounts = PILLARS.map((pillar) => {
    const clusters = getClustersByPillar(pillar.slug)
    const pillarContent = getPillarBySlug(pillar.slug)
    return {
      ...pillar,
      articleCount: clusters.length + (pillarContent ? 1 : 0),
      hasContent: pillarContent !== null,
    }
  })

  const recentPosts = getBlogPosts().slice(0, 3)

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
              <Link href="/resources" className="text-[#00a8b0] font-medium text-sm">
                Resources
              </Link>
              <Link href="/#pricing" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Pricing
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

      {/* Hero */}
      <section className="py-16 border-b border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00e3ec]/10 border border-[#00e3ec]/20 rounded-full mb-6">
              <BookOpen className="w-4 h-4 text-[#00a8b0]" />
              <span className="text-sm font-medium text-[#00a8b0]">Free Tax Guides</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-gray-900 mb-6">
              Tax Guides &{" "}
              <span className="text-[#00e3ec]">Resources</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              Expert guides to help you navigate UK taxes. From Making Tax Digital
              compliance to maximising your deductions — everything you need to know.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/making-tax-digital"
                className="inline-flex items-center gap-3 pl-2 pr-6 py-2 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-full font-medium hover:from-[#1e293b] hover:to-[#334155] transition-all"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#0f172a] stroke-[3]" />
                </span>
                Start with MTD Guide
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured MTD Banner */}
      <section className="container mx-auto px-6 lg:px-12 -mt-8 relative z-10">
        <Link href="/making-tax-digital" className="block group">
          <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl p-8 md:p-10 shadow-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <div className="px-2.5 py-1 bg-amber-500 text-black text-xs font-bold rounded">
                    DEADLINE APRIL 2026
                  </div>
                  <span className="text-gray-400 text-sm">Featured Guide</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-[#00e3ec] transition-colors">
                  Making Tax Digital: The Complete UK Guide
                </h2>
                <p className="text-gray-400 max-w-xl">
                  Everything you need to know about MTD for Income Tax. Deadlines,
                  requirements, software, and how to prepare before it becomes mandatory.
                </p>
              </div>
              <div className="flex items-center gap-3 text-[#00e3ec] font-medium">
                Read the guide
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* Guide Categories */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Tax Guide Topics
            </h2>
            <p className="text-gray-500">In-depth guides organised by topic</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {pillarsWithCounts.map((pillar) => {
            const Icon = pillarIcons[pillar.icon] || FileText
            const isAvailable = pillar.hasContent

            return (
              <Link
                key={pillar.slug}
                href={isAvailable ? `/${pillar.slug}` : "#"}
                className={`group block p-5 rounded-xl border transition-all ${
                  isAvailable
                    ? "bg-white border-gray-200 hover:border-[#00e3ec] hover:shadow-lg"
                    : "bg-gray-50 border-gray-100 cursor-not-allowed opacity-60"
                }`}
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                  isAvailable
                    ? "bg-[#00e3ec]/10 group-hover:bg-[#00e3ec]/20"
                    : "bg-gray-100"
                }`}>
                  <Icon className={`w-5 h-5 ${isAvailable ? "text-[#00a8b0]" : "text-gray-400"}`} />
                </div>
                <h3 className={`font-semibold mb-1 transition-colors ${
                  isAvailable
                    ? "text-gray-900 group-hover:text-[#00a8b0]"
                    : "text-gray-500"
                }`}>
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3 line-clamp-2">
                  {pillar.description}
                </p>
                <div className="flex items-center gap-1 text-xs">
                  {isAvailable ? (
                    <>
                      <span className="text-[#00a8b0] font-medium">{pillar.articleCount} articles</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#00a8b0]" />
                    </>
                  ) : (
                    <span className="text-gray-400">Coming soon</span>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Recent Blog Posts */}
      {recentPosts.length > 0 && (
        <section className="bg-white border-y border-gray-200">
          <div className="container mx-auto px-6 lg:px-12 py-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                  Latest from the Blog
                </h2>
                <p className="text-gray-500">News, updates, and tax tips</p>
              </div>
              <Link
                href="/blog"
                className="hidden md:inline-flex items-center gap-2 text-[#00a8b0] font-medium hover:underline"
              >
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                    <span>
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span>·</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#00a8b0] transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {post.description}
                  </p>
                </Link>
              ))}
            </div>

            <div className="mt-6 md:hidden text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[#00a8b0] font-medium"
              >
                View all posts
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Popular Topics */}
      <section className="container mx-auto px-6 lg:px-12 py-16">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Popular Topics
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { title: "What is Making Tax Digital?", href: "/making-tax-digital", icon: FileDigit },
            { title: "MTD Deadlines 2025-2027", href: "/making-tax-digital/deadlines", icon: Clock },
            { title: "Sole Trader Expenses Guide", href: "/sole-trader-tax", icon: Receipt },
            { title: "Landlord Tax Guide", href: "/landlord-tax", icon: Home },
            { title: "Working from Home Tax Relief", href: "/tax-deductions", icon: Building2 },
            { title: "Mileage Allowance Rates", href: "/tax-deductions", icon: TrendingUp },
          ].map((topic) => (
            <Link
              key={topic.title}
              href={topic.href}
              className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#00e3ec] hover:shadow-lg transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center group-hover:bg-[#00e3ec]/10 transition-colors">
                <topic.icon className="w-5 h-5 text-gray-500 group-hover:text-[#00a8b0] transition-colors" />
              </div>
              <span className="font-medium text-gray-900 group-hover:text-[#00a8b0] transition-colors">
                {topic.title}
              </span>
              <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#00a8b0] group-hover:translate-x-0.5 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to simplify your taxes?
            </h2>
            <p className="text-gray-400 mb-8">
              TaxFolio automates expense tracking, transaction categorisation, and
              MTD submissions. Join thousands of UK taxpayers saving time and money.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="https://intro.taxfolio.io"
                className="inline-flex items-center gap-3 pl-2 pr-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold text-white transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
                </span>
                Start Free Trial
              </Link>
              <Link
                href="/#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

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
