import React, { Component } from "react";
import styled from "styled-components";
import DesktopBlogEntries from "./DesktopBlogEntries";

//
// --- Styled Components ---
const StyledBlogEntriesContainer = styled.div`
  margin-top: 67px;
  postition: relative;
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
        "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40patnoonan"
      )
      .then(result => result.json())
      .then(articles => {
        console.log(JSON.stringify(articles));
        this.setState({
          feed: articles.feed,
          stories: articles.items,
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
          <DesktopBlogEntries stories={this.state.stories} />
        )}
      </StyledBlogEntriesContainer>
    );
  }
}

export default BlogEntries;
