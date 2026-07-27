import type { Metadata } from "next";
import { EditorialImage, PlaceholderImage, SectionHeading } from "@/components/ui";
import { communityInitiatives } from "@/data/community";

export const metadata: Metadata = {
  title: "Community Impact",
  description:
    "Rachel Deepthi’s participation in community nutrition education and preventive-health initiatives, pending verification.",
  alternates: { canonical: "/community-impact" },
};

const purpose = [
  "Preventive health",
  "Accessible nutrition education",
  "Early awareness",
  "Practical lifestyle guidance",
  "Collaborative healthcare",
  "Social responsibility",
];

export default function CommunityImpactPage() {
  return (
    <>
      <h1 className="sr-only">Community Impact</h1>
      <section className="section community-purpose-section">
        <div className="container community-purpose-layout">
          <EditorialImage
            src="/images/rachel-community-impact-portrait-v1.jpg"
            alt="Rachel Deepthi outdoors, representing her commitment to accessible community nutrition education"
            className="community-impact-portrait"
            priority
          />
          <div>
            <SectionHeading eyebrow="Purpose" title="Making Practical Guidance More Accessible">
              <p>Community work reflects Rachel’s commitment to preventive health, early awareness, practical education and collaboration with healthcare and community partners.</p>
              <p>Rachel’s specific role, organizer, date, location and contribution are verified for each initiative before publication. The website does not imply that she independently diagnosed, treated, organized, funded or led an event unless evidence supports that wording.</p>
            </SectionHeading>
            <ul className="purpose-list">
              {purpose.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>
      <section className="section community-gallery-section">
        <div className="container">
          <SectionHeading eyebrow="Initiatives gallery" title="Verified Community Initiatives" />
          {communityInitiatives.length ? (
            <div className="recognition-grid">
              {communityInitiatives.map((initiative) => (
                <article className="recognition-card" key={initiative.title}>
                  <PlaceholderImage label={`${initiative.title} photograph`} />
                  <div><h3>{initiative.title}</h3><p>{initiative.description}</p></div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h2>Initiative records are being prepared for review</h2>
              <p>No event has been published yet. Rachel must provide verified event details, approved original images, rights-owner permission and participant-consent confirmation first.</p>
              <PlaceholderImage label="Approved community initiative gallery" detail="No patient or confidential information may be visible" />
            </div>
          )}
        </div>
      </section>
      <section className="section">
        <div className="container contact-form-layout">
          <div>
            <p className="eyebrow">Community enquiries</p>
            <h2>Planning a Community Health Initiative?</h2>
            <p>Organizations, healthcare teams and community groups may contact Rachel to discuss nutrition education, awareness sessions or participation in suitable community-health initiatives.</p>
          </div>
          <div className="contact-panel">
            <h3>Discuss a Community Initiative</h3>
            <p>Tell us about the organization, location, audience, proposed date and type of nutrition contribution.</p>
            <a className="button" href="mailto:racheldeepthi.rd@gmail.com?subject=Community%20health%20initiative">Email Rachel</a>
          </div>
        </div>
      </section>
    </>
  );
}
