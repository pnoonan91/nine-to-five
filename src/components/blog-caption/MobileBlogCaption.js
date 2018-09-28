import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileBlogCaptionContainer = styled(Flex)`
  background-color: #fafbfc;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
`;

//
// --- Mobile Blog Caption ---
const MobileBlogCaption = props => (
  <StyledMobileBlogCaptionContainer>
    <Text.p lightbold>
      Saturday’s are for the blog. Every Saturday, we’ll share nightmare
      interview stories (because we have a lot), offer up some advice, customer
      success stories, and talk about anything else job searching related.
    </Text.p>
  </StyledMobileBlogCaptionContainer>
);

export default MobileBlogCaption;
