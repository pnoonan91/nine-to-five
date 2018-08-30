import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledLandingAboutUsContainer = styled.div`
  background-color: ${props => props.theme.colors.secondaryBlue};
  min-height: 300px;
`;

const LandingAboutUs = props => {
  return (
    <StyledLandingAboutUsContainer>
      <Text.h1 m={0}>The Premier Career Consultants</Text.h1>
    </StyledLandingAboutUsContainer>
  );
};

export default LandingAboutUs;
