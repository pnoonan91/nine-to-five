import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopAboutImageComponent = styled(Flex)`
  background-image: url("/images/about-us/about-us-header.jpg");
  background-size: 100%;
  background-position: center;
  margin-top: 67px;
  height: 480px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//
// --- Desktop About Us Image ---
const DesktopAboutImage = props => (
  <StyledDesktopAboutImageComponent>
    <Box>
      <Text.h1
        color="white"
        className="shadow"
        style={{ margin: "auto", fontSize: "3.5rem" }}
      >
        About Us
      </Text.h1>
      <Text.h5
        lightbold
        className="shadow"
        style={{ margin: "auto", fontSize: "1.5rem", color: "#1c5d99" }}
      >
        At Nine to Five, we believe there is a better way to job search.
      </Text.h5>
    </Box>
    <Box m={"2rem"}>
      <a onClick={props.onModalClick} className="primary">Let's Chat</a>
    </Box>
  </StyledDesktopAboutImageComponent>
);

export default DesktopAboutImage;
