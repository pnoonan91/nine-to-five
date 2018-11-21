import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopLandingSubscriptionContainer = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.primaryGreen}
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

//
// --- Desktop Landing Subscription Component ---
const DesktopLandingSubscription = props => (
  <StyledDesktopLandingSubscriptionContainer>
    {!props.isResumePage ? (
      <div style={{ textAlign: "center" }}>
        <Text.h1 fontSize={8} color="white" className="shadow">
          $99/month
        </Text.h1>
        <br />
        <Text.h4 m={0} lightbold color="white" className="shadow">
          we work hard so that
        </Text.h4>
        <Text.h4 m={0} lightbold color="white" className="shadow">
          you find the job you love
        </Text.h4>
        <br />
        <a
          onClick={props.onModalClick}
          className="primary white"
          style={{ width: "180px", padding: "1rem;", margin: "auto" }}
        >
          Let's Chat
        </a>
      </div>
    ) : (
      <div style={{ textAlign: "center" }}>
        <Text.h4 m={0} lightbold color="white" className="shadow">
          Resumes starting at
        </Text.h4>
        <br />
        <Text.h1 fontSize={8} color="white" className="shadow">
          $75
        </Text.h1>
        <br />
        <a
          onClick={props.onModalClick}
          className="primary white"
          style={{ width: "180px", padding: "1rem;", margin: "auto" }}
        >
          Let's Chat
        </a>
      </div>
    )}
  </StyledDesktopLandingSubscriptionContainer>
);

export default DesktopLandingSubscription;
