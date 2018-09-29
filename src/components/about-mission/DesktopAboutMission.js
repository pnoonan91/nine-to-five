import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopAboutMissionContainer = styled(Flex)`
  background-color: #fafbfc;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  flex-direction: column;
`;

//
// --- Desktop About Us Mission Component ---
const DesktopAboutMission = props => (
  <StyledDesktopAboutMissionContainer>
    <Text.h3 lightbold style={{ margin: "0" }}>
      About Us
    </Text.h3>
    <Text.p lightbold>
      We are a group of talent acquisition professionals who have worked as
      recruiters, headhunters, and HR professionals who are passionate about
      improving the job searching process. The truth is, the job searching
      process sucks. We strive to empower our customers throughout the process
      and give you the attention your career deserves.
    </Text.p>
  </StyledDesktopAboutMissionContainer>
);

export default DesktopAboutMission;
