import React from "react";
import styled from "styled-components";
import { Flex, Box } from "grid-styled";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopLandingHowItWorks = styled.div`
  background-color: ${props => props.theme.colors.secondaryBlue};
  min-height: 300px;
`;

const StyledHowItWorksHeader = styled.div`
  text-align: center;
`;

const StyledHowItWorksSectionContainer = styled(Flex)`
  margin: auto;
  justify-content: space-between;
  width: 75%;
  min-height: 500px;
`;

const StyledHowItWorksTextContainer = styled(Flex)`
  flex-direction: column;
  justify-content: space-around;
  flex-align: center;
  width: 40%;
`;

const StyledTestDiv = styled.div`
  height: 400px;
  width: 500px;
  background-color: gray;
  transform: translateY(0px);
`;

const StyledLinkedinIcon = styled.img`
  position: absolute;
  right: 5%;
  transform: translateY(100px);
  width: 150px;
`;

const StyledIphoneMock = styled.img`
  position: absolute;
  left: 20%;
  transform: translateY(0px);
  width: 600px;
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
// --- Desktop Landing How It Works ---
class DesktopLandingHowItWorks extends React.Component {
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
      <StyledDesktopLandingHowItWorks>
        <StyledHowItWorksHeader>
          <Text.h2 m={0} pt={"50px"} semibold>
            Leave The Job Searching To The Professionals
          </Text.h2>
          <Text.p m={0}>
            We work with you to understand your career goals and make them a
            reality.
          </Text.p>
        </StyledHowItWorksHeader>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h4 semibold>Build Your Brand</Text.h4>
              <Text.p>
                You benefit from a professionally built resume and a fine-tuned
                social media presence which help to open doors to new
                opportunities.
              </Text.p>
              <a className="secondary">How It Works ></a>
            </span>
          </StyledHowItWorksTextContainer>
          <img
            src="/images/landing-about-us/patrick-linkedin-header.png"
            height="400px"
            className="about-image"
          />
          <StyledLinkedinIcon
            src="/icons/linkedin-large.png"
            className="about-icon"
          />
        </StyledHowItWorksSectionContainer>
        <StyledHowItWorksSectionContainer>
          <img
            src="/images/landing-about-us/user-on-phone.jpg"
            height="300px"
            className="about-image"
          />
          <StyledIphoneMock
            className="about-mock"
            src="/images/landing-about-us/mockup.png"
          />

          <StyledHowItWorksTextContainer>
            <span>
              <Text.h4 semibold>
                The Whole Package, Right From Your Phone
              </Text.h4>
              <Text.p>
                We help you with the entire job search process. From finding the
                right jobs to submitting the applications to creating
                connections, we’ve got you covered.
              </Text.p>
              <a className="secondary">Where Our Clients Get Hired ></a>
            </span>
          </StyledHowItWorksTextContainer>
        </StyledHowItWorksSectionContainer>
        <StyledHowItWorksSectionContainer>
          <StyledHowItWorksTextContainer>
            <span>
              <Text.h4 semibold>Stay In The Know</Text.h4>
              <Text.p>
                Each week, your coach will provide you a summary of where
                applications have been sent and who wants to schedule an
                interview with you.
              </Text.p>
              <a className="secondary">Learn About Our Professionals ></a>
            </span>
          </StyledHowItWorksTextContainer>

          <img
            src="/images/landing-about-us/weekly-updates.jpg"
            className="about-image"
            height="300px"
          />
          <StyledStayInTheKnow
            src="/images/landing-about-us/stay-in-the-know.jpg"
            className="about-icon"
            width="300px"
          />
        </StyledHowItWorksSectionContainer>
        <StyledCenterDiv>
          <a className="primary">Schedule Your Free Consultation</a>
        </StyledCenterDiv>
      </StyledDesktopLandingHowItWorks>
    );
  }
}

export default DesktopLandingHowItWorks;
