import React from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopFooter = styled(Flex)`
  border-top: 1px solid ${props => props.theme.colors.silverGray};
  padding: 2rem;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.lightGray};
  box-shadow: inset 0 1px 0 0 #eceef2;
`;

const StyledDesktopLinks = styled(Flex)`
  min-height: 100px;
  background-color: ${props => props.theme.colors.primaryBlue};
  color: ${props => props.theme.colors.secondaryBlue};
  padding: 2rem;
  justify-content: space-between;
  align-items: center;
`;

const StyledLinkSection = styled(Flex)`
  justify-content: space-between;
  text-align: right;
`;

const StyledDesktopFooterSection = styled(Flex)`
  flex-direction: column;
  text-align: center;
  padding: 0.5rem;
`;

const StyledFooterSectionHeader = styled(Box)``;

const StyledFooterSectionContent = styled(Box)`
  padding: 1.5rem;
`;

const FooterLeft = styled(StyledDesktopFooterSection)`
  width: 25%;
`;

const FooterCenter = styled(StyledDesktopFooterSection)`
  text-align: center;
  border-left: 1px solid ${props => props.theme.colors.silverGray};
  border-right: 1px solid ${props => props.theme.colors.silverGray};
  width: 40%;
`;

const FooterRight = styled(StyledDesktopFooterSection)`
  text-align: center;
  width: 25%;
`;

//
// --- Desktop Footer Component ---
const DesktopFooter = props => (
  <div>
    <StyledDesktopFooter>
      <FooterLeft>
        <StyledFooterSectionHeader>
          <Text.h5>Follow Us</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <i
            style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
            class="fab fa-linkedin"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
            class="fab fa-facebook"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
            class="fab fa-instagram"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
            class="fab fa-twitter-square"
          />
          <i
            style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
            class="fab fa-youtube"
          />
        </StyledFooterSectionContent>
      </FooterLeft>
      <FooterCenter>
        <StyledFooterSectionHeader>
          <Text.h5>Send Us A line</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <i class="fas fa-envelope" /> <a>hello@ninetofive.com</a>
        </StyledFooterSectionContent>
      </FooterCenter>
      <FooterRight>
        <StyledFooterSectionHeader>
          <Text.h5>From The Blog</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <Text.p m={0}>Sample Blog Title</Text.p>
          <Text.small m={0}>Sample Excerpt from blog</Text.small>
        </StyledFooterSectionContent>
      </FooterRight>
    </StyledDesktopFooter>
    <StyledDesktopLinks>
      <StyledLinkSection style={{ width: "40%" }}>
        <Link to="/" style={{ color: "#c7d8ef" }}>
          <Text.h5>Home</Text.h5>
        </Link>
        <Link to="/how-it-works" style={{ color: "#c7d8ef" }}>
          <Text.h5>How It Works</Text.h5>
        </Link>
        <Text.h5>About Us</Text.h5>
        <Text.h5>Blog</Text.h5>
      </StyledLinkSection>
      <StyledLinkSection>
        <Text.h5>
          <i class="far fa-copyright" />
          Nine to Five, 2018
        </Text.h5>
      </StyledLinkSection>
    </StyledDesktopLinks>
  </div>
);

export default DesktopFooter;
