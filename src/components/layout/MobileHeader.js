import React, { Component } from "react";
import { Flex, Box } from "grid-styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { fallDown as Menu } from "react-burger-menu";

import Text from "../text/Text";
import history from "../../history";

//
// --- Styled Components ---
const StyledMobileHeader = styled(Flex)`
  background-color: ${props => props.theme.colors.standardWhite};
  color: ${props => props.theme.colors.primaryBlue};
  position: relative;
  padding-right: 10px;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
`;

const StyledMobileLogoContainer = styled(Box)`
  padding: 5px;
`;

const StyledMenuLink = styled.div`
  background-color: white;
  color: ${props => props.theme.colors.primaryBlue};
  text-align: center;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.primaryBlue};
  opacity: 0.9;
`;

const StyledMenuLinkCloseButton = styled.div`
  background-color: white;
  color: ${props => props.theme.colors.primaryBlue};
  text-align: right;
  opacity: 0.9;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.colors.primaryBlue};
`;

//
// --- Mobile Header Component ---
class MobileHeader extends Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  };

  handleNavigation = path => {
    this.setState({ isMenuOpen: false }, () => {
      history.push(path);
    });
  };

  render() {
    return (
      <div>
        <Menu isOpen={this.state.isMenuOpen} width="100%">
          <StyledMenuLinkCloseButton onClick={() => this.toggleMenu()}>
            <Text.p style={{ margin: 0 }} color="#1c5d99">
              <i class="fas fa-chevron-up" /> Close
            </Text.p>
          </StyledMenuLinkCloseButton>
          <StyledMenuLink
            onClick={() =>
              this.handleNavigation(
                this.props.isCompanyRoute ? "/hire" : "/search"
              )
            }
          >
            <Text.h4 style={{ margin: 0 }} color="#1c5d99">
              Home
            </Text.h4>
          </StyledMenuLink>
          {!this.props.isCompanyRoute && (
            <StyledMenuLink
              onClick={() => this.handleNavigation("/how-it-works")}
            >
              <Text.h4 style={{ margin: 0 }} color="#1c5d99">
                How It Works
              </Text.h4>
            </StyledMenuLink>
          )}
          {!this.props.isCompanyRoute && (
            <StyledMenuLink onClick={() => this.handleNavigation("/resumes")}>
              <Text.h4 style={{ margin: 0 }} color="#1c5d99">
                Resumes
              </Text.h4>
            </StyledMenuLink>
          )}
          <StyledMenuLink
            onClick={() =>
              this.handleNavigation(
                `${this.props.isCompanyRoute ? "/hire" : ""}/about`
              )
            }
          >
            <Text.h4 style={{ margin: 0 }} color="#1c5d99">
              About Us
            </Text.h4>
          </StyledMenuLink>
          <StyledMenuLink
            onClick={() =>
              this.handleNavigation(
                `${this.props.isCompanyRoute ? "/hire" : ""}/blog`
              )
            }
          >
            <Text.h4 style={{ margin: 0 }} color="#1c5d99">
              Blog
            </Text.h4>
          </StyledMenuLink>
        </Menu>
        <StyledMobileHeader>
          <Flex alignItems="center">
            <StyledMobileLogoContainer>
              <Link to={this.props.isCompanyRoute ? "/hire" : "/search"}>
                <img style={{ width: "40px" }} src="/icons/new_logo.png" />
              </Link>
            </StyledMobileLogoContainer>
            <Text.h5 ml={1} onClick={this.toggleMenu}>
              nine to five <i class="fas fa-chevron-down" />
            </Text.h5>
          </Flex>
          <Box>
            <a
              onClick={() =>
                history.push(this.props.isCompanyRoute ? "/search" : "/hire")
              }
              className="primary"
            >
              {this.props.isCompanyRoute
                ? "Looking to find a job?"
                : "Looking to hire talent?"}
            </a>
          </Box>
        </StyledMobileHeader>
      </div>
    );
  }
}

export default MobileHeader;
