import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Career Guides for Students & Freshers",
  description:
    "Original, beginner-friendly career guides: how to write a fresher resume, answer HR and JavaScript interview questions, and write internship application and follow-up emails.",
  alternates: { canonical: "/guides" },
};

const sections = [
  {
    icon: "📄",
    title: "Resume guides",
    description: "Everything about writing a resume that gets shortlisted — even with zero experience.",
    guides: [
      { href: "/resume/bca-fresher-resume", label: "BCA fresher resume example & format", desc: "A complete, annotated sample resume for BCA graduates." },
      { href: "/resume/no-experience", label: "Resume for freshers with no experience", desc: "What to write when every job asks for experience you don't have." },
      { href: "/resume/project-descriptions", label: "Resume project description examples", desc: "The formula + 5 copy-adapt examples for student projects." },
      { href: "/resume/skills-for-freshers", label: "Skills to include on a fresher resume", desc: "Technical and soft skills that are honest and useful." },
      { href: "/resume/mistakes-to-avoid", label: "Resume mistakes to avoid", desc: "10 common fresher mistakes — and exactly how to fix each one." },
    ],
  },
  {
    icon: "🎯",
    title: "Interview guides",
    description: "Prepare for HR rounds, technical questions, and internship interviews.",
    guides: [
      { href: "/interview/hr-questions-freshers", label: "HR interview questions for freshers", desc: "15 common HR questions with sample answers and tips." },
      { href: "/interview/tell-me-about-yourself", label: "Tell me about yourself", desc: "3 proven answer structures with full sample answers." },
      { href: "/interview/javascript", label: "JavaScript interview questions for beginners", desc: "Core concepts explained in plain language." },
      { href: "/interview/frontend-prep", label: "Frontend developer interview preparation", desc: "A focused roadmap and checklist for freshers." },
      { href: "/interview/internship-prep", label: "Internship interview preparation", desc: "What to expect and how to answer with no experience." },
    ],
  },
  {
    icon: "✉️",
    title: "Email guides",
    description: "Write professional emails that actually get replies.",
    guides: [
      { href: "/emails/internship-application", label: "Internship application email", desc: "Templates and subject lines that get opened." },
      { href: "/emails/recruiter-outreach", label: "Email to a recruiter", desc: "How to reach out to recruiters on LinkedIn and email." },
      { href: "/emails/follow-up", label: "Job application follow-up email", desc: "When and how to follow up without being annoying." },
      { href: "/emails/thank-you", label: "Interview thank-you email", desc: "A short, sincere note that keeps you memorable." },
    ],
  },
];

export default function GuidesPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-14">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            Career guides
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Short, honest, original guides written for students and freshers.
            Every guide links to a free tool you can use right away.
          </p>
        </Container>
      </section>

      {sections.map((section) => (
        <section
          key={section.title}
          className="border-t border-slate-200 bg-slate-50 py-14 first:bg-white"
        >
          <Container>
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="text-3xl">{section.icon}</span>
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                  {section.title}
                </h2>
                <p className="text-slate-600">{section.description}</p>
              </div>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {section.guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-md"
                >
                  <h3 className="font-bold text-slate-900 group-hover:text-brand-700">
                    {guide.label}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {guide.desc}
                  </p>
                  <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                    Read guide →
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      ))}
    </>
  );
}
