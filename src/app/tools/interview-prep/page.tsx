import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import InterviewLibrary from "@/components/tools/InterviewLibrary";

export const metadata: Metadata = {
  title: "Interview Question Library — Practice HR, JavaScript & Frontend Questions",
  description:
    "A free interview question library for freshers: HR, JavaScript, frontend, and internship questions with beginner-friendly sample answers, a practice mode, and revision marks saved in your browser.",
  alternates: { canonical: "/tools/interview-prep" },
};

export default function InterviewPrepToolPage() {
  return (
    <div className="bg-slate-50 py-10">
      <Container>
        <header className="mb-8 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/tools" className="hover:text-brand-600 hover:underline">Tools</Link>
            <span aria-hidden="true"> / </span>
            <span className="font-medium text-slate-700" aria-current="page">Interview Prep</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Interview question library
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            28 curated questions for freshers, with sample answers that explain
            the <em>reasoning</em> — not just the script. Search, filter, practise,
            and mark questions for revision.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li className="badge">HR & introduction</li>
            <li className="badge">JavaScript</li>
            <li className="badge">Frontend</li>
            <li className="badge">Internship & behavioural</li>
            <li className="badge">Progress saved locally</li>
          </ul>
        </header>

        <InterviewLibrary />

        <section className="mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Want deeper preparation?
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
            <li>
              <Link href="/interview/hr-questions-freshers" className="text-brand-600 hover:underline">
                15 HR interview questions for freshers
              </Link>{" "}— with sample answers and tips.
            </li>
            <li>
              <Link href="/interview/tell-me-about-yourself" className="text-brand-600 hover:underline">
                Tell me about yourself: 3 proven structures
              </Link>{" "}— the question every fresher gets asked.
            </li>
            <li>
              <Link href="/interview/javascript" className="text-brand-600 hover:underline">
                JavaScript interview questions for beginners
              </Link>{" "}— concepts explained in plain language.
            </li>
            <li>
              <Link href="/interview/internship-prep" className="text-brand-600 hover:underline">
                Internship interview preparation
              </Link>{" "}— what to expect when you have no experience.
            </li>
          </ul>
        </section>
      </Container>
    </div>
  );
}
