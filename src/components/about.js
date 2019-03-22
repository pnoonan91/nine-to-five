import React from "react";

import AboutImageComponent from "./about-image-section/AboutImage";
import AboutMissionComponent from "./about-mission/AboutMission";
import AboutStoryComponent from "./about-story/AboutStory";
import AboutBio from "./about-bio/AboutBio";
import AboutAmbassadors from "./about-ambassadors/AboutAmbassadors";
import HideBreakPoint from "./layout/HideBreakPoint";
import MobileAboutAmbassadors from "./about-ambassadors/MobileAboutAmbassadors";

const About = props => (
  <div>
    <AboutImageComponent onModalClick={props.onModalClick} />
    <AboutBio />
    <AboutStoryComponent onModalClick={props.onModalClick} />
    <HideBreakPoint xs sm md>
      <AboutAmbassadors />
    </HideBreakPoint>
    <HideBreakPoint lg>
      <MobileAboutAmbassadors />
    </HideBreakPoint>
  </div>
);

export default About;
