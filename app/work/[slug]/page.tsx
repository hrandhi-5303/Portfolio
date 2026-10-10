import Link from "next/link";
import { notFound } from "next/navigation";
import { studies } from "@/content/portfolio";
import Architecture from "@/components/Architecture";
import { Sketch } from "@/components/Illustration";
export function generateStaticParams() {
  return studies.map(({ slug }) => ({ slug }));
}
export function generateMetadata({ params }: { params: { slug: string } }) {
  const study = studies.find((s) => s.slug === params.slug);
  return {
    description: study?.summary,
    openGraph: {
      title: study?.fullTitle,
      description: study?.summary,
      type: "article",
    },
    title: study ? `${study.title} — Hemasree Randhi` : "Case study not found",
  };
}
export default function CaseStudy({ params }: { params: { slug: string } }) {
  const study = studies.find((s) => s.slug === params.slug);
  if (!study) notFound();
  const next = studies[(studies.indexOf(study) + 1) % studies.length];
  return (
    <article className="wrap case-study">
      <Link
        className="text-link"
        href={study.slug === "ai-data-intelligence" ? "/#research" : "/#work"}
      >
        ← Back to portfolio
      </Link>
      <header className="case-header">
        <div>
          <p className="eyebrow">{study.category}</p>
          <h1>{study.fullTitle}</h1>
          <p className="intro">{study.intro}</p>
          <span className="project-status">
            {study.status} · {study.role}
            {"period" in study ? ` · ${study.period}` : ""}
          </span>
        </div>
        <Sketch kind={study.kind} />
      </header>
      <Architecture kind={study.kind} />
      <div className="case-content">
        <section data-reveal>
          <p className="eyebrow">THE CONTEXT</p>
          <h2>A clear starting point.</h2>
          <p>{study.context}</p>
        </section>
        <section data-reveal>
          <p className="eyebrow">THE CHALLENGE</p>
          <h2>What needs to work.</h2>
          <p>{study.challenge}</p>
        </section>
        <section data-reveal>
          <p className="eyebrow">THE APPROACH</p>
          <h2>Inside the decisions.</h2>
          <div className="case-steps">
            {study.approach.map(([number, title, body]) => (
              <div key={number}>
                <span className="handwritten">{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section data-reveal>
          <p className="eyebrow">THE TOOLKIT</p>
          <div className="tags">
            {study.stack.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </section>
        <section data-reveal>
          <p className="eyebrow">OUTCOMES & VALIDATION</p>
          <h2>Evidence over assumptions.</h2>
          <p>{study.outcome}</p>
        </section>
        <blockquote data-reveal>{study.lesson}</blockquote>
      </div>
      <Link className="next-study" href={`/work/${next.slug}`}>
        <span className="eyebrow">NEXT CASE STUDY</span>
        <span>{next.title} ↗</span>
      </Link>
    </article>
  );
}
