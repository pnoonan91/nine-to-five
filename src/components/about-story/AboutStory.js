import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopAboutStory from "./DesktopAboutStory";
import MobileAboutStory from "./MobileAboutStory";

//
// --- Styled Components ---
const StyledAboutStoryComponent = styled.div`
  position: relative;
`;

//
// -- About Us Story Component ---
const AboutStoryComponent = props => {
  const isCompanyPath = window.location.pathname.indexOf("hire") > -1;
  return (
    <StyledAboutStoryComponent>
      <HideBreakPoint xs sm md>
        <DesktopAboutStory
          onModalClick={props.onModalClick}
          isCompanyPath={isCompanyPath}
        />
      </HideBreakPoint>
      <HideBreakPoint lg>
        <MobileAboutStory
          onModalClick={props.onModalClick}
          isCompanyPath={isCompanyPath}
        />
      </HideBreakPoint>
    </StyledAboutStoryComponent>
  );
};

export default AboutStoryComponent;
