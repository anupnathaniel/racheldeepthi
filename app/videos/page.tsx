"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function VideosRedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/media#video-insights");
  }, [router]);

  return (
    <section className="section">
      <div className="container empty-state">
        <h1>Videos are now part of Media &amp; Insights</h1>
        <p>The video library and published articles are available together on one simplified page.</p>
        <Link className="button" href="/media#video-insights">Open Media &amp; Insights</Link>
      </div>
    </section>
  );
}
