import React from "react";
import { Main } from "./index";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { CatFoodList } from "../../components/organisms/CatFoodList";
import {
  disabledItem,
  toggleActiveItem,
  updateCollectionById,
} from "./reducers";

configure({ adapter: new Adapter() });

const mockItemInput = {
  id: 0,
  description: {
    value: "Сказочное заморское яство",
    alternative: "Котэ не одобряет?",
  },
  title: "Нямушка",
  subTitle: "c фуа-гра",
  count: {
    value: "0,5",
    metric: "кг",
  },
  info: ["<b>10</b> порций", "мышь в подарок"],
  isActive: false,
  disabled: {
    value: false,
    warn: "Печалька, с фуа-гра закончился.",
  },
  additional: {
    value: "Чего сидишь? Порадуй котэ, <a>купи</a>",
    alternative: "Печень утки разварная с артишоками.",
  },
  fullDescription:
      "Кошачий корм Нямушка 2 киллограмма, это 40 порций, 2 мыши в подарок",
};

describe("Main", () => {
  it("should be rendered", () => {
    const tree = renderer.create(<Main />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be have <CatFoodList>", () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find(CatFoodList)).toHaveLength(1);
  });

  it('should toggle field "isActive"', () => {
    expect(toggleActiveItem(mockItemInput)).toStrictEqual({
      ...mockItemInput,
      isActive: true,
    });
  });

  it('should toggle field "isActive" in item by id', () => {
    expect(
      updateCollectionById([mockItemInput], 0, toggleActiveItem)
    ).toStrictEqual([
      {
        ...mockItemInput,
        isActive: true,
      },
    ]);
  });

  it("should set disabled true in item by id", () => {
    expect(disabledItem(mockItemInput)).toStrictEqual({
      ...mockItemInput,
      disabled: { ...mockItemInput.disabled, value: true },
    });
  });
});
