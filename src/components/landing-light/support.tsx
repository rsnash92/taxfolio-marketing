import { Bot } from "lucide-react"

export function SupportSection() {
  return (
    <section className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-emerald-600 font-semibold mb-2">24/7 Support</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Real People, Real Help</h2>
            <p className="text-gray-600 text-lg mb-6">
              Get instant guidance from our AI assistant, or chat with our friendly UK-based support team anytime.
              You&apos;re never left guessing.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-emerald-200 flex items-center justify-center text-sm font-medium text-emerald-700">
                  L
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-blue-200 flex items-center justify-center text-sm font-medium text-blue-700">
                  T
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900">UK-based tax experts</p>
                <p className="text-sm text-gray-500">Average response time: 2 hours</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6">
            {/* Chat mockup */}
            <div className="w-64 bg-gray-900 rounded-[2.5rem] p-2.5 shadow-2xl">
              <div className="bg-white rounded-[2rem] overflow-hidden p-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                    <Bot className="text-white w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm">Ask TaxFolio</span>
                </div>

                <p className="text-center text-lg font-semibold mb-4">Hello, Ask Me Anything...</p>

                <div className="space-y-2">
                  <button className="w-full text-left text-sm p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    Can I claim my phone bill?
                  </button>
                  <button className="w-full text-left text-sm p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    What&apos;s the MTD deadline?
                  </button>
                  <button className="w-full text-left text-sm p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    How do I add mileage?
                  </button>
                </div>
              </div>
            </div>

            {/* Person placeholder */}
            <div className="hidden lg:block w-48 h-64 bg-gradient-to-b from-emerald-100 to-emerald-200 rounded-2xl shadow-lg flex items-center justify-center">
              <div className="text-center p-4">
                <div className="w-20 h-20 bg-emerald-300 rounded-full mx-auto mb-3 flex items-center justify-center">
                  <span className="text-3xl font-bold text-emerald-700">S</span>
                </div>
                <p className="text-sm font-medium text-emerald-800">Sarah</p>
                <p className="text-xs text-emerald-600">Tax Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
