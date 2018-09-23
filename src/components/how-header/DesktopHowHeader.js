import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopHowHeader = styled(Flex)`
  align-items: center;
  flex-direction: column;
`;

const StyledStepsContainer = styled(Flex)`
    width: 100%
  justify-content: space-around;
`;

const StyledStepFlexContainer = styled(Flex)`
  width: 18%;
  flex-direction: column;
  text-align: center;
`;

const StyledNumber = styled(Flex)`
  background-color: ${props => props.theme.colors.primaryGreen};
  color: white;
  height: 60px;
  width: 60px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-around;
  margin: auto;
`;

const StyledTitleContainer = styled.div`
  margin-top: 1rem;
  min-height: 40px;
  align-items: center;
`;

//
// -- Steps Generator ---
const HowItWorksSummaryStep = props => (
  <StyledStepFlexContainer>
    <StyledNumber>
      <Text.h1 color="white" lightbold m={0}>
        {props.stepNumber}
      </Text.h1>
    </StyledNumber>
    <StyledTitleContainer>
      <Text.h5 lightbold m={0}>
        {props.stepTitle}
      </Text.h5>
      <Text.p style={{ minHeight: "50px" }}>{props.stepContent}</Text.p>
      <a
        onClick={props.onLinkClick}
        href={props.linkTarget}
        className="secondary"
      >
        {props.linkName}
        <br />
        <i class="fas fa-chevron-down" />
      </a>
    </StyledTitleContainer>
  </StyledStepFlexContainer>
);

//
// --- How It Works Desktop Header ---
const DesktopHowHeader = props => (
  <StyledDesktopHowHeader>
    <StyledStepsContainer>
      <HowItWorksSummaryStep
        stepNumber={1}
        stepTitle="Free consultation"
        stepContent="Let's get to know each other!"
        linkName="About the consultation"
        linkTarget="#consultation"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={2}
        stepTitle="Build your brand"
        stepContent="We help you build your job searching brand."
        linkName="How we build a brand"
        linkTarget="#brand"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={3}
        stepTitle="Job Searching"
        stepContent="We search for and apply to jobs for you."
        linkName="How we search"
        linkTarget="#jobsearch"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={4}
        stepTitle="Continued Support"
        stepContent="We provide continual support and weekly touch points."
        linkName="How we support"
        linkTarget="#support"
        onLinkClick={props.onLinkClick}
      />
      <HowItWorksSummaryStep
        stepNumber={5}
        stepTitle="Land the job!"
        stepContent="Try not to act surprised when you get multiple offers!"
        linkName="Free Consultation"
      />
    </StyledStepsContainer>
  </StyledDesktopHowHeader>
);

export default DesktopHowHeader;
