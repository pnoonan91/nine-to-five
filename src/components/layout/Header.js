import * as _ from "lodash";
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
// --- Constants ---
const CandidateRoutes = ["search", "how-it-works", "resumes", "about", "blog"];

//
// --- Header Component --
const Header = props => {
  const location = window.location.pathname.slice(1).toLowerCase();

  if (!location) {
    return null;
  }

  return (
    <StyledHeader>
      <HideBreakPoint xs sm md>
        <DesktopHeader
          onModalClick={props.onModalClick}
          isCompanyRoute={location.indexOf("hire") > -1}
        />
      </HideBreakPoint>
      <HideBreakPoint lg>
        <MobileHeader
          onModalClick={props.onModalClick}
          isCompanyRoute={location.indexOf("hire") > -1}
        />
      </HideBreakPoint>
    </StyledHeader>
  );
};

export default Header;
