import { Check, Clock, X } from 'lucide-react'

const supported = [
  'Self-employment income (SA103)',
  'Property/rental income (SA105)',
  'Business mileage claims',
  'Home office deduction',
  'Quarterly MTD updates',
  'AI transaction categorisation',
  'Bank account connections',
  'PDF tax summaries',
]

const comingSoon = [
  'Capital gains (SA108)',
  'Dividend income',
  'Multiple employments',
  'Receipt scanning',
]

const notSupported = [
  'Foreign income (SA106)',
  'Partnership income',
  'VAT-registered businesses',
  'Limited companies',
]

export function SupportedFeatures() {
  return (
    <section className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Built for UK sole traders & landlords
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            TaxFolio handles the most common self-assessment scenarios.
            Check below to make sure we&apos;re right for you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Supported */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-[#15e49e]/20 rounded-lg">
                <Check className="h-5 w-5 text-[#15e49e]" />
              </div>
              <h3 className="font-semibold text-white">Supported</h3>
            </div>
            <ul className="space-y-3">
              {supported.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Check className="h-4 w-4 text-[#15e49e] mt-0.5 shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coming Soon */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-amber-500/20 rounded-lg">
                <Clock className="h-5 w-5 text-amber-500" />
              </div>
              <h3 className="font-semibold text-white">Coming Soon</h3>
            </div>
            <ul className="space-y-3">
              {comingSoon.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <Clock className="h-4 w-4 text-amber-500 mt-0.5 shrink-0" />
                  <span className="text-zinc-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not Supported */}
          <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-1.5 bg-zinc-600/20 rounded-lg">
                <X className="h-5 w-5 text-zinc-500" />
              </div>
              <h3 className="font-semibold text-white">Not Supported</h3>
            </div>
            <ul className="space-y-3">
              {notSupported.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <X className="h-4 w-4 text-zinc-500 mt-0.5 shrink-0" />
                  <span className="text-zinc-500">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-zinc-500 mt-4">
              These require specialist software or an accountant.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
