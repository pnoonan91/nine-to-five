import React from "react";
import ResumesImageComponent from "./resumes-image-section/ResumesImage";
import ResumeCaptionComponent from "./resumes-caption/ResumesCaption";
import ResumesDetailsComponent from "./resumes-details/ResumesDetails";
import LandingSubscriptionComponent from "./landing-subscription/LandingSubscription";
import LandingCompaniesComponent from "./landing-companies/LandingCompanies";

const Resumes = props => (
  <div>
    <ResumesImageComponent onModalClick={props.onModalClick} />
    <ResumeCaptionComponent />
    <ResumesDetailsComponent onModalClick={props.onModalClick} />
    <LandingSubscriptionComponent
      isResumePage
      onModalClick={props.onModalClick}
    />
    <LandingCompaniesComponent hideButton />
  </div>
);

export default Resumes;
