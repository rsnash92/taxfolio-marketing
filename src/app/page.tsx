"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  ChevronRight,
  Building2,
  Shield,
  Lock,
  Smartphone,
  FileSpreadsheet,
  Calendar,
  CreditCard,
  Cpu,
  Landmark,
  Send,
  Car,
  AlertTriangle,
  CheckCircle2,
  X,
  Clock,
  Check,
  ChevronDown,
  Star,
  Brain,
  Lightbulb,
  Circle,
  TrendingUp,
  Loader2,
  Store,
  Home,
  Laptop,
  Bike,
  FileX,
  CalendarClock,
  PoundSterling,
  BookOpen,
  FileText,
  Receipt,
  Users
} from "lucide-react"

// Bank Connection Animation Component
function BankConnectionMockup() {
  const [step, setStep] = useState(0)
  // Steps: 0 = initial, 1 = clicked, 2 = connecting, 3 = connected, 4 = pause before reset

  useEffect(() => {
    const timings = [2500, 800, 2000, 2000, 500]
    const timer = setTimeout(() => {
      setStep((prev) => (prev + 1) % 5)
    }, timings[step])
    return () => clearTimeout(timer)
  }, [step])

  return (
    <div className="bg-[#00e3ec]/10 rounded-3xl p-8 flex justify-center">
      <div className="w-64 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
        <div className="bg-white rounded-[2rem] overflow-hidden p-4 h-[320px] flex flex-col">
          {step < 3 ? (
            <>
              <p className="text-sm font-semibold text-gray-700 mb-4">
                How would you prefer to share your income and tax details?
              </p>

              <div className="space-y-3">
                {/* Connect Bank Option */}
                <div
                  className={`p-3 rounded-xl transition-all duration-300 ${
                    step === 0
                      ? "border-2 border-[#00e3ec] bg-[#00e3ec]/10"
                      : step === 1
                        ? "border-2 border-[#00e3ec] bg-[#00e3ec]/20 scale-[0.98]"
                        : "border-2 border-[#00e3ec] bg-[#00e3ec]/10"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs bg-[#00e3ec] text-gray-900 font-medium px-2 py-0.5 rounded-full">Recommended</span>
                  </div>
                  <p className="font-semibold text-sm text-gray-900">Connect Bank Account</p>
                  {step === 2 ? (
                    <div className="flex items-center gap-2 mt-1">
                      <Loader2 className="w-3 h-3 text-[#00e3ec] animate-spin" />
                      <p className="text-xs text-[#00a8b0]">Connecting to Barclays...</p>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500">Link securely. We&apos;ll categorise transactions automatically.</p>
                  )}
                </div>

                <div className={`p-3 border border-gray-200 rounded-xl transition-opacity duration-300 ${step >= 1 ? "opacity-50" : ""}`}>
                  <p className="font-semibold text-sm text-gray-900">Upload Bank Statements</p>
                  <p className="text-xs text-gray-500">Upload CSV or PDF statements</p>
                </div>

                <div className={`p-3 border border-gray-200 rounded-xl transition-opacity duration-300 ${step >= 1 ? "opacity-50" : ""}`}>
                  <p className="font-semibold text-sm text-gray-900">Continue Manually</p>
                  <p className="text-xs text-gray-500">Enter transactions yourself</p>
                </div>
              </div>
            </>
          ) : (
            /* Success State */
            <div className="flex-1 flex flex-col justify-center animate-[fadeIn_0.5s_ease-out]">
              <div className="w-16 h-16 mx-auto mb-4 bg-[#00e3ec]/20 rounded-full flex items-center justify-center">
                <Check className="w-8 h-8 text-[#00e3ec] animate-[scaleIn_0.3s_ease-out]" />
              </div>
              <p className="text-center font-semibold text-gray-900 mb-1">Bank Connected!</p>
              <p className="text-center text-xs text-gray-500 mb-4">Barclays Business Account</p>

              <div className="bg-gray-50 rounded-xl p-3 mb-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Transactions found</span>
                  <span className="font-semibold text-[#00e3ec]">247</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
                <Loader2 className="w-3 h-3 animate-spin" />
                <span>Categorising with AI...</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function AlternateHomePage() {
  return (
    <div className="min-h-screen bg-[#f8f9fc]">
      {/* Custom animations for feature mockups */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      {/* Header */}
      <header className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <Image
                src="/taxfolio.png"
                alt="Taxfolio"
                width={140}
                height={35}
                className="h-8 w-auto"
              />
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                Pricing
              </Link>
              <Link href="#faq" className="text-gray-600 hover:text-gray-900 font-medium text-sm transition-colors">
                FAQ
              </Link>
            </nav>

            {/* Auth Buttons */}
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

      {/* Hero Section */}
      <main className="container mx-auto px-6 lg:px-12 pt-16 lg:pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* MTD Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#00e3ec]/10 border border-[#00e3ec]/20 rounded-full mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00e3ec] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00e3ec]"></span>
              </span>
              <span className="text-sm font-medium text-[#00a8b0]">Ready for Making Tax Digital 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight tracking-tight" style={{ fontFamily: 'var(--font-kanit), sans-serif' }}>
              Your Self Assessment
              <br />
              in <span className="text-[#00e3ec]">15 minutes</span>{" "}
              <ArrowRight className="inline-block w-8 h-8 md:w-10 md:h-10 text-[#00e3ec] stroke-[3]" />
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-md">
              Pay less tax, zero stress. TaxFolio handles the figures while you just confirm and relax.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="https://intro.taxfolio.io"
                className="inline-flex items-center gap-3 pl-2 pr-6 py-2 bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white rounded-full font-medium hover:from-[#1e293b] hover:to-[#334155] transition-all shadow-lg"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-[#0f172a] stroke-[3]" />
                </span>
                Get Started for Free
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-full font-medium border border-gray-200 hover:border-gray-300 transition-colors"
              >
                Explore All Features
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face"
                  alt="Beta user"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
                  alt="Beta user"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
                  alt="Beta user"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                  alt="Beta user"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              </div>
              <p className="text-gray-600 text-sm">
                <span className="font-semibold">Join the beta</span> · Be among the first
              </p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center items-center mt-8 lg:mt-0">
            {/* Floating elements around phone - only visible on xl screens */}
            {/* Bank Connected badge - LEFT TOP */}
            <div className="absolute -left-8 top-1/4 hidden xl:block" style={{ animation: 'float 3s ease-in-out infinite' }}>
              <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#00e3ec]/10 rounded-full flex items-center justify-center">
                    <Landmark className="w-4 h-4 text-[#00e3ec]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">Bank Connected</p>
                    <p className="text-[10px] text-gray-500">Securely linked</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Saved badge - RIGHT TOP */}
            <div className="absolute -right-8 top-1/3 hidden xl:block" style={{ animation: 'float 2.5s ease-in-out infinite 0.5s' }}>
              <div className="bg-white rounded-2xl shadow-xl p-3 border border-gray-100">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-green-500" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-900">£2,340 saved</p>
                    <p className="text-[10px] text-gray-500">In deductions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MTD Ready badge - LEFT BOTTOM */}
            <div className="absolute -left-8 bottom-1/4 hidden xl:block" style={{ animation: 'float 3.5s ease-in-out infinite 1s' }}>
              <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl shadow-xl p-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#00e3ec]/20 rounded-full flex items-center justify-center">
                    <Building2 className="w-4 h-4 text-[#00e3ec]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white">MTD Ready</p>
                    <p className="text-[10px] text-gray-400">HMRC compliant</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Phone - Static */}
            <div className="drop-shadow-2xl relative">
              <div className="w-[290px] md:w-[310px] lg:w-[300px] bg-gray-900 rounded-[2.5rem] p-2.5 relative">
                {/* Phone notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-900 rounded-b-xl z-10" />

                <div className="bg-white rounded-[2rem] overflow-hidden">
                  {/* Status bar */}
                  <div className="flex justify-between items-center px-6 py-2 text-[10px] text-gray-500">
                    <span className="font-medium">09:41</span>
                    <div className="flex items-center gap-1">
                      <div className="flex gap-0.5">
                        <div className="w-0.5 h-2 bg-gray-400 rounded-sm"></div>
                        <div className="w-0.5 h-2 bg-gray-400 rounded-sm"></div>
                        <div className="w-0.5 h-2 bg-gray-300 rounded-sm"></div>
                      </div>
                      <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>

                  {/* App content */}
                  <div className="px-4 pb-5">
                    {/* AI Processing Banner with shimmer */}
                    <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-xl p-3 mb-4 relative overflow-hidden">
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent" style={{ animation: 'shimmer 2s infinite' }} />
                      <div className="relative flex items-center gap-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 bg-[#00e3ec] rounded-full animate-pulse" />
                          <Brain className="w-4 h-4 text-[#00e3ec] animate-pulse" />
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-semibold text-sm">AI Categorising</p>
                          <p className="text-gray-400 text-xs">247 transactions</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-[#00e3ec] rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-[#00e3ec]/60 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-[#00e3ec]/30 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-50 rounded-xl p-2 text-center">
                        <p className="text-[10px] text-gray-500">Income</p>
                        <p className="text-base font-bold text-[#00e3ec]">£52k</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2 text-center">
                        <p className="text-[10px] text-gray-500">Expenses</p>
                        <p className="text-base font-bold text-red-500">£12k</p>
                      </div>
                      <div className="bg-gray-50 rounded-xl p-2 text-center">
                        <p className="text-[10px] text-gray-500">Tax Due</p>
                        <p className="text-base font-bold text-gray-900">£6k</p>
                      </div>
                    </div>

                    {/* Transactions */}
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold text-gray-900 text-sm">Recent</p>
                      <span className="text-xs text-[#00e3ec] font-medium">See all</span>
                    </div>
                    <div className="space-y-2">
                      {/* Transaction 1 */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-orange-100 rounded-lg flex items-center justify-center">
                            <span className="text-orange-500 text-sm font-bold">A</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">Amazon</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <Brain className="w-2.5 h-2.5 text-violet-500" />
                              <span className="text-violet-600">Office</span>
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900 text-sm">£47.99</p>
                      </div>

                      {/* Transaction 2 */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                            <span className="text-blue-500 text-sm font-bold">G</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">Google Ads</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <Brain className="w-2.5 h-2.5 text-violet-500" />
                              <span className="text-violet-600">Marketing</span>
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900 text-sm">£120.00</p>
                      </div>

                      {/* Transaction 3 - Expense */}
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-purple-100 rounded-lg flex items-center justify-center">
                            <span className="text-purple-500 text-sm font-bold">Z</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">Zoom</p>
                            <p className="text-xs text-gray-500 flex items-center gap-1">
                              <Brain className="w-2.5 h-2.5 text-violet-500" />
                              <span className="text-violet-600">Software</span>
                            </p>
                          </div>
                        </div>
                        <p className="font-semibold text-gray-900 text-sm">£14.99</p>
                      </div>

                      {/* Transaction 4 - AI suggestion */}
                      <div className="flex items-center justify-between p-3 bg-[#00e3ec]/10 rounded-xl border border-[#00e3ec]/30">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-[#00e3ec]/20 rounded-lg flex items-center justify-center">
                            <Brain className="w-4 h-4 text-[#00a8b0] animate-pulse" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">Costa</p>
                            <p className="text-xs text-[#00a8b0]">Personal?</p>
                          </div>
                        </div>
                        <div className="flex gap-1.5">
                          <button className="w-7 h-7 bg-white rounded-lg flex items-center justify-center border border-green-200">
                            <Check className="w-3.5 h-3.5 text-green-500" />
                          </button>
                          <button className="w-7 h-7 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                            <X className="w-3.5 h-3.5 text-gray-400" />
                          </button>
                        </div>
                      </div>

                      {/* Transaction 5 - Income */}
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-green-600 text-sm font-bold">£</span>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900 text-sm">Client Pay</p>
                            <p className="text-xs text-green-600">Income</p>
                          </div>
                        </div>
                        <p className="font-semibold text-green-600 text-sm">+£2,500</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-t border-gray-200">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Building2, title: "HMRC Recognised", desc: "MTD compatible software" },
              { icon: Shield, title: "FCA Authorised", desc: "Bank connections via TrueLayer" },
              { icon: Lock, title: "Bank-Level Security", desc: "256-bit encryption" },
              { icon: Smartphone, title: "Works Everywhere", desc: "Phone, tablet & desktop" },
            ].map((badge) => (
              <div key={badge.title} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                <div className="w-12 h-12 rounded-xl bg-[#00e3ec]/10 flex items-center justify-center">
                  <badge.icon className="w-6 h-6 text-[#00e3ec]" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{badge.title}</p>
                  <p className="text-sm text-gray-500">{badge.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tax returns shouldn&apos;t be this hard.
            </h2>
            <p className="text-gray-500">Sound familiar? You&apos;re not alone.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: FileX, title: "Spreadsheet chaos", desc: "Rows of receipts, lost data, hours of manual entry every month." },
              { icon: CalendarClock, title: "January panic", desc: "Scrambling to find receipts before the deadline, stressed and confused." },
              { icon: PoundSterling, title: "Expensive accountants", desc: "£300+ just to file a simple return. Money you'd rather keep." },
            ].map((problem) => (
              <div key={problem.title} className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center mb-3">
                  <problem.icon className="w-5 h-5 text-red-500" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{problem.title}</h3>
                <p className="text-gray-500 text-sm">{problem.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-[#00e3ec] font-semibold">There&apos;s a better way.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-gray-950 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How TaxFolio works
            </h2>
            <p className="text-gray-400">From bank connection to tax clarity in three simple steps.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            {[
              { step: 1, icon: Building2, title: "Connect Bank", desc: "Securely link your business account in seconds via TrueLayer." },
              { step: 2, icon: Cpu, title: "AI Categorises", desc: "Our AI sorts every transaction into the right tax categories automatically." },
              { step: 3, icon: CheckCircle2, title: "Review & Done", desc: "Confirm the AI's suggestions and see your tax position instantly." },
            ].map((item, index) => (
              <div key={item.step} className="relative text-center">
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-1/2 w-full h-px bg-gradient-to-r from-gray-700 to-gray-800" />
                )}

                {/* Step card */}
                <div className="relative">
                  <div className="w-28 h-28 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#00e3ec]/20 to-[#00c4d4]/10 border border-[#00e3ec]/20 flex items-center justify-center">
                    <item.icon className="w-12 h-12 text-[#00e3ec]" />
                  </div>
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-[#00e3ec] text-black flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>

                <h3 className="font-semibold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="https://intro.taxfolio.io"
              className="inline-flex items-center gap-4 pl-2 pr-8 py-2 bg-gray-800 hover:bg-gray-700 rounded-full font-medium text-white transition-colors"
            >
              <span className="w-12 h-12 rounded-full bg-[#00e3ec] flex items-center justify-center">
                <ArrowRight className="w-6 h-6 text-black stroke-[3]" />
              </span>
              Get Started for Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          {/* Feature 1: Bank Connection */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <BankConnectionMockup />

            <div>
              <p className="text-[#00e3ec] font-semibold mb-2">Easy</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Your financial data, effortlessly collected</h3>
              <p className="text-gray-600 text-lg">
                Connect your bank or upload a simple spreadsheet. We&apos;ll pull in all your business transactions so you
                can quickly review income and expenses. No guesswork, no missed details.
              </p>
            </div>
          </div>

          {/* Feature 2: AI Categorisation */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 md:order-1">
              <p className="text-[#00e3ec] font-semibold mb-2">Smart</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">AI-powered transaction sorting</h3>
              <p className="text-gray-600 text-lg mb-6">
                Our AI analyses every transaction and automatically assigns the correct HMRC category. Mileage, software
                subscriptions, office supplies - it knows them all.
              </p>
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#00e3ec]">95%</p>
                  <p className="text-sm text-gray-500">Auto-categorised</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-[#00e3ec]">2 min</p>
                  <p className="text-sm text-gray-500">Average review time</p>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 bg-[#00e3ec]/10 rounded-3xl p-8 flex justify-center">
              <div className="bg-white rounded-2xl shadow-lg p-4 w-72">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="text-amber-500 w-5 h-5 animate-pulse" />
                  <span className="font-semibold text-gray-900">Smart Tax Review</span>
                </div>

                <div className="space-y-2 mb-4">
                  {/* Animated progress - items complete one by one */}
                  <div className="flex items-center gap-2">
                    <Check className="text-[#00e3ec] w-4 h-4" />
                    <span className="text-sm text-[#00a8b0]">Income analysis</span>
                  </div>
                  <div className="flex items-center gap-2 animate-[fadeIn_0.5s_ease-in-out_1s_both]">
                    <Check className="text-[#00e3ec] w-4 h-4 animate-[scaleIn_0.3s_ease-out_1.5s_both]" />
                    <span className="text-sm text-[#00a8b0]">Allowances & relief check</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full border-2 border-[#00e3ec] border-t-transparent animate-spin" />
                    <span className="text-sm text-gray-500">Checking deductions</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {/* Suggestions slide in */}
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 animate-[slideUp_0.5s_ease-out_0.5s_both]">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="text-blue-500 w-4 h-4" />
                      <span className="font-semibold text-sm text-gray-900">Smart Suggestion</span>
                    </div>
                    <p className="text-xs text-gray-600">
                      You can claim £312 for home office expenses. Want us to add this?
                    </p>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 animate-[slideUp_0.5s_ease-out_1s_both]">
                    <div className="flex items-center gap-2 mb-1">
                      <Lightbulb className="text-amber-500 w-4 h-4" />
                      <span className="font-semibold text-sm text-gray-900">Smart Suggestion</span>
                    </div>
                    <p className="text-xs text-gray-600">We found 847 business miles. That&apos;s £380 in deductions!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Real-time Tax */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-[#00e3ec]/10 rounded-3xl p-8 flex justify-center">
              <div className="w-64 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
                <div className="bg-white rounded-[2rem] overflow-hidden p-4">
                  <div className="text-center mb-4">
                    <p className="text-xs text-gray-500">Your Estimated Tax</p>
                    {/* Animated counter effect */}
                    <p className="text-4xl font-bold text-gray-900 animate-[countUp_2s_ease-out_both]">£6,247</p>
                    <p className="text-xs text-gray-500 flex items-center justify-center gap-1">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      Updated just now
                    </p>
                  </div>

                  <div className="bg-[#00e3ec]/10 border border-[#00e3ec]/30 rounded-xl p-3 mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Income Tax</span>
                      <span className="text-sm font-semibold animate-[fadeIn_0.5s_ease-out_0.3s_both]">£4,892</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">National Insurance</span>
                      <span className="text-sm font-semibold animate-[fadeIn_0.5s_ease-out_0.5s_both]">£1,355</span>
                    </div>
                  </div>

                  <div className="bg-[#00e3ec]/20 rounded-xl p-3 text-center animate-[slideUp_0.5s_ease-out_0.8s_both]">
                    <TrendingUp className="text-[#00a8b0] w-5 h-5 mx-auto mb-1 animate-bounce" />
                    <p className="text-xs text-[#00848a] font-medium">You&apos;re saving £847 with TaxFolio!</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <p className="text-[#00e3ec] font-semibold mb-2">Real-time</p>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Know exactly what you owe. Always.</h3>
              <p className="text-gray-600 text-lg mb-6">
                No more end-of-year surprises. See your estimated tax bill update in real-time as you add transactions.
                Plan ahead and never be caught off guard.
              </p>
              <div className="flex items-center gap-2 text-[#00e3ec]">
                <Check className="w-5 h-5" />
                <span>Updates instantly as you work</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Made for Every UK Earner */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Made for every UK earner</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We support every kind of UK earner with fast, accurate HMRC tax filing. It&apos;s time to break up with
              your accountant.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                icon: Store,
                title: "Sole Trader",
                description: "Small business owners, self-employed professionals, side hustlers running your own venture",
                iconColor: "text-[#00a8b0]",
              },
              {
                icon: Home,
                title: "Property Owner",
                description: "Buy-to-let landlords, Airbnb hosts, rent-a-room schemes, commercial property owners",
                iconColor: "text-[#00a8b0]",
              },
              {
                icon: Laptop,
                title: "Freelancers",
                description: "Writers, designers, developers, marketers, consultants juggling multiple clients",
                iconColor: "text-[#00a8b0]",
              },
              {
                icon: Bike,
                title: "Couriers & Drivers",
                description: "Uber Eats, Deliveroo, Amazon Flex, Just Eat and taxi drivers",
                iconColor: "text-[#00a8b0]",
              },
            ].map((audience) => (
              <div
                key={audience.title}
                className="p-6 bg-[#00e3ec]/5 rounded-2xl hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#00e3ec]/20 rounded-xl flex items-center justify-center mb-4">
                  <audience.icon className={`w-6 h-6 ${audience.iconColor}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{audience.title}</h3>
                <p className="text-gray-600 text-sm">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MTD Section */}
      <section className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] py-16">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <AlertTriangle className="w-12 h-12 text-[#00e3ec] mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              April 2026 is coming. Are you ready?
            </h2>
            <p className="text-gray-300 mb-6">
              Making Tax Digital becomes mandatory for sole traders and landlords earning over £50,000.
              That&apos;s 780,000 people who&apos;ll need digital records and quarterly submissions.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {[
                "Digital record keeping",
                "Quarterly updates",
                "Direct HMRC submission",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-200">
                  <CheckCircle2 className="w-5 h-5 text-[#00e3ec]" />
                  {item}
                </div>
              ))}
            </div>
            <Link
              href="https://intro.taxfolio.io"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#00e3ec] text-gray-900 rounded-full font-semibold hover:bg-[#00d4dc] transition-colors"
            >
              Get MTD Ready Now
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Save money and time with TaxFolio</h2>
            <p className="text-lg text-gray-600">
              Smarter tax solutions at a fraction of the cost of a traditional accountant.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Lite */}
            <div className="rounded-2xl p-6 transition-shadow border border-gray-200 hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lite</h3>
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">£29</span>
                <div className="text-gray-500">
                  <span className="text-lg">/return</span>
                  <span className="text-sm ml-1">inc. VAT</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">Perfect for simple freelancers</p>

              <Link
                href="https://intro.taxfolio.io"
                className="flex items-center gap-3 pl-2 pr-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full font-medium text-white transition-colors mb-6"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
                </span>
                Start Free Trial
              </Link>

              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  { text: "1 bank connection", included: true },
                  { text: "100 transactions/month", included: true },
                  { text: "AI categorisation", included: true },
                  { text: "Full SA103 breakdown", included: true },
                  { text: "Direct HMRC submission", included: true },
                  { text: "SA105 (Landlords)", included: false },
                  { text: "MTD quarterly breakdown", included: false },
                  { text: "Priority support", included: false },
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {feature.included ? (
                      <Check className="text-[#00e3ec] w-4 h-4 flex-shrink-0" />
                    ) : (
                      <X className="text-gray-300 w-4 h-4 flex-shrink-0" />
                    )}
                    <span className={feature.included ? "" : "text-gray-400"}>{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro */}
            <div className="rounded-2xl p-6 transition-shadow border-2 border-[#00e3ec] shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-[#00e3ec] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">Pro</h3>
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">£99</span>
                <div className="text-gray-500">
                  <span className="text-lg">/return</span>
                  <span className="text-sm ml-1">inc. VAT</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">For landlords & serious freelancers</p>

              <Link
                href="https://intro.taxfolio.io"
                className="flex items-center gap-3 pl-2 pr-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full font-medium text-white transition-colors mb-6"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
                </span>
                Start Free Trial
              </Link>

              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Unlimited bank connections",
                  "Unlimited transactions",
                  "AI categorisation",
                  "Full SA103 & SA105",
                  "Direct HMRC submission",
                  "MTD quarterly breakdown",
                  "Mileage tracker",
                  "Priority support",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-[#00e3ec] w-4 h-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lifetime */}
            <div className="rounded-2xl p-6 transition-shadow border border-gray-200 bg-gradient-to-b from-amber-50 to-white hover:shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lifetime</h3>
              <div className="mb-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-gray-900">£249</span>
                <div className="text-gray-500">
                  <span className="text-lg">/one-time</span>
                  <span className="text-sm ml-1">inc. VAT</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6">Pay once, use forever</p>

              <Link
                href="https://intro.taxfolio.io"
                className="flex items-center gap-3 pl-2 pr-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full font-medium text-white transition-colors mb-6"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
                </span>
                Get Lifetime Access
              </Link>

              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Everything in Pro",
                  "All future updates",
                  "Lifetime access",
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="text-[#00e3ec] w-4 h-4 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="flex items-center gap-2">
                  <Star className="text-amber-500 w-4 h-4 flex-shrink-0" />
                  <span>No recurring fees</span>
                </li>
                <li className="flex items-center gap-2">
                  <Star className="text-amber-500 w-4 h-4 flex-shrink-0" />
                  <span>Best value!</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All prices include VAT. 14-day free trial, no credit card required.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#f8f9fc] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real stories from happy customers
            </h2>
            <p className="text-lg text-gray-600">Join thousands who&apos;ve simplified their taxes</p>
          </div>

          {/* Featured Testimonial */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg flex items-center justify-center">
              <div className="w-64 bg-gray-900 rounded-[2rem] p-2">
                <div className="bg-white rounded-[1.5rem] p-4">
                  <p className="text-sm text-center text-gray-600">Tax return submitted!</p>
                  <div className="text-center mt-2">
                    <span className="text-2xl">🎉</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] rounded-2xl p-8 text-white flex items-center">
              <div>
                <p className="text-2xl font-bold mb-4">
                  &ldquo;Excellent app! Did my tax return in 15 minutes. Saved me £400 vs my accountant.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#00e3ec]/20 rounded-full flex items-center justify-center text-lg font-bold text-[#00e3ec]">
                    J
                  </div>
                  <div>
                    <p className="font-semibold">James Wilson</p>
                    <p className="text-gray-400">Freelance Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Review Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                name: "Sarah Thompson",
                initial: "S",
                bgColor: "bg-[#00e3ec]/20",
                textColor: "text-[#00a8b0]",
                quote: "Finally, tax software that doesn't make me want to cry. The AI categorisation is spot on!",
              },
              {
                name: "Mike Chen",
                initial: "M",
                bgColor: "bg-blue-200",
                textColor: "text-blue-700",
                quote: "As a landlord with 3 properties, this has saved me hours. The property income tracking is brilliant.",
              },
              {
                name: "Emma Davies",
                initial: "E",
                bgColor: "bg-purple-200",
                textColor: "text-purple-700",
                quote: "I was dreading MTD but TaxFolio made it painless. Set up quarterly updates in 10 minutes.",
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white rounded-2xl p-6 shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-sm font-medium ${testimonial.textColor}`}
                    >
                      {testimonial.initial}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{testimonial.name}</p>
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </div>
                <p className="text-gray-600 text-sm">&ldquo;{testimonial.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="bg-white py-20 border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tax Guides & Resources
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Free guides to help you understand UK tax, stay compliant with Making Tax Digital, and maximise your deductions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Making Tax Digital */}
            <Link href="/making-tax-digital" className="group">
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 hover:border-[#00e3ec] hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-[#00e3ec]/10 rounded-xl flex items-center justify-center mb-4">
                  <FileSpreadsheet className="w-6 h-6 text-[#00a8b0]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#00a8b0] transition-colors">Making Tax Digital</h3>
                <p className="text-gray-600 text-sm mb-3">Everything you need to know about MTD for Income Tax, deadlines, and compliance.</p>
                <span className="text-[#00a8b0] text-sm font-medium flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Self Assessment */}
            <Link href="/self-assessment" className="group">
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 hover:border-[#00e3ec] hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-[#00e3ec]/10 rounded-xl flex items-center justify-center mb-4">
                  <FileText className="w-6 h-6 text-[#00a8b0]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#00a8b0] transition-colors">Self Assessment</h3>
                <p className="text-gray-600 text-sm mb-3">Complete guide to UK tax returns - who needs to file, deadlines, and how to submit.</p>
                <span className="text-[#00a8b0] text-sm font-medium flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Sole Trader Tax */}
            <Link href="/sole-trader-tax" className="group">
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 hover:border-[#00e3ec] hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-[#00e3ec]/10 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#00a8b0]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#00a8b0] transition-colors">Sole Trader Tax</h3>
                <p className="text-gray-600 text-sm mb-3">Tax rates, National Insurance, and what self-employed people need to know.</p>
                <span className="text-[#00a8b0] text-sm font-medium flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Landlord Tax */}
            <Link href="/landlord-tax" className="group">
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 hover:border-[#00e3ec] hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-[#00e3ec]/10 rounded-xl flex items-center justify-center mb-4">
                  <Home className="w-6 h-6 text-[#00a8b0]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#00a8b0] transition-colors">Landlord Tax</h3>
                <p className="text-gray-600 text-sm mb-3">Property income tax, allowable expenses, and mortgage interest relief explained.</p>
                <span className="text-[#00a8b0] text-sm font-medium flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* Tax Deductions */}
            <Link href="/tax-deductions" className="group">
              <div className="bg-[#f8f9fc] rounded-2xl p-6 border border-gray-100 hover:border-[#00e3ec] hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-[#00e3ec]/10 rounded-xl flex items-center justify-center mb-4">
                  <Receipt className="w-6 h-6 text-[#00a8b0]" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-[#00a8b0] transition-colors">Tax Deductions</h3>
                <p className="text-gray-600 text-sm mb-3">Maximise your tax savings with our complete guide to allowable expenses.</p>
                <span className="text-[#00a8b0] text-sm font-medium flex items-center gap-1">
                  Read guide <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>

            {/* All Resources */}
            <Link href="/resources" className="group">
              <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-2xl p-6 hover:shadow-lg transition-all h-full">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-[#00e3ec]" />
                </div>
                <h3 className="font-semibold text-white mb-2">All Resources</h3>
                <p className="text-gray-300 text-sm mb-3">Browse our complete library of tax guides, tutorials, and helpful articles.</p>
                <span className="text-[#00e3ec] text-sm font-medium flex items-center gap-1">
                  View all <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="bg-[#f8f9fc] py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "What is Making Tax Digital (MTD)?",
                a: "MTD is a UK government initiative requiring self-employed people and landlords to keep digital records. It becomes mandatory in April 2026 for those earning over £50,000, and April 2027 for those earning over £30,000.",
              },
              {
                q: "Do I need an accountant if I use TaxFolio?",
                a: "For straightforward self-employment or rental income, TaxFolio can handle everything. However, if you have complex tax situations (multiple income sources, foreign income, etc.), we recommend consulting a qualified accountant.",
              },
              {
                q: "Is my data secure?",
                a: "Yes. We use 256-bit encryption and connect to your bank through TrueLayer, which is FCA-regulated. We never store your bank login credentials.",
              },
              {
                q: "Which banks do you support?",
                a: "We support all major UK banks through Open Banking, including Barclays, HSBC, Lloyds, NatWest, Santander, Monzo, Starling, and many more.",
              },
              {
                q: "Can I track rental property income?",
                a: "Yes! Our Pro tier includes full SA105 (property income) support, allowing you to track rental income and expenses across multiple properties.",
              },
              {
                q: "How does AI categorisation work?",
                a: "Our AI analyses your transaction descriptions and suggests the most likely tax category. It learns from your corrections and gets more accurate over time.",
              },
              {
                q: "Is there a free trial?",
                a: "Yes! You can try TaxFolio free for 30 days with no credit card required. You'll have access to all features during the trial.",
              },
              {
                q: "What support do you offer?",
                a: "We offer email support for all users, with priority support for Pro subscribers. We also have an AI assistant called 'Ask TaxFolio' that can answer most questions instantly.",
              },
            ].map((faq) => (
              <details key={faq.q} className="bg-white rounded-xl border border-gray-200 group">
                <summary className="flex items-center justify-between p-6 cursor-pointer font-semibold text-gray-900">
                  {faq.q}
                  <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 text-gray-600">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to take control of your taxes?
            </h2>
            <p className="text-gray-400 mb-8">
              Join thousands of UK sole traders and landlords who&apos;ve made self-assessment simple.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Link
                href="https://intro.taxfolio.io"
                className="flex items-center gap-3 pl-2 pr-6 py-2 bg-gray-800 hover:bg-gray-700 rounded-full font-semibold text-white transition-colors"
              >
                <span className="w-10 h-10 rounded-full bg-[#00e3ec] flex items-center justify-center">
                  <ArrowRight className="w-5 h-5 text-black stroke-[3]" />
                </span>
                Get Started for Free
              </Link>
              <Link
                href="#pricing"
                className="inline-flex items-center gap-2 px-8 py-4 border border-gray-600 text-white rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                View Pricing
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <CreditCard className="w-4 h-4" />
                No credit card required
              </span>
              <span className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Bank-level security
              </span>
              <span className="flex items-center gap-2">
                <X className="w-4 h-4" />
                Cancel anytime
              </span>
            </div>
            <p className="mt-6 text-gray-500 text-sm">Built for UK tax by a UK company</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
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
            {/* Product */}
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="#features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
                <li><Link href="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/login" className="text-gray-400 hover:text-white transition-colors">Login</Link></li>
                <li><Link href="https://intro.taxfolio.io" className="text-gray-400 hover:text-white transition-colors">Sign Up</Link></li>
              </ul>
            </div>
            {/* Resources */}
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/resources" className="text-gray-400 hover:text-white transition-colors">All Guides</Link></li>
                <li><Link href="/making-tax-digital" className="text-gray-400 hover:text-white transition-colors">MTD Guide</Link></li>
                <li><Link href="/affiliates" className="text-gray-400 hover:text-white transition-colors">Affiliates</Link></li>
                <li><Link href="/accountants" className="text-gray-400 hover:text-white transition-colors">For Accountants</Link></li>
              </ul>
            </div>
            {/* Legal */}
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
