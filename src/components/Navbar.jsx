import React from "react";
import MyButton from "../UI/MyButton";
import DivButton from "../UI/DivButton";
import { useState } from "react";
import UiDiv from "../UI/UiDiv";

function Navbar({ buttoncolor }) {
  const [color1, setcolor1] = useState("black");
  const [color2, setcolor2] = useState("gray");

  function Home() {
    setcolor1("black");
    setcolor2("gray");
    buttoncolor(color1);
  }

  function Search() {
    setcolor1("gray");
    setcolor2("black");
    buttoncolor(color1);
  }

  return (
    <div className="navbar">
      <strong className="logo">Spoty</strong>
      <br></br>
      <UiDiv onClick={Home} style={{ color: color1 }}>
        <DivButton style={{ border: "1px", borderColor: color1 }}>
          Home
        </DivButton>
      </UiDiv>
      <UiDiv onClick={Search} style={{ color: color2 }}>
        <DivButton>Search</DivButton>
      </UiDiv>
    </div>
  );
}

export default Navbar;
