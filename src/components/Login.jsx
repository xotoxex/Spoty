import React, { useState } from "react";
import MyButton from "../UI/MyButton";
import UiDiv from "../UI/UiDiv";
import classes from "../UI/MyButton.module.css";
import { useContext } from "../App";

function Login({ actt }) {
  const { Setscreen } = useContext();

  const [log, Setlog] = useState("initial");

  const LoginPage = () => {
    Setscreen("login");
  };

  const SignPage = () => {
    Setscreen("signup");
  };

  const handleLogin = () => {
    LoginPage();
    const logg = log;
    actt(logg);
  };

  const handleSignup = () => {
    SignPage();
    const logg = log;
    actt(logg);
  };

  return (
    <UiDiv>
      <MyButton className={classes.MyBtnLgn} onClick={handleLogin}>
        Login
      </MyButton>
      <MyButton className={classes.MyBtnSgn} onClick={handleSignup}>
        SignUp
      </MyButton>
    </UiDiv>
  );
}

export default Login;
