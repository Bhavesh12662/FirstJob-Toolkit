"use client";

import { useMemo, useState } from "react";

type TemplateKey = "internship" | "job" | "recruiter" | "followup" | "thankyou";
type Tone = "professional" | "simple";

type Fields = {
  yourName: string;
  targetRole: string;
  company: string;
  yourBackground: string;
  skills: string;
  availability: string;
  email: string;
  phone: string;
  portfolio: string;
};

const emptyFields = (): Fields => ({
  yourName: "",
  targetRole: "",
  company: "",
  yourBackground: "",
  skills: "",
  availability: "",
  email: "",
  phone: "",
  portfolio: "",
});

const sampleFields = (): Fields => ({
  yourName: "Ananya Sharma",
  targetRole: "Frontend Developer Intern",
  company: "TechStart Solutions",
  yourBackground:
    "a final-year BCA student at Pune University with hands-on experience in HTML, CSS, and JavaScript, and a 2-month web development internship",
  skills: "HTML, CSS, JavaScript, React, and Tailwind CSS",
  availability: "immediately, for a 3-month, full-time internship",
  email: "ananya.sharma@example.com",
  phone: "+91 98765 43210",
  portfolio: "github.com/ananyasharma",
});

const templates: {
  id: TemplateKey;
  label: string;
  description: string;
}[] = [
  {
    id: "internship",
    label: "Internship application",
    description: "Apply for an internship, with or without a referral.",
  },
  {
    id: "job",
    label: "Fresher job application",
    description: "Apply for an entry-level job as a fresher.",
  },
  {
    id: "recruiter",
    label: "Recruiter outreach",
    description: "Introduce yourself to a recruiter on LinkedIn or email.",
  },
  {
    id: "followup",
    label: "Application follow-up",
    description: "Politely follow up after applying.",
  },
  {
    id: "thankyou",
    label: "Interview thank-you",
    description: "Send a short thank-you note after an interview.",
  },
];

/** Returns "Label: value" or "" when value is empty. */
const line = (label: string, value: string) =>
  value.trim() ? `${label}: ${value.trim()}` : "";

function signature(f: Fields, tone: Tone): string {
  const contact = [f.email, f.phone, f.portfolio]
    .map((s) => s.trim())
    .filter(Boolean)
    .join(" | ");
  const closing = tone === "professional" ? "Regards" : "Thanks";
  return `${closing},\n${f.yourName.trim()}${contact ? `\n${contact}` : ""}`;
}

