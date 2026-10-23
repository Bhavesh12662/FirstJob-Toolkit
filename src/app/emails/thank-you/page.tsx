import type { Metadata } from "next";
import {
  GuideLayout,
  Example,
  Callout,
  ToolCta,
  FaqSection,
} from "@/components/GuideLayout";

export const metadata: Metadata = {
  title: "Interview Thank-You Email — Templates & Examples (Send Within 24 Hours)",
  description:
    "How to write an interview thank-you email that keeps you memorable: when to send it (within 24 hours), what to include, 3 copy-adapt templates, and the mistakes that make it forgettable.",
  alternates: { canonical: "/emails/thank-you" },
};

export default function ThankYouEmailPage() {
  return (
    <GuideLayout
      title="Interview thank-you email: templates & examples"
      description="A short, sincere thank-you email after an interview can decide a close call. When to send it (within 24 hours), what to include, three copy-adapt templates, and the mistakes to avoid."
      category="Email guides"
      updated="October 23, 2026"
      crumbs={[
        { label: "Email guides", href: "/guides" },
        { label: "Thank-you email" },
      ]}
    >
      <p>
        Sending a thank-you email after an interview takes five minutes and is
        one of the highest-signal things a fresher can do. Most candidates skip
        it. When the interviewer is deciding between two similar people, the
        one who followed up professionally is remembered.
      </p>

      <h2>The rules of a great thank-you email</h2>
      <ul>
        <li><strong>Send within 24 hours</strong> of the interview — ideally the same evening.</li>
        <li><strong>Keep it short:</strong> 80–130 words. This is a note, not a report.</li>
        <li><strong>Mention one specific thing</strong> you discussed — it proves you were engaged.</li>
        <li><strong>Reaffirm interest</strong> in the role in one sentence.</li>
        <li><strong>No new information, no corrections</strong> — don&apos;t add skills you forgot to mention; that looks like you prepared poorly.</li>
        <li><strong>Send one per interviewer</strong> if you met several people — personalise each.</li>
      </ul>

      <h2>Template 1: standard thank-you (same day)</h2>
      <Example label="Standard thank-you email">
        <pre>{`Subject: Thank you for the interview — [Role] at [Company]

Dear [Interviewer's name],

Thank you for taking the time to speak with me today about the [Role]
position at [Company]. I enjoyed learning about [one specific thing —
e.g. "how your team approaches code reviews" or "the library project
you described"].

Our conversation reinforced my interest in the role, and I'm excited
about the possibility of contributing to your team.

Please feel free to reach out if you need any additional information
from me. I look forward to hearing about the next steps.

Regards,
[Your Name]
[Phone] | [Email]`}</pre>
      </Example>

      <h2>Template 2: short version (when you want to be brief)</h2>
      <Example label="Short thank-you">
        <pre>{`Subject: Thank you — [Role] interview

Hi [Name],

Thank you for the interview today. I really enjoyed our conversation
about [one specific topic], and I'm even more interested in the [Role]
position after hearing about [one detail about the team or the work].

I look forward to the next steps. Thanks again for your time.

Thanks,
[Your Name]`}</pre>
      </Example>

      <h2>Template 3: after a panel / multiple interviewers</h2>
      <Example label="Panel interview — personalised per interviewer">
        <pre>{`Subject: Thank you for today's interview — [Role] at [Company]

Dear [Name],

Thank you for the interview today. I especially enjoyed our discussion
about [topic this interviewer focused on — e.g. "how interns are mentored
in the first month" for an HR interviewer, or "the mobile performance
challenges" for an engineering interviewer].

I'm very interested in joining [Company] and contributing to [team or
product]. Please let me know if there's anything else you need from me.

Regards,
[Your Name]`}</pre>
      </Example>
      <p>
        Send a version like this to <em>each</em> interviewer, changing the
        specific topic to match your conversation with them.
      </p>

      <h2>What NOT to do</h2>
      <ul>
        <li>Don&apos;t send a generic &ldquo;thank you for your time&rdquo; with no specifics — it&apos;s forgettable.</li>
        <li>Don&apos;t ask &ldquo;did I get the job?&rdquo; in the thank-you email — it pressures the interviewer.</li>
        <li>Don&apos;t send it more than a day later — it starts to look like an afterthought.</li>
        <li>Don&apos;t write a long email summarising the whole interview.</li>
      </ul>

      <Callout title="No reply? That's normal">
        Many companies don&apos;t reply to thank-you emails — it doesn&apos;t mean anything
        negative. If a week passes with no update, send one polite check-in
        (see the <a href="/emails/follow-up">follow-up guide</a>, template 3),
        then move on and keep applying.
      </Callout>

      <ToolCta
        href="/tools/email-generator"
        cta="Generate your thank-you email"
        heading="Write yours in 2 minutes"
      >
        The email generator&apos;s &ldquo;Interview thank-you&rdquo; template produces a
        complete, polite draft from your details — edit it so it sounds like you.
      </ToolCta>

      <h2>Related guides</h2>
      <ul>
        <li><a href="/emails/follow-up">Job application follow-up emails</a></li>
        <li><a href="/emails/internship-application">Internship application email</a></li>
        <li><a href="/emails/recruiter-outreach">Email to a recruiter</a></li>
        <li><a href="/interview/internship-prep">Internship interview preparation</a></li>
      </ul>

      <FaqSection
        faqs={[
          {
            question: "What if the interview went badly? Should I still send a thank-you email?",
            answer:
              "Yes. You have nothing to lose and it keeps the door open — a weak interview followed by a gracious note is better than a weak interview followed by silence. Keep it warm and brief, and don't apologise for the interview itself.",
          },
          {
            question: "Should I send a thank-you email after a telephonic screening round?",
            answer:
              "Yes, a two-line thank-you is appropriate after any real conversation. It's low effort and keeps you top of mind while they schedule the next round.",
          },
          {
            question: "Do thank-you emails actually change hiring decisions?",
            answer:
              "They rarely rescue a bad interview, but they often tip close decisions, and they build a professional impression that can matter for future roles at the same company. Five minutes, real upside — send it.",
          },
        ]}
      />
    </GuideLayout>
  );
}
