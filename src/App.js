import React, { Component } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
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
import About from "./components/about";
import Privacy from "./components/privacy/Privacy";
import Blog from "./components/blog";
import Resumes from "./components/resumes";
import HideBreakPoint from "./components/layout/HideBreakPoint";
import history from "./history";
import Greeting from "./components/greeting-page/Greeting";
import { colors } from "./styles/colors";
import CompanyLanding from "./components/company-landing/CompanyLanding";

//
// --- Styled Components ---
const StyledModalSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledCalendlySection = styled.div`
  width: 40%;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid ${props => props.theme.colors.lightGray};
  height: fit-content;
  padding: 16px;
`;

const StyledMobileSection = styled.div`
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid ${props => props.theme.colors.lightGray};
  height: 80%;
`;

const StyledTextSection = styled(Flex)`
  flex-direction: column;
  width: 55%;
`;

const StyledHowItWorksStepContainer = styled.div`
  display: flex;
`;

const StyledNumber = styled.div`
  display: flex;
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

const StyledStepContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: top;
  height: 100%;
  margin-top: 0.5rem;
`;

const StyledLoadingDiv = styled.div`
  display: flex;
  margin-top: 67px;
  min-height: 50vh;
  padding: 6rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledInputField = styled.input`
  border-radius: 4px;
  padding: 8px;
  border: ;
  border: 1px solid grey;
  width: fill-available;
  margin-bottom: 16px;
`;

const StyledTextAreaField = styled.textarea`
  border-radius: 4px;
  padding: 8px;
  border: ;
  border: 1px solid grey;
  width: fill-available;
  height: 150px;
  resize: none;
  margin-bottom: 16px;
