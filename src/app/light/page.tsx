import { Metadata } from "next"
import { NavbarLight } from "@/components/landing-light/navbar"
import { HeroLight } from "@/components/landing-light/hero"
import { AudienceSection } from "@/components/landing-light/audience"
import { HowItWorksLight } from "@/components/landing-light/how-it-works"
import { FeaturesLight } from "@/components/landing-light/features"
import { SupportSection } from "@/components/landing-light/support"
import { PricingLight } from "@/components/landing-light/pricing"
import { TestimonialsLight } from "@/components/landing-light/testimonials"
import { FAQLight } from "@/components/landing-light/faq"
import { CTALight } from "@/components/landing-light/cta"
import { FooterLight } from "@/components/landing-light/footer"

export const metadata: Metadata = {
  title: "TaxFolio - Your Self Assessment in 15 Minutes",
  description:
    "Pay less tax, zero stress. TaxFolio handles the figures while you just confirm and relax. No accountant needed.",
}

export default function LightThemePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavbarLight />
      <main>
        <HeroLight />
        <AudienceSection />
        <HowItWorksLight />
        <FeaturesLight />
        <SupportSection />
        <PricingLight />
        <TestimonialsLight />
        <FAQLight />
        <CTALight />
      </main>
      <FooterLight />
    </div>
  )
}
