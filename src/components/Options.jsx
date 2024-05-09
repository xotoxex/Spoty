import React, { useState } from "react";
import UiInput from "../UI/UiInput";
import Login from "./Login";

function Options({ props, actt2 }) {
  const [logopt, Setlogopt] = useState("initial");

  const Switch = (logg) => {
    Setlogopt(logg);
  };

  const SwitchPage = () => {
    Switch();
    const logoptt = logopt;
    actt2(logoptt);
  };

  return (
    <div>
      <div>
        {props === "black" ? (
          <UiInput className="searchbar" placeholder="Search" />
        ) : (
          <strong className="textt">Welcome to Spoty</strong>
        )}
      </div>

      <Login actt={Switch} onClick={SwitchPage} />
    </div>
  );
}

export default Options;
