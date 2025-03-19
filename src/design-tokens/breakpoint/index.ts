export const usyBreakpoint = Object.freeze({
  phone: "480px",
  tablet: "720px",
  laptop: "970px",
  desktop: "1200px",
  tv: "1440px",
});

/**
 * ${mediaQueryMax(usyBreakpoint.laptop)} {
 *   padding: 10px;
 * }
 */

export const mediaQueryMax = (width: string) => `@media (max-width: ${width})`;
export const mediaQueryMin = (width: string) => `@media (min-width: ${width})`;
