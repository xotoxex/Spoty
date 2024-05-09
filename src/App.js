import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Scrolling from "./components/Scrolling";
import Playlist from "./components/Playlist";
import Options from "./components/Options";
import { useState } from "react";

function App() {
  const [check, Setcheck] = useState("gray");
  const showoption = (color1) => {
    Setcheck(color1);
  };
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
