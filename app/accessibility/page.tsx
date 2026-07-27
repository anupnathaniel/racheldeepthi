import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Truly Nourish’s accessibility goals, current support and feedback channel.",
  alternates: { canonical: "/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <PolicyPage title="Accessibility Statement" description="Our current accessibility approach and how to report a barrier.">
      <p>We are working toward conformance with WCAG 2.2 Level AA and continue to test and improve the website. We do not claim full conformance until independent and assistive-technology testing is complete.</p>
      <h2>Accessibility features</h2>
      <ul>
        <li>Semantic page regions and logical headings</li>
        <li>A skip link and visible keyboard focus</li>
        <li>Keyboard-operable navigation, forms and privacy controls</li>
        <li>Responsive layouts designed for text resizing and browser zoom</li>
        <li>Plain labels, persistent form instructions and associated error messages</li>
        <li>Reduced-motion support and no autoplaying media</li>
        <li>YouTube players that load only after consent and user activation</li>
      </ul>
      <h2>Video limitations</h2>
      <p>Third-party video captions and transcripts are controlled by the source publisher. We do not state that a video is captioned unless that has been verified, and we do not reproduce unauthorized transcripts.</p>
      <h2>Feedback</h2>
      <p>If you experience a barrier, email <a href="mailto:racheldeepthi.rd@gmail.com?subject=Website%20accessibility%20feedback">racheldeepthi.rd@gmail.com</a>. Please describe the page, task, assistive technology or browser involved, and the difficulty you encountered. Do not include private medical information.</p>
      <p><strong>Statement date:</strong> [REQUIRED BEFORE LAUNCH]</p>
    </PolicyPage>
  );
}
