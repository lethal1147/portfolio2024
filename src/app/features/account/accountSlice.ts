import { Account } from "@/types/account";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
  name: "account",
  initialState: {
    currentAccount: {
      accountName: "Joakim Dahlstrom",
      imgPath: "/asset/image/joakimDahlstrom.webp",
    },
    accountsList: [
      {
        accountName: "Joakim Dahlstrom",
        imgPath: "/asset/image/joakimDahlstrom.webp",
      },
      {
        accountName: "YhumYhum",
        imgPath: "/asset/image/yhumyhum.webp",
      },
      {
        accountName: "Nieowmoon",
        imgPath: "/asset/image/nieowmoon.webp",
      },
    ],
  },
  reducers: {
    changeAccount: (state, action: PayloadAction<Account>) => {
      state.currentAccount = action.payload;
    },
  },
});

export const { changeAccount } = accountSlice.actions;
export default accountSlice.reducer;
