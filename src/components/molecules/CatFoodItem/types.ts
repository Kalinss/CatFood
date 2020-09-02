import React from "react";

export type CatFoodItemDataType = {
  id: number | string;
  description: {
    value: string;
    alternative: string;
  };
  title: string;
  subTitle: string;
  count: {
    value: string;
    metric: string;
  };
  info: string[];
  isActive: boolean;
  disabled: {
    value: boolean;
    warn: string;
  };
  additional: {
    value: string;
    alternative: string;
  };
  fullDescription:string
};
export type CatFoodItemEventClickType = (
  e: React.SyntheticEvent,
  id: string | number
) => void;
