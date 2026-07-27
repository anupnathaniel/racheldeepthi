import type { Metadata } from "next";
import Link from "next/link";
import { EditorialImage, ExternalLinkText, JsonLd, SectionHeading } from "@/components/ui";
import { assetPath, site, absoluteSiteUrl } from "@/data/site";
import { clientTransformations, testimonials } from "@/data/testimonials";

export const metadata: Metadata = {
  title: "Truly Nourish™ | Rachel Deepthi, Registered Dietitian in Chennai",
  description:
    "Personalized nutrition consultations and sustainable programs for weight management, metabolic health, women’s health, sports nutrition, families and corporate wellness.",
  alternates: { canonical: "/" },
};

const trustItems = [
  "Registered Dietitian",
  "Evidence-Based Guidance",
  "Personalized Plans",
  "Online and Chennai Consultations",
];

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.founder,
            jobTitle: "Registered Dietitian and Nutritionist",
            email: `mailto:${site.email}`,
            telephone: site.phoneDisplay,
            sameAs: [site.instagram, site.linkedin, site.practo],
            worksFor: { "@type": "ProfessionalService", name: site.name },
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: site.name,
            description: site.positioning,
            url: absoluteSiteUrl,
            email: site.email,
            telephone: site.phoneDisplay,
            address: {
              "@type": "PostalAddress",
              streetAddress: "65, Nungambakkam High Road, Nungambakkam",
              addressLocality: "Chennai",
              postalCode: "600034",
              addressRegion: "Tamil Nadu",
              addressCountry: "IN",
            },
          },
        ]}
      />

      <section className="home-hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Signature Nutrition Programs by Rachel Deepthi</p>
            <h1>Transform Your Health, <em>One Habit at a Time</em></h1>
            <p className="hero-lead">
              Personalized nutrition, lifestyle correction and holistic wellness solutions designed to help you achieve sustainable health, performance and balance.
            </p>
            <div className="button-row">
              <Link className="button" href="/contact">Book a Consultation</Link>
              <Link className="button button-secondary" href="/programs">Explore Nutrition Programs</Link>
            </div>
            <p className="hero-note">Supportive guidance. No extreme diets. No one-size-fits-all plans.</p>
          </div>
          <div className="hero-visual">
            <div className="hero-shape" aria-hidden="true" />
            <EditorialImage
              src="/images/rachel-deepthi-portrait-v2.jpg"
              alt="Rachel Deepthi, Registered Dietitian and founder of Truly Nourish"
              className="hero-rachel-portrait"
              priority
            />
            <div className="hero-credential">
              <strong>Rachel Deepthi</strong>
              <span>M.Sc., RD, CDE</span>
            </div>
          </div>
        </div>
        <div className="container trust-row" aria-label="Why visitors choose Truly Nourish">
          {trustItems.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="section intro-section">
        <div className="container split-layout">
          <SectionHeading eyebrow="A practical, personal approach" title="Nutrition That Fits Your Life">
            <p>Hi, I’m Rachel Deepthi, a Registered Dietitian and Nutritionist with over 12 years of experience helping individuals and families improve their health through practical, personalized nutrition.</p>
            <p>True wellness is not about strict rules. It is about understanding your body, nourishing it with intention and creating habits that can be sustained in everyday life.</p>
            <Link className="text-link" href="/about">Meet Rachel</Link>
          </SectionHeading>
          <aside className="quote-card">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>Health is not built through extremes. It is built through small, mindful choices repeated consistently.</blockquote>
            <p>Rachel Deepthi</p>
          </aside>
        </div>
      </section>

      <section className="stats-section" aria-labelledby="experience-heading">
        <div className="container">
          <h2 id="experience-heading" className="sr-only">Professional experience indicators</h2>
          <div className="stats-grid">
            <div><strong>12+ Years</strong><span>of professional experience</span></div>
            <div><strong>10,000+</strong><span>individuals supported</span></div>
            <div><strong>Multiple</strong><span>awards and recognitions</span></div>
            <div><strong>Clinical, corporate &amp; sports</strong><span>nutrition expertise</span></div>
          </div>
          <p className="verification-note">* Rachel’s 12+ years of professional experience is confirmed. The 10,000+ individuals-supported figure and recognition claims remain subject to supporting-record review.</p>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="testimonials-heading-layout">
            <SectionHeading eyebrow="Client experiences" title="Client Transformations & Testimonials">
              <p>Transformation photographs and personal experiences shared by clients with permission.</p>
            </SectionHeading>
            <a
              className="practo-profile-card"
              href={site.practo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="card-kicker">Independent profile</span>
              <strong>View Rachel on Practo</strong>
              <span>Profile details and patient feedback <span aria-hidden="true">↗</span></span>
              <ExternalLinkText />
            </a>
          </div>
          <div className="transformation-grid">
            {clientTransformations.map((transformation) => (
              <figure className="transformation-card" key={transformation.src}>
                {/* Approved client imagery is served locally and preserves the supplied privacy masking. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetPath(transformation.src)}
                  alt={transformation.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{transformation.label}</figcaption>
              </figure>
            ))}
          </div>
          <p className="transformation-privacy-note">Faces are obscured to protect client privacy.</p>
          <h3 className="testimonial-subheading">What Clients Shared</h3>
          <div className="testimonial-grid testimonial-showcase">
            {testimonials.map((testimonial) => (
              <figure className="testimonial-card" key={testimonial.name}>
                <span className="testimonial-quote-mark" aria-hidden="true">“</span>
                <blockquote>{testimonial.quote}</blockquote>
                <div className="testimonial-meta">
                  <figcaption>{testimonial.name}</figcaption>
                  <span>{testimonial.focus}</span>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
