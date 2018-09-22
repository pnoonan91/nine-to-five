import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopHowImage from "./DesktopHowImage";

//
// --- Styled Components ---
const StyledHowImageComponent = styled.div`
  position: relative;
`;

//
// --- How It Works Image Component ---
const HowImageComponent = props => (
  <StyledHowImageComponent>
    <HideBreakPoint xs sm md>
      <DesktopHowImage />
    </HideBreakPoint>
  </StyledHowImageComponent>
);

export default HowImageComponent;
