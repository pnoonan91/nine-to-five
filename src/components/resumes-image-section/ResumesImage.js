import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopResumesImage from "./DesktopResumesImage";
import MobileResumesImage from "./MobileResumesImage";

//
// --- Styled Components ---
const StyledResumeImageComponent = styled.div`
  position: relative;
`;

//
// --- Resumes Image Component ---
const ResumesImageComponent = props => (
  <StyledResumeImageComponent>
    <HideBreakPoint xs sm md>
      <DesktopResumesImage onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileResumesImage onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledResumeImageComponent>
);

export default ResumesImageComponent;
