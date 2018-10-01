import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Slider from "react-slick";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileLandingTestimonialsContainer = styled.div`
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
const MobileLandingTestimonials = props => (
  <StyledMobileLandingTestimonialsContainer>
    <Text.h2 m={0} pt={"2rem"} semibold>
      Our Clients Love Us
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
        <Testimonial
          image="/images/landing-testimonials/christine.jpeg"
          name="Christine B."
          testimonial="I can strongly stand behind this recommendation, as I was able to utilize Nine to Five to get into the
Predictive Analytics Master’s Program at Northwestern. It was through this process I was able to grasp
that not only was Kyle a skilled professional, but that he cared about the advancement of the people we
worked with. Additionally, as he worked with me to refresh my resume and prepare for interviews, I
recognized that his exceptional eye for detail would be an incredible asset for anyone looking to
advance their career."
          occupation="Consultant"
          company="Slalom Consulting"
          linkedIn="https://www.linkedin.com/in/christine-byron/"
        />
        <Testimonial
          image="/images/landing-testimonials/krystyn.jpeg"
          name="Krystyn A."
          testimonial="I would recommend Nine to Five to anyone who is struggling to find a career that truly fits their personality and lifestyle.  Kyle is genuinely interested in helping each and every person that comes to him.  He took the time to understand all the factors that I am considering when looking for a career.  He's professional, organized, easy to talk to, and is willing to help throughout the entire process.  Never once did I feel discouraged because Kyle was always there to give me the advice I needed to succeed!"
          occupation="Merchandiser"
          company="Chloe and Isabel"
          linkedIn="https://www.linkedin.com/in/krystyn-abbate-a698168b/"
        />
        <Testimonial
          image="/images/landing-testimonials/patrick.jpeg"
          name="Patrick N."
          testimonial="I loved working with Nine to Five. Every form of contact and communication was professional and punctual. You get to work with some very smart people who think outside of the box to help you accomplish your goals. I'd highly reccomend working with them!"
          occupation="Web Developer"
          company="HS2 Solutions"
          linkedIn="https://www.linkedin.com/in/pnoonan/"
        />
        <Testimonial
          image="/images/landing-testimonials/gabby.jpeg"
          name="Samantha M."
          testimonial="I absolutely loved working with Nine to Five and everything they have done for my career! I have gotten SO many compliments on my resume. Kyle was great to work with, my mom even ended up using him as she was looking to get back into the workplace. Working with a professional like Kyle was such a great experience as I did not learn these valuable interview and job searching skills while in college. Loved doing business with them and cannot say enough positive things!"
          occupation="Content & Advertising Manager"
          company="Guerrero Media Group"
          linkedIn="https://www.linkedin.com/in/samanthamcqueen/"
        />
      </Slider>
    </div>
  </StyledMobileLandingTestimonialsContainer>
);

export default MobileLandingTestimonials;
