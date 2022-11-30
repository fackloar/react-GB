import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    nick: "John",
  },
  reducers: {
    signIn: (state, action) => {
      return {
        ...state,
        nick: action.payload,
      };
    },
  },
});

export const { signIn } = authSlice.actions;

export const selectUserName = (state) => state.auth.nick;

export default authSlice.reducer;