import React from "react";
import "./SidebarChannel.scss";

type Props = {
  id: string;
  channel: string;
};

const SidebarChannle = (props: Props) => {
  const { id, channel } = props;

  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>Udemy
      </h4>
    </div>
  );
};

export default SidebarChannle;
