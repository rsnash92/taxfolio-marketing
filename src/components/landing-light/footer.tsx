import Link from "next/link"
import { TrendingUp } from "lucide-react"

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "MTD Guide", href: "#" },
  ],
  resources: [
    { label: "Blog", href: "#" },
    { label: "Help Centre", href: "#" },
    { label: "Contact", href: "#" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
}

export function FooterLight() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <Link href="/light" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-white w-4 h-4" />
              </div>
              <span className="text-xl font-bold">taxfolio</span>
            </Link>
            <p className="text-gray-400 text-sm">The smart way to do your UK self-assessment.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2025 TAXFOLIO LTD (Company No. 16482604). Bank connections by TrueLayer (FCA authorised).
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">HMRC MTD Ready</span>
            <span className="text-xs bg-gray-800 px-3 py-1 rounded-full">256-bit SSL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
