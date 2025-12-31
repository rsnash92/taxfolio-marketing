"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, TrendingUp } from "lucide-react"

export function NavbarLight() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/light" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
            <TrendingUp className="text-white w-4 h-4" />
          </div>
          <span className="text-xl font-bold text-gray-900">taxfolio</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition-colors">
            How it Works
          </a>
          <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
            Features
          </a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
            Pricing
          </a>
          <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
            FAQs
          </a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://app.taxfolio.io/login"
            className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
          >
            Log in
          </a>
          <a
            href="https://app.taxfolio.io/signup"
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full font-medium transition-colors"
          >
            Start for Free
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <div className="flex flex-col gap-4">
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              How it Works
            </a>
            <a href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900">
              FAQs
            </a>
            <hr className="border-gray-200" />
            <a href="https://app.taxfolio.io/login" className="text-gray-600">
              Log in
            </a>
            <a
              href="https://app.taxfolio.io/signup"
              className="bg-emerald-500 text-white px-5 py-2.5 rounded-full font-medium text-center"
            >
              Start for Free
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
