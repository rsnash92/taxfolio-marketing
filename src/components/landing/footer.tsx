import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Login", href: "https://app.taxfolio.io/login" },
    { label: "Sign Up", href: "https://app.taxfolio.io/signup" },
  ],
  resources: [
    { label: "Tax Guides", href: "/resources" },
    { label: "MTD Guide", href: "/making-tax-digital" },
    { label: "Affiliates", href: "/affiliates" },
    { label: "For Accountants", href: "/accountants" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Disclaimer", href: "/disclaimer" },
    { label: "Security", href: "/security" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.webp"
                alt="TaxFolio"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-zinc-400 text-sm">
              Self-assessment, sorted by AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-800 pt-8 space-y-4">
          {/* Company and copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-zinc-500 text-sm">
                © 2025 TAXFOLIO LTD. Made in the UK 🇬🇧
              </p>
              <p className="text-zinc-600 text-xs mt-1">
                Company No. 16482604
              </p>
            </div>
          </div>

          {/* Regulatory text */}
          <div className="text-zinc-600 text-xs text-center md:text-left space-y-2">
            <p>
              Bank connections powered by TrueLayer, authorised and regulated by the Financial Conduct Authority (FCA).
            </p>
            <p>
              TaxFolio is not a financial advisor or accountant. The information provided is for general guidance only
              and should not be considered as professional tax, financial, or legal advice. Please consult a qualified
              accountant or tax advisor for complex tax matters.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
