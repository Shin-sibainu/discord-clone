import React from "react";
import ChatHeader from "./ChatHeader";
import "./Chat.scss";
import {
  AddCircleOutline,
  CardGiftcardOutlined,
  EmojiEmotionsOutlined,
} from "@mui/icons-material";
import GifIcon from "@mui/icons-material/Gif";
import Message from "./Message";
import { useAppSelector } from "../app/hooks";

const Chat = () => {
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.app.channelId);
  const channelName = useAppSelector((state) => state.app.channelName);

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chatMessages">
        <Message />
        <Message />
        <Message />
      </div>

      <div className="chatInput">
        <AddCircleOutline fontSize="large" />
        <form>
          <input type="text" placeholder="#Udemyへメッセージを送信" />
          <button type="submit" className="chatInputButton">
            送信
          </button>
        </form>

        <div className="chatInputIcons">
          <CardGiftcardOutlined />
          <GifIcon />
          <EmojiEmotionsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Chat;
