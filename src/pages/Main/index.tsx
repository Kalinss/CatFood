import React, { useReducer } from "react";
import { catFoodData } from "../../mock/catFoodsDataMock";
import { CatFoodList } from "../../components/organisms/CatFoodList";
import { CatFoodItemEventClickType } from "../../components/molecules/CatFoodItem/types";
import style from "./style.scss";
import { reducer } from "./reducers";

export const Main: React.FC<{}> = () => {
  const [data, dispatch] = useReducer(reducer, catFoodData);

  const clickItemCatFood: CatFoodItemEventClickType = (e, id) => {
    if (id === 2) {
      // synthetic example for demonstration
      dispatch({ type: "disabledItem", id: 2 });
      return;
    }

    dispatch({ type: "toggleActive", id: Number(id) });
  };

  return (
    <main className={style.main}>
      <p className={style.title}>Ты сегодня покормил кота?</p>
      <CatFoodList data={data} clickHandler={clickItemCatFood} />
    </main>
  );
};
