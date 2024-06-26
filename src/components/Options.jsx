import React, { useState } from "react";
import UiInput from "../UI/UiInput";
import Login from "./Login";
import { useContext } from "../App";
import { data } from "../Data";

function Options({ props }) {
  const { Setscreen, user, passw, bol, Setsearch } = useContext();

  return (
    <div>
      <div>
        {props === "black" ? (
          <UiInput
            className="searchbar"
            placeholder="Search"
            onChange={(e) => Setsearch(e.target.value)}
          />
        ) : (
          <div>
            {bol === "true" ? (
              <strong className="textt">Welcome to Spoty {user}</strong>
            ) : (
              <strong className="textt">Welcome to Spoty</strong>
            )}
          </div>
        )}
      </div>
      <div>{bol === "true" ? <div></div> : <Login></Login>}</div>
    </div>
  );
}

export default Options;
