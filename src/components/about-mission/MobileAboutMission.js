import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileAboutMissionContainer = styled(Flex)`
  background-color: #fafbfc;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
`;

//
// --- Mobile About Us Mission Component ---
const MobileAboutMission = props => (
  <StyledMobileAboutMissionContainer>
    <Text.p lightbold>
      We are a group of talent acquisition professionals who have worked as
      recruiters, headhunters, and HR professionals who are passionate about
      improving the job searching process. The truth is, the job searching
      process sucks. We strive to empower our customers throughout the process
      and give you the attention your career deserves.
    </Text.p>
  </StyledMobileAboutMissionContainer>
);

export default MobileAboutMission;
