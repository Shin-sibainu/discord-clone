import React, { useState, useEffect } from "react";
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
import { db } from "../firebase";
import {
  addDoc,
  collection,
  CollectionReference,
  DocumentData,
  DocumentReference,
  FieldValue,
  Firestore,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import useFirebase from "../hooks/useFirebase";
import useSubCollection from "../hooks/useSubCollection";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

//51:ディスコードチャット欄にメッセージを表示してみよう
//52:メッセージを投稿した順番にソートして表示してみよう
//54:【補足】サブコレクションデータ取得をカスタムフックスで切り出してみよう

const Chat = () => {
  const user = useAppSelector((state) => state.user.user);
  const channelId = useAppSelector((state) => state.app.channelId);
  const channelName = useAppSelector((state) => state.app.channelName);

  const [inputText, setInputText] = useState<string>("");
  const { subDocuments: messages } = useSubCollection("channels", "messages");
  // const [messages, setMessages] = useState<Messages[]>([]);

  // useEffect(() => {
  //   let collectionRef = collection(
  //     db,
  //     "channels",
  //     String(channelId),
  //     "messages"
  //   );

  //   let collectionRefOrderBy = query(
  //     collectionRef,
  //     orderBy("timestamp", "desc")
  //   );

  //   onSnapshot(collectionRefOrderBy, (snapshot) => {
  //     let results: Messages[] = [];
  //     snapshot.docs.forEach((doc: QueryDocumentSnapshot<DocumentData>) => {
  //       results.push({
  //         timestamp: doc.data().timestamp,
  //         message: doc.data().message,
  //         user: doc.data().user,
  //       });
  //     });
  //     setMessages(results);
  //   });
  // }, [channelId]);

  const sendMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    //channlesの中のmessageコレクションの中に新しくデータを入れる。
    const collectionRef = collection(
      db,
      "channels",
      String(channelId),
      "messages"
    );
    const docRef: DocumentReference<DocumentData> = await addDoc(
      collectionRef,
      {
        timestamp: serverTimestamp(),
        message: inputText,
        user: user,
      }
    );
    console.log(docRef);

    setInputText("");
  };

  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />

      <div className="chatMessages">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message.message}
            timestamp={message.timestamp}
            user={message.user}
          />
        ))}
      </div>

      <div className="chatInput">
        <AddCircleOutline fontSize="large" />
        <form>
          <input
            type="text"
            placeholder={`#${channelName}へメッセージを送信`}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            value={inputText}
            disabled={Boolean(!channelId)}
          />
          <button
            type="submit"
            className="chatInputButton"
            disabled={Boolean(!channelId)}
            onClick={(e: React.MouseEvent<HTMLElement>) => sendMessage(e)}
          >
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
