import Link from "next/link";
import Container from "@/components/Container";

const tools = [
  {
    href: "/tools/resume-builder",
    title: "Fresher Resume Builder",
    description:
      "Fill in a simple form and get a clean, A4, ATS-friendly resume with a live preview. Download as PDF - free, no sign-up.",
    icon: "📄",
  },
  {
    href: "/tools/interview-prep",
    title: "Interview Question Library",
    description:
      "HR, JavaScript, frontend, and internship questions with beginner-friendly answers. Practice mode and revision marks included.",
    icon: "🎯",
  },
  {
    href: "/tools/cover-letter-generator",
    title: "Cover Letter & Email Generator",
    description:
      "Rule-based templates for internship applications, recruiter outreach, follow-ups, and thank-you emails. Edit before you send.",
    icon: "✉️",
  },
  {
    href: "/tools/job-tracker",
    title: "Job Application Tracker",
    description:
      "Log every application with status, notes, and follow-up dates. See your stats and export everything to CSV.",
    icon: "🗂️",
  },
];

const popularQuestions = [
  { href: "/interview/tell-me-about-yourself", label: "Tell me about yourself - sample structures" },
  { href: "/interview/hr-questions-freshers", label: "HR interview questions for freshers" },
  { href: "/interview/javascript", label: "JavaScript interview questions for beginners" },
  { href: "/interview/frontend-prep", label: "Frontend developer interview preparation" },
  { href: "/interview/internship-prep", label: "Internship interview preparation" },
];

