import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TaxFolio - Boost Your Tax Productivity",
  description: "Manage your UK self-assessment with confidence. TaxFolio makes tax returns effortless, insightful, and smart.",
}

export default function AlternateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
