import React, { useState } from "react";
import UiInput from "../UI/UiInput";
import MyButton from "../UI/MyButton";
import { useContext } from "../App";
import { useParams } from "react-router-dom";

function Comments({ params }) {
  const { Setscreen, user, passw, Setbol, comm, Setcomm } = useContext();
  const paramss = parseInt(params.id);

  const [ctext, Sctext] = useState("");

  const sendd = () => {
    ctext !== "" && user !== ""
      ? Setcomm([
          ...comm,
          {
            nick: user,
            text: ctext,
            comment_id: comm.length,
            post_id: paramss,
          },
        ])
      : alert("login or write something to comment");
    Sctext("");
  };

  return (
    <div>
      <div className="comments">
        <div className="outercom">
          {comm
            .filter((item) => item.nick !== "" && item.post_id === paramss)
            .map((item) => (
              <div className="innercom" key={item.comment_id}>
                <strong className="nick">{item.nick}</strong>
                <div className="commenttext">{item.text}</div>
              </div>
            ))}
        </div>
        <UiInput
          placeholder="your comment"
          onChange={(e) => {
            Sctext(e.target.value);
          }}
          value={ctext}
        ></UiInput>
        <MyButton className="send" onClick={sendd}>
          Send
        </MyButton>
      </div>
    </div>
  );
}

export default Comments;
