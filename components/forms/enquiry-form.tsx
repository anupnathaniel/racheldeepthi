"use client";

import { useState } from "react";
import { assetPath, site } from "@/data/site";

type FormKind = "consultation" | "corporate" | "general" | "removal";
type Errors = Record<string, string>;

const supportOptions = [
  "Weight management",
  "Lifestyle or metabolic health",
  "Sports nutrition",
  "Fertility or IVF nutrition",
  "Pregnancy or postpartum nutrition",
  "Child or adolescent nutrition",
  "Family nutrition",
  "Creator or influencer nutrition",
  "Corporate wellness",
  "Other",
];

const enquiryLabels: Record<FormKind, string> = {
  consultation: "Request a consultation",
  corporate: "Corporate wellness enquiry",
  general: "General enquiry",
  removal: "Copyright or content-removal request",
};

const fieldLabels: Record<string, string> = {
  name: "Name",
  email: "Email",
  phone: "Phone",
  organization: "Organization",
  employeeCount: "Number of employees",
  preferredFormat: "Preferred format",
  proposedDate: "Proposed date or month",
  location: "Location",
  areas: "Areas of interest",
  consultationMode: "Preferred consultation mode",
  supportArea: "Area of support",
  contactMethod: "Preferred contact method",
  message: "Message",
};

