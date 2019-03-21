import React, { Component } from "react";
import styled from "styled-components";
import Text from "../text/Text";
import { breakpointMappings } from "../../styles";

//
// --- Styled Components ---
const StyledAboutAmbassadorsComponent = styled.div`
  position: relative;
`;

const StyledAboutAmbassadorsContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-between;
  flex-direction: column;
`;

const StyledAmbassadorsSection = styled.div`
  display: flex;
  align-content: stretch;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;

  ${breakpointMappings.lg} {
    flex-direction: row;
  }
`;
const StyledAmbassadorItem = styled.div`
  display: flex;
  width: 15%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid "#dedede";
  padding: 1rem;
`;

const StyledAmbassadorImage = styled.img`
  width: 150px;
  border-radius: 150px;
`;

const StyledText = styled(Text.p)`
  margin: 0;
  font-size: 12px;

  :hover {
    text-decoration: underline;
  }
`;

const StyledKyleNameText = styled(Text.h6)`
  margin: 0;
  margin-bottom: 4px;
  margin-top: 8px;
  color: ${props => props.theme.colors.primaryBlue};
`;

const StyledEmail = styled(Text.p)`
  margin: 0;
  font-size: 12px;

  :hover {
    text-decoration: underline;
  }
`;

const StyledTestimonialContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledTestimonial = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid "#dedede";
  padding: 1rem;
  margin: 2rem;
`;

//
// --- Ambassadors Spotlight ---
const AboutAmbassadors = () => {
  return (
    <StyledAboutAmbassadorsComponent>
      <StyledAboutAmbassadorsContainer>
        <Text.h4
          semibold
          m={0}
          style={{ textAlign: "center", marginBottom: "2rem" }}
        >
          Ambassador Spotlight
        </Text.h4>
        <StyledAmbassadorsSection>
          <StyledAmbassadorItem>
            <StyledAmbassadorImage src="/images/ambassadors/analise.jpeg" />
            <StyledKyleNameText semibold>
              <span style={{ fontWeight: "bold" }}>Analise Ostrowski</span>
            </StyledKyleNameText>
            <Text.p style={{ margin: 0, marginBottom: "12px" }}>
              Illinois State University
            </Text.p>
            <StyledEmail>
              <i class="fas fa-envelope" />{" "}
              <a href="mailto:analise@ninetofive.app">analise@ninetofive.app</a>
            </StyledEmail>
            <StyledText>
              <i class="fab fa-linkedin" />{" "}
              <a href="https://www.linkedin.com/in/analise-ostrowski-66574b15a/">
                LinkedIn
              </a>
            </StyledText>
          </StyledAmbassadorItem>
          <StyledAmbassadorItem>
            <StyledAmbassadorImage src="/images/ambassadors/brett.jpeg" />
            <StyledKyleNameText semibold>
              <span style={{ fontWeight: "bold" }}>Brett Lesch</span>
            </StyledKyleNameText>
            <Text.p style={{ margin: 0, marginBottom: "12px" }}>
              Purdue University
            </Text.p>
            <StyledEmail>
              <i class="fas fa-envelope" />{" "}
              <a href="mailto:brett@ninetofive.app">brett@ninetofive.app</a>
            </StyledEmail>
            <StyledText>
              <i class="fab fa-linkedin" />{" "}
              <a href="https://www.linkedin.com/in/brett-lesch/">LinkedIn</a>
            </StyledText>
          </StyledAmbassadorItem>
          <StyledAmbassadorItem>
            <StyledAmbassadorImage src="/images/ambassadors/angela.jpeg" />
            <StyledKyleNameText semibold>
              <span style={{ fontWeight: "bold" }}>Angela Torrey</span>
            </StyledKyleNameText>
            <Text.p style={{ margin: 0, marginBottom: "12px" }}>
              DePaul University
            </Text.p>
            <StyledEmail>
              <i class="fas fa-envelope" />{" "}
              <a href="mailto:angela@ninetofive.app">angela@ninetofive.app</a>
            </StyledEmail>
            <StyledText>
              <i class="fab fa-linkedin" />{" "}
              <a href="https://www.linkedin.com/in/angelatorrey/">LinkedIn</a>
            </StyledText>
          </StyledAmbassadorItem>
          <StyledAmbassadorItem>
            <StyledAmbassadorImage src="/images/ambassadors/maggie.jpeg" />
            <StyledKyleNameText semibold>
              <span style={{ fontWeight: "bold" }}>Maggie Podell</span>
            </StyledKyleNameText>
            <Text.p style={{ margin: 0, marginBottom: "12px" }}>
              University of Illinois
            </Text.p>
            <StyledEmail>
              <i class="fas fa-envelope" />{" "}
              <a href="mailto:maggie@ninetofive.app">maggie@ninetofive.app</a>
            </StyledEmail>
            <StyledText>
              <i class="fab fa-linkedin" />{" "}
              <a href="https://www.linkedin.com/in/maggie-podell/">LinkedIn</a>
            </StyledText>
          </StyledAmbassadorItem>
          <StyledAmbassadorItem>
            <StyledAmbassadorImage src="/images/ambassadors/john.jpeg" />
            <StyledKyleNameText semibold>
              <span style={{ fontWeight: "bold" }}>John Hennelly</span>
            </StyledKyleNameText>
            <Text.p style={{ margin: 0, marginBottom: "12px" }}>
              University of Iowa
            </Text.p>
            <StyledEmail>
              <i class="fas fa-envelope" />{" "}
              <a href="mailto:john@ninetofive.app">john@ninetofive.app</a>
            </StyledEmail>
            <StyledText>
              <i class="fab fa-linkedin" />{" "}
              <a href="https://www.linkedin.com/in/john-hennelly-295171128/">
                LinkedIn
              </a>
            </StyledText>
          </StyledAmbassadorItem>
        </StyledAmbassadorsSection>
      </StyledAboutAmbassadorsContainer>
    </StyledAboutAmbassadorsComponent>
  );
};

export default AboutAmbassadors;
