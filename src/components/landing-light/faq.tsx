"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What is Making Tax Digital (MTD)?",
    answer:
      "Making Tax Digital is a UK government initiative requiring self-employed people and landlords to keep digital records and submit quarterly updates to HMRC. From April 2026, this applies to those earning over £50,000, and from April 2027 for those earning over £30,000. TaxFolio is fully MTD-compatible.",
  },
  {
    question: "Do I still need an accountant?",
    answer:
      "For straightforward self-employment or rental income, TaxFolio can handle everything including HMRC submission. However, if you have complex tax affairs (foreign income, capital gains, multiple businesses), we recommend consulting an accountant. You can export your TaxFolio data to share with them.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use bank-level 256-bit encryption for all data. Bank connections are provided through TrueLayer, which is authorised and regulated by the Financial Conduct Authority (FCA). We never store your bank login credentials.",
  },
  {
    question: "Can I try before I buy?",
    answer:
      "Absolutely! We offer a free trial with no credit card required. You can test all features and even do a test submission to HMRC's sandbox. You'll only need to pay when you're ready to submit your actual tax return.",
  },
]

export function FAQLight() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
          <p className="text-gray-600">Our tax experts are ready to help. Email us at support@taxfolio.io</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-900">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
