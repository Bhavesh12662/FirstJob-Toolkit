import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "JavaScript Interview Questions for Beginners (With Plain-Language Answers)",
  description:
    "The JavaScript interview questions beginners are actually asked — var vs let vs const, hoisting, closures, == vs ===, promises, async/await, and the DOM — each explained in plain language.",
  alternates: { canonical: "/interview/javascript" },
};

export default function JavaScriptInterviewPage() {
  return (
    <GuideLayout
      title="JavaScript interview questions for beginners"
      description="The core JavaScript questions fresher interviews actually ask, explained in plain language — with the reasoning interviewers are listening for, not just definitions."
      category="Interview guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Interview prep", href: "/interview" },
        { label: "JavaScript questions" },
      ]}
    >
      <p>
        Fresher interviews rarely ask obscure JavaScript trivia. They ask a
        small set of core questions to check whether you understand how the
        language actually behaves. Here are the ones you should be ready for,
        each with a plain-language answer and the point interviewers are
        listening for.
      </p>

      <h2>1. var vs let vs const</h2>
      <p>
        All three declare variables. <code>var</code> is function-scoped and can
        be re-declared. <code>let</code> is block-scoped and reassignable.
        <code>const</code> is block-scoped and cannot be reassigned (though an
        object it points to can still be mutated). Modern code uses{" "}
        <code>const</code> by default and <code>let</code> when reassignment is
        needed.
      </p>
      <p><strong>Listening for:</strong> you understand scope — the root of most real bugs.</p>

      <h2>2. What is hoisting?</h2>
      <p>
        JavaScript moves <em>declarations</em> to the top of their scope before
        executing code. A <code>var</code> variable is hoisted with the value{" "}
        <code>undefined</code>, so using it early gives <code>undefined</code>, not an
        error. <code>let</code> and <code>const</code> are hoisted too, but live in
        a &ldquo;temporal dead zone&rdquo; until their declaration line — using them early
        throws a <code>ReferenceError</code>. Function declarations are hoisted
        whole, which is why you can call them before their definition.
      </p>
      <p><strong>Listening for:</strong> you know the temporal dead zone — it separates reading about JS from being bitten by it.</p>

      <h2>3. == vs ===</h2>
      <p>
        <code>==</code> compares values after type conversion, so{" "}
        <code>&apos;5&apos; == 5</code> is <code>true</code>. <code>===</code> compares type
        and value with no conversion, so <code>&apos;5&apos; === 5</code> is{" "}
        <code>false</code>. Use <code>===</code> and <code>!==</code> everywhere.
      </p>
      <p><strong>Listening for:</strong> you can name one surprising coercion case (e.g., <code>0 == false</code>).</p>

      <h2>4. What is a closure?</h2>
      <p>
        A closure is a function that remembers the variables of the scope it
        was created in, even when called from elsewhere. Example:
      </p>
      <Example label="Closure example">
        <pre>{`function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
const counter = makeCounter();
counter(); // 1
counter(); // 2  — count is remembered between calls`}</pre>
      </Example>
      <p><strong>Listening for:</strong> a small, correct example — it proves understanding better than any definition.</p>

      <h2>5. What is the event loop?</h2>
      <p>
        JavaScript is single-threaded: it runs one thing at a time. The event
        loop lets it do async work — when you call <code>fetch()</code> or{" "}
        <code>setTimeout()</code>, the work is handed off, your code keeps
        running, and the callback runs later when the result is ready. So{" "}
        <code>console.log(&apos;A&apos;); setTimeout(() =&gt; console.log(&apos;B&apos;), 0); console.log(&apos;C&apos;)</code>{" "}
        prints <strong>A, C, B</strong>.
      </p>
      <p><strong>Listening for:</strong> you can predict output order of simple async code.</p>

      <h2>6. Promises and async/await</h2>
      <p>
        A promise is an object representing a value that arrives later — pending,
        fulfilled, or rejected. <code>async/await</code> is syntax sugar over
        promises: <code>await</code> pauses an <code>async</code> function until the
        promise settles, so async code reads like sync code, and errors are
        caught with a normal <code>try/catch</code>.
      </p>
      <p><strong>Listening for:</strong> you know async/await is built on promises, not magic.</p>

      <h2>7. What is the DOM?</h2>
      <p>
        The Document Object Model is the browser&apos;s tree representation of your
        HTML. JavaScript reads and changes that tree —{" "}
        <code>document.querySelector()</code>, changing text or styles, adding or
        removing elements, listening for events. When you &ldquo;change the page&rdquo; with
        JS, you&apos;re changing the DOM, and the browser re-renders.
      </p>

      <h2>8. null vs undefined</h2>
      <p>
        <code>undefined</code> means &ldquo;declared but not set&rdquo; — the default.{" "}
        <code>null</code> means &ldquo;deliberately set to nothing&rdquo;. Both are falsy, and{" "}
        <code>==</code> treats them as equal, but <code>===</code> distinguishes them.
      </p>

      <Callout title="How to actually learn these">
        Don&apos;t re-read the answers — <strong>reproduce them</strong>. Open a browser
        console or a free editor like StackBlitz, type each example yourself,
        change one thing, and see what happens. Interviewers can tell the
        difference between someone who read about closures and someone who has
        used one.
      </Callout>

      <ToolCta
        href="/tools/interview-prep"
        cta="Practise the JavaScript questions"
        heading="Try the interactive question library"
      >
        All of these questions — plus HR, frontend, and internship ones — are in
        the free library, with practice mode and revision marks saved locally.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/interview/frontend-prep">Frontend developer interview preparation</a></li>
        <li><a href="/interview/hr-questions-freshers">HR interview questions for freshers</a></li>
        <li><a href="/interview/internship-prep">Internship interview preparation</a></li>
        <li><a href="/resume/project-descriptions">Project description examples</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Do freshers need to know data structures and algorithms?",
            answer:
              "For most frontend/fresher roles in India, core JavaScript and problem-solving basics matter more than DSA. Know arrays, objects, and how to loop/filter them well. If you're targeting product companies, add basic DSA practice separately.",
          },
          {
            question: "Should I say I know a framework if I've only followed a tutorial?",
            answer:
              "Only if you've built at least one small project with it. 'I've learned React basics and built a weather app with it' is honest and sufficient. Claiming expertise you can't demonstrate fails the first technical question.",
          },
          {
            question: "What if they ask a JavaScript question I don't know?",
            answer:
              "Say so calmly, then reason aloud: 'I haven't used that directly, but based on how X works, I'd expect…' Interviewers often care more about your reasoning than the answer — and honesty here builds trust.",
          },
        ]}
      />
    </GuideLayout>
  );
}
