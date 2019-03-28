import React from "react";

import HowImageComponent from "./how-image-section/HowImage";
import HowHeaderComponent from "./how-header/HowHeader";
import HowDetailsComponent from "./how-details/HowDetails";
import LandingSubscriptionComponent from "./landing-subscription/LandingSubscription";
import LandingCompaniesComponent from "./landing-companies/LandingCompanies";

export const scrollOnClick = element => {
  let startingY = window.pageYOffset;
  let elementY =
    window.pageYOffset +
    document.getElementById(element.target.hash).getBoundingClientRect().top -
    100;
  let targetY =
    document.body.scrollHeight - elementY < window.innerHeight
      ? document.body.scrollHeight - window.innerHeight
      : elementY;
  let diff = targetY - startingY;
  let easing = function(t) {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };
  let start;

  if (!diff) return;

  window.requestAnimationFrame(function step(timestamp) {
    if (!start) start = timestamp;

    let time = timestamp - start;
    const duration = 1000;
    let percent = Math.min(time / duration, 1);
    percent = easing(percent);

    window.scrollTo(0, startingY + diff * percent);

    if (time < duration) {
      window.requestAnimationFrame(step);
    }
  });
};

const HowItWorks = props => (
  <div>
    <HowImageComponent />
    <HowHeaderComponent
      onLinkClick={scrollOnClick}
      onModalClick={props.onModalClick}
    />
    <HowDetailsComponent onModalClick={props.onModalClick} />
    <LandingSubscriptionComponent onModalClick={props.onModalClick} />
    <LandingCompaniesComponent hideButton />
  </div>
);

export default HowItWorks;
