import React from "react";
import "./app.css";
import Navbar from "./components/Navbar";
import Scrolling from "./components/Scrolling";
import Playlist from "./components/Playlist";
import Options from "./components/Options";
import { useState } from "react";
import Menu from "./pages/Menu";
import { createContext } from "react";
import Lpage from "./pages/Lpage";
import Spage from "./pages/Spage";

const ContextProvider = createContext(null);

export const useContext = () => {
  return React.useContext(ContextProvider);
};

function App() {
  const [screen, Setscreen] = useState("initial");
  const [user, Setuser] = useState("");
  const [passw, Setpassw] = useState("");
  const [bol, Setbol] = useState("false");

  return (
    <ContextProvider.Provider
      value={{
        screen,
        Setscreen,
        user,
        Setuser,
        passw,
        Setpassw,
        bol,
        Setbol,
      }}
    >
      <div className="app">
        {screen === "initial" ? (
          <Menu></Menu>
        ) : screen === "login" ? (
          <Lpage></Lpage>
        ) : (
          <Spage></Spage>
        )}
      </div>{" "}
    </ContextProvider.Provider>
  );
}

export default App;
