"use client";

import { useMemo, useState } from "react";

type GeneratorType =
  | "cover-letter"
  | "internship-email"
  | "job-email"
  | "recruiter-outreach"
  | "follow-up"
  | "thank-you";

type Tone = "professional" | "simple" | "friendly";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  targetJobTitle: string;
  companyName: string;
  hiringManager: string;
  skills: string;
  education: string;
  projects: string;
  experience: string;
  interest: string;
  additionalInfo: string;
};

type Draft = {
  subject: string;
  body: string;
};

const templates: { id: GeneratorType; label: string; description: string }[] = [
  {
    id: "cover-letter",
    label: "Cover letter",
    description: "A polished cover letter with a clear structure and role-specific details.",
  },
  {
    id: "internship-email",
    label: "Internship application email",
    description: "Send a short, professional internship application message.",
  },
  {
    id: "job-email",
    label: "Fresher job application email",
    description: "Apply for an entry-level job with a professional email.",
  },
  {
    id: "recruiter-outreach",
    label: "Recruiter outreach",
    description: "Reach out to a recruiter or hiring contact for guidance and opportunities.",
  },
  {
    id: "follow-up",
    label: "Follow-up email",
    description: "Check in politely after submitting an application.",
  },
  {
    id: "thank-you",
    label: "Interview thank-you",
    description: "Thank the interviewer after a conversation or interview round.",
  },
];

const toneLabels: Record<Tone, string> = {
  professional: "Professional",
  simple: "Simple",
  friendly: "Friendly",
};

const emptyForm = (): FormState => ({
  fullName: "",
  email: "",
  phone: "",
  targetJobTitle: "",
  companyName: "",
  hiringManager: "",
  skills: "",
  education: "",
  projects: "",
  experience: "",
  interest: "",
  additionalInfo: "",
});

const sampleForm = (): FormState => ({
  fullName: "Aarav Mehta",
  email: "aarav.mehta@example.com",
  phone: "+91 98765 43210",
  targetJobTitle: "Frontend Developer Intern",
  companyName: "Northstar Labs",
  hiringManager: "Ms. Nisha Verma",
  skills: "HTML, CSS, JavaScript, React, Tailwind CSS, Git",
  education: "B.Sc. in Computer Science from Pune University",
  projects: "A responsive portfolio website and a task manager app using React and local storage",
  experience: "2-month web development internship with a local startup",
  interest:
    "I am excited by Northstar Labs' focus on product design and user experience, and I want to learn from a team that values creative problem-solving.",
  additionalInfo:
    "Available for a 3-month internship starting next month and open to both remote and hybrid work.",
});

const normalise = (value: string | undefined) => (value ?? "").replace(/\s+/g, " ").trim();

const pick = (value: string | undefined, fallback = "") => {
  const cleaned = normalise(value);
  return cleaned || fallback;
};

const joinParts = (...values: string[]) =>
  values.filter((value) => value && normalise(value)).join(" ");

const listItems = (value: string) =>
  value
    .split(/[\n,]+/)
    .map((part) => part.trim())
    .filter(Boolean);

const paragraph = (text: string) => (text ? text.trim() : "");

const buildGreeting = (generatorType: GeneratorType, data: FormState, tone: Tone) => {
  if (generatorType === "recruiter-outreach") {
    return tone === "professional"
      ? `Dear ${pick(data.hiringManager || data.companyName || "Hiring Team")},`
      : `Hi ${pick(data.hiringManager || data.companyName || "there")},`;
  }

  if (tone === "friendly") {
    return `Hi ${pick(data.hiringManager || "Hiring Team")},`;
  }

  if (tone === "simple") {
    return `Hello ${pick(data.hiringManager || "Hiring Team")},`;
  }

  return `Dear ${pick(data.hiringManager || "Hiring Manager")},`;
};

