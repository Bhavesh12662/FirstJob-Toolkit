import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact FirstJob Toolkit with feedback, bug reports, suggestions, or questions about our free resume, interview, email, and job tracking tools.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Container className="max-w-3xl py-14">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Contact us
        </h1>
        <div className="guide mt-8">
          <p>
            We&apos;d love to hear from you — whether it&apos;s a bug report, a feature
            suggestion, a correction to one of our guides, or just feedback on
            what helped you (or didn&apos;t).
          </p>

          <h2>Email</h2>
          <p>
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p>
            Please include the page URL if you&apos;re reporting an issue, and a
            screenshot if possible. We usually reply within a few days.
          </p>

          <h2>What to include in your message</h2>
          <ul>
            <li>
              <strong>Bug reports:</strong> what you did, what you expected, and
              what actually happened. Mention your device and browser (for
              example, &ldquo;Chrome on a Redmi Note phone&rdquo;) if the problem is
              visual.
            </li>
            <li>
              <strong>Content feedback:</strong> the guide or tool name and what
              was unclear or missing. Specific suggestions help us improve the
              page faster.
            </li>
            <li>
              <strong>Feature requests:</strong> describe the problem you&apos;re trying
              to solve. We prioritise tools that save real time for real job
              seekers.
            </li>
          </ul>

          <h2>What we can&apos;t help with</h2>
          <ul>
            <li>
              We can&apos;t write your resume, cover letter, or interview answers
              <em> for</em> you — that&apos;s what the tools and guides are for, and
              anything we write for you would be dishonest on a real application.
            </li>
            <li>
              We can&apos;t guarantee replies to job applications or contact
              recruiters on your behalf.
            </li>
            <li>
              We don&apos;t offer paid career counselling. If a request like that
              arrives, we&apos;ll point you to free, reputable resources instead.
            </li>
          </ul>

          <h2>Privacy note</h2>
          <p>
            If you email us, we use your address only to reply to you. We never
            add you to a mailing list — we don&apos;t run one. See our{" "}
            <a href="/privacy">Privacy Policy</a> for details.
          </p>
        </div>
      </Container>
    </div>
  );
}
