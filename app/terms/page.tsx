import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of the Truly Nourish website and educational content.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <PolicyPage title="Terms of Use" description="These draft terms explain the permitted use and limitations of this website.">
      <p>By using this website, you agree to use it lawfully and to respect the rights of Truly Nourish™, Rachel Deepthi and third-party content owners.</p>
      <h2>Educational information</h2>
      <p>Website content is general information and does not constitute diagnosis, emergency care, medical treatment or a personalized nutrition plan. Individual services begin only after scope, consent, availability and applicable terms are agreed.</p>
      <h2>No guaranteed outcomes</h2>
      <p>Program descriptions, client experiences and educational content do not guarantee weight loss, disease reversal, fertility, pregnancy, performance, recovery or any other result.</p>
      <h2>Acceptable use</h2>
      <p>You must not misuse the website, attempt unauthorized access, submit unlawful or harmful material, impersonate another person, or use forms to transmit confidential records that the site asks you not to provide.</p>
      <h2>Intellectual property</h2>
      <p>Original website copy and brand materials are protected by applicable rights. Third-party names, publications, event material and videos remain the property of their respective owners. YouTube content is not downloaded or re-hosted by this website.</p>
      <h2>External services</h2>
      <p>Links and embedded media may lead to third-party services with their own terms and privacy practices. Their availability and content are outside our control.</p>
      <h2>Changes and availability</h2>
      <p>Website information, programs and availability may change. We may correct errors, update content or withdraw material where necessary.</p>
      <h2>Contact</h2>
      <p>Questions may be sent to <a href="mailto:racheldeepthi.rd@gmail.com">racheldeepthi.rd@gmail.com</a>.</p>
      <div className="legal-review-note">Legal entity, governing law, jurisdiction, cancellation terms and effective date are [REQUIRED BEFORE LAUNCH]. This draft requires review by an appropriately qualified Indian legal professional.</div>
    </PolicyPage>
  );
}
