import React from "react";
import UiInput from "../UI/UiInput";
import Login from "./Login";

function Options({ props }) {
  return (
    <div>
      <div>
        {props === "black" ? (
          <UiInput className="searchbar" placeholder="Search"></UiInput>
        ) : (
          <strong className="textt">welcome to Spoty</strong>
        )}
      </div>
      <Login></Login>
    </div>
  );
}

export default Options;