function buildEmail(
  template: TemplateKey,
  tone: Tone,
  f: Fields
): { subject: string; body: string } {
  const name = f.yourName.trim();
  const role = f.targetRole.trim();
  const company = f.company.trim();
  const background = f.yourBackground.trim();
  const skills = f.skills.trim();
  const availability = f.availability.trim();
  const sign = signature(f, tone);
  const formal = tone === "professional";

  switch (template) {
    case "internship": {
      const subject = `Application for ${role || "Internship"} at ${company || "your company"}`;
      const body = [
        formal ? `Dear Hiring Team,` : `Hi team,`,
        ``,
        `I am writing to apply for the ${role || "internship"} position at ${company || "your company"}. I am ${background || "a student looking for a practical learning opportunity"}.`,
        skills
          ? `My technical skills include ${skills}. I have applied them in academic projects and an internship, and I am eager to contribute to your team.`
          : `I am eager to learn and contribute to your team, and I pick up new tools quickly.`,
        availability
          ? `I am available ${availability}.`
          : `I am flexible with dates and hours and happy to work around your schedule.`,
        `I have attached my resume for your reference. I would welcome the opportunity to discuss how I can contribute to ${company || "your team"}.`,
        ``,
        sign,
      ].join("\n");
      return { subject, body };
    }
    case "job": {
      const subject = `Application for ${role || "the role"} — ${name || "Fresher applicant"}`;
      const body = [
        formal ? `Dear Hiring Manager,` : `Hi there,`,
        ``,
        `I am writing to express my interest in the ${role || "position"} at ${company || "your company"}. I am ${background || "a recent graduate looking for my first role in the industry"}.`,
        skills
          ? `I am proficient in ${skills}, and I have used them to build projects you can see in my resume and portfolio.`
          : `I am a quick learner and confident I can add value to your team.`,
        `I have attached my resume for your review. I would be glad to interview at your convenience and discuss how I can contribute to ${company || "your team"}.`,
        ``,
        sign,
      ].join("\n");
      return { subject, body };
    }
    case "recruiter": {
      const subject = `${name || "A fresher applicant"} — interested in ${role || "entry-level roles"} at ${company || "your company"}`;
      const body = [
        formal ? `Dear Recruiter,` : `Hi,`,
        ``,
        `I hope you're doing well. I came across the ${role || "open role"} at ${company || "your company"} and wanted to reach out directly.`,
        `I am ${background || "a fresher looking for my first opportunity"}.${skills ? ` My skills include ${skills}.` : ``}`,
        line("Portfolio", f.portfolio),
        line("Availability", availability),
        ``,
        `I've also applied through the official channel, but I'd appreciate any guidance you can share about the hiring process. Thank you for your time.`,
        ``,
        sign,
      ]
        .filter((l) => l !== "")
        .join("\n");
      return { subject, body };
    }
    case "followup": {
      const subject = `Following up on my application for ${role || "the role"} at ${company || "your company"}`;
      const body = [
        formal ? `Dear Hiring Team,` : `Hi team,`,
        ``,
        `I hope this message finds you well. I applied for the ${role || "position"} at ${company || "your company"} and wanted to politely follow up on the status of my application.`,
        `I remain very interested in the opportunity${background ? ` and would be happy to share any additional information about my background (${background})` : ` and would be happy to share any additional information`}.`,
        `Thank you for your time and consideration. I look forward to hearing from you.`,
        ``,
        sign,
      ].join("\n");
      return { subject, body };
    }
    case "thankyou": {
      const subject = `Thank you for the interview — ${role || "the role"} at ${company || "your company"}`;
      const body = [
        formal ? `Dear Interviewer,` : `Hi,`,
        ``,
        `Thank you for taking the time to speak with me about the ${role || "role"} at ${company || "your company"}. I enjoyed learning more about the position and the team.`,
        `Our conversation reinforced my interest in the role${skills ? `, and I'm excited about the possibility of contributing with my skills in ${skills}` : `, and I'm excited about the possibility of contributing to your team`}.`,
        `Please feel free to reach out if you need any additional information from me. I look forward to hearing about the next steps.`,
        ``,
        sign,
      ].join("\n");
      return { subject, body };
    }
  }
}

