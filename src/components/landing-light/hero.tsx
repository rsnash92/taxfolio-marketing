"use client"

import { useState } from "react"
import { Star, Crown } from "lucide-react"

export function HeroLight() {
  const [email, setEmail] = useState("")

  const handleSignup = () => {
    const signupUrl = email
      ? `https://app.taxfolio.io/signup?email=${encodeURIComponent(email)}`
      : "https://app.taxfolio.io/signup"
    window.location.href = signupUrl
  }

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
              Sorted in 15 Minutes
            </span>{" "}
            <span className="inline-block">✨</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl text-gray-600 mb-2">
            Pay less tax, zero stress.
          </p>
          <p className="text-lg text-gray-500 mb-8">
            AI automatically categorises your expenses and calculates your tax.
          </p>

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
              <span className="text-sm text-gray-600">MTD Compatible</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSignup()}
              className="px-5 py-3 border border-gray-300 rounded-full w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <button
              onClick={handleSignup}
              className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Start for Free
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=face"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                alt="User"
                className="w-8 h-8 rounded-full border-2 border-white object-cover"
              />
            </div>
            <span className="text-gray-600">
              Join the beta <strong className="text-emerald-600">•</strong> Be among the first
            </span>
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="relative flex justify-center items-center gap-4 mt-16">
          {/* Left illustration */}
          <div className="hidden md:flex items-center gap-4">
            <div className="text-center">
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
            {/* Arrow pointing right */}
            <svg className="w-8 h-8 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
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
          <div className="hidden md:flex items-center gap-4">
            {/* Arrow pointing right */}
            <svg className="w-8 h-8 text-gray-300 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
            <div className="text-center">
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
      </div>
    </section>
  )
}
