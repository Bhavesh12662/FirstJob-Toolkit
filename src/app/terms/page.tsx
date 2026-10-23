import type { Metadata } from "next";
import Container from "@/components/Container";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Terms of Use for FirstJob Toolkit: free tools and guides provided as-is, with no warranties. Use the tools responsibly and never submit false information on real job applications.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="bg-white">
      <Container className="max-w-3xl py-14">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Terms of Use
        </h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: October 23, 2026</p>
        <div className="guide mt-8">
          <p>
            By using {siteConfig.name} (&ldquo;the site&rdquo;), you agree to these
            Terms of Use. If you don&apos;t agree with them, please don&apos;t use the
            site.
          </p>

          <h2>1. What the site provides</h2>
          <p>
            The site provides free, browser-based tools (a resume builder,
            interview question library, email generator, and job application
            tracker) and informational guides about resumes, interviews, and job
            applications. The site is provided for personal, non-commercial use.
          </p>

          <h2>2. No warranty — &ldquo;as is&rdquo;</h2>
          <p>
            The site and its content are provided <strong>as is</strong>, without
            warranties of any kind, express or implied. We do not guarantee that
            the site will be error-free, always available, or that the information
            in our guides will produce any particular result — including a job,
            interview, or admission. Career outcomes depend on many factors
            outside our control.
          </p>

          <h2>3. Use the tools honestly</h2>
          <p>
            The tools help you organise and phrase <em>your own</em> information.
            You must not use them to fabricate qualifications, experience,
            achievements, or identity on a real application. Submitting false
            information to an employer can have serious consequences for you.
            Our guides explain how to present real experience strongly and
            honestly.
          </p>

          <h2>4. Your data is your responsibility</h2>
          <p>
            Tool data is stored only in your browser&apos;s local storage. We cannot
            recover it if you clear your browser data, and we cannot transfer it
            between devices. For anything important, keep your own copy (for
            example, the downloaded PDF of your resume or the exported CSV of
            your applications).
          </p>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use the site for any unlawful purpose.</li>
            <li>
              Attempt to disrupt, overload, or gain unauthorised access to the
              site or its hosting.
            </li>
            <li>
              Scrape the site at scale or republish its content as your own
              without permission.
            </li>
            <li>
              Use the site to send spam or misleading communications to
              recruiters or employers.
            </li>
          </ul>

          <h2>6. Intellectual property</h2>
          <p>
            The site&apos;s design, code, and original guide content belong to{" "}
            {siteConfig.name}. You may link to our pages and quote brief excerpts
            with attribution. You may not copy large portions of our content or
            present it as your own.
          </p>

          <h2>7. Third-party links and ads</h2>
          <p>
            The site may contain links to third-party websites and, in the
            future, advertisements. We are not responsible for the content,
            products, or practices of third parties. See our{" "}
            <a href="/affiliate-disclosure">Affiliate Disclosure</a> for how we
            handle commercial relationships.
          </p>

          <h2>8. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, {siteConfig.name} and its
            creators are not liable for any indirect, incidental, or
            consequential damages arising from your use of the site — including
            lost data, missed opportunities, or decisions made based on our
            content.
          </p>

          <h2>9. Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The &ldquo;last updated&rdquo;{" "}
            date at the top shows the current version. Continued use of the site
            after a change means you accept the updated terms.
          </p>

          <h2>10. Contact</h2>
          <p>
            Questions about these terms? Email{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or visit
            the <a href="/contact">Contact page</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
