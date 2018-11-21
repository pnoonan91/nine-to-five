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

const StyledResumesSection = styled(Flex)`
  background-color: white;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  margin-bottom: 1.5rem;
`;

//
// --- Mobile Resumes Details Component ---
const MobileResumesDetailsComponent = props => (
  <StyledDetailSection>
    <StyledResumesSection id="#mobileConsultation">
      <img
        style={{ width: "100%", paddingBottom: "1rem" }}
        src="/images/resumes/resumes-details-1.jpeg"
      />
      <Text.h5 m={0} lightbold>
        Sign up for your free consultation
      </Text.h5>
      <Text.p>
        During this introductory call, we will discuss your career interests,
        your current resume (if you have one), cover letter, and stylistic
        preferences so we can create your perfect resume.
      </Text.p>
      <a onClick={props.onModalClick} className="primary">
        Sign Up For a Free Consultation
      </a>
    </StyledResumesSection>
    <StyledResumesSection id="#mobileBrand">
      <img
        style={{
          width: "100%",
          paddingBottom: "1rem"
        }}
        src="/images/resumes/resumes-details-2.jpeg"
      />
      <Text.h5 m={0} lightbold>
        TEMPLATES DO NOT WORK
      </Text.h5>
      <Text.p>
        Your resume needs to showcase where you want to go, not just where you
        have been. Platforms like LinkedIn and Applicant Tracking Softwares are
        progressively relying on keywords to find qualified candidates. We
        research the jobs you want, so your resume can stand out in the eyes of
        the decision makers.
      </Text.p>
      <a onClick={props.onModalClick} className="primary">
        Let's craft your resume!
      </a>
    </StyledResumesSection>
    <StyledResumesSection id="#mobileJobsearch">
      <img
        style={{
          width: "100%",
          paddingBottom: "1rem"
        }}
        src="/images/resumes/resumes-details-3.jpeg"
      />
      <Text.h5 m={0} lightbold>
        COVER LETTERS & MORE
      </Text.h5>
      <Text.p>
        We do not stop at the resume. We write professional and targeted cover
        letters for individualized job searching. Again, no templates here!
        Cover letters give you another opportunity to build your personal brand.
        We aim to mirror your LinkedIn, resume, and cover letter so you can hit
        the job searching with the tools necessary to be truly successful!
      </Text.p>
      <a onClick={props.onModalClick} className="primary">
        Let's build your brand!
      </a>
    </StyledResumesSection>
  </StyledDetailSection>
);

export default MobileResumesDetailsComponent;
