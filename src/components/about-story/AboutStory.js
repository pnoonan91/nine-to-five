import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopAboutStory from "./DesktopAboutStory";

//
// --- Styled Components ---
const StyledAboutStoryComponent = styled.div`
  position: relative;
`;

//
// -- About Us Story Component ---
const AboutStoryComponent = props => (
  <StyledAboutStoryComponent>
    <HideBreakPoint xs sm md>
      <DesktopAboutStory onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledAboutStoryComponent>
);

export default AboutStoryComponent;
