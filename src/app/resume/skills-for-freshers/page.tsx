import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Skills to Include on a Fresher Resume (Technical + Soft Skills)",
  description:
    "Which technical and soft skills actually belong on a fresher resume, how to group them for ATS and recruiters, and the honesty rule: only list skills you can defend in an interview.",
  alternates: { canonical: "/resume/skills-for-freshers" },
};

export default function SkillsForFreshersPage() {
  return (
    <GuideLayout
      title="Skills to include on a fresher resume"
      description="A practical list of technical and soft skills that belong on a fresher resume — grouped the way recruiters and ATS software scan for them — plus the one rule that protects you in interviews."
      category="Resume guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Resume guides", href: "/guides" },
        { label: "Skills for freshers" },
      ]}
    >
      <p>
        The skills section is the fastest part of your resume to scan — by
        both humans and applicant tracking systems (ATS). Done well, it acts
        like a keyword index that matches your resume to the job posting.
        Done carelessly (listing everything you&apos;ve ever touched), it destroys
        your credibility the moment an interviewer asks about one item.
      </p>

      <Callout title="The honesty rule">
        Only list a skill you could explain in an interview and, ideally, prove
        in a project. If you can&apos;t answer &ldquo;what is a closure?&rdquo; or &ldquo;how does
        flexbox differ from grid?&rdquo;, don&apos;t list the skill. One exposed fake skill
        damages more than ten missing ones.
      </Callout>

      <h2>Technical skills worth listing (with when to list them)</h2>
      <ul>
        <li>
          <strong>Languages:</strong> HTML5, CSS3, JavaScript (ES6+) — list these
          only if you can build a page from scratch and explain the box model,
          flexbox, and basic DOM manipulation.
        </li>
        <li>
          <strong>Frameworks/libraries:</strong> React (basics) — only if you&apos;ve
          built at least one project with components and state (useState).
        </li>
        <li>
          <strong>Styling:</strong> Tailwind CSS / Bootstrap — if you&apos;ve used them
          in a real project.
        </li>
        <li>
          <strong>Tools:</strong> Git &amp; GitHub, VS Code, Chrome DevTools —
          nearly always relevant; list Git only if you can explain commit, branch,
          and pull request.
        </li>
        <li>
          <strong>Database:</strong> MySQL / basic SQL — only if you can write a
          JOIN query when asked.
        </li>
        <li>
          <strong>Concepts (as keywords):</strong> Responsive design, REST APIs,
          JSON, AJAX/fetch — these help ATS matching and signal real understanding.
        </li>
        <li>
          <strong>Office/basic IT:</strong> MS Office, Google Workspace — fine for
          non-technical roles; on a developer resume they add noise.
        </li>
      </ul>

      <h2>Soft skills that genuinely help freshers</h2>
      <p>
        Soft skills are easy to claim and hard to prove, so prefer ones you can
        back with a story:
      </p>
      <ul>
        <li><strong>Communication</strong> — especially if you write in English well or have presented in class.</li>
        <li><strong>Teamwork</strong> — back it with a group project or hackathon story.</li>
        <li><strong>Problem-solving</strong> — back it with a debugging story.</li>
        <li><strong>Time management</strong> — back it with juggling coursework + internship.</li>
        <li><strong>Willingness to learn</strong> — cliché as a phrase, credible when your projects/courses prove it.</li>
      </ul>
      <p>
        Tip: instead of a &ldquo;soft skills&rdquo; list, weave them into project bullets
        (&ldquo;collaborated with a teammate to…&rdquo;). Evidence beats adjectives.
      </p>

      <h2>How to format the skills section</h2>
      <Example label="Good skills section (grouped, scannable)">
        <pre>{`SKILLS
Languages:  HTML5, CSS3, JavaScript (ES6+)
Frameworks: React (basics), Tailwind CSS
Tools:      Git & GitHub, VS Code, Chrome DevTools
Database:   MySQL (basics)
Concepts:   Responsive Design, REST APIs, JSON`}</pre>
      </Example>
      <p>Compare with the version that hurts you:</p>
      <Example label="Weak skills section (avoid)">
        <pre>{`Skills: HTML, CSS, JavaScript, React, Angular, Vue, Node.js, Express, MongoDB,
Python, Java, C, C++, MySQL, Firebase, AWS, Docker, Kubernetes, Machine Learning,
Communication, Leadership, Teamwork, Hardworking, MS Office, Tally`}</pre>
      </Example>
      <p>
        The weak version screams &ldquo;I copied a list&rdquo;. Interviewers know it, and
        ATS ranking doesn&apos;t help you when a human sees it.
      </p>

      <h2>Matching skills to the job posting</h2>
      <ol>
        <li>Read the job posting and underline every skill mentioned.</li>
        <li>
          If you genuinely have that skill, make sure it appears in your skills
          section <em>using their exact wording</em> (e.g., they say &ldquo;REST APIs&rdquo;,
          you write &ldquo;REST APIs&rdquo;, not &ldquo;API integration&rdquo;).
        </li>
        <li>
          Put the 3–5 most relevant skills first in each group — recruiters read
          left to right, top to bottom.
        </li>
        <li>
          Tailor the resume per application. The same fresher applying to a
          frontend role and a QA role should lead with different skills.
        </li>
      </ol>

      <h2>How many skills should a fresher list?</h2>
      <p>
        Roughly <strong>8–14 skills total</strong>, across 3–5 groups. Enough to
        match the posting, few enough to defend every single one. Quality and
        honesty beat volume.
      </p>

      <ToolCta
        href="/tools/resume-builder"
        cta="Build your resume free"
        heading="Add your skills to a clean resume"
      >
        The resume builder&apos;s skills editor adds each skill as a chip — no
        formatting, no commas to manage — and shows them live in the preview.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/resume/bca-fresher-resume">BCA fresher resume example &amp; format</a></li>
        <li><a href="/resume/no-experience">Resume with no experience</a></li>
        <li><a href="/resume/project-descriptions">Project description examples</a></li>
        <li><a href="/resume/mistakes-to-avoid">Resume mistakes to avoid</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Can I list a skill I learned but never used in a project?",
            answer:
              "Only if you can still explain it confidently. Skills you studied in a course count — that's how most freshers build their list. The test is the interview, not the project.",
          },
          {
            question: "Should I rate my skills (e.g., 'JavaScript — 7/10')?",
            answer:
              "No. Self-ratings are meaningless to recruiters and invite awkward comparisons. Grouping by category (Languages / Tools) communicates more honestly.",
          },
          {
            question: "The job posting lists 15 skills and I have 6 of them. Should I still apply?",
            answer:
              "Yes. Job postings are wish lists. If you meet the core requirements (the role's main stack) and can learn the rest quickly, apply — and make your matching skills impossible to miss in your skills section.",
          },
        ]}
      />
    </GuideLayout>
  );
}
