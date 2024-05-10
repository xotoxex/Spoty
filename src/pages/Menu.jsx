import React from "react";
import Navbar from "../components/Navbar";
import Scrolling from "../components/Scrolling";
import Playlist from "../components/Playlist";
import { useState } from "react";
import Options from "../components/Options";

function Menu() {
  const [check, Setcheck] = useState("gray");

  const showoption = (color1) => {
    Setcheck(color1);
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
        <Options props={check}></Options>
      </div>
      <img src="https://random.imagecdn.app/200/200"></img>
    </div>
  );
}

export default Menu;
