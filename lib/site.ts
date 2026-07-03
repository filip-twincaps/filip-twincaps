/**
 * Single source of truth for the B2B contact address used across the site —
 * every form, mailto link and visible email reads from here so the recipient
 * only ever has to change in one place.
 *
 * The contact form submits through Web3Forms (see below); delivery goes to the
 * address that verified the Web3Forms access key, which must be this address.
 */
export const CONTACT_EMAIL = "filip@twincaps.eu";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;

/**
 * Web3Forms — serverless email delivery for the contact form.
 *
 * The access key is a *public* key (Web3Forms is built to have it live in the
 * client bundle), so hard-coding it here is expected. Emails are delivered to
 * the inbox that verified this key (filip@twincaps.eu). Override per-environment
 * with NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY if needed.
 */
export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "ef4f6a34-568f-4210-b5f3-d2a32ec8d5fb";
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
