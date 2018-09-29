import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopBlogCaptionContainer = styled(Flex)`
  background-color: #fafbfc;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  flex-direction: column;
`;

//
// --- Desktop Blog Caption ---
const DesktopBlogCaption = props => (
  <StyledDesktopBlogCaptionContainer>
    <Text.h3 lightbold style={{ margin: "0" }}>
      Blog
    </Text.h3>
    <Text.p lightbold>
      Every Saturday, we’ll share nightmare interview stories (because we have a
      lot), offer up some advice, customer success stories, and talk about
      anything else job searching related.
    </Text.p>
  </StyledDesktopBlogCaptionContainer>
);

export default DesktopBlogCaption;
