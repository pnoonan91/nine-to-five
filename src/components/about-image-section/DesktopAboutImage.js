import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopAboutImageComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url("/images/about-us/about-us-header.jpg");
  background-size: 100%;
  background-position: bottom;
  margin-top: 64px;
  height: 350px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: end;
`;

//
// --- Desktop About Us Image ---
const DesktopAboutImage = props => (
  <StyledDesktopAboutImageComponent>
    <div>
      <Text.h5
        lightbold
        className="shadow"
        style={{
          margin: "auto",
          fontSize: "1.5rem",
          color: "#1c5d99",
          marginTop: "3rem",
          marginLeft: "2rem",
          marginRight: "2rem"
        }}
      >
        {props.isCompanyPath
          ? "At Nine to Five, we believe there is a better way to better way to hire college & entry level talent"
          : "At Nine to Five, we believe there is a better way to job search."}
      </Text.h5>
    </div>
    <div style={{ margin: "2rem" }}>
      <a onClick={props.onModalClick} className="primary">
        Let's Chat
      </a>
    </div>
  </StyledDesktopAboutImageComponent>
);

export default DesktopAboutImage;
