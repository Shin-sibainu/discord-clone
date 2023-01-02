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
  collection,
  DocumentData,
  getDocs,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore/lite";

interface Channel {
  id: string;
  channel: DocumentData;
}

const Sidebar = () => {
  const user = useAppSelector((state) => state.user.user);
  const [channels, setChannels] = useState<Channel[]>([]);

  useEffect(() => {
    const getDocuments = async () => {
      const q = query(collection(db, "channels"));
      const querySnapshot = await getDocs(q).then((snapshot) =>
        setChannels(
          snapshot.docs.map((doc: QueryDocumentSnapshot<DocumentData>) => ({
            id: doc.id,
            channel: doc.data(),
          }))
        )
      );
    };
    getDocuments();
  }, []);

  // console.log(user); //undefined
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
            <AddIcon className="sidebarAddChannel" />
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
