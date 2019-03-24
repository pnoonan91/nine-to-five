import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";

import DesktopOverviewIcon from "./DesktopOverviewIcon";
import MobileOverviewIcon from "./MobileOverviewIcon";
import { breakpointMappings } from "../../styles";
import HideBreakPoint from "../layout/HideBreakPoint";

//
// --- Styled Components ---
const StyledLandingOverviewIcons = styled.div`
    display: flex;
    background-color: ${props => props.theme.colors.standardWhite}
    padding: 20px;
    flex-direction: column;

    ${breakpointMappings.md_up} {
        justify-content: space-around;
        flex-direction: row;
        padding: 25px;
    }
`;

const LandingOverviewIcons = props => {
  return (
    <div>
      <HideBreakPoint xs sm md>
        <StyledLandingOverviewIcons>
          <DesktopOverviewIcon
            imageSource={`/icons/${props.isCompanyPath ? "foam" : "coach"}.png`}
            title={
              props.isCompanyPath
                ? "QUALITY OVER QUANTITY"
                : "Career Consulting"
            }
            description={
              props.isCompanyPath
                ? "Our unique mix of executive recruiting strategies and on-campus ambassadors brings you the perfect candidate."
                : "Our experienced consultants will help you figure out where you want to go in your career and how to get there."
            }
          />
          <DesktopOverviewIcon
            imageSource={`/icons/${
              props.isCompanyPath ? "save-money" : "search"
            }.png`}
            title={props.isCompanyPath ? "COST REDUCTION" : "Job Searching"}
            description={
              props.isCompanyPath
                ? "Collegiate recruiting is costly and time consuming. Career fairs lack a true ROI. We pride ourselves on redefining how college recruiting is done, while saving companies thousands."
                : "Nine to Five controls the job searching process for our customers so they can spend less time searching."
            }
          />
          <DesktopOverviewIcon
            imageSource={`/icons/${
              props.isCompanyPath ? "speedometer" : "resume"
            }.png`}
            title={props.isCompanyPath ? "Time Saving" : "Resume Building"}
            description={
              props.isCompanyPath
                ? "Since we tailor our recruiting efforts for each individual client, you can rest assured knowing our team will bring you better, more qualified candidates, faster."
                : "You'll receive an actionable resume that will stand out and get you noticed. Your resume is your first impression, let's make it a good one."
            }
          />
        </StyledLandingOverviewIcons>
      </HideBreakPoint>
      <HideBreakPoint lg>
        <StyledLandingOverviewIcons>
          <MobileOverviewIcon
            imageSource={`/icons/${props.isCompanyPath ? "foam" : "coach"}.png`}
            title={
              props.isCompanyPath
                ? "QUALITY OVER QUANTITY"
                : "Career Consulting"
            }
            description={
              props.isCompanyPath
                ? "Our unique mix of executive recruiting strategies and on-campus ambassadors brings you the perfect candidate."
                : "Our experienced consultants will help you figure out where you want to go in your career and how to get there."
            }
          />
          <MobileOverviewIcon
            imageSource={`/icons/${
              props.isCompanyPath ? "save-money" : "search"
            }.png`}
            title={props.isCompanyPath ? "COST REDUCTION" : "Job Searching"}
            description={
              props.isCompanyPath
                ? "Collegiate recruiting is costly and time consuming. Career fairs lack a true ROI. We pride ourselves on redefining how college recruiting is done, while saving companies thousands."
                : "Nine to Five controls the job searching process for our customers so they can spend less time searching."
            }
          />
          <MobileOverviewIcon
            imageSource={`/icons/${
              props.isCompanyPath ? "speedometer" : "resume"
            }.png`}
            title={props.isCompanyPath ? "Time Saving" : "Resume Building"}
            description={
              props.isCompanyPath
                ? "Since we tailor our recruiting efforts for each individual client, you can rest assured knowing our team will bring you better, more qualified candidates, faster."
                : "You'll receive an actionable resume that will stand out and get you noticed. Your resume is your first impression, let's make it a good one."
            }
          />
        </StyledLandingOverviewIcons>
      </HideBreakPoint>
    </div>
  );
};

export default LandingOverviewIcons;
