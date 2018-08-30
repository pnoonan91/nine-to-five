import React from "react";
import styled from "styled-components";
import {Flex} from 'grid-styled';

import DesktopOverviewIcon from "./DesktopOverviewIcon";
import MobileOverviewIcon from './MobileOverviewIcon';
import {breakpointMappings} from '../../styles'
import HideBreakPoint from '../layout/HideBreakPoint';

//
// --- Styled Components ---
const StyledLandingOverviewIcons = styled(Flex)`
    background-color: ${props => props.theme.colors.standardWhite}
    padding: 20px;
    flex-direction: column;

    ${breakpointMappings.md_up} {
        justify-content: space-around;
        flex-direction: row;
        padding: 40px;
    }
`;

const LandingOverviewIcons = props => {
  return (
    <div>
        <HideBreakPoint xs sm md>
        <StyledLandingOverviewIcons>
            <DesktopOverviewIcon imageSource="/icons/coach.png" title='Career Consulting' description='Our experienced Career Coaches will help you figure out where you want to go in your career and how to get tehre.'/>
            <DesktopOverviewIcon imageSource="/icons/search.png" title="Job Searching" description="Led by actual talent acquisition professionals, NinetoFive controls the job searching process for our customers so they can spend less time searching and more time working."/>
            <DesktopOverviewIcon imageSource="/icons/resume.png" title="Resume Building" description="Our acquisition specialists will help you create a actionable resume that will stand out and get you noticed. We'll take your resume from drab to fab."/>

        </StyledLandingOverviewIcons>
        </HideBreakPoint>
        <HideBreakPoint lg>
        <StyledLandingOverviewIcons>
            <MobileOverviewIcon imageSource="/icons/coach.png" title='Career Consulting' description='Our experienced Career Coaches will help you figure out where you want to go in your career and how to get tehre.'/>
            <MobileOverviewIcon imageSource="/icons/search.png" title="Job Searching" description="Led by actual talent acquisition professionals, NinetoFive controls the job searching process for our customers so they can spend less time searching and more time working."/>
            <MobileOverviewIcon imageSource="/icons/resume.png" title="Resume Building" description="Our acquisition specialists will help you create a actionable resume that will stand out and get you noticed. We'll take your resume from drab to fab."/>

        </StyledLandingOverviewIcons>
        </HideBreakPoint>
    </div>
  );
};

export default LandingOverviewIcons;
