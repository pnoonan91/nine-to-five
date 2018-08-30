import React from "react";
import styled from "styled-components";
import { Box } from "grid-styled";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileOverviewIconContainer = styled(Box)`
  text-align: center;
  max-width: 250px;
  margin: 20px auto;
`;

const MobileOverviewIcon = props => {
  return (
    <StyledMobileOverviewIconContainer>
      <img src={props.imageSource} width="100px"/>
      <Text.h5>{props.title}</Text.h5>
      <Text.small>{props.description}</Text.small>
    </StyledMobileOverviewIconContainer>
  );
};

export default MobileOverviewIcon;
