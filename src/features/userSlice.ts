import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    login: (state, action) => (state.user += action.payload),
  },
});

export const { login } = userSlice.actions;

export default userSlice.reducer;
