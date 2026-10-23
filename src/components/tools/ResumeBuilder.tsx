"use client";

import { useEffect, useState, type ReactNode } from "react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type PersonalInfo = {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
};

type EducationEntry = {
  id: string;
  school: string;
  degree: string;
  field: string;
  start: string;
  end: string;
  grade: string;
  details: string;
};

type ProjectEntry = {
  id: string;
  title: string;
  link: string;
  tech: string;
  bullets: string; // one bullet point per line
};

type ExperienceEntry = {
  id: string;
  company: string;
  role: string;
  start: string;
  end: string;
  bullets: string; // one bullet point per line
};

type ResumeData = {
  personal: PersonalInfo;
  summary: string;
  education: EducationEntry[];
  skills: string[];
  projects: ProjectEntry[];
  experience: ExperienceEntry[];
  certifications: string[];
  achievements: string[];
  languages: string[];
};

type TemplateKey = "classic" | "modern";

const STORAGE_KEY = "fjt.resume.v1";

const uid = () => Math.random().toString(36).slice(2, 10);

const blankEducation = (): EducationEntry => ({
  id: uid(),
  school: "",
  degree: "",
  field: "",
  start: "",
  end: "",
  grade: "",
  details: "",
});

const blankProject = (): ProjectEntry => ({
  id: uid(),
  title: "",
  link: "",
  tech: "",
  bullets: "",
});

const blankExperience = (): ExperienceEntry => ({
  id: uid(),
  company: "",
  role: "",
  start: "",
  end: "",
  bullets: "",
});

const emptyData = (): ResumeData => ({
  personal: {
    fullName: "",
    jobTitle: "",
    email: "",
    phone: "",
    location: "",
    linkedin: "",
    website: "",
  },
  summary: "",
  education: [blankEducation()],
  skills: [],
  projects: [blankProject()],
  experience: [],
  certifications: [],
  achievements: [],
  languages: [],
});

/** Realistic sample so users can see how a finished fresher resume looks. */
const sampleData = (): ResumeData => ({
  personal: {
    fullName: "Ananya Sharma",
    jobTitle: "BCA Graduate · Aspiring Frontend Developer",
    email: "ananya.sharma@example.com",
    phone: "+91 98765 43210",
    location: "Pune, Maharashtra, India",
    linkedin: "linkedin.com/in/ananyasharma",
    website: "ananyasharma.dev",
  },
  summary:
    "BCA graduate with hands-on experience building responsive web interfaces using HTML, CSS, and JavaScript. Completed four academic projects, including a library management system and a weather dashboard. Quick learner who enjoys turning designs into clean, accessible interfaces. Looking for an entry-level frontend role where I can contribute and grow.",
  education: [
    {
      id: uid(),
      school: "Savitribai Phule Pune University (affiliated college), Pune",
      degree: "Bachelor of Computer Applications (BCA)",
      field: "",
      start: "2022",
      end: "2025",
      grade: "CGPA 8.4 / 10",
      details:
        "Relevant coursework: Data Structures, DBMS, Web Development, Operating Systems, Computer Networks.",
    },
    {
      id: uid(),
      school: "Maharashtra State Board (HSC), Pune",
      degree: "Higher Secondary (Science)",
      field: "",
      start: "2020",
      end: "2022",
      grade: "82%",
      details: "",
    },
  ],
  skills: [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "MySQL",
    "Responsive Design",
  ],
  projects: [
    {
      id: uid(),
      title: "Library Management System",
      link: "github.com/ananyasharma/library-system",
      tech: "HTML, CSS, JavaScript, PHP, MySQL",
      bullets:
        "Built a web app for issuing and returning books with separate logins for students and librarians.\nUsed SQL joins to generate overdue reports, cutting manual register work by about 70%.\nDesigned a mobile-friendly interface and tested it on low-end Android devices.",
    },
    {
      id: uid(),
      title: "Weather Dashboard",
      link: "github.com/ananyasharma/weather-dashboard",
      tech: "React, REST API, Tailwind CSS",
      bullets:
        "Created a React app showing a 5-day forecast for any city using the OpenWeather API.\nAdded loading, error, and empty states so the UI stays usable on slow networks.",
    },
  ],
  experience: [
    {
      id: uid(),
      company: "TechStart Solutions, Pune (summer internship)",
      role: "Web Development Intern",
      start: "Jun 2024",
      end: "Aug 2024",
      bullets:
        "Redesigned the company landing page with responsive Tailwind CSS, improving mobile load time by about 35%.\nFixed 12+ UI bugs and built reusable components used across three internal pages.",
    },
  ],
  certifications: [
    "Responsive Web Design — freeCodeCamp (2024)",
    "JavaScript Algorithms and Data Structures — freeCodeCamp (2024)",
  ],
  achievements: [
    "Won 2nd place in the inter-college project exhibition (2024) for the Library Management System.",
    "Volunteer, college coding club — organised a 40-student HTML/CSS workshop.",
  ],
  languages: ["English (fluent)", "Hindi (fluent)", "Marathi (conversational)"],
});

