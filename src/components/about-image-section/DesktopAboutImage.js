import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopAboutImageComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url("/images/about-us/about-us-header.png");
  background-size: 100%;
  background-position: center;
  margin-top: 64px;
  height: 350px;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//
// --- Desktop About Us Image ---
const DesktopAboutImage = props => (
  <StyledDesktopAboutImageComponent>
    <div>
      <Text.h5
        lightbold
        className="shadow"
        style={{ margin: "auto", fontSize: "1.5rem", color: "#1c5d99" }}
      >
        At Nine to Five, we believe there is a better way to job search.
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
