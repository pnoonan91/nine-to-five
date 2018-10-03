import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopBlogCaption from "./DesktopBlogCaption";
import MobileBlogCaption from "./MobileBlogCaption";

//
// --- Styled Components ---
const StyledBlogCaptionComponent = styled.div`
  position: relative;
  width: 100%;
`;

//
// --- Blog Caption Component ---
const BlogCaptionComponent = props => (
  <StyledBlogCaptionComponent>
    <HideBreakPoint xs sm md>
      <DesktopBlogCaption />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileBlogCaption />
    </HideBreakPoint>
  </StyledBlogCaptionComponent>
);

export default BlogCaptionComponent;
