import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileHowHeader = styled(Flex)`
  align-items: center;
  flex-direction: column;
`;

const StyledStepsContainer = styled(Flex)`
  width: 100%;
  justify-content: space-around;
  flex-direction: column;
`;

const StyledStepFlexContainer = styled(Flex)`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  justify-content: space-evenly;
`;

const StyledNumber = styled(Flex)`
  background-color: ${props => props.theme.colors.primaryGreen};
  color: white;
  height: 50px;
  width: 50px;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

const StyledTitleContainer = styled.div`
  width: 75%;
  align-items: center;
  text-align: left;
`;

//
// -- Steps Generator ---
const HowItWorksSummaryStep = props => (
  <StyledStepFlexContainer>
    <StyledNumber>
      <Text.h3 color="white" lightbold style={{ margin: "0" }}>
        {props.stepNumber}
      </Text.h3>
    </StyledNumber>
    <StyledTitleContainer>
      <Text.h5 lightbold m={0}>
        {props.stepTitle}
      </Text.h5>
      <Text.p style={{ marginTop: "0" }}>{props.stepContent}</Text.p>
      <a
        onClick={props.onLinkClick}
        href={props.linkTarget}
        className="secondary"
      >
        {props.linkName} <i class="fas fa-chevron-down" />
      </a>
    </StyledTitleContainer>
  </StyledStepFlexContainer>
);

//
// --- How It Works Mobile Header ---
const MobileHowHeader = props => (
  <StyledMobileHowHeader>
    <Text.h4 lightbold style={{ marginBottom: "1rem" }}>
      How It Works
    </Text.h4>
    <StyledStepsContainer>
      <HowItWorksSummaryStep
        stepNumber={1}
        stepTitle="Free consultation"
        stepContent="Let's get to know each other!"
        linkName="About the consultation"
        linkTarget="#mobileConsultation"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={2}
        stepTitle="Build your brand"
        stepContent="We help you build your job searching brand."
        linkName="How we build a brand"
        linkTarget="#mobileBrand"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={3}
        stepTitle="Job Searching"
        stepContent="We search for and apply to jobs for you."
        linkName="How we search"
        linkTarget="#mobileJobsearch"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={4}
        stepTitle="Continued Support"
        stepContent="We provide continual support and weekly touch points."
        linkName="How we support"
        linkTarget="#mobileSupport"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={5}
        stepTitle="Land the job!"
        stepContent="Try not to act surprised when you get multiple offers!"
        linkName="Let's get started"
      />
    </StyledStepsContainer>
  </StyledMobileHowHeader>
);

export default MobileHowHeader;
