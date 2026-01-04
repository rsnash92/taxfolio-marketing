import { Hero } from "@/components/landing/hero"
import { TrustBadges } from "@/components/landing/trust-badges"
import { ProblemSection } from "@/components/landing/problem-section"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Features } from "@/components/landing/features"
import { SupportedFeatures } from "@/components/landing/supported-features"
import { MTDSection } from "@/components/landing/mtd-section"
import { Pricing } from "@/components/landing/pricing"
import { Testimonials } from "@/components/landing/testimonials"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Navbar } from "@/components/landing/navbar"
import { Footer } from "@/components/landing/footer"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBadges />
        <ProblemSection />
        <HowItWorks />
        <Features />
        <SupportedFeatures />
        <MTDSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
