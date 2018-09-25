import React from "react";
import styled from "styled-components";
import HideBreakPoint from "./HideBreakPoint";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

//
// --- Styled Components ---
const StyledFooter = styled.div``;

//
// --- Footer Component ---
const Footer = props => (
  <StyledFooter>
    <HideBreakPoint xs sm md>
      <DesktopFooter />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileFooter />
    </HideBreakPoint>
  </StyledFooter>
);

export default Footer;
