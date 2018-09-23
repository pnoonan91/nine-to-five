import React, { Component } from "react";
import { Flex } from "grid-styled";
import Modal from "react-modal";
import styled from "styled-components";
import { Route, Switch } from "react-router-dom";
import ReactLoading from "react-loading";

import "./App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Landing from "./components/landing";
import Text from "./components/text/Text";
import HowItWorks from "./components/howitworks";

//
// --- Styled Components ---
const StyledModalSection = styled(Flex)`
  flex-direction: column;
`;

const StyledCalendlySection = styled.div`
  width: 40%;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

const StyledTextSection = styled(Flex)`
  flex-direction: column;
  width: 55%;
`;

const StyledHowItWorksStepContainer = styled(Flex)``;

const StyledNumber = styled(Flex)`
  background-color: ${props => props.theme.colors.primaryGreen};
  color: white;
  min-height: 80px;
  min-width: 80px;
  border-radius: 50px;
  align-items: center;
  justify-content: space-around;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
`;

const StyledStepContent = styled(Flex)`
  flex-direction: column;
  align-items: top;
  height: 100%;
  margin-top: 0.5rem;
`;

const StyledLoadingDiv = styled(Flex)`
  margin-top: 67px;
  min-height: 50vh;
  padding: 6rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

//
// --- How It Works Generators ---
const HowItWorksStep = props => (
  <StyledHowItWorksStepContainer>
    <StyledNumber>
      <Text.h1 color="white" lightbold m={0}>
        {props.stepNumber}
      </Text.h1>
    </StyledNumber>
    <StyledStepContent>
      <Text.h5 lightbold m={0} color="#559a70">
        {props.stepTitle}
      </Text.h5>
      <Text.small m={0}>{props.stepContent}</Text.small>
    </StyledStepContent>
  </StyledHowItWorksStepContainer>
);

class App extends Component {
  state = {
    appLoading: true,
    modalIsOpen: false
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ appLoading: false });
      window.scrollTo(0, 0);
    }, 2000);
  }

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    return (
      <div>
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/patricknoonan"
          style={{ minWidth: "320px", height: "580px", display: "none" }}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={() => window.Calendly.initInlineWidgets()}
        >
          <StyledModalSection>
            <Flex justifyContent="space-between" mb={"1rem"}>
              <StyledCalendlySection>
                <div
                  class="calendly-inline-widget"
                  data-url="https://calendly.com/patricknoonan"
                  style={{ minWidth: "320px", height: "580px" }}
                />
              </StyledCalendlySection>
              <StyledTextSection>
                <Flex justifyContent="space-between">
                  <Text.h3 lightbold m={0}>
                    Schedule your free consultation
                  </Text.h3>
                  <i
                    style={{
                      cursor: "pointer",
                      fontSize: "30px",
                      color: "#1c5d99"
                    }}
                    onClick={() => this.toggleModal()}
                    class="far fa-window-close"
                  />
                </Flex>
                <Flex flexDirection="column">
                  <Text.p>
                    Use the form to your left to find a date and time that works
                    for you. We can't wait to help you find the job of your
                    dreams!
                  </Text.p>
                  <HowItWorksStep
                    stepNumber={1}
                    stepTitle="Sign up for free consultation"
                    stepContent="During this introductory call, we will discuss how Nine to Five can personalize the
                    process to fit your needs. We will discuss your career interests, your resume, cover
                    letter, and the potential challenges you are facing during your job/internship search."
                  />
                  <HowItWorksStep
                    stepNumber={2}
                    stepTitle="Build your brand"
                    stepContent="The first step in our process involves building your job searching brand. This includes
                    resume building, cover letter writing, and LinkedIn profile development all from actual
                    talent acquisition consultants. Additionally, you will have access to our Interview
                    Coaching Guide crafted by HR industry professionals."
                  />
                  <HowItWorksStep
                    stepNumber={3}
                    stepTitle="Job Searching"
                    stepContent="Sit back and let the jobs roll in, right to your phone. Nine to Five will send new
                    opportunities every week for you to review and apply. If preferred, Nine to Five will
                    apply for you! Additionally, we will provide updates on past applications &amp; interviews
                    that you have scheduled."
                  />
                  <HowItWorksStep
                    stepNumber={4}
                    stepTitle="Weekly Touchpoints & Continued Support"
                    stepContent="Every week, Nine to Five will schedule a call with you to discuss opportunities and offer
                    ongoing coaching/support/interview advice to keep your job searching on track!"
                  />
                  <HowItWorksStep
                    stepNumber={5}
                    stepTitle="Land the job!"
                    stepContent="Just do us a favor and act surprised when you get the offer."
                  />
                </Flex>
              </StyledTextSection>
            </Flex>
          </StyledModalSection>
        </Modal>
        <Header onModalClick={() => this.toggleModal()} />
        {this.state.appLoading ? (
          <StyledLoadingDiv>
            <ReactLoading
              type="spin"
              color="#1c5d99"
              height="200px"
              width="200px"
            />
            <Text.h5 lightbold style={{ marginTop: "2rem" }}>
              App Loading...
            </Text.h5>
          </StyledLoadingDiv>
        ) : (
          <Switch>
            <Route
              exact
              path="/"
              component={() => (
                <Landing onModalClick={() => this.toggleModal()} />
              )}
            />
            <Route
              exact
              path="/how-it-works"
              component={() => (
                <HowItWorks onModalClick={() => this.toggleModal()} />
              )}
            />
          </Switch>
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
