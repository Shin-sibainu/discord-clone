import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialAppState } from "../Types";

const initialState: InitialAppState = {
  channelId: null,
  channelName: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setChannelId: (state, action) => {
      state.channelId += action.payload;
    },
    setChannelInfo: (state, action) => {
      state.channelId = action.payload.channelId;
      state.channelName = action.payload.channelName;
    },
  },
});

export const { setChannelId, setChannelInfo } = appSlice.actions;

export default appSlice.reducer;
