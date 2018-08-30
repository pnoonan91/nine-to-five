import React from "react";
import styled from "styled-components";

import DesktopHeader from "./DesktopHeader";
import HideBreakPoint from "./HideBreakPoint";
import MobileHeader from "./MobileHeader";

//
// --- Styled Components ---
const StyledHeader = styled.header`
  background-color: ${props => props.theme.colors.standardWhite};
  color: ${props => props.theme.colors.makoGray};
  position: relative;
`;

//
// --- Header Component --
const Header = props => (
  <StyledHeader>
    <HideBreakPoint xs sm md>
      <DesktopHeader />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileHeader />
    </HideBreakPoint>
  </StyledHeader>
);

export default Header;
