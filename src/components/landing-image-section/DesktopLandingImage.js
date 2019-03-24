import React, { Component } from "react";
import styled from "styled-components";

import Text from "../text/Text";
import { colors } from "../../styles/colors";

//
// --- Styled Components ---
const StyledDesktopLandingImageContainer = styled.div`
  background-image: url("/images/landing-image-large.jpg");
  background-size: 100%;
  background-position: center;
  height: 480px;
  margin-top: 64px;
`;

const StyledDesktopLandingImageText = styled.div`
  display: flex;
  height: 480px;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 12%;
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

export const companyVerbs = [
  "selling",
  "marketing",
  "networking",
  "working",
  "living"
];

//
// --- Desktop Landing Image Component ---
class DesktopLandingImage extends Component {
  state = {
    activeVerb: this.props.isCompanyPath ? "selling" : "living",
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
      <StyledDesktopLandingImageContainer>
        <StyledDesktopLandingImageText width={0.6} ml="auto">
          <div style={{ margin: "auto 0" }}>
            <Text.h1 className="shadow" color={colors.standardWhite}>
              Spend less time searching,
            </Text.h1>
            <div>
              <Text.h1 className="shadow" color={colors.standardWhite}>
                and more time{" "}
                <StyledAlternatingWordContainer>
                  <Text.primaryHeader>
                    {this.state.activeVerb}
                  </Text.primaryHeader>
                </StyledAlternatingWordContainer>{" "}
                .
              </Text.h1>
            </div>
            <div style={{ marginTop: "2rem", width: "80%" }}>
              <a onClick={this.props.onModalClick} className="primary">
                Schedule Your Free Consultation Now!
              </a>
            </div>
          </div>
        </StyledDesktopLandingImageText>
      </StyledDesktopLandingImageContainer>
    );
  }
}

export default DesktopLandingImage;
