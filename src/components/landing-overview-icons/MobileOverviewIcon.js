import React from "react";
import styled from "styled-components";
import { Box } from "grid-styled";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledMobileOverviewIconContainer = styled(Box)`
  text-align: center;
  max-width: 300px;
  margin: 10px auto;
`;

const MobileOverviewIcon = props => {
  return (
    <StyledMobileOverviewIconContainer>
      <img src={props.imageSource} width="80px" />
      <Text.h5 m={"0.25rem"}>{props.title}</Text.h5>
      <Text.small>{props.description}</Text.small>
    </StyledMobileOverviewIconContainer>
  );
};

export default MobileOverviewIcon;
