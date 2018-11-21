import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileResumesImageComponent = styled(Flex)`
  background-image: url("/images/resumes/resumes-header.jpeg");
  background-size: 150%;
  background-position: center;
  margin-top: 52px;
  height: 250px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//
// --- Mobile About Us Image ---
const MobileResumesImage = props => (
  <StyledMobileResumesImageComponent>
    <Box style={{ transform: "translateY(20px)" }}>
      <Text.h3
        lightbold
        className="shadow"
        style={{ margin: "auto", color: "white" }}
      >
        Resumes that get results.
      </Text.h3>
    </Box>
    <Box m={"1rem"} style={{ transform: "translateY(20px)" }}>
      <a onClick={props.onModalClick} className="primary">
        Let's Chat
      </a>
    </Box>
  </StyledMobileResumesImageComponent>
);

export default MobileResumesImage;
