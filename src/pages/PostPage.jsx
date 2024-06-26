import React from "react";
import { Image } from "antd";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";
import { data } from "../Data";
import BackButton from "../components/BackButton";
import { useContext } from "../App";
import MyButton from "../UI/MyButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Review from "../components/Review";

function PostPage() {
  const navigate = useNavigate();
  const { Setscreen, user, passw, Setbol } = useContext();
  const params = useParams();
  console.log(params);
  const indexx =
    parseInt(params.id) > 0 && parseInt(params.id) < 101
      ? parseInt(params.id) - 1
      : 1;
  console.log(indexx);
  return (
    <div>
      <div className="details">
        <div className="musicname">{data[indexx].name}</div>
        <div className="author">by {data[indexx].Author}</div>
        <div className="year">{data[indexx].year}</div>
        <img className="cover" src="https://random.imagecdn.app/150/150"></img>
      </div>

      <Comments params={params}></Comments>
      <Review params={params}></Review>

      <button
        onClick={() => {
          navigate("/");
        }}
      >
        back
      </button>
    </div>
  );
}

export default PostPage;