export default function EmailGenerator() {
  const [template, setTemplate] = useState<TemplateKey>("internship");
  const [tone, setTone] = useState<Tone>("professional");
  const [fields, setFields] = useState<Fields>(() => emptyFields());
  const [edited, setEdited] = useState<string | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  const generated = useMemo(
    () => buildEmail(template, tone, fields),
    [template, tone, fields]
  );

  const output = edited ?? `${generated.subject}\n\n${generated.body}`;

  const update = (key: keyof Fields, value: string) =>
    setFields((f) => ({ ...f, [key]: value }));

  const validate = (): string[] => {
    const errs: string[] = [];
    if (!fields.yourName.trim()) errs.push("Please enter your name.");
    if (!fields.company.trim()) errs.push("Please enter the company name.");
    if (template !== "thankyou" && !fields.targetRole.trim()) {
      errs.push("Please enter the role you are applying for.");
    }
    if (
      fields.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())
    ) {
      errs.push("Your email address looks invalid.");
    }
    return errs;
  };

  const handleCopy = async () => {
    const errs = validate();
    setErrors(errs);
    if (errs.length > 0) return;
    try {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable (e.g. non-secure context) — user can select manually.
      setCopied(false);
    }
  };

  const handleReset = () => {
    setFields(emptyFields());
    setEdited(null);
    setErrors([]);
    setCopied(false);
  };

  const inputClass = (hasError: boolean) =>
    hasError ? "input input-error" : "input";

  const fieldError = (message: string) => errors.includes(message);

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        <strong>Important:</strong> these templates help you write{" "}
        <em>your own</em> email. Only include qualifications, skills, and
        experience you genuinely have — never copy sample details into a real
        application. Always read the generated email and edit it before
        sending. This tool runs entirely in your browser; nothing you type is
        sent anywhere.
      </div>

      {errors.length > 0 && (
        <div
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4"
        >
          <p className="font-semibold text-red-800">Please fix these:</p>
          <ul className="mt-1 list-disc pl-5 text-sm text-red-700">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Template picker */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">1. Choose a template</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((t) => (
            <button
              key={t.id}
              type="button"
              aria-pressed={template === t.id}
              onClick={() => {
                setTemplate(t.id);
                setEdited(null);
              }}
              className={`rounded-xl border p-4 text-left transition ${
                template === t.id
                  ? "border-brand-500 bg-brand-50 ring-2 ring-brand-200"
                  : "border-slate-200 bg-white hover:border-brand-200"
              }`}
            >
              <span className="block font-semibold text-slate-900">{t.label}</span>
              <span className="mt-1 block text-sm text-slate-600">
                {t.description}
              </span>
            </button>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <div>
            <label className="label" htmlFor="email-tone">Tone</label>
            <select
              id="email-tone"
              className="select"
              value={tone}
              onChange={(e) => {
                setTone(e.target.value as Tone);
                setEdited(null);
              }}
            >
              <option value="professional">Professional (formal)</option>
              <option value="simple">Simple (friendly)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Details form */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">2. Enter your details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="label" htmlFor="eg-name">Your name *</label>
            <input
              id="eg-name"
              className={inputClass(fieldError("Please enter your name."))}
              value={fields.yourName}
              onChange={(e) => update("yourName", e.target.value)}
              placeholder="Ananya Sharma"
              autoComplete="name"
            />
          </div>
          <div>
            <label className="label" htmlFor="eg-company">Company *</label>
            <input
              id="eg-company"
              className={inputClass(fieldError("Please enter the company name."))}
              value={fields.company}
              onChange={(e) => update("company", e.target.value)}
              placeholder="TechStart Solutions"
            />
          </div>
          <div>
            <label className="label" htmlFor="eg-role">Target role *</label>
            <input
              id="eg-role"
              className={inputClass(
                fieldError("Please enter the role you are applying for.")
              )}
              value={fields.targetRole}
              onChange={(e) => update("targetRole", e.target.value)}
              placeholder="Frontend Developer Intern"
            />
          </div>
          <div>
            <label className="label" htmlFor="eg-availability">Availability</label>
            <input
              id="eg-availability"
              className="input"
              value={fields.availability}
              onChange={(e) => update("availability", e.target.value)}
              placeholder="immediately, for a 3-month full-time internship"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="eg-background">
              One-line background
            </label>
            <input
              id="eg-background"
              className="input"
              value={fields.yourBackground}
              onChange={(e) => update("yourBackground", e.target.value)}
              placeholder="a final-year BCA student with hands-on experience in HTML, CSS, and JavaScript"
            />
            <p className="hint">
              Written so the sentence reads: &ldquo;I am ___&rdquo;.
            </p>
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="eg-skills">Key skills</label>
            <input
              id="eg-skills"
              className="input"
              value={fields.skills}
              onChange={(e) => update("skills", e.target.value)}
              placeholder="HTML, CSS, JavaScript, React"
            />
          </div>
          <div>
            <label className="label" htmlFor="eg-email">Your email</label>
            <input
              id="eg-email"
              type="email"
              className={inputClass(fieldError("Your email address looks invalid."))}
              value={fields.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label className="label" htmlFor="eg-phone">Your phone</label>
            <input
              id="eg-phone"
              type="tel"
              className="input"
              value={fields.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+91 98765 43210"
              autoComplete="tel"
            />
          </div>
          <div className="sm:col-span-2">
            <label className="label" htmlFor="eg-portfolio">
              Portfolio / LinkedIn / GitHub link
            </label>
            <input
              id="eg-portfolio"
              className="input"
              value={fields.portfolio}
              onChange={(e) => update("portfolio", e.target.value)}
              placeholder="github.com/ananyasharma"
            />
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              setFields(sampleFields());
              setEdited(null);
              setErrors([]);
            }}
          >
            Load sample data
          </button>
          <button type="button" className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      {/* Output */}
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-slate-900">
            3. Your email (editable)
          </h2>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="btn btn-primary"
            >
              {copied ? "✓ Copied!" : "Copy to clipboard"}
            </button>
            {edited !== null && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => setEdited(null)}
              >
                Reset edits
              </button>
            )}
          </div>
        </div>
        <p className="hint">
          The first line is the subject. Edit anything before you send — the
          best emails sound like you, not like a template.
        </p>
        <textarea
          aria-label="Generated email (editable)"
          className="textarea mt-3 font-mono text-sm"
          style={{ minHeight: "22rem", whiteSpace: "pre-wrap" }}
          value={output}
          onChange={(e) => setEdited(e.target.value)}
        />
      </div>
    </div>
  );
}
