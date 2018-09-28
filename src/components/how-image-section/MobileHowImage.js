import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileHowImageContainer = styled(Flex)`
  background-image: url("/images/how-it-works/how-it-works-landing.jpg");
  background-size: 100%;
  background-position: center;
  margin-top: 52px;
  height: 250px;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

//
// --- Mobile How It Works Image ---
const MobileHowImage = props => (
  <StyledMobileHowImageContainer>
    <Text.h3
      lightbold
      color="white"
      className="shadow"
      style={{
        margin: "auto"
      }}
    >
      Dream Job, Landed
    </Text.h3>
  </StyledMobileHowImageContainer>
);

export default MobileHowImage;
