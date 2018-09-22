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
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`;

//
// --- Header Component --
const Header = props => (
  <StyledHeader>
    <HideBreakPoint xs sm md>
      <DesktopHeader onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileHeader onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledHeader>
);

export default Header;
