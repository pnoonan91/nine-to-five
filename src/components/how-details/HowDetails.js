import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopHowDetailsComponent from "./DesktopHowDetails";
import MobileHowDetailsComponent from "./MobileHowDetails";

//
// --- Styled Components ---
const StyledHowItWorksDetails = styled.div`
display: flex;
flex-wrap: wrap;
    background-color: ${props => props.theme.colors.secondaryBlue}
    padding: 1rem;
    flex-direction: column;
`;

//
// --- How It Works Details ---
const HowDetailsComponent = props => (
  <StyledHowItWorksDetails>
    <HideBreakPoint xs sm md>
      <DesktopHowDetailsComponent onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileHowDetailsComponent onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledHowItWorksDetails>
);

export default HowDetailsComponent;
