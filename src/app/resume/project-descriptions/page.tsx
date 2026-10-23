import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Resume Project Description Examples for Students (With Formula)",
  description:
    "How to write project descriptions that impress recruiters: a simple formula, power verbs, and 5 copy-adapt examples for common student projects (college systems, apps, dashboards).",
  alternates: { canonical: "/resume/project-descriptions" },
};

export default function ProjectDescriptionsPage() {
  return (
    <GuideLayout
      title="Resume project description examples for students"
      description="For freshers, projects are the strongest section on the resume. Learn the bullet-point formula that turns a course project into evidence you can do the job — with 5 ready-to-adapt examples."
      category="Resume guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Resume guides", href: "/guides" },
        { label: "Project descriptions" },
      ]}
    >
      <p>
        Most fresher resumes fail in one place: the projects section. Students
        write &ldquo;Made a library management system in PHP&rdquo; and stop. But a project
        description is not a title — it is <strong>proof</strong>. A good project
        bullet answers three questions in one line: what did you build, what did
        you personally do, and what changed because of it.
      </p>

      <h2>The project bullet formula</h2>
      <Example label="Formula">
        <p>
          <strong>Action verb + what you built + how (tech/approach) + result (number or outcome)</strong>
        </p>
      </Example>
      <p>Compare:</p>
      <ul>
        <li>❌ &ldquo;Made a weather app using an API.&rdquo;</li>
        <li>
          ✅ &ldquo;Built a weather dashboard in React that shows 5-day forecasts for any
          city via the OpenWeather API, with loading and error states for slow
          networks.&rdquo;
        </li>
      </ul>
      <p>
        The second version names the tech, the feature set, and the user
        consideration. That is the difference between a project that gets
        scanned past and one that gets you a question in the interview.
      </p>

      <h2>Power verbs for project bullets</h2>
      <ul>
        <li><strong>Built / Developed / Engineered</strong> — for things you created from scratch.</li>
        <li><strong>Designed</strong> — for UI/UX or system design work.</li>
        <li><strong>Implemented / Integrated</strong> — for adding a specific feature or connecting systems (APIs, databases).</li>
        <li><strong>Optimised / Improved / Reduced</strong> — for performance work; always add a number.</li>
        <li><strong>Deployed / Automated</strong> — for putting something live or removing manual work.</li>
        <li><strong>Tested</strong> — for work you verified on real devices/users.</li>
      </ul>

      <h2>5 project description examples (copy-adapt)</h2>

      <h3>1. College management system (PHP/MySQL classic)</h3>
      <Example label="Project bullets">
        <pre>{`• Built a college management system with separate logins for students, faculty, and admins
• Implemented attendance marking and marks entry with role-based access control
• Used SQL joins to auto-generate semester reports, removing ~2 hours of manual work per class`}</pre>
      </Example>

      <h3>2. E-commerce website (mern/mini-project)</h3>
      <Example label="Project bullets">
        <pre>{`• Developed a full-stack e-commerce site with product listing, cart, and order placement
• Integrated a payment test gateway and handled order confirmation emails
• Designed a mobile-first checkout flow; tested on 3 Android devices under 4GB RAM`}</pre>
      </Example>

      <h3>3. Weather / dashboard app (API-based)</h3>
      <Example label="Project bullets">
        <pre>{`• Created a React dashboard showing 5-day weather forecasts for any city using the OpenWeather API
• Added loading skeletons, error messages, and empty states so the UI never breaks
• Cached API responses in localStorage to reduce repeat calls on slow networks`}</pre>
      </Example>

      <h3>4. Personal portfolio (the project everyone should have)</h3>
      <Example label="Project bullets">
        <pre>{`• Designed and built a single-page portfolio with smooth scrolling, dark mode, and a working contact form
• Deployed on Netlify with HTTPS and a custom subdomain
• Structured the code into reusable components; Lighthouse performance score 95+`}</pre>
      </Example>

      <h3>5. College fest / event website (design-heavy)</h3>
      <Example label="Project bullets">
        <pre>{`• Designed and built the official website for our annual tech fest; 500+ visits in the first week
• Built the events, speakers, and registration pages as reusable components
• Improved mobile load time by ~40% by compressing images and removing unused CSS`}</pre>
      </Example>

      <Callout title="Numbers beat adjectives">
        &ldquo;Fast&rdquo;, &ldquo;user-friendly&rdquo;, and &ldquo;scalable&rdquo; are adjectives —
        everyone claims them. Numbers are evidence: visits, percentage improvement,
        hours saved, bugs fixed, users tested with. If you don&apos;t have a number, use
        an honest outcome: &ldquo;used by my class of 60 students&rdquo;.
      </Callout>

      <h2>How many bullets per project?</h2>
      <ul>
        <li><strong>Best project:</strong> 3 bullets.</li>
        <li><strong>Good projects:</strong> 2 bullets.</li>
        <li><strong>Filler projects:</strong> 1 bullet, or drop the project entirely.</li>
      </ul>
      <p>
        Two strong projects beat four thin ones. Every bullet should be
        something you can explain in an interview — if a recruiter asks
        &ldquo;walk me through this project&rdquo;, each line should be a sentence you can
        say out loud.
      </p>

      <h2>Where the project goes on the resume</h2>
      <p>
        Format per project: <strong>Title (bold) — tech stack (italics) — link
        (right-aligned)</strong>, then bullets. Put the section titled{" "}
        <strong>&ldquo;Projects&rdquo;</strong> above Experience if you have no internships;
        below it if you do. A matching guide:{" "}
        <a href="/resume/bca-fresher-resume">BCA fresher resume format</a>.
      </p>

      <ToolCta
        href="/tools/resume-builder"
        cta="Open the Resume Builder"
        heading="Add projects to a real resume"
      >
        The resume builder has a dedicated projects section with one-bullet-per-line
        editing, a live preview, and free PDF download.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/resume/no-experience">Resume with no experience</a></li>
        <li><a href="/resume/bca-fresher-resume">BCA fresher resume example</a></li>
        <li><a href="/resume/skills-for-freshers">Skills to include on a fresher resume</a></li>
        <li><a href="/interview/internship-prep">Internship interview preparation</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Can I list a project I built by following a tutorial?",
            answer:
              "Yes, as long as you actually built and understand it — and you change at least something (features, design, structure). In an interview, be honest: 'I built this while learning React from a course, and I added X myself.' Honesty plus understanding beats pretending it was fully original.",
          },
          {
            question: "What if my project has no measurable result?",
            answer:
              "Use an honest outcome instead of a number: who used it, what it replaced, or what you learned. 'Used by my class of 60 students for fest registrations' is a real outcome. Never invent metrics.",
          },
          {
            question: "Should I include the project's GitHub link on my resume?",
            answer:
              "Yes, if the repository is clean: a README that explains what the project does and how to run it, no junk files, and code you're comfortable someone reading. A messy repo linked on a resume is worse than no link.",
          },
        ]}
      />
    </GuideLayout>
  );
}
