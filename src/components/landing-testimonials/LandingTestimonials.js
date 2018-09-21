import React from "react";
import styled from "styled-components";

import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopLandingTestimonials from "./DesktopLandingTestimonials";

//
// --- Styled Components ---
const StyledLandingTestimonialsComponent = styled.div``;

//
// --- Landing Testimonials Component ---
const LandingTestimonialsComponent = props => (
  <StyledLandingTestimonialsComponent>
    <HideBreakPoint xs sm>
      <DesktopLandingTestimonials />
    </HideBreakPoint>
  </StyledLandingTestimonialsComponent>
);

export default LandingTestimonialsComponent;
