import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import LandingImageComponent from "./components/landing-image-section/LandingImage";
import LandingOverviewIcons from "./components/landing-overview-icons/LandingOverviewIcons";
import LandingHowItWorksComponent from "./components/landing-how-it-works/LandingHowItWorks";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingImageComponent />
        <LandingOverviewIcons />
        <LandingHowItWorksComponent />
      </div>
    );
  }
}

export default App;
