import Link from "next/link"
import { Info, AlertTriangle, CheckCircle, XCircle, ExternalLink, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

// Callout component for tips, warnings, etc.
interface CalloutProps {
  type?: "info" | "warning" | "success" | "error"
  title?: string
  children: React.ReactNode
}

export function Callout({ type = "info", title, children }: CalloutProps) {
  const styles = {
    info: {
      bg: "bg-blue-50 border-blue-200",
      icon: Info,
      iconColor: "text-blue-500",
      titleColor: "text-blue-900",
    },
    warning: {
      bg: "bg-amber-50 border-amber-200",
      icon: AlertTriangle,
      iconColor: "text-amber-500",
      titleColor: "text-amber-900",
    },
    success: {
      bg: "bg-green-50 border-green-200",
      icon: CheckCircle,
      iconColor: "text-green-500",
      titleColor: "text-green-900",
    },
    error: {
      bg: "bg-red-50 border-red-200",
      icon: XCircle,
      iconColor: "text-red-500",
      titleColor: "text-red-900",
    },
  }

  const style = styles[type]
  const Icon = style.icon

  return (
    <div className={cn("rounded-xl border p-4 my-6", style.bg)}>
      <div className="flex gap-3">
        <Icon className={cn("w-5 h-5 mt-0.5 flex-shrink-0", style.iconColor)} />
        <div>
          {title && (
            <p className={cn("font-semibold mb-1", style.titleColor)}>{title}</p>
          )}
          <div className="text-gray-700 text-sm [&>p]:mb-0">{children}</div>
        </div>
      </div>
    </div>
  )
}

// Key takeaway highlight box
interface KeyTakeawayProps {
  children: React.ReactNode
}

export function KeyTakeaway({ children }: KeyTakeawayProps) {
  return (
    <div className="bg-gradient-to-r from-[#00e3ec]/10 to-[#00c4d4]/10 border border-[#00e3ec]/30 rounded-xl p-5 my-6">
      <p className="font-semibold text-[#00848a] text-sm uppercase tracking-wider mb-2">
        Key Takeaway
      </p>
      <div className="text-gray-800 [&>p]:mb-0">{children}</div>
    </div>
  )
}

// Step-by-step instructions
interface StepsProps {
  children: React.ReactNode
}

export function Steps({ children }: StepsProps) {
  return <div className="my-6 space-y-4">{children}</div>
}

interface StepProps {
  number: number
  title: string
  children: React.ReactNode
}

export function Step({ number, title, children }: StepProps) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#00e3ec] text-black flex items-center justify-center font-bold text-sm">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>
        <div className="text-gray-600 text-sm [&>p]:mb-0">{children}</div>
      </div>
    </div>
  )
}

// CTA button
interface CTAButtonProps {
  href: string
  children: React.ReactNode
}

export function CTAButton({ href, children }: CTAButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 px-6 py-3 bg-[#00e3ec] text-black rounded-full font-semibold hover:bg-[#00c4d4] transition-colors my-4"
    >
      {children}
      <ArrowRight className="w-4 h-4" />
    </Link>
  )
}

// Tax year badge
interface TaxYearProps {
  year: string
}

export function TaxYear({ year }: TaxYearProps) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-700 text-xs font-medium rounded">
      {year}
    </span>
  )
}

// HMRC link with external indicator
interface HMRCLinkProps {
  href: string
  children: React.ReactNode
}

export function HMRCLink({ href, children }: HMRCLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[#00e3ec] hover:underline"
    >
      {children}
      <ExternalLink className="w-3 h-3" />
    </a>
  )
}

// Export all custom components for MDX
export const mdxComponents = {
  Callout,
  KeyTakeaway,
  Steps,
  Step,
  CTAButton,
  TaxYear,
  HMRCLink,
}
