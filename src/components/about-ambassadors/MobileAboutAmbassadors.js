import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Slider from "react-slick";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileAboutAmbassadorsContainer = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledTestimonialContainer = styled(Flex)`
  justify-content: space-around;
`;

const StyledTestimonial = styled(Flex)`
  width: 25%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid ${props => props.theme.colors.lightGray};
  padding: 1rem;
  margin: 2rem;
`;

const StyledLinkedInImage = styled.img`
  width: 100px;
  border-radius: 50px;
  margin: auto;
`;

const StyledLinkedInLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: 1rem;
`;

const StyledTestimonialTextContainer = styled.div``;

const StyledAmbassadorItem = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border: 1px solid "#dedede";
`;

const StyledAmbassadorImage = styled.img`
  width: 150px;
  border-radius: 150px;
  margin: auto;
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

//
// --- Testimonial Generators ---
const Testimonial = props => (
  <div
    style={{
      paddingLeft: "3.5rem",
      paddingRight: "3.5rem",
      paddingTop: "1rem"
    }}
  >
    <StyledLinkedInImage src={props.image} />
    <Text.h3 lightbold m={0}>
      {props.name}
    </Text.h3>
    <StyledTestimonialTextContainer>
      <Text.p fontSize={1} m={0.5}>
        {props.testimonial}
      </Text.p>
    </StyledTestimonialTextContainer>
    <Text.h5 lightbold>{props.occupation}</Text.h5>
    <Text.small>{props.company}</Text.small>
    <StyledLinkedInLink
      style={{ paddingTop: "1rem" }}
      className="secondary"
      href={props.linkedIn}
    >
      LinkedIn
    </StyledLinkedInLink>
  </div>
);

//
// --- Mobile Landing Testimonials ---
const MobileAboutAmbassadors = props => (
  <StyledMobileAboutAmbassadorsContainer>
    <Text.h2 m={0} pt={"2rem"} semibold>
      Ambassador Spotlight
    </Text.h2>
    <Flex
      justifyContent="space-between"
      style={{
        position: "absolute",
        width: "100%",
        transform: "translateY(100px)"
      }}
    >
      <i
        style={{ color: "#1c5d99", fontSize: "50px" }}
        class="fas fa-angle-left"
      />
      <i
        style={{ color: "#1c5d99", fontSize: "50px" }}
        class="fas fa-angle-right"
      />
    </Flex>
    <div>
      <Slider
        arrows={false}
        dots
        infinite
        slidesToShow={1}
        slidesToScroll={1}
        speed={500}
      >
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
      </Slider>
    </div>
  </StyledMobileAboutAmbassadorsContainer>
);

export default MobileAboutAmbassadors;
