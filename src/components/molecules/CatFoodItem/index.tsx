import React, { useState } from "react";
import style from "./style.scss";
import { BorderFoodItem } from "../../atoms/BorderFoodItem";
import { Header } from "../../atoms/Header";
import { CirclePriceLabel } from "../../atoms/CirclePriceLabel";
import classNames from "classnames";
import { getReactNode } from "../../../utils/other";
import { CatFoodItemDataType, CatFoodItemEventClickType } from "./types";

export type CatFoodItemType = {
  item: CatFoodItemDataType;
  clickHandler: CatFoodItemEventClickType;
  classStyle?: string;
};

export const CatFoodItem: React.FC<CatFoodItemType> = ({
  item,
  clickHandler = () => {},
  classStyle = "",
}) => {
  const [actuallyDescription, setActuallyDescription] = useState(
    item.description.value
  );
  const [isMouseEnter, setMouseEnter] = useState(false);
  const [protectFirstAnimation, setProtect] = useState(true);

  const getActuallyClass = (active: boolean, disabled: boolean) => {
    return classNames(
      style.item,
      active && style.active,
      disabled && style.disabled
    );
  };

  const additionalContent = (isDisabled: boolean, isActive: boolean) => {
    if (isDisabled) return getReactNode(item.disabled.warn);
    if (isActive) return getReactNode(item.additional.alternative);
    return getReactNode(item.additional.value);
  };

  // sideEffects, animation description text controller
  const ANIMATION_DURATION = 200; //ms, hideShow animation

  const toggleMouseAction = () => setMouseEnter(!isMouseEnter);

  const getDescriptionAnimationClass = () =>
    isMouseEnter ? style.mouseEnter : style.mouseLeave;

  const itemClickHandler = (e: React.SyntheticEvent, id: number | string) => {
    setActuallyDescription(item.description.value);
    setProtect(true);
    clickHandler(e, id);
  };

  const linkClickHandler = (e: React.SyntheticEvent, id: number | string) => {
    if ((e.target as HTMLElement).closest("a") === null) return;
    e.preventDefault();
    setActuallyDescription(item.description.value);
    setProtect(true);
    clickHandler(e, id);
  };

  const mouseEnterHandler = () => {
    if (!item.isActive) return;
    setProtect(false);
    toggleMouseAction();
    setTimeout(
      () => setActuallyDescription(item.description.alternative),
      ANIMATION_DURATION
    );
  };

  const mouseLeaveHandler = () => {
    if (!item.isActive || protectFirstAnimation) return;
    toggleMouseAction();
    setTimeout(
      () => setActuallyDescription(item.description.value),
      ANIMATION_DURATION
    );
  };

  return (
    <div className={classNames(style.wrapper, classStyle)}>
      <div
        className={getActuallyClass(item.isActive, item.disabled.value)}
        onClick={(e) => itemClickHandler(e, item.id)}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <BorderFoodItem classStyle={style.border} />
        <div className={style.main}>
          <p
            className={classNames(
              style.description,
              getDescriptionAnimationClass()
            )}
          >
            {actuallyDescription}
          </p>
          <Header classStyle={style.title} as="h2">
            {item.title}
          </Header>
          <Header classStyle={style.subTitle}>{item.subTitle}</Header>
          <div className={style.info}>
            <ul>
              {item.info.map((value, i) => (
                <li key={i}>{getReactNode(value)}</li>
              ))}
            </ul>
          </div>
          <CirclePriceLabel
            classStyle={style.price}
            count={item.count.value}
            metric={item.count.metric}
          />
        </div>
      </div>
      <p
        onClick={(e) => linkClickHandler(e, item.id)}
        className={
          item.disabled.value
            ? classNames(style.additional, style.warn)
            : style.additional
        }
      >
        {additionalContent(item.disabled.value, item.isActive)}
      </p>
    </div>
  );
};
