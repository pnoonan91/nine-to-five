import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Text from "../text/Text";
import { colors } from "../../styles/colors";

//
// --- Styled Components ---
const StyledDesktopLandingImageContainer = styled.div`
  background-image: url("/images/landing-image-large.jpg");
  background-position: center;
  height: 550px;
`;

const StyledDesktopLandingImageText = styled(Flex)`
  height: 550px;
  flex-direction: column;
`;

const StyledAlternatingWordContainer = styled.div`
  width: 250px;
  border-bottom: 3px solid white;
  display: inline-block;
  text-transform: none;
  text-align: center;
  letter-spacing: 1.2px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;

export const verbs = [
  "hiking",
  "biking",
  "dancing",
  "reading",
  "golfing",
  "exploring",
  "learning",
  "playing",
  "living"
];

//
// --- Desktop Landing Image Component ---
class DesktopLandingImage extends Component {
  state = {
    activeVerb: "living",
    activeIndex: 0
  };

  componentDidMount() {
    setInterval(this.rotateVerb, 2000);
  }

  rotateVerb = () => {
    this.setState({
      activeVerb: verbs[this.state.activeIndex],
      activeIndex:
        this.state.activeIndex < verbs.length - 1 ? ++this.state.activeIndex : 0
    });
  };

  render() {
    return (
      <StyledDesktopLandingImageContainer>
        <StyledDesktopLandingImageText width={0.6} ml="auto">
          <Box m={"auto 0"}>
            <Text.h1 className="shadow" color={colors.standardWhite}>
              Spend less time searching,
            </Text.h1>
            <Box mt={3}>
              <Text.h1 className="shadow" color={colors.standardWhite}>
                and more time{" "}
                <StyledAlternatingWordContainer>
                  <Text.primaryHeader>
                    {this.state.activeVerb}
                  </Text.primaryHeader>
                </StyledAlternatingWordContainer>{" "}
                .
              </Text.h1>
            </Box>
            <Box width={0.5} mt={6}>
              <a className="primary">Schedule Your Free Consultation Now!</a>
            </Box>
          </Box>
        </StyledDesktopLandingImageText>
      </StyledDesktopLandingImageContainer>
    );
  }
}

export default DesktopLandingImage;
