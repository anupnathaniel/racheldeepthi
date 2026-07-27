import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs, CtaBand, JsonLd, SectionHeading } from "@/components/ui";
import { getProgram, programs } from "@/data/programs";
import { absoluteSiteUrl } from "@/data/site";

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  return {
    title: program.name,
    description: program.summary,
    alternates: { canonical: `/programs/${program.slug}` },
  };
}

export default async function ProgramDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: program.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteSiteUrl },
      { "@type": "ListItem", position: 2, name: "Programs", item: `${absoluteSiteUrl}/programs` },
      { "@type": "ListItem", position: 3, name: program.name, item: `${absoluteSiteUrl}/programs/${program.slug}` },
    ],
  };

  return (
    <>
      <JsonLd data={[faqSchema, breadcrumbSchema]} />
      <h1 className="sr-only">{program.name}</h1>
      <div className="container program-detail-shell">
        <Breadcrumbs items={[
          { href: "/", label: "Home" },
          { href: "/programs", label: "Programs" },
          { label: program.name },
        ]} />
        <div className="button-row detail-top-actions">
          <Link className="button" href={`/contact?area=${program.slug}`}>Discuss Your Needs</Link>
          <Link className="button button-secondary" href="/programs">View All Programs</Link>
        </div>
        <section className="detail-intro-grid">
          <div>
            <p className="eyebrow">Who this may support</p>
            <h2>Guidance shaped around the person</h2>
            <p>{program.audience}</p>
            <p className="practical-example"><strong>A practical example</strong>{program.practicalExample}</p>
          </div>
          <aside className="notice-card">
            <h2>Important</h2>
            <p>{program.disclaimer}</p>
          </aside>
        </section>
        <section className="detail-columns">
          <div>
            <SectionHeading eyebrow="Common concerns" title="What Brings People Here" />
            <ul className="feature-list">{program.concerns.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div>
            <SectionHeading eyebrow="Typical support" title="What the Program May Include" />
            <ul className="feature-list">{program.support.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </section>
        <section className="approach-panel">
          <SectionHeading eyebrow="Rachel’s approach" title="Practical, Collaborative and Sustainable">
            <p>Rachel begins by listening. Recommendations are then developed around the individual’s health information, goals, culture, food preferences and capacity for change. Guidance is reviewed over time and coordinated with appropriate medical advice where relevant.</p>
          </SectionHeading>
          <ol className="journey-list">
            {["Initial enquiry", "Comprehensive assessment", "Collaborative goals", "Personalized plan", "Progress reviews", "Maintenance support"].map((item, index) => (
              <li key={item}><span>{index + 1}</span><strong>{item}</strong></li>
            ))}
          </ol>
        </section>
        <section className="faq-section">
          <SectionHeading eyebrow="Frequently asked questions" title={`Questions About ${program.name}`} />
          <div className="faq-list">
            {program.faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="related-panel">
          <h2>Related videos</h2>
          <p>Video relationships will be added after source titles, languages, topics and embedding permissions are verified.</p>
          <Link className="text-link" href="/media#video-insights">Browse Media &amp; Insights</Link>
        </section>
      </div>
      <CtaBand title={`Discuss ${program.name}`} text="Start with a brief enquiry. Please do not send medical records or urgent health information through the website." />
    </>
  );
}
