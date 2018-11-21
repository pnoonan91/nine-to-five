import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopResumesCaptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fafbfc;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  text-align: center;
  flex-direction: column;
`;

//
// --- Desktop Blog Caption ---
const DesktopResumesCaption = props => (
  <StyledDesktopResumesCaptionContainer>
    <Text.h3 lightbold style={{ margin: "0" }}>
      Resumes & More
    </Text.h3>
    <div style={{ width: "100%" }}>
      <Text.p lightbold>
        Are you looking for a new resume? We’ve got you covered. Your resume
        needs to be as unique as you are. Your resume is your first impression
        to the organization, make it a good one. We rely on creating visually
        appealing, easy-to-read resumes using keywords designed to yield
        results. We know what talent acquisition professionals want to see. We
        do resumes, cover letters, LinkedIn profile development, and more!
      </Text.p>
    </div>
  </StyledDesktopResumesCaptionContainer>
);

export default DesktopResumesCaption;
