import { database } from "../data/database";
import { isServer } from "./isServer";
import { find } from "lodash";

export const isAdmin = (): boolean => {
  const userId = !isServer() && localStorage.getItem("user_id");
  const foundUser = find(database.users, { id: userId });

  if (!foundUser) {
    return false;
  }

  if (foundUser.role === "admin") {
    return true;
  }

  return false;
};
