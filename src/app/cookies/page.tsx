import { Metadata } from "next"
import { LegalLayout } from "@/components/legal/legal-layout"

export const metadata: Metadata = {
  title: "Cookie Policy - TaxFolio",
  description: "Learn how TaxFolio uses cookies and similar technologies on our website and services.",
}

export default function CookiePolicyPage() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="30 December 2024">
      <section>
        <h2>1. Introduction</h2>
        <p>
          This Cookie Policy explains how TaxFolio (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) uses cookies and similar tracking technologies when you visit our website and use our services.
        </p>
        <p>
          By using TaxFolio, you consent to our use of cookies in accordance with this policy. You can manage your cookie preferences as described below.
        </p>
      </section>

      <section>
        <h2>2. What Are Cookies?</h2>
        <p>
          Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
        </p>
        <p>
          Cookies can be &quot;persistent&quot; (remaining on your device until they expire or you delete them) or &quot;session&quot; cookies (deleted when you close your browser). They can be set by the website you&apos;re visiting (&quot;first-party cookies&quot;) or by third parties (&quot;third-party cookies&quot;).
        </p>
      </section>

      <section>
        <h2>3. How We Use Cookies</h2>
        <p>We use cookies for the following purposes:</p>

        <h3>3.1 Essential Cookies (Strictly Necessary)</h3>
        <p>
          These cookies are required for the website to function properly. They cannot be disabled. They include:
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>sb-access-token</td>
              <td>Authentication session</td>
              <td>Session</td>
            </tr>
            <tr>
              <td>sb-refresh-token</td>
              <td>Authentication refresh</td>
              <td>7 days</td>
            </tr>
            <tr>
              <td>__stripe_mid</td>
              <td>Stripe fraud prevention</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>__stripe_sid</td>
              <td>Stripe session</td>
              <td>30 minutes</td>
            </tr>
            <tr>
              <td>cookie_consent</td>
              <td>Stores your cookie preferences</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>

        <h3>3.2 Functional Cookies</h3>
        <p>
          These cookies enhance functionality and personalisation. They may be set by us or third parties. If you disable them, some features may not work properly.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>theme</td>
              <td>Remembers dark/light mode preference</td>
              <td>1 year</td>
            </tr>
            <tr>
              <td>locale</td>
              <td>Remembers language preference</td>
              <td>1 year</td>
            </tr>
          </tbody>
        </table>

        <h3>3.3 Analytics Cookies</h3>
        <p>
          These cookies help us understand how visitors use our website by collecting and reporting information anonymously. This helps us improve our services.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie Name</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_ga_*</td>
              <td>Google Analytics</td>
              <td>Persists session state</td>
              <td>2 years</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Distinguishes users</td>
              <td>24 hours</td>
            </tr>
          </tbody>
        </table>

        <h3>3.4 Marketing Cookies</h3>
        <p>
          These cookies may be set by our advertising partners to build a profile of your interests and show you relevant adverts on other sites. They do not directly store personal information but uniquely identify your browser and device.
        </p>
        <p>
          Currently, TaxFolio does not use marketing cookies. If this changes, we will update this policy and obtain your consent where required.
        </p>
      </section>

      <section>
        <h2>4. Third-Party Cookies</h2>
        <p>
          Some cookies are placed by third-party services that appear on our pages. We do not control these cookies. The third parties include:
        </p>
        <ul>
          <li><strong>Stripe</strong> - Payment processing and fraud prevention</li>
          <li><strong>Google Analytics</strong> - Website analytics (if enabled)</li>
          <li><strong>Plaid</strong> - Open Banking connection (during bank linking only)</li>
        </ul>
        <p>
          Please refer to each provider&apos;s privacy policy for more information about their cookies.
        </p>
      </section>

      <section>
        <h2>5. Similar Technologies</h2>
        <p>
          In addition to cookies, we may use similar technologies:
        </p>
        <ul>
          <li><strong>Local Storage:</strong> Stores data in your browser for a better user experience (e.g., remembering form inputs)</li>
          <li><strong>Session Storage:</strong> Temporary storage that is cleared when you close your browser</li>
          <li><strong>Pixels/Web Beacons:</strong> Small images that help us understand how you interact with emails and our website</li>
        </ul>
      </section>

      <section>
        <h2>6. Managing Your Cookie Preferences</h2>
        <p>
          You can control and manage cookies in several ways:
        </p>

        <h3>6.1 Cookie Consent Banner</h3>
        <p>
          When you first visit TaxFolio, you will see a cookie consent banner. You can choose to accept all cookies or customise your preferences. You can change your preferences at any time by clicking &quot;Cookie Settings&quot; in the footer.
        </p>

        <h3>6.2 Browser Settings</h3>
        <p>
          Most browsers allow you to manage cookies through their settings. You can:
        </p>
        <ul>
          <li>Block all cookies</li>
          <li>Block third-party cookies only</li>
          <li>Delete cookies when you close your browser</li>
          <li>Clear all cookies manually</li>
        </ul>
        <p>
          Please note that blocking essential cookies will prevent you from using TaxFolio.
        </p>
        <p>
          For more information on managing cookies in your browser:
        </p>
        <ul>
          <li>Chrome: support.google.com/chrome/answer/95647</li>
          <li>Firefox: support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer</li>
          <li>Safari: support.apple.com/guide/safari/manage-cookies-sfri11471</li>
          <li>Edge: support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge</li>
        </ul>

        <h3>6.3 Opt-Out Tools</h3>
        <p>
          For Google Analytics, you can install the Google Analytics Opt-out Browser Add-on: tools.google.com/dlpage/gaoptout
        </p>
      </section>

      <section>
        <h2>7. Legal Basis for Using Cookies</h2>
        <p>
          Under UK GDPR and the Privacy and Electronic Communications Regulations (PECR):
        </p>
        <ul>
          <li><strong>Strictly Necessary Cookies:</strong> Do not require consent as they are essential for the service</li>
          <li><strong>Other Cookies:</strong> Require your consent before we set them</li>
        </ul>
      </section>

      <section>
        <h2>8. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post any changes on this page and update the &quot;Last updated&quot; date. We encourage you to review this policy periodically.
        </p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>
          If you have questions about our use of cookies, please contact us:
        </p>
        <p>
          Email: privacy@taxfolio.uk
        </p>
      </section>
    </LegalLayout>
  )
}
