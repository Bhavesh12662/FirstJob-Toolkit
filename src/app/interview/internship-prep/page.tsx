import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Internship Interview Preparation Guide for Students",
  description:
    "How to prepare for an internship interview with no experience: what interviewers actually look for, common questions with sample answers, what tasks to expect, and how to follow up professionally.",
  alternates: { canonical: "/interview/internship-prep" },
};

export default function InternshipPrepPage() {
  return (
    <GuideLayout
      title="Internship interview preparation for students"
      description="A complete guide to internship interviews for students with no experience: what interviewers look for, the questions you'll face with sample answers, the tasks you might be given, and how to follow up."
      category="Interview guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Interview prep", href: "/interview" },
        { label: "Internship preparation" },
      ]}
    >
      <p>
        Internship interviews are friendlier than job interviews — everyone in
        the room remembers being a student. What interviewers are really
        screening for is not experience (you don&apos;t have it yet) but{" "}
        <strong>attitude, basics, and whether you can learn fast</strong>.
      </p>

      <h2>What internship interviewers actually look for</h2>
      <ul>
        <li>
          <strong>Fundamentals:</strong> can you explain the core concepts of
          your field? (For web: HTML/CSS/JavaScript basics. For data: Python and
          basic statistics.)
        </li>
        <li>
          <strong>Projects:</strong> have you built anything? Course projects
          absolutely count — be ready to explain one end-to-end.
        </li>
        <li>
          <strong>Learning ability:</strong> how do you learn? Courses, docs,
          tutorials, communities? Give examples.
        </li>
        <li>
          <strong>Availability and sincerity:</strong> can you commit the hours
          and duration? Are you genuinely interested in their domain?
        </li>
        <li>
          <strong>Communication:</strong> can you explain a technical idea simply?
          They may ask you to explain your project to a &ldquo;non-technical manager&rdquo;.
        </li>
      </ul>

      <h2>Common internship interview questions (with sample answers)</h2>

      <h3>&ldquo;Tell me about yourself.&rdquo;</h3>
      <p>
        Use the past → present → future structure.{" "}
        <a href="/interview/tell-me-about-yourself">Full guide with 3 sample answers</a>.
      </p>

      <h3>&ldquo;Why do you want this internship?&rdquo;</h3>
      <Example label="Sample answer">
        <p>
          &ldquo;I&apos;ve mostly built projects alone, where I was the only judge of my
          code. I want a real internship to learn how professional teams review
          code, handle deadlines, and ship to real users. Your team works on
          [specific product], which is exactly the environment where I think
          I&apos;d grow fastest — and I&apos;d like to contribute from week one, not just
          observe.&rdquo;
        </p>
      </Example>

      <h3>&ldquo;What do you know about our company?&rdquo;</h3>
      <p>
        Research three things: what the product does, who the users are, and
        one recent update (a launch, a funding round, a blog post). Two
        accurate sentences beat a paragraph of guesses.
      </p>

      <h3>&ldquo;Tell me about a project you&apos;ve done.&rdquo;</h3>
      <p>
        Structure: what it is → what <em>you</em> did → tech → result. Use the{" "}
        <a href="/resume/project-descriptions">project bullet formula</a>. Offer to
        show the code: &ldquo;I&apos;d be happy to walk you through the repository.&rdquo;
      </p>

      <h3>&ldquo;Where do you see yourself in five years?&rdquo;</h3>
      <p>
        Tie it to growth in the field, not titles: &ldquo;I want to be a solid
        developer who owns features end-to-end and eventually mentors juniors.&rdquo;
      </p>

      <h3>&ldquo;What are your strengths and weaknesses?&rdquo;</h3>
      <p>
        Two strengths with one-line evidence each, and one real, fixable weakness
        with what you&apos;re doing about it. See the{" "}
        <a href="/interview/hr-questions-freshers">HR questions guide</a> for full
        sample answers.
      </p>

      <h3>&ldquo;Do you have any questions for us?&rdquo;</h3>
      <p>
        Ask one or two: &ldquo;What does a typical week look like for an intern?&rdquo; ·
        &ldquo;What would make an intern successful here in the first month?&rdquo; ·
        &ldquo;Is there a possibility of a full-time offer?&rdquo;
      </p>

      <h2>Tasks you might be asked to do</h2>
      <p>Many internship interviews include a small practical round. Expect one of:</p>
      <ul>
        <li>
          <strong>A short assignment</strong> (build a small page/component) given
          24–48 hours before a discussion.
        </li>
        <li>
          <strong>A live exercise:</strong> explain or fix a small code snippet,
          or answer &ldquo;what does this code output?&rdquo;
        </li>
        <li>
          <strong>A portfolio review:</strong> walk through one of your projects
          while they ask questions.
        </li>
        <li>
          <strong>Aptitude/logic round:</strong> basic puzzles or simple
          programming problems (common in mass internship drives).
        </li>
      </ul>
      <p>
        Preparation tip: be ready to <em>explain your own project code line by
        line</em>. The most common failure is a project on the resume that the
        candidate can&apos;t actually explain.
      </p>

      <h2>Before the interview: a 5-point checklist</h2>
      <ol>
        <li>Read the internship description; note the required skills and match them to your resume.</li>
        <li>Prepare a 60–90 second &ldquo;tell me about yourself&rdquo; and practise it out loud.</li>
        <li>Prepare one project story in detail (what, your role, tech, result, one challenge).</li>
        <li>Research the company: product, users, one recent update.</li>
        <li>Prepare 2 questions to ask them, and send a thank-you email within 24 hours.</li>
      </ol>

      <Callout title="After the interview: the thank-you email">
        A short thank-you email within 24 hours keeps you memorable — most
        candidates skip it. Use the{" "}
        <a href="/emails/thank-you">thank-you email guide</a> or generate one in
        the <a href="/tools/email-generator">email generator</a>.
      </Callout>

      <ToolCta
        href="/tools/email-generator"
        cta="Generate your application email"
        heading="Applying for internships? Start with the email."
      >
        A strong first email gets you the interview. Use the generator&apos;s
        internship template, then personalise it — see the{" "}
        <a href="/emails/internship-application">internship application email guide</a>{" "}
        for what recruiters respond to.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/interview/hr-questions-freshers">HR interview questions for freshers</a></li>
        <li><a href="/interview/tell-me-about-yourself">Tell me about yourself</a></li>
        <li><a href="/interview/javascript">JavaScript interview questions for beginners</a></li>
        <li><a href="/interview/frontend-prep">Frontend developer interview preparation</a></li>
        <li><a href="/emails/internship-application">Internship application email templates</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Can I get an internship with zero projects?",
            answer:
              "It's much harder, but possible at companies that teach from scratch. Your best move: build one small project this week (even a clean portfolio page or a to-do app), deploy it, and lead with it. One real project changes the entire conversation.",
          },
          {
            question: "Do internship interviews ask salary or stipend questions?",
            answer:
              "Usually the stipend is stated in the posting. If asked about expectations, give a modest, researched range for your city, or say you're flexible and primarily looking to learn.",
          },
          {
            question: "What if the interview is in a domain I know little about (e.g., data science, when I know web)?",
            answer:
              "Be honest about your level and show learning ability: 'I'm strongest in web development, and I've started learning the basics of data analysis through a course — I'd love to grow into this role.' Curiosity and fundamentals beat pretending.",
          },
        ]}
      />
    </GuideLayout>
  );
}
