import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDetailSection = styled(Flex)`
  padding: 1rem;
  flex-direction: column;
  background-color: ${props => props.theme.colors.secondaryBlue};
`;

const StyledHowToSection = styled(Flex)`
  background-color: white;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

//
// --- Mobile How It Works Details Component ---
const MobileHowDetailsComponent = props => (
  <StyledDetailSection>
    <StyledHowToSection id="#mobileConsultation">
      <img
        style={{ width: "100%", paddingBottom: "1rem" }}
        src="/images/how-it-works/how-it-works-consult.jpg"
      />
      <Text.h5 m={0} lightbold>
        Sign up for your free consultation
      </Text.h5>
      <Text.p>
        During this introductory call, we will discuss how Nine to Five can
        personalize the process to fit your needs. We will discuss your career
        interests, your resume, cover letter, and the potential challenges you
        are facing during your job/internship search.
      </Text.p>
      <a onClick={props.onModalClick} className="primary">
        Sign Up For a Free Consultation
      </a>
    </StyledHowToSection>
    <StyledHowToSection id="#mobileBrand">
      <img
        style={{
          width: "100%",
          paddingBottom: "1rem"
        }}
        src="/images/how-it-works/how-it-works-building-brand.jpg"
      />
      <Text.h5 m={0} lightbold>
        Build your brand
      </Text.h5>
      <Text.p>
        The first step in our process involves building your job searching
        brand. This includes resume building, cover letter writing, and LinkedIn
        profile development all from actual talent acquisition consultants.
        Additionally, you will have access to our Interview Coaching Guide
        crafted by HR industry professionals.
      </Text.p>
      <a onClick={props.onModalClick} className="primary">
        Let's build your brand!
      </a>
    </StyledHowToSection>
    <StyledHowToSection id="#mobileJobsearch">
      <img
        style={{
          width: "100%",
          paddingBottom: "1rem"
        }}
        src="/images/how-it-works/phone-stuff.png"
      />
      <Text.h5 m={0} lightbold>
        Job Searching
      </Text.h5>
      <Text.p>
        Sit back and let the jobs roll in, right to your phone. Nine to Five
        will send new opportunities every week for you to review and apply. If
        preferred, Nine to Five will apply for you! Additionally, we will
        provide updates on past applications &amp; interviews that you have
        scheduled.
      </Text.p>
      <a onClick={props.onModalClick} className="primary">
        Leave the job search to us
      </a>
    </StyledHowToSection>
    <StyledHowToSection id="#mobileSupport">
      <img
        style={{
          width: "100%",
          paddingBottom: "1rem"
        }}
        src="/images/how-it-works/go-for-it.jpg"
      />
      <Text.h5 m={0} lightbold>
        Weekly Touchpoints & Continued Support
      </Text.h5>
      <Text.p>
        Every week, Nine to Five will schedule a call with you to discuss
        opportunities and offer ongoing coaching/support/interview advice to
        keep your job searching on track!
      </Text.p>
      <a onClick={props.onModalClick} className="primary">
        Lets work together
      </a>
    </StyledHowToSection>
  </StyledDetailSection>
);

export default MobileHowDetailsComponent;
