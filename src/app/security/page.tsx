import { Metadata } from "next"
import { LegalLayout } from "@/components/legal/legal-layout"

export const metadata: Metadata = {
  title: "Security - TaxFolio",
  description: "TaxFolio security policy, vulnerability disclosure, and how we protect your data.",
}

export default function SecurityPage() {
  return (
    <LegalLayout title="Security" lastUpdated="11 February 2025">
      <section>
        <h2>1. Our Commitment</h2>
        <p>
          TaxFolio takes the security of your financial data seriously. We handle sensitive tax
          and banking information and are committed to protecting it through industry-standard
          security practices.
        </p>
      </section>

      <section>
        <h2>2. Data Protection</h2>
        <ul>
          <li>All data is encrypted in transit using TLS 1.2+</li>
          <li>Data at rest is encrypted using AES-256</li>
          <li>Authentication is handled via Supabase Auth with support for two-factor authentication (2FA)</li>
          <li>HMRC API access uses OAuth 2.0 with short-lived tokens that are refreshed automatically</li>
          <li>Open Banking connections via TrueLayer use OAuth 2.0 with time-limited access tokens</li>
          <li>We never store your HMRC or bank passwords</li>
        </ul>
      </section>

      <section>
        <h2>3. HMRC Compliance</h2>
        <p>
          TaxFolio complies with HMRC&apos;s fraud prevention requirements for Making Tax Digital.
          We collect and transmit device information headers as required by HMRC on all API
          submissions. These headers help HMRC detect and prevent fraudulent tax submissions.
        </p>
        <p>
          For details on what data is collected, see our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>

      <section>
        <h2>4. Infrastructure</h2>
        <ul>
          <li>Hosted on Vercel with automatic DDoS protection</li>
          <li>Database hosted on Supabase (AWS eu-west-2, London) with Row Level Security (RLS)</li>
          <li>No direct database access from the client — all operations go through authenticated API routes</li>
          <li>Environment secrets are stored in Vercel&apos;s encrypted environment variable store</li>
        </ul>
      </section>

      <section>
        <h2>5. Vulnerability Disclosure</h2>
        <p>
          If you believe you have found a security vulnerability in TaxFolio, we encourage
          responsible disclosure. Please report it to us so we can address it promptly.
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:security@taxfolio.uk">security@taxfolio.uk</a>
        </p>
        <p>When reporting a vulnerability, please include:</p>
        <ul>
          <li>A description of the vulnerability and its potential impact</li>
          <li>Steps to reproduce the issue</li>
          <li>Any relevant screenshots or proof-of-concept code</li>
        </ul>
        <p>
          We will acknowledge your report within 48 hours and aim to provide an initial
          assessment within 5 business days.
        </p>
      </section>

      <section>
        <h2>6. Contact</h2>
        <p>
          For security concerns:{" "}
          <a href="mailto:security@taxfolio.uk">security@taxfolio.uk</a>
        </p>
        <p>
          For general support:{" "}
          <a href="mailto:support@taxfolio.uk">support@taxfolio.uk</a>
        </p>
        <p>
          Our security.txt file is available at{" "}
          <a href="/.well-known/security.txt">/.well-known/security.txt</a>
        </p>
      </section>
    </LegalLayout>
  )
}
