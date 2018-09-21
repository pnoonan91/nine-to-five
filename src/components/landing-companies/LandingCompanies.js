import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingCompanies from "./DesktopLandingCompanies";

//
// --- Styled Components ---
const StyledLandingCompaniesContainer = styled.div``;

//
// --- Landing Companies Component ---
const LandingCompaniesComponent = props => (
  <StyledLandingCompaniesContainer>
    <HideBreakPoint xs sm>
      <DesktopLandingCompanies />
    </HideBreakPoint>
  </StyledLandingCompaniesContainer>
);

export default LandingCompaniesComponent;