`;

const StyledErrorMessage = styled.div`
  transform: translateY(-12px);
  font-size: 12px;
  font-weight: bold;
  color: #d61212;
  margin-left: 8px;
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
    modalIsOpen: false,
    formIsSubmitting: false,
    submissionStatus: undefined
  };

  toggleModal = () => {
    this.setState({ modalIsOpen: !this.state.modalIsOpen });
  };

  render() {
    const isCompanyPath = window.location.pathname.indexOf("hire") > -1;
    return (
      <div>
        <div
          class="calendly-inline-widget"
          data-url="https://calendly.com/helloninetofive"
          style={{ maxWidth: "1px", maxHeight: "1px", display: "none" }}
        />
        <Modal isOpen={this.state.modalIsOpen}>
          <HideBreakPoint xs sm md>
            <StyledModalSection>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "1rem"
                }}
              >
                <StyledCalendlySection>
                  <Text.h1
                    style={{ marginBottom: "16px" }}
                    color={colors.primaryBlue}
                  >
                    Get In Touch
                  </Text.h1>
                  {!this.state.formIsSubmitting ? (
                    <Formik
                      initialValues={{ name: "", email: "", message: "" }}
                      validationSchema={Yup.object().shape({
                        name: Yup.string().required(
                          "Your name is a required field."
                        ),
                        email: Yup.string()
                          .email("Please enter a valid email address.")
                          .required("Email address is required."),
                        message: Yup.string().required(
                          "Please enter a message."
                        )
                      })}
                      validateOnBlur
                      onSubmit={async (values, actions) => {
                        this.setState({ formIsSubmitting: true });

                        var template_params = {
                          name: values.name,
                          email: values.email,
                          message: values.message
                        };

                        var service_id = "default_service";
                        var template_id = "contact_submission";

                        window.emailjs.send(
                          service_id,
                          template_id,
                          template_params
                        );
                      }}
                      render={props => (
                        <Form>
                          <Field
                            name="name"
                            id="name"
                            component={StyledInputField}
                            placeholder="Full Name"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          />
                          <ErrorMessage
                            name="name"
                            component={StyledErrorMessage}
                          />
                          <Field
                            type="email"
                            name="email"
                            id="email"
                            component={StyledInputField}
                            placeholder="Email Address"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          />
                          <ErrorMessage
                            name="email"
                            component={StyledErrorMessage}
                          />
                          <Field
                            name="message"
                            id="message"
                            component={StyledTextAreaField}
                            placeholder="How can we help you?"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                          />
                          <ErrorMessage
                            name="message"
                            component={StyledErrorMessage}
                          />
                          <button
                            disabled={
                              props.errors.name ||
                              props.errors.email ||
                              props.errors.message ||
                              !props.values.name ||
                              !props.values.email ||
                              !props.values.message
                            }
                            type="submit"
                            className="primary"
                          >
                            Submit
                          </button>
                        </Form>
                      )}
                    />
                  ) : (
                    <div>
                      Thanks for reaching out!
                      <br />
                      <br />
                      We will get back to you as soon as we can (typically
                      within 1 business day).
                    </div>
                  )}
                </StyledCalendlySection>
                <StyledTextSection>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
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
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Text.p>
                      Use the form to your left to find a date and time that
                      works for you. We can't wait to help you find the{" "}
                      {isCompanyPath
                        ? "perfect candidate"
                        : "job ofyour dreams"}
                      !
                    </Text.p>
                    <HowItWorksStep
                      stepNumber={1}
                      stepTitle="Sign up for free consultation"
                      stepContent={
                        isCompanyPath
                          ? "During this introductory call, we will discuss how Nine to Five can personalize the process to fit your needs. We will discuss your current openings, your organizational culture, and potential challenges you are facing during your recruiting process."
                          : "During this introductory call, we will discuss how Nine to Five can personalize the process to fit your needs. We will discuss your career interests, your resume, cover letter, and the potential challenges you are facing during your job/internship search."
                      }
                    />
                    <HowItWorksStep
                      stepNumber={2}
                      stepTitle={
                        isCompanyPath
                          ? "Let the recruiting begin!"
                          : "Build your brand"
                      }
                      stepContent={
                        isCompanyPath
                          ? "Let Nine to Five do what we do best, bring you the best candidates for your openings. Our unique mix of on-campus ambassadors to promote your roles throughout campus and our executive recruiting methods will bring you qualified candidates, faster!"
                          : "The first step in our process involves building your job searching brand. This includes resume building, cover letter writing, and LinkedIn profile development all from actual talent acquisition consultants. Additionally, you will have access to our Interview Coaching Guide crafted by HR industry professionals."
                      }
                    />
                    <HowItWorksStep
                      stepNumber={3}
                      stepTitle={
                        isCompanyPath
                          ? "Land the perfect new hire!"
                          : "Job Searching"
                      }
                      stepContent={
                        isCompanyPath
                          ? "Just do us a favor and act surprised when you hire the perfect candidate!"
                          : "Sit back and let the jobs roll in, right to your phone. Nine to Five will send new opportunities every week for you to review and apply. If preferred, Nine to Five will apply for you! Additionally, we will provide updates on past applications &amp; interviews that you have scheduled."
                      }
                    />
                    {!isCompanyPath && (
                      <div>
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
                      </div>
                    )}
                  </div>
                </StyledTextSection>
              </div>
            </StyledModalSection>
          </HideBreakPoint>
          <HideBreakPoint lg>
            <div
              style={{ textAlign: "right", marginBottom: "0.5rem" }}
              onClick={() => this.toggleModal()}
            >
              <i
                style={{
                  cursor: "pointer",
                  fontSize: "30px",
                  color: "#1c5d99"
                }}
                class="far fa-window-close"
              />
            </div>
            <StyledMobileSection>
              <div
                class="calendly-inline-widget"
                data-url="https://calendly.com/helloninetofive"
                style={{ width: "100%", height: "100%" }}
              />
            </StyledMobileSection>
            <a
              className="primary"
              style={{ marginTop: "2rem" }}
              onClick={() => {
                this.toggleModal();
                history.push("/how-it-works");
              }}
            >
              See How It Works
            </a>
          </HideBreakPoint>
        </Modal>
        <Header onModalClick={() => this.toggleModal()} />
        {
          <Switch>
            <Route exact path="/" component={() => <Greeting />} />
            <Route
              exact
              path="/search"
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
            <Route
              exact
              path="/resumes"
              component={() => (
                <Resumes onModalClick={() => this.toggleModal()} />
              )}
            />
            <Route
              exact
              path="/about"
              component={() => (
                <About onModalClick={() => this.toggleModal()} />
              )}
            />
            <Route
              exact
              path="/hire/about"
              component={() => (
                <About onModalClick={() => this.toggleModal()} />
              )}
            />
            <Route
              exact
              path="/blog"
              component={() => <Blog onModalClick={() => this.toggleModal()} />}
            />
            <Route
              exact
              path="/hire/blog"
              component={() => <Blog onModalClick={() => this.toggleModal()} />}
            />

            <Route
              exact
              path="/hire"
              component={() => (
                <CompanyLanding onModalClick={() => this.toggleModal()} />
              )}
            />

            <Route
              exact
              path="/privacy"
              component={() => (
                <Privacy />
              )}
            />
          </Switch>
        }

        <Footer />
      </div>
    );
  }
}

export default App;
