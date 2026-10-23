import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "10 Resume Mistakes Freshers Must Avoid (With Fixes)",
  description:
    "The 10 most common resume mistakes freshers make — from objective statements to fake skills — with exactly how to fix each one. Includes a before/after example.",
  alternates: { canonical: "/resume/mistakes-to-avoid" },
};

export default function ResumeMistakesPage() {
  return (
    <GuideLayout
      title="10 resume mistakes freshers must avoid"
      description="The most common fresher resume mistakes — and the exact fix for each. Ten minutes with this list can be the difference between a scanned-past resume and a shortlisted one."
      category="Resume guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Resume guides", href: "/guides" },
        { label: "Resume mistakes" },
      ]}
    >
      <p>
        Recruiters reject most fresher resumes for boring, fixable reasons —
        not because the candidate is unqualified. Here are the ten mistakes we
        see most often, each with its fix.
      </p>

      <h2>1. Using an &ldquo;objective&rdquo; statement</h2>
      <p>
        <strong>Mistake:</strong> &ldquo;To obtain a challenging position in a
        reputed organization where I can utilize my skills.&rdquo; This says
        nothing — it could be on anyone&apos;s resume.
      </p>
      <p>
        <strong>Fix:</strong> replace it with a 2–3 sentence <em>profile</em>:
        your degree, your top skills, the role you want. Write about what you
        offer, not what you want.
      </p>
      <Example label="Before → After">
        <p>
          ❌ &ldquo;Objective: To get a job in web development.&rdquo;<br />
          ✅ &ldquo;BCA graduate skilled in HTML, CSS, and JavaScript. Built four
          web projects, including a library management system that won 2nd place
          in the college exhibition. Seeking a frontend internship.&rdquo;
        </p>
      </Example>

      <h2>2. Listing fake or exaggerated skills</h2>
      <p>
        <strong>Mistake:</strong> adding React, Node.js, or &ldquo;5 years of
        Python&rdquo; because the posting mentioned them.
      </p>
      <p>
        <strong>Fix:</strong> list only what you can defend. Interviewers ask
        about listed skills within the first five minutes. One exposed lie ends
        the interview and can get you blacklisted.
      </p>

      <h2>3. Job-description-style duties instead of achievements</h2>
      <p>
        <strong>Mistake:</strong> &ldquo;Responsible for handling customer
        queries.&rdquo;
      </p>
      <p>
        <strong>Fix:</strong> write what you <em>did</em> and what <em>changed</em>:
        &ldquo;Resolved 30+ student queries weekly during fest volunteering, cutting
        response time from 2 days to same-day.&rdquo; Action verb + result.
      </p>

      <h2>4. A resume longer than one page</h2>
      <p>
        <strong>Mistake:</strong> 2–3 pages &ldquo;to include everything&rdquo;.
      </p>
      <p>
        <strong>Fix:</strong> one A4 page for freshers. If it overflows, cut the
        weakest content — don&apos;t shrink fonts below ~10pt or reduce margins to
        nothing; readability is part of the test.
      </p>

      <h2>5. Typos, inconsistent formatting, wrong file name</h2>
      <p>
        <strong>Mistake:</strong> &ldquo;resume_FINAL_v3.doc&rdquo; attached, with
        three fonts and a typo in the email address.
      </p>
      <p>
        <strong>Fix:</strong> export a PDF named{" "}
        <code>YourName_Role.pdf</code> (e.g.,{" "}
        <code>Ananya-Sharma-Frontend-Intern.pdf</code>), proofread twice, and ask
        one friend to read it aloud. Check that the phone number and email on
        the resume actually work.
      </p>

      <h2>6. Including a photo, full address, or date of birth</h2>
      <p>
        <strong>Mistake:</strong> a passport photo and full home address at the
        top.
      </p>
      <p>
        <strong>Fix:</strong> name, city, phone, email, LinkedIn/GitHub. Nothing
        else is needed — and a photo can only introduce bias.
      </p>

      <h2>7. A skills list that contradicts the projects</h2>
      <p>
        <strong>Mistake:</strong> &ldquo;Skills: React, Node.js, MongoDB&rdquo; with
        projects built in plain HTML/CSS.
      </p>
      <p>
        <strong>Fix:</strong> skills and projects must agree. Every listed skill
        should be visible somewhere in your projects or coursework.
      </p>

      <h2>8. Vague project descriptions</h2>
      <p>
        <strong>Mistake:</strong> &ldquo;Library Management System — PHP, MySQL.&rdquo;
      </p>
      <p>
        <strong>Fix:</strong> 2–3 bullets per project using the formula{" "}
        <em>action verb + what + how + result</em>. See our{" "}
        <a href="/resume/project-descriptions">project description guide</a> for
        five copy-adapt examples.
      </p>

      <h2>9. Sending the same resume to every application</h2>
      <p>
        <strong>Mistake:</strong> one generic resume sent to 50 companies.
      </p>
      <p>
        <strong>Fix:</strong> tailor two things per application: the profile line
        and the order/wording of your skills to match the posting. Fifteen
        tailored applications beat fifty identical ones.
      </p>

      <h2>10. Forgetting the basics: links, dates, and honesty</h2>
      <p>
        <strong>Mistake:</strong> a GitHub link that 404s, dates that don&apos;t add up,
        a CGPA that doesn&apos;t match the transcript.
      </p>
      <p>
        <strong>Fix:</strong> open every link before sending. Make dates
        consistent (month–year is fine). Everything on the resume must survive
        verification — because it will be verified.
      </p>

      <Callout title="Quick pre-send checklist">
        One page · no photo · no objective statement · action-verb bullets with
        results · skills you can defend · working links · correct file name ·
        proofread twice.
      </Callout>

      <ToolCta
        href="/tools/resume-builder"
        cta="Build a clean resume free"
        heading="Fix the formatting mistakes automatically"
      >
        The free resume builder handles page format, section order, spacing, and
        A4 PDF export — so mistakes 4 and 5 (layout and file output) can&apos;t
        happen. You focus on the content.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/resume/bca-fresher-resume">BCA fresher resume example &amp; format</a></li>
        <li><a href="/resume/no-experience">Resume with no experience</a></li>
        <li><a href="/resume/skills-for-freshers">Skills for a fresher resume</a></li>
        <li><a href="/resume/project-descriptions">Project description examples</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Is it okay to use a resume template with a sidebar or colours?",
            answer:
              "Light colour and a clean sidebar are fine — many modern templates work. Avoid heavy graphics, multiple fonts, and anything that confuses an ATS (applicant tracking system). When in doubt, simpler scans better and reads better.",
          },
          {
            question: "Should I include references on my resume?",
            answer:
              "No — 'References available upon request' is outdated and wastes a line. Provide references only when an employer asks for them, usually at a later stage.",
          },
          {
            question: "How do I explain a gap in education (e.g., a year back)?",
            answer:
              "You don't need to explain gaps on the resume itself. If asked in an interview, answer honestly and briefly — preparing for exams, a health issue, or learning a skill — and pivot to what you did with the time.",
          },
        ]}
      />
    </GuideLayout>
  );
}
