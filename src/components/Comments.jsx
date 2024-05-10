import React, { useState } from "react";
import UiInput from "../UI/UiInput";
import MyButton from "../UI/MyButton";
import { useContext } from "../App";

function Comments() {
  const { Setscreen, user, passw, Setbol } = useContext();
  const [comm, Setcomm] = useState([{ nick: "", text: "", comment_id: 0 }]);
  const [ctext, Sctext] = useState("");

  const sendd = () => {
    ctext !== "" && user !== ""
      ? Setcomm([...comm, { nick: user, text: ctext, comment_id: comm.length }])
      : console.log("123");
    Sctext("");
  };

  return (
    <div>
      <div className="comments">
        <div>
          {comm
            .filter((item) => item.nick !== "")
            .map((item) => (
              <div key={item.comment_id}>
                <div>{item.nick}</div>
                <div>{item.text}</div>
                <div>{item.comment_id}</div>
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
