import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Scrolling from "./components/Scrolling";
import Playlist from "./components/Playlist";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar></Navbar>
      </div>

      <div className="playlist">
        <Playlist></Playlist>
      </div>

      <div className="scrolling">
        <Scrolling></Scrolling>
      </div>
    </div>
  );
}

export default App;
