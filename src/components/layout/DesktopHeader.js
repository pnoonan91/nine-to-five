import React from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

import Text from "../text/Text";
import { colors } from "../../styles/colors";

//
// --- Styled Components ---
const StyledDesktopHeader = styled(Flex)`
  background-color: ${props => props.theme.colors.standardWhite};
  color: ${props => props.theme.colors.makoGray};
  position: relative;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;
  padding-top: ${props => props.theme.space[3]}px;
  justify-content: space-between;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
`;

const StyledNavItem = styled(Box)`
  color: ${props => props.theme.colors.makoGray};
  padding: 16px 0px;
  text-transform: uppercase;
  text-decoration: none;
  margin-left: ${props => props.theme.space[5]}px;
  border-bottom: 3px solid transparent;
  transition: border-color 0.5s, opacity 0.5s;

  &:hover {
    cursor: pointer;
    border-color: ${props => props.theme.colors.makoGray};
  }
`;

//
// --- Desktop Header Component --
const DesktopHeader = props => (
  <StyledDesktopHeader>
    <Flex alignItems="center">
      <img width="40px" height="40px" margin="auto" src="/icons/clock.png" />
      <Text.h1 ml={3} color={colors.primaryBlue}>
        nine to five
      </Text.h1>
      <StyledNavItem fontSize={3}>
        <a>About Us</a>
      </StyledNavItem>
      <StyledNavItem fontSize={3}>
        <a>Contact</a>
      </StyledNavItem>
      <StyledNavItem fontSize={3}>
        <a>Blog</a>
      </StyledNavItem>
    </Flex>
    <Box>
      <a className="primary">Free Consultation</a>
    </Box>
  </StyledDesktopHeader>
);

export default DesktopHeader;
