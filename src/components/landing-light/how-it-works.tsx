import { Building2, Sparkles, Send } from "lucide-react"

const steps = [
  {
    icon: Building2,
    title: "Connect Your Bank",
    description:
      "Securely link your accounts and we'll import all your transactions automatically. No typing required.",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: Sparkles,
    title: "AI Categorises Everything",
    description: "Our AI automatically sorts your expenses into the right tax categories. Just review and confirm.",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: Send,
    title: "File to HMRC",
    description: "Review your tax summary and submit directly to HMRC with one click. Done!",
    bgColor: "bg-amber-100",
    iconColor: "text-amber-500",
  },
]

export function HowItWorksLight() {
  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-emerald-600 font-semibold mb-2">Simple</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">See How Simple Your Tax Return Can Be</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={step.title} className="text-center">
              <div
                className={`w-48 h-48 mx-auto mb-6 ${step.bgColor} rounded-3xl flex items-center justify-center`}
              >
                <div className="text-center">
                  <step.icon className={`w-16 h-16 ${step.iconColor} mx-auto mb-2`} />
                  <div className="flex gap-1 justify-center">
                    <span
                      className={`w-3 h-3 rounded-full ${index === 0 ? "bg-emerald-300" : index === 1 ? "bg-blue-300" : "bg-amber-300"}`}
                    ></span>
                    <span
                      className={`w-3 h-3 rounded-full ${index === 0 ? "bg-emerald-400" : index === 1 ? "bg-blue-400" : "bg-amber-400"}`}
                    ></span>
                    <span
                      className={`w-3 h-3 rounded-full ${index === 0 ? "bg-emerald-500" : index === 1 ? "bg-blue-500" : "bg-amber-500"}`}
                    ></span>
                  </div>
                </div>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
