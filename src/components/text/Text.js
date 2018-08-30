import React, { Component } from "react";
import {
  alignContent,
  display,
  fontSize,
  space,
  color,
  fontFamily,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  boxShadow
} from "styled-system";

import { css, InterpolationValue, styled } from "../../styles";
import { colors } from "../../styles/colors";

//
// --- Screen Reader Text ---
const ScreenReaderText = styled.span`
  border: 0;
  clip: rect(1px, 1px, 1px, 1px);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute !important;
  width: 1px;
  word-wrap: normal !important;
`;

//
// --- Style Extension Functions ---

/**
 * The purpose of this component is to control for typographic rhythm, size, font, and spacing.
 * This approach allows us to encapuslate our necessary styles without having to override globals
 * on the body element.
 * Ex. usage <Text.p>Paragraph text here</Text.p>
 */
const bold = props => (props.bold ? { fontWeight: 700 } : null);
const caps = props => (props.caps ? { textTransform: "uppercase" } : null);
const italic = props => (props.italic ? { fontStyle: "italic" } : null);
const semibold = props => (props.semibold ? { fontWeight: 500 } : null);
const lightbold = props => (props.lightbold ? { fontWeight: 500 } : null);
const underline = props =>
  props.underline ? { textDecoration: "underline" } : null;

const baseStyles = css`
  ${alignContent};
  ${boxShadow};
  ${caps};
  ${color};
  ${italic};
  ${fontSize};
  ${fontFamily};
  ${fontWeight};
  ${bold};
  ${letterSpacing};
  ${lineHeight};
  ${semibold};
  ${lightbold};
  ${space};
  ${textAlign};
  ${underline};
  ${display};
`;

const StyledText = styled.div`
  ${baseStyles};
`;

StyledText.defaultProps = {
  color: null,
  fontSize: 2,
  fontWeight: 400,
  lineHeight: 1.5,
  mt: 0
};

//
// --- Text Component ---
class Text extends Component {
  static p = StyledText.withComponent("p");
  static span = StyledText.withComponent("span");
  static ScreenReader = ScreenReaderText;
  static section = StyledText.withComponent("section");
  static article = StyledText.withComponent("article");
  static aside = StyledText.withComponent("aside");
  static div = StyledText.withComponent("div");
  static footer = StyledText.withComponent("footer");
  static ul = StyledText.withComponent("ul").extend`
    li {
      margin-bottom: ${props => props.theme.space[1]}px;
    }
  `;
  static s = StyledText.withComponent("s");
  static sup = StyledText.withComponent("sup");
  static sub = StyledText.withComponent("sub");
  static pre = StyledText.withComponent("pre");
  static Lead = StyledText.withComponent("h1");
  static h1 = StyledText.withComponent("h1");
  static h2 = StyledText.withComponent("h2");
  static h3 = StyledText.withComponent("h3");
  static h4 = StyledText.withComponent("h4");
  static h5 = StyledText.withComponent("h5");
  static h6 = StyledText.withComponent("h6");
  static small = styled(Text.div)`
    font-size: 11px;
  `;
  static xsmall = styled(Text.div)`
    font-size: 9px;
    line-height: 13px;
  `;
  static a = styled.a`
    color: ${props => props.theme.colors.salemGreen};
    text-decoration: none;
    &:hover,
    &:focus,
    &:active {
      text-decoration: underline;
    }
    ${baseStyles};
  `;
  static primaryHeader = StyledText.withComponent("primaryHeader");
  static primaryHeaderMobile = StyledText.withComponent("primaryHeaderMobile");
}

Text.p.defaultProps = {
  fontSize: 2,
  color: "bodyFontColor",
  mb: 4,
  lineHeight: 1.5,
  fontFamily: "body"
};

Text.a.defaultProps = {
  color: "salemGreen",
  fontFamily: "body",
  lineHeight: 1.5
};

Text.span.defaultProps = {
  fontFamily: "body"
};

Text.s.defaultProps = {
  fontFamily: "body"
};

Text.div.defaultProps = {
  fontFamily: "body",
  lineHeight: 1.5
};

Text.ul.defaultProps = {
  fontFamily: "body"
};

Text.sup.defaultProps = {
  fontFamily: "body"
};

Text.aside.defaultProps = {
  fontFamily: "body"
};

Text.article.defaultProps = {
  fontFamily: "body"
};

Text.section.defaultProps = {
  fontFamily: "body"
};

Text.sub.defaultProps = {
  fontFamily: "body"
};

Text.Lead.defaultProps = {
  caps: true,
  fontFamily: "heading",
  color: "sharkGray",
  fontSize: 8,
  fontWeight: 800
};

Text.h1.defaultProps = {
  bold: false,
  color: "bodyFontColor",
  caps: true,
  fontFamily: "heading",
  fontSize: 7,
  fontWeight: 400,
  m: 0
};

Text.h2.defaultProps = {
  caps: true,
  fontFamily: "heading",
  fontSize: 6,
  fontWeight: 400
};

Text.h3.defaultProps = {
  caps: true,
  fontFamily: "heading",
  fontSize: 5,
  fontWeight: 400,
  lineHeight: 1.3
};

Text.h4.defaultProps = {
  caps: true,
  fontFamily: "heading",
  fontSize: 4,
  fontWeight: 400
};

Text.h5.defaultProps = {
  caps: true,
  fontFamily: "heading",
  fontSize: 3,
  fontWeight: 400,
  m: 0
};

Text.h6.defaultProps = {
  caps: true,
  fontFamily: "heading",
  fontSize: 2,
  fontWeight: 400,
  m: 0
};

Text.small.defaultProps = {
  fontFamily: "body"
};

Text.xsmall.defaultProps = {
  fontFamily: "body"
};

Text.primaryHeader.defaultProps = {
  fontFamily: "Bitter",
  fontSize: 8,
  fontWeight: 500,
  m: 0,
  color: colors.primaryBlue
};

Text.primaryHeaderMobile.defaultProps = {
  fontFamily: "Bitter",
  fontSize: 6,
  fontWeight: 400,
  m: 0,
  color: colors.primaryBlue
};

export default Text;
