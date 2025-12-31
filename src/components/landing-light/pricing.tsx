import { Check, Star } from "lucide-react"

const plans = [
  {
    name: "Lite",
    price: "£69.99",
    period: "/year",
    description: "Perfect for sole traders just starting out",
    features: [
      "Self-employment income (SA103)",
      "Bank connections",
      "AI categorisation",
      "MTD quarterly updates",
      "HMRC submission",
    ],
    cta: "Start Free Trial",
    popular: false,
    highlight: false,
  },
  {
    name: "Pro",
    price: "£129.99",
    period: "/year",
    description: "For landlords and property owners",
    features: [
      "Everything in Lite, plus:",
      "Property income (SA105)",
      "Multiple properties",
      "Ask TaxFolio AI assistant",
      "Smart tax suggestions",
      "Priority support",
    ],
    cta: "Start Free Trial",
    popular: true,
    highlight: false,
  },
  {
    name: "Lifetime",
    price: "£249.99",
    period: "one-time",
    description: "Pay once, use forever",
    features: [
      "Everything in Pro",
      "All future updates",
      "Lifetime access",
      "No recurring fees",
    ],
    cta: "Get Lifetime Access",
    popular: false,
    highlight: true,
  },
]

export function PricingLight() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Save money and time with TaxFolio</h2>
          <p className="text-xl text-gray-600">
            Smarter tax solutions at a fraction of the cost of a traditional accountant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 transition-shadow ${
                plan.popular
                  ? "border-2 border-emerald-500 shadow-lg relative"
                  : plan.highlight
                    ? "border border-gray-200 bg-gradient-to-b from-amber-50 to-white hover:shadow-lg"
                    : "border border-gray-200 hover:shadow-lg"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </div>
              <p className="text-gray-600 text-sm mb-6">{plan.description}</p>

              <a href="https://app.taxfolio.io/signup">
                <button
                  className={`w-full py-3 rounded-full font-semibold mb-6 transition-colors ${
                    plan.highlight
                      ? "bg-gray-900 hover:bg-gray-800 text-white"
                      : "bg-emerald-500 hover:bg-emerald-600 text-white"
                  }`}
                >
                  {plan.cta}
                </button>
              </a>

              <ul className="space-y-3 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {plan.highlight && index === plan.features.length - 1 ? (
                      <Star className="text-amber-500 w-4 h-4 flex-shrink-0" />
                    ) : (
                      <Check className="text-emerald-500 w-4 h-4 flex-shrink-0" />
                    )}
                    <span>{feature}</span>
                  </li>
                ))}
                {plan.highlight && (
                  <li className="flex items-center gap-2">
                    <Star className="text-amber-500 w-4 h-4 flex-shrink-0" />
                    <span>Best value!</span>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8">
          All prices include VAT. 14-day free trial, no credit card required.
        </p>
      </div>
    </section>
  )
}
