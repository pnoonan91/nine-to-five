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
const LandingCompaniesComponent = props => {
  const isCompanyPath = window.location.pathname.indexOf("hire") > -1;
  return (
    <StyledLandingCompaniesContainer>
      <HideBreakPoint xs sm md>
        <DesktopLandingCompanies
          isCompanyPath={isCompanyPath}
          hideButton={props.hideButton}
          onModalClick={props.onModalClick}
        />
      </HideBreakPoint>
      <HideBreakPoint lg>
        <MobileLandingCompanies
          isCompanyPath={isCompanyPath}
          hideButton={props.hideButton}
          onModalClick={props.onModalClick}
        />
      </HideBreakPoint>
    </StyledLandingCompaniesContainer>
  );
};

export default LandingCompaniesComponent;
