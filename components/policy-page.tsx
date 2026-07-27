import type { ReactNode } from "react";
import { Breadcrumbs } from "@/components/ui";

export function PolicyPage({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <>
      <h1 className="sr-only">{title}</h1>
      <p className="sr-only">{description}</p>
      <div className="container policy-shell">
        <Breadcrumbs items={[{ href: "/", label: "Home" }, { label: title }]} />
        <article className="policy-content">{children}</article>
      </div>
    </>
  );
}
