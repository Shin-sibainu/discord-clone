import { ExpandMoreOutlined, Settings } from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import React, { useEffect, useState } from "react";
import "./Sidebar.scss";
import SidebarChannle from "./SidebarChannle";
import { useAppSelector } from "../app/hooks";
import db, { auth } from "../firebase";
import {
  addDoc,
  // collection,
  DocumentData,
  DocumentReference,
  getDocs,
  // query,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";
import { onSnapshot, orderBy, query, collection } from "firebase/firestore";

interface Channel {
  id: string;
  channel: DocumentData;
}

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    const channleRef = collection(db, "channels");
    // const q = query(channleRef, orderBy("timestamp", "desc"));
    // const unsub = onSnapshot(q, (querySnapshot) => {
    //   setChannels(
    //     querySnapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
    //       id: doc.id,
    //       channel: doc.data(),
    //     }))
    //   );
    // });
    // return unsub;
  }, []);

  const addChannel = async () => {
    let channelName = prompt("新しいチャンネルを作成します");

    if (channelName) {
      const docRef: DocumentReference<DocumentData> = await addDoc(
        collection(db, "channels"),
        {
          channelName: channelName,
        }
      );
      // console.log(docRef);
    }
  };

  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        {/* discrodIcon */}
        <div className="serverIcon">
          <img src="./discordLogo.png" alt="" />
        </div>
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
        </div>
      </div>

      <div className="sidebarRight">
        <div className="sidebarTop">
          <h3>Discord</h3>
          <ExpandMoreOutlined />
        </div>

        <div className="sidebarChannels">
          <div className="sidebarChannelsHeader">
            <div className="sidebarHeader">
              <ExpandMoreOutlined />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className="sidebarAddChannel" onClick={addChannel} />
          </div>

          <div className="sidebarChannelList">
            {channels.map((channel) => (
              <SidebarChannle
                id={channel.id}
                channel={channel}
                key={channel.id}
              />
            ))}
            {/* <SidebarChannle id="1" channel="sample" />
            <SidebarChannle id="1" channel="sample" />
            <SidebarChannle id="1" channel="sample" /> */}
          </div>

          <div className="sidebarSettings">
            <div className="sidebarAccount">
              <img
                src={user?.photo}
                alt="account"
                onClick={() => auth.signOut()}
              />
              <div className="accountName">
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicIcon />
              <HeadphonesIcon />
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
