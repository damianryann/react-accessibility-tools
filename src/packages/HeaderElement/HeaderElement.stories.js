import React from "react";

import HeaderElement from "./HeaderElement";
import "../../sass/index.scss";

export default { title: "HeaderElement" };

export const functionalHeader1 = () => (
  <HeaderElement isFunctional={true} value="h1" title="Functional Header 1" />
);
export const functionalHeader2 = () => (
  <HeaderElement isFunctional={true} value="h2" title="Functional Header 2" />
);
export const functionalHeader3 = () => (
  <HeaderElement isFunctional={true} value="h3" title="Functional Header 3" />
);
export const functionalHeader4 = () => (
  <HeaderElement isFunctional={true} value="h4" title="Functional Header 4" />
);
export const functionalHeader5 = () => (
  <HeaderElement isFunctional={true} value="h5" title="Functional Header 5" />
);
export const functionalHeader6 = () => (
  <HeaderElement isFunctional={true} value="h6" title="Functional Header 6" />
);
export const decorativeHeader1 = () => (
  <HeaderElement isFunctional={false} value="h1" title="Decorative Header 1" />
);
export const decorativeHeader2 = () => (
  <HeaderElement isFunctional={false} value="h2" title="Decorative Header 2" />
);
export const decorativeHeader3 = () => (
  <HeaderElement isFunctional={false} value="h3" title="Decorative Header 3" />
);
export const decorativeHeader4 = () => (
  <HeaderElement isFunctional={false} value="h4" title="Decorative Header 4" />
);
export const decorativeHeader5 = () => (
  <HeaderElement isFunctional={false} value="h5" title="Decorative Header 5" />
);
export const decorativeHeader6 = () => (
  <HeaderElement isFunctional={false} value="h6" title="Decorative Header 6" />
);
export const functional1WithClass = () => (
  <HeaderElement
    isFunctional={true}
    value="h1"
    title="Funcional Header 1 with 'text-center' class"
    className="text-center"
  />
);
export const decorative1WithClass = () => (
  <HeaderElement
    isFunctional={false}
    value="h1"
    title="Decorative Header 1 with 'text-center' class"
    className="text-center"
  />
);
export const functional1WithStyle = () => (
  <HeaderElement
    isFunctional={true}
    value="h1"
    title="Functional Header 1 with red inline color"
    style={{ color: "#EE4622" }}
  />
);
export const decorative1WithStyle = () => (
  <HeaderElement
    isFunctional={false}
    value="h1"
    title="Decoraive Header 1 with blue inline color"
    style={{ color: "#2159CF" }}
  />
);
