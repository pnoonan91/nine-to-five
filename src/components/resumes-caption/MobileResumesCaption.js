import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileResumesCaptionContainer = styled(Flex)`
  background-color: #fafbfc;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  flex-direction: column;
`;

//
// --- Mobile Blog Caption ---
const MobileResumesCaption = props => (
  <StyledMobileResumesCaptionContainer>
    <Text.h4 lightbold>Resumes & More</Text.h4>
    <Text.p lightbold>
      Are you looking for a new resume? We’ve got you covered. Your resume needs
      to be as unique as you are. Your resume is your first impression to the
      organization, make it a good one. We rely on creating visually appealing,
      easy-to-read resumes using keywords designed to yield results. We know
      what talent acquisition professionals want to see. We do resumes, cover
      letters, LinkedIn profile development, and more!
    </Text.p>
  </StyledMobileResumesCaptionContainer>
);

export default MobileResumesCaption;
