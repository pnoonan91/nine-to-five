import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopAboutMission from "./DesktopAboutMission";
import MobileAboutMission from "./MobileAboutMission";

//
// --- Styled Components ---
const StyledAboutMissionComponent = styled.div`
  position: relative;
`;

//
// --- About Us Mission Component ---
const AboutMissionComponent = props => (
  <StyledAboutMissionComponent>
    <HideBreakPoint xs sm md>
      <DesktopAboutMission />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileAboutMission />
    </HideBreakPoint>
  </StyledAboutMissionComponent>
);

export default AboutMissionComponent;