const recentGuides = [
  { href: "/resume/bca-fresher-resume", label: "BCA fresher resume example and format" },
  { href: "/resume/no-experience", label: "How to write a resume with no experience" },
  { href: "/resume/project-descriptions", label: "Project descriptions that impress recruiters" },
  { href: "/emails/internship-application", label: "Internship application email templates" },
  { href: "/emails/follow-up", label: "Job application follow-up emails" },
  { href: "/resume/mistakes-to-avoid", label: "10 resume mistakes freshers must avoid" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 via-white to-white">
        <Container className="py-16 sm:py-24 text-center">
          <span className="inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-brand-700 shadow-sm ring-1 ring-brand-100">
            100% free · No sign-up · Your data stays in your browser
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-slate-950 sm:text-5xl">
            Everything you need to land your{" "}
            <span className="text-brand-600">first job</span> - in one toolkit
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            FirstJob Toolkit helps students, freshers, and internship seekers
            build a strong resume, prepare for interviews, write professional
            emails, and keep track of every application. Built for Indian
            BCA/BTech students first, useful for anyone starting out.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link href="/tools/resume-builder" className="btn btn-primary text-base">
              Build a free resume →
            </Link>
            <Link href="/tools/interview-prep" className="btn btn-secondary text-base">
              Practice interview questions
            </Link>
          </div>
          <p className="mt-4 text-sm text-slate-500">
            Takes less than 10 minutes. Works on any phone.
          </p>
        </Container>
      </section>

      {/* Featured tools */}
      <section className="border-t border-slate-200 bg-white py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Free tools, built for freshers
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Every tool runs entirely in your browser. Nothing is uploaded, and
              no account is needed.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {tools.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-white hover:shadow-md"
              >
                <span aria-hidden="true" className="text-3xl">{tool.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-brand-700">
                  {tool.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {tool.description}
                </p>
                <span className="mt-4 inline-block text-sm font-semibold text-brand-600">
                  Open tool →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/tools" className="btn btn-ghost">
              See all tools
            </Link>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              No tutorials needed - each tool guides you step by step.
            </p>
          </div>
          <ol className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-3">
            {[
              {
                step: "1",
                title: "Build your resume",
                text: "Enter your real details once. Get a clean, printable A4 resume in two layouts.",
              },
              {
                step: "2",
                title: "Prepare & apply",
                text: "Practice interview questions, generate professional emails, and send real applications.",
              },
              {
                step: "3",
                title: "Track & follow up",
                text: "Log every application, see upcoming follow-ups, and never miss a chance.",
              },
            ].map((item) => (
              <li
                key={item.step}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {item.step}
                </span>
                <h3 className="mt-4 font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Popular interview questions */}
      <section className="border-t border-slate-200 bg-white py-16">
        <Container>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950">
                Popular interview guides
              </h2>
              <p className="mt-3 max-w-xl text-slate-600">
                Honest answers and sample structures - not memorisation scripts.
              </p>
            </div>
            <Link href="/interview" className="btn btn-secondary shrink-0">
              All interview prep →
            </Link>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {popularQuestions.map((q) => (
              <li key={q.href}>
                <Link
                  href={q.href}
                  className="block h-full rounded-2xl border border-slate-200 bg-slate-50 p-5 shadow-sm transition hover:border-brand-200 hover:bg-white"
                >
                  <span className="text-sm font-semibold text-slate-900">
                    {q.label}
                  </span>
                  <span className="mt-2 block text-sm font-semibold text-brand-600">
                    Read the guide →
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/tools/interview-prep"
                className="block h-full rounded-2xl border border-dashed border-brand-300 bg-brand-50/60 p-5 shadow-sm transition hover:bg-brand-50"
              >
                <span className="text-sm font-semibold text-slate-900">
                  Or practice 28+ questions interactively
                </span>
                <span className="mt-2 block text-sm font-semibold text-brand-600">
                  Open the question library →
                </span>
              </Link>
            </li>
          </ul>
        </Container>
      </section>

      {/* Guide categories */}
      <section className="border-t border-slate-200 bg-slate-50 py-16">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950">
              Career guides, written for beginners
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Original, practical guides - resumes, interviews, and professional
              emails.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">📄 Resume guides</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/resume/bca-fresher-resume" className="text-sm text-brand-600 hover:underline">BCA fresher resume example</Link></li>
                <li><Link href="/resume/no-experience" className="text-sm text-brand-600 hover:underline">Resume with no experience</Link></li>
                <li><Link href="/resume/project-descriptions" className="text-sm text-brand-600 hover:underline">Project description examples</Link></li>
                <li><Link href="/resume/skills-for-freshers" className="text-sm text-brand-600 hover:underline">Skills for a fresher resume</Link></li>
                <li><Link href="/resume/mistakes-to-avoid" className="text-sm text-brand-600 hover:underline">Resume mistakes to avoid</Link></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">🎯 Interview guides</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/interview/hr-questions-freshers" className="text-sm text-brand-600 hover:underline">HR questions for freshers</Link></li>
                <li><Link href="/interview/tell-me-about-yourself" className="text-sm text-brand-600 hover:underline">Tell me about yourself</Link></li>
                <li><Link href="/interview/javascript" className="text-sm text-brand-600 hover:underline">JavaScript questions for beginners</Link></li>
                <li><Link href="/interview/frontend-prep" className="text-sm text-brand-600 hover:underline">Frontend interview preparation</Link></li>
                <li><Link href="/interview/internship-prep" className="text-sm text-brand-600 hover:underline">Internship interview preparation</Link></li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900">✉️ Email guides</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/emails/internship-application" className="text-sm text-brand-600 hover:underline">Internship application email</Link></li>
                <li><Link href="/emails/recruiter-outreach" className="text-sm text-brand-600 hover:underline">Email to a recruiter</Link></li>
                <li><Link href="/emails/follow-up" className="text-sm text-brand-600 hover:underline">Follow-up email</Link></li>
                <li><Link href="/emails/thank-you" className="text-sm text-brand-600 hover:underline">Interview thank-you email</Link></li>
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Recently published + trust */}
      <section className="border-t border-slate-200 bg-white py-16">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Start with a popular guide
              </h2>
              <ul className="mt-6 space-y-3">
                {recentGuides.map((guide) => (
                  <li key={guide.href} className="flex items-start gap-3">
                    <span aria-hidden="true" className="mt-1 text-brand-500">→</span>
                    <Link
                      href={guide.href}
                      className="font-medium text-slate-800 hover:text-brand-600 hover:underline"
                    >
                      {guide.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href="/guides" className="btn btn-ghost mt-6">
                Browse all guides
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                Built privacy-first
              </h2>
              <ul className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600">
                <li className="flex gap-3">
                  <span aria-hidden="true">🔒</span>
                  <span>
                    <strong className="text-slate-900">Nothing leaves your device.</strong>{" "}
                    Resumes, emails, and job applications are stored only in your
                    browser&apos;s local storage - never uploaded to a server.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true">🚫</span>
                  <span>
                    <strong className="text-slate-900">No accounts, no spam.</strong> We
                    don&apos;t ask for your email, and we don&apos;t sell data -
                    we don&apos;t collect it.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true">✅</span>
                  <span>
                    <strong className="text-slate-900">Honest content.</strong> No fake
                    testimonials, no fake success counts, no &ldquo;guaranteed job&rdquo;
                    promises. Just practical help.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true">📱</span>
                  <span>
                    <strong className="text-slate-900">Fast on any phone.</strong>{" "}
                    The site is designed to work well on lower-end Android phones
                    and slow connections.
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-xs text-slate-500">
                Read our{" "}
                <Link href="/privacy" className="text-brand-600 hover:underline">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/affiliate-disclosure" className="text-brand-600 hover:underline">
                  Affiliate Disclosure
                </Link>
                .
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
