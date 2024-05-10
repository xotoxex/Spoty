import React from "react";
import { data } from "../Data";
import { data2 } from "../DataTop";
import { Card } from "antd";
import { useContext } from "../App";
import { useNavigate } from "react-router-dom";
import UiDiv from "../UI/UiDiv";

function Scrolling({ props }) {
  const { Setscreen, user, passw, Setbol, search, currentpage, bol } =
    useContext();
  const navigate = useNavigate();

  return (
    <div>
      <UiDiv className="rolldown">
        {props === "black" ? (
          search === "" ? (
            <p className="textts">start searching</p>
          ) : (
            <div className="outercard">
              {data
                .filter((item) => {
                  return search.toLowerCase() === ""
                    ? item
                    : item.name.toLowerCase().includes(search.toLowerCase());
                })
                .map((item, index) => (
                  <div
                    className="card"
                    onClick={() =>
                      bol === "true"
                        ? navigate("/musics/" + (index + 1))
                        : Setscreen("login")
                    }
                    key={item.id}
                  >
                    <div>{item.name}</div>
                    <div>{item.Author}</div>
                    <div>{item.year}</div>
                  </div>
                ))}
            </div>
          )
        ) : (
          <div className="outercard">
            <strong className="weektop">Top of the Week</strong>
            {data2
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((item) => (
                <div
                  className="card"
                  onClick={() =>
                    bol === "true"
                      ? navigate("/musics/" + item.id)
                      : Setscreen("login")
                  }
                  key={item.id}
                >
                  <div>{item.name}</div>
                  <div>{item.Author}</div>
                  <div>{item.year}</div>
                </div>
              ))}
          </div>
        )}
      </UiDiv>
    </div>
  );
}

export default Scrolling;
