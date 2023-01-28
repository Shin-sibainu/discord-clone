import { DocumentData } from "firebase/firestore/lite";
import React, { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import { setChannelInfo } from "../features/appSlice";
import "./SidebarChannel.scss";

type Props = {
  id: string;
  channel: DocumentData;
};

const SidebarChannle = (props: Props) => {
  const { id, channel } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setChannelInfo({
        channelId: id,
        channelName: channel.channel.channelName,
      })
    );
  }, []);

  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channel.channel.channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannelHash">#</span>
        {channel.channel.channelName}
      </h4>
    </div>
  );
};

export default SidebarChannle;
