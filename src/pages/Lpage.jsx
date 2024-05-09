import React from "react";
import UiInput from "../UI/UiInput";
import MyButton from "../UI/MyButton";
import UiA from "../UI/UiA";
import classes from "../UI/UiInput.module.css";
import classess from "../UI/MyButton.module.css";
import design from "../UI/UiA.module.css";
import { useContext } from "../App";

function Lpage() {
  const { Setscreen } = useContext();

  const Signfroml = () => {
    Setscreen("signup");
  };
  return (
    <div className="LoginPage">
      <UiInput className={classes.UiLoginName} placeholder="Login"></UiInput>

      <UiInput
        className={classes.UiLoginPassword}
        placeholder="Password"
        type="password"
      ></UiInput>

      <MyButton className={classess.UiLoginSubmit}>Log In</MyButton>

      <UiA className={design.UiLoginLink} onClick={Signfroml}>
        Sign Up
      </UiA>
      <p className="logintext">Do not have an account?</p>
    </div>
  );
}

export default Lpage;