export function EnquiryForm({ initialKind = "consultation" }: { initialKind?: FormKind }) {
  const [kind, setKind] = useState<FormKind>(initialKind);
  const [errors, setErrors] = useState<Errors>({});

  const isCorporate = kind === "corporate";
  const heading = isCorporate ? "Corporate wellness enquiry" : "Consultation and general enquiry";

  const validate = (form: FormData) => {
    const next: Errors = {};
    for (const field of ["name", "email", "phone", "message"]) {
      if (!String(form.get(field) || "").trim()) next[field] = "Please complete this field.";
    }
    const email = String(form.get("email") || "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Enter a valid email address.";
    if (!form.get("consent")) next.consent = "Please confirm that we may respond to your enquiry.";
    return next;
  };

  const submit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      const first = Object.keys(nextErrors)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }

    const details = Array.from(data.entries())
      .filter(([name, value]) => name !== "consent" && name !== "website" && String(value).trim())
      .map(([name, value]) => `${fieldLabels[name] || name}: ${String(value).trim()}`);
    const message = [
      "Hello Rachel,",
      "",
      "I would like to make an enquiry through the Truly Nourish website.",
      "",
      `Enquiry type: ${enquiryLabels[kind]}`,
      ...details,
    ].join("\n");
    const whatsappUrl = new URL(site.whatsapp);
    whatsappUrl.searchParams.set("text", message);
    window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");
  };

  const errorProps = (name: string) => ({
    "aria-invalid": Boolean(errors[name]),
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  return (
    <section className="form-card" aria-labelledby="enquiry-form-title">
      <div className="form-heading">
        <p className="eyebrow">Start a conversation</p>
        <h2 id="enquiry-form-title">{heading}</h2>
        <p>Please share only the information needed for us to understand and route your enquiry.</p>
      </div>
      {Object.keys(errors).length ? (
        <div className="error-summary" role="alert" tabIndex={-1}>
          <strong>Please review the highlighted fields.</strong>
          <ul>{Object.entries(errors).map(([name, message]) => <li key={name}>{message}</li>)}</ul>
        </div>
      ) : null}
      <form onSubmit={submit} noValidate>
        <div className="form-grid">
          <div className="field full">
              <label htmlFor="enquiry-type">Enquiry type</label>
              <select id="enquiry-type" value={kind} onChange={(event) => setKind(event.target.value as FormKind)}>
                <option value="consultation">Request a consultation</option>
                <option value="general">General enquiry</option>
                <option value="corporate">Corporate wellness enquiry</option>
                <option value="removal">Copyright or content-removal request</option>
              </select>
            </div>
            <Field id="name" label="Full name" error={errors.name}>
              <input id="name" name="name" autoComplete="name" {...errorProps("name")} />
            </Field>
            <Field id="email" label={isCorporate ? "Work email" : "Email"} error={errors.email}>
              <input id="email" name="email" type="email" inputMode="email" autoComplete="email" {...errorProps("email")} />
            </Field>
            <Field id="phone" label="Phone" error={errors.phone}>
              <input id="phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" {...errorProps("phone")} />
            </Field>
            {isCorporate ? (
              <>
                <Field id="organization" label="Organization">
                  <input id="organization" name="organization" autoComplete="organization" />
                </Field>
                <Field id="employeeCount" label="Number of employees">
                  <input id="employeeCount" name="employeeCount" inputMode="numeric" />
                </Field>
                <Field id="preferredFormat" label="Preferred format">
                  <select id="preferredFormat" name="preferredFormat">
                    <option value="">Choose an option</option>
                    <option>On-site in Chennai</option>
                    <option>Online webinar</option>
                    <option>Individual consultations</option>
                    <option>Not sure</option>
                  </select>
                </Field>
                <Field id="proposedDate" label="Proposed date or month">
                  <input id="proposedDate" name="proposedDate" />
                </Field>
                <Field id="location" label="Location">
                  <input id="location" name="location" autoComplete="address-level2" />
                </Field>
                <Field id="areas" label="Areas of interest">
                  <input id="areas" name="areas" />
                </Field>
              </>
            ) : (
              <>
                <Field id="location" label="City or location">
                  <input id="location" name="location" autoComplete="address-level2" />
                </Field>
                <Field id="consultationMode" label="Preferred consultation mode">
                  <select id="consultationMode" name="consultationMode">
                    <option value="">Choose an option</option>
                    <option>Online</option>
                    <option>In person in Chennai</option>
                    <option>Not sure</option>
                  </select>
                </Field>
                <Field id="supportArea" label="Area of support">
                  <select id="supportArea" name="supportArea">
                    <option value="">Choose an option</option>
                    {supportOptions.map((option) => <option key={option}>{option}</option>)}
                  </select>
                </Field>
                <Field id="contactMethod" label="Preferred contact method">
                  <select id="contactMethod" name="contactMethod">
                    <option>Email</option>
                    <option>Phone</option>
                    <option>WhatsApp</option>
                  </select>
                </Field>
              </>
            )}
            <div className="field full">
              <label htmlFor="message">Short message</label>
              <textarea id="message" name="message" rows={5} {...errorProps("message")} />
              {errors.message ? <span id="message-error" className="field-error">{errors.message}</span> : null}
            </div>
            <div className="honeypot" aria-hidden="true">
              <label htmlFor="website">Leave this field empty</label>
              <input id="website" name="website" tabIndex={-1} autoComplete="off" />
            </div>
            <label className="consent-field full">
              <input type="checkbox" name="consent" {...errorProps("consent")} />
              <span>I agree that Truly Nourish may use these details to respond to my enquiry. I understand that submitting this form does not create a dietitian-client relationship.</span>
            </label>
            {errors.consent ? <span id="consent-error" className="field-error full">{errors.consent}</span> : null}
        </div>
        <p className="form-safety">Please do not submit confidential medical records, diagnostic reports or urgent medical information through this form. Relevant health information can be discussed through an appropriate consultation process.</p>
        <p className="whatsapp-submit-note">
          When you continue, the details completed in this form will open as a message to Rachel’s business WhatsApp. Please review the message and tap Send in WhatsApp.
        </p>
        <button className="button whatsapp-submit" type="submit">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetPath("/icons/whatsapp.svg")} alt="" width="20" height="20" aria-hidden="true" />
          {isCorporate ? "Send Proposal Enquiry on WhatsApp" : "Send Enquiry on WhatsApp"}
        </button>
      </form>
    </section>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error ? <span id={`${id}-error`} className="field-error">{error}</span> : null}
    </div>
  );
}
