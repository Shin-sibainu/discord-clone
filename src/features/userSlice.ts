import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface User {
//   username: string;
// }

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: 1,
  },
  /* https://zenn.dev/luvmini511/articles/819d8c7fa13101 */
  reducers: {
    login: (state, action) => {
      state.user += action.payload;
    },
    logout: (state) => {
      // state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
// export const selectUser = (state: any) => state.user.user;
export default userSlice.reducer;
