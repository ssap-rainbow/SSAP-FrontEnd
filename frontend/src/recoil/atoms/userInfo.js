import { atom } from "recoil";

export const authInfoState = atom({
  key: "authInfo",
  default: {
    userName: "",
    userEmail: "",
  },
});
