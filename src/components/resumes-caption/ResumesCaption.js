import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopResumesCaption from "./DesktopResumesCaption";
import MobileResumesCaption from "./MobileResumesCaption";

//
// --- Styled Components --
const StyledResumesCaptionComponent = styled.div`
  position: relative;
  width: 100%;
`;

//
// --- Resume Caption Component ---
const ResumeCaptionComponent = props => (
  <StyledResumesCaptionComponent>
    <HideBreakPoint xs sm md>
      <DesktopResumesCaption />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileResumesCaption />
    </HideBreakPoint>
  </StyledResumesCaptionComponent>
);

export default ResumeCaptionComponent;
