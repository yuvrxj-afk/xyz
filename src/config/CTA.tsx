/*
 * Call to Action (CTA) Configuration
 *
 * Background: leave backgroundVideoSrc empty for a token-based gradient only.
 * For cinematic background (see prompts.md ideas), add an MP4 under public/
 * or a CDN URL, and optional poster for first paint + reduced-motion fallback.
 */

export const ctaConfig = {
  linkText: 'Book a Free Call',
  calLink: 'yuvrxj-afk/meeting',
  preText: "Hey, you scrolled this far — let's talk.",

  /** MP4 path (e.g. `/videos/cta.mp4`) or full HTTPS URL. Empty = no video. */
  backgroundVideoSrc: '',
  /** Optional poster image path for video + `prefers-reduced-motion` static bg */
  backgroundPosterSrc: '',
};
