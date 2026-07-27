"use client";

import Link from "next/link";
import { navigation, policyNavigation } from "@/data/navigation";
import { assetPath, site } from "@/data/site";
import { ExternalLinkText } from "@/components/ui";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="footer-logo-link" href="/" aria-label="Truly Nourish home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="footer-logo"
              src={assetPath("/images/truly-nourish-logo-v2.png")}
              alt=""
              width="720"
              height="720"
            />
          </Link>
          <p>Personalized, evidence-based and sustainable nutrition guidance for real life.</p>
          <div className="social-icon-links" aria-label="Rachel’s professional profiles">
            <a href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath("/icons/instagram.svg")} alt="" width="24" height="24" aria-hidden="true" />
              <ExternalLinkText />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" title="LinkedIn">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath("/icons/linkedin.png")} alt="" width="24" height="24" aria-hidden="true" />
              <ExternalLinkText />
            </a>
            <a href={site.practo} target="_blank" rel="noopener noreferrer" aria-label="Practo" title="Practo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath("/icons/practo.ico")} alt="" width="24" height="24" aria-hidden="true" />
              <ExternalLinkText />
            </a>
            <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath("/icons/whatsapp.svg")} alt="" width="24" height="24" aria-hidden="true" />
              <ExternalLinkText />
            </a>
          </div>
        </div>
        <div>
          <h2>Contact</h2>
          <ul className="footer-list">
            <li><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
            <li><a href={site.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp Rachel <ExternalLinkText /></a></li>
            <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li>{site.shortAddress}</li>
          </ul>
        </div>
        <div>
          <h2>Explore</h2>
          <ul className="footer-list">
            {navigation.slice(1).map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Policies</h2>
          <ul className="footer-list">
            {policyNavigation.map((item) => (
              <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
            ))}
            <li>
              <button className="link-button" type="button" onClick={() => window.dispatchEvent(new Event("open-cookie-preferences"))}>
                Cookie Preferences
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Truly Nourish™ by Rachel Deepthi. All rights reserved. Third-party names, logos, publications and video content remain the property of their respective owners.</p>
      </div>
    </footer>
  );
}
