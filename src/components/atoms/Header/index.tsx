import React from "react";
import style from "./style.scss";
import classnames from "classnames";

export type HeaderType = {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "text";
  classStyle?: string;
};

export const Header: React.FC<HeaderType> = ({
  children,
  as = "text",
  classStyle = "",
}) => {
  const data = {
    h1: <h1>{children}</h1>,
    h2: <h2>{children}</h2>,
    h3: <h3>{children}</h3>,
    h4: <h4>{children}</h4>,
    h5: <h5>{children}</h5>,
    h6: <h6>{children}</h6>,
    text: <span>{children}</span>,
  };

  return (
    <div className={classnames(style.header, classStyle)}> {data[as]} </div>
  );
};
