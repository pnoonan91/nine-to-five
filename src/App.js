import React, { Component } from "react";
import "./App.css";
import Header from "./components/layout/Header";
import LandingImageComponent from "./components/landing-image-section/LandingImage";
import LandingAboutUs from "./components/landing-about-us-section/LandingAboutUs";
import LandingOverviewIcons from "./components/landing-overview-icons/LandingOverviewIcons";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LandingImageComponent />
        <LandingOverviewIcons />
        <LandingAboutUs />
      </div>
    );
  }
}

export default App;
