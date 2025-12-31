import { Store, Home, Laptop, Bike } from "lucide-react"

const audiences = [
  {
    icon: Store,
    title: "Sole Trader",
    description: "Small business owners, self-employed professionals, side hustlers running your own venture",
    bgColor: "bg-emerald-100",
    iconColor: "text-emerald-500",
  },
  {
    icon: Home,
    title: "Property Owner",
    description: "Buy-to-let landlords, Airbnb hosts, rent-a-room schemes, commercial property owners",
    bgColor: "bg-blue-100",
    iconColor: "text-blue-500",
  },
  {
    icon: Laptop,
    title: "Freelancers",
    description: "Writers, designers, developers, marketers, consultants juggling multiple clients",
    bgColor: "bg-purple-100",
    iconColor: "text-purple-500",
  },
  {
    icon: Bike,
    title: "Couriers & Drivers",
    description: "Uber Eats, Deliveroo, Amazon Flex, Just Eat and taxi drivers",
    bgColor: "bg-orange-100",
    iconColor: "text-orange-500",
  },
]

export function AudienceSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Made for Every UK Earner</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We support every kind of UK earner with fast, accurate HMRC tax filing. It&apos;s time to break up with
            your accountant.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {audiences.map((audience) => (
            <div
              key={audience.title}
              className="p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 ${audience.bgColor} rounded-xl flex items-center justify-center mb-4`}>
                <audience.icon className={`w-6 h-6 ${audience.iconColor}`} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{audience.title}</h3>
              <p className="text-gray-600 text-sm">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
