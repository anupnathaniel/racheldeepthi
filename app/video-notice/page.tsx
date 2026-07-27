import type { Metadata } from "next";
import { PolicyPage } from "@/components/policy-page";

export const metadata: Metadata = {
  title: "Video & Third-Party Content Notice",
  description: "Copyright, attribution, privacy and availability information for third-party media.",
  alternates: { canonical: "/video-notice" },
};

export default function VideoNoticePage() {
  return (
    <PolicyPage title="Video and Third-Party Content Notice" description="How public YouTube videos and other third-party material are presented.">
      <p>Some videos displayed on this website are hosted by YouTube and may have been originally published by independent television channels, media organizations or other third-party content owners. These videos are embedded using YouTube’s official player and remain the property of their respective owners. Truly Nourish™ and Rachel Deepthi do not claim ownership of third-party video footage, channel branding, music, graphics or production material.</p>
      <p>The videos are presented for informational and educational discovery and to help visitors locate public appearances or nutrition-related discussions featuring Rachel Deepthi. Availability is controlled by YouTube and the respective content owner.</p>
      <p>No third-party video is downloaded, reproduced, modified or hosted by this website. Copyright owners may contact us at <a href="mailto:racheldeepthi.rd@gmail.com">racheldeepthi.rd@gmail.com</a> regarding attribution, correction or removal.</p>
      <h2>Privacy and consent</h2>
      <p>YouTube players are not loaded until a visitor allows external media and chooses to play. YouTube may then receive information about the visit according to its privacy practices.</p>
      <h2>Corrections and removal</h2>
      <p>Please identify the content, link, right involved and requested correction or removal. Do not send identity documents or other sensitive material unless a secure verification method has been agreed.</p>
      <p>This notice does not claim that embedding automatically constitutes fair use or guarantees permission.</p>
    </PolicyPage>
  );
}
