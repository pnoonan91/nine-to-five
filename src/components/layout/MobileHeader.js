import React from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";

import { colors } from "../../styles/colors";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileHeader = styled(Flex)`
  background-color: ${props => props.theme.colors.standardWhite};
  color: ${props => props.theme.colors.primaryBlue};
  position: relative;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
`;

const StyledMobileLogoContainer = styled(Box)`
  padding: 5px;
`;

//
// --- Mobile Header Component ---
const MobileHeader = props => (
  <StyledMobileHeader>
    <Flex alignItems="center">
      <StyledMobileLogoContainer>
        <img style={{ width: "40px" }} src="/icons/clock.jpg" />
      </StyledMobileLogoContainer>
      <Text.h5 ml={1}>nine to five</Text.h5>
    </Flex>
    <Box>
      <a onClick={props.onModalClick} className="primary">
        Free Consultation
      </a>
    </Box>
  </StyledMobileHeader>
);

export default MobileHeader;
