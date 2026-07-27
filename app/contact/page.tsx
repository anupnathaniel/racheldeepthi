import type { Metadata } from "next";
import { EnquiryForm } from "@/components/forms/enquiry-form";
import { ExternalLinkText } from "@/components/ui";
import { assetPath, site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact & Book a Consultation",
  description:
    "Request a nutrition consultation with Rachel Deepthi online or in Chennai, or send a corporate, media or general enquiry.",
  alternates: { canonical: "/contact" },
};

const contactOptions = [
  "Request a consultation",
  "General enquiry",
  "Corporate wellness enquiry",
  "Media or speaking enquiry",
  "Student or internship enquiry",
  "Copyright or content-removal request",
];

export default function ContactPage() {
  return (
    <>
      <h1 className="sr-only">Contact Rachel</h1>
      <section className="section emergency-section">
        <div className="container">
          <div className="emergency-notice" role="note">
            <strong>This website does not provide emergency care.</strong>
            <span>For a medical emergency, contact local emergency services or visit the nearest appropriate healthcare facility.</span>
          </div>
        </div>
      </section>
      <section className="section contact-section">
        <div className="container contact-form-layout">
          <aside className="contact-sidebar">
            <p className="eyebrow">Official contact details</p>
            <h2>Rachel Deepthi</h2>
            <dl>
              <div><dt>Phone</dt><dd><a href={site.phoneHref}>{site.phoneDisplay}</a></dd></div>
              <div>
                <dt>WhatsApp</dt>
                <dd>
                  <a
                    className="contact-whatsapp-link"
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={assetPath("/icons/whatsapp.svg")} alt="" width="20" height="20" aria-hidden="true" />
                    Message Rachel
                    <ExternalLinkText />
                  </a>
                </dd>
              </div>
              <div><dt>Email</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
              <div><dt>Consultations</dt><dd>Online and in person in Chennai, subject to confirmation</dd></div>
              <div><dt>Address</dt><dd>{site.address}</dd></div>
            </dl>
            <h3>What can we help with?</h3>
            <ul className="compact-list">
              {contactOptions.map((option) => <li key={option}>{option}</li>)}
            </ul>
            <div className="social-links contact-social">
              <a href={site.instagram} target="_blank" rel="noopener noreferrer">Follow Rachel on Instagram <span className="sr-only">(opens an external website in a new tab)</span></a>
              <a href={site.linkedin} target="_blank" rel="noopener noreferrer">Connect with Rachel on LinkedIn <span className="sr-only">(opens an external website in a new tab)</span></a>
              <a href={site.practo} target="_blank" rel="noopener noreferrer">View Rachel on Practo <span className="sr-only">(opens an external website in a new tab)</span></a>
            </div>
          </aside>
          <EnquiryForm />
        </div>
      </section>
    </>
  );
}
