import styled from "styled-components";

const hidden = key => props =>
  props[key]
    ? {
        [props.theme.breakpointMappings[key]]: {
          display: "none"
        }
      }
    : null;

const xs = hidden("xs");
const sm = hidden("sm");
const md = hidden("md");
const lg = hidden("lg");

const HideBreakPoint = styled.span([], xs, sm, md, lg);

export default HideBreakPoint;
