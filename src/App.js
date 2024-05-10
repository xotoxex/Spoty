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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./pages/PostPage";
// import rtmp from "./rtmp";

const ContextProvider = createContext(null);

export const useContext = () => {
  return React.useContext(ContextProvider);
};

function App() {
  // Example usage:
  // const imageUrl = "https://random.imagecdn.app/200/200";
  // rtmp
  //   .getRedirectedUrl(imageUrl)
  //   .then((redirectedUrl) => {
  //     console.log("Redirected URL:", redirectedUrl);
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });

  const [screen, Setscreen] = useState("initial");
  const [user, Setuser] = useState("");
  const [passw, Setpassw] = useState("");
  const [bol, Setbol] = useState("false");
  const [search, Setsearch] = useState("");
  const [currentpage, Setcurrentpage] = useState("1");

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
        search,
        Setsearch,
        currentpage,
        Setcurrentpage,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="app">
                {screen === "initial" ? (
                  <Menu></Menu>
                ) : screen === "login" ? (
                  <Lpage></Lpage>
                ) : (
                  <Spage></Spage>
                )}
              </div>
            }
          ></Route>
          <Route
            exact
            path="/musics/:id"
            element={<PostPage></PostPage>}
          ></Route>
          <Route path="/*" element={<div>error</div>}></Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider.Provider>
  );
}

export default App;
