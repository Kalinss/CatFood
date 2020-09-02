import React from "react";
import { CatFoodItem } from "./index";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

const mockDataDefault = {
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
const mockDataDisabled = {
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
  isActive: true,
  disabled: {
    value: true,
    warn: "Печалька, с фуа-гра закончился.",
  },
  additional: {
    value: "Чего сидишь? Порадуй котэ, <a>купи</a>",
    alternative: "Печень утки разварная с артишоками.",
  },
  fullDescription:
    "Кошачий корм Нямушка 2 киллограмма, это 40 порций, 2 мыши в подарок",
};
const mockDataActive = {
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
  isActive: true,
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

describe("CatFoodItem", () => {
  it("should be rendered", () => {
    const tree = renderer
      .create(
        <CatFoodItem iter={0} item={mockDataDefault} clickHandler={() => {}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be have prop class", () => {
    const wrapper = shallow(
      <CatFoodItem
        item={mockDataDefault}
        clickHandler={() => {}}
        classStyle={"123"}
        iter={0}
      />
    );
    expect(wrapper.hasClass("123")).toBe(true);
  });

  jest.useFakeTimers();

  it("should toggle alternative description info after mouseEnter and mouseLeave event", () => {
    const wrapper = shallow(
      <CatFoodItem iter={0} item={mockDataActive} clickHandler={() => {}} />
    );
    wrapper.find(".item").simulate("mouseEnter");
    jest.advanceTimersByTime(500);
    expect(wrapper.find(".description").text()).toStrictEqual(
      mockDataActive.description.alternative
    );
    wrapper.find(".item").simulate("mouseLeave");
    jest.advanceTimersByTime(500);
    expect(wrapper.find(".description").text()).toStrictEqual(
      mockDataActive.description.value
    );
  });

  it("should showed alternative additional after click", () => {
    const wrapper = shallow(
      <CatFoodItem iter={0} item={mockDataActive} clickHandler={() => {}} />
    );
    wrapper.simulate("click");
    jest.advanceTimersByTime(500);
    expect(wrapper.find(".additional").text()).toStrictEqual(
      mockDataActive.additional.alternative
    );
    wrapper.unmount();
  });

  it("should showed alternative value in additional field, for active component", () => {
    const wrapper = shallow(
      <CatFoodItem iter={0} item={mockDataActive} clickHandler={() => {}} />
    );
    expect(wrapper.find(".additional").text()).toStrictEqual(
      mockDataActive.additional.alternative
    );
  });

  it("should show warn text,if component is disabled", () => {
    const wrapper = shallow(
      <CatFoodItem iter={0} item={mockDataDisabled} clickHandler={() => {}} />
    );
    expect(wrapper.find(".additional").text()).toBe(
      mockDataDisabled.disabled.warn
    );
  });

  it("should have active class", () => {
    const wrapper = shallow(
      <CatFoodItem iter={0} item={mockDataActive} clickHandler={() => {}} />
    );
    expect(wrapper.find(".item").hasClass("active"));
  });
  it("should have disabled class", () => {
    const wrapper = shallow(
      <CatFoodItem iter={0} item={mockDataDisabled} clickHandler={() => {}} />
    );
    expect(wrapper.find(".item").hasClass("disabled"));
  });
});
