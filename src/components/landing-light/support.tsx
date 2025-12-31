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
                <img
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=40&h=40&fit=crop&crop=face"
                  alt="Support team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=40&h=40&fit=crop&crop=face"
                  alt="Support team member"
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
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

            {/* Support team member */}
            <div className="hidden lg:block w-48 h-64 bg-gradient-to-b from-emerald-100 to-emerald-200 rounded-2xl shadow-lg overflow-hidden">
              <div className="text-center p-4 h-full flex flex-col items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=160&h=160&fit=crop&crop=face"
                  alt="Sarah - Tax Support"
                  className="w-20 h-20 rounded-full mx-auto mb-3 object-cover border-4 border-white shadow"
                />
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
