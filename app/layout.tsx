import type { Metadata, Viewport } from "next";
import { CookieConsent } from "@/components/consent/cookie-consent";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { absoluteSiteUrl, assetPath } from "@/data/site";
import "./globals.css";

const shareImage =
  process.env.NODE_ENV === "development"
    ? undefined
    : [
        {
          url: `${absoluteSiteUrl}/og.png`,
          width: 1693,
          height: 968,
          alt: "Truly Nourish — personalized nutrition for real life with Rachel Deepthi, Registered Dietitian.",
        },
      ];

export const metadata: Metadata = {
  metadataBase: new URL(absoluteSiteUrl),
  title: {
    default: "Truly Nourish™ | Rachel Deepthi",
    template: "%s | Truly Nourish™",
  },
  description:
    "Personalized, evidence-based and sustainable nutrition for real life with Registered Dietitian Rachel Deepthi.",
  applicationName: "Truly Nourish™",
  authors: [{ name: "Rachel Deepthi" }],
  creator: "Truly Nourish™",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Truly Nourish™",
    title: "Truly Nourish™ | Rachel Deepthi",
    description: "Personalized, evidence-based and sustainable nutrition for real life.",
    images: shareImage,
  },
  twitter: {
    card: "summary_large_image",
    title: "Truly Nourish™ | Rachel Deepthi",
    description: "Personalized, evidence-based and sustainable nutrition for real life.",
    images: shareImage ? [`${absoluteSiteUrl}/og.png`] : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#174c3c",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={assetPath("/truly-nourish-favicon-v3.ico")} sizes="any" />
        <link rel="icon" href={assetPath("/truly-nourish-icon-v3.png")} type="image/png" />
        <link rel="apple-touch-icon" href={assetPath("/apple-touch-icon-v3.png")} />
      </head>
      <body>
        <CookieConsent>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
        </CookieConsent>
      </body>
    </html>
  );
}
