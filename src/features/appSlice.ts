import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface User {
//   username: string;
// }

export const appSlice = createSlice({
  name: "app",
  initialState: {
    // app: null,
    channelId: null,
    channelName: null,
  },
  reducers: {
    setChannelId: (state, action) => {
      state.channelId += action.payload;
    },
  },
});

export const { setChannelId } = appSlice.actions;

// export const selectChannelId = (state: any) => state.app.channelId;
// export const selectChannelName = (state: any) => state.app.channelName;

export default appSlice.reducer;
