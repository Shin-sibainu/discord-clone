import {
  ExpandMoreOutlined,
  MicExternalOff,
  PhoneAndroid,
  Settings,
} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import React from "react";
import "./Sidebar.scss";
import SidebarChannle from "./SidebarChannle";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarLeft">
        {/* discrodIcon */}
        <div className="serverIcon">
          <img src="./logo192.png" alt="" />
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
            <SidebarChannle id="1" channel="sample" />
            <SidebarChannle id="1" channel="sample" />
            <SidebarChannle id="1" channel="sample" />
            <SidebarChannle id="1" channel="sample" />
          </div>

          <div className="sidebarSettings">
            <div className="sidebarAccount">
              <img src="" alt="account" />
              <div className="accountName">
                <h4>ShinCode</h4>
                <span>#8162</span>
              </div>
            </div>

            <div className="sidebarVoice">
              <MicExternalOff />
              <PhoneAndroid />
              <Settings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
