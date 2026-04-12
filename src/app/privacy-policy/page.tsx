import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Veloxa",
  description:
    "Learn how Veloxa collects, uses, and protects your personal information, including our use of cookies and third-party analytics tools.",
  alternates: {
    canonical: "https://veloxa.tech/privacy-policy",
  },
};

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-[#F1EFE8]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#185FA5] mb-3">
            Legal
          </p>
          <h1 className="text-5xl font-black text-[#2C2C2A] mb-4 leading-tight">
            Privacy Policy
          </h1>
          <p className="text-[#2C2C2A]/60 text-base">
            Last updated: <strong>April 12, 2026</strong>
          </p>
        </div>

        {/* Intro box */}
        <div className="bg-white border border-[#2C2C2A]/10 rounded-2xl p-6 mb-10 shadow-sm">
          <p className="text-[#2C2C2A]/80 leading-relaxed">
            At <strong>Veloxa</strong> ("we", "us", or "our"), we are committed
            to protecting your privacy. This Privacy Policy explains what
            information we collect when you visit{" "}
            <a
              href="https://veloxa.tech"
              className="text-[#185FA5] underline underline-offset-2"
            >
              veloxa.tech
            </a>
            , how we use it, what cookies and third-party trackers we deploy,
            and what rights you have over your data.
          </p>
        </div>

        {/* Section helper styles applied inline for portability */}
        <div className="space-y-10 text-[#2C2C2A]/80 leading-relaxed">

          {/* 1 — Information We Collect */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              1. Information We Collect
            </h2>
            <p className="mb-3">
              We collect information in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Information you provide voluntarily</strong> — When you
                fill out our contact form, we collect your name, email address,
                phone number, business name, and your message.
              </li>
              <li>
                <strong>Information collected automatically</strong> — When you
                visit our website, we automatically collect certain technical
                data (IP address, browser type, device type, pages visited,
                time spent on pages, and referring URLs) through cookies and
                analytics tools described below.
              </li>
            </ul>
          </section>

          {/* 2 — Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              2. Cookies &amp; Similar Technologies
            </h2>
            <p className="mb-4">
              Our website uses <strong>cookies</strong> — small text files
              stored on your device — to help the site function properly and to
              understand how visitors interact with our content. We use the
              following categories of cookies:
            </p>

            <div className="overflow-x-auto rounded-xl border border-[#2C2C2A]/10 mb-4">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#185FA5]/10 text-[#2C2C2A] font-semibold">
                  <tr>
                    <th className="px-4 py-3">Category</th>
                    <th className="px-4 py-3">Purpose</th>
                    <th className="px-4 py-3">Example</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2C2C2A]/10 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-medium">Strictly Necessary</td>
                    <td className="px-4 py-3">
                      Enable core website functionality. The site cannot work
                      properly without these.
                    </td>
                    <td className="px-4 py-3">Session cookies</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Analytics &amp; Performance</td>
                    <td className="px-4 py-3">
                      Help us understand how visitors interact with our website
                      so we can improve it.
                    </td>
                    <td className="px-4 py-3">Google Analytics (_ga, _gid)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              You can control or disable cookies through your browser settings.
              Note that disabling certain cookies may affect website
              functionality.
            </p>
          </section>

          {/* 3 — Third-Party Trackers */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              3. Third-Party Services &amp; Trackers
            </h2>
            <p className="mb-4">
              We use the following third-party services on our website. Each
              service may collect data about you independently and is governed
              by its own privacy policy:
            </p>

            {/* Google Analytics */}
            <div className="bg-white border border-[#2C2C2A]/10 rounded-xl p-5 mb-4 shadow-sm">
              <h3 className="font-bold text-[#2C2C2A] mb-1">
                Google Analytics 4 (GA4)
              </h3>
              <p className="text-sm mb-2">
                We use <strong>Google Analytics 4</strong> (Measurement ID:{" "}
                <code className="bg-[#185FA5]/10 px-1 py-0.5 rounded text-xs font-mono">
                  G-682G153K5S
                </code>
                ) provided by Google LLC to collect anonymous usage statistics.
                Google Analytics places cookies (such as{" "}
                <code className="bg-[#185FA5]/10 px-1 py-0.5 rounded text-xs font-mono">
                  _ga
                </code>{" "}
                and{" "}
                <code className="bg-[#185FA5]/10 px-1 py-0.5 rounded text-xs font-mono">
                  _gid
                </code>
                ) on your device to track page views, session duration, traffic
                sources, and general device information.
              </p>
              <p className="text-sm mb-2">
                <strong>Data collected:</strong> IP address (anonymised), pages
                visited, time on site, browser type, device category, country.
              </p>
              <p className="text-sm">
                <strong>Google&apos;s Privacy Policy:</strong>{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#185FA5] underline underline-offset-2"
                >
                  https://policies.google.com/privacy
                </a>
                <br />
                <strong>Opt-out:</strong>{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#185FA5] underline underline-offset-2"
                >
                  Google Analytics Opt-out Browser Add-on
                </a>
              </p>
            </div>

            {/* Google Tag Manager / gtag.js */}
            <div className="bg-white border border-[#2C2C2A]/10 rounded-xl p-5 mb-4 shadow-sm">
              <h3 className="font-bold text-[#2C2C2A] mb-1">
                Google Tag Manager / gtag.js
              </h3>
              <p className="text-sm">
                We load the{" "}
                <code className="bg-[#185FA5]/10 px-1 py-0.5 rounded text-xs font-mono">
                  gtag.js
                </code>{" "}
                script from{" "}
                <code className="bg-[#185FA5]/10 px-1 py-0.5 rounded text-xs font-mono">
                  googletagmanager.com
                </code>{" "}
                to fire analytics and advertising events. This script is subject
                to Google's data processing terms.
              </p>
            </div>

            {/* Google Ads */}
            <div className="bg-white border border-[#2C2C2A]/10 rounded-xl p-5 mb-4 shadow-sm">
              <h3 className="font-bold text-[#2C2C2A] mb-1">
                Google Ads (Conversion &amp; Remarketing)
              </h3>
              <p className="text-sm mb-2">
                We use <strong>Google Ads</strong> to promote our services. To measure the effectiveness of our campaigns and to show relevant ads to people who have visited our site, we use Google Ads conversion tracking and remarketing features.
              </p>
              <p className="text-sm mb-2">
                <strong>How it works:</strong> When you click on one of our ads, a temporary cookie is placed on your device. If you then complete a certain action (like filling out our contact form), this is recorded as a "conversion". We also use remarketing cookies to show our ads to you on other websites within the Google Display Network based on your past visits to our site.
              </p>
              <p className="text-sm">
                <strong>Opt-out:</strong> You can opt out of Google's use of cookies for interest-based advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#185FA5] underline underline-offset-2"
                >
                  Google's Ads Settings
                </a> or the <a
                  href="https://optout.networkadvertising.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#185FA5] underline underline-offset-2"
                >
                  Network Advertising Initiative opt-out page
                </a>.
              </p>
            </div>

            {/* EmailJS */}
            <div className="bg-white border border-[#2C2C2A]/10 rounded-xl p-5 mb-4 shadow-sm">
              <h3 className="font-bold text-[#2C2C2A] mb-1">EmailJS</h3>
              <p className="text-sm mb-2">
                Our contact form uses <strong>EmailJS</strong> (emailjs.com) to
                deliver your submitted messages directly to our inbox without
                requiring a backend server. When you submit the contact form,
                your name, email address, phone number, and message are
                transmitted to EmailJS servers for delivery.
              </p>
              <p className="text-sm">
                <strong>EmailJS Privacy Policy:</strong>{" "}
                <a
                  href="https://www.emailjs.com/legal/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#185FA5] underline underline-offset-2"
                >
                  https://www.emailjs.com/legal/privacy-policy/
                </a>
              </p>
            </div>

            {/* Google Fonts */}
            <div className="bg-white border border-[#2C2C2A]/10 rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-[#2C2C2A] mb-1">Google Fonts</h3>
              <p className="text-sm">
                We use <strong>Google Fonts</strong> to serve typefaces (Inter,
                DM Sans). Google may log your IP address when fonts are
                requested. However, our implementation loads fonts through
                Next.js, which self-hosts them — no separate request is made to
                Google&apos;s servers at runtime.
              </p>
            </div>
          </section>

          {/* 4 — How We Use Your Information */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              4. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To respond to your enquiries and project requests</li>
              <li>
                To analyse website traffic and improve our content and user
                experience
              </li>
              <li>To detect and prevent fraud or security incidents</li>
              <li>
                To comply with legal obligations we may be subject to
              </li>
            </ul>
            <p className="mt-3">
              We do <strong>not</strong> sell, rent, or trade your personal
              information to third parties for their own marketing purposes.
            </p>
          </section>

          {/* 5 — Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              5. Data Retention
            </h2>
            <p>
              Contact form submissions are retained in our email inbox for as
              long as necessary to fulfil your request or for legal compliance
              purposes. Google Analytics data is retained for{" "}
              <strong>14 months</strong> by default (as configured in our GA4
              property). You may request deletion of your data at any time (see
              Section 7).
            </p>
          </section>

          {/* 6 — Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              6. Data Sharing &amp; Transfers
            </h2>
            <p className="mb-3">
              We share your data only with the third-party processors listed in
              Section 3 above, and only to the extent necessary to operate our
              website and respond to your enquiries. These processors may be
              located outside your country, including in the United States.
              Where required by law, we rely on appropriate safeguards (such as
              Standard Contractual Clauses) for international transfers.
            </p>
            <p>
              We may also disclose your information if required by law,
              regulation, or a valid legal process.
            </p>
          </section>

          {/* 7 — Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              7. Your Rights
            </h2>
            <p className="mb-3">
              Depending on where you are located, you may have the following
              rights regarding your personal data:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>
                <strong>Access</strong> — Request a copy of the personal data we
                hold about you.
              </li>
              <li>
                <strong>Correction</strong> — Ask us to correct inaccurate or
                incomplete data.
              </li>
              <li>
                <strong>Deletion</strong> — Ask us to erase your personal data
                (the &quot;right to be forgotten&quot;).
              </li>
              <li>
                <strong>Objection / Opt-out</strong> — Object to the processing
                of your personal data for analytics purposes.
              </li>
              <li>
                <strong>Data portability</strong> — Request your data in a
                structured, commonly used format.
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at{" "}
              <a
                href="mailto:support@veloxa.tech"
                className="text-[#185FA5] underline underline-offset-2"
              >
                support@veloxa.tech
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          {/* 8 — Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              8. Children&apos;s Privacy
            </h2>
            <p>
              Our website is not directed to children under the age of 13. We do
              not knowingly collect personal data from children. If you believe
              we have inadvertently collected such data, please contact us
              immediately and we will delete it.
            </p>
          </section>

          {/* 9 — Changes */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              9. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes
              in our practices or applicable law. The &quot;Last updated&quot; date at
              the top of this page will always indicate the most recent revision.
              We encourage you to review this page regularly.
            </p>
          </section>

          {/* 10 — Contact */}
          <section>
            <h2 className="text-2xl font-bold text-[#2C2C2A] mb-3">
              10. Contact Us
            </h2>
            <p className="mb-2">
              If you have any questions about this Privacy Policy or how we
              handle your data, please reach out:
            </p>
            <div className="bg-white border border-[#2C2C2A]/10 rounded-xl p-5 shadow-sm space-y-1 text-sm">
              <p>
                <strong>Veloxa</strong>
              </p>
              <p>Connaught Place, New Delhi — 110001, India</p>
              <p>
                Email:{" "}
                <a
                  href="mailto:support@veloxa.tech"
                  className="text-[#185FA5] underline underline-offset-2"
                >
                  support@veloxa.tech
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:+919205568939"
                  className="text-[#185FA5] underline underline-offset-2"
                >
                  +91 92055 68939
                </a>
              </p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
