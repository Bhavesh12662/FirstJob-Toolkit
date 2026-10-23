import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import JobTracker from "@/components/tools/JobTracker";

export const metadata: Metadata = {
  title: "Free Job Application Tracker — Organize & Follow Up",
  description:
    "Track every job and internship application in one place: company, role, status, notes, and follow-up dates. See your stats, get follow-up reminders, and export everything to CSV. Data stays in your browser.",
  alternates: { canonical: "/tools/job-tracker" },
};

export default function JobTrackerPage() {
  return (
    <div className="bg-slate-50 py-10">
      <Container>
        <header className="mb-8 max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-slate-500">
            <Link href="/" className="hover:text-brand-600 hover:underline">Home</Link>
            <span aria-hidden="true"> / </span>
            <Link href="/tools" className="hover:text-brand-600 hover:underline">Tools</Link>
            <span aria-hidden="true"> / </span>
            <span className="font-medium text-slate-700" aria-current="page">Job Tracker</span>
          </nav>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Job application tracker
          </h1>
          <p className="mt-3 text-lg text-slate-600">
            Applied to twenty places and can&apos;t remember which ones? Log every
            application here, watch your pipeline grow, and never miss a
            follow-up.
          </p>
          <ul className="mt-4 flex flex-wrap gap-2 text-sm">
            <li className="badge">Add, edit & delete</li>
            <li className="badge">Search, filter & sort</li>
            <li className="badge">Follow-up reminders</li>
            <li className="badge">CSV export</li>
            <li className="badge">Stored locally in your browser</li>
          </ul>
        </header>

        <JobTracker />

        <section className="mt-14 max-w-3xl rounded-2xl border border-slate-200 bg-white p-8">
          <h2 className="text-xl font-bold text-slate-900">
            A simple application routine that works
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-600">
            <li>
              <strong>Apply, then log immediately.</strong> Add the application
              to the tracker the same day — while the details are fresh.
            </li>
            <li>
              <strong>Set a follow-up date</strong> 5–7 days after applying.
              The tracker highlights what&apos;s due in the next 7 days.
            </li>
            <li>
              <strong>Update the status</strong> after every email, call, or
              interview. Your stats show where you actually stand.
            </li>
            <li>
              <strong>Export to CSV weekly</strong> so you always have a backup
              outside the browser.
            </li>
            <li>
              <strong>Review rejections honestly.</strong> A pattern in rejections
              tells you exactly what to fix — resume, skills, or interview prep.
            </li>
          </ol>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/emails/follow-up" className="btn btn-secondary">
              Follow-up email templates
            </Link>
            <Link href="/tools/email-generator" className="btn btn-secondary">
              Open the email generator
            </Link>
            <Link href="/interview" className="btn btn-secondary">
              Prepare for interviews
            </Link>
          </div>
        </section>
      </Container>
    </div>
  );
}
