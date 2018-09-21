import React from "react";
import styled from "styled-components";
import { Box } from "grid-styled";

import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopOverviewIconContainer = styled(Box)`
  text-align: center;
  max-width: 350px;
`;

const StyledDesktopOverviewIconImage = styled.img`
  width: 85px;
`;

const DesktopOverviewIcon = props => {
  return (
    <StyledDesktopOverviewIconContainer>
      <StyledDesktopOverviewIconImage src={props.imageSource} />
      <Text.h5 m={"1rem"}>{props.title}</Text.h5>
      <Text.small>{props.description}</Text.small>
    </StyledDesktopOverviewIconContainer>
  );
};

export default DesktopOverviewIcon;
