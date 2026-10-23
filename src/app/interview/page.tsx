import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Interview Preparation for Freshers & Students",
  description:
    "Prepare for your first job or internship interview with honest guides and a free practice library: HR questions, JavaScript basics, frontend preparation, and sample answers that explain the reasoning.",
  alternates: { canonical: "/interview" },
};

const categories = [
  {
    icon: "💼",
    title: "HR & introduction questions",
    description: "The classic fresher questions — tell me about yourself, strengths, weaknesses, salary expectations — with sample answers.",
    links: [
      { href: "/interview/hr-questions-freshers", label: "15 HR questions with sample answers" },
      { href: "/interview/tell-me-about-yourself", label: "Tell me about yourself: 3 proven structures" },
    ],
  },
  {
    icon: "💻",
    title: "Technical questions",
    description: "Beginner-friendly JavaScript and frontend questions, explained in plain language with the reasoning behind each answer.",
    links: [
      { href: "/interview/javascript", label: "JavaScript questions for beginners" },
      { href: "/interview/frontend-prep", label: "Frontend developer interview preparation" },
    ],
  },
  {
    icon: "🎓",
    title: "Internship interviews",
    description: "What internship interviews actually look like, what tasks to expect, and how to answer when you have no experience yet.",
    links: [
      { href: "/interview/internship-prep", label: "Internship interview preparation guide" },
      { href: "/emails/internship-application", label: "Internship application email templates" },
    ],
  },
];

const steps = [
  {
    title: "Learn the structure of a good answer",
    text: "Most interview answers follow a simple pattern: context, action, result. Our guides show you the pattern with real examples.",
  },
  {
    title: "Practice out loud",
    text: "Reading an answer and saying it are different skills. Use the practice mode in the question library and speak your answers aloud.",
  },
  {
    title: "Prepare your own stories",
    text: "Interviewers believe stories, not adjectives. Prepare 3–4 short stories from your projects, college, or internships using the STAR pattern.",
  },
];

export default function InterviewHubPage() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white py-14">
        <Container className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-950">
            Interview preparation, made simple
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            You don&apos;t need to memorise hundreds of answers. You need a few
            good structures, honest examples, and practice. Start here.
          </p>
          <div className="mt-7">
            <Link href="/tools/interview-prep" className="btn btn-primary text-base">
              Open the free question library →
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <span aria-hidden="true" className="text-4xl">{category.icon}</span>
                <h2 className="mt-4 text-xl font-bold text-slate-900">
                  {category.title}
                </h2>
                <p className="mt-2 flex-1 leading-relaxed text-slate-600">
                  {category.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm font-semibold text-brand-600 hover:underline"
                      >
                        → {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-slate-200 bg-white py-14">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold tracking-tight text-slate-950 text-center">
              A simple 3-step preparation plan
            </h2>
            <ol className="mt-8 space-y-5">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="mt-1 text-slate-600">{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <p className="text-sm leading-relaxed text-amber-900">
                <strong>Be honest.</strong> Never memorise an answer you don&apos;t
                understand, and never claim experience you don&apos;t have. Interviewers
                can tell, and trust is hard to rebuild. Our guides show you how to
                present real, modest experience in a strong way.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
