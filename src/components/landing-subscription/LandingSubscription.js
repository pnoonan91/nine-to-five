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
      <DesktopLandingSubscription onModalClick={props.onModalClick} />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileLandingSubscription onModalClick={props.onModalClick} />
    </HideBreakPoint>
  </StyledLandingSubscriptionComponent>
);

export default LandingSubscriptionComponent;
