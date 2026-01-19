import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import Script from "next/script";
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
      <head>
        {/* Google Analytics - Cross-subdomain tracking */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-EBEZRRW7GY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-EBEZRRW7GY', {
              cookie_domain: 'taxfolio.io',
              cookie_flags: 'SameSite=None;Secure',
              linker: {
                domains: ['taxfolio.io', 'app.taxfolio.io', 'intro.taxfolio.io', 'assessment.taxfolio.io']
              }
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
