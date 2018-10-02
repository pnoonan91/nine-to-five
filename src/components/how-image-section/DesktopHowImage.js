import React from "react";
import styled from "styled-components";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopHowImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url("/images/how-it-works/how-it-works-landing.jpg");
  background-size: 100%;
  background-position: bottom;
  margin-top: 64px;
  height: 350px;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;

//
// --- Desktop How It Works Image ---
const DesktopHowImage = props => (
  <StyledDesktopHowImageContainer>
    <Text.h1
      color="white"
      className="shadow"
      style={{
        margin: "auto",
        fontSize: "3.5rem",
        transform: "translateY(-2rem)"
      }}
    >
      Dream Job, Landed
    </Text.h1>
  </StyledDesktopHowImageContainer>
);

export default DesktopHowImage;
