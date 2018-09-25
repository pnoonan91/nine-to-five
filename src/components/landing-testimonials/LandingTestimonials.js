import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingTestimonials from "./DesktopLandingTestimonials";
import MobileLandingTestimonials from "./MobileLandingTestimonials";

//
// --- Styled Components ---
const StyledLandingTestimonialsComponent = styled.div``;

//
// --- Landing Testimonials Component ---
const LandingTestimonialsComponent = props => (
  <StyledLandingTestimonialsComponent>
    <HideBreakPoint xs sm md>
      <DesktopLandingTestimonials />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileLandingTestimonials />
    </HideBreakPoint>
  </StyledLandingTestimonialsComponent>
);

export default LandingTestimonialsComponent;
