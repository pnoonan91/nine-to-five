import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import Text from "../text/Text";
import DesktopLandingHowItWorks from "./DesktopLandingHowItWorks";

//
// --- Styled Components ---
const StyledLandingHowItWorksContainer = styled.div``;

//
// --- Landing How It Works Component ---
const LandingHowItWorksComponent = props => (
  <StyledLandingHowItWorksContainer>
    <HideBreakPoint xs sm>
      <DesktopLandingHowItWorks />
    </HideBreakPoint>
  </StyledLandingHowItWorksContainer>
);

export default LandingHowItWorksComponent;
