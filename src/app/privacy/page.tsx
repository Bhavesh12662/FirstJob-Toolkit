import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How FirstJob Toolkit handles your data: the short version is that your resumes, emails, and job applications are stored only in your own browser and are never uploaded to our servers.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="bg-white">
      <Container className="max-w-3xl py-14">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: October 23, 2026</p>
        <div className="guide mt-8">
          <p>
            <strong>The short version:</strong> FirstJob Toolkit is designed so
            that your personal data never leaves your device. We don&apos;t ask you
            to create an account, we don&apos;t ask for your email address, and we
            don&apos;t store your resumes, cover letters, or job applications on any
            server.
          </p>

          <h2>1. Data stored in your browser (local storage)</h2>
          <p>
            Our tools — the Resume Builder, Interview Question Library, Email
            Generator, and Job Application Tracker — save your input in your
            browser&apos;s <code>localStorage</code>. This means:
          </p>
          <ul>
            <li>
              Your data is stored <strong>only on your device</strong>, in your
              browser. It is not sent to us or to any third party.
            </li>
            <li>
              Your work survives a page refresh, so you don&apos;t lose it if you
              accidentally close the tab.
            </li>
            <li>
              If you <strong>clear your browser&apos;s site data</strong>, use the
              &ldquo;Clear&rdquo; buttons in the tools, or switch to a different device or
              browser, the data is gone. Local storage is <em>not</em> a secure
              backup or a database — treat it as a convenience, not a vault.
            </li>
            <li>
              Anyone with access to your device and browser profile can read
              this data. Don&apos;t enter sensitive information (like passwords or
              ID numbers) into the tools.
            </li>
          </ul>

          <h2>2. Data we do not collect</h2>
          <ul>
            <li>No names, email addresses, phone numbers, or resumes are sent to us.</li>
            <li>No account or login system exists on this site.</li>
            <li>We do not use cookies to track you across websites.</li>
            <li>We do not sell, rent, or share personal data — there is no personal data to share.</li>
          </ul>

          <h2>3. Analytics</h2>
          <p>
            To understand which pages are useful (for example, which guides get
            read and which tools get used), we may use a privacy-conscious
            analytics service that does <strong>not</strong> use cookies or
            collect personal identifiers, and never receives the content you
            type into the tools. Aggregate, anonymous statistics help us decide
            what to improve. We will always name the service here if we add one.
          </p>

          <h2>4. Advertising (future)</h2>
          <p>
            If and when the site is approved for Google AdSense, ads may be
            shown on some pages. Google may use cookies (including the DoubleClick
            cookie) to show ads based on your visits. You can manage or opt out of
            personalised advertising through{" "}
            <a
              href="https://adssettings.google.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              Google Ads Settings
            </a>
            . Ads will never be placed inside the tools in a way that blocks
            editing, copying, or downloading. Invalid traffic (including
            self-clicking) is strictly against our policy and Google&apos;s.
          </p>

          <h2>5. Third-party links</h2>
          <p>
            Our guides may link to third-party websites (for example, free
            learning resources). We are not responsible for the privacy
            practices of those sites. Please read their policies before sharing
            any information with them.
          </p>

          <h2>6. Security</h2>
          <p>
            The site is served over HTTPS. Because all tool data stays in your
            browser, there is no server-side database of user information to
            protect — but we still keep the site&apos;s code free of hardcoded
            secrets and follow safe handling practices for any user-generated
            text (it is rendered as text, never as executable HTML).
          </p>

          <h2>7. Children</h2>
          <p>
            The site is intended for students and job seekers, including
            users under 18. We do not knowingly collect personal information
            from anyone.
          </p>

          <h2>8. Changes to this policy</h2>
          <p>
            If we change this policy, we will update the date at the top of
            this page. Material changes will also be mentioned on the home
            page for a reasonable period.
          </p>

          <h2>9. Contact</h2>
          <p>
            Questions about privacy? Email us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or visit
            the <a href="/contact">Contact page</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
