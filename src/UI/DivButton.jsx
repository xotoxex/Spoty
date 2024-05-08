import React from "react";
import classes from "./DivButton.module.css";

const DivButton = ({ children, ...props }) => {
  return (
    <div {...props} className={classes.DivBtn}>
      {children}
    </div>
  );
};

export default DivButton;
