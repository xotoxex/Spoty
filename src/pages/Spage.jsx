import React from "react";
import UiInput from "../UI/UiInput";
import MyButton from "../UI/MyButton";
import UiA from "../UI/UiA";
import classes from "../UI/UiInput.module.css";
import classess from "../UI/MyButton.module.css";
import design from "../UI/UiA.module.css";
import { useContext } from "../App";

function Spage() {
  const { Setscreen } = useContext();
  const Loginfroms = () => {
    Setscreen("login");
  };
  return (
    <div>
      <UiInput className={classes.UiSignName} placeholder="Login"></UiInput>
      <UiInput
        className={classes.UiSignPassword}
        placeholder="Password"
        type="password"
      ></UiInput>
      <MyButton className={classess.UiSignSubmit}>Sign Up</MyButton>
      <UiA className={design.UiSignLink} onClick={Loginfroms}>
        Log in
      </UiA>
      <p className="signtext">Already have an account?</p>
    </div>
  );
}

export default Spage;
