import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";
import { Link } from "react-router-dom";

import Text from "../text/Text";
import { scrollOnClick } from "../howitworks";

//
// --- Styled Components ---
const StyledMobileLandingHowItWorks = styled.div`
  background-color: ${props => props.theme.colors.secondaryBlue};
  min-height: 300px;
`;

const StyledHowItWorksHeader = styled.div`
  text-align: center;
  padding: 1rem;
`;

const StyledHowItWorksSectionContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const StyledHowItWorksTextContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  flex-align: center;
  padding: 1rem;
`;

const StyledLinkedinIcon = styled.img`
  position: absolute;
  right: 5%;
  transform: translateY(100px);
  width: 150px;
`;

const StyledIphoneMock = styled.img`
    width: 90%
  margin: auto
`;

const StyledStayInTheKnow = styled.img`
  position: absolute;
  right: 5%;
  transform: translateY(100px);
  width: 300px;
`;

const StyledCenterDiv = styled.div`
  margin: auto;
  width: 45%;
  padding-bottom: 2rem;
`;

//
// --- Mobile Landing How It Works ---
class MobileLandingHowItWorks extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".about-image").forEach(image => {
        let parentTop = image.parentElement.getBoundingClientRect();
        let itemTranslate = parentTop.y / 5;
        const rect = image.getBoundingClientRect();
        if (rect.top >= -rect.height) {
          image.style.transform = `translateY(${itemTranslate}px)`;
        }
      });

      document.querySelectorAll(".about-icon").forEach(icon => {
        let parentTop = icon.parentElement.getBoundingClientRect();
        let itemTranslate = (parentTop.y + 450) / 2;
        const rect = icon.getBoundingClientRect();
        if (rect.top >= -rect.height) {
          icon.style.transform = `translateY(${itemTranslate}px)`;
        }
      });

      document.querySelectorAll(".about-mock").forEach(icon => {
        let parentTop = icon.parentElement.getBoundingClientRect();
        let itemTranslate = parentTop.y / 3;
        const rect = icon.getBoundingClientRect();
        if (rect.top >= -rect.height) {
          icon.style.transform = `translateY(${itemTranslate}px)`;
        }
      });
    });
  }

  render() {
    return (
      <StyledMobileLandingHowItWorks>
        <StyledHowItWorksHeader>
          <Text.h4 m={0} lightbold>
            {this.props.isCompanyPath
              ? "Leave The recruiting to the professionals"
              : "Leave The Job Searching To The Professionals"}
          </Text.h4>
          <Text.p m={0}>
            {this.props.isCompanyPath
              ? "We work with you to bring you the most qualified candidates that fit your company’s culture."
              : "We work with you to understand your career goals and make them a reality."}
          </Text.p>
        </StyledHowItWorksHeader>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h5 semibold>
                {this.props.isCompanyPath
                  ? "Unique Approach"
                  : "Build Your Brand"}
              </Text.h5>
              <Text.p>
                {this.props.isCompanyPath
                  ? "Our unique approach of executive recruiting strategies and on-campus ambassadors focuses on quality versus quantity. We handle the recruiting process from start to finish, saving you time, money and energy."
                  : "You benefit from a professionally built resume and a fine-tuned social media presence which help to open doors to new opportunities."}
              </Text.p>
              {this.props.isCompanyPath ? (
                <a onClick={this.props.onModalClick} className="secondary">
                  Learn More >
                </a>
              ) : (
                <Link to="/how-it-works" className="secondary">
                  How It Works >
                </Link>
              )}
            </span>
          </StyledHowItWorksTextContainer>
          <img
            src={`/images/landing-about-us/${
              this.props.isCompanyPath
                ? "landing-fgcu.png"
                : "patrick-linkedin-header.png"
            }`}
            width="100%"
          />
        </StyledHowItWorksSectionContainer>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h5 semibold>
                {this.props.isCompanyPath
                  ? "Recruiting for the modern world"
                  : "The Whole Package, Right From Your Phone"}
              </Text.h5>
              <Text.p>
                {this.props.isCompanyPath
                  ? "Career fairs are outdated and costly. By focusing our agency solely on collegiate interns and recent graduates, we save companies thousands of dollars or more on their early career recruiting efforts."
                  : "We help you with the entire job search process. From finding the right jobs to submitting the applications to creating connections, we’ve got you covered."}
              </Text.p>
              <a
                onClick={scrollOnClick}
                href="#mobileCompanies"
                className="secondary"
              >
                {this.props.isCompanyPath
                  ? "Our Customers >"
                  : "Where Our Clients Get Hired >"}
              </a>
            </span>
          </StyledHowItWorksTextContainer>
          <StyledIphoneMock
            src={`/images/landing-about-us/${
              this.props.isCompanyPath ? "alabama.jpg" : "mockup.png"
            }`}
          />
        </StyledHowItWorksSectionContainer>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h5 semibold>
                {" "}
                {this.props.isCompanyPath
                  ? "AVOID COSTLY SOURCING TOOLS"
                  : "Stay In The Know"}
              </Text.h5>
              <Text.p>
                {this.props.isCompanyPath
                  ? "Sourcing tools are expensive and claim to bring you the best candidates at a quicker pace. However, this is primarily a “quantity over quality” approach with every sourcing platform. We go beyond algorithms and truly tailor our approach for every client to bring the perfect candidate, instead of the most candidates."
                  : "Each week, your coach will provide you a summary of where applications have been sent and who wants to schedule an interview with you."}
              </Text.p>
              <Link to="/about" className="secondary">
                Learn About Our Professionals >
              </Link>
            </span>
          </StyledHowItWorksTextContainer>

          <img
            style={{ width: "100%" }}
            src={`/images/landing-about-us/${
              this.props.isCompanyPath
                ? "company-get-started"
                : "weekly-updates"
            }.jpg`}
          />
        </StyledHowItWorksSectionContainer>
        <StyledCenterDiv>
          <a
            style={{ width: "85%" }}
            onClick={this.props.onModalClick}
            className="primary"
          >
            {this.props.isCompanyPath
              ? "Let's Get Started!"
              : "Schedule Your Free Consultation"}
          </a>
        </StyledCenterDiv>
      </StyledMobileLandingHowItWorks>
    );
  }
}

export default MobileLandingHowItWorks;
