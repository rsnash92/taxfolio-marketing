import { Shield, CreditCard, CheckCircle2 } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-zinc-900/50 to-zinc-950">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to take control of your taxes?
        </h2>
        <p className="text-zinc-400 mb-8 max-w-2xl mx-auto text-lg">
          Join thousands of UK sole traders and landlords who&apos;ve made self-assessment simple.
          Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a href="https://app.taxfolio.io/signup">
            <button className="btn-brand text-lg px-8 py-3">
              START FREE TRIAL
            </button>
          </a>
          <a href="/pricing">
            <button className="px-8 py-3 text-lg border border-zinc-700 rounded-full hover:bg-zinc-800 transition-colors">
              View Pricing
            </button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-zinc-400 text-sm mb-4">
          <div className="flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-[#15e49e]" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-[#15e49e]" />
            <span>Bank-level security</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#15e49e]" />
            <span>Cancel anytime</span>
          </div>
        </div>

        <p className="text-zinc-600 text-xs">
          🇬🇧 Built for UK tax by a UK company
        </p>
      </div>
    </section>
  )
}
