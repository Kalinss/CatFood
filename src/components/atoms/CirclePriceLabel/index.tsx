import React from "react";
import style from "./style.scss";
import classnames from "classnames";

export type CirclePriceLabelType = {
  count?: string;
  metric?: string;
  classStyle?: string;
};

export const CirclePriceLabel: React.FC<CirclePriceLabelType> = ({
  count = "0",
  metric = "кг",
  classStyle = "",
}) => {
  return (
    <div className={classnames(style.body, classStyle)}>
      <span className={style.count}>{count}</span>
      <span className={style.metric}>{metric}</span>
    </div>
  );
};
