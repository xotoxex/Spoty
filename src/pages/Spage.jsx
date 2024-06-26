import React from "react";
import UiInput from "../UI/UiInput";
import MyButton from "../UI/MyButton";
import UiA from "../UI/UiA";
import classes from "../UI/UiInput.module.css";
import classess from "../UI/MyButton.module.css";
import design from "../UI/UiA.module.css";
import { useContext } from "../App";
import { useRef } from "react";
import { useState } from "react";
import BackButton from "../components/BackButton";

function Spage() {
  const SignUp = () => {
    Setuser(evalue);
    Setpassw(cvalue);
    Loginfroms();
  };
  const { Setscreen, Setuser, Setpassw } = useContext();
  const [evalue, Setevalue] = useState("");
  const [cvalue, Setcvalue] = useState("");
  const Loginfroms = () => {
    Setscreen("login");
  };
  return (
    <div>
      <UiInput
        className={classes.UiSignName}
        placeholder="Login"
        onChange={(e) => Setevalue(e.target.value)}
      ></UiInput>
      <UiInput
        className={classes.UiSignPassword}
        placeholder="Password"
        type="password"
        onChange={(e) => Setcvalue(e.target.value)}
      ></UiInput>
      <MyButton className={classess.UiSignSubmit} onClick={SignUp}>
        Sign Up
      </MyButton>
      <UiA className={design.UiSignLink} onClick={Loginfroms}>
        Log in
      </UiA>
      <p className="signtext">Already have an account?</p>
      <BackButton></BackButton>
    </div>
  );
}

export default Spage;