function buildCoverLetter(data: FormState, tone: Tone): Draft {
  const fullName = pick(data.fullName, "Applicant Name");
  const role = pick(data.targetJobTitle, "the role");
  const company = pick(data.companyName, "your company");
  const skills = pick(data.skills, "communication, teamwork, and a willingness to learn");
  const education = pick(data.education, "my education");
  const projects = pick(data.projects, "my recent coursework and project work");
  const experience = data.experience ? ` I also gained relevant experience through ${data.experience}.` : "";
  const interest = pick(
    data.interest,
    `I am excited about the opportunity to apply my learning in a professional environment and grow with a strong team.`
  );
  const additionalInfo = data.additionalInfo
    ? ` ${normalise(data.additionalInfo)}`
    : "";

  const body = [
    buildGreeting("cover-letter", data, tone),
    "",
    `I am writing to express my interest in the ${role} position at ${company}. My name is ${fullName}, and I am currently pursuing ${education}. I am excited about the opportunity to contribute my skills and continue learning in a professional environment.`,
    `My relevant skills include ${skills}. Through ${projects}, I have applied these skills in practical settings and developed a strong understanding of building user-friendly, well-structured solutions.${experience}`,
    `I am particularly interested in this opportunity because ${interest} I believe this role would allow me to contribute meaningfully while learning from the team at ${company}.`,
    `Thank you for your time and consideration. I would welcome the opportunity to discuss how my background, enthusiasm, and skills could support the goals of ${company}.${additionalInfo}`,
    "",
    tone === "friendly" ? "Best regards," : tone === "simple" ? "Kind regards," : "Sincerely,",
    fullName,
    data.email ? `Email: ${data.email}` : "",
    data.phone ? `Phone: ${data.phone}` : "",
  ]
    .filter((line) => line !== undefined && line !== "")
    .join("\n");

  return {
    subject: `Cover Letter for ${role} at ${company}`,
    body,
  };
}

function buildEmailDraft(
  template: GeneratorType,
  tone: Tone,
  data: FormState
): Draft {
  const fullName = pick(data.fullName, "Applicant Name");
  const role = pick(data.targetJobTitle, "the position");
  const company = pick(data.companyName, "your company");
  const email = pick(data.email, "your.email@example.com");
  const phone = data.phone ? ` Phone: ${normalise(data.phone)}.` : "";
  const skills = pick(data.skills, "communication, teamwork, and a willingness to learn");
  const education = pick(data.education, "my academic background");
  const projects = pick(data.projects, "my recent project work");
  const experience = data.experience
    ? ` I also gained relevant experience through ${data.experience}.`
    : "";
  const interest = pick(
    data.interest,
    "I am excited by the opportunity to contribute to your team and continue learning in a practical environment."
  );

  const greeting = buildGreeting(template, data, tone);
  const closing = tone === "friendly" ? "Best," : tone === "simple" ? "Thanks," : "Regards,";

  switch (template) {
    case "internship-email": {
      const body = [
        greeting,
        "",
        `I am writing to apply for the ${role} internship opportunity at ${company}. My name is ${fullName}, and I am currently pursuing ${education}. I am eager to gain hands-on experience while contributing to a team that values learning and problem-solving.`,
        `My skills include ${skills}. Through ${projects}, I have built practical experience in working with real-world requirements and improving the user experience of digital products.${experience}`,
        `I am particularly interested in this opportunity because ${interest} I would welcome the opportunity to discuss how I can contribute to your team and continue developing my skills in a professional environment.`,
        `Thank you for your consideration. I have attached my resume for reference and would be happy to share any additional information if needed.`,
        "",
        closing,
        fullName,
        `Email: ${email}${phone}`,
      ].join("\n");

      return {
        subject: `Application for ${role} internship at ${company}`,
        body,
      };
    }
    case "job-email": {
      const body = [
        greeting,
        "",
        `I am writing to express my interest in the ${role} position at ${company}. I am ${fullName}, and I have built a strong foundation through ${education} and my recent work on ${projects}.`,
        `My skill set includes ${skills}. I am particularly motivated by opportunities where I can apply my learning in a collaborative environment and continue growing as a developer.${experience}`,
        `I am especially interested in this role because ${interest} I would welcome the opportunity to speak with you about how my background and enthusiasm could support your team.`,
        `Thank you for your time and consideration. I would be glad to share my resume and discuss the role further at your convenience.`,
        "",
        closing,
        fullName,
        `Email: ${email}${phone}`,
      ].join("\n");

      return {
        subject: `Application for ${role} at ${company}`,
        body,
      };
    }
    case "recruiter-outreach": {
      const body = [
        greeting,
        "",
        `I hope you are doing well. My name is ${fullName}, and I am very interested in opportunities in ${pick(data.targetJobTitle, "entry-level technology roles")}. I am currently building my experience through ${education}, and my practical work has included ${projects}.`,
        `My skills include ${skills}. I would be grateful for any guidance you can share about relevant openings or the hiring process at ${company}.`,
        `I would also be glad to share my resume and any additional information that may be useful. Thank you for your time and consideration.`,
        "",
        closing,
        fullName,
        `Email: ${email}${phone}`,
      ].join("\n");

      return {
        subject: `Interested in ${pick(data.targetJobTitle, "entry-level roles")} opportunities`,
        body,
      };
    }
    case "follow-up": {
      const body = [
        greeting,
        "",
        `I hope you are doing well. I recently submitted my application for the ${role} role at ${company} and wanted to follow up politely on the status of my application.`,
        `I remain very interested in the opportunity and would be glad to provide any additional information if needed. My experience and coursework have prepared me well for the role, and I believe I can contribute meaningfully to your team.`,
        `Thank you for your time and consideration. I appreciate your review of my application and look forward to the possibility of speaking further.`,
        "",
        closing,
        fullName,
        `Email: ${email}${phone}`,
      ].join("\n");

      return {
        subject: `Following up on my application for ${role} at ${company}`,
        body,
      };
    }
    case "thank-you": {
      const body = [
        greeting,
        "",
        `Thank you for taking the time to speak with me about the ${role} opportunity at ${company}. I appreciated the opportunity to learn more about the role and the team.`,
        `Our conversation reinforced my interest in the position, and I am increasingly excited by the chance to contribute with my skills in ${skills}. I also appreciated learning more about the work environment and the expectations for the role.`,
        `Thank you again for your time and consideration. I would be glad to provide any additional information if needed, and I look forward to hearing about the next steps.`,
        "",
        closing,
        fullName,
        `Email: ${email}${phone}`,
      ].join("\n");

      return {
        subject: `Thank you for the ${role} interview opportunity`,
        body,
      };
    }
    default:
      return buildCoverLetter(data, tone);
  }
}

