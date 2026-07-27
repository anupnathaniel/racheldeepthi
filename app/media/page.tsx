import type { Metadata } from "next";
import { Breadcrumbs, EditorialImage, ReviewBadge, SectionHeading } from "@/components/ui";
import { VideoLibrary } from "@/components/videos/video-library";
import { mediaArticles } from "@/data/media";
import { recognitions, speakingEngagements } from "@/data/recognitions";
import { videos } from "@/data/videos";

export const metadata: Metadata = {
  title: "Media & Insights",
  description:
    "Watch Rachel Deepthi’s nutrition conversations and explore selected articles, professional profiles, speaking engagements and recognition.",
  alternates: { canonical: "/media" },
};

export default function MediaPage() {
  return (
    <>
      <h1 className="sr-only">Media &amp; Insights</h1>

      <div className="container media-page-shell">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: "Media & Insights" }]} />
      </div>

      <section className="section media-video-section" id="video-insights">
        <div className="container">
          <SectionHeading eyebrow="Video appearances" title="Nutrition Conversations and Media Features" />
          <VideoLibrary videos={videos} />
        </div>
      </section>

      <section className="section press-section" id="articles">
        <div className="container">
          <SectionHeading eyebrow="Articles and press" title="Read Rachel’s Published Contributions">
            <p>Open the original publication to read each article, newsletter contribution or professional feature.</p>
          </SectionHeading>
          <div className="press-grid">
            {mediaArticles.map((article) => (
              <a
                className="press-card"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                key={article.url}
              >
                <EditorialImage
                  src={article.thumbnail.src}
                  alt={article.thumbnail.alt}
                  className="press-thumbnail"
                />
                <div className="press-card-body">
                  <p className="card-kicker">{article.publication} · {article.year}</p>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span className="press-card-link">
                    {article.format === "Newsletter PDF" ? "Open PDF" : "Read source"}
                    <span aria-hidden="true"> ↗</span>
                    <span className="sr-only"> (opens an external website in a new tab)</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section recognition-summary" id="recognition">
        <div className="container">
          <SectionHeading eyebrow="Professional milestones" title="Recognition and Speaking">
            <p>A concise record of supplied awards and speaking engagements. Third-party award and event evidence remains under review.</p>
          </SectionHeading>
          <div className="recognition-summary-grid">
            {recognitions.map((item) => (
              <article className="recognition-summary-card" key={item.title}>
                <ReviewBadge />
                <p className="card-kicker">{item.year} · {item.organisation}</p>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
            {speakingEngagements.map((item) => (
              <article className="recognition-summary-card" key={item.title}>
                <ReviewBadge>Event evidence required</ReviewBadge>
                <p className="card-kicker">{item.year} · Speaking engagement</p>
                <h3>{item.title}</h3>
                <p>{item.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container notice-card unified-media-notice">
        <h2>Third-party content</h2>
        <p>Videos remain with their original publishers. Article links open the original publication, where availability and usage terms are controlled by that publisher.</p>
      </section>
    </>
  );
}
