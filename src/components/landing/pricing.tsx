import { CheckCircle2, X } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Free Trial",
    price: "£0",
    period: "/30 days",
    description: "Try all Pro features free",
    features: [
      { text: "All Pro features for 30 days", included: true },
      { text: "1 bank connection", included: true },
      { text: "100 transactions/month", included: true },
      { text: "AI categorisation", included: true },
      { text: "No credit card required", included: true },
    ],
    cta: "Start Free Trial",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Lite",
    price: "£49.99",
    period: "/year",
    description: "Perfect for simple freelancers",
    features: [
      { text: "1 bank connection", included: true },
      { text: "100 transactions/month", included: true },
      { text: "AI categorisation", included: true },
      { text: "Full SA103 breakdown", included: true },
      { text: "SA105 (Landlords)", included: false },
      { text: "MTD quarterly breakdown", included: false },
      { text: "CSV/PDF export", included: false },
    ],
    cta: "Get Lite",
    ctaVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Pro",
    price: "£89.99",
    period: "/year",
    description: "For landlords & serious freelancers",
    features: [
      { text: "Unlimited bank connections", included: true },
      { text: "Unlimited transactions", included: true },
      { text: "AI categorisation", included: true },
      { text: "Full SA103 & SA105", included: true },
      { text: "MTD quarterly breakdown", included: true },
      { text: "CSV & PDF export", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Get Pro",
    ctaVariant: "default" as const,
    popular: true,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Simple, honest pricing
        </h2>
        <p className="text-zinc-400 text-center mb-12 max-w-2xl mx-auto">
          Start free, upgrade when you need more. No hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative rounded-2xl p-6 md:p-8",
                plan.popular
                  ? "bg-gradient-to-b from-[#15e49e]/10 to-zinc-900 border-2 border-[#15e49e]/50"
                  : "bg-zinc-900 border border-zinc-800"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-[#15e49e] text-xs font-medium text-zinc-900">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-zinc-400">{plan.period}</span>
                </div>
                <p className="text-zinc-400 text-sm mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3">
                    {feature.included ? (
                      <CheckCircle2 className="w-5 h-5 text-[#15e49e] flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-zinc-600 flex-shrink-0" />
                    )}
                    <span className={cn(
                      "text-sm",
                      feature.included ? "text-zinc-300" : "text-zinc-500"
                    )}>
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="https://app.taxfolio.io/signup" className="block">
                <button
                  className={cn(
                    "w-full",
                    plan.popular
                      ? "btn-brand"
                      : "btn-brand-outline"
                  )}
                >
                  {plan.cta.toUpperCase()}
                </button>
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-zinc-500 text-sm">
          No credit card required. Cancel anytime.
        </p>
      </div>
    </section>
  )
}
