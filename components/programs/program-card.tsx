import Link from "next/link";
import type { Program } from "@/data/programs";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <article className="program-card">
      <h3>{program.name}</h3>
      <p className="program-card-summary">{program.summary}</p>
      <p className="program-card-audience">
        <strong>Best for</strong>
        <span>{program.audience}</span>
      </p>
      <Link className="text-link" href={`/programs/${program.slug}`}>
        View Program
      </Link>
    </article>
  );
}
