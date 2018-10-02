import React from "react";
import styled from "styled-components";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopBlogImageComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url("/images/blog/blog.jpg");
  background-size: 100%;
  background-position: center;
  margin-top: 64px;
  height: 350px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//
// --- Desktop Blog Image ---
const DesktopBlogImage = props => (
  <StyledDesktopBlogImageComponent>
    <Text.h1 color="white" className="shadow">
      The happiest of hours
    </Text.h1>
  </StyledDesktopBlogImageComponent>
);

export default DesktopBlogImage;