/* ------------------------------------------------------------------ */
/* Small reusable editor pieces                                        */
/* ------------------------------------------------------------------ */

function ChipList({
  label,
  items,
  input,
  onInputChange,
  onAdd,
  onRemove,
  placeholder,
  hint,
}: {
  label: string;
  items: string[];
  input: string;
  onInputChange: (value: string) => void;
  onAdd: () => void;
  onRemove: (item: string) => void;
  placeholder: string;
  hint?: string;
}) {
  return (
    <fieldset>
      <legend className="label">{label}</legend>
      {items.length > 0 && (
        <ul className="flex flex-wrap gap-2" aria-label={`${label} list`}>
          {items.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1 rounded-full bg-brand-50 px-3 py-1 text-sm font-medium text-brand-800"
            >
              {item}
              <button
                type="button"
                onClick={() => onRemove(item)}
                aria-label={`Remove ${item}`}
                className="ml-1 rounded-full px-1 text-brand-400 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-brand-500"
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-2 flex gap-2">
        <input
          className="input"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              onAdd();
            }
          }}
          placeholder={placeholder}
          aria-label={`Add ${label.toLowerCase()}`}
        />
        <button type="button" className="btn btn-ghost shrink-0" onClick={onAdd}>
          Add
        </button>
      </div>
      {hint && <p className="hint">{hint}</p>}
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/* Resume preview (two A4 templates)                                   */
/* ------------------------------------------------------------------ */

function splitLines(text: string): string[] {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function ResumePreview({
  data,
  template,
}: {
  data: ResumeData;
  template: TemplateKey;
}) {
  const { personal, summary, education, skills, projects, experience, certifications, achievements, languages } =
    data;

  const contactParts = [
    personal.location,
    personal.phone,
    personal.email,
    personal.linkedin,
    personal.website,
  ].filter((part) => part.trim().length > 0);

  const visibleEducation = education.filter(
    (e) => e.school.trim() || e.degree.trim() || e.details.trim()
  );
  const visibleProjects = projects.filter((p) => p.title.trim() || p.bullets.trim());
  const visibleExperience = experience.filter(
    (e) => e.company.trim() || e.role.trim() || e.bullets.trim()
  );

  const Section = ({
    title,
    children,
    dark = false,
  }: {
    title: string;
    children: ReactNode;
    dark?: boolean;
  }) => (
    <section className="mt-4">
      <h3
        className={`border-b pb-1 text-xs font-bold uppercase tracking-[0.12em] ${
          dark
            ? "border-slate-600 text-brand-300"
            : "border-slate-800 text-slate-900"
        }`}
      >
        {title}
      </h3>
      <div className="mt-2">{children}</div>
    </section>
  );

  const ProjectList = () => (
    <div className="space-y-2.5">
      {visibleProjects.map((p) => (
        <div key={p.id} className="break-inside-avoid">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-semibold">{p.title || "Project Title"}</p>
            {p.link.trim() && (
              <p className="shrink-0 text-[9pt] text-brand-700">{p.link}</p>
            )}
          </div>
          {p.tech.trim() && <p className="text-[9pt] italic text-slate-600">{p.tech}</p>}
          {splitLines(p.bullets).length > 0 && (
            <ul className="mt-1 list-disc pl-4">
              {splitLines(p.bullets).map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const ExperienceList = () => (
    <div className="space-y-2.5">
      {visibleExperience.map((e) => (
        <div key={e.id} className="break-inside-avoid">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-semibold">{e.role || "Your Role"}</p>
            <p className="shrink-0 text-[9pt] text-slate-600">
              {[e.start, e.end].filter(Boolean).join(" – ")}
            </p>
          </div>
          <p className="italic">{e.company || "Company / Organisation"}</p>
          {splitLines(e.bullets).length > 0 && (
            <ul className="mt-1 list-disc pl-4">
              {splitLines(e.bullets).map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );

  const EducationList = () => (
    <div className="space-y-2.5">
      {visibleEducation.map((e) => (
        <div key={e.id} className="break-inside-avoid">
          <div className="flex items-baseline justify-between gap-4">
            <p className="font-semibold">{e.school || "School / University"}</p>
            <p className="shrink-0 text-[9pt] text-slate-600">
              {[e.start, e.end].filter(Boolean).join(" – ")}
            </p>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <p className="italic">
              {[e.degree, e.field].filter(Boolean).join(", ")}
            </p>
            {e.grade.trim() && <p className="shrink-0 text-[9pt] text-slate-600">{e.grade}</p>}
          </div>
          {e.details.trim() && <p className="mt-0.5 text-[9pt] text-slate-600">{e.details}</p>}
        </div>
      ))}
    </div>
  );

  /* ---------------- Classic template ---------------- */
  if (template === "classic") {
    return (
      <div className="resume-sheet bg-white text-slate-900 shadow-lg ring-1 ring-slate-200">
        <div className="min-h-[296mm] p-[14mm] text-[10pt] leading-[1.45]">
          <header className="border-b-2 border-slate-900 pb-3 text-center">
            <h2 className="text-[20pt] font-bold uppercase tracking-[0.06em]">
              {personal.fullName.trim() || "Your Full Name"}
            </h2>
            {personal.jobTitle.trim() && (
              <p className="mt-1 text-[11pt] font-medium text-slate-700">
                {personal.jobTitle}
              </p>
            )}
            {contactParts.length > 0 && (
              <p className="mt-1 text-[9pt] text-slate-600">
                {contactParts.join("  ·  ")}
              </p>
            )}
          </header>
          {summary.trim() && (
            <Section title="Profile">
              <p className="text-justify">{summary}</p>
            </Section>
          )}
          {skills.length > 0 && (
            <Section title="Skills">
              <p>{skills.join(" · ")}</p>
            </Section>
          )}
          {visibleEducation.length > 0 && (
            <Section title="Education">
              <EducationList />
            </Section>
          )}
          {visibleProjects.length > 0 && (
            <Section title="Projects">
              <ProjectList />
            </Section>
          )}
          {visibleExperience.length > 0 && (
            <Section title="Experience">
              <ExperienceList />
            </Section>
          )}
          {certifications.length > 0 && (
            <Section title="Certifications">
              <ul className="list-disc pl-4">
                {certifications.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </Section>
          )}
          {achievements.length > 0 && (
            <Section title="Achievements">
              <ul className="list-disc pl-4">
                {achievements.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </Section>
          )}
          {languages.length > 0 && (
            <Section title="Languages">
              <p>{languages.join(" · ")}</p>
            </Section>
          )}
        </div>
      </div>
    );
  }

  /* ---------------- Modern template ---------------- */
  return (
    <div className="resume-sheet flex bg-white text-slate-900 shadow-lg ring-1 ring-slate-200">
      <aside className="min-h-[296mm] w-[34%] shrink-0 bg-slate-900 p-[12mm] text-[9pt] leading-[1.5] text-slate-200">
        <h2 className="text-[16pt] font-bold uppercase tracking-[0.05em] text-white">
          {personal.fullName.trim() || "Your Name"}
        </h2>
        {personal.jobTitle.trim() && (
          <p className="mt-1 font-medium text-brand-300">{personal.jobTitle}</p>
        )}
        {contactParts.length > 0 && (
          <Section title="Contact" dark>
            <ul className="space-y-1.5">
              {contactParts.map((c) => (
                <li key={c} className="break-all">
                  {c}
                </li>
              ))}
            </ul>
          </Section>
        )}
        {skills.length > 0 && (
          <Section title="Skills" dark>
            <ul className="list-disc pl-4">
              {skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </Section>
        )}
        {languages.length > 0 && (
          <Section title="Languages" dark>
            <ul className="list-disc pl-4">
              {languages.map((l) => (
                <li key={l}>{l}</li>
              ))}
            </ul>
          </Section>
        )}
        {certifications.length > 0 && (
          <Section title="Certifications" dark>
            <ul className="list-disc pl-4">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Section>
        )}
      </aside>
      <main className="min-h-[296mm] flex-1 p-[12mm] text-[10pt] leading-[1.45]">
        {summary.trim() && (
          <Section title="Profile">
            <p className="text-justify">{summary}</p>
          </Section>
        )}
        {visibleEducation.length > 0 && (
          <Section title="Education">
            <EducationList />
          </Section>
        )}
        {visibleProjects.length > 0 && (
          <Section title="Projects">
            <ProjectList />
          </Section>
        )}
        {visibleExperience.length > 0 && (
          <Section title="Experience">
            <ExperienceList />
          </Section>
        )}
        {achievements.length > 0 && (
          <Section title="Achievements">
            <ul className="list-disc pl-4">
              {achievements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </Section>
        )}
      </main>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main component                                                      */
/* ------------------------------------------------------------------ */

export default function ResumeBuilder() {
  const [data, setData] = useState<ResumeData>(() => emptyData());
  const [hydrated, setHydrated] = useState(false);
  const [template, setTemplate] = useState<TemplateKey>("classic");
  const [errors, setErrors] = useState<string[]>([]);
  const [mobileTab, setMobileTab] = useState<"edit" | "preview">("edit");

  const [skillInput, setSkillInput] = useState("");
  const [certInput, setCertInput] = useState("");
  const [achievementInput, setAchievementInput] = useState("");
  const [languageInput, setLanguageInput] = useState("");

  /* Load saved data once, on the client only (localStorage is not
     available during server rendering, and reading it during render
     would cause a hydration mismatch). */
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<ResumeData>;
        setData({ ...emptyData(), ...parsed });
      }
    } catch {
      // Corrupted or unavailable storage — start fresh, the tool still works.
    }
    setHydrated(true);
  }, []);

  /* Persist every change after hydration. */
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Storage full or blocked — the resume keeps working in memory.
    }
  }, [data, hydrated]);

  /* ---------- update helpers ---------- */
  const updatePersonal = (field: keyof PersonalInfo, value: string) =>
    setData((d) => ({ ...d, personal: { ...d.personal, [field]: value } }));

  const updateEducation = (
    id: string,
    field: keyof Omit<EducationEntry, "id">,
    value: string
  ) =>
    setData((d) => ({
      ...d,
      education: d.education.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));

  const updateProject = (
    id: string,
    field: keyof Omit<ProjectEntry, "id">,
    value: string
  ) =>
    setData((d) => ({
      ...d,
      projects: d.projects.map((p) => (p.id === id ? { ...p, [field]: value } : p)),
    }));

  const updateExperience = (
    id: string,
    field: keyof Omit<ExperienceEntry, "id">,
    value: string
  ) =>
    setData((d) => ({
      ...d,
      experience: d.experience.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
    }));

  const addChip =
    (
      key: "skills" | "certifications" | "achievements" | "languages",
      input: string,
      setInput: (v: string) => void
    )=>
    () => {
      const value = input.trim();
      if (!value) return;
      setData((d) => {
        const list = d[key];
        if (list.some((item) => item.toLowerCase() === value.toLowerCase())) {
          return d;
        }
        return { ...d, [key]: [...list, value] };
      });
      setInput("");
    };

  const removeChip =
    (key: "skills" | "certifications" | "achievements" | "languages") =>
    (item: string) =>
      setData((d) => ({ ...d, [key]: d[key].filter((i) => i !== item) }));

  /* ---------- validation + print/PDF ---------- */
  const validate = (): string[] => {
    const errs: string[] = [];
    if (!data.personal.fullName.trim()) errs.push("Please enter your full name.");
    if (
      data.personal.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.personal.email.trim())
    ) {
      errs.push("Your email address looks invalid.");
    }
    if (
      data.personal.phone.trim() &&
      data.personal.phone.replace(/[^\d]/g, "").length < 7
    ) {
      errs.push("Your phone number looks too short.");
    }
    const hasEducation = data.education.some((e) => e.school.trim() || e.degree.trim());
    const hasProject = data.projects.some((p) => p.title.trim());
    const hasExperience = data.experience.some((e) => e.company.trim() || e.role.trim());
    if (!hasEducation && !hasProject && !hasExperience && data.skills.length === 0) {
      errs.push(
        "Add at least one education entry, project, experience, or skill so your resume is not empty."
      );
    }
    return errs;
  };

  const handlePrint = () => {
    const errs = validate();
    setErrors(errs);
    if (errs.length > 0) {
      document
        .getElementById("resume-builder-errors")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }
    // The .resume-printing class activates the @media print rules in
    // globals.css so that ONLY the A4 resume sheet is printed.
    document.body.classList.add("resume-printing");
    window.print();
    window.setTimeout(() => document.body.classList.remove("resume-printing"), 1500);
  };

  const handleReset = () => {
    setData(emptyData());
    setErrors([]);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
  };

  const templateButton = (key: TemplateKey, label: string) => (
    <button
      type="button"
      aria-pressed={template === key}
      onClick={() => setTemplate(key)}
      className={`rounded-md px-4 py-1.5 text-sm font-semibold transition ${
        template === key
          ? "bg-brand-600 text-white"
          : "text-slate-600 hover:bg-slate-100"
      }`}
    >
      {label}
    </button>
  );

  return (
    <div className="space-y-6">
      {/* Privacy note */}
      <div className="rounded-xl border border-brand-100 bg-brand-50/70 p-4 text-sm leading-relaxed text-slate-700">
        <strong className="text-slate-900">Privacy note:</strong> everything you
        type here is stored <em>only in this browser</em> (localStorage) so your
        work survives a refresh. Nothing is uploaded to any server. Press{" "}
        <strong>Clear</strong> to delete it, or clear your browser&apos;s site data
        at any time. Text you enter is rendered as plain text — it is never
        executed as code.
      </div>

      {/* Validation errors */}
      {errors.length > 0 && (
        <div
          id="resume-builder-errors"
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4"
        >
          <p className="font-semibold text-red-800">
            Please fix these before downloading:
          </p>
          <ul className="mt-1 list-disc pl-5 text-sm text-red-700">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <div
          className="inline-flex rounded-lg border border-slate-200 bg-white p-1"
          role="group"
          aria-label="Resume template"
        >
          {templateButton("classic", "Classic")}
          {templateButton("modern", "Modern")}
        </div>
        <button type="button" onClick={handlePrint} className="btn btn-primary">
          Download as PDF
        </button>
        <button
          type="button"
          onClick={() => {
            setData(sampleData());
            setErrors([]);
          }}
          className="btn btn-secondary"
        >
          Load sample data
        </button>
        <button type="button" onClick={handleReset} className="btn btn-danger">
          Clear
        </button>
      </div>

      {/* Mobile edit/preview toggle */}
      <div className="flex gap-2 lg:hidden" role="group" aria-label="Edit or preview">
        <button
          type="button"
          aria-pressed={mobileTab === "edit"}
          onClick={() => setMobileTab("edit")}
          className={`btn ${mobileTab === "edit" ? "btn-primary" : "btn-secondary"} flex-1`}
        >
          Edit
        </button>
        <button
          type="button"
          aria-pressed={mobileTab === "preview"}
          onClick={() => setMobileTab("preview")}
          className={`btn ${mobileTab === "preview" ? "btn-primary" : "btn-secondary"} flex-1`}
        >
          Preview
        </button>
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-2">
        {/* ------------------------- FORM ------------------------- */}
        <div
          className={`resume-form space-y-6 ${
            mobileTab === "preview" ? "hidden" : ""
          } lg:block`}
        >
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">Personal details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <label className="label" htmlFor="rb-name">Full name *</label>
                <input
                  id="rb-name"
                  className="input"
                  value={data.personal.fullName}
                  onChange={(e) => updatePersonal("fullName", e.target.value)}
                  placeholder="Ananya Sharma"
                  autoComplete="name"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="label" htmlFor="rb-title">
                  Headline / target role
                </label>
                <input
                  id="rb-title"
                  className="input"
                  value={data.personal.jobTitle}
                  onChange={(e) => updatePersonal("jobTitle", e.target.value)}
                  placeholder="BCA Graduate · Aspiring Frontend Developer"
                />
              </div>
              <div>
                <label className="label" htmlFor="rb-email">Email</label>
                <input
                  id="rb-email"
                  type="email"
                  className="input"
                  value={data.personal.email}
                  onChange={(e) => updatePersonal("email", e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="label" htmlFor="rb-phone">Phone</label>
                <input
                  id="rb-phone"
                  type="tel"
                  className="input"
                  value={data.personal.phone}
                  onChange={(e) => updatePersonal("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                />
              </div>
              <div>
                <label className="label" htmlFor="rb-location">Location</label>
                <input
                  id="rb-location"
                  className="input"
                  value={data.personal.location}
                  onChange={(e) => updatePersonal("location", e.target.value)}
                  placeholder="Pune, Maharashtra, India"
                  autoComplete="address-level2"
                />
              </div>
              <div>
                <label className="label" htmlFor="rb-linkedin">LinkedIn URL</label>
                <input
                  id="rb-linkedin"
                  className="input"
                  value={data.personal.linkedin}
                  onChange={(e) => updatePersonal("linkedin", e.target.value)}
                  placeholder="linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="label" htmlFor="rb-website">
                  Portfolio / website
                </label>
                <input
                  id="rb-website"
                  className="input"
                  value={data.personal.website}
                  onChange={(e) => updatePersonal("website", e.target.value)}
                  placeholder="yourname.dev"
                />
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-lg font-bold text-slate-900">
              Professional summary
            </h2>
            <div className="mt-4">
              <label className="label" htmlFor="rb-summary">
                2–3 sentences about you
              </label>
              <textarea
                id="rb-summary"
                className="textarea"
                value={data.summary}
                onChange={(e) => setData((d) => ({ ...d, summary: e.target.value }))}
                placeholder="BCA graduate skilled in HTML, CSS, and JavaScript. Built four academic projects and completed a summer internship. Looking for an entry-level frontend role where I can contribute and grow."
              />
              <p className="hint">
                Keep it honest and specific. Never claim skills you cannot
                demonstrate in an interview.
              </p>
            </div>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-slate-900">Education</h2>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  setData((d) => ({ ...d, education: [...d.education, blankEducation()] }))
                }
              >
                + Add education
              </button>
            </div>
            {data.education.map((edu, index) => (
              <div key={edu.id} className="mt-4 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-800">Education {index + 1}</p>
                  {data.education.length > 1 && (
                    <button
                      type="button"
                      className="text-sm font-medium text-red-600 hover:underline"
                      onClick={() =>
                        setData((d) => ({
                          ...d,
                          education: d.education.filter((e) => e.id !== edu.id),
                        }))
                      }
                      aria-label={`Remove education ${index + 1}`}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="label" htmlFor={`rb-edu-school-${edu.id}`}>
                      School / university
                    </label>
                    <input
                      id={`rb-edu-school-${edu.id}`}
                      className="input"
                      value={edu.school}
                      onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                      placeholder="Savitribai Phule Pune University (affiliated college)"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-edu-degree-${edu.id}`}>
                      Degree
                    </label>
                    <input
                      id={`rb-edu-degree-${edu.id}`}
                      className="input"
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                      placeholder="Bachelor of Computer Applications (BCA)"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-edu-field-${edu.id}`}>
                      Field of study
                    </label>
                    <input
                      id={`rb-edu-field-${edu.id}`}
                      className="input"
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                      placeholder="Computer Applications"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-edu-start-${edu.id}`}>
                      Start (year)
                    </label>
                    <input
                      id={`rb-edu-start-${edu.id}`}
                      className="input"
                      value={edu.start}
                      onChange={(e) => updateEducation(edu.id, "start", e.target.value)}
                      placeholder="2022"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-edu-end-${edu.id}`}>
                      End (year)
                    </label>
                    <input
                      id={`rb-edu-end-${edu.id}`}
                      className="input"
                      value={edu.end}
                      onChange={(e) => updateEducation(edu.id, "end", e.target.value)}
                      placeholder="2025"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-edu-grade-${edu.id}`}>
                      Grade / CGPA
                    </label>
                    <input
                      id={`rb-edu-grade-${edu.id}`}
                      className="input"
                      value={edu.grade}
                      onChange={(e) => updateEducation(edu.id, "grade", e.target.value)}
                      placeholder="CGPA 8.4 / 10"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label" htmlFor={`rb-edu-details-${edu.id}`}>
                      Extra details (optional)
                    </label>
                    <input
                      id={`rb-edu-details-${edu.id}`}
                      className="input"
                      value={edu.details}
                      onChange={(e) => updateEducation(edu.id, "details", e.target.value)}
                      placeholder="Relevant coursework, activities, backlogs (if any)"
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ChipList
              label="Skills"
              items={data.skills}
              input={skillInput}
              onInputChange={setSkillInput}
              onAdd={addChip("skills", skillInput, setSkillInput)}
              onRemove={removeChip("skills")}
              placeholder="HTML5"
              hint="Add skills you can actually explain in an interview. Press Enter or Add. Quality beats quantity."
            />
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-slate-900">Projects</h2>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  setData((d) => ({ ...d, projects: [...d.projects, blankProject()] }))
                }
              >
                + Add project
              </button>
            </div>
            <p className="hint">
              Academic and personal projects count. Describe what it does, your
              role, the tech, and the result.
            </p>
            {data.projects.map((project, index) => (
              <div key={project.id} className="mt-4 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-800">Project {index + 1}</p>
                  {data.projects.length > 1 && (
                    <button
                      type="button"
                      className="text-sm font-medium text-red-600 hover:underline"
                      onClick={() =>
                        setData((d) => ({
                          ...d,
                          projects: d.projects.filter((p) => p.id !== project.id),
                        }))
                      }
                      aria-label={`Remove project ${index + 1}`}
                    >
                      Remove
                    </button>
                  )}
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor={`rb-pr-title-${project.id}`}>
                      Project title
                    </label>
                    <input
                      id={`rb-pr-title-${project.id}`}
                      className="input"
                      value={project.title}
                      onChange={(e) => updateProject(project.id, "title", e.target.value)}
                      placeholder="Library Management System"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-pr-link-${project.id}`}>
                      Link (GitHub / live demo)
                    </label>
                    <input
                      id={`rb-pr-link-${project.id}`}
                      className="input"
                      value={project.link}
                      onChange={(e) => updateProject(project.id, "link", e.target.value)}
                      placeholder="github.com/you/project"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label" htmlFor={`rb-pr-tech-${project.id}`}>
                      Technologies
                    </label>
                    <input
                      id={`rb-pr-tech-${project.id}`}
                      className="input"
                      value={project.tech}
                      onChange={(e) => updateProject(project.id, "tech", e.target.value)}
                      placeholder="HTML, CSS, JavaScript, PHP, MySQL"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label" htmlFor={`rb-pr-bullets-${project.id}`}>
                      Bullet points (one per line)
                    </label>
                    <textarea
                      id={`rb-pr-bullets-${project.id}`}
                      className="textarea"
                      value={project.bullets}
                      onChange={(e) => updateProject(project.id, "bullets", e.target.value)}
                      placeholder={
                        "Built a web app for issuing and returning books with separate logins.\nUsed SQL joins to generate overdue reports, cutting manual work by ~70%."
                      }
                    />
                    <p className="hint">
                      Start each bullet with an action verb (Built, Designed,
                      Improved…). See our{" "}
                      <a
                        href="/resume/project-descriptions"
                        target="_blank"
                        className="text-brand-600 hover:underline"
                      >
                        project description guide
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-slate-900">
                Internship / work experience
              </h2>
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() =>
                  setData((d) => ({ ...d, experience: [...d.experience, blankExperience()] }))
                }
              >
                + Add experience
              </button>
            </div>
            {data.experience.length === 0 && (
              <p className="hint">
                No experience yet? That&apos;s completely fine for a fresher resume —
                leave this empty and focus on projects and skills.
              </p>
            )}
            {data.experience.map((exp, index) => (
              <div key={exp.id} className="mt-4 rounded-xl border border-slate-200 p-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-800">Experience {index + 1}</p>
                  <button
                    type="button"
                    className="text-sm font-medium text-red-600 hover:underline"
                    onClick={() =>
                      setData((d) => ({
                        ...d,
                        experience: d.experience.filter((e) => e.id !== exp.id),
                      }))
                    }
                    aria-label={`Remove experience ${index + 1}`}
                  >
                    Remove
                  </button>
                </div>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <div>
                    <label className="label" htmlFor={`rb-ex-role-${exp.id}`}>
                      Role
                    </label>
                    <input
                      id={`rb-ex-role-${exp.id}`}
                      className="input"
                      value={exp.role}
                      onChange={(e) => updateExperience(exp.id, "role", e.target.value)}
                      placeholder="Web Development Intern"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-ex-company-${exp.id}`}>
                      Company / organisation
                    </label>
                    <input
                      id={`rb-ex-company-${exp.id}`}
                      className="input"
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                      placeholder="TechStart Solutions, Pune"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-ex-start-${exp.id}`}>
                      Start
                    </label>
                    <input
                      id={`rb-ex-start-${exp.id}`}
                      className="input"
                      value={exp.start}
                      onChange={(e) => updateExperience(exp.id, "start", e.target.value)}
                      placeholder="Jun 2024"
                    />
                  </div>
                  <div>
                    <label className="label" htmlFor={`rb-ex-end-${exp.id}`}>
                      End
                    </label>
                    <input
                      id={`rb-ex-end-${exp.id}`}
                      className="input"
                      value={exp.end}
                      onChange={(e) => updateExperience(exp.id, "end", e.target.value)}
                      placeholder="Aug 2024 (or Present)"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="label" htmlFor={`rb-ex-bullets-${exp.id}`}>
                      Bullet points (one per line)
                    </label>
                    <textarea
                      id={`rb-ex-bullets-${exp.id}`}
                      className="textarea"
                      value={exp.bullets}
                      onChange={(e) => updateExperience(exp.id, "bullets", e.target.value)}
                      placeholder={
                        "Redesigned the landing page with responsive CSS, improving mobile load time by ~35%.\nFixed 12+ UI bugs and built reusable components."
                      }
                    />
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ChipList
              label="Certifications"
              items={data.certifications}
              input={certInput}
              onInputChange={setCertInput}
              onAdd={addChip("certifications", certInput, setCertInput)}
              onRemove={removeChip("certifications")}
              placeholder="Responsive Web Design — freeCodeCamp (2024)"
            />
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ChipList
              label="Achievements"
              items={data.achievements}
              input={achievementInput}
              onInputChange={setAchievementInput}
              onAdd={addChip("achievements", achievementInput, setAchievementInput)}
              onRemove={removeChip("achievements")}
              placeholder="Won 2nd place in the inter-college project exhibition (2024)"
            />
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <ChipList
              label="Languages"
              items={data.languages}
              input={languageInput}
              onInputChange={setLanguageInput}
              onAdd={addChip("languages", languageInput, setLanguageInput)}
              onRemove={removeChip("languages")}
              placeholder="English (fluent)"
            />
          </section>
        </div>

        {/* ------------------------- PREVIEW ------------------------- */}
        <div
          className={`resume-preview ${mobileTab === "edit" ? "hidden" : ""} lg:block`}
        >
          <div className="lg:sticky lg:top-24">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-lg font-bold text-slate-900">Live preview</h2>
              <span className="text-sm text-slate-500">
                {template === "classic" ? "Classic" : "Modern"} template · A4
              </span>
            </div>
            <div className="max-h-[75vh] overflow-y-auto rounded-xl border border-slate-200 bg-slate-200/70 p-3 lg:max-h-[calc(100vh-9rem)]">
              <ResumePreview data={data} template={template} />
            </div>
            <p className="mt-2 text-xs text-slate-500">
              Click <strong>Download as PDF</strong>, then in the print dialog
              choose <strong>&ldquo;Save as PDF&rdquo;</strong> as the destination and keep
              the A4 paper size.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
