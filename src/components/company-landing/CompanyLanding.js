import React, { Component } from "react";

import LandingImageComponent from "../landing-image-section/LandingImage";
import LandingOverviewIcons from "../landing-overview-icons/LandingOverviewIcons";
import LandingHowItWorksComponent from "../landing-how-it-works/LandingHowItWorks";
import LandingTestimonialsComponent from "../landing-testimonials/LandingTestimonials";
import LandingSubscriptionComponent from "../landing-subscription/LandingSubscription";
import LandingCompaniesComponent from "../landing-companies/LandingCompanies";

class CompanyLanding extends Component {
  render() {
    const location = window.location.pathname;
    console.log(location);
    return (
      <div style={{ width: "100%" }}>
        <LandingImageComponent
          isCompanyPath={location.indexOf("hire") > -1}
          onModalClick={this.props.onModalClick}
        />
        <LandingOverviewIcons isCompanyPath={location.indexOf("hire") > -1} />
        <LandingHowItWorksComponent
          isCompanyPath={location.indexOf("hire") > -1}
          onModalClick={this.props.onModalClick}
        />
        <LandingTestimonialsComponent
          isCompanyPath={location.indexOf("hire") > -1}
        />
        <LandingSubscriptionComponent
          isCompanyPath={location.indexOf("hire") > -1}
          onModalClick={this.props.onModalClick}
        />
        <LandingCompaniesComponent
          isCompanyPath={location.indexOf("hire") > -1}
          onModalClick={this.props.onModalClick}
        />
      </div>
    );
  }
}

export default CompanyLanding;
