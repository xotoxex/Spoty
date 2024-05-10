import React from "react";
import { useContext } from "../App";
import MyButton from "../UI/MyButton";

import { useState } from "react";

function BackButton() {
  const { Setscreen, user, passw, Setbol } = useContext();
  return (
    <div>
      <button
        className="back"
        onClick={() => {
          Setscreen("initial");
        }}
      >
        Back
      </button>
    </div>
  );
}

export default BackButton;
