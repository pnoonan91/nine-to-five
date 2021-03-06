import React from "react";
import styled from "styled-components";
import Text from "../text/Text";
import moment from "moment";

//
// --- Styled Components ---
const StyledDesktopBlogEntriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 2rem;
  flex-direction: column;
`;

const StyledArticleContainer = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-around;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

const StyledThumbnail = styled.div`
  height: 100px;
  width: 100px;
  background-image: url(${props =>
    props.thumbnail || "images/landing-about-us/user-on-phone.jpg"});
  overflow: hidden;
  background-position: center;
  background-size: 200px;
  border-radius: 50px;
  margin-right: 2rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
`;

const StyledArticleInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
`;

//
// --- Article Generator ---
const Article = props => {
  return (
    <StyledArticleContainer>
      <a
        style={{ minWidth: "100px", marginRight: "2rem" }}
        href={props.link}
        target="_blank"
      >
        <StyledThumbnail thumbnail={props.thumbnail} />
      </a>
      <StyledArticleInfo>
        <a href={props.link} target="_blank">
          <Text.h5 lightbold color="#1c5d99">
            {props.title}
          </Text.h5>
        </a>
        <Text.p m={0} style={{ flexWrap: "wrap" }}>
          {props.description.slice(0, 350)}
          ...
        </Text.p>
        <Text.p m={0}>
          Published on {moment(props.date).format("MMM D, YYYY")}
        </Text.p>
      </StyledArticleInfo>
    </StyledArticleContainer>
  );
};

//
// --- Desktop Blog Entries Component ---
const DesktopBlogEntries = props => (
  <StyledDesktopBlogEntriesContainer>
    {props.stories.map(story => (
      <Article
        title={story.title}
        link={story.link}
        description={story.description}
        date={story.pubDate}
        thumbnail={story.thumbnail}
      />
    ))}
  </StyledDesktopBlogEntriesContainer>
);

export default DesktopBlogEntries;
