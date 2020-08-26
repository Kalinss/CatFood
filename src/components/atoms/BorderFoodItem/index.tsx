import React from "react";
import style from "./style.scss";
import classNames from "classnames";

export type BorderFoodItemType = {
  classStyle?: string;
  color?: string;
};

export const BorderFoodItem: React.FC<BorderFoodItemType> = ({
  classStyle = "",
}) => {
  return (
    <svg
      id="Слой_2"
      className={classNames(classStyle, style.svg)}
      viewBox="0 0 320 480"
      x="0px"
      y="0px"
      xmlSpace="preserve"
    >
      <path
        className={style.path}
        d="M 305 478 H 12.3 C 6.6 478 2 473.4 2 467.7 V 45 c 0 -3 5 -6 10 -11 c 8.5 -8.5 17.4 -17.5 25 -25 c 5 -5 5.1 -7 8 -7 h 254 c 14.5 -0.5 20.5 -0.5 19 17 v 439 C 317.5 472 318 478 305 478 Z"
      />
    </svg>
  );
};
