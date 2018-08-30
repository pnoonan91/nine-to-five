import { rem } from "polished";

// Breakpoints
export const breakpoints = ["40em", "54em", "64em"];

export const breakpointMappings = {
  xs: `@media screen and (max-width: ${breakpoints[0]})`,
  xs_up: `@media screen and (min-width: ${breakpoints[0]})`,
  sm: `@media screen and (min-width: ${breakpoints[0]}) and (max-width: ${
    breakpoints[1]
  })`,
  sm_down: `@media screen and (max-width: ${breakpoints[1]})`,
  md_up: `@media screen and (min-width: ${breakpoints[1]})`,
  md: `@media screen and (min-width: ${breakpoints[1]}) and (max-width: ${
    breakpoints[2]
  })`,
  lg: `@media screen and (min-width: ${breakpoints[2]})`,
  print: `@media print`
};

// Typographic Scale (numbers are converted to px values)
export const fontSizes = [12, 14, 16, 18, 22, 26, 30, 36, 44];

// Spacing Scale (used for margin and padding)
export const space = [
  0, // 0
  4, // 1
  8, // 2
  12, // 3
  16, // 4
  24, // 5
  32, // 6
  48, // 7
  64, // 8
  128, // 9
  256, // 10
  512 // 11
];

// Element Sizes
export const elementSizes = {
  siteWrap: rem("1280px"),
  contentWrap: rem("850px")
};
