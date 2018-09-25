import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingCompanies from "./DesktopLandingCompanies";
import MobileLandingCompanies from "./MobileLandingCompanies";

//
// --- Styled Components ---
const StyledLandingCompaniesContainer = styled.div``;

//
// --- Landing Companies Component ---
const LandingCompaniesComponent = props => (
  <StyledLandingCompaniesContainer>
    <HideBreakPoint xs sm md>
      <DesktopLandingCompanies hideButton={props.hideButton} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileLandingCompanies />
    </HideBreakPoint>
  </StyledLandingCompaniesContainer>
);

export default LandingCompaniesComponent;
