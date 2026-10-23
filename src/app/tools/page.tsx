import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Free Career Tools for Freshers",
  description:
    "Four free, browser-based tools for job seekers: a fresher resume builder with PDF download, an interview question library, a cover letter & email generator, and a job application tracker. No sign-up required.",
  alternates: { canonical: "/tools" },
};

const tools = [
  {
    href: "/tools/resume-builder",
    icon: "📄",
    title: "Fresher Resume Builder",
    description:
      "Create a clean, A4, ATS-friendly resume with a live preview. Choose between two layouts, then download as PDF using your browser's print dialog.",
    features: ["Live preview", "2 clean layouts", "A4 print & PDF download", "Sample data & validation"],
  },
  {
    href: "/tools/interview-prep",
    icon: "🎯",
    title: "Interview Question Library",
    description:
      "28+ HR, JavaScript, frontend, and internship questions with beginner-friendly answers that explain the reasoning behind each answer.",
    features: ["Search & category filters", "Practice mode", "Mark for revision", "Progress saved locally"],
  },
  {
    href: "/tools/cover-letter-generator",
    title: "Cover Letter & Email Generator",
    icon: "✉️",
    description:
      "Generate professional emails for internship applications, recruiter outreach, follow-ups, and thank-you notes. Fully editable before you send.",
    features: ["6 generator templates", "Three tone options", "Copy to clipboard", "Editable output"],
  },
  {
    href: "/tools/job-tracker",
    icon: "🗂️",
    title: "Job Application Tracker",
    description:
      "Keep a personal log of every application: company, role, status, notes, and follow-up dates. See your progress and export to CSV.",
    features: ["Add, edit & delete entries", "Search, filter & sort", "Follow-up reminders", "CSV export"],
  },
];

export default function ToolsPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-14">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            All tools
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Four free tools that cover the whole journey — from building your
            resume to tracking every application. Everything runs in your
            browser; no account needed.
          </p>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {tools.map((tool) => (
              <article
                key={tool.href}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span aria-hidden="true" className="text-4xl">{tool.icon}</span>
                <h2 className="mt-4 text-xl font-bold text-slate-900">{tool.title}</h2>
                <p className="mt-2 leading-relaxed text-slate-600">{tool.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {tool.features.map((feature) => (
                    <li key={feature} className="badge">{feature}</li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href={tool.href} className="btn btn-primary">
                    Open {tool.title.split(" ")[0]} →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-brand-200 bg-brand-50 p-8 text-center">
            <h2 className="text-xl font-bold text-slate-900">
              New to resumes and interviews?
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-slate-600">
              Read our step-by-step guides — they explain what recruiters actually
              look for, with original examples you can learn from.
            </p>
            <div className="mt-5 flex flex-wrap justify-center gap-3">
              <Link href="/guides" className="btn btn-secondary">Browse guides</Link>
              <Link href="/resume/bca-fresher-resume" className="btn btn-secondary">
                BCA fresher resume example
              </Link>
              <Link href="/interview/hr-questions-freshers" className="btn btn-secondary">
                HR questions for freshers
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
