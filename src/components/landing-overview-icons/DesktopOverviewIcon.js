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

const DesktopOverviewIcon = props => {
  return (
    <StyledDesktopOverviewIconContainer>
      <img src={props.imageSource} />
      <Text.h3>{props.title}</Text.h3>
      <Text.p>{props.description}</Text.p>
    </StyledDesktopOverviewIconContainer>
  );
};

export default DesktopOverviewIcon;
