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
  iter: number;
  classStyle?: string;
};

export const CatFoodItem: React.FC<CatFoodItemType> = ({
  item,
  iter = 0,
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

  const itemClickHandler = (
    e: React.MouseEvent<HTMLDivElement>,
    id: number | string
  ) => {
    setActuallyDescription(item.description.value);
    setProtect(true);
    clickHandler(e, id);
  };

  const buttonClickHandler = (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    id: number | string
  ) => {
    const button = e.target as HTMLButtonElement;
    if (button.closest("button") === null) return;
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
        role="checkbox"
        aria-checked={item.isActive}
        tabIndex={iter + 1}
      >
        <BorderFoodItem classStyle={style.border} />
        <div className={style.main}>
          <p
            aria-hidden="true"
            className={classNames(
              style.description,
              getDescriptionAnimationClass()
            )}
          >
            {actuallyDescription}
          </p>

          <div aria-hidden="true">
            <Header classStyle={style.title} as="h2">
              {item.title}
            </Header>
            <Header classStyle={style.subTitle}>{item.subTitle}</Header>
          </div>

          <div className={style.info} aria-hidden="true">
            <ul>
              {item.info.map((value, i) => (
                <li key={i}>{getReactNode(value)}</li>
              ))}
            </ul>
          </div>

          <div aria-hidden="true">
            <CirclePriceLabel
              classStyle={style.price}
              count={item.count.value}
              metric={item.count.metric}
            />
          </div>
        </div>

        <div className={style.srOnly}>
          <p>{item.fullDescription}</p>
          <p>Добавить в корзину нажатием enter</p>
          {
            <div role="status" aria-live="polite">
              <p aria-hidden={item.isActive}>Не добавлено</p>
              <p aria-hidden={!item.isActive}>Добавлено</p>
              <p aria-hidden={!item.disabled.value}>
                Не добавлено, корм закончился
              </p>
            </div>
          }
        </div>
      </div>
      <p
        aria-hidden="true"
        onClick={(e) => buttonClickHandler(e, item.id)}
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
