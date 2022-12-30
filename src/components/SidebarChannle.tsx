import { DocumentData } from "firebase/firestore/lite";
import React from "react";
import "./SidebarChannel.scss";

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannle = (props: Props) => {
  const { id, channel } = props;

  console.log(channel);

  return (
    <div className="sidebarChannel">
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannle;
