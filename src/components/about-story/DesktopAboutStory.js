import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopAboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  background-color: ${props => props.theme.colors.secondaryBlue};
`;

//
// --- Desktop About Us Story ---
const DesktopAboutStory = props => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      backgroundColor: "#c7d8ef"
    }}
  >
    <Text.h2 m={0} pt={"50px"} semibold style={{ textAlign: "center" }}>
      Our Story
    </Text.h2>
    <StyledDesktopAboutContainer>
      <div style={{ marginTop: "auto", marginBottom: "auto" }}>
        <Text.p>
          <span style={{ fontWeight: "bold" }}>
            Our story begins with Gaby.{" "}
          </span>
          In 2016, Gaby was a college sophomore studying in Florida and
          struggling to find quality internship opportunities for the summer.
          She had reached out to me, who was managing the Talent Acquisition
          team at a company in Chicago, for advice. As a friend of hers, I
          agreed to help her find something. I began by redesigning her resume
          into something I would like to see from an applicant. I then began
          searching for opportunities that she was interested in around the
          Chicago area (where she is from). Weekly, I sent her opportunities
          that I thought fit her interests. Throughout the process, Gaby came to
          me with interview advice, cover letter writing, email follow-up
          advice, salary negotiation advice, and general career advice.
          <br />
          <br />
          Since then, Gaby has held 3 internships found by Nine to Five staff
          and we are working to land her dream job after graduation in 2020. I
          quickly became flooded with requests to the effect of “Can you help me
          like you helped her?” And that is how Nine to Five was born. Since
          then, Gaby has held 3 internships found by Nine to Five staff and has
          landed her dream job in Miami beginning in the summer of 2019. After
          helping Gaby, I quickly became flooded with requests to the effect of
          “Can you help me like you helped her?” And that is how Nine to Five
          was born. Fast forward 2 years, Nine to Five now has ambassadors
          across 5 campuses, partners with companies big and small to hire their
          entry level talent, and travels the country teaching all things job
          searching and resume building.
        </Text.p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <a
            onClick={props.onModalClick}
            style={{ width: "50%", marginTop: "2rem", height: "15px" }}
            className="primary"
          >
            {props.isCompanyPath
              ? "Learn more about our story"
              : " Let us help you find your dream job!"}
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              transform: "translateX(10rem) translateY(-1rem)"
            }}
          >
            <Text.primaryHeader
              className="shadow"
              style={{
                transform: "rotate(-10deg)"
              }}
            >
              This is Gaby!
            </Text.primaryHeader>
            <img
              style={{
                width: "125px",
                margin: "auto",
                transform: "rotate(-25deg)"
              }}
              src="/images/about-us/arrow.png"
            />
          </div>
        </div>
      </div>
      <div style={{ marginRight: "4rem", marginLeft: "4rem" }}>
        <img width="300px" src="/images/about-us/gaby.jpg" />
      </div>
    </StyledDesktopAboutContainer>
  </div>
);

export default DesktopAboutStory;
