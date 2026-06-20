"use client";

import { useState, type FormEvent } from "react";
import { Check, Mail, Paperclip } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_EMAIL_HREF } from "@/lib/site";

const QUANTITIES = [
  "Sample",
  "1,000 – 5,000 pcs",
  "5,000 – 10,000 pcs",
  "10,000 – 30,000 pcs",
  "30,000 – 50,000 pcs",
  "50,000+ pcs",
];

const NFC_OPTIONS = [
  { value: "yes", label: "Yes, include NFC" },
  { value: "no", label: "No NFC" },
  { value: "advise", label: "Please advise" },
];

const inputClass =
  "w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-cream placeholder:text-mist-2 outline-none transition-colors focus:border-champagne/60";
const labelClass = "mb-2 block text-sm font-medium text-cream";
const errorClass = "mt-1.5 text-xs text-[#b4231b]";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const next: Record<string, string> = {};

    if (!String(data.get("name") || "").trim()) next.name = "Please add your name.";
    if (!String(data.get("company") || "").trim())
      next.company = "Please add your company.";
    const email = String(data.get("email") || "").trim();
    if (!email) next.email = "Please add your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      next.email = "Please enter a valid email address.";

    setErrors(next);

    if (Object.keys(next).length === 0) {
      // TODO: connect to backend / CRM / email service.
      // No backend exists yet — confirm on the client only.
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-start rounded-3xl border border-champagne/30 bg-surface/60 p-8 sm:p-10"
      >
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-champagne/40 text-champagne">
          <Check className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <h3 className="mt-6 font-serif text-2xl text-cream">Request received</h3>
        <p className="mt-3 max-w-md text-pretty text-sm leading-relaxed text-mist">
          Thank you — we’ll be in touch about your TwinCaps offer. You can also
          reach the B2B team directly at the address below.
        </p>
        <a
          href={CONTACT_EMAIL_HREF}
          className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-champagne transition-colors hover:text-champagne-soft"
        >
          <Mail className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
          {CONTACT_EMAIL}
        </a>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 text-sm text-mist underline-offset-4 transition-colors hover:text-cream hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-champagne">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className={inputClass}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className={errorClass}>
              {errors.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company <span className="text-champagne">*</span>
          </label>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className={inputClass}
            aria-invalid={!!errors.company}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errors.company && (
            <p id="company-error" role="alert" className={errorClass}>
              {errors.company}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-champagne">*</span>
          </label>
          {/* Email autofill/privacy browser extensions inject attributes
              (e.g. data-minemail-com, background-image) into this field before
              React hydrates. The app renders it deterministically; suppress the
              extension-only mismatch here without masking real app errors. */}
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            suppressHydrationWarning
            className={inputClass}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className={errorClass}>
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone / WhatsApp
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="country" className={labelClass}>
            Country
          </label>
          <input
            id="country"
            name="country"
            type="text"
            autoComplete="country-name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="brand" className={labelClass}>
            Brand / campaign
          </label>
          <input id="brand" name="brand" type="text" className={inputClass} />
        </div>
      </div>

      <div>
        <label htmlFor="quantity" className={labelClass}>
          Quantity
        </label>
        <select
          id="quantity"
          name="quantity"
          defaultValue=""
          className={`${inputClass} appearance-none`}
        >
          <option value="" disabled>
            Select an estimated volume
          </option>
          {QUANTITIES.map((q) => (
            <option key={q} value={q}>
              {q}
            </option>
          ))}
        </select>
      </div>

      <fieldset>
        <legend className={labelClass}>NFC option</legend>
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {NFC_OPTIONS.map((opt, i) => (
            <label
              key={opt.value}
              className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-line bg-night px-4 py-3 text-sm text-mist transition-colors has-[:checked]:border-champagne/60 has-[:checked]:text-cream"
            >
              <input
                type="radio"
                name="nfc"
                value={opt.value}
                defaultChecked={i === 2}
                className="h-4 w-4 accent-champagne"
              />
              {opt.label}
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className={labelClass}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us about your campaign, timeline and any artwork you have."
          className={`${inputClass} resize-y`}
        />
      </div>

      {/* TODO: enable real file upload once a backend/storage endpoint exists. */}
      <div>
        <span className={labelClass}>Logo / artwork (optional)</span>
        <div className="flex items-center gap-3 rounded-xl border border-dashed border-line bg-night/50 px-4 py-3.5 text-sm text-mist-2">
          <Paperclip className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden="true" />
          <span>
            File upload is being connected. For now, attach artwork to your
            email to{" "}
            <a
              href={CONTACT_EMAIL_HREF}
              className="text-champagne hover:text-champagne-soft"
            >
              {CONTACT_EMAIL}
            </a>
            .
          </span>
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-cream px-7 py-3.5 text-sm font-medium tracking-tight text-night transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#37322b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne sm:w-auto"
      >
        Request B2B Offer
      </button>
    </form>
  );
}
