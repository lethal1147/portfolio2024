import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    account: {
      firstname: "Joakim",
      lastname: "Dahlstrom",
      imgPath: "/asset/image/joakimDahlstrom.webp",
    },
  },
  reducers: {
    changeAccount: (state, action) => {
      state.account = action.payload;
    },
  },
});

export const { changeAccount } = accountSlice.actions;
export default accountSlice.reducer;
