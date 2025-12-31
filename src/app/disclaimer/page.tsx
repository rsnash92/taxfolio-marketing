import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Disclaimer | TaxFolio",
  description: "Important disclaimers and legal information about TaxFolio.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">Disclaimer</h1>

        <div className="prose prose-invert prose-zinc max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Not Professional Advice</h2>
            <p className="text-zinc-300 leading-relaxed">
              TaxFolio is designed to help you manage your self-assessment tax records and submit
              returns to HMRC. However, <strong>TaxFolio is not a substitute for professional tax,
              financial, or legal advice</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              The information provided through our software is for general guidance purposes only.
              Every individual&apos;s tax situation is unique, and you should consult with a qualified
              accountant, tax advisor, or legal professional for advice specific to your circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Your Responsibility</h2>
            <p className="text-zinc-300 leading-relaxed">
              You are ultimately responsible for the accuracy and completeness of any information
              submitted to HMRC. While TaxFolio provides tools to help you categorise transactions
              and calculate your tax liability, <strong>you must review all information before
              submission</strong>.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              TaxFolio&apos;s AI-powered categorisation is designed to assist you, but it may not always
              be correct. You should verify that all transactions are correctly categorised before
              submitting your tax return.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Bank Connections</h2>
            <p className="text-zinc-300 leading-relaxed">
              Bank connections are provided through TrueLayer, which is authorised and regulated by
              the Financial Conduct Authority (FCA) under the Payment Services Regulations 2017 for
              the provision of Account Information Services.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              TaxFolio never stores your bank login credentials. We only receive read-only access to
              your transaction data through secure Open Banking APIs.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">HMRC Integration</h2>
            <p className="text-zinc-300 leading-relaxed">
              TaxFolio is recognised by HMRC as Making Tax Digital (MTD) compatible software. When
              you submit information to HMRC through TaxFolio, it is transmitted directly to HMRC&apos;s
              systems.
            </p>
            <p className="text-zinc-300 leading-relaxed mt-4">
              Once submitted, information cannot be automatically recalled. If you need to make
              corrections after submission, you may need to contact HMRC directly or submit amended
              returns as appropriate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="text-zinc-300 leading-relaxed">
              To the fullest extent permitted by law, TaxFolio and TAXFOLIO LTD shall not be liable
              for any direct, indirect, incidental, consequential, or special damages arising out of
              or in connection with your use of our software, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-zinc-300 mt-4 space-y-2">
              <li>Errors in tax calculations or submissions</li>
              <li>Penalties or interest charged by HMRC</li>
              <li>Loss of data or business interruption</li>
              <li>Inaccuracies in AI-generated categorisations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">When to Seek Professional Help</h2>
            <p className="text-zinc-300 leading-relaxed">
              We recommend consulting a qualified accountant or tax advisor if you have:
            </p>
            <ul className="list-disc list-inside text-zinc-300 mt-4 space-y-2">
              <li>Foreign income or overseas assets</li>
              <li>Complex capital gains situations</li>
              <li>Partnership or limited company income</li>
              <li>VAT-registered businesses</li>
              <li>Multiple sources of income across different categories</li>
              <li>Tax disputes with HMRC</li>
              <li>Any uncertainty about your tax obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Company Information</h2>
            <p className="text-zinc-300 leading-relaxed">
              TaxFolio is operated by TAXFOLIO LTD, a company registered in England and Wales
              (Company No. 16482604).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p className="text-zinc-300 leading-relaxed">
              If you have any questions about this disclaimer, please contact us at{" "}
              <a href="mailto:support@taxfolio.io" className="text-[#15e49e] hover:underline">
                support@taxfolio.io
              </a>
              .
            </p>
          </section>

          <p className="text-zinc-500 text-sm mt-12">
            Last updated: January 2025
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <Link
            href="/"
            className="text-[#15e49e] hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
