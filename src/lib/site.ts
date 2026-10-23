/**
 * Central site configuration.
 *
 * IMPORTANT: keep one single source of truth for the site URL so that
 * canonical tags, the sitemap, robots.txt and Open Graph metadata always
 * point to the same domain. Set NEXT_PUBLIC_SITE_URL in your environment
 * when you deploy to your real domain.
 */
export const siteConfig = {
  name: "FirstJob Toolkit",
  shortName: "FJT",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://firstjobtoolkit.pages.dev",
  description:
    "Free tools and honest guides for students, freshers, and internship seekers. Build a resume, practice interview questions, write professional emails, and track job applications — no sign-up required.",
  email: "hello@firstjobtoolkit.in", // TODO: replace with your real contact address
  keywords: [
    "free resume builder for freshers",
    "BCA fresher resume format",
    "resume without experience",
    "HR interview questions for freshers",
    "JavaScript interview questions for beginners",
    "internship application email",
    "job application follow-up email",
    "job application tracker",
    "frontend developer interview preparation",
    "interview preparation for students",
  ],
} as const;

/** All public routes, used by the sitemap. Keep in sync with src/app. */
export const siteRoutes: { path: string; priority: number; changeFrequency: "always" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/tools", priority: 0.9, changeFrequency: "weekly" },
  { path: "/tools/resume-builder", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tools/interview-prep", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tools/cover-letter-generator", priority: 0.9, changeFrequency: "monthly" },
  { path: "/tools/job-tracker", priority: 0.9, changeFrequency: "monthly" },
  { path: "/interview", priority: 0.8, changeFrequency: "weekly" },
  { path: "/guides", priority: 0.8, changeFrequency: "weekly" },
  { path: "/resume/bca-fresher-resume", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resume/no-experience", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resume/project-descriptions", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resume/skills-for-freshers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/resume/mistakes-to-avoid", priority: 0.8, changeFrequency: "monthly" },
  { path: "/interview/hr-questions-freshers", priority: 0.8, changeFrequency: "monthly" },
  { path: "/interview/tell-me-about-yourself", priority: 0.8, changeFrequency: "monthly" },
  { path: "/interview/javascript", priority: 0.8, changeFrequency: "monthly" },
  { path: "/interview/frontend-prep", priority: 0.8, changeFrequency: "monthly" },
  { path: "/interview/internship-prep", priority: 0.8, changeFrequency: "monthly" },
  { path: "/emails/internship-application", priority: 0.8, changeFrequency: "monthly" },
  { path: "/emails/recruiter-outreach", priority: 0.8, changeFrequency: "monthly" },
  { path: "/emails/follow-up", priority: 0.8, changeFrequency: "monthly" },
  { path: "/emails/thank-you", priority: 0.8, changeFrequency: "monthly" },
  { path: "/about", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.5, changeFrequency: "monthly" },
  { path: "/privacy", priority: 0.3, changeFrequency: "monthly" },
  { path: "/terms", priority: 0.3, changeFrequency: "monthly" },
  { path: "/affiliate-disclosure", priority: 0.3, changeFrequency: "monthly" },
];
