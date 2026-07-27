"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/navigation";
import { assetPath } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => {
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <div className="announcement">
        <div className="container announcement-inner">
          <span>Online Consultations now available based on appointments.</span>
          <Link href="/contact">Book a Consultation</Link>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label="Truly Nourish home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="header-logo"
              src={assetPath("/images/truly-nourish-logo-v2.png")}
              alt=""
              width="720"
              height="720"
            />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link key={item.href} href={item.href} aria-current={active ? "page" : undefined}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link className="button header-cta" href="/contact">Book a Consultation</Link>
          <button
            className="menu-button"
            type="button"
            ref={buttonRef}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen((current) => !current)}
          >
            <span aria-hidden="true">{open ? "Close" : "Menu"}</span>
            <span className="sr-only">{open ? "Close navigation menu" : "Open navigation menu"}</span>
          </button>
        </div>
        {open ? (
          <div className="mobile-menu-shell" onClick={(event) => {
            if (event.target === event.currentTarget) closeMenu();
          }}>
            <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
              <p className="mobile-nav-title">Explore Truly Nourish™</p>
              {navigation.map((item, index) => {
                const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link className="button" href="/contact" onClick={() => setOpen(false)}>
                Book a Consultation
              </Link>
            </nav>
          </div>
        ) : null}
      </header>
    </>
  );
}
