import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { EditorialImage, SectionHeading } from "@/components/ui";

export const metadata: Metadata = {
  title: "Corporate Wellness",
  description:
    "Practical, evidence-based nutrition workshops and corporate wellness programs for healthier workplaces.",
  alternates: { canonical: "/corporate-wellness" },
};

const offerings = [
  "Employee nutrition workshops",
  "Lifestyle-disease awareness sessions",
  "Healthy eating for busy professionals",
  "Women’s health and nutrition sessions",
  "Shift-work nutrition",
  "Sports and fitness nutrition",
  "Individual employee consultations",
  "Leadership wellness sessions",
  "Nutrition challenges",
  "Customized wellness calendars",
  "Cafeteria and menu guidance, subject to scope",
  "Online webinars",
  "On-site programs in Chennai, subject to availability",
];

const steps = [
  "Understand the organization and workforce",
  "Define desired outcomes",
  "Recommend an appropriate format",
  "Customize content",
  "Deliver the program",
  "Gather feedback and provide a completion summary where agreed",
];

export default function CorporatePage() {
  return (
    <>
      <h1 className="sr-only">Corporate Wellness</h1>
      <section className="section corporate-overview-section">
        <div className="container corporate-overview-layout">
          <div>
            <p className="eyebrow">Corporate wellness</p>
            <h2>Practical Nutrition Programs for Healthier Workplaces</h2>
            <p>Truly Nourish™ corporate programs help organizations provide useful, evidence-based nutrition education that employees can apply in real working environments.</p>
          </div>
          <EditorialImage
            src="/images/rachel-corporate-wellness-speaker-v1.jpg"
            alt="Rachel Deepthi presenting a professional nutrition session at a lectern"
            className="corporate-speaker-image"
            priority
          />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Formats tailored to your workforce" title="Corporate Wellness Offerings">
            <p>Programs can be delivered online or on-site in Chennai, subject to availability, and are scoped around the organization’s needs.</p>
          </SectionHeading>
          <ul className="offering-grid">
            {offerings.map((offering) => <li key={offering}>{offering}</li>)}
          </ul>
        </div>
      </section>
      <section className="section corporate-process">
        <div className="container">
          <SectionHeading eyebrow="How we work" title="From Workforce Context to Practical Delivery" />
          <ol className="journey-list">
            {steps.map((step, index) => <li key={step}><span>{index + 1}</span><strong>{step}</strong></li>)}
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container contact-form-layout">
          <aside>
            <p className="eyebrow">Plan a program</p>
            <h2>Tell Us What Your Team Needs</h2>
            <p>Share the broad format, workforce context and preferred timing. Please do not include employee health records or other sensitive personal information.</p>
            <div className="notice-card">
              <h3>Prefer email?</h3>
              <p>Write to <a href="mailto:racheldeepthi.rd@gmail.com?subject=Corporate%20wellness%20enquiry">racheldeepthi.rd@gmail.com</a>.</p>
            </div>
          </aside>
          <EnquiryForm initialKind="corporate" />
        </div>
      </section>
    </>
  );
}
