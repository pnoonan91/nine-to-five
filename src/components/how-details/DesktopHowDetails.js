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

const StyledHowToSectionLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  flex-direction: column;
  padding: 4rem;
  margin-bottom: 6rem;
  width: 50%;
`;

const StyledHowToSectionRight = styled.div`
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
// --- Desktop How It Works Details Component ---
const DesktopHowDetailsComponent = props => (
  <StyledDetailSection>
    <StyledHowToSectionLeft id="#consultation">
      <div>
        <Text.h3 m={0} lightbold>
          Sign up for your free consultation
        </Text.h3>
        <Text.p style={{ minHeight: "100px", paddingRight: "2rem" }}>
          During this introductory call, we will discuss how Nine to Five can
          personalize the process to fit your needs. We will discuss your career
          interests, your resume, cover letter, and the potential challenges you
          are facing during your job/internship search.
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
          transform: "translateY(-2rem)"
        }}
      >
        <img
          style={{
            width: "500px"
          }}
          src="/images/how-it-works/how-it-works-consult.jpg"
        />
      </div>
    </StyledHowToSectionLeft>
    <StyledHowToSectionRight id="#brand">
      <Text.h3 m={0} lightbold>
        Build your brand
      </Text.h3>
      <Text.p style={{ minHeight: "100px", paddingRight: "2rem" }}>
        The first step in our process involves building your job searching
        brand. This includes resume building, cover letter writing, and LinkedIn
        profile development all from actual talent acquisition consultants.
        Additionally, you will have access to our Interview Coaching Guide
        crafted by HR industry professionals.
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
          width: "500px",
          right: "57%",
          transform: "translateY(-1rem)"
        }}
        src="/images/how-it-works/how-it-works-building-brand.jpg"
      />
      <img
        style={{
          position: "absolute",
          width: "150px",
          right: "65%",
          transform: "translateY(16rem)"
        }}
        src="/icons/linkedin-large.png"
      />
    </StyledHowToSectionRight>
    <StyledHowToSectionLeft id="#jobsearch">
      <Text.h3 m={0} lightbold>
        Job Searching
      </Text.h3>
      <Text.p style={{ minHeight: "100px", paddingRight: "2rem" }}>
        Sit back and let the jobs roll in, right to your phone. Nine to Five
        will send new opportunities every week for you to review and apply. If
        preferred, Nine to Five will apply for you! Additionally, we will
        provide updates on past applications &amp; interviews that you have
        scheduled.
      </Text.p>
      <a
        onClick={props.onModalClick}
        style={{ margin: "2rem 0", width: "80%" }}
        className="primary"
      >
        Leave the job search to us
      </a>
      <img
        style={{
          position: "absolute",
          left: "55%",
          width: "450px",
          transform: "translateY(-0.8rem)"
        }}
        src="/images/how-it-works/phone-stuff.png"
      />
    </StyledHowToSectionLeft>
    <StyledHowToSectionRight id="#support">
      <Text.h3 m={0} lightbold>
        Weekly Touchpoints & Continued Support
      </Text.h3>
      <Text.p style={{ minHeight: "100px", paddingRight: "2rem" }}>
        Every week, Nine to Five will schedule a call with you to discuss
        opportunities and offer ongoing coaching/support/interview advice to
        keep your job searching on track!
      </Text.p>
      <a
        onClick={props.onModalClick}
        style={{ margin: "2rem 0", width: "80%" }}
        className="primary"
      >
        Lets work together
      </a>
      <img
        style={{ position: "absolute", width: "450px", right: "58%" }}
        src="/images/how-it-works/go-for-it.jpg"
      />
    </StyledHowToSectionRight>
  </StyledDetailSection>
);

export default DesktopHowDetailsComponent;
