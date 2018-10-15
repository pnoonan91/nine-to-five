import React from "react";
import styled from "styled-components";
import { Flex } from "grid-styled";
import Text from "../text/Text";
import moment from "moment";

//
// --- Styled Components ---
const StyledMobileBlogEntriesContainer = styled(Flex)`
  margin: 2rem;
  flex-direction: column;
`;

const StyledArticleContainer = styled(Flex)`
  flex-direction: column;
  padding: 1rem;
  justify-content: space-around;
  background-color: white;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: ${props => props.theme.shadows.boundingElementShadow};
  border: 1px solid ${props => props.theme.colors.lightGray};
`;

const StyledThumbnail = styled.div`
  height: 150px;
  width: 150px;
  background-image: url(${props =>
    props.thumbnail || "images/landing-about-us/user-on-phone.jpg"});
  overflow: hidden;
  background-position: center;
  background-size: 300px;
  border-radius: 100px;
  margin: auto;
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
      href={props.link}
      target="_blank"
      style={{
        marginBottom: "0.5rem",
        paddingBottom: "0.5rem"
      }}
    >
      <StyledThumbnail thumbnail={props.thumbnail} />
    </a>
    <StyledArticleInfo>
      <a href={props.link} target="_blank">
        <Text.h5 lightbold color="#1c5d99">
          {props.title}
        </Text.h5>
      </a>
      <a href={props.link} target="_blank">
        <Text.p m={0}>
          {props.description.slice(
            props.description.indexOf("</figure>") + 12,
            props.description.indexOf("</figure>") + 212
          )}
          ...
        </Text.p>
      </a>
      <Text.p m={0}>
        Published on {moment(props.date).format("MMM D, YYYY")}
      </Text.p>
    </StyledArticleInfo>
  </StyledArticleContainer>
);

//
// --- Mobile Blog Entries Component ---
const MobileBlogEntries = props => (
  <StyledMobileBlogEntriesContainer>
    {props.stories.map(story => (
      <Article
        title={story.title}
        link={story.link}
        description={story.description}
        date={story.pubDate}
        thumbnail={story.thumbnail}
      />
    ))}
  </StyledMobileBlogEntriesContainer>
);

export default MobileBlogEntries;
