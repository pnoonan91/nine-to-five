import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";
import moment from "moment";

//
// --- Styled Components ---
const StyledDesktopBlogEntriesContainer = styled(Flex)`
  margin: 2rem;
  flex-direction: column;
`;

const StyledArticleContainer = styled(Flex)`
  padding: 2rem;
  border-bottom: 1px solid ${props => props.theme.colors.tunaGray};
  justify-content: space-around;
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

const StyledArticleInfo = styled(Flex)`
  flex-direction: column;
`;

//
// --- Article Generator ---
const Article = props => (
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
      <Text.p m={0}>
        {props.description.slice(
          props.description.indexOf("<p>") + 3,
          props.description.indexOf("<p>") + 200
        )}
        ...
      </Text.p>
      <Text.p m={0}>
        Published on {moment(props.date).format("MMM D, YYYY")}
      </Text.p>
    </StyledArticleInfo>
  </StyledArticleContainer>
);

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
