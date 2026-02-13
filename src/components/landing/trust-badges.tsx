import { Shield, Building2, Lock, Smartphone } from 'lucide-react'

const badges = [
  {
    icon: Building2,
    title: 'MTD Compatible',
    subtitle: 'Making Tax Digital software',
  },
  {
    icon: Shield,
    title: 'FCA Authorised',
    subtitle: 'Bank connections via TrueLayer',
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    subtitle: '256-bit encryption',
  },
  {
    icon: Smartphone,
    title: 'Works Everywhere',
    subtitle: 'Phone, tablet & desktop',
  },
]

export function TrustBadges() {
  return (
    <section className="py-12 border-y border-zinc-800 bg-zinc-900/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="p-2 bg-[#15e49e]/10 rounded-lg">
                <badge.icon className="h-6 w-6 text-[#15e49e]" />
              </div>
              <div>
                <p className="font-medium text-white text-sm">{badge.title}</p>
                <p className="text-xs text-zinc-500">{badge.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
