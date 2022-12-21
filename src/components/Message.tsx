import { Avatar } from "@mui/material";
import React from "react";
import "./Message.scss";

const Message = () => {
  return (
    <div className="message">
      <Avatar />
      <div className="messageInfo">
        <h4>
          Shin Code
          <span className="messageTimestamp">2022/12/18</span>
        </h4>

        <p>メッセージ本文</p>
      </div>
    </div>
  );
};

export default Message;
