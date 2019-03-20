import React, { Component } from "react";
import styled from "styled-components";
import Text from "../text/Text";
import { breakpointMappings } from "../../styles";

//
// --- Styled Components ---
const StyledAboutBioComponent = styled.div`
  position: relative;
`;

const StyledAboutBioContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  flex-direction: column;

  ${breakpointMappings.lg} {
    flex-direction: row;
  }
`;

const StyledKyleImage = styled.img`
  width: 250px;
`;

const StyledText = styled(Text.p)`
  margin: 0;
  line-height: 30px;

  :hover {
    text-decoration: underline;
  }
`;

const StyledKyleNameText = styled(Text.h5)`
  margin: 0;
  line-height: 32px;
  color: ${props => props.theme.colors.primaryBlue};
`;

const StyledEmail = styled(Text.p)`
  margin: 0;

  :hover {
    text-decoration: underline;
  }
`;

const FounderContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin: auto;
`;

const StyledKyleSectionContainer = styled.div`
  margin-bottom: ${props => props.theme.space[4]}px;

  ${breakpointMappings.lg} {
    margin-right: 4rem;
    margin-bottom: 0;
  }
`;

//
// --- About Bio ---
const AboutBio = () => {
  return (
    <StyledAboutBioComponent>
      <StyledAboutBioContainer>
        <StyledKyleSectionContainer>
          <StyledKyleImage src="/images/kyle.jpeg" />
          <StyledKyleNameText semibold>
            <span style={{ fontWeight: "bold" }}>Kyle Kelly</span>
          </StyledKyleNameText>
          <StyledEmail>
            <i class="fas fa-envelope" />{" "}
            <a href="mailto:kyle@ninetofive.app">kyle@ninetofive.app</a>
          </StyledEmail>
          <StyledText>
            <i class="fab fa-linkedin" />{" "}
            <a href="https://www.linkedin.com/in/kyle-p-kelly/">LinkedIn</a>
          </StyledText>
        </StyledKyleSectionContainer>
        <FounderContainer>
          <Text.h4 semibold m={0}>
            Our Founder
          </Text.h4>
          <Text.p>
            After graduating with his Masters in Human Resource Management from
            Colorado State University, Kyle began his career in recruiting. He
            held roles as an Executive Recruiter and eventually led the campus
            recruiting efforts for a Fortune 500 company in Chicago. Over the
            past 2 years, Kyle has consulted with college students, helping them
            build their resumes, write cover letters, and assist with job
            searching. Through his consulting experience and various
            presentations on campus, he discovered his passion for fixing
            college recruiting. With Nine To Five, Kyle partners with companies
            big and small nationwide to streamline their collegiate recruiting
            efforts. Additionally, he partners with colleges and universities
            around the country, presenting to college students on the process of
            job searching and building their personal brand.
          </Text.p>
          <Text.p>
            Kyle lives in Chicago with his wife Catie and their beloved
            Goldendoodle, Charlie.
          </Text.p>
        </FounderContainer>
      </StyledAboutBioContainer>
    </StyledAboutBioComponent>
  );
};

export default AboutBio;
