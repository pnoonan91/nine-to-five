import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingImage from "./DesktopLandingImage";
import MobileLandingImage from "./MobileLandingImage";

//
// --- Styled Components ---
const StyledLandingImageComponent = styled.div`
  position: relative;
`;

//
// --- Landing Image Component ---
const LandingImageComponent = props => (
  <StyledLandingImageComponent>
    <HideBreakPoint xs sm>
      <DesktopLandingImage onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint md lg>
      <MobileLandingImage onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledLandingImageComponent>
);

export default LandingImageComponent;
