import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopBlogCaption from "./DesktopBlogCaption";

//
// --- Styled Components ---
const StyledBlogCaptionComponent = styled.div`
  position: relative;
`;

//
// --- Blog Caption Component ---
const BlogCaptionComponent = props => (
  <StyledBlogCaptionComponent>
    <HideBreakPoint xs sm md>
      <DesktopBlogCaption />
    </HideBreakPoint>
  </StyledBlogCaptionComponent>
);

export default BlogCaptionComponent;
