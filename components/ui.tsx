import Link from "next/link";
import type { ReactNode } from "react";
import { assetPath } from "@/data/site";

export function SectionHeading({
  eyebrow,
  title,
  children,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`section-heading ${align === "center" ? "is-centered" : ""}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {children ? <div className="section-intro">{children}</div> : null}
    </div>
  );
}

export function Breadcrumbs({
  items,
}: {
  items: Array<{ href?: string; label: string }>;
}) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      <ol>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function PlaceholderImage({
  label,
  detail,
  tall = false,
}: {
  label: string;
  detail?: string;
  tall?: boolean;
}) {
  return (
    <div className={`image-placeholder ${tall ? "is-tall" : ""}`} role="img" aria-label={`${label}. Approved image required.`}>
      <span className="placeholder-mark" aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={assetPath("/images/truly-nourish-logo-v2.png")} alt="" width="720" height="720" />
      </span>
      <strong>{label}</strong>
      <small>{detail || "Approved image will appear here"}</small>
    </div>
  );
}

export function EditorialImage({
  src,
  alt,
  tall = false,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  tall?: boolean;
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`editorial-image ${tall ? "is-tall" : ""} ${className}`.trim()}>
      {/* Local editorial assets are served directly for reliable edge-runtime rendering. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetPath(src)}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
      />
    </figure>
  );
}

export function CtaBand({
  title = "Build Better Health Through Small, Informed Choices",
  text = "Begin with nutrition guidance designed around your body, goals, food preferences and everyday life.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="cta-band">
      <div className="container cta-band-inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="button-row">
          <Link className="button button-light" href="/contact">
            Book a Consultation
          </Link>
          <a className="button button-outline-light" href="mailto:racheldeepthi.rd@gmail.com?subject=Question%20for%20Truly%20Nourish">
            Ask a Question
          </a>
        </div>
      </div>
    </section>
  );
}

export function ReviewBadge({ children = "Verification required" }: { children?: ReactNode }) {
  return <span className="review-badge">{children}</span>;
}

export function ExternalLinkText() {
  return <span className="sr-only"> (opens an external website in a new tab)</span>;
}

export function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return <script type="application/ld+json">{JSON.stringify(data)}</script>;
}
