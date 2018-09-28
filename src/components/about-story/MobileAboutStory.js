import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileAboutContainer = styled(Flex)`
  justify-content: space-between;
  padding: 2rem;
  background-color: ${props => props.theme.colors.secondaryBlue};
  flex-direction: column;
`;

//
// --- Mobile About Us Story ---
const MobileAboutStory = props => (
  <StyledMobileAboutContainer>
    <Box style={{ marginTop: "auto", marginBottom: "auto" }}>
      <Text.h5 semibold m={0} style={{ margin: "auto" }}>
        Our Story
      </Text.h5>
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
      <a onClick={props.onModalClick} className="primary">
        Let us help you find your dream job!
      </a>
      <Flex justifyContent="space-between">
        <Flex
          flexDirection="column"
          style={{ marginTop: "2rem", marginBottom: "1rem" }}
          justifyContent="space-around"
        >
          <Text.primaryHeader className="shadow">
            This is Gaby!
          </Text.primaryHeader>
        </Flex>
      </Flex>
    </Box>
    <Box style={{ margin: "auto" }}>
      <img width="100%" src="/images/about-us/gaby.jpg" />
    </Box>
  </StyledMobileAboutContainer>
);

export default MobileAboutStory;
