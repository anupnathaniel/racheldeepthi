import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Truly Nourish collects, uses, protects and manages website information.",
  alternates: { canonical: "/privacy" },
};

const required = "[REQUIRED BEFORE LAUNCH]";

export default function PrivacyPage() {
  return (
    <PolicyPage title="Privacy Policy" description="A plain-language overview of how website information is handled.">
      <p><strong>Effective date:</strong> {required}</p>
      <h2>Who operates this website</h2>
      <p>Truly Nourish™ is operated by <strong>legal entity or proprietor name {required}</strong>. Privacy questions may be sent to <a href="mailto:racheldeepthi.rd@gmail.com">racheldeepthi.rd@gmail.com</a>. The designated privacy grievance contact is {required}.</p>
      <h2>Information we collect</h2>
      <p>We may collect information you choose to submit through enquiry forms, such as your name, email, phone, location, consultation preference, organization and a short message. Please do not submit medical records, diagnostic reports, medication lists, identity numbers, insurance details or urgent medical information through the website.</p>
      <p>Limited technical information may be processed for security, reliability and, where you consent, analytics. Health-enquiry details are not sent to advertising platforms.</p>
      <h2>Why information is used</h2>
      <p>Information may be used to respond to enquiries, arrange consultations, prepare corporate or community proposals, handle media and copyright requests, protect the website and understand site performance where optional analytics consent has been provided.</p>
      <h2>Service providers and recipients</h2>
      <p>Information may be processed by authorized staff and the providers needed to host the website and deliver forms or email. Hosting provider: {required}. Email/form provider: {required}. Analytics provider: {required}. These services must be configured before launch and reviewed for appropriate data-handling terms.</p>
      <h2>YouTube and external media</h2>
      <p>YouTube players are blocked until external-media consent is provided. When activated, YouTube may receive technical information according to its own privacy practices. External-media consent can be changed through Cookie Preferences in the footer.</p>
      <h2>Cookies and similar technologies</h2>
      <p>Essential storage remembers privacy choices and supports website operation. Optional analytics and external media are off by default. The site does not install Meta Pixel, behavioral advertising or remarketing by default.</p>
      <h2>Retention and security</h2>
      <p>Enquiry information will be retained for {required}. Reasonable administrative and technical measures are used, but no internet service can guarantee absolute security.</p>
      <h2>Your choices</h2>
      <p>You may request access, correction or deletion, or withdraw consent where applicable, by emailing <a href="mailto:racheldeepthi.rd@gmail.com">racheldeepthi.rd@gmail.com</a>. We may need to verify the request and retain information where legally required.</p>
      <h2>Children’s information</h2>
      <p>A parent or legal guardian should make enquiries involving a child. Do not submit information that identifies a child without appropriate authority and consent.</p>
      <h2>International processing</h2>
      <p>Service providers may process information outside India. Provider locations and safeguards must be documented before launch.</p>
      <h2>Policy updates</h2>
      <p>This policy may be updated as website services change. The effective date above will be revised when a new version is published.</p>
      <div className="legal-review-note">This operational draft requires review by an appropriately qualified Indian legal professional before launch.</div>
    </PolicyPage>
  );
}
