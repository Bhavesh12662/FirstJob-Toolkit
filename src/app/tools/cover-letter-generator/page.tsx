import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import CoverLetterGenerator from "@/components/tools/CoverLetterGenerator";

export const metadata: Metadata = {
  title: "Free Cover Letter and Email Generator for Students and Freshers",
  description:
    "Create a professional cover letter, internship application email, fresher job email, recruiter outreach message, follow-up note, and interview thank-you email — all in your browser, with no sign-up or AI API needed.",
  alternates: { canonical: "/tools/cover-letter-generator" },
};

export default function CoverLetterGeneratorPage() {
  return (
    <div className="bg-slate-50 py-10">
      <Container>
        <header className="mb-8 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 hover:underline">
              Home
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/tools" className="hover:text-brand-600 hover:underline">
              Tools
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="font-medium text-slate-700" aria-current="page">
              Cover Letter &amp; Email Generator
            </span>
          </nav>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Cover letter &amp; professional email generator
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Create a polished cover letter or application email using your real
            details, then edit the draft before sending. It supports internship
            applications, fresher job applications, recruiter outreach, follow-ups,
            and interview thank-you notes.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li className="badge">6 generator types</li>
            <li className="badge">3 tones</li>
            <li className="badge">Editable output</li>
            <li className="badge">Privacy-first</li>
          </ul>
        </header>

        <CoverLetterGenerator />

        <section className="mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Build a stronger application toolkit
          </h2>
          <p className="mt-2 text-slate-600">
            Pair this tool with a strong resume and an organised job search. Use
            the generated drafts as a starting point, then edit them to reflect
            your actual experience and goals.
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            <li>
              <Link href="/tools/resume-builder" className="text-brand-600 hover:underline">
                Resume Builder
              </Link>
            </li>
            <li>
              <Link href="/guides" className="text-brand-600 hover:underline">
                Career guides and application advice
              </Link>
            </li>
            <li>
              <Link href="/emails/internship-application" className="text-brand-600 hover:underline">
                Internship application email examples
              </Link>
            </li>
            <li>
              <Link href="/interview/hr-questions-freshers" className="text-brand-600 hover:underline">
                Interview preparation for freshers
              </Link>
            </li>
          </ul>
        </section>
      </Container>
    </div>
  );
}
