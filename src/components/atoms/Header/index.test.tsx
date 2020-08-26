import React from "react";
import { Header } from "./index";
import renderer from "react-test-renderer";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Header", () => {
  it("should be rendered", () => {
    const tree = renderer.create(<Header as="h1">123</Header>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("check prop as by default", () => {
    const wrapper = shallow(<Header>123</Header>);
    expect(wrapper.exists("span")).toBe(true);
  });

  it("should be render children string", () => {
    const wrapper = shallow(<Header>123</Header>);
    expect(wrapper.find("span").text()).toStrictEqual("123");
  });

  it("check prop as", () => {
    const wrapper = shallow(<Header as="h1">123</Header>);
    expect(wrapper.exists("h1")).toBe(true);
  });

  it("render correct prop 'as' h1", () => {
    const wrapper = shallow(<Header as="h1">123</Header>);
    expect(wrapper.exists("h1")).toBe(true);
  });

  it("render correct prop 'as' h2", () => {
    const wrapper = shallow(<Header as="h2">123</Header>);
    expect(wrapper.exists("h2")).toBe(true);
  });

  it("render correct prop 'as' h3", () => {
    const wrapper = shallow(<Header as="h3">123</Header>);
    expect(wrapper.exists("h3")).toBe(true);
  });

  it("render correct prop 'as' h4", () => {
    const wrapper = shallow(<Header as="h4">123</Header>);
    expect(wrapper.exists("h4")).toBe(true);
  });

  it("render correct prop 'as' h5", () => {
    const wrapper = shallow(<Header as="h5">123</Header>);
    expect(wrapper.exists("h5")).toBe(true);
  });

  it("render correct prop 'as' h6", () => {
    const wrapper = shallow(<Header as="h6">123</Header>);
    expect(wrapper.exists("h6")).toBe(true);
  });

  it("component should be have class", () => {
    const wrapper = shallow(
      <Header as="h6" classStyle="asd">
        123
      </Header>
    );
    expect(wrapper.hasClass("asd")).toBe(true);
  });
});
