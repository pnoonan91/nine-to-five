import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopAboutImage from "./DesktopAboutImage";
import MobileAboutImage from "./MobileAboutImage";

//
// --- Styled Components ---
const StyledAboutImageComponent = styled.div`
  position: relative;
`;

//
// --- About Us Image Component ---
const AboutImageComponent = props => (
  <StyledAboutImageComponent>
    <HideBreakPoint xs sm md>
      <DesktopAboutImage onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileAboutImage onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledAboutImageComponent>
);

export default AboutImageComponent;
