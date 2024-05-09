import React, { useState } from "react";
import MyButton from "../UI/MyButton";
import UiDiv from "../UI/UiDiv";
import classes from "../UI/MyButton.module.css";
import { useContext } from "../App";

function Login() {
  const { Setscreen } = useContext();

  const LoginPage = () => {
    Setscreen("login");
  };

  const SignPage = () => {
    Setscreen("signup");
  };

  return (
    <UiDiv>
      <MyButton className={classes.MyBtnLgn} onClick={LoginPage}>
        Login
      </MyButton>
      <MyButton className={classes.MyBtnSgn} onClick={SignPage}>
        SignUp
      </MyButton>
    </UiDiv>
  );
}

export default Login;
