import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Text from "../text/Text";
import { colors } from "../../styles/colors";
import { fontSizes } from "../../styles/sizes";

//
// --- Styled Components ---
const StyledDesktopHeader = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.standardWhite};
  color: ${props => props.theme.colors.makoGray};
  position: relative;
  padding-left: ${props => props.theme.space[3]}px;
  padding-right: ${props => props.theme.space[3]}px;
  padding-top: ${props => props.theme.space[3]}px;
  justify-content: space-between;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
`;

const StyledNavItem = styled.div`
  color: ${props => props.theme.colors.makoGray};
  padding: 16px 0px;
  text-transform: uppercase;
  text-decoration: none;
  margin-left: ${props => props.theme.space[5]}px;
  border-bottom: 3px solid transparent;
  transition: border-color 0.5s, opacity 0.5s;

  &:hover {
    cursor: pointer;
    border-color: ${props => props.theme.colors.makoGray};
  }

  &.activeNavLink {
    color: ${props => props.theme.colors.primaryGreen};
    border-bottom: 3px solid ${props => props.theme.colors.primaryGreen};
  }
`;

const StyledSecondaryLink = styled.div`
  color: ${props => props.theme.colors.primaryBlue};
  padding: 16px 0px;
  text-transform: uppercase;
  text-decoration: none;
  margin-right: ${props => props.theme.space[3]}px;
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.darkBlue};
  }
`;

const StyledRightSection = styled.div`
  display: flex;
`;

//
// --- Desktop Header Component --
class DesktopHeader extends Component {
  state = {
    activeLink: undefined
  };

  componentDidMount() {
    this.updateActiveLink(window.location.pathname.slice(1));
  }

  componentDidUpdate() {
    if (this.state.activeLink !== window.location.pathname.slice(1)) {
      this.updateActiveLink(window.location.pathname.slice(1));
    }
  }

  updateActiveLink = id => {
    let element = document.getElementById(id);

    if (this.state.activeLink) {
      const activeLink = document.getElementById(this.state.activeLink);
      if (activeLink) {
        activeLink.classList.remove("activeNavLink");
      }
    }

    if (element) {
      element.classList.add("activeNavLink");
    }

    this.setState({
      activeLink: id
    });
  };

  render() {
    return (
      <StyledDesktopHeader>
        <div style={{ display: "flex" }}>
          <Link to="/">
            <img
              width="40px"
              height="40px"
              margin="auto"
              src="/icons/new_logo.png"
            />
          </Link>
          <Link to="/" onClick={() => this.updateActiveLink()}>
            <Text.h1 ml={3} color={colors.primaryBlue}>
              nine to five
            </Text.h1>
          </Link>
          <Link to="/how-it-works">
            <StyledNavItem
              fontSize={3}
              id="how-it-works"
              onClick={() => this.updateActiveLink("how-it-works")}
            >
              How It Works
            </StyledNavItem>
          </Link>
          <Link to="/resumes">
            <StyledNavItem
              fontSize={3}
              id="resumes"
              onClick={() => this.updateActiveLink("resumes")}
            >
              Resumes
            </StyledNavItem>
          </Link>
          <Link to="/about">
            <StyledNavItem
              fontSize={3}
              id="about"
              onClick={() => this.updateActiveLink("about")}
            >
              About Us
            </StyledNavItem>
          </Link>
          <Link to="/blog">
            <StyledNavItem
              fontSize={3}
              id="blog"
              onClick={() => this.updateActiveLink("blog")}
            >
              Blog
            </StyledNavItem>
          </Link>
        </div>
        <StyledRightSection style={{ borderBottom: "0.5rem" }}>
          <Link className="primary" to="/hire">
            Looking to hire talent?
          </Link>
        </StyledRightSection>
      </StyledDesktopHeader>
    );
  }
}

export default DesktopHeader;
