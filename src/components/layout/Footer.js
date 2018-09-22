import React from "react";
import styled from "styled-components";
import HideBreakPoint from "./HideBreakPoint";
import DesktopFooter from "./DesktopFooter";

//
// --- Styled Components ---
const StyledFooter = styled.div``;

//
// --- Footer Component ---
const Footer = props => (
  <StyledFooter>
    <HideBreakPoint xs sm>
      <DesktopFooter />
    </HideBreakPoint>
  </StyledFooter>
);

export default Footer;
