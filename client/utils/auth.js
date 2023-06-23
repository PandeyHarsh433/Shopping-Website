import Cookies from "js-cookie";
import { signOut } from "next-auth/react";

export const logout = async () => {
  Cookies.remove("token");
  localStorage.removeItem("username");
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  Cookies.set("isLoggedIn", false);
  await signOut({ redirect: false });
};
