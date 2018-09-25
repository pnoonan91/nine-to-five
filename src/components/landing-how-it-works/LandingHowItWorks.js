import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingHowItWorks from "./DesktopLandingHowItWorks";
import MobileLandingHowItWorks from "./MobileLandingHowItWorks";

//
// --- Styled Components ---
const StyledLandingHowItWorksContainer = styled.div``;

//
// --- Landing How It Works Component ---
const LandingHowItWorksComponent = props => (
  <StyledLandingHowItWorksContainer>
    <HideBreakPoint xs sm md>
      <DesktopLandingHowItWorks onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileLandingHowItWorks onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledLandingHowItWorksContainer>
);

export default LandingHowItWorksComponent;
