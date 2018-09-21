import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingSubscription from "./DesktopLandingSubscription";

//
// --- Styled Components ---
const StyledLandingSubscriptionComponent = styled.div``;

//
// --- Landing Subscription Component ---
const LandingSubscriptionComponent = props => (
  <StyledLandingSubscriptionComponent>
    <HideBreakPoint xs sm>
      <DesktopLandingSubscription />
    </HideBreakPoint>
  </StyledLandingSubscriptionComponent>
);

export default LandingSubscriptionComponent;
