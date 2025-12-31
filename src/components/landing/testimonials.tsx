import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "Finally, tax software that doesn't make me want to cry. The AI categorisation is incredibly accurate.",
    author: "Sarah T.",
    role: "Freelance Designer",
    highlight: "Saved me hours every month",
  },
  {
    quote: "I was dreading MTD but TaxFolio made it completely painless. Set up in 10 minutes.",
    author: "James M.",
    role: "Property Landlord",
    highlight: "MTD ready in 10 minutes",
  },
  {
    quote: "The quarterly view is brilliant. I can see exactly what I owe each quarter instead of panicking in January.",
    author: "Priya K.",
    role: "IT Contractor",
    highlight: "No more January panic",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Trusted by sole traders across the UK
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <p className="text-zinc-400">
            Join thousands getting their tax sorted the smart way
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 mb-4">&ldquo;{testimonial.quote}&rdquo;</p>

              {/* Highlight */}
              <p className="text-sm text-[#15e49e] font-medium mb-4">
                {testimonial.highlight}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-zinc-800">
                <div className="w-10 h-10 bg-zinc-700 rounded-full flex items-center justify-center text-white font-medium">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <p className="font-medium text-white text-sm">{testimonial.author}</p>
                  <p className="text-xs text-zinc-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
