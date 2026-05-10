/**
 * Shared motion tokens — restrained easing and timing for a calm, editorial feel.
 */

/** Primary UI reveal — smooth deceleration */
export const easeEditorial: [number, number, number, number] = [0.22, 1, 0.36, 1];

/** Route / layout transitions — slightly softer landing */
export const easePage: [number, number, number, number] = [0.33, 1, 0.68, 1];

/** Photography / hero imagery */
export const easeMedia: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/** SVG paths & decorative motion */
export const easeCorridor: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const dur = {
  /** FadeIn / small reveals */
  fade: 0.52,
  /** TextReveal mask */
  headline: 0.72,
  /** Images */
  image: 0.75,
  /** Page outlet */
  page: 0.42,
} as const;
