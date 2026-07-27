import type { Metadata } from "next";
import Link from "next/link";
import { EditorialImage } from "@/components/ui";
import { ProgramCard } from "@/components/programs/program-card";
import { programCategories, programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Nutrition Programs",
  description:
    "Explore personalized nutrition programs for health, women and children, sports, creators, families and workplaces.",
  alternates: { canonical: "/programs" },
};

export default function ProgramsPage() {
  return (
    <>
      <div className="container program-directory" id="program-list">
        <div className="program-directory-heading">
          <p className="eyebrow">Choose your area of support</p>
          <h1>Explore Nutrition Programs</h1>
          <p>Review the options by life stage or goal, then open a program for full details.</p>
          <p>
            Not sure where to begin? <Link className="text-link" href="/contact">Book a consultation</Link>.
          </p>
        </div>
        {programCategories.map((category) => (
          <section className="directory-section" key={category} aria-labelledby={category.replaceAll(" ", "-").toLowerCase()}>
            <h2 id={category.replaceAll(" ", "-").toLowerCase()}>{category}</h2>
            <div className="program-grid">
              {programs.filter((program) => program.category === category).map((program) => (
                <ProgramCard key={program.slug} program={program} />
              ))}
            </div>
          </section>
        ))}
        <section className="programs-help-panel" aria-labelledby="programs-help-title">
          <EditorialImage
            src="/images/rachel-consultation-programs-v1.jpg"
            alt="Rachel Deepthi listening to a client during a personalized nutrition consultation"
            className="programs-consultation-image"
          />
          <div>
            <p className="eyebrow">Need help choosing?</p>
            <h2 id="programs-help-title">Start with a Consultation</h2>
            <p>Rachel will listen to your priorities and recommend a suitable next step.</p>
          </div>
          <Link className="button button-light" href="/contact">Book a Consultation</Link>
        </section>
      </div>
    </>
  );
}
