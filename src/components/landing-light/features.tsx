"use client"

import { Lightbulb, Check, Circle, TrendingUp } from "lucide-react"

export function FeaturesLight() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Feature 1: Bank Connection */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="bg-blue-50 rounded-3xl p-8 flex justify-center">
            <div className="w-64 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden p-4">
                <p className="text-sm font-semibold text-gray-700 mb-4">
                  How would you prefer to share your income and tax details?
                </p>

                <div className="space-y-3">
                  <div className="p-3 border-2 border-emerald-500 bg-emerald-50 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs bg-emerald-500 text-white px-2 py-0.5 rounded-full">Recommended</span>
                    </div>
                    <p className="font-semibold text-sm">Connect Bank Account</p>
                    <p className="text-xs text-gray-500">Link securely. We&apos;ll categorise transactions automatically.</p>
                  </div>

                  <div className="p-3 border border-gray-200 rounded-xl">
                    <p className="font-semibold text-sm">Upload Bank Statements</p>
                    <p className="text-xs text-gray-500">Upload CSV or PDF statements</p>
                  </div>

                  <div className="p-3 border border-gray-200 rounded-xl">
                    <p className="font-semibold text-sm">Continue Manually</p>
                    <p className="text-xs text-gray-500">Enter transactions yourself</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-emerald-600 font-semibold mb-2">Easy</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Your Financial Data, Effortlessly Collected</h3>
            <p className="text-gray-600 text-lg">
              Connect your bank or upload a simple spreadsheet. We&apos;ll pull in all your business transactions so you
              can quickly review income and expenses. No guesswork, no missed details.
            </p>
          </div>
        </div>

        {/* Feature 2: AI Categorisation */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1">
            <p className="text-emerald-600 font-semibold mb-2">Smart</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-Powered Transaction Sorting</h3>
            <p className="text-gray-600 text-lg mb-6">
              Our AI analyses every transaction and automatically assigns the correct HMRC category. Mileage, software
              subscriptions, office supplies - it knows them all.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-500">95%</p>
                <p className="text-sm text-gray-500">Auto-categorised</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-emerald-500">2 min</p>
                <p className="text-sm text-gray-500">Average review time</p>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2 bg-emerald-50 rounded-3xl p-8 flex justify-center">
            <div className="bg-white rounded-2xl shadow-lg p-4 w-72">
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-amber-500 w-5 h-5" />
                <span className="font-semibold">Smart Tax Review</span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <Check className="text-emerald-500 w-4 h-4" />
                  <span className="text-sm text-emerald-600">Income analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="text-gray-300 w-4 h-4" />
                  <span className="text-sm text-gray-500">Allowances & relief check</span>
                </div>
                <div className="flex items-center gap-2">
                  <Circle className="text-gray-300 w-4 h-4" />
                  <span className="text-sm text-gray-500">Checking deductions</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="text-blue-500 w-4 h-4" />
                    <span className="font-semibold text-sm">Smart Suggestion</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    You can claim £312 for home office expenses. Want us to add this?
                  </p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Lightbulb className="text-amber-500 w-4 h-4" />
                    <span className="font-semibold text-sm">Smart Suggestion</span>
                  </div>
                  <p className="text-xs text-gray-600">We found 847 business miles. That&apos;s £380 in deductions!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 3: Real-time Tax */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-amber-50 rounded-3xl p-8 flex justify-center">
            <div className="w-64 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden p-4">
                <div className="text-center mb-4">
                  <p className="text-xs text-gray-500">Your Estimated Tax</p>
                  <p className="text-4xl font-bold text-gray-900">£6,247</p>
                  <p className="text-xs text-gray-500">Updated just now</p>
                </div>

                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Income Tax</span>
                    <span className="text-sm font-semibold">£4,892</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">National Insurance</span>
                    <span className="text-sm font-semibold">£1,355</span>
                  </div>
                </div>

                <div className="bg-green-100 rounded-xl p-3 text-center">
                  <TrendingUp className="text-green-500 w-5 h-5 mx-auto mb-1" />
                  <p className="text-xs text-green-700 font-medium">You&apos;re saving £847 with TaxFolio!</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-emerald-600 font-semibold mb-2">Real-time</p>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Know Exactly What You Owe. Always.</h3>
            <p className="text-gray-600 text-lg mb-6">
              No more end-of-year surprises. See your estimated tax bill update in real-time as you add transactions.
              Plan ahead and never be caught off guard.
            </p>
            <div className="flex items-center gap-2 text-emerald-600">
              <Check className="w-5 h-5" />
              <span>Updates instantly as you work</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
