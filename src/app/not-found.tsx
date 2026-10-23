import Link from "next/link";
import Container from "@/components/Container";

export default function NotFound() {
  return (
    <div className="bg-white">
      <Container className="max-w-2xl py-24 text-center">
        <p className="text-7xl font-bold tracking-tight text-brand-200">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
          This page doesn&apos;t exist
        </h1>
        <p className="mt-4 text-lg text-slate-600">
          The link may be broken, or the page may have moved. The tools and
          guides below are a good place to start.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            Go to the home page
          </Link>
          <Link href="/tools" className="btn btn-secondary">
            Browse all tools
          </Link>
          <Link href="/guides" className="btn btn-secondary">
            Read the guides
          </Link>
        </div>
      </Container>
    </div>
  );
}
