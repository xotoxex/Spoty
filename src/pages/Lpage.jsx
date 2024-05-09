import React from "react";
import UiInput from "../UI/UiInput";
import MyButton from "../UI/MyButton";
import UiA from "../UI/UiA";
import classes from "../UI/UiInput.module.css";
import classess from "../UI/MyButton.module.css";
import design from "../UI/UiA.module.css";
import { useContext } from "../App";
import { useState } from "react";

function Lpage() {
  const { Setscreen, user, passw, Setbol } = useContext();
  const [cvalue, Setcvalue] = useState("");
  const [evalue, Setevalue] = useState("");

  const Entering = () => {
    Setscreen("initial");
  };
  const LoginCheck = () => {
    evalue === user && evalue !== "" && cvalue === passw
      ? Entering()
      : alert("Password or login is incorrect");
  };

  const Signfroml = () => {
    Setscreen("signup");
  };
  return (
    <div className="LoginPage">
      <UiInput
        className={classes.UiLoginName}
        placeholder="Login"
        onChange={(e) => Setevalue(e.target.value)}
      ></UiInput>

      <UiInput
        className={classes.UiLoginPassword}
        placeholder="Password"
        type="password"
        onChange={(e) => Setcvalue(e.target.value)}
      ></UiInput>

      <MyButton className={classess.UiLoginSubmit} onClick={LoginCheck}>
        Log In
      </MyButton>

      <UiA className={design.UiLoginLink} onClick={Signfroml}>
        Sign Up
      </UiA>
      <p className="logintext">Do not have an account?</p>
    </div>
  );
}

export default Lpage;
