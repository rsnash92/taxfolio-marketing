import { Metadata } from "next"
import { LegalLayout } from "@/components/legal/legal-layout"

export const metadata: Metadata = {
  title: "Terms of Service - TaxFolio",
  description: "Read the terms and conditions governing your use of TaxFolio's AI-powered tax preparation services.",
}

export default function TermsOfServicePage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="10 February 2025">
      <section>
        <h2>1. Introduction</h2>
        <p>
          Welcome to TaxFolio. These Terms of Service (&quot;Terms&quot;) govern your access to and use of TaxFolio&apos;s website, applications, and services (collectively, the &quot;Service&quot;).
        </p>
        <p>
          By creating an account or using our Service, you agree to be bound by these Terms. If you do not agree to these Terms, you may not use the Service.
        </p>
        <p>
          TaxFolio is operated by TaxFolio Ltd, a company registered in England and Wales.
        </p>
      </section>

      <section>
        <h2>2. Service Description</h2>
        <p>
          TaxFolio provides an AI-powered platform to help UK freelancers and self-employed individuals:
        </p>
        <ul>
          <li>Connect bank accounts via Open Banking to import transactions</li>
          <li>Automatically categorise transactions for tax purposes using artificial intelligence</li>
          <li>Track income and expenses</li>
          <li>Generate tax summaries and reports</li>
          <li>Prepare and submit quarterly updates to HMRC via Making Tax Digital (MTD)</li>
          <li>View your HMRC tax account balance, charges, and ITSA status</li>
        </ul>
        <p>
          <strong>Important: TaxFolio is a tax preparation tool, not a tax advisory service. We do not provide tax, legal, or financial advice. You are responsible for the accuracy of your tax returns and should consult a qualified tax professional for advice specific to your circumstances.</strong>
        </p>
      </section>

      <section>
        <h2>3. Eligibility</h2>
        <p>To use TaxFolio, you must:</p>
        <ul>
          <li>Be at least 18 years of age</li>
          <li>Be a UK tax resident or have UK tax obligations</li>
          <li>Have the legal capacity to enter into binding contracts</li>
          <li>Provide accurate and complete registration information</li>
        </ul>
      </section>

      <section>
        <h2>4. Account Registration and Security</h2>
        <p>
          You must create an account to use TaxFolio. When creating an account, you agree to:
        </p>
        <ul>
          <li>Provide accurate, current, and complete information</li>
          <li>Maintain and update your information as needed</li>
          <li>Keep your password secure and confidential</li>
          <li>Notify us immediately of any unauthorised access to your account</li>
          <li>Accept responsibility for all activities under your account</li>
        </ul>
        <p>
          We reserve the right to suspend or terminate accounts that violate these Terms or contain inaccurate information.
        </p>
      </section>

      <section>
        <h2>5. Open Banking and Plaid</h2>
        <p>
          TaxFolio uses Plaid Inc. to connect to your bank accounts via Open Banking. By using this feature, you:
        </p>
        <ul>
          <li>Authorise Plaid to access your bank account information on your behalf</li>
          <li>Acknowledge that Plaid&apos;s services are subject to Plaid&apos;s own terms and privacy policy</li>
          <li>Understand that we receive transaction and account data, not your bank login credentials</li>
          <li>Can revoke access at any time through your TaxFolio settings or directly with your bank</li>
        </ul>
        <p>
          We are not responsible for the availability or accuracy of data provided through Plaid or any issues with Plaid&apos;s services.
        </p>
      </section>

      <section>
        <h2>6. HMRC Making Tax Digital (MTD)</h2>

        <h3>6.1 HMRC Authorisation</h3>
        <p>
          To use TaxFolio&apos;s MTD features, you must authorise TaxFolio to interact with HMRC on your behalf via HMRC&apos;s OAuth 2.0 process. By doing so, you:
        </p>
        <ul>
          <li>Authorise TaxFolio to submit income and expense data to HMRC on your behalf</li>
          <li>Authorise TaxFolio to retrieve your filing obligations, tax calculations, and account information from HMRC</li>
          <li>Acknowledge that submissions made through TaxFolio are legally binding HMRC filings</li>
          <li>Can revoke access at any time through your TaxFolio settings or your HMRC online account</li>
        </ul>

        <h3>6.2 Your Responsibilities</h3>
        <p>
          When using MTD features, you are responsible for:
        </p>
        <ul>
          <li>Ensuring that all income and expense data submitted to HMRC is accurate and complete</li>
          <li>Reviewing quarterly submissions before confirming them</li>
          <li>Meeting HMRC&apos;s quarterly filing deadlines</li>
          <li>Keeping records to support your submissions as required by HMRC</li>
          <li>Providing a correct National Insurance number</li>
        </ul>
        <p>
          TaxFolio helps you prepare and submit data but does not verify the accuracy of the underlying information you provide. You remain legally responsible for your tax affairs.
        </p>

        <h3>6.3 Fraud Prevention Data</h3>
        <p>
          HMRC requires all MTD-compatible software to collect and transmit fraud prevention data (such as your IP address, browser information, and device details) with every API request. By using MTD features, you consent to this data being collected and transmitted to HMRC as required by law. Full details are in our Privacy Policy.
        </p>

        <h3>6.4 HMRC Service Availability</h3>
        <p>
          TaxFolio relies on HMRC&apos;s APIs to provide MTD functionality. We are not responsible for HMRC system outages, maintenance periods, or changes to HMRC&apos;s API specifications that may temporarily affect the Service.
        </p>
      </section>

      <section>
        <h2>7. Subscription and Payments</h2>

        <h3>7.1 Free and Paid Plans</h3>
        <p>
          TaxFolio offers both free and paid subscription plans. Features available depend on your subscription tier. Details of pricing and features are available on our website.
        </p>

        <h3>7.2 Payment Processing</h3>
        <p>
          Payments are processed securely through Stripe. By subscribing to a paid plan, you authorise us to charge your payment method for the subscription fees. You agree to Stripe&apos;s terms of service for payment processing.
        </p>

        <h3>7.3 Billing</h3>
        <ul>
          <li>Subscriptions are billed in advance on a monthly or annual basis</li>
          <li>Prices are in GBP and include VAT where applicable</li>
          <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
          <li>We may change prices with 30 days&apos; notice</li>
        </ul>

        <h3>7.4 Refunds</h3>
        <p>
          Annual subscriptions may be refunded within 14 days of purchase if you have not substantially used the Service. Monthly subscriptions are non-refundable. Contact support@taxfolio.uk for refund requests.
        </p>
      </section>

      <section>
        <h2>8. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use the Service for any unlawful purpose or in violation of any laws</li>
          <li>Submit false, misleading, or fraudulent information</li>
          <li>Attempt to gain unauthorised access to our systems or other users&apos; accounts</li>
          <li>Interfere with or disrupt the Service or its infrastructure</li>
          <li>Reverse engineer, decompile, or disassemble any part of the Service</li>
          <li>Use automated systems to access the Service without permission</li>
          <li>Share your account credentials with third parties</li>
          <li>Use the Service to commit tax fraud or evasion</li>
          <li>Resell, sublicense, or commercially exploit the Service</li>
        </ul>
      </section>

      <section>
        <h2>9. Intellectual Property</h2>
        <p>
          The Service, including its design, features, content, and underlying technology, is owned by TaxFolio and protected by intellectual property laws. You are granted a limited, non-exclusive, non-transferable licence to use the Service for its intended purpose.
        </p>
        <p>
          You retain ownership of your data. By using the Service, you grant us a licence to use your data as necessary to provide and improve the Service, subject to our Privacy Policy.
        </p>
      </section>

      <section>
        <h2>10. AI-Generated Content</h2>
        <p>
          TaxFolio uses artificial intelligence to categorise transactions and generate tax-related insights. You acknowledge that:
        </p>
        <ul>
          <li>AI categorisations are suggestions and may not always be accurate</li>
          <li>You are responsible for reviewing and verifying all categorisations</li>
          <li>AI-generated content does not constitute tax advice</li>
          <li>You should consult a qualified professional for tax advice</li>
          <li>We continuously work to improve accuracy but cannot guarantee error-free results</li>
        </ul>
      </section>

      <section>
        <h2>11. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
        </p>
        <ul>
          <li>MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE</li>
          <li>ACCURACY, RELIABILITY, OR COMPLETENESS OF CONTENT</li>
          <li>UNINTERRUPTED OR ERROR-FREE OPERATION</li>
          <li>SECURITY OR FREEDOM FROM VIRUSES</li>
        </ul>
        <p>
          We do not warrant that the Service will meet your specific requirements or that any errors will be corrected.
        </p>
      </section>

      <section>
        <h2>12. Limitation of Liability</h2>
        <p>
          TO THE MAXIMUM EXTENT PERMITTED BY LAW:
        </p>
        <ul>
          <li>TAXFOLIO SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
          <li>OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE 12 MONTHS PRECEDING THE CLAIM</li>
          <li>WE ARE NOT LIABLE FOR ANY TAX PENALTIES, INTEREST, OR ADDITIONAL TAX OWED TO HMRC</li>
          <li>WE ARE NOT RESPONSIBLE FOR DECISIONS MADE BASED ON SERVICE OUTPUT</li>
        </ul>
        <p>
          Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
        </p>
      </section>

      <section>
        <h2>13. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless TaxFolio, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of the Service, violation of these Terms, or infringement of any third-party rights.
        </p>
      </section>

      <section>
        <h2>14. Termination</h2>
        <p>
          You may cancel your account at any time through your account settings or by contacting support.
        </p>
        <p>
          We may suspend or terminate your account if you:
        </p>
        <ul>
          <li>Violate these Terms</li>
          <li>Engage in fraudulent or illegal activity</li>
          <li>Fail to pay subscription fees</li>
          <li>Provide false information</li>
        </ul>
        <p>
          Upon termination, you may request export of your data within 30 days. After this period, we may delete your data in accordance with our Privacy Policy and legal retention requirements.
        </p>
      </section>

      <section>
        <h2>15. Changes to Terms</h2>
        <p>
          We may modify these Terms at any time. Material changes will be notified via email or prominent notice on the Service at least 30 days before taking effect. Your continued use after changes take effect constitutes acceptance of the new Terms. If you do not agree to the changes, you must stop using the Service.
        </p>
      </section>

      <section>
        <h2>16. Governing Law and Disputes</h2>
        <p>
          These Terms are governed by the laws of England and Wales. Any disputes shall be subject to the exclusive jurisdiction of the courts of England and Wales.
        </p>
        <p>
          For EU consumers: You may also be entitled to bring proceedings in your country of residence and benefit from mandatory consumer protection provisions of your local law.
        </p>
      </section>

      <section>
        <h2>17. General Provisions</h2>
        <ul>
          <li><strong>Entire Agreement:</strong> These Terms, together with our Privacy Policy and Cookie Policy, constitute the entire agreement between you and TaxFolio.</li>
          <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in effect.</li>
          <li><strong>Waiver:</strong> Failure to enforce any right does not constitute a waiver of that right.</li>
          <li><strong>Assignment:</strong> You may not assign these Terms. We may assign them to any successor entity.</li>
          <li><strong>Force Majeure:</strong> We are not liable for delays or failures due to circumstances beyond our reasonable control.</li>
        </ul>
      </section>

      <section>
        <h2>18. Contact Us</h2>
        <p>
          For questions about these Terms, please contact us:
        </p>
        <p>
          Email: legal@taxfolio.uk
        </p>
        <p>
          Support: support@taxfolio.uk
        </p>
      </section>
    </LegalLayout>
  )
}
