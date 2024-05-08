import React from "react";
import classes from "./DivButton.module.css";

const UiDiv = ({ style, children, ...props }) => {
  return (
    <div style={style} {...props}>
      {children}
    </div>
  );
};

export default UiDiv;
