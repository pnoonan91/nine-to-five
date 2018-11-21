import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopResumesDetailsComponent from "./DesktopResumesDetails";
import MobileResumesDetailsComponent from "./MobileResumesDetails";

//
// --- Styled Components ---
const StyledResumesDetails = styled.div`
display: flex;
flex-wrap: wrap;
    background-color: ${props => props.theme.colors.secondaryBlue}
    padding: 1rem;
    flex-direction: column;
`;

//
// --- Resumes Details ---
const ResumesDetailsComponent = props => (
  <StyledResumesDetails>
    <HideBreakPoint xs sm md>
      <DesktopResumesDetailsComponent onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileResumesDetailsComponent onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledResumesDetails>
);

export default ResumesDetailsComponent;
