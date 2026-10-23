import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "How to Email a Recruiter — Templates & Examples (LinkedIn + Email)",
  description:
    "How to reach out to recruiters professionally on LinkedIn and email: when to do it, what to say, 3 copy-adapt message templates, and how to follow up without being annoying.",
  alternates: { canonical: "/emails/recruiter-outreach" },
};

export default function RecruiterOutreachPage() {
  return (
    <GuideLayout
      title="How to email a recruiter (with templates)"
      description="How to reach out to recruiters on LinkedIn and email the right way: when to do it, what to say, three copy-adapt templates, and how to follow up once, politely."
      category="Email guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Email guides", href: "/guides" },
        { label: "Email to a recruiter" },
      ]}
    >
      <p>
        Recruiters are gatekeepers you can politely walk through. A short,
        specific, respectful message to the right recruiter regularly beats
        applying into a portal&apos;s black hole. The key: make their job easy —
        tell them who you are, what you want, and why you&apos;re worth a call,
        in under 150 words.
      </p>

      <h2>When to message a recruiter</h2>
      <ul>
        <li>When a job posting names a recruiter or &ldquo;Talent Acquisition&rdquo; contact.</li>
        <li>When you&apos;ve already applied through the official channel and want to introduce yourself.</li>
        <li>When you found a relevant open role on LinkedIn and the poster is a recruiter.</li>
        <li>When someone at the company referred you — mention the referral in the first line.</li>
      </ul>
      <p>
        Don&apos;t: message the same recruiter about every role, send messages at
        midnight, or write paragraphs about your life story.
      </p>

      <h2>The 4-part structure</h2>
      <ol>
        <li><strong>Hook:</strong> the role + how you found it (or who referred you).</li>
        <li><strong>Who you are:</strong> one line — degree/year + core skills.</li>
        <li><strong>Proof:</strong> one line — a project, internship, or result.</li>
        <li><strong>Ask:</strong> one clear, small request — a 10-minute call or application review.</li>
      </ol>

      <h2>Templates</h2>

      <h3>Template 1: LinkedIn message (short — connection requests have limits)</h3>
      <Example label="LinkedIn message">
        <pre>{`Hi [Name], I came across the Frontend Developer Intern opening at
[Company] and wanted to introduce myself. I'm a final-year BCA student
skilled in HTML, CSS, and JavaScript, with a 2-month internship and four
projects on GitHub (github.com/ananyasharma).

I've applied through the official channel and would love any guidance
you can share about the process. Thank you for your time!

— Ananya Sharma
[College] | [Phone]`}</pre>
      </Example>

      <h3>Template 2: email to a recruiter (formal)</h3>
      <Example label="Recruiter email">
        <pre>{`Subject: Interested in [Role] at [Company] — [Your Name], [Degree/Year]

Dear [Recruiter's name],

I hope you're doing well. I recently applied for the [Role] position at
[Company] and wanted to reach out directly to introduce myself.

I am a [year] [Degree] student at [College], proficient in [skills].
[One proof line: e.g. "Most recently, I built a library management
system that our college library used for a month, and completed a
summer internship in web development."]

I have attached my resume and would welcome 10 minutes of your time to
learn about the hiring process, if that's possible. I completely
understand if you're busy — thank you either way.

Regards,
[Your Name]
[Phone] | [Email] | [LinkedIn] | [GitHub/Portfolio]`}</pre>
      </Example>

      <h3>Template 3: referral-based outreach (highest reply rate)</h3>
      <Example label="With a referral">
        <pre>{`Subject: [Referrer's name] suggested I reach out — [Role] at [Company]

Hi [Recruiter's name],

[Referrer's name], [their role] at [Company], suggested I get in touch
regarding the [Role] opening. I'm a [year] [Degree] student with
[skills], and [one proof line].

I'd appreciate any guidance on the application process — or a short
call if your schedule allows. My resume is attached.

Thank you,
[Your Name]`}</pre>
      </Example>

      <h2>Finding the right recruiter</h2>
      <ul>
        <li>On LinkedIn, search: <code>Talent Acquisition [Company]</code> or <code>Technical Recruiter [Domain]</code>.</li>
        <li>Check the &ldquo;Posted by&rdquo; line on the job post — many companies name the recruiter.</li>
        <li>Company career pages often list the hiring team or a recruiting email (e.g., careers@company.com).</li>
        <li>Alumni from your college working at the company are warm, low-pressure contacts.</li>
      </ul>

      <Callout title="Follow up once — politely">
        If you don&apos;t hear back in 5–7 working days, send one short follow-up
        (see the <a href="/emails/follow-up">follow-up guide</a>). One follow-up is
        professional; three is harassment. After that, move on and keep
        applying — a non-reply is about their volume, not your worth.
      </Callout>

      <ToolCta
        href="/tools/email-generator"
        cta="Generate a recruiter outreach email"
        heading="Write yours in 2 minutes"
      >
        The email generator has a dedicated &ldquo;Recruiter outreach&rdquo; template with
        professional and simple tones — fill in your details and copy the
        result.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/emails/internship-application">Internship application email</a></li>
        <li><a href="/emails/follow-up">Job application follow-up emails</a></li>
        <li><a href="/emails/thank-you">Interview thank-you email</a></li>
        <li><a href="/interview/internship-prep">Internship interview preparation</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Is it okay to message a recruiter on LinkedIn without applying first?",
            answer:
              "Yes — a short, relevant message is normal and often appreciated. Mention the specific role you're interested in. If you haven't applied yet, say you're about to.",
          },
          {
            question: "What if the recruiter doesn't reply?",
            answer:
              "Follow up once after 5–7 working days, then move on. Many recruiters manage dozens of roles; silence is rarely personal. Keep a record in your job tracker.",
          },
          {
            question: "Can I ask a recruiter for a referral?",
            answer:
              "You can ask politely — 'If there's an employee referral program, I'd be grateful to be considered' — but don't pressure them. Referral decisions belong to the company's employees, not the recruiter.",
          },
        ]}
      />
    </GuideLayout>
  );
}
