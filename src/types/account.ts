export type Account = {
  accountName: string;
  imgPath: string;
};

export type AccountState = {
  currentAccount: Account;
  accountsList: Account[];
};
