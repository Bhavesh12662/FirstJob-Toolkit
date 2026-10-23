import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import EmailGenerator from "@/components/tools/EmailGenerator";

export const metadata: Metadata = {
  title: "Free Cover Letter & Email Generator for Job Applications",
  description:
    "Generate professional internship application emails, recruiter outreach messages, follow-ups, and thank-you notes. Rule-based templates you can edit before sending — free, with no AI API and no sign-up.",
  alternates: { canonical: "/tools/email-generator" },
};

export default function EmailGeneratorPage() {
  return (
    <div className="bg-slate-50 py-10">
      <Container>
        <header className="mb-8 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/tools" className="hover:text-brand-600 hover:underline">Tools</Link>
            <span aria-hidden="true"> / </span>
            <span className="font-medium text-slate-700" aria-current="page">Email Generator</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Cover letter &amp; email generator
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Choose a template, fill in your real details, and get a professional
            email you can edit and copy. Five templates, two tones, zero
            sign-ups.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li className="badge">5 templates</li>
            <li className="badge">2 tones</li>
            <li className="badge">Editable output</li>
            <li className="badge">Copy to clipboard</li>
            <li className="badge">Runs 100% in your browser</li>
          </ul>
        </header>

        <EmailGenerator />

        <section className="mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Email templates with examples
          </h2>
          <p className="mt-2 text-slate-600">
            Want to see full examples and learn the strategy behind each type
            of email? Read our guides:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            <li>
              <Link href="/emails/internship-application" className="text-brand-600 hover:underline">
                Internship application email — templates &amp; subject lines
              </Link>
            </li>
            <li>
              <Link href="/emails/recruiter-outreach" className="text-brand-600 hover:underline">
                How to email a recruiter (with samples)
              </Link>
            </li>
            <li>
              <Link href="/emails/follow-up" className="text-brand-600 hover:underline">
                Job application follow-up emails &amp; cadence
              </Link>
            </li>
            <li>
              <Link href="/emails/thank-you" className="text-brand-600 hover:underline">
                Interview thank-you email examples
              </Link>
            </li>
          </ul>
        </section>
      </Container>
    </div>
  );
}
