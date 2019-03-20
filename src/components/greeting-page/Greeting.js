import React, { Component } from "react";
import styled from "styled-components";

import Text from "../text/Text";
import { colors } from "../../styles/colors";
import history from "../../history";
import { breakpointMappings } from "../../styles";

//
// --- Styled Components ---
const StyledLandingPageContainer = styled.div`
  background-image: url("/images/landing-image-large.jpg");
  background-position: center;
  background-size: 100%;
  background-position-x: center;
  background-position-y: center;
  background-repeat-x: no-repeat;
  background-repeat-y: no-repeat;
  background-size: cover;
  height: 50vh;

  ${breakpointMappings.lg} {
    height: 100vh;
  }
`;

const StyledLandingPageTextContainer = styled.div`
  display: flex;
  max-width: 75%;
  margin-left: auto;

  ${breakpointMappings.lg} {
    height: 100%;
    padding-right: ${props => props.theme.space[8]}px;
    max-width: 645px;
  }
`;

const StyledInnerContainer = styled.div`
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${props => props.theme.space[7]}px;

  ${breakpointMappings.lg} {
    margin-top: ${props => props.theme.space[9]}px;
  }
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpointMappings.lg} {
    margin-top: ${props => props.theme.space[8]}px;
    flex-direction: row;
  }
`;
const StyledLink = styled.a`
  width: 50%;
  margin: none;
  margin-top: ${props => props.theme.space[4]}px;
  margin-left: auto;
  margin-right: auto;

  ${breakpointMappings.lg} {
    margin-left: ${props => props.ml && "24px"};
    margin-right: undefined;
    margin-top: undefined;
  }
`;

const StyledImage = styled.img`
  height: 40px;
  width: 40px;

  ${breakpointMappings.lg} {
    height: 80px;
    width: 80px;
  }
`;

const StyledHeader = styled(Text.h1)`
  font-size: 35px;
  color: ${props => props.theme.colors.primaryBlue};
  ${breakpointMappings.lg} {
    font-size: 70px;
    margin-left: ${props => props.theme.space[3]}px;
  }
`;

const StyledSubtitle = styled(Text.h1)`
  font-size: 18px;

  ${breakpointMappings.lg} {
    font-size: 36px;
  }
`;
//
// --- Greeting ---
const Greeting = () => {
  return (
    <StyledLandingPageContainer>
      <StyledLandingPageTextContainer>
        <StyledInnerContainer>
          <div style={{ display: "flex", marginBottom: "16px" }}>
            <StyledImage src="/icons/new_logo.png" />
            <StyledHeader color={colors.primaryBlue}>nine to five</StyledHeader>
          </div>
          <StyledSubtitle className="shadow" color={colors.standardWhite}>
            The future of collegiate recruiting is here.
          </StyledSubtitle>
          <StyledLinkContainer>
            <StyledLink className="primary">Find Talent</StyledLink>
            <StyledLink
              ml
              className="primary"
              onClick={() => history.push("/search")}
            >
              Get Hired
            </StyledLink>
          </StyledLinkContainer>
        </StyledInnerContainer>
      </StyledLandingPageTextContainer>
    </StyledLandingPageContainer>
  );
};

export default Greeting;
