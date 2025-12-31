"use client"

import { CheckCircle2, Shield, Smartphone, Bot } from "lucide-react"

export function Hero() {
  const scrollToFeatures = () => {
    const element = document.querySelector("#how-it-works")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#15e49e]/10 border border-[#15e49e]/20 text-[#15e49e] text-sm mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#15e49e] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#15e49e]"></span>
          </span>
          Ready for Making Tax Digital 2026
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
          <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
            Your self-assessment,
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#15e49e] to-[#12c98a] bg-clip-text text-transparent">
            sorted.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-4">
          From your phone or browser. No accountant needed.
        </p>

        {/* Audience callout */}
        <p className="text-lg text-zinc-300 mb-8">
          <span className="text-white font-medium">Freelancer?</span>{' '}
          <span className="text-white font-medium">Sole trader?</span>{' '}
          <span className="text-white font-medium">Landlord?</span>{' '}
          <span className="text-white font-medium">Side hustler?</span>
          <br />
          We&apos;ve got you covered.
        </p>

        {/* Trust points */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-400 mb-8">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-4 w-4 text-[#15e49e]" />
            HMRC MTD ready
          </span>
          <span className="flex items-center gap-1.5">
            <Bot className="h-4 w-4 text-[#15e49e]" />
            AI-powered categorisation
          </span>
          <span className="flex items-center gap-1.5">
            <Shield className="h-4 w-4 text-[#15e49e]" />
            Bank-level security
          </span>
          <span className="flex items-center gap-1.5">
            <Smartphone className="h-4 w-4 text-[#15e49e]" />
            UK-based support
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
          <a href="https://app.taxfolio.io/signup">
            <button className="btn-brand text-lg">
              START FREE TRIAL
            </button>
          </a>
          <button
            className="btn-brand-outline text-lg"
            onClick={scrollToFeatures}
          >
            VIEW PRICING
          </button>
        </div>

        {/* No credit card */}
        <p className="text-sm text-zinc-500 mb-16">
          No credit card required
        </p>

        {/* App Screenshot Placeholder */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-[#15e49e]/20 to-blue-500/20 blur-3xl opacity-30" />
          <div className="relative rounded-xl border border-zinc-800 bg-zinc-900/50 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
              <div className="w-3 h-3 rounded-full bg-zinc-700" />
            </div>
            <div className="p-8 md:p-12">
              {/* Simulated Dashboard */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <p className="text-sm text-zinc-400 mb-1">Income</p>
                  <p className="text-2xl font-bold text-[#15e49e]">£52,340</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <p className="text-sm text-zinc-400 mb-1">Expenses</p>
                  <p className="text-2xl font-bold text-red-400">£12,847</p>
                </div>
                <div className="bg-zinc-800/50 rounded-lg p-4 border border-zinc-700">
                  <p className="text-sm text-zinc-400 mb-1">Estimated Tax</p>
                  <p className="text-2xl font-bold text-white">£6,247</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#15e49e]" />
                    <span className="text-sm text-zinc-300">Adobe Creative Cloud</span>
                  </div>
                  <span className="text-sm text-zinc-400">Software & Subscriptions</span>
                </div>
                <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#15e49e]" />
                    <span className="text-sm text-zinc-300">Train to London</span>
                  </div>
                  <span className="text-sm text-zinc-400">Travel & Subsistence</span>
                </div>
                <div className="flex items-center justify-between bg-zinc-800/30 rounded-lg p-3 border border-zinc-700/50">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="text-sm text-zinc-300">Amazon Marketplace</span>
                  </div>
                  <span className="text-sm text-amber-400">Needs Review</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
