import Link from "next/link";
import type { ReactNode } from "react";
import { siteConfig } from "@/lib/site";

export type Crumb = { label: string; href?: string };

type GuideLayoutProps = {
  title: string;
  description: string;
  category: string;
  updated: string;
  crumbs: Crumb[];
  children: ReactNode;
};

/**
 * Shared layout for long-form guide pages: breadcrumb (with BreadcrumbList
 * structured data), category badge, H1, description and styled content.
 */
export function GuideLayout({
  title,
  description,
  category,
  updated,
  crumbs,
  children,
}: GuideLayoutProps) {
  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: crumb.label,
        ...(crumb.href ? { item: `${siteConfig.url}${crumb.href}` } : {}),
      })),
    ],
  };

  return (
    <div className="bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="text-sm">
          <ol className="flex flex-wrap items-center gap-1 text-slate-500">
            <li>
              <Link href="/" className="hover:text-brand-600 hover:underline">
                Home
              </Link>
            </li>
            {crumbs.map((crumb) => (
              <li key={crumb.label} className="flex items-center gap-1">
                <span aria-hidden="true">/</span>
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="hover:text-brand-600 hover:underline"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="font-medium text-slate-700" aria-current="page">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <header className="mt-6">
          <span className="inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
            {category}
          </span>
          <h1 className="mt-4 text-3xl font-bold leading-tight text-slate-950 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg text-slate-600">{description}</p>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updated}</p>
        </header>

        <div className="guide mt-8">{children}</div>
      </div>
    </div>
  );
}

/** Styled sample/example block for guides. */
export function Example({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="example">
      <span className="example-label">{label}</span>
      <div>{children}</div>
    </div>
  );
}

/** Amber tip/warning box for guides. */
export function Callout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="callout">
      <p className="callout-title">{title}</p>
      <div>{children}</div>
    </div>
  );
}

/** Call-to-action box that links to one of the tools. */
export function ToolCta({
  href,
  cta,
  heading,
  children,
}: {
  href: string;
  cta: string;
  heading: string;
  children: ReactNode;
}) {
  return (
    <aside className="not-prose mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6">
      <h2 className="!mt-0 text-lg font-bold text-slate-900">{heading}</h2>
      <p className="mt-2 text-slate-600">{children}</p>
      <Link href={href} className="btn btn-primary mt-4">
        {cta}
      </Link>
    </aside>
  );
}

/**
 * FAQ accordion. Renders real <details>/<summary> elements (works without
 * JavaScript, keyboard accessible) and adds matching FAQPage structured
 * data so the markup and the schema always agree.
 */
export function FaqSection({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  return (
    <section className="faq" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <h2 id="faq-heading">Frequently asked questions</h2>
      {faqs.map((faq) => (
        <details key={faq.question}>
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </section>
  );
}
