import React from "react";

import AboutImageComponent from "./about-image-section/AboutImage";
import AboutMissionComponent from "./about-mission/AboutMission";
import AboutStoryComponent from "./about-story/AboutStory";
import AboutBio from "./about-bio/AboutBio";
import AboutAmbassadors from "./about-ambassadors/AboutAmbassadors";

const About = props => (
  <div>
    <AboutImageComponent onModalClick={props.onModalClick} />
    <AboutMissionComponent />
    <AboutStoryComponent onModalClick={props.onModalClick} />
    <AboutBio />
    <AboutAmbassadors />
  </div>
);

export default About;
