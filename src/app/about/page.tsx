import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About FirstJob Toolkit",
  description:
    "FirstJob Toolkit is a free, privacy-first collection of tools and guides that helps students, freshers, and internship seekers build resumes, prepare for interviews, write professional emails, and track job applications.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <Container className="max-w-3xl py-14">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          About FirstJob Toolkit
        </h1>
        <div className="guide mt-8">
          <p>
            FirstJob Toolkit started with a simple observation: getting a first
            job is hard not because students lack skills, but because nobody
            teaches them the <em>process</em> — how to write a resume with no
            experience, how to answer &ldquo;tell me about yourself&rdquo;, how to
            email a recruiter, or how to keep track of the twenty applications
            they sent last month.
          </p>
          <p>
            This site bundles that process into four free tools and a library of
            honest guides. It is built primarily for Indian BCA/BTech students,
            freshers, and internship seekers, but the advice works for
            entry-level job seekers anywhere.
          </p>

          <h2>Who it is for</h2>
          <ul>
            <li>College students applying for internships.</li>
            <li>Fresh graduates writing their first resume.</li>
            <li>Self-taught developers preparing for their first technical interview.</li>
            <li>Anyone switching careers into an entry-level role.</li>
          </ul>

          <h2>Our principles</h2>
          <ul>
            <li>
              <strong>Free and usable without an account.</strong> Every tool works
              immediately. We don&apos;t gate features behind sign-ups or payments.
            </li>
            <li>
              <strong>Privacy-first.</strong> Your resumes, emails, and job
              applications are stored only in your own browser. We don&apos;t run a
              backend for your personal data, and we don&apos;t track you across
              the web.
            </li>
            <li>
              <strong>Honest content.</strong> No fake testimonials, no fake
              success statistics, no &ldquo;guaranteed job in 7 days&rdquo; claims. We
              explain what actually works and why.
            </li>
            <li>
              <strong>Beginner-friendly, not beginner-limiting.</strong> Guides
              explain concepts in plain language, but the tools are full-featured
              and the advice is practical.
            </li>
            <li>
              <strong>Fast and accessible.</strong> The site is built to load
              quickly on lower-end Android phones and slow connections, with
              keyboard-friendly navigation and visible focus states.
            </li>
          </ul>

          <h2>How the site is funded</h2>
          <p>
            The site is currently run at zero cost. In the future it may show
            Google AdSense ads (only after approval, and never inside the tools)
            and may include clearly-disclosed affiliate links for genuinely
            relevant career resources. Any such income is disclosed on our{" "}
            <Link href="/affiliate-disclosure">Affiliate Disclosure</Link> page.
            Recommendations are based on relevance to you, not on commission.
          </p>

          <h2>A note on expectations</h2>
          <p>
            No tool or guide can guarantee a job, an interview, or a particular
            salary. Hiring depends on many factors outside anyone&apos;s control.
            What we <em>can</em> do is help you avoid common mistakes, present
            yourself honestly and professionally, and stay organised — which
            measurably improves your chances.
          </p>

          <h2>Get in touch</h2>
          <p>
            Found a bug, have a suggestion, or want to contribute a guide? Visit
            the <Link href="/contact">Contact page</Link>. We read everything.
          </p>
        </div>
      </Container>
    </div>
  );
}
