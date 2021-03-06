import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingSubscription from "./DesktopLandingSubscription";
import MobileLandingSubscription from "./MobileLandingSubscription";

//
// --- Styled Components ---
const StyledLandingSubscriptionComponent = styled.div``;

//
// --- Landing Subscription Component ---
const LandingSubscriptionComponent = props => (
  <StyledLandingSubscriptionComponent>
    <HideBreakPoint xs sm md>
      <DesktopLandingSubscription
        isResumePage={props.isResumePage}
        onModalClick={props.onModalClick}
        isCompanyPath={props.isCompanyPath}
      />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileLandingSubscription
        isResumePage={props.isResumePage}
        onModalClick={props.onModalClick}
        isCompanyPath={props.isCompanyPath}
      />
    </HideBreakPoint>
  </StyledLandingSubscriptionComponent>
);

export default LandingSubscriptionComponent;
