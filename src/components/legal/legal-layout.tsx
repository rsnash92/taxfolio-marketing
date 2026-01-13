"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
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

      {/* Content */}
      <main className="container mx-auto px-6 lg:px-12 py-12 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-500 text-sm">Last updated: {lastUpdated}</p>
        </div>

        <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm">
          <div className="legal-content">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-12">
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
              <Link href="/cookies" className="hover:text-white transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
