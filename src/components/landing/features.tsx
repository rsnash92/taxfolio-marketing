import { Bot, Building2, Smartphone, Calculator, Send, Car } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Categorisation",
    description: "Claude AI understands context. \"AMZN MKTP\" → office supplies or personal? AI knows the difference.",
  },
  {
    icon: Building2,
    title: "Bank Connection",
    description: "Connect via Open Banking. Transactions sync automatically. All major UK banks supported.",
  },
  {
    icon: Smartphone,
    title: "Mobile First",
    description: "Review transactions on your phone. Swipe to confirm. Do your tax admin on your commute.",
  },
  {
    icon: Calculator,
    title: "Real-time Tax",
    description: "See your estimated tax bill update live as you confirm transactions. No January surprises.",
  },
  {
    icon: Send,
    title: "Direct HMRC Submission",
    description: "Submit quarterly updates directly to HMRC. No spreadsheets, no third-party software. One click.",
  },
  {
    icon: Car,
    title: "Mileage Tracker",
    description: "Log business miles and calculate your allowance automatically. Supports both HMRC rates.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-zinc-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Everything you need. Nothing you don&apos;t.
        </h2>
        <p className="text-zinc-400 text-center mb-16 max-w-2xl mx-auto">
          Built for UK freelancers and sole traders who want simple, not complicated.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-[#15e49e]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#15e49e]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
