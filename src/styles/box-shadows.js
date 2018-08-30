import { rgba } from "polished";
import { colors } from "./colors";

const shadows = {
  boundingElementShadow: `0px 0px 4px ${rgba(colors.black, 0.1)}`,
  buttonHoverShadow: `0 10px 30px ${rgba(colors.black, 0.14)}`,
  elevationShadows: [
    `0 3px 1px -2px  ${rgba(colors.black, 0.2)}`,
    `0 2px 2px 0 ${rgba(colors.black, 0.14)}`,
    `0 1px 5px 0 ${rgba(colors.black, 0.12)}`
  ],
  overlayShadow: `0 0 20px 1px ${rgba(colors.black, 0.5)};`,
  shadowedBoxElevation: [
    `0 2px 15px 0 ${rgba(colors.black, 0.2)}`,
    `0 0 4px 0 ${rgba(colors.black, 0.2)}`
  ]
};

export default shadows;
