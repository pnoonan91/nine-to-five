import React from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopFooter = styled(Flex)`
  border-top: 1px solid ${props => props.theme.colors.silverGray};
  padding: 1rem;
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
  padding-top: 1rem;
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

const StyledBlogContainer = styled(Flex)`
  text-align: left;
`;

const StyledThumbnail = styled.div`
  height: 60px;
  min-width: 60px;
  background-image: url(${props =>
    props.thumbnail || "images/landing-about-us/user-on-phone.jpg"});
  overflow: hidden;
  background-position: center;
  background-size: 100px;
  border-radius: 50px;
  margin-right: 1rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  margin-top: 0.5rem;
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
          <a
            href="https://www.linkedin.com/company/hello-nine-to-five/"
            target="_blank"
          >
            <i
              style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
              class="fab fa-linkedin"
            />
          </a>
          <a href="https://www.facebook.com/helloninetofive" target="_blank">
            <i
              style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
              class="fab fa-facebook"
            />
          </a>
          <a href="https://www.instagram.com/hello_ninetofive/" target="_blank">
            <i
              style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
              class="fab fa-instagram"
            />
          </a>
        </StyledFooterSectionContent>
      </FooterLeft>
      <FooterCenter>
        <StyledFooterSectionHeader>
          <Text.h5>Send Us A line</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <i class="fas fa-envelope" />{" "}
          <a href="mailto:hellonine25@gmail.com" className="email-link">
            hellonine25@gmail.com
          </a>
        </StyledFooterSectionContent>
      </FooterCenter>
      <FooterRight>
        <StyledFooterSectionHeader>
          <Text.h5>From The Blog</Text.h5>
        </StyledFooterSectionHeader>
        <StyledFooterSectionContent>
          <StyledBlogContainer>
            <a href={props.blog.link} target="_blank">
              <StyledThumbnail thumbnail={props.blog.image} />
            </a>
            <dvi>
              <a href={props.blog.link} target="_blank">
                <Text.p style={{ margin: "0" }}>{props.blog.title}</Text.p>
                <Text.small m={0}>
                  {props.blog.description.slice(
                    props.blog.description.indexOf("<p>") + 3,
                    props.blog.description.indexOf("<p>") + 150
                  )}
                  ...
                </Text.small>
              </a>
            </dvi>
          </StyledBlogContainer>
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
        <Link to="/about" style={{ color: "#c7d8ef" }}>
          <Text.h5>About Us</Text.h5>
        </Link>
        <Link to="/blog" style={{ color: "#c7d8ef" }}>
          <Text.h5>Blog</Text.h5>
        </Link>
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
