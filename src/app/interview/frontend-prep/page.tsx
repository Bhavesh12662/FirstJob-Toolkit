import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Frontend Developer Interview Preparation Guide for Freshers",
  description:
    "A focused frontend interview preparation roadmap for freshers: what to learn (HTML, CSS, JavaScript, React), what interviewers ask, how to build a portfolio that gets you shortlisted, and a study checklist.",
  alternates: { canonical: "/interview/frontend-prep" },
};

export default function FrontendPrepPage() {
  return (
    <GuideLayout
      title="Frontend developer interview preparation for freshers"
      description="A focused preparation roadmap for your first frontend interview: the exact topics to learn, the questions you'll face, how to build a portfolio that gets noticed, and a week-by-week checklist."
      category="Interview guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Interview prep", href: "/interview" },
        { label: "Frontend preparation" },
      ]}
    >
      <p>
        Frontend interviews for fresher roles follow a predictable pattern:
        fundamentals (HTML/CSS/JavaScript), one framework (usually React), your
        projects, and HR. This guide gives you a focused roadmap so you prepare
        what&apos;s actually asked — not everything on the internet.
      </p>

      <h2>What to learn, in priority order</h2>
      <ol>
        <li>
          <strong>HTML:</strong> semantic elements, forms, accessibility basics
          (labels, alt text, heading order).
        </li>
        <li>
          <strong>CSS:</strong> the box model, flexbox, grid, responsive design
          with media queries, and specificity. Be ready to explain <em>why</em>{" "}
          something is centred or wraps.
        </li>
        <li>
          <strong>JavaScript:</strong> the core questions from our{" "}
          <a href="/interview/javascript">JavaScript interview guide</a> —
          especially closures, the event loop, promises/async-await, and the DOM.
        </li>
        <li>
          <strong>React (basics):</strong> components, props, state (useState),
          effects (useEffect), and the rules of hooks. Build at least one project
          with it.
        </li>
        <li>
          <strong>Git &amp; deployment:</strong> commit/branch/push, and deploying
          a site free on Netlify, Vercel, or GitHub Pages.
        </li>
      </ol>

      <h2>What frontend interviews actually ask freshers</h2>
      <ul>
        <li>
          <strong>Conceptual:</strong> &ldquo;What happens when you type a URL and press
          Enter?&rdquo; · &ldquo;Flexbox vs Grid — when do you use each?&rdquo; · &ldquo;What is
          semantic HTML and why does it matter?&rdquo;
        </li>
        <li>
          <strong>JavaScript:</strong> the eight core questions in our{" "}
          <a href="/interview/javascript">JavaScript guide</a>.
        </li>
        <li>
          <strong>React:</strong> &ldquo;What are hooks?&rdquo; · &ldquo;Why is state used instead of
          plain variables?&rdquo; · &ldquo;What happens when state changes?&rdquo;
        </li>
        <li>
          <strong>Projects:</strong> &ldquo;Walk me through your favourite project.&rdquo; ·
          &ldquo;What was the hardest bug you fixed?&rdquo; · &ldquo;How did you make it responsive?&rdquo;
        </li>
        <li>
          <strong>HR:</strong> the questions in our{" "}
          <a href="/interview/hr-questions-freshers">HR questions guide</a>.
        </li>
      </ul>

      <h2>Build a portfolio that gets you shortlisted</h2>
      <p>
        For frontend roles, your portfolio <em>is</em> your resume. Three
        projects, presented well, beat ten half-finished ones:
      </p>
      <ol>
        <li>
          <strong>Project 1 — fundamentals:</strong> a clean, responsive page
          (landing page, portfolio) showing HTML/CSS mastery.
        </li>
        <li>
          <strong>Project 2 — JavaScript:</strong> an interactive app (to-do,
          weather, quiz) with real behaviour, loading and error states.
        </li>
        <li>
          <strong>Project 3 — React:</strong> a small app with components, state,
          and an API call.
        </li>
      </ol>
      <p>
        Each project needs: a live deployed link, a GitHub repo with a README
        (what it does, how to run it), and 2–3 resume bullets written with the{" "}
        <a href="/resume/project-descriptions">project bullet formula</a>.
      </p>

      <h2>A realistic 8-week preparation plan</h2>
      <Example label="Week-by-week checklist">
        <pre>{`Weeks 1–2:  HTML + CSS fundamentals, flexbox/grid, one responsive page
Weeks 3–4:  JavaScript core (variables, functions, DOM, ES6+, fetch, async/await)
Weeks 5–6:  React basics (components, useState, useEffect) + one React project
Week 7:      Build/complete portfolio: 3 projects, deployed, READMEs, resume bullets
Week 8:      Mock practice: answer HR + JS + React questions out loud; apply to 10–15 roles`}</pre>
      </Example>

      <Callout title="Apply while you prepare">
        You don&apos;t need to be &ldquo;ready&rdquo; to start applying. Junior roles expect
        learners. Apply to 10–15 roles in week 8, track them in the job tracker,
        and let real interview questions teach you what to revise.
      </Callout>

      <ToolCta
        href="/tools/job-tracker"
        cta="Open the job tracker"
        heading="Track every application"
      >
        Log each application with its status and follow-up dates, and export
        everything to CSV — organisation is what turns scattered applications
        into interviews.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/interview/javascript">JavaScript interview questions for beginners</a></li>
        <li><a href="/interview/hr-questions-freshers">HR interview questions for freshers</a></li>
        <li><a href="/interview/tell-me-about-yourself">Tell me about yourself</a></li>
        <li><a href="/resume/skills-for-freshers">Skills to include on a fresher resume</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Do I need to know backend or Node.js for a frontend fresher role?",
            answer:
              "For most pure frontend fresher roles, no — but basic familiarity helps: you should be able to read a simple API response (JSON) and understand what an endpoint is. Full-stack knowledge is a bonus, not a requirement, at this level.",
          },
          {
            question: "Will they ask me to code live in the interview?",
            answer:
              "Sometimes — usually a small task (build a component, fix a CSS layout, or explain what a code snippet does). Practise explaining code out loud and doing small build tasks under a timer.",
          },
          {
            question: "How important is the portfolio compared to the resume?",
            answer:
              "For frontend roles, the portfolio often decides whether you get the interview — the resume gets you scanned, the portfolio gets you judged. Invest in clean, deployed projects with READMEs.",
          },
        ]}
      />
    </GuideLayout>
  );
}
