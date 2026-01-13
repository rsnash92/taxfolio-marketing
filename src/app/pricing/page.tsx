import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Check, X, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing - TaxFolio",
  description: "Simple, transparent pricing for UK freelancers and landlords. Start with a free trial, upgrade when you need more.",
}

const PLANS = {
  free: {
    features: [
      "AI-powered categorisation",
      "Basic tax summary",
      "Bank connection via Open Banking",
    ],
  },
  lite: {
    features: [
      "Everything in Free Trial",
      "1 bank connection",
      "100 transactions/month",
      "SA103 summary",
      "Basic tax summary",
    ],
    notIncluded: [
      "Property income (SA105)",
      "MTD quarterly breakdown",
      "Direct HMRC submission",
    ],
  },
  pro: {
    features: [
      "Unlimited bank connections",
      "Unlimited transactions",
      "SA103 & SA105 summaries",
      "Home office calculator",
      "MTD quarterly breakdown",
      "Direct HMRC submission",
      "Mileage tracker",
      "PDF exports",
      "Priority support",
    ],
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            <Link href="/">
              <Image
                src="/taxfolio.png"
                alt="TaxFolio"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-12 py-16 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Start with a 30-day free trial. No credit card required.
            Upgrade when you need more.
          </p>
        </div>

        {/* Lifetime Deal Banner */}
        <div className="mb-12 relative rounded-2xl border-2 border-amber-500 bg-amber-50 p-8 text-center">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-amber-500 text-white text-sm font-bold rounded">
            LAUNCH SPECIAL
          </div>
          <div className="flex items-center justify-center gap-2 mb-2">
            <Zap className="h-6 w-6 text-amber-600" />
            <h2 className="text-2xl font-bold text-gray-900">Lifetime Pro Access</h2>
          </div>
          <p className="text-amber-800 text-lg mb-2">
            Pay once, use forever. All Pro features for <strong className="text-gray-900">£49.99</strong>
          </p>
          <p className="text-amber-700 font-medium mb-6">
            Limited time offer - only available during launch!
          </p>
          <a href="https://app.taxfolio.io/signup">
            <button className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white font-semibold rounded-full px-8 py-3 hover:opacity-90 transition-opacity">
              Get Lifetime Access
            </button>
          </a>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Free Trial */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Free Trial</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">£0</span>
              <span className="text-gray-600">/30 days</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">Try all Pro features free</p>

            <ul className="mt-8 space-y-4">
              {PLANS.free.features.map((feature) => (
                <li key={feature} className="flex items-start text-sm text-gray-700">
                  <Check className="h-5 w-5 text-[#00a8b0] mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              <li className="flex items-start text-sm text-gray-500">
                <Check className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                1 bank connection limit
              </li>
              <li className="flex items-start text-sm text-gray-500">
                <Check className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                100 transactions/month
              </li>
            </ul>

            <div className="mt-8">
              <a href="https://app.taxfolio.io/signup">
                <button className="w-full border-2 border-gray-300 text-gray-700 font-semibold rounded-full px-6 py-3 hover:bg-gray-50 transition-colors">
                  Start Free Trial
                </button>
              </a>
            </div>
          </div>

          {/* Lite */}
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900">Lite</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">£69.99</span>
              <span className="text-gray-600">/year</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">Perfect for simple freelancers</p>

            <ul className="mt-8 space-y-4">
              {PLANS.lite.features.map((feature) => (
                <li key={feature} className="flex items-start text-sm text-gray-700">
                  <Check className="h-5 w-5 text-[#00a8b0] mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              {PLANS.lite.notIncluded?.map((feature) => (
                <li key={feature} className="flex items-start text-sm text-gray-400">
                  <X className="h-5 w-5 text-gray-300 mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href="https://app.taxfolio.io/signup">
                <button className="w-full border-2 border-gray-300 text-gray-700 font-semibold rounded-full px-6 py-3 hover:bg-gray-50 transition-colors">
                  Get Started
                </button>
              </a>
            </div>
          </div>

          {/* Pro */}
          <div className="rounded-2xl border-2 border-[#00e3ec] bg-white p-8 relative shadow-lg">
            <div className="absolute -top-3 right-4 px-3 py-1 bg-[#00e3ec] text-gray-900 text-xs font-bold rounded">
              MOST POPULAR
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Pro</h3>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">£129.99</span>
              <span className="text-gray-600">/year</span>
            </div>
            <p className="text-gray-600 text-sm mt-2">For landlords & serious freelancers</p>

            <ul className="mt-8 space-y-4">
              {PLANS.pro.features.map((feature) => (
                <li key={feature} className="flex items-start text-sm text-gray-700">
                  <Check className="h-5 w-5 text-[#00a8b0] mr-3 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <a href="https://app.taxfolio.io/signup">
                <button className="w-full bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white font-semibold rounded-full px-6 py-3 hover:opacity-90 transition-opacity">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What happens after my trial ends?</h3>
              <p className="text-gray-600 text-sm">
                After 30 days, you&apos;ll need to choose a paid plan to continue using TaxFolio.
                Your data is kept safe for 30 days after trial expiry.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Can I switch plans later?</h3>
              <p className="text-gray-600 text-sm">
                Yes! You can upgrade from Lite to Pro at any time. The price difference is prorated
                for the remainder of your billing period.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">What&apos;s included in the lifetime deal?</h3>
              <p className="text-gray-600 text-sm">
                The lifetime deal includes all Pro features, forever. No recurring payments.
                It&apos;s a one-time purchase that gives you unlimited access to TaxFolio.
              </p>
            </div>
            <div className="p-6 bg-white border border-gray-200 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600 text-sm">
                Yes. We use bank-level encryption and never store your bank credentials.
                Open Banking connections are handled by Plaid, a trusted financial data provider.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Image
                src="/taxfolio.png"
                alt="TaxFolio"
                width={140}
                height={35}
                className="h-8 w-auto brightness-0 invert"
              />
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} TaxFolio. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
