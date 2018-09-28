import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopBlogImage from "./DesktopBlogImage";
import MobileBlogImage from "./MobileBlogImage";

//
// --- Styled Components ---
const StyledBlogImageComponent = styled.div`
  position: relative;
`;

//
// --- Blog Image Component ---
const BlogImageComponent = props => (
  <StyledBlogImageComponent>
    <HideBreakPoint xs sm md>
      <DesktopBlogImage />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileBlogImage />
    </HideBreakPoint>
  </StyledBlogImageComponent>
);

export default BlogImageComponent;
