import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Affiliate Disclosure",
  description:
    "Affiliate disclosure for FirstJob Toolkit: how we may earn commissions from clearly-labelled affiliate links, and our policy of only recommending genuinely relevant career resources.",
  alternates: { canonical: "/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <div className="bg-white">
      <Container className="max-w-3xl py-14">
        <h1 className="text-4xl font-bold tracking-tight text-slate-950">
          Affiliate Disclosure
        </h1>
        <p className="mt-4 text-sm text-slate-500">Last updated: October 23, 2026</p>
        <div className="guide mt-8">
          <p>
            <strong>Plain-language summary:</strong> some pages on this site may
            contain affiliate links. If you click one and sign up for a product
            or paid course, we may earn a commission at no extra cost to you.
            This never changes our recommendation — we only ever suggest
            resources we believe are genuinely useful for freshers and students.
          </p>

          <h2>What is an affiliate link?</h2>
          <p>
            An affiliate link is a special URL that tells a company (for
            example, an online course platform) that you came from our site. If
            you then make a purchase, the company pays us a small commission.
            <strong>You pay exactly the same price</strong> whether you use our
            link or go directly to the company&apos;s website — the commission comes
            from the company&apos;s marketing budget, not from you.
          </p>

          <h2>Our policy</h2>
          <ul>
            <li>
              <strong>Relevance first.</strong> We recommend a product only if it
              is genuinely relevant and useful to students, freshers, or
              internship seekers — never because of the commission size.
            </li>
            <li>
              <strong>Clear labelling.</strong> Pages containing affiliate links
              say so near the recommendation, and affiliate links are marked
              clearly.
            </li>
            <li>
              <strong>Free first.</strong> Everything on this site is free to use.
              A paid recommendation will never be required to use our tools or
              read our guides.
            </li>
            <li>
              <strong>Honest reviews.</strong> If we ever review a paid product
              and find it lacking, we will say so — or not recommend it at all.
            </li>
            <li>
              <strong>No invented claims.</strong> We do not invent commission
              rates, partnerships, or approval statuses. Any program mentioned
              on this site is one we have actually joined or verified.
            </li>
          </ul>

          <h2>Current status</h2>
          <p>
            As of the date above, FirstJob Toolkit is newly launched and is
            <strong> not yet enrolled in any affiliate program</strong>. This page
            exists so that the disclosure is in place <em>before</em> any
            affiliate link is added, and it will be updated if and when that
            changes.
          </p>
          <p>
            Categories we may consider in the future include: resume and career
            services, interview-preparation platforms, relevant online courses
            (especially beginner-friendly web development courses), and
            developer learning resources. For any program we join, we will
            verify current availability, eligibility (including for users in
            India), commission structure, payout threshold, and promotional
            rules before recommending it.
          </p>

          <h2>Advertising</h2>
          <p>
            If the site is approved for Google AdSense, ads may appear on some
            pages. Ads are never placed where they would obstruct the tools —
            you will always be able to edit, copy, download, and navigate
            without interference. See our <a href="/privacy">Privacy Policy</a>{" "}
            for how advertising cookies work.
          </p>

          <h2>Questions</h2>
          <p>
            If you have any question about this disclosure, please{" "}
            <a href="/contact">contact us</a>.
          </p>
        </div>
      </Container>
    </div>
  );
}
