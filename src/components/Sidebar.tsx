import { ExpandMoreOutlined } from "@mui/icons-material";
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
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
