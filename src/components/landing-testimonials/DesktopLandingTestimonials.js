import React from "react";
import styled from "styled-components";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopLandingTestimonialsContainer = styled.div`
  text-align: center;
`;

const StyledTestimonialContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledTestimonial = styled.div`
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  text-align: center;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid "#dedede";
  padding: 1rem;
  margin: 2rem;
`;

const StyledLinkedInImage = styled.img`
  width: 100px;
  border-radius: 50px;
  margin: 1rem;
`;

const StyledLinkedInLink = styled.a`
  text-decoration: none;
  cursor: pointer;
  margin: 1rem;
`;

const StyledTestimonialTextContainer = styled.div`
  width: 100%;
  min-height: 336px;
`;

//
// --- Testimonial Generators ---
const Testimonial = props => (
  <StyledTestimonial>
    <StyledLinkedInImage src={props.image} />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%"
      }}
    >
      <div>
        <Text.h3 lightbold m={0}>
          {props.name}
        </Text.h3>
        <StyledTestimonialTextContainer>
          <Text.p fontSize={1} m={0.5}>
            {props.testimonial}
          </Text.p>
        </StyledTestimonialTextContainer>
      </div>
      <div style={{ width: "100%" }}>
        <Text.h5 lightbold style={{ marginBottom: "1rem" }}>
          {props.occupation}
        </Text.h5>
        <StyledLinkedInLink className="secondary" href={props.linkedIn}>
          LinkedIn
        </StyledLinkedInLink>
      </div>
    </div>
  </StyledTestimonial>
);

//
// --- Desktop Landing Testimonials ---
const DesktopLandingTestimonials = props => (
  <StyledDesktopLandingTestimonialsContainer>
    <Text.h2 m={0} pt={"50px"} semibold>
      Our Clients Love Us
    </Text.h2>
    <StyledTestimonialContainer>
      <Testimonial
        image={`/images/landing-testimonials/${
          props.isCompanyPath ? "cheryl.png" : "christine.jpeg"
        }`}
        name={props.isCompanyPath ? "Cheryl W." : "Christine B."}
        testimonial={
          props.isCompanyPath
            ? "Kyle at Nine to Five is among the most talented talent acquisition professional with whom I've ever interacted. Dedicated to understanding the role and identifying the right candidates that will be successful, Kyle is a partner to both hiring manager and candidates. He moves fast too, great for both of us, working hard to make the right match! I was able to partner with Nine to Five and they were able to significantly increased the caliber of Marketing interns during my search. I recommend everyone to reach out to Kyle and Nine to Five to find more targeted, quality interns and recent graduates!"
            : "I can strongly stand behind this recommendation, as I was able to utilize Nine to Five to get into the Predictive Analytics Master’s Program at Northwestern. It was through this process I was able to grasp that not only was Kyle a skilled professional, but that he cared about the advancement of the people we worked with. Additionally, as he worked with me to refresh my resume and prepare for interviews, I recognized that his exceptional eye for detail would be an incredible asset for anyone looking to advance their career."
        }
        occupation={props.isCompanyPath ? "Ecommerce Marketing" : "Consultant"}
        company={props.isCompanyPath ? "ACCO Brands" : "Slalom Consulting"}
        linkedIn={
          props.isCompanyPath
            ? "https://www.linkedin.com/in/cherylwittenstein/"
            : "https://www.linkedin.com/in/christine-byron/"
        }
      />
      <Testimonial
        image={`/images/landing-testimonials/${
          props.isCompanyPath ? "chad" : "krystyn"
        }.jpeg`}
        name={props.isCompanyPath ? "Chad H." : "Krystyn A."}
        testimonial={
          props.isCompanyPath
            ? "The best compliment you can provide someone is to express how much you learned from them, rather than the other way around. Kyle has a firm grasp of the candidate experience and will bend over backward to make a candidate feel they are valued throughout the recruitment process. Nine to Five has an excellent future ahead of them."
            : "I would recommend Nine to Five to anyone who is struggling to find a career that truly fits their personality and lifestyle.  Kyle is genuinely interested in helping each and every person that comes to him.  He took the time to understand all the factors that I am considering when looking for a career.  He's professional, organized, easy to talk to, and is willing to help throughout the entire process.  Never once did I feel discouraged because Kyle was always there to give me the advice I needed to succeed!"
        }
        occupation={
          props.isCompanyPath
            ? "Director, Global Talent Operations & Planning"
            : "Merchandiser"
        }
        company={props.isCompanyPath ? "ACCO Brands" : "Chloe and Isabel"}
        linkedIn={
          props.isCompanyPath
            ? "https://www.linkedin.com/in/chadharcus/"
            : "https://www.linkedin.com/in/krystyn-abbate-a698168b/"
        }
      />
      <Testimonial
        image={`/images/landing-testimonials/${
          props.isCompanyPath ? "amber" : "patrick"
        }.jpeg`}
        name={props.isCompanyPath ? "Amber F." : "Patrick N."}
        testimonial={
          props.isCompanyPath
            ? "We recently partnered with Nine to Five to help fill one of our open Sales Intern positions. Within a day, Kyle already had a quality candidate for us to speak with. Nine to Five creates a no pressure environment with easy collaboration. I felt they really listened to our needs and provided a candidate that was spot on for what we were looking for!"
            : "I loved working with Nine to Five. Every form of contact and communication was professional and punctual. You get to work with some very smart people who think outside of the box to help you accomplish your goals. I'd highly reccomend working with them!"
        }
        occupation={props.isCompanyPath ? "Recruiter" : "Web Developer"}
        company={props.isCompanyPath ? "Club Automation" : "Bounteous"}
        linkedIn={
          props.isCompanyPath
            ? "https://www.linkedin.com/in/amberfeldkamp/"
            : "https://www.linkedin.com/in/pnoonan/"
        }
      />
      <Testimonial
        image="/images/landing-testimonials/gabby.jpeg"
        name="Samantha M."
        testimonial="I absolutely loved working with Nine to Five and everything they have done for my career! I have gotten SO many compliments on my resume. Kyle was great to work with, my mom even ended up using him as she was looking to get back into the workplace. Working with a professional like Kyle was such a great experience as I did not learn these valuable interview and job searching skills while in college. Loved doing business with them and cannot say enough positive things!"
        occupation="Content & Advertising Manager"
        company="Guerrero Media Group"
        linkedIn="https://www.linkedin.com/in/samanthamcqueen/"
      />
    </StyledTestimonialContainer>
  </StyledDesktopLandingTestimonialsContainer>
);

export default DesktopLandingTestimonials;
