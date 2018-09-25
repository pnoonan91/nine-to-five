import React, { Component } from "react";

import LandingImageComponent from "./landing-image-section/LandingImage";
import LandingOverviewIcons from "./landing-overview-icons/LandingOverviewIcons";
import LandingHowItWorksComponent from "./landing-how-it-works/LandingHowItWorks";
import LandingTestimonialsComponent from "./landing-testimonials/LandingTestimonials";
import LandingSubscriptionComponent from "./landing-subscription/LandingSubscription";
import LandingCompaniesComponent from "./landing-companies/LandingCompanies";

class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%" }}>
        <LandingImageComponent onModalClick={this.props.onModalClick} />
        <LandingOverviewIcons />
        <LandingHowItWorksComponent onModalClick={this.props.onModalClick} />
        <LandingTestimonialsComponent />
        <LandingSubscriptionComponent onModalClick={this.props.onModalClick} />
        <LandingCompaniesComponent />
      </div>
    );
  }
}

export default Landing;
