import React from "react";

import ImageElement from "./ImageElement";

import img from "../../assets/images/react.png";
import "../../sass/index.scss";

export default { title: "ImageElement" };

export const withAltText = () => <ImageElement src={img} alt="React Logo" />;
export const withoutAltText = () => <ImageElement src={img} alt="" />;
export const withoutAltDecortative = () => (
  <ImageElement src={img} alt="React Logo" hideFromReader={true} />
);
export const withExtras = () => (
  <ImageElement
    src={img}
    alt="React Logo"
    className="text-center"
    id="abc-123"
    style={{ backgroundColor: "#101010", width: "10%" }}
  />
);
