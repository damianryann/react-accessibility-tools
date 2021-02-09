import React from "react";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { mount } from "enzyme";

import ImageElement from "./ImageElement";

Enzyme.configure({ adapter: new Adapter() });

it("mounts without crashing", () => {
  const component = mount(<ImageElement />);

  expect(component).toMatchSnapshot();
});

it("expect no changes when alt text is present", () => {
  const component = mount(
    <ImageElement src="../hello.png" alt="hello world" />
  );

  expect(component.find("img")).toHaveLength(1);
  expect(component.find("img").html()).toBe(
    `<img src="../hello.png" alt="hello world">`
  );

  expect(component).toMatchSnapshot();
});

it("expect role=presentation to be active when no alt text is provided", () => {
  const component = mount(<ImageElement src="../hello.png" alt="" />);

  expect(component.find("img")).toHaveLength(1);
  expect(component.find("img").html()).toBe(
    `<img src="../hello.png" role="presentation" alt="">`
  );

  expect(component).toMatchSnapshot();
});

it("expect aria hidden to be true if alt text is for SEO only", () => {
  const component = mount(
    <ImageElement src="../hello.png" alt="hello world" hideFromReader={true} />
  );

  expect(component.find("img")).toHaveLength(1);
  expect(component.find("img").html()).toBe(
    `<img src="../hello.png" alt="hello world" aria-hidden="true">`
  );

  expect(component).toMatchSnapshot();
});

it("classname and id is added to image element", () => {
  const component = mount(
    <ImageElement className="text-center" id="abc-123" />
  );

  expect(component.find("img").hasClass("text-center")).toBeTruthy();
  expect(component.find("#abc-123")).toBeTruthy();

  expect(component).toMatchSnapshot();
});

it("style can be added to image", () => {
  const component = mount(
    <ImageElement
      src="../hello.png"
      alt="hello world"
      style={{ backgroundColor: "#ffffff" }}
    />
  );

  expect(component.find("img")).toHaveLength(1);
  expect(component.find("img").html()).toBe(
    `<img src="../hello.png" style="background-color: rgb(255, 255, 255);" alt="hello world">`
  );

  expect(component).toMatchSnapshot();
});
