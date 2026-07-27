import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Health & Medical Disclaimer",
  description: "Important health and medical information about the Truly Nourish website and programs.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <PolicyPage title="Health and Medical Disclaimer" description="Please read this information before using website content or making a health decision.">
      <p>The information provided on the Truly Nourish™ website, including articles, videos, downloadable materials, program descriptions and social-media content, is intended for general educational and informational purposes.</p>
      <p>It is not a substitute for individualized medical advice, diagnosis, emergency care or treatment from a qualified medical practitioner or other appropriately licensed healthcare professional.</p>
      <p>Nutrition guidance must be individualized. Health conditions, medications, pregnancy, fertility care, allergies, laboratory findings and other personal circumstances can affect what guidance is appropriate.</p>
      <p>Do not disregard professional medical advice, delay seeking care, stop prescribed medication or change an existing treatment plan because of information found on this website.</p>
      <p>Submitting an enquiry, reading website content or watching a video does not by itself create a dietitian-client relationship. A professional relationship begins only after consultation arrangements, scope, consent and applicable terms have been agreed.</p>
      <p>Program descriptions explain the nature of the support offered and do not promise or guarantee weight loss, disease reversal, conception, pregnancy outcomes, athletic performance, symptom improvement or any other specific result.</p>
      <p>Results and experiences vary between individuals.</p>
    </PolicyPage>
  );
}
