import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "BCA Fresher Resume Example & Format (Free, 2026)",
  description:
    "A complete, annotated BCA fresher resume example you can adapt: the right section order, what to write in each section, a full sample resume, and common mistakes BCA students make.",
  alternates: { canonical: "/resume/bca-fresher-resume" },
};

export default function BcaFresherResumePage() {
  return (
    <GuideLayout
      title="BCA fresher resume example & format"
      description="A complete, annotated sample resume for BCA graduates applying for their first IT job or internship — with the section order recruiters expect and copy-adapt examples for every line."
      category="Resume guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Resume guides", href: "/guides" },
        { label: "BCA fresher resume" },
      ]}
    >
      <p>
        A BCA fresher resume is not a record of achievements — it is a{" "}
        <strong>structured argument that you are ready to learn on the job</strong>.
        Recruiters spend seconds on a first scan, so your resume must make three
        things obvious fast: what you studied, what you can build, and that you
        are serious.
      </p>

      <h2>The section order that works for BCA freshers</h2>
      <ol>
        <li>
          <strong>Header</strong> — name, phone, email, city, LinkedIn, GitHub or
          portfolio link. Nothing else (no photo, no full address, no date of birth).
        </li>
        <li>
          <strong>Professional summary</strong> — 2–3 sentences: your degree, your
          core skills, and the role you want.
        </li>
        <li>
          <strong>Skills</strong> — grouped (Languages / Frameworks / Tools /
          Databases) so a scan takes seconds.
        </li>
        <li>
          <strong>Projects</strong> — for a fresher, this is the most important
          section. Put it <em>before</em> experience if you have no internships.
        </li>
        <li>
          <strong>Education</strong> — degree, college/university, years, CGPA or
          percentage.
        </li>
        <li>
          <strong>Experience / internships</strong> — only if you have them. It is
          completely fine to skip or compress this as a fresher.
        </li>
        <li>
          <strong>Certifications &amp; achievements</strong> — online courses,
          hackathons, exhibitions.
        </li>
        <li>
          <strong>Languages</strong> — especially useful in India, where
          employers value English plus a regional language.
        </li>
      </ol>

      <Callout title="One page, always">
        For a BCA fresher, the resume should be <strong>one A4 page</strong>.
        Two pages signal that you don&apos;t know what matters. If you overflow one
        page, cut content — don&apos;t shrink the font below ~10pt.
      </Callout>

      <h2>Complete sample resume (copy-adapt)</h2>
      <p>
        Here is a realistic sample for a BCA graduate applying for a frontend
        internship. Replace every line with your own truth — never send this
        as-is.
      </p>
      <Example label="Sample resume — BCA fresher, frontend internship">
        <pre>{`ANANYA SHARMA
Frontend Developer (Aspiring) · Pune, Maharashtra
+91 98765 43210 · ananya.sharma@example.com · linkedin.com/in/ananyasharma · github.com/ananyasharma

PROFILE
BCA graduate skilled in HTML, CSS, and JavaScript, with four academic projects and a
2-month web development internship. Built responsive interfaces tested on low-end
Android devices. Seeking a frontend internship to contribute and grow.

SKILLS
Languages:  HTML5, CSS3, JavaScript (ES6+)
Frameworks: React, Tailwind CSS
Tools:      Git & GitHub, VS Code, Chrome DevTools
Database:   MySQL (basics)

PROJECTS
Library Management System                    github.com/ananyasharma/library-system
HTML, CSS, JavaScript, PHP, MySQL
• Built a web app for issuing/returning books with separate logins for students and librarians
• Used SQL joins to auto-generate overdue reports, cutting manual register work by ~70%
• Won 2nd place in the inter-college project exhibition (2024)

Weather Dashboard                            github.com/ananyasharma/weather-dashboard
React, REST API, Tailwind CSS
• 5-day city forecast app using the OpenWeather API
• Added loading, error, and empty states for slow networks

EDUCATION
Bachelor of Computer Applications (BCA) — Savitribai Phule Pune University (aff. college), Pune
2022 – 2025 · CGPA 8.4/10 · Coursework: Data Structures, DBMS, Web Development, OS

EXPERIENCE
Web Development Intern — TechStart Solutions, Pune · Jun 2024 – Aug 2024
• Redesigned the landing page with responsive Tailwind CSS; mobile load time improved ~35%
• Fixed 12+ UI bugs and built reusable components used across three internal pages

CERTIFICATIONS
Responsive Web Design — freeCodeCamp (2024) · JavaScript Algorithms — freeCodeCamp (2024)

LANGUAGES
English (fluent) · Hindi (fluent) · Marathi (conversational)`}</pre>
      </Example>

      <h2>Line-by-line writing tips</h2>
      <ul>
        <li>
          <strong>Name line:</strong> full name in slightly larger, bold type.
          Below it, one line with your target role — it frames everything else.
        </li>
        <li>
          <strong>Profile:</strong> degree + top 3 skills + what you want. Avoid
          &ldquo;hardworking and passionate&rdquo; — everyone writes that, so it means
          nothing.
        </li>
        <li>
          <strong>Skills:</strong> group by category and only list skills you can
          explain. If you can&apos;t answer &ldquo;what is a closure?&rdquo; in an interview,
          don&apos;t list advanced JavaScript.
        </li>
        <li>
          <strong>Projects:</strong> title, one-line tech stack, and 2–3 bullets
          that start with an action verb and end with a result. See our{" "}
          <a href="/resume/project-descriptions">project description guide</a>.
        </li>
        <li>
          <strong>Education:</strong> degree, institution, years, and CGPA.
          Mentioning relevant coursework helps when your projects are thin.
        </li>
      </ul>

      <ToolCta
        href="/tools/resume-builder"
        cta="Open the free Resume Builder"
        heading="Don't want to format this by hand?"
      >
        The FirstJob Toolkit resume builder gives you this exact structure with a
        live preview, two clean layouts, and a free A4 PDF download — everything
        stays in your browser.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/resume/no-experience">Resume for freshers with no experience</a></li>
        <li><a href="/resume/skills-for-freshers">Skills to include on a fresher resume</a></li>
        <li><a href="/resume/mistakes-to-avoid">10 resume mistakes to avoid</a></li>
        <li><a href="/resume/project-descriptions">Project description examples</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Should a BCA fresher resume include a photo?",
            answer:
              "No. Indian IT recruiters don't expect a photo, and including one can introduce unconscious bias. It also wastes space on a one-page resume. Use that space for a project bullet instead.",
          },
          {
            question: "Is one page really enough for a BCA fresher resume?",
            answer:
              "Yes — one A4 page is the standard for freshers. If you're struggling to fit everything, cut the least relevant content rather than reducing font size or margins. Two pages are only common after 2+ years of experience.",
          },
          {
            question: "What if my CGPA is low?",
            answer:
              "You can omit your CGPA if it's below roughly 7/10 (or 70%), unless the job posting explicitly asks for it. Projects, skills, and internship work matter more. Never lie about it — it's easily verified.",
          },
          {
            question: "Should I mention a backlog?",
            answer:
              "Only if asked directly, or if the company's eligibility criteria require a clean academic record — in that case, honesty is the only option. Otherwise, leave backlogs off the resume; they're a conversation topic, not a headline.",
          },
        ]}
      />
    </GuideLayout>
  );
}
