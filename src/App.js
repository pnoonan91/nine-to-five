import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import LandingImageComponent from "./components/landing-image-section/LandingImage";
import LandingOverviewIcons from "./components/landing-overview-icons/LandingOverviewIcons";
import LandingHowItWorksComponent from "./components/landing-how-it-works/LandingHowItWorks";
import LandingTestimonialsComponent from "./components/landing-testimonials/LandingTestimonials";
import LandingSubscriptionComponent from "./components/landing-subscription/LandingSubscription";
import LandingCompaniesComponent from "./components/landing-companies/LandingCompanies";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingImageComponent />
        <LandingOverviewIcons />
        <LandingHowItWorksComponent />
        <LandingTestimonialsComponent />
        <LandingSubscriptionComponent />
        <LandingCompaniesComponent />
      </div>
    );
  }
}

export default App;
