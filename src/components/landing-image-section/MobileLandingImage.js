import React, { Component } from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import { colors } from "../../styles/colors";
import Text from "../text/Text";
import { verbs, companyVerbs } from "./DesktopLandingImage";

//
// --- Styled Components ---
const StyledMobileLandingImageContainer = styled.div`
  background-image: url("/images/landing-image-small.jpg");
  background-size: 100%;
  background-position: center;
  height: 250px;
  margin-top: 52px;
`;

const StyledDesktopLandingImageText = styled(Flex)`
  height: 250px;
  flex-direction: column;
  padding-top: 30px;
`;

const StyledAlternatingWordContainerMobile = styled.div`
  width: 240px;
  border-bottom: 3px solid white;
  display: inline-block;
  text-transform: none;
  text-align: center;
  letter-spacing: 1.2px;
  box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
`;

const StyledMobileConsultationButton = styled.a`
  position: absolute;
  left: 10%;
  right: 10%;
  margin-top: -18px;
  padding: 10px 0;
`;
//
// --- Mobile Landing Image Componanet ---
class MobileLandingImage extends Component {
  state = {
    activeVerb: "living",
    activeIndex: 0
  };

  componentDidMount() {
    setInterval(this.rotateVerb, 2000);
  }

  rotateVerb = () => {
    this.setState({
      activeVerb: this.props.isCompanyPath
        ? companyVerbs[this.state.activeIndex]
        : verbs[this.state.activeIndex],
      activeIndex:
        this.state.activeIndex <
        (this.props.isCompanyPath ? companyVerbs.length - 1 : verbs.length - 1)
          ? ++this.state.activeIndex
          : 0
    });
  };

  render() {
    return (
      <StyledMobileLandingImageContainer>
        <StyledDesktopLandingImageText width={0.7} ml="auto">
          <Text.h3 className="shadow" color={colors.standardWhite} m={0}>
            Spend less time searching,
          </Text.h3>
          <Text.h3 className="shadow" color={colors.standardWhite} m={0}>
            and more time
          </Text.h3>
          <StyledAlternatingWordContainerMobile>
            <Text.primaryHeaderMobile>
              {this.state.activeVerb}
            </Text.primaryHeaderMobile>
          </StyledAlternatingWordContainerMobile>
        </StyledDesktopLandingImageText>
        <Box width={0.75}>
          <StyledMobileConsultationButton
            onClick={() => this.props.onModalClick()}
            className="primary"
          >
            Schedule Your Free Consultation Now!
          </StyledMobileConsultationButton>
        </Box>
      </StyledMobileLandingImageContainer>
    );
  }
}

export default MobileLandingImage;
