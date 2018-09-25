import React from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileFooter = styled(Flex)`
  flex-direction: column;
  border-top: 1px solid ${props => props.theme.colors.silverGray};
  padding: 1rem;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.lightGray};
  box-shadow: inset 0 1px 0 0 #eceef2;
`;

const StyledMobileLinks = styled(Flex)`
  background-color: ${props => props.theme.colors.primaryBlue};
  color: ${props => props.theme.colors.secondaryBlue};
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StyledLinkSection = styled(Flex)`
  justify-content: space-between;
  text-align: center;
  width: 100%;
`;

const StyledMobileFooterSection = styled(Flex)`
  flex-direction: column;
  text-align: center;
  padding: 1rem;
`;

const StyledFooterSectionHeader = styled(Box)``;

const StyledFooterSectionContent = styled(Box)`
  padding: 0.5rem;
`;

const FooterLeft = styled(StyledMobileFooterSection)`
  width: 100%;
`;

const FooterCenter = styled(StyledMobileFooterSection)`
  text-align: center;
  width: 100%;
`;

const FooterRight = styled(StyledMobileFooterSection)`
  text-align: center;
  width: 100%;
  border-top: 1px solid ${props => props.theme.colors.silverGray};
  border-bottom: 1px solid ${props => props.theme.colors.silverGray};
`;

//
// --- Mobile Footer Component ---
const MobileFooter = props => (
  <div>
    <StyledMobileFooter>
      <FooterLeft>
        <StyledFooterSectionHeader>
          <Text.h5>Follow Us</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <i
            style={{ fontSize: "25px", paddingLeft: "1rem" }}
            class="fab fa-linkedin"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "1rem" }}
            class="fab fa-facebook"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "1rem" }}
            class="fab fa-instagram"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "1rem" }}
            class="fab fa-twitter-square"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "1rem" }}
            class="fab fa-youtube"
          />
        </StyledFooterSectionContent>
      </FooterLeft>
      <FooterRight>
        <StyledFooterSectionHeader>
          <Text.h5>From The Blog</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <Text.p m={0}>Sample Blog Title</Text.p>
          <Text.small m={0}>Sample Excerpt from blog</Text.small>
        </StyledFooterSectionContent>
      </FooterRight>
      <FooterCenter>
        <StyledFooterSectionHeader>
          <Text.h5>Send Us A line</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <i class="fas fa-envelope" /> <a>hello@ninetofive.com</a>
        </StyledFooterSectionContent>
      </FooterCenter>
    </StyledMobileFooter>
    <StyledMobileLinks>
      <StyledLinkSection>
        <Link to="/" style={{ color: "#c7d8ef" }}>
          <Text.h6>Home</Text.h6>
        </Link>
        <Link to="/how-it-works" style={{ color: "#c7d8ef" }}>
          <Text.h6>How It Works</Text.h6>
        </Link>
        <Link to="/about" style={{ color: "#c7d8ef" }}>
          <Text.h6>About Us</Text.h6>
        </Link>
        <Link to="/blog" style={{ color: "#c7d8ef" }}>
          <Text.h6>Blog</Text.h6>
        </Link>
      </StyledLinkSection>
      <StyledLinkSection
        style={{ justifyContent: "center", marginTop: "1rem" }}
      >
        <Text.h6>
          <i class="far fa-copyright" />
          Nine to Five, 2018
        </Text.h6>
      </StyledLinkSection>
    </StyledMobileLinks>
  </div>
);

export default MobileFooter;
