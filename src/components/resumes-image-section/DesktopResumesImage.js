import React from "react";
import styled from "styled-components";
import Text from "../text/Text";

//
// --- Styled Components ---
const StyledDesktopResumesImageComponent = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url("/images/resumes/resumes-header.jpeg");
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
const DesktopResumesImage = props => (
  <StyledDesktopResumesImageComponent>
    <div>
      <Text.h5
        lightbold
        className="shadow"
        style={{ margin: "auto", fontSize: "1.5rem", color: "white" }}
      >
        Resumes that get results.
      </Text.h5>
    </div>
    <div style={{ margin: "2rem" }}>
      <a onClick={props.onModalClick} className="primary">
        Let's Chat
      </a>
    </div>
  </StyledDesktopResumesImageComponent>
);

export default DesktopResumesImage;
