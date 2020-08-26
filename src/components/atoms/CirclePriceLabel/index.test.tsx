import React from "react";
import { CirclePriceLabel } from "./index";
import renderer from "react-test-renderer";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("CirclePriceLabel", () => {
  it("should be rendered", () => {
    const tree = renderer
      .create(<CirclePriceLabel metric={"кг"} count="5" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("check prop count by default", () => {
    const CircleComponent = mount(<CirclePriceLabel />);
    expect(CircleComponent.find(".count").text()).toEqual("0");
  });

  it("check prop metric by default", () => {
    const CircleComponent = mount(<CirclePriceLabel />);
    expect(CircleComponent.find(".metric").text()).toEqual("кг");
  });

  it("component should be have class", () => {
    const CircleComponent = mount(<CirclePriceLabel classStyle={"asd"} />);
    CircleComponent.debug();
    expect(CircleComponent.find(".body").hasClass("asd")).toEqual(true);
  });
});
