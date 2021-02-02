import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

import HeaderElement from "./HeaderElement";

Enzyme.configure({ adapter: new Adapter() });

it("mounts without crashing", () => {
  const component = mount(<HeaderElement value="h2" />);

  expect(component).toMatchSnapshot();
});

it("output is a functional header 1 element", () => {
  const component = mount(
    <HeaderElement isFunctional={true} value="h1" title="Hello World" />
  );

  expect(component.find("h1")).toHaveLength(1);
  expect(component.find("h1").html()).toBe(`<h1>Hello World</h1>`);

  expect(component).toMatchSnapshot();
});

it("output is a decorational header 1 element", () => {
  const component = mount(
    <HeaderElement isFunctional={false} value="h1" title="Hello World" />
  );

  expect(component.find(".h1")).toHaveLength(1);
  expect(component.find(".h1").html()).toBe(
    `<div class="h1">Hello World</div>`
  );

  expect(component).toMatchSnapshot();
});

it("fallback takes over if value null", () => {
  const component = mount(
    <HeaderElement isFunctional={true} fallBack="h2" title="Hello World" />
  );

  expect(component.find("h2")).toHaveLength(1);
  expect(component.find("h2").html()).toBe(`<h2>Hello World</h2>`);

  expect(component).toMatchSnapshot();
});

it("classname and id is added to functional element", () => {
  const component = mount(
    <HeaderElement
      isFunctional={true}
      value="h2"
      fallBack="h1"
      title="Hello World"
      className="text-center"
      id="abc-123"
    />
  );

  expect(component.find("h2").hasClass("text-center")).toBeTruthy();
  expect(component.find("#abc-123")).toBeTruthy();

  expect(component).toMatchSnapshot();
});

it("classname and id is added to decorative element", () => {
  const component = mount(
    <HeaderElement
      isFunctional={false}
      value="h2"
      fallBack="h1"
      title="Hello World"
      className="text-center"
      id="abc-123"
    />
  );

  expect(component.find("div").hasClass("text-center")).toBeTruthy();
  expect(component.find("#abc-123")).toBeTruthy();

  expect(component).toMatchSnapshot();
});
