"use client"

import { Star, Crown } from "lucide-react"
import Image from "next/image"

export function HeroLight() {
  return (
    <section className="bg-gradient-to-b from-emerald-50 to-white pt-32 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Ready for Making Tax Digital 2026
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your Self Assessment
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">
              in 15 minutes
            </span>{" "}
            <span className="inline-block">✨</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-4">
            Pay less tax, zero stress. TaxFolio handles the figures while you just confirm and relax.
          </p>
          <p className="text-lg text-gray-500 mb-8">No accountant needed.</p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                TrustScore <strong>4.8</strong>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm text-gray-600">Google Reviews</span>
            </div>
            <div className="flex items-center gap-2">
              <Crown className="text-emerald-500 w-4 h-4" />
              <span className="text-sm text-gray-600">HMRC Recognised</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-5 py-3 border border-gray-300 rounded-full w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <a href="https://app.taxfolio.io/signup">
              <button className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors">
                Start for Free
              </button>
            </a>
          </div>

          {/* Social Login */}
          <div className="flex justify-center gap-3 mb-6">
            <button className="flex items-center gap-2 px-6 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="font-medium">Google</span>
            </button>
            <button className="flex items-center gap-2 px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-colors">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <span className="font-medium">Apple</span>
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-xs font-medium text-emerald-700">
                S
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-xs font-medium text-blue-700">
                J
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-white bg-purple-200 flex items-center justify-center text-xs font-medium text-purple-700">
                M
              </div>
            </div>
            <span className="text-gray-600">
              Trusted by <strong className="text-emerald-600">5,000+</strong> sole traders across UK
            </span>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex justify-center items-end gap-4 mt-16">
          {/* Left illustration */}
          <div className="hidden md:block text-center">
            <div className="w-32 h-32 bg-emerald-100 rounded-2xl flex flex-col items-center justify-center mb-4">
              <svg className="w-10 h-10 text-emerald-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow">
                <svg className="w-5 h-5 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Securely connect your
              <br />
              bank accounts.
            </p>
          </div>

          {/* Center Phone */}
          <div className="drop-shadow-2xl">
            <div className="w-80 bg-gray-900 rounded-[3rem] p-3">
              <div className="bg-white rounded-[2.5rem] overflow-hidden">
                {/* Status bar */}
                <div className="flex justify-between items-center px-6 py-2 text-xs text-gray-500">
                  <span>09:41</span>
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                  </div>
                </div>

                {/* App content */}
                <div className="px-5 pb-6">
                  <div className="text-center mb-4">
                    <p className="text-xs text-gray-500">Tax Year 2025-26</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-gray-50 rounded-xl p-2 text-center">
                      <p className="text-[10px] text-gray-500">Income</p>
                      <p className="text-base font-bold text-emerald-500">£52,340</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-2 text-center">
                      <p className="text-[10px] text-gray-500">Expenses</p>
                      <p className="text-base font-bold text-red-500">£12,847</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-2 text-center">
                      <p className="text-[10px] text-gray-500">Tax Due</p>
                      <p className="text-base font-bold text-gray-900">£6,247</p>
                    </div>
                  </div>

                  {/* Transactions */}
                  <p className="text-sm font-semibold text-gray-700 mb-2">Recent Transactions</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                          <span className="text-orange-500 text-xs font-bold">A</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Amazon</p>
                          <p className="text-xs text-gray-500">Office Supplies</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">£47.99</p>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                          Allowable
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                          <span className="text-red-500 text-xs font-bold">G</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Google Ads</p>
                          <p className="text-xs text-gray-500">Marketing</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">£120.00</p>
                        <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full">
                          Allowable
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-200">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                          <span className="text-amber-500 text-xs font-bold">?</span>
                        </div>
                        <div>
                          <p className="text-sm font-medium">Costa Coffee</p>
                          <p className="text-xs text-amber-600">Needs Review</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold">£4.50</p>
                        <span className="text-xs bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">Review</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right illustration */}
          <div className="hidden md:block text-center">
            <div className="w-32 h-32 bg-amber-100 rounded-2xl flex flex-col items-center justify-center mb-4">
              <svg className="w-10 h-10 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p className="text-gray-700 font-medium text-sm">
              Pay less tax. Get more
              <br />
              back from HMRC.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
