import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDetailSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem;
  flex-direction: column;
  background-color: ${props => props.theme.colors.secondaryBlue};
`;

const StyledResumesSectionLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  flex-direction: column;
  padding: 4rem;
  margin-bottom: 6rem;
  width: 50%;
`;

const StyledResumesSectionRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  flex-direction: column;
  padding: 4rem;
  margin-left: 40%;
  margin-bottom: 6rem;
  width: 50%;
`;

//
// --- Desktop Resumes Details Component ---
const DesktopResumesDetailsComponent = props => (
  <StyledDetailSection>
    <StyledResumesSectionLeft id="#consultation">
      <div>
        <Text.h3 m={0} lightbold>
          Sign up for your free consultation
        </Text.h3>
        <Text.p style={{ minHeight: "100px", paddingRight: "2rem" }}>
          During this introductory call, we will discuss your career interests,
          your current resume (if you have one), cover letter, and stylistic
          preferences so we can create your perfect resume.
        </Text.p>
        <a
          onClick={props.onModalClick}
          style={{ margin: "2rem 0", width: "80%" }}
          className="primary"
        >
          Sign Up For a Free Consultation
        </a>
      </div>
      <div
        style={{
          position: "absolute",
          left: "55%",
          top: "685px"
        }}
      >
        <img
          style={{
            width: "500px"
          }}
          src="/images/resumes/resumes-details-1.jpeg"
        />
      </div>
    </StyledResumesSectionLeft>
    <StyledResumesSectionRight id="#brand">
      <Text.h3 m={0} lightbold>
        TEMPLATES DO NOT WORK
      </Text.h3>
      <Text.p style={{ minHeight: "100px", paddingRight: "2rem" }}>
        Your resume needs to showcase where you want to go, not just where you
        have been. Platforms like LinkedIn and Applicant Tracking Softwares are
        progressively relying on keywords to find qualified candidates. We
        research the jobs you want, so your resume can stand out in the eyes of
        the decision makers.
      </Text.p>
      <a
        onClick={props.onModalClick}
        style={{ margin: "2rem 0", width: "80%" }}
        className="primary"
      >
        Let's craft your resume!
      </a>
      <img
        style={{
          position: "absolute",
          width: "500px",
          right: "57%",
          top: "1190px"
        }}
        src="/images/resumes/resumes-details-2.jpeg"
      />
    </StyledResumesSectionRight>
    <StyledResumesSectionLeft id="#jobsearch">
      <Text.h3 m={0} lightbold>
        COVER LETTERS & MORE
      </Text.h3>
      <Text.p style={{ minHeight: "100px", paddingRight: "2rem" }}>
        We do not stop at the resume. We write professional and targeted cover
        letters for individualized job searching. Again, no templates here!
        Cover letters give you another opportunity to build your personal brand.
        We aim to mirror your LinkedIn, resume, and cover letter so you can hit
        the job searching with the tools necessary to be truly successful!
      </Text.p>
      <a
        onClick={props.onModalClick}
        style={{ margin: "2rem 0", width: "80%" }}
        className="primary"
      >
        Let's build your brand!
      </a>
      <img
        style={{
          position: "absolute",
          left: "55%",
          width: "450px",
          top: "1720px"
        }}
        src="/images/resumes/resumes-details-3.jpeg"
      />
      <img
        style={{
          position: "absolute",
          width: "150px",
          left: "77%",
          top: "1950px"
        }}
        src="/icons/linkedin-large.png"
      />
    </StyledResumesSectionLeft>
  </StyledDetailSection>
);

export default DesktopResumesDetailsComponent;