function buildDraft(
  generatorType: GeneratorType,
  tone: Tone,
  data: FormState
): Draft {
  if (generatorType === "cover-letter") {
    return buildCoverLetter(data, tone);
  }

  return buildEmailDraft(generatorType, tone, data);
}

export default function CoverLetterGenerator() {
  const [generatorType, setGeneratorType] = useState<GeneratorType>("cover-letter");
  const [tone, setTone] = useState<Tone>("professional");
  const [formData, setFormData] = useState<FormState>(emptyForm);
  const [generated, setGenerated] = useState<Draft | null>(null);
  const [errors, setErrors] = useState<string[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  const hasUnsavedData = useMemo(
    () => Object.values(formData).some((value) => normalise(value).length > 0),
    [formData]
  );

  const validate = (): string[] => {
    const nextErrors: string[] = [];

    if (!normalise(formData.fullName)) {
      nextErrors.push("Please enter your full name.");
    }
    if (!normalise(formData.email)) {
      nextErrors.push("Please enter your email address.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.push("Please enter a valid email address.");
    }
    if (!normalise(formData.targetJobTitle)) {
      nextErrors.push("Please enter the target job title or internship role.");
    }
    if (!normalise(formData.companyName)) {
      nextErrors.push("Please enter the company name.");
    }
    if (!normalise(formData.skills)) {
      nextErrors.push("Please add your relevant skills.");
    }
    if (!normalise(formData.education)) {
      nextErrors.push("Please add your education details.");
    }
    if (!normalise(formData.projects)) {
      nextErrors.push("Please add your relevant projects.");
    }
    if (!normalise(formData.interest)) {
      nextErrors.push("Please explain why you are interested in the role.");
    }

    return nextErrors;
  };

  const updateField = (field: keyof FormState, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors([]);
    setSuccessMessage("");
    setGenerated(null);
  };

  const handleGenerate = () => {
    const nextErrors = validate();
    setErrors(nextErrors);
    setSuccessMessage("");

    if (nextErrors.length > 0) {
      return;
    }

    const draft = buildDraft(generatorType, tone, formData);
    setGenerated(draft);
    setSuccessMessage("Draft generated. Review and edit it before sending.");
  };

  const handleCopy = async (text: string, label: string) => {
    if (!text.trim()) {
      setErrors(["Generate a draft before copying."]);
      setSuccessMessage("");
      return;
    }

    try {
      await navigator.clipboard.writeText(text);
      setErrors([]);
      setSuccessMessage(`${label} copied to your clipboard.`);
    } catch {
      setErrors(["Clipboard access was blocked. You can still select the text and copy it manually."]);
      setSuccessMessage("");
    }
  };

  const handleReset = () => {
    if (hasUnsavedData && !window.confirm("Reset all entered data and clear the current draft?")) {
      return;
    }

    setFormData(emptyForm());
    setGenerated(null);
    setErrors([]);
    setSuccessMessage("");
  };

  const handleLoadSample = () => {
    setFormData(sampleForm());
    setGenerated(null);
    setErrors([]);
    setSuccessMessage("Sample data loaded. Click Generate to create a draft.");
  };

  const inputClass = (hasError: boolean) =>
    `input ${hasError ? "input-error" : ""}`.trim();

  const isFieldError = (field: keyof FormState) => {
    const value = normalise(formData[field]);
    if (field === "email") {
      return !!value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    return false;
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-relaxed text-amber-900">
        <strong>Important:</strong> these are editable draft templates. Please verify every detail before sending, and never include information you do not actually want to share. Everything is generated in your browser — nothing is uploaded or sent to a third-party service.
      </div>

      {errors.length > 0 && (
        <div role="alert" className="rounded-2xl border border-red-200 bg-red-50 p-4">
          <p className="font-semibold text-red-800">Please fix these items:</p>
          <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-red-700">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {successMessage && (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
          {successMessage}
        </div>
      )}

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">1. Choose a generator</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {templates.map((template) => (
            <button
              key={template.id}
              type="button"
              aria-pressed={generatorType === template.id}
              onClick={() => {
                setGeneratorType(template.id);
                setErrors([]);
                setSuccessMessage("");
                setGenerated(null);
              }}
              className={`rounded-xl border p-4 text-left transition ${
                generatorType === template.id
                  ? "border-brand-500 bg-brand-50 ring-2 ring-brand-200"
                  : "border-slate-200 bg-white hover:border-brand-200"
              }`}
            >
              <span className="block font-semibold text-slate-900">{template.label}</span>
              <span className="mt-1 block text-sm text-slate-600">{template.description}</span>
            </button>
          ))}
        </div>

        <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          <div>
            <label htmlFor="cover-letter-tone" className="label">
              Tone
            </label>
            <select
              id="cover-letter-tone"
              className="select"
              value={tone}
              onChange={(event) => {
                setTone(event.target.value as Tone);
                setGenerated(null);
                setErrors([]);
                setSuccessMessage("");
              }}
            >
              {Object.entries(toneLabels).map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900">2. Add your details</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="full-name" className="label">
              Full name
            </label>
            <input
              id="full-name"
              className={inputClass(!normalise(formData.fullName) && errors.length > 0)}
              value={formData.fullName}
              onChange={(event) => updateField("fullName", event.target.value)}
              placeholder="Aarav Mehta"
              autoComplete="name"
            />
          </div>

          <div>
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input
              id="email"
              type="email"
              className={inputClass(isFieldError("email") || (!normalise(formData.email) && errors.length > 0))}
              value={formData.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="aarav.mehta@example.com"
              autoComplete="email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="label">
              Phone number (optional)
            </label>
            <input
              id="phone"
              type="tel"
              className="input"
              value={formData.phone}
              onChange={(event) => updateField("phone", event.target.value)}
              placeholder="+91 98765 43210"
              autoComplete="tel"
            />
          </div>

          <div>
            <label htmlFor="target-job-title" className="label">
              Target job title
            </label>
            <input
              id="target-job-title"
              className={inputClass(!normalise(formData.targetJobTitle) && errors.length > 0)}
              value={formData.targetJobTitle}
              onChange={(event) => updateField("targetJobTitle", event.target.value)}
              placeholder="Frontend Developer Intern"
            />
          </div>

          <div>
            <label htmlFor="company-name" className="label">
              Company name
            </label>
            <input
              id="company-name"
              className={inputClass(!normalise(formData.companyName) && errors.length > 0)}
              value={formData.companyName}
              onChange={(event) => updateField("companyName", event.target.value)}
              placeholder="Northstar Labs"
            />
          </div>

          <div>
            <label htmlFor="hiring-manager" className="label">
              Hiring manager name (optional)
            </label>
            <input
              id="hiring-manager"
              className="input"
              value={formData.hiringManager}
              onChange={(event) => updateField("hiringManager", event.target.value)}
              placeholder="Ms. Nisha Verma"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="skills" className="label">
              Relevant skills
            </label>
            <input
              id="skills"
              className={inputClass(!normalise(formData.skills) && errors.length > 0)}
              value={formData.skills}
              onChange={(event) => updateField("skills", event.target.value)}
              placeholder="HTML, CSS, JavaScript, React, Git"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="education" className="label">
              Education
            </label>
            <textarea
              id="education"
              className={inputClass(!normalise(formData.education) && errors.length > 0)}
              value={formData.education}
              onChange={(event) => updateField("education", event.target.value)}
              placeholder="B.Com. in Computer Applications from Delhi University"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="projects" className="label">
              Relevant projects
            </label>
            <textarea
              id="projects"
              className={inputClass(!normalise(formData.projects) && errors.length > 0)}
              value={formData.projects}
              onChange={(event) => updateField("projects", event.target.value)}
              placeholder="Portfolio website with responsive design, task manager app with filters, and a weather dashboard using API data"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="experience" className="label">
              Relevant experience or internship (optional)
            </label>
            <textarea
              id="experience"
              className="input"
              value={formData.experience}
              onChange={(event) => updateField("experience", event.target.value)}
              placeholder="2-month web development internship with a startup, where I assisted with front-end improvements and bug fixes"
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="interest" className="label">
              Why are you interested in this role?
            </label>
            <textarea
              id="interest"
              className={inputClass(!normalise(formData.interest) && errors.length > 0)}
              value={formData.interest}
              onChange={(event) => updateField("interest", event.target.value)}
              placeholder="I am excited by the product-focused work and the chance to learn from a team that values practical problem-solving."
            />
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="additional-info" className="label">
              Additional information (optional)
            </label>
            <textarea
              id="additional-info"
              className="input"
              value={formData.additionalInfo}
              onChange={(event) => updateField("additionalInfo", event.target.value)}
              placeholder="Available for full-time work from July, open to remote/ hybrid roles."
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button type="button" className="btn btn-primary" onClick={handleGenerate}>
            Generate draft
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleLoadSample}>
            Load sample data
          </button>
          <button type="button" className="btn btn-danger" onClick={handleReset}>
            Reset
          </button>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-slate-900">3. Generated draft</h2>
          <div className="flex flex-wrap gap-2">
            {generated && (
              <>
                <button type="button" className="btn btn-secondary" onClick={() => handleCopy(generated.subject, "Subject line")}>
                  Copy subject
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => handleCopy(generated.body, "Body text")}>
                  Copy body
                </button>
                <button type="button" className="btn btn-primary" onClick={() => handleCopy(`${generated.subject}\n\n${generated.body}`, "Full draft")}>
                  Copy complete draft
                </button>
              </>
            )}
          </div>
        </div>

        <div className="mt-4 space-y-4">
          {generated && (
            <div>
              <label htmlFor="draft-subject" className="label">
                Subject line
              </label>
              <input
                id="draft-subject"
                className="input"
                value={generated.subject}
                onChange={(event) =>
                  setGenerated((current) =>
                    current ? { ...current, subject: event.target.value } : current
                  )
                }
              />
            </div>
          )}

          <div>
            <label htmlFor="draft-output" className="label">
              {generatorType === "cover-letter" ? "Cover letter body" : "Email body"}
            </label>
            <textarea
              id="draft-output"
              className="textarea mt-1 min-h-[22rem] font-mono text-sm"
              value={generated?.body ?? ""}
              onChange={(event) =>
                setGenerated((current) =>
                  current ? { ...current, body: event.target.value } : current
                )
              }
              placeholder="Generate a draft to create your letter or email."
            />
          </div>
        </div>
      </section>
    </div>
  );
}
