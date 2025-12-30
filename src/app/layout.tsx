import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "TaxFolio - AI-Powered Self Assessment for UK Freelancers",
  description: "Connect your bank, let AI categorise your transactions, see your tax position in 5 minutes. Ready for Making Tax Digital 2026.",
  keywords: "self assessment, MTD, making tax digital, UK tax, freelancer tax, sole trader, HMRC, tax return, AI accounting",
  openGraph: {
    title: "TaxFolio - Self-assessment, sorted by AI",
    description: "Connect your bank. AI categorises everything. See your tax position in 5 minutes.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TaxFolio - Self-assessment, sorted by AI",
    description: "The simplest way for UK freelancers to manage their tax.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
