import React, { Component } from "react";
import styled from "styled-components";
import HideBreakPoint from "./HideBreakPoint";
import DesktopFooter from "./DesktopFooter";
import MobileFooter from "./MobileFooter";

//
// --- Styled Components ---
const StyledFooter = styled.div``;

//
// --- Footer Component ---
class Footer extends Component {
  state = {
    isLoading: true,
    story: {}
  };

  componentDidMount() {
    window
      .fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fnine-to-five"
      )
      .then(result => result.json())
      .then(articles => {
        this.setState({
          story: {
            title: articles.items[0].title,
            description: articles.items[0].description,
            image: articles.items[0].thumbnail,
            link: articles.items[0].link
          },
          isLoading: false
        });
      });
  }

  render() {
    return (
      <StyledFooter>
        {this.state.isLoading ? (
          "Fetching blog post..."
        ) : (
          <div>
            <HideBreakPoint xs sm md>
              <DesktopFooter blog={this.state.story} />
            </HideBreakPoint>
            <HideBreakPoint lg>
              <MobileFooter blog={this.state.story} />
            </HideBreakPoint>
          </div>
        )}
      </StyledFooter>
    );
  }
}

export default Footer;
