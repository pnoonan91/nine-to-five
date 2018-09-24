import React from "react";

import AboutImageComponent from "./about-image-section/AboutImage";
import AboutMissionComponent from "./about-mission/AboutMission";
import AboutStoryComponent from "./about-story/AboutStory";

const About = props => (
  <div>
    <AboutImageComponent onModalClick={props.onModalClick}/>
    <AboutMissionComponent  />
    <AboutStoryComponent onModalClick={props.onModalClick} />
  </div>
);

export default About;
