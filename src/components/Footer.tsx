import Link from "next/link";
import { siteConfig } from "@/lib/site";

const toolLinks = [
  { href: "/tools/resume-builder", label: "Resume Builder" },
  { href: "/tools/interview-prep", label: "Interview Question Library" },
  { href: "/tools/cover-letter-generator", label: "Cover Letter & Email Generator" },
  { href: "/tools/job-tracker", label: "Job Application Tracker" },
];

const resourceLinks = [
  { href: "/guides", label: "Career Guides" },
  { href: "/interview", label: "Interview Preparation" },
  { href: "/resume/bca-fresher-resume", label: "BCA Fresher Resume Example" },
  { href: "/resume/no-experience", label: "Resume With No Experience" },
  { href: "/emails/internship-application", label: "Internship Application Email" },
  { href: "/interview/hr-questions-freshers", label: "HR Questions for Freshers" },
];

const legalLinks = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="text-lg font-bold tracking-tight text-slate-900">
              FirstJob<span className="text-brand-600">Toolkit</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Free, privacy-first tools and honest guides to help students,
              freshers, and internship seekers land their first opportunity.
            </p>
            <p className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-xs font-medium text-green-800">
              No sign-up. No payment. Your data stays in your browser.
            </p>
          </div>
          <nav aria-label="Tools">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Tools
            </h2>
            <ul className="mt-4 space-y-2">
              {toolLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-brand-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Resources">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Resources
            </h2>
            <ul className="mt-4 space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-brand-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company and legal">
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-900">
              Company
            </h2>
            <ul className="mt-4 space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-600 hover:text-brand-600 hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.name}. Made with care for freshers in India and
            beyond.
          </p>
          <p>
            Free to use. No accounts, no tracking of your personal data.
          </p>
        </div>
      </div>
    </footer>
  );
}
