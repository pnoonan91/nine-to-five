import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopHowHeader from "./DesktopHowHeader";

//
// --- Styled Components ---
const StyledHowItWorksHeader = styled(Flex)`
  background-color: ${props => props.theme.colors.standardWhite};
  padding: 2rem;
  flex-direction: column;
`;

//
// --- How It Works Header ---
const HowHeaderComponent = props => (
  <StyledHowItWorksHeader>
    <HideBreakPoint xs sm md>
      <DesktopHowHeader onLinkClick={props.onLinkClick} />
    </HideBreakPoint>
  </StyledHowItWorksHeader>
);

export default HowHeaderComponent;
