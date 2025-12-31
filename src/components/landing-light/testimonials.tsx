import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Thompson",
    initial: "S",
    bgColor: "bg-emerald-200",
    textColor: "text-emerald-700",
    quote: "Finally, tax software that doesn't make me want to cry. The AI categorisation is spot on!",
  },
  {
    name: "Mike Chen",
    initial: "M",
    bgColor: "bg-blue-200",
    textColor: "text-blue-700",
    quote: "As a landlord with 3 properties, this has saved me hours. The property income tracking is brilliant.",
  },
  {
    name: "Emma Davies",
    initial: "E",
    bgColor: "bg-purple-200",
    textColor: "text-purple-700",
    quote: "I was dreading MTD but TaxFolio made it painless. Set up quarterly updates in 10 minutes.",
  },
]

export function TestimonialsLight() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Real stories from happy customers</h2>
          <p className="text-xl text-gray-600">Join thousands who&apos;ve simplified their taxes</p>
        </div>

        {/* Featured Testimonial */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg flex items-center justify-center">
            <div className="w-64 bg-gray-900 rounded-[2rem] p-2">
              <div className="bg-white rounded-[1.5rem] p-4">
                <p className="text-sm text-center text-gray-600">Tax return submitted!</p>
                <div className="text-center mt-2">
                  <span className="text-2xl">🎉</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-emerald-500 rounded-2xl p-8 text-white flex items-center">
            <div>
              <p className="text-2xl font-bold mb-4">
                &ldquo;Excellent app! Did my tax return in 20 minutes. Saved me £400 vs my accountant.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-lg font-bold">
                  J
                </div>
                <div>
                  <p className="font-semibold">James Wilson</p>
                  <p className="text-emerald-200">Freelance Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-2xl p-6 shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full ${testimonial.bgColor} flex items-center justify-center text-sm font-medium ${testimonial.textColor}`}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>
              <p className="text-gray-600 text-sm">&ldquo;{testimonial.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
