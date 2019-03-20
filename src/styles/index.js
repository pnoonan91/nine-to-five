import styledNormalize from "styled-normalize";
import * as styledComponents from "styled-components";
import { breakpoints, breakpointMappings } from "./sizes";
import theme from "./theme";
import { InterpolationValue } from "styled-components";

export const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents;

export { breakpoints, breakpointMappings, theme, InterpolationValue };

injectGlobal`
    ${styledNormalize};

    body {
        background: ${theme.colors.backgroundColor};
        color: ${theme.colors.tunaGray};
        font-family: ${theme.fonts.body};
        box-sizing: border-box;
    }

    a {
        color: ${theme.colors.tunaGray};
        margin: 0,
        vertical-align: baseline;
        text-decoration: none;
    }

    button.primary {
        background-color: ${theme.colors.primaryGreen};
        border: 1px solid ${theme.colors.primaryGreen};
        color: ${theme.colors.standardWhite};
        cursor: pointer;
        display: block;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1.2px;
        line-height: 13px;
        padding: 14px 20px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        transition: background-color .5s,border-color .5s,color .5s;

        :disabled {
            opacity: .5;
            cursor: no-drop;
        }

        ${breakpointMappings.sm_down} {
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 1px;
            padding: 7px 10px;
        }
    }
    a.primary {
        background-color: ${theme.colors.primaryGreen};
        border: 1px solid ${theme.colors.primaryGreen};
        color: ${theme.colors.standardWhite};
        cursor: pointer;
        display: block;
        font-size: 14px;
        font-style: normal;
        font-weight: 700;
        letter-spacing: 1.2px;
        line-height: 13px;
        padding: 14px 20px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        transition: background-color .5s,border-color .5s,color .5s;
        height: fit-content;

        ${breakpointMappings.sm_down} {
            font-size: 10px;
            font-weight: 500;
            letter-spacing: 1px;
            padding: 7px 10px;
        }
    }

    a.primary:hover {
        background-color: ${theme.colors.secondaryGreen};
        border-color: ${theme.colors.secondaryGreen};
    }

    a.primary.white {
        border: 2px solid ${theme.colors.secondaryWhite};
    }

    a.secondary {
        color: ${theme.colors.primaryGreen};
        font-weight: 600;
        cursor: pointer;
        text-transform: uppercase;
        font-size: 100%;
    }

    a.secondary:hover {
        color: ${theme.colors.secondaryGreen};
    }

    a.email-link {
        text-decoration: none;
    }

    a.email-link:hover {
        text-decoration: underline;
    }

    .shadow {
        text-shadow: 1px 1px 1px rgba(0,0,0,.25);
    }

    .ReactModal__Overlay {
        z-index: 100;
    }

    :focus {
        outline: none;
    }
`;
