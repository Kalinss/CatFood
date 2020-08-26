import React from "react";
import style from "./style.scss";
import { CatFoodItem } from "../../molecules/CatFoodItem";
import {
  CatFoodItemDataType,
  CatFoodItemEventClickType,
} from "../../molecules/CatFoodItem/types";

export type CatFoodListType = {
  data: CatFoodItemDataType[];
  clickHandler: CatFoodItemEventClickType;
};

export const CatFoodList: React.FC<CatFoodListType> = ({
  data,
  clickHandler,
}) => {
  return (
    <div className={style.wrapper}>
      <ul className={style.list}>
        {data.map((item, i) => (
          <li key={i}>
            <CatFoodItem
              classStyle={style.item}
              item={item}
              clickHandler={clickHandler}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
