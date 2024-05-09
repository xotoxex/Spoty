import React from "react";

const UiA = ({ children, ...props }) => {
  return <a {...props}>{children}</a>;
};

export default UiA;
