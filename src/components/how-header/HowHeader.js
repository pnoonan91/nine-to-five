import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopHowHeader from "./DesktopHowHeader";
import MobileHowHeader from "./MobileHowHeader";

//
// --- Styled Components ---
const StyledHowItWorksHeader = styled(Flex)`
  background-color: ${props => props.theme.colors.standardWhite};
  padding: 1rem;
  flex-direction: column;
`;

//
// --- How It Works Header ---
const HowHeaderComponent = props => (
  <StyledHowItWorksHeader>
    <HideBreakPoint xs sm md>
      <DesktopHowHeader
        onLinkClick={props.onLinkClick}
        onModalClick={props.onModalClick}
      />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileHowHeader
        onLinkClick={props.onLinkClick}
        onModalClick={props.onModalClick}
      />
    </HideBreakPoint>
  </StyledHowItWorksHeader>
);

export default HowHeaderComponent;
