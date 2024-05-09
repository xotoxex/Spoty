import React from "react";
import Navbar from "../components/Navbar";
import Scrolling from "../components/Scrolling";
import Playlist from "../components/Playlist";
import { useState } from "react";
import Options from "../components/Options";

function Menu({ actt3 }) {
  const [check, Setcheck] = useState("gray");
  const [logmenu, Setlogmenu] = useState("initial");

  const showoption = (color1) => {
    Setcheck(color1);
  };

  const switchPage2 = (logoptt) => {
    Setlogmenu(logoptt);
  };

  const handleSwitchPage2 = () => {
    switchPage2();
    const logmenuu = logmenu;
    actt3(logmenuu);
  };

  return (
    <div>
      <div className="navbar">
        <Navbar buttoncolor={showoption}></Navbar>
      </div>

      <div className="playlist">
        <Playlist></Playlist>
      </div>

      <div className="scrolling">
        <Scrolling props={check}></Scrolling>
      </div>
      <div className="options">
        <Options
          props={check}
          actt2={switchPage2}
          onClick={handleSwitchPage2}
        ></Options>
      </div>
    </div>
  );
}

export default Menu;
