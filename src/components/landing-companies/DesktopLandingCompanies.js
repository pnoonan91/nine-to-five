import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";
import history from "../../history";

//
// --- Styled Components ---
const StyledDesktopLandingCompaniesContainer = styled(Flex)`
  flex-direction: column;
  text-align: center;
  align-items: center;
`;

const StyledLandYourDreamJobButton = styled.div`
  width: 45%;
  margin: auto;
  padding-bottom: 2rem;
`;

const StyledCompaniesImage = styled.img`
  margin: 2rem;
`;

//
// --- Desktop Landing Companies Component ---
const DesktopLandingCompanies = props => (
  <StyledDesktopLandingCompaniesContainer>
    <Text.h2 id="#companies" m={0} pt={"50px"} semibold>
      Our Clients Get Hired At Awesome Companies
    </Text.h2>
    <StyledCompaniesImage width="70%" src="/images/companies.png" />
    <StyledLandYourDreamJobButton>
      {!props.hideButton && (
        <a onClick={() => history.push("/how-it-works")} className="primary">
          See How It Works
        </a>
      )}
    </StyledLandYourDreamJobButton>
  </StyledDesktopLandingCompaniesContainer>
);

export default DesktopLandingCompanies;
