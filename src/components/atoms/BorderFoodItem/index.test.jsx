import React from "react";
import { BorderFoodItem } from "./index";
import renderer from "react-test-renderer";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("BorderFoodItem", () => {
  it("should be rendered", () => {
    const tree = renderer.create(<BorderFoodItem />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
