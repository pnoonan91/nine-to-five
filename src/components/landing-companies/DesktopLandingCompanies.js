import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";
import history from "../../history";

//
// --- Styled Components ---
const StyledDesktopLandingCompaniesContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
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
const DesktopLandingCompanies = props => {
  return (
    <StyledDesktopLandingCompaniesContainer>
      <Text.h2 id="#companies" m={0} pt={"50px"} semibold>
        {props.isCompanyPath
          ? "Our customers have worked at some awesome companies."
          : "Our Clients Get Hired At Awesome Companies"}
      </Text.h2>
      <StyledCompaniesImage
        style={{ width: "90%", height: "100%" }}
        src="/images/companies.png"
      />
      {!props.hideButton && (
        <StyledLandYourDreamJobButton>
          {!props.isCompanyPath ? (
            <a
              onClick={() => history.push("/how-it-works")}
              className="primary"
            >
              See How It Works
            </a>
          ) : (
            <a onClick={() => props.onModalClick()} className="primary">
              Find Your Next Hire
            </a>
          )}
        </StyledLandYourDreamJobButton>
      )}
    </StyledDesktopLandingCompaniesContainer>
  );
};

export default DesktopLandingCompanies;
