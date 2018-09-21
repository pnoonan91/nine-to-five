import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopLandingSubscriptionContainer = styled(Flex)`
    background-color: ${props => props.theme.colors.primaryGreen}
    min-heigh: 300px;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
`;

//
// --- Desktop Landing Subscription Component ---
const DesktopLandingSubscription = props => (
  <StyledDesktopLandingSubscriptionContainer>
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
    <a className="primary white" style={{ width: "180px", padding: "1rem;" }}>
      Let's Chat
    </a>
  </StyledDesktopLandingSubscriptionContainer>
);

export default DesktopLandingSubscription;
