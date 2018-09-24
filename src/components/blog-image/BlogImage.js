import React from "react";
import styled from "styled-components";
import HideBreakPoint from "../layout/HideBreakPoint";
import DesktopBlogImage from "./DesktopBlogImage";

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
  </StyledBlogImageComponent>
);

export default BlogImageComponent;
