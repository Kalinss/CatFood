import React from "react";
import "./style.scss";
import style from "./AppStyle.scss";
import { Main } from "./pages/Main";

export const App = () => {
  return (
    <div className={style.wrapper}>
      <Main />
    </div>
  );
};
