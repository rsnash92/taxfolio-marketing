import { Metadata } from "next"
import { LegalLayout } from "@/components/legal/legal-layout"

export const metadata: Metadata = {
  title: "Disclaimer | TaxFolio",
  description: "Important disclaimers and legal information about TaxFolio.",
}

export default function DisclaimerPage() {
  return (
    <LegalLayout title="Disclaimer" lastUpdated="January 2025">
      <section>
        <h2>Not Professional Advice</h2>
        <p>
          TaxFolio is designed to help you manage your self-assessment tax records and submit
          returns to HMRC. However, <strong>TaxFolio is not a substitute for professional tax,
          financial, or legal advice</strong>.
        </p>
        <p>
          The information provided through our software is for general guidance purposes only.
          Every individual&apos;s tax situation is unique, and you should consult with a qualified
          accountant, tax advisor, or legal professional for advice specific to your circumstances.
        </p>
      </section>

      <section>
        <h2>Your Responsibility</h2>
        <p>
          You are ultimately responsible for the accuracy and completeness of any information
          submitted to HMRC. While TaxFolio provides tools to help you categorise transactions
          and calculate your tax liability, <strong>you must review all information before
          submission</strong>.
        </p>
        <p>
          TaxFolio&apos;s AI-powered categorisation is designed to assist you, but it may not always
          be correct. You should verify that all transactions are correctly categorised before
          submitting your tax return.
        </p>
      </section>

      <section>
        <h2>Bank Connections</h2>
        <p>
          Bank connections are provided through TrueLayer, which is authorised and regulated by
          the Financial Conduct Authority (FCA) under the Payment Services Regulations 2017 for
          the provision of Account Information Services.
        </p>
        <p>
          TaxFolio never stores your bank login credentials. We only receive read-only access to
          your transaction data through secure Open Banking APIs.
        </p>
      </section>

      <section>
        <h2>HMRC Integration</h2>
        <p>
          TaxFolio is recognised by HMRC as Making Tax Digital (MTD) compatible software. When
          you submit information to HMRC through TaxFolio, it is transmitted directly to HMRC&apos;s
          systems.
        </p>
        <p>
          Once submitted, information cannot be automatically recalled. If you need to make
          corrections after submission, you may need to contact HMRC directly or submit amended
          returns as appropriate.
        </p>
      </section>

      <section>
        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, TaxFolio and TAXFOLIO LTD shall not be liable
          for any direct, indirect, incidental, consequential, or special damages arising out of
          or in connection with your use of our software, including but not limited to:
        </p>
        <ul>
          <li>Errors in tax calculations or submissions</li>
          <li>Penalties or interest charged by HMRC</li>
          <li>Loss of data or business interruption</li>
          <li>Inaccuracies in AI-generated categorisations</li>
        </ul>
      </section>

      <section>
        <h2>When to Seek Professional Help</h2>
        <p>
          We recommend consulting a qualified accountant or tax advisor if you have:
        </p>
        <ul>
          <li>Foreign income or overseas assets</li>
          <li>Complex capital gains situations</li>
          <li>Partnership or limited company income</li>
          <li>VAT-registered businesses</li>
          <li>Multiple sources of income across different categories</li>
          <li>Tax disputes with HMRC</li>
          <li>Any uncertainty about your tax obligations</li>
        </ul>
      </section>

      <section>
        <h2>Company Information</h2>
        <p>
          TaxFolio is operated by TAXFOLIO LTD, a company registered in England and Wales
          (Company No. 16482604).
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this disclaimer, please contact us at{" "}
          <a href="mailto:support@taxfolio.io">support@taxfolio.io</a>.
        </p>
      </section>
    </LegalLayout>
  )
}
