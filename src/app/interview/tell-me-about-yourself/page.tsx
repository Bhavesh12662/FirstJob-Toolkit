import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Tell Me About Yourself — 3 Proven Structures With Sample Answers",
  description:
    "How to answer 'tell me about yourself' as a fresher: 3 proven structures (Past-Present-Future and more), 3 full sample answers for different situations, and the mistakes that make answers ramble.",
  alternates: { canonical: "/interview/tell-me-about-yourself" },
};

export default function TellMeAboutYourselfPage() {
  return (
    <GuideLayout
      title="Tell me about yourself: sample structures that work"
      description="The most-asked fresher interview question, answered properly: 3 structures you can memorise, 3 complete sample answers (student, career-switcher, internship-seeker), and the mistakes to avoid."
      category="Interview guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Interview prep", href: "/interview" },
        { label: "Tell me about yourself" },
      ]}
    >
      <p>
        &ldquo;Tell me about yourself&rdquo; is almost always the opening question — and
        it sets the tone for the whole interview. It is <em>not</em> an
        invitation to narrate your life story. It is a test of two things: can
        you summarise, and do you know what&apos;s relevant.
      </p>

      <h2>The golden rule: 60–90 seconds, structured</h2>
      <p>
        A great answer has three parts and a time limit. Whatever structure you
        pick, hit these beats:
      </p>
      <ol>
        <li><strong>Past:</strong> your education and the experiences that led here.</li>
        <li><strong>Present:</strong> what you&apos;re doing now — skills, projects, internship.</li>
        <li><strong>Future:</strong> why this role, why this company.</li>
      </ol>

      <h2>Structure 1: Past → Present → Future (the classic)</h2>
      <p>
        Best for: freshers and students. Simple, chronological, easy to
        remember under pressure.
      </p>
      <Example label="Sample — BCA student applying for a frontend internship">
        <p>
          &ldquo;I&apos;ve just completed my BCA from Pune University, where I built four
          web projects — one of them, a library management system, won second
          place in our college exhibition. Along the way I got comfortable with
          HTML, CSS, and JavaScript, and I recently finished a two-month web
          development internship where I redesigned a landing page and improved
          its mobile load time. Now I&apos;m looking for a frontend internship where
          I can keep learning and contribute to a real product — which is why
          I&apos;m excited about this role.&rdquo;
        </p>
      </Example>

      <h2>Structure 2: Skills-first (the &ldquo;what I bring&rdquo; version)</h2>
      <p>
        Best for: candidates whose skills matter more than their history —
        self-taught developers, career switchers.
      </p>
      <Example label="Sample — self-taught developer, no degree in CS">
        <p>
          &ldquo;I&apos;m a web developer who&apos;s mostly self-taught. Over the last year
          I&apos;ve built six projects in HTML, CSS, and JavaScript — including a
          portfolio site and a to-do app that saves data locally — and I&apos;ve put
          all of it on GitHub. I also completed freeCodeCamp&apos;s Responsive Web
          Design and JavaScript courses. Before this, I worked in retail, which
          taught me how to talk to people and handle busy days. I&apos;m now looking
          to turn my projects into professional experience, and your opening is
          exactly the kind of place I want to start.&rdquo;
        </p>
      </Example>

      <h2>Structure 3: Story-based (the memorable version)</h2>
      <p>
        Best for: when you have one strong story — a project, an internship, a
        challenge — that represents you well.
      </p>
      <Example label="Sample — internship seeker with one strong project">
        <p>
          &ldquo;The short version is that I&apos;m the person who built our college
          library&apos;s software. For my DBMS project I created a library management
          system — logins, book issue and return, overdue reports — and our
          librarian actually used it for a month. That project taught me how much
          I enjoy building things that people use, and it&apos;s why I want to do it
          professionally. Today I&apos;m a BCA graduate with skills in HTML, CSS,
          JavaScript, and React, and I&apos;m looking for an internship where I can
          keep building — like the one you&apos;re offering.&rdquo;
        </p>
      </Example>

      <h2>Mistakes that ruin this answer</h2>
      <ul>
        <li>
          <strong>Rambling:</strong> starting from childhood (&ldquo;I was born in…&rdquo;).
          Cut anything before your college years unless it&apos;s directly relevant.
        </li>
        <li>
          <strong>Reciting the resume:</strong> the interviewer can read. Add the
          &ldquo;why&rdquo; — why you chose this path, why this role.
        </li>
        <li>
          <strong>Being too humble or too arrogant:</strong> &ldquo;I&apos;m just a student,
          I don&apos;t know much&rdquo; and &ldquo;I&apos;m the best developer in my class&rdquo; both
          fail. State facts and results calmly.
        </li>
        <li>
          <strong>No ending:</strong> every answer needs a landing — why this
          role, why this company. End pointing forward, not backward.
        </li>
        <li>
          <strong>Memorising word-for-word:</strong> it shows. Memorise the
          <em>beats</em> (past / present / future), not the sentences.
        </li>
      </ul>

      <Callout title="Practise out loud, timed">
        Say your answer out loud with a timer. If it runs past two minutes,
        cut it. Record yourself on your phone once — hearing yourself ramble is
        the fastest way to fix it.
      </Callout>

      <ToolCta
        href="/tools/interview-prep"
        cta="Practise in the question library"
        heading="Rehearse with the practice mode"
      >
        The interview library includes this question in practice mode: read it,
        answer out loud, then reveal the sample answer and compare.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/interview/hr-questions-freshers">15 HR interview questions for freshers</a></li>
        <li><a href="/interview/internship-prep">Internship interview preparation</a></li>
        <li><a href="/interview/javascript">JavaScript interview questions for beginners</a></li>
        <li><a href="/resume/bca-fresher-resume">BCA fresher resume example</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Should I mention my family, hobbies, or hometown in my answer?",
            answer:
              "Only if it's relevant to the role or explains a decision (for example, 'I'm from Pune, which is why I'm excited about this office location'). Hobbies belong at the end of an HR round if they ask, not in your opening answer.",
          },
          {
            question: "What if I have a gap or a non-technical background?",
            answer:
              "Own it in one honest sentence and pivot to what you bring: 'After two years in retail I taught myself web development…' The skills-first structure above is designed exactly for this situation.",
          },
          {
            question: "Is it okay to ask the interviewer a question at the end of my answer?",
            answer:
              "Not usually — save questions for when they explicitly ask 'do you have any questions for us?'. Your opening answer should stand on its own and end by pointing at the role.",
          },
        ]}
      />
    </GuideLayout>
  );
}
