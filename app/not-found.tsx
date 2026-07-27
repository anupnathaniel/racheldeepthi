import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <p className="eyebrow">404 · Page not found</p>
        <h1>This Page Has Wandered Off the Path</h1>
        <p>The page may have moved, or the address may be incomplete. You can return home, explore nutrition programs or contact Rachel.</p>
        <div className="button-row">
          <Link className="button" href="/">Return Home</Link>
          <Link className="button button-secondary" href="/programs">Explore Programs</Link>
          <Link className="text-link" href="/contact">Contact Rachel</Link>
        </div>
      </div>
    </section>
  );
}
