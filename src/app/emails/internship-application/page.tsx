import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Internship Application Email — Templates, Subject Lines & Examples",
  description:
    "How to write an internship application email that gets replies: a fill-in-the-blanks template, 3 complete examples (with and without referral), subject lines that get opened, and what to attach.",
  alternates: { canonical: "/emails/internship-application" },
};

export default function InternshipApplicationEmailPage() {
  return (
    <GuideLayout
      title="Internship application email: templates & examples"
      description="A fill-in-the-blanks internship application email template, three complete examples, subject lines that get opened, and a checklist of what to attach and send."
      category="Email guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Email guides", href: "/guides" },
        { label: "Internship application email" },
      ]}
    >
      <p>
        Most internship applications start with an email — and most of those
        emails are ignored because they&apos;re long, generic, and clearly
        copy-pasted. A short, specific, honest email gets read. Here is how to
        write one.
      </p>

      <h2>The rules that get emails opened</h2>
      <ul>
        <li><strong>Short:</strong> 120–180 words in the body. Recruiters read on phones.</li>
        <li><strong>Specific:</strong> name the exact role and company. No &ldquo;Dear Sir/Madam&rdquo; if you can find a name.</li>
        <li><strong>Honest:</strong> only claim what you can defend. Never paste sample text with fake details.</li>
        <li><strong>One ask:</strong> end with a single clear request (review your resume / a short call).</li>
        <li><strong>Attachments:</strong> resume as PDF, named <code>YourName_Resume.pdf</code>. Portfolio/GitHub link in the body.</li>
      </ul>

      <h2>Fill-in-the-blanks template</h2>
      <Example label="Template — copy, fill, personalise">
        <pre>{`Subject: Application for [Internship Role] — [Your Name], [Degree/Year]

Dear [Hiring Manager's name / Hiring Team],

I am writing to apply for the [Role] internship at [Company]. I am a
[year] student of [Degree] at [College/University], and I am available
[availability, e.g. "immediately for a 3-month full-time internship"].

My skills include [2–4 relevant skills]. I have applied them in
[one project or experience, one sentence — e.g. "a library management
system I built with PHP and MySQL, which our college library used for
a month"].

I have attached my resume for your reference. [Optional: one line on why
this company — a specific product, value, or team practice.]

I would welcome the opportunity to discuss how I can contribute to your
team. Thank you for your time and consideration.

Regards,
[Your Name]
[Phone] | [Email] | [LinkedIn/GitHub/Portfolio]`}</pre>
      </Example>

      <h2>Subject lines that get opened</h2>
      <ul>
        <li><code>Application for Frontend Developer Intern — Ananya Sharma, BCA Final Year</code></li>
        <li><code>Internship Application: [Role] — [Your Name], [College]</code></li>
        <li>With a referral: <code>Referred by [Name] — Application for [Role] Internship</code></li>
      </ul>
      <p>Avoid: &ldquo;Job application&rdquo;, &ldquo;Sir, please reply&rdquo;, or ALL CAPS.</p>

      <h2>Three complete examples</h2>

      <h3>Example 1: cold application (no referral)</h3>
      <Example label="Cold application email">
        <pre>{`Subject: Application for Frontend Developer Intern — Ananya Sharma, BCA Final Year

Dear Hiring Team,

I am writing to apply for the Frontend Developer internship at TechStart
Solutions. I am a final-year BCA student at Pune University and I am
available immediately for a 3-month, full-time internship.

My skills include HTML, CSS, JavaScript, and React. I recently built a
weather dashboard in React that shows 5-day forecasts for any city, and
I completed a 2-month web development internship where I improved a
landing page's mobile load time by about 35%.

I have read that your team cares about performance budgets, which is
something I actively practise — I'd welcome the chance to contribute.

I have attached my resume for your reference. I would welcome the
opportunity to discuss how I can contribute to your team.

Regards,
Ananya Sharma
+91 98765 43210 | ananya.sharma@example.com | github.com/ananyasharma`}</pre>
      </Example>

      <h3>Example 2: with a referral</h3>
      <Example label="Referral email">
        <pre>{`Subject: Referred by Rahul Verma — Application for Web Developer Internship

Dear Hiring Team,

I am writing to apply for the Web Developer internship at TechStart
Solutions. Rahul Verma, who works on your frontend team, suggested I
reach out, as my background in HTML, CSS, and JavaScript matches what
the role requires.

I am a final-year BCA student with four web projects on GitHub,
including a library management system that won 2nd place in our
inter-college project exhibition. I am available for a 6-month
internship starting in January.

I have attached my resume. Thank you for your time — I'd be glad to
interview at your convenience.

Regards,
Ananya Sharma
+91 98765 43210 | ananya.sharma@example.com`}</pre>
      </Example>

      <h3>Example 3: short and simple (when you have less to say)</h3>
      <Example label="Short version">
        <pre>{`Subject: Internship Application: Web Developer Intern — Ananya Sharma

Hi team,

I'm a BCA final-year student looking for a web development internship
at TechStart Solutions. I know HTML, CSS, and JavaScript, and I've
built and deployed three projects you can see on my portfolio
(github.com/ananyasharma).

I'm available for a 3-month internship starting immediately. My resume
is attached — I'd love to discuss how I can help your team.

Thanks,
Ananya Sharma
+91 98765 43210 | ananya.sharma@example.com`}</pre>
      </Example>

      <Callout title="Never do this">
        Don&apos;t paste a template with the brackets still in it. Don&apos;t claim
        skills or experience you don&apos;t have. Don&apos;t send the same email to 50
        companies with no company name — personalise the one line about why
        them, every time.
      </Callout>

      <ToolCta
        href="/tools/email-generator"
        cta="Open the Email Generator"
        heading="Generate yours in 2 minutes"
      >
        Pick the &ldquo;Internship application&rdquo; template, fill in your details, edit
        the generated email, and copy it into your mail app. Everything stays
        in your browser.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/emails/recruiter-outreach">How to email a recruiter</a></li>
        <li><a href="/emails/follow-up">Job application follow-up emails</a></li>
        <li><a href="/emails/thank-you">Interview thank-you email</a></li>
        <li><a href="/interview/internship-prep">Internship interview preparation</a></li>
        <li><a href="/resume/bca-fresher-resume">BCA fresher resume example</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Should I attach my resume or link to it?",
            answer:
              "Attach a PDF (named YourName_Resume.pdf) — attachments get opened more often than Drive links, which sometimes require access requests. Keep the file under 1 MB.",
          },
          {
            question: "What if the posting says 'apply through the portal' only?",
            answer:
              "Apply through the portal first. A polite email to the recruiter in addition is acceptable and often helpful — keep it short and mention that you applied through the portal.",
          },
          {
            question: "How long should I wait before following up?",
            answer:
              "5–7 working days is the standard first follow-up. See the follow-up guide for the exact cadence and templates — one follow-up is polite, three is spam.",
          },
        ]}
      />
    </GuideLayout>
  );
}
