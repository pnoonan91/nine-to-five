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
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
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
// --- Mobile Footer Component ---
const MobileFooter = props => {
  if (window.location.pathname === "/") {
    return null;
  }

  return (
    <div>
      <StyledMobileFooter>
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
            <a
              href="https://www.instagram.com/hello_ninetofive/"
              target="_blank"
            >
              <i
                style={{ fontSize: "25px", paddingLeft: "0.5rem" }}
                class="fab fa-instagram"
              />
            </a>
          </StyledFooterSectionContent>
        </FooterLeft>
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
                      props.blog.description.indexOf("</figure>") + 12,
                      props.blog.description.indexOf("</figure>") + 172
                    )}
                    ...
                  </Text.small>
                </a>
              </dvi>
            </StyledBlogContainer>
          </StyledFooterSectionContent>
        </FooterRight>
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
      </StyledMobileFooter>
      <StyledMobileLinks>
        <StyledLinkSection>
          <Link
            to={props.isCompanyRoute ? "/hire" : "/search"}
            style={{ color: "#c7d8ef", padding: "0.2rem" }}
          >
            <Text.h6>Home</Text.h6>
          </Link>
          {!props.isCompanyRoute && (
            <Link
              to="/how-it-works"
              style={{ color: "#c7d8ef", padding: "0.2rem" }}
            >
              <Text.h6>How It Works</Text.h6>
            </Link>
          )}
          {!props.isCompanyRoute && (
            <Link to="/resumes" style={{ color: "#c7d8ef", padding: "0.2rem" }}>
              <Text.h6>Resumes</Text.h6>
            </Link>
          )}
          <Link to="/about" style={{ color: "#c7d8ef", padding: "0.2rem" }}>
            <Text.h6>About Us</Text.h6>
          </Link>
          <Link to="/blog" style={{ color: "#c7d8ef", padding: "0.2rem" }}>
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
};

export default MobileFooter;
