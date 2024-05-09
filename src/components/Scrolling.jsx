import React from "react";
import { data } from "../Data";
import { Card } from "antd";
import { useContext } from "../App";

function Scrolling({ props }) {
  const { Setscreen, user, passw, Setbol, search } = useContext();
  return (
    <div>
      <div className="rolldown">
        {data
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.name.toLowerCase().includes(search.toLowerCase());
          })
          .map((item) => (
            <div key={item.id} className="cards">
              <div>{item.name}</div>
              <div>{item.Author}</div>
              <div>{item.year}</div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Scrolling;
