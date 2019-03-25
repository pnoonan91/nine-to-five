import React, { Component } from "react";
import styled from "styled-components";

import DesktopBlogEntries from "./DesktopBlogEntries";
import HideBreakPoint from "../layout/HideBreakPoint";
import MobileBlogEntries from "./MobileBlogEntries";

//
// --- Styled Components ---
const StyledBlogEntriesContainer = styled.div`
  postition: relative;
  background-color: ${props => props.theme.colors.secondaryBlue};
  padding: 1rem;
`;

//
// --- Blog Entries Component ---
class BlogEntries extends Component {
  state = {
    isLoading: true,
    feed: {},
    stories: []
  };
  componentDidMount() {
    window
      .fetch(
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2Fnine-to-five&api_key=eyjhpuljxnboeccgmp3znduua3gp47du3mtqrbpc&count=100"
      )
      .then(result => result.json())
      .then(articles => {
        this.setState({
          feed: articles.feed,
          stories: articles.items.map(item => ({
            ...item,
            description: item.description.replace(/<(.|\n)*?>/g, ""),
            content: item.content.replace(/<(.|\n)*?>/g, "")
          })),
          isLoading: false
        });
      });
  }
  render() {
    return (
      <StyledBlogEntriesContainer>
        {this.state.isLoading ? (
          "Articles loading..."
        ) : (
          <div style={{ widht: "100%" }}>
            <HideBreakPoint xs sm md>
              <DesktopBlogEntries stories={this.state.stories} />
            </HideBreakPoint>
            <HideBreakPoint lg>
              <MobileBlogEntries stories={this.state.stories} />
            </HideBreakPoint>
          </div>
        )}
      </StyledBlogEntriesContainer>
    );
  }
}

export default BlogEntries;
