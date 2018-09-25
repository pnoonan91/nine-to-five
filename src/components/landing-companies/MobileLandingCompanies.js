import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";
import history from "../../history";

//
// --- Styled Components ---
const StyledMobileLandingCompaniesContainer = styled(Flex)`
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
  margin-bottom: 1rem;
`;

//
// --- Mobile Landing Companies Component ---
const MobileLandingCompanies = props => (
  <StyledMobileLandingCompaniesContainer>
    <Text.h5 id="#companies" m={0} pt={"50px"} semibold>
      Our Clients Get Hired At Awesome Companies
    </Text.h5>
    <StyledCompaniesImage width="90%" src="/images/companies-mobile.png" />
    <StyledLandYourDreamJobButton>
      {!props.hideButton && (
        <a onClick={() => history.push("/how-it-works")} className="primary">
          See How It Works
        </a>
      )}
    </StyledLandYourDreamJobButton>
  </StyledMobileLandingCompaniesContainer>
);

export default MobileLandingCompanies;
