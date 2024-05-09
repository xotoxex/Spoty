import React from "react";
import MyButton from "../UI/MyButton";
import UiDiv from "../UI/UiDiv";
import classes from "../UI/MyButton.module.css";

function Login(props1, props2) {
  return (
    <UiDiv>
      <MyButton className={classes.MyBtnLgn}>Login</MyButton>
      <MyButton className={classes.MyBtnSgn}>SignUp</MyButton>
    </UiDiv>
  );
}

export default Login;
