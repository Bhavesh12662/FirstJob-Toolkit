import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "How to Write a Resume With No Experience (Fresher Guide)",
  description:
    "No work experience? No problem. Learn exactly what to put on a fresher resume instead — projects, coursework, certifications, and skills — with a complete no-experience sample resume.",
  alternates: { canonical: "/resume/no-experience" },
};

export default function NoExperienceResumePage() {
  return (
    <GuideLayout
      title="How to write a resume with no experience"
      description="A practical guide for freshers: what recruiters actually look for when you have no job experience, and a complete sample resume that works without a single internship."
      category="Resume guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Resume guides", href: "/guides" },
        { label: "Resume with no experience" },
      ]}
    >
      <p>
        &ldquo;Experience required&rdquo; is the most common sentence freshers read — and
        the most discouraging. But here is the truth recruiters know:{" "}
        <strong>
          entry-level roles are designed for people with no experience
        </strong>
        . What they actually screen for is <em>evidence that you can do the
        work</em>. That evidence doesn&apos;t have to come from a job.
      </p>

      <h2>What counts as &ldquo;experience&rdquo; when you have none</h2>
      <ul>
        <li>
          <strong>Academic projects</strong> — anything you built for a course,
          a mini-project, or a final-year project. These prove you can finish
          something real.
        </li>
        <li>
          <strong>Personal projects</strong> — apps, websites, or tools you built
          on your own, published on GitHub. These prove initiative.
        </li>
        <li>
          <strong>Freelance or volunteer work</strong> — a website for a local
          shop, managing a college event&apos;s registrations, helping a relative&apos;s
          business. Unpaid work is still work.
        </li>
        <li>
          <strong>Online courses and certifications</strong> — they show you
          invested in learning the skill.
        </li>
        <li>
          <strong>Competitions and hackathons</strong> — even participation, and
          especially winning, signals motivation.
        </li>
        <li>
          <strong>Relevant coursework</strong> — when your projects are thin,
          listing strong subjects (DBMS, Web Development, Data Structures) fills
          the gap honestly.
        </li>
      </ul>

      <Callout title="The one rule that matters">
        Never invent experience to fill the gap. A fake internship is easy to
        expose in an interview (one question about the company or your tasks is
        enough), and it ends your chances permanently. A truthful resume built
        around projects is always stronger than a padded one.
      </Callout>

      <h2>How to structure a no-experience resume</h2>
      <ol>
        <li>
          <strong>Header</strong> — name, target role, phone, email, city,
          GitHub/LinkedIn.
        </li>
        <li>
          <strong>Profile (2–3 lines)</strong> — your degree, the skills you
          bring, and the role you want. Example below.
        </li>
        <li>
          <strong>Skills</strong> — grouped, honest, and short enough to scan.
        </li>
        <li>
          <strong>Projects (the centrepiece)</strong> — 2–4 projects with
          action-verb bullets and results. This section replaces experience.
        </li>
        <li>
          <strong>Education</strong> — degree, institution, years, CGPA if decent.
        </li>
        <li>
          <strong>Certifications &amp; achievements</strong> — courses, hackathons,
          exhibitions, volunteering.
        </li>
      </ol>

      <h2>Complete sample: resume with zero work experience</h2>
      <Example label="Sample resume — fresher, no work experience">
        <pre>{`RAHUL VERMA
Aspiring Web Developer · Bengaluru, Karnataka
+91 91234 56789 · rahul.verma@example.com · github.com/rahulverma · linkedin.com/in/rahulverma

PROFILE
BCA final-year student proficient in HTML, CSS, and JavaScript. Built three web
projects, including a fully responsive college fest website. Completed 6 online
courses in web development. Seeking a web developer internship to apply my skills
on real products.

SKILLS
Languages: HTML5, CSS3, JavaScript (ES6+)
Frameworks/Libraries: React (basics), Bootstrap
Tools: Git & GitHub, VS Code, Chrome DevTools, Figma (basics)

PROJECTS
College Fest Website                            github.com/rahulverma/fest-website
HTML, CSS, JavaScript
• Designed and built the official site for our annual fest; 500+ student visits in the first week
• Made the site fully responsive and tested it on low-end Android devices
• Cut page load time by ~40% by compressing images and removing unused CSS

Personal Portfolio                              rahulverma.netlify.app
HTML, CSS, JavaScript
• Single-page portfolio with smooth scrolling, a contact form, and a projects gallery
• Deployed free on Netlify with a custom subdomain and HTTPS

To-Do App with Local Storage                    github.com/rahulverma/todo-app
JavaScript, HTML, CSS
• Task app with add/delete/complete and filters; data persists using localStorage
• Wrote clean, commented code with separate JS modules

EDUCATION
Bachelor of Computer Applications (BCA) — Bengaluru City University (affiliated college)
2023 – 2026 (pursuing) · Expected CGPA 8.1/10
Relevant coursework: Web Technologies, DBMS, Data Structures, Operating Systems

CERTIFICATIONS & ACHIEVEMENTS
• The Complete Web Development Bootcamp — Udemy (2025)
• Responsive Web Design — freeCodeCamp (2025)
• Participated in Smart India Hackathon (college round, 2024)
• Volunteer — college tech club; helped organise a 40-student HTML/CSS workshop

LANGUAGES
English (fluent) · Hindi (fluent) · Kannada (conversational)`}</pre>
      </Example>

      <h2>Turning &ldquo;no experience&rdquo; into project bullets</h2>
      <p>
        Weak bullet: &ldquo;Made a website for college fest.&rdquo; Strong bullet:{" "}
        &ldquo;Built the official fest website; 500+ visits in week one after launch.&rdquo;{" "}
        The difference is <strong>action verb + what it did + measurable result</strong>.
        Our <a href="/resume/project-descriptions">project description guide</a>{" "}
        gives you the formula and five more examples.
      </p>

      <h2>If you truly have nothing yet</h2>
      <p>That just means it&apos;s project time — and it can be done in a weekend:</p>
      <ol>
        <li>Build one small, real thing: a portfolio page, a to-do app, a clone of a simple tool.</li>
        <li>Put the code on GitHub with a clear README (what it does, how to run it).</li>
        <li>Deploy it free (Netlify, Vercel, or GitHub Pages) and add the live link.</li>
        <li>Finish one free, recognised course (freeCodeCamp, CS50, Google&apos;s fundamentals).</li>
        <li>Add all four to the resume. You now have projects and a certification.</li>
      </ol>

      <ToolCta
        href="/tools/resume-builder"
        cta="Build your resume free"
        heading="Ready to write yours?"
      >
        Use the free resume builder: fill in the form, get a clean one-page A4
        resume with a live preview, and download it as a PDF — no sign-up.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/resume/bca-fresher-resume">BCA fresher resume example &amp; format</a></li>
        <li><a href="/resume/project-descriptions">Project description examples</a></li>
        <li><a href="/resume/skills-for-freshers">Skills for a fresher resume</a></li>
        <li><a href="/interview/internship-prep">Internship interview preparation</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Can I list 'freelance' if I only made a website for a friend for free?",
            answer:
              "Yes — if you genuinely did the work, you can describe it honestly as a project or as freelance/volunteer work. What you must not do is invent clients, payments, or timelines that never happened.",
          },
          {
            question: "Do online course certificates really help on a fresher resume?",
            answer:
              "They help as supporting evidence — they show structured learning and initiative. They don't replace projects. One project you can explain beats five certificates you can't.",
          },
          {
            question: "Should I include hobbies and interests?",
            answer:
              "Only if space allows and they're relevant or memorable (e.g., 'Open-source contributor', 'Tech blog writer'). Generic lists like 'reading, music' rarely help and cost you a line of project space.",
          },
        ]}
      />
    </GuideLayout>
  );
}
