import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopBlogCaptionContainer = styled(Flex)`
    background-color: ${props => props.theme.colors.primaryBlue}
    justify-content: center;
    align-items: center;
    padding: 1rem 2rem;
    text-align: center;
`;

//
// --- Desktop Blog Caption ---
const DesktopBlogCaption = props => (
  <StyledDesktopBlogCaptionContainer>
    <Text.p lightbold className="shadow" color="white">
      Saturday’s are for the blog. Every Saturday, we’ll share nightmare
      interview stories (because we have a lot), offer up some advice, customer
      success stories, and talk about anything else job searching related.
    </Text.p>
  </StyledDesktopBlogCaptionContainer>
);

export default DesktopBlogCaption;
