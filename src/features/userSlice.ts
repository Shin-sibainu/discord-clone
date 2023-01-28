import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState } from "../Types";

const initialState: InitialState = {
  user: null,
  displayName: "",
  photo: undefined,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  /* https://zenn.dev/luvmini511/articles/819d8c7fa13101 */
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
