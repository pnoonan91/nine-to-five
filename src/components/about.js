import React from "react";

import AboutImageComponent from "./about-image-section/AboutImage";
import AboutMissionComponent from "./about-mission/AboutMission";
import AboutStoryComponent from "./about-story/AboutStory";
import AboutBio from "./about-bio/AboutBio";
import AboutAmbassadors from "./about-ambassadors/AboutAmbassadors";
import HideBreakPoint from "./layout/HideBreakPoint";
import MobileAboutAmbassadors from "./about-ambassadors/MobileAboutAmbassadors";
import LandingSubscriptionComponent from "./landing-subscription/LandingSubscription";

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
    <LandingSubscriptionComponent
      isCompanyPath={window.location.pathname.indexOf("hire") > -1}
    />
  </div>
);

export default About;
