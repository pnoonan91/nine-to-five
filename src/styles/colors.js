/** The color management strategy used here is to give colors a unique
 * name rather than define the color by how or where they are used.
 * This allows us to to make colors more widely available and allows us
 * to communicate colors based on names.
 */

const NamedColors = {
  standardBlack: "#222222",
  black: "#000000",
  makoGray: "#454954",
  silverGray: "#BEC0C5",
  tunaGray: "#343840",
  standardWhite: "#ffffff",
  primaryBlue: "#1c5d99",
  secondaryGreen: "#46885f",
  secondaryBlue: "#bbcde5",
  primaryGreen: "#559a70"
};

const BrandColors = {
  facebookBlue: "#3B5999",
  instagramRed: "#E4405F",
  pinterestRed: "#BD081C",
  twitterBlue: "#55ACEE",
  youtubeRed: "#CD201F"
};

//
// --- Colors Export ---

export const colors = {
  // Site-wide Utility Colors
  backgroundColor: NamedColors.standardWhite,
  bodyFontColor: NamedColors.makoGray,

  // Buttons
  primaryButtonColor: NamedColors.primaryGreen,
  secondaryButtonColor: NamedColors.secondaryBlue,

  ...NamedColors,
  ...BrandColors
};
