import React from "react";
import { Image } from "antd";
import Comments from "../components/Comments";
import { useParams } from "react-router-dom";
import { data } from "../Data";

function PostPage() {
  const params = useParams();
  console.log(params);
  const indexx =
    parseInt(params.id) > 0 && parseInt(params.id) < 101
      ? parseInt(params.id) - 1
      : 1;
  console.log(indexx);
  return (
    <div>
      <div className="author">{data[indexx].Author}</div>
      <div className="musicname">{data[indexx].name}</div>
      <div className="year">{data[indexx].year}</div>
      <Comments></Comments>
      <strong className="warning">scroll up</strong>
    </div>
  );
}

export default PostPage;
