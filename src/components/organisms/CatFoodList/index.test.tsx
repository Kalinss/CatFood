import React from "react";
import { CatFoodList } from "./index";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CatFoodItem } from "../../molecules/CatFoodItem";
import { catFoodData } from "../../../mock/catFoodsDataMock";

configure({ adapter: new Adapter() });

describe("CatFoodList", () => {
  it("should be rendered", () => {
    const tree = renderer
      .create(<CatFoodList data={catFoodData} clickHandler={() => {}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should contain 3 CatFoodItem components", () => {
    const wrapper = shallow(
      <CatFoodList data={catFoodData} clickHandler={() => {}} />
    );
    expect(wrapper.find(CatFoodItem)).toHaveLength(3);
  });
});
