import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Job Application Follow-Up Email — When & How (With Templates)",
  description:
    "How to follow up on a job application without being annoying: the right timing (5–7 days), a polite cadence, 3 copy-adapt follow-up email templates, and when to stop.",
  alternates: { canonical: "/emails/follow-up" },
};

export default function FollowUpEmailPage() {
  return (
    <GuideLayout
      title="Job application follow-up emails: when & how"
      description="Follow up on job applications the right way: the timing (5–7 working days), a sane cadence (one, maybe two follow-ups), three copy-adapt email templates, and when to stop and move on."
      category="Email guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Email guides", href: "/guides" },
        { label: "Follow-up email" },
      ]}
    >
      <p>
        Following up works — recruiters are busy, not rude, and a polite nudge
        often moves your application from &ldquo;unseen&rdquo; to &ldquo;seen&rdquo;. The skill is
        being persistent without being a pest. Here&apos;s the line, and the
        emails that stay on the right side of it.
      </p>

      <h2>The follow-up cadence that works</h2>
      <ol>
        <li><strong>Day 0:</strong> send your application (see the <a href="/emails/internship-application">internship application guide</a>).</li>
        <li><strong>Day 5–7 (working days):</strong> send follow-up #1 — short, polite, adds one new piece of information if you have one.</li>
        <li><strong>Day 12–14:</strong> send follow-up #2 — very short, different subject line, no guilt-tripping.</li>
        <li><strong>After that:</strong> stop. Update your tracker, keep applying. If they want you, they&apos;ll reply.</li>
      </ol>
      <p>
        Two follow-ups maximum. A third email has a negative effect — it
        signals desperation and gets you remembered for the wrong reason.
      </p>

      <h2>Template 1: first follow-up (5–7 days after applying)</h2>
      <Example label="Follow-up #1">
        <pre>{`Subject: Following up on my application — [Role] at [Company]

Dear [Hiring Manager's name / Hiring Team],

I hope this message finds you well. I applied for the [Role] position
at [Company] on [date] and wanted to politely follow up on the status
of my application.

[Optional one-liner adding value: e.g. "Since applying, I completed a
certification in [relevant topic] and added a new project to my
portfolio (link)."]

I remain very interested in the opportunity and would be happy to share
any additional information. Thank you for your time and consideration.

Regards,
[Your Name]
[Phone] | [Email]`}</pre>
      </Example>

      <h2>Template 2: second follow-up (another 5–7 days later)</h2>
      <Example label="Follow-up #2 — shorter, new subject">
        <pre>{`Subject: Re: [Role] application — [Your Name]

Dear [Name],

I hope you're doing well. I'm writing once more about my application
for the [Role] position, sent on [date]. I completely understand how
busy hiring periods are.

If the role is no longer open or my profile isn't a fit, I'd be grateful
for a brief note either way — it helps me plan. Either way, thank you
for your time.

Regards,
[Your Name]`}</pre>
      </Example>

      <h2>Template 3: follow-up after an interview (different situation)</h2>
      <Example label="Post-interview check-in">
        <pre>{`Subject: Thank you — [Role] interview on [date]

Dear [Interviewer's name],

Thank you again for the interview on [date]. I enjoyed learning about
[one specific thing you discussed — a project, a challenge, a team
practice].

I'm writing to check whether there's any update on the next steps. I
remain very interested in the [Role] position and happy to provide any
further information.

Regards,
[Your Name]`}</pre>
      </Example>
      <p>
        Note: after an interview, you should normally send a{" "}
        <a href="/emails/thank-you">thank-you email</a> within 24 hours — the
        check-in above is only if a week passes with no response.
      </p>

      <h2>What makes follow-ups get ignored (or resented)</h2>
      <ul>
        <li>Guilt or pressure: &ldquo;I haven&apos;t heard from you, is something wrong?&rdquo;</li>
        <li>Long re-sends of your entire application.</li>
        <li>Multiple follow-ups in the same week.</li>
        <li>Following up before 5 working days — it reads as impatient.</li>
        <li>Entitled tones: &ldquo;You haven&apos;t replied to my last three emails.&rdquo;</li>
      </ul>

      <Callout title="Track your follow-up dates">
        The easiest way to follow up on time is to know when you applied. The
        job tracker stores your applications with follow-up dates and shows
        what&apos;s due in the next 7 days — so no application goes cold by accident.
      </Callout>

      <ToolCta
        href="/tools/job-tracker"
        cta="Open the Job Tracker"
        heading="Never lose track of a follow-up"
      >
        Add each application with its follow-up date, see upcoming follow-ups
        at a glance, and export everything to CSV as a backup.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/emails/internship-application">Internship application email</a></li>
        <li><a href="/emails/recruiter-outreach">Email to a recruiter</a></li>
        <li><a href="/emails/thank-you">Interview thank-you email</a></li>
        <li><a href="/tools/email-generator">Cover letter &amp; email generator</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "Is following up actually worth it?",
            answer:
              "Yes — a single polite follow-up meaningfully increases reply rates because most candidates never send one. It also demonstrates professional persistence, which recruiters notice.",
          },
          {
            question: "What if the job posting says 'no calls, please'?",
            answer:
              "Respect it. Follow up by email only, once. If they explicitly asked for no follow-ups at all, don't — instead, connect with someone at the company on LinkedIn with a short, value-adding message.",
          },
          {
            question: "Should I follow up on weekends?",
            answer:
              "No — send follow-ups on working days, ideally Tuesday to Thursday mornings. A Monday or Friday email is fine; weekends are not.",
          },
        ]}
      />
    </GuideLayout>
  );
}
