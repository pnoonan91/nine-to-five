import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileBlogImageComponent = styled(Flex)`
  background-image: url("/images/blog/blog.jpg");
  background-size: 100%;
  background-position: center;
  margin-top: 52px;
  height: 250px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//
// --- Mobile Blog Image ---
const MobileBlogImage = props => (
  <StyledMobileBlogImageComponent>
    <Text.h3 color="white" className="shadow">
      The happiest of hours
    </Text.h3>
  </StyledMobileBlogImageComponent>
);

export default MobileBlogImage;
