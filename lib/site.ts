/**
 * Single source of truth for the B2B contact address used across the site —
 * every form, mailto link and visible email reads from here so the recipient
 * only ever has to change in one place.
 *
 * NOTE: there is no backend/email route yet. Forms confirm on the client and
 * fall back to this mailto address; wire `CONTACT_EMAIL` into a real email
 * service when one exists.
 */
export const CONTACT_EMAIL = "contact@twincaps.eu";
export const CONTACT_EMAIL_HREF = `mailto:${CONTACT_EMAIL}`;
