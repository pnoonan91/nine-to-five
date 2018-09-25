import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopAboutContainer = styled(Flex)`
  justify-content: space-between;
  padding: 2rem;
  background-color: ${props => props.theme.colors.secondaryBlue};
`;

//
// --- Desktop About Us Story ---
const DesktopAboutStory = props => (
  <StyledDesktopAboutContainer>
    <Box style={{ marginTop: "auto", marginBottom: "auto" }}>
      <Text.h4 semibold m={0}>
        Our Story
      </Text.h4>
      <Text.p>
        <span style={{ fontWeight: "bold" }}>Our story begins with Gaby. </span>
        In 2016, Gaby was a college sophomore studying in Florida and struggling
        to find quality internship opportunities for the summer. She had reached
        out to me, who was managing the Talent Acquisition team at a company in
        Chicago, for advice. As a friend of hers, I agreed to help her find
        something. I began by redesigning her resume into something I would like
        to see from an applicant. I then began searching for opportunities that
        she was interested in around the Chicago area (where she is from).
        Weekly, I sent her opportunities that I thought fit her interests.
        Throughout the process, Gaby came to me with interview advice, cover
        letter writing, email follow-up advice, salary negotiation advice, and
        general career advice. Since then, Gaby has held 3 internships found by
        Nine to Five staff and we are working to land her dream job after
        graduation in 2020. I quickly became flooded with requests to the effect
        of “Can you help me like you helped her?” And that is how Nine to Five
        was born.
      </Text.p>
      <Flex justifyContent="space-between">
        <a
          onClick={props.onModalClick}
          style={{ width: "50%", marginTop: "2rem", height: "15px" }}
          className="primary"
        >
          Let us help you find your dream job!
        </a>
        <Flex flexDirection="column" style={{ transform: "translateY(3rem)" }}>
          <Text.primaryHeader
            className="shadow"
            style={{
              transform: "rotate(-10deg)"
            }}
          >
            This is Gaby!
          </Text.primaryHeader>
          <img
            style={{
              width: "125px",
              margin: "auto",
              transform: "rotate(-25deg)"
            }}
            src="/images/about-us/arrow.png"
          />
        </Flex>
      </Flex>
    </Box>
    <Box style={{ marginRight: "4rem", marginLeft: "4rem" }}>
      <img width="400px" src="/images/about-us/gaby.jpg" />
      <div
        style={{
          width: "400px",
          height: "533px",
          backgroundColor: "white",
          position: "absolute",
          transform: "translateY(-500px) translateX(2rem)",
          zIndex: "-2"
        }}
      />
    </Box>
  </StyledDesktopAboutContainer>
);

export default DesktopAboutStory;
