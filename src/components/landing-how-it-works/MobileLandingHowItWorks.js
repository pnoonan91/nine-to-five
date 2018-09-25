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
            Leave The Job Searching To The Professionals
          </Text.h4>
          <Text.p m={0}>
            We work with you to understand your career goals and make them a
            reality.
          </Text.p>
        </StyledHowItWorksHeader>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h5 semibold>Build Your Brand</Text.h5>
              <Text.p>
                You benefit from a professionally built resume and a fine-tuned
                social media presence which help to open doors to new
                opportunities.
              </Text.p>
              <Link to="/how-it-works" className="secondary">
                How It Works >
              </Link>
            </span>
          </StyledHowItWorksTextContainer>
          <img
            src="/images/landing-about-us/patrick-linkedin-header.png"
            width="100%"
          />
        </StyledHowItWorksSectionContainer>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h5 semibold>
                The Whole Package, Right From Your Phone
              </Text.h5>
              <Text.p>
                We help you with the entire job search process. From finding the
                right jobs to submitting the applications to creating
                connections, we’ve got you covered.
              </Text.p>
              <a
                onClick={scrollOnClick}
                href="#companies"
                className="secondary"
              >
                Where Our Clients Get Hired >
              </a>
            </span>
          </StyledHowItWorksTextContainer>
          <StyledIphoneMock src="/images/landing-about-us/mockup.png" />
        </StyledHowItWorksSectionContainer>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h5 semibold>Stay In The Know</Text.h5>
              <Text.p>
                Each week, your coach will provide you a summary of where
                applications have been sent and who wants to schedule an
                interview with you.
              </Text.p>
              <Link to="/about" className="secondary">
                Learn About Our Professionals >
              </Link>
            </span>
          </StyledHowItWorksTextContainer>

          <img
            style={{ width: "100%" }}
            src="/images/landing-about-us/weekly-updates.jpg"
          />
        </StyledHowItWorksSectionContainer>
        <StyledCenterDiv>
          <a
            style={{ width: "85%" }}
            onClick={this.props.onModalClick}
            className="primary"
          >
            Schedule Your Free Consultation
          </a>
        </StyledCenterDiv>
      </StyledMobileLandingHowItWorks>
    );
  }
}

export default MobileLandingHowItWorks;
