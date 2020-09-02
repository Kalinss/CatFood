import React, { useReducer } from "react";
import { catFoodData } from "../../mock/catFoodsDataMock";
import { CatFoodList } from "../../components/organisms/CatFoodList";
import { CatFoodItemEventClickType } from "../../components/molecules/CatFoodItem/types";
import style from "./style.scss";
import { reducer } from "./reducers";

export const Main: React.FC<{}> = () => {
  const [data, dispatch] = useReducer(reducer, catFoodData);

  const clickItemCatFood: CatFoodItemEventClickType = (e, id) => {
    const demoId = 2;
    if (id === demoId) {
      // synthetic example for demonstration
      dispatch({ type: "disabledItem", id: demoId });
      return;
    }

    dispatch({ type: "toggleActive", id: Number(id) });
  };

  return (
    <main className={style.main} role='main'>
      <h1 className={style.title} role='title'>Ты сегодня покормил кота?</h1>
      <CatFoodList data={data} clickHandler={clickItemCatFood} />
    </main>
  );
};
