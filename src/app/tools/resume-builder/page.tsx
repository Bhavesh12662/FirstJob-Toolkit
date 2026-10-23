import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import ResumeBuilder from "@/components/tools/ResumeBuilder";

export const metadata: Metadata = {
  title: "Free Fresher Resume Builder — Create & Download PDF",
  description:
    "Build a clean, ATS-friendly fresher resume in minutes with a live preview and two professional layouts. Download as a free A4 PDF — no sign-up, no watermarks, and your data never leaves your browser.",
  alternates: { canonical: "/tools/resume-builder" },
  openGraph: {
    title: "Free Fresher Resume Builder — FirstJob Toolkit",
    description:
      "Live preview, two clean layouts, A4 print-friendly output, and free PDF download. Everything is stored only in your browser.",
  },
};

export default function ResumeBuilderPage() {
  return (
    <div className="bg-slate-50 py-10">
      <Container>
        <header className="mb-8 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/tools" className="hover:text-brand-600 hover:underline">Tools</Link>
            <span aria-hidden="true"> / </span>
            <span className="font-medium text-slate-700" aria-current="page">Resume Builder</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Free fresher resume builder
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Fill in the form, watch the live preview, and download a clean A4
            PDF. Two layouts, no sign-up, no watermark — and everything you
            type stays in your browser.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li className="badge">Live preview</li>
            <li className="badge">2 layouts</li>
            <li className="badge">A4 print-ready</li>
            <li className="badge">Free PDF download</li>
            <li className="badge">Works offline in your browser</li>
          </ul>
        </header>

        <ResumeBuilder />

        <section className="mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Tips for a stronger fresher resume
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            <li>Keep it to <strong>one page</strong> — freshers rarely need more.</li>
            <li>Put <strong>projects before experience</strong> if you have no job experience.</li>
            <li>Start every bullet with an <strong>action verb</strong> and end with a result where possible.</li>
            <li>Only list <strong>skills you can explain</strong> in an interview.</li>
            <li>Save the PDF with a professional filename: <code>Ananya-Sharma-Frontend-Developer.pdf</code>.</li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/resume/bca-fresher-resume" className="btn btn-secondary">
              See a BCA fresher resume example
            </Link>
            <Link href="/resume/no-experience" className="btn btn-secondary">
              Resume with no experience?
            </Link>
            <Link href="/resume/project-descriptions" className="btn btn-secondary">
              Write better project descriptions
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
