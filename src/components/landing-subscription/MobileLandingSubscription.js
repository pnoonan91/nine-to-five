import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileLandingSubscriptionContainer = styled(Flex)`
    background-color: ${props => props.theme.colors.primaryGreen}
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    text-align: center
`;

//
// --- Mobile Landing Subscription Component ---
const MobileLandingSubscription = props => (
  <StyledMobileLandingSubscriptionContainer>
    {!props.isResumePage ? (
      <div>
        {!props.isCompanyPath && (
          <div>
            <Text.h2 fontSize={8} color="white" className="shadow">
              $99/month
            </Text.h2>
            <br />
          </div>
        )}
        <Text.h6 m={0} lightbold color="white" className="shadow">
          {props.isCompanyPath
            ? "Our goal is to change the way in which"
            : "we work hard so that"}
        </Text.h6>
        <Text.h6 m={1} lightbold color="white" className="shadow">
          {props.isCompanyPath
            ? "companies hire interns & recent graduates."
            : "you find the job you love"}
        </Text.h6>
        <a
          onClick={props.onModalClick}
          className="primary white"
          style={{ width: "200px", padding: "0.5rem;", margin: "auto" }}
        >
          Let's Chat
        </a>
      </div>
    ) : (
      <div>
        <Text.h6 m={0} lightbold color="white" className="shadow">
          Resumes starting at
        </Text.h6>
        <Text.h2 m={1} fontSize={6} color="white" className="shadow">
          $75
        </Text.h2>
        <a
          onClick={props.onModalClick}
          className="primary white"
          style={{ width: "200px", padding: "0.5rem;", margin: "auto" }}
        >
          Let's Chat
        </a>
      </div>
    )}
  </StyledMobileLandingSubscriptionContainer>
);

export default MobileLandingSubscription;
