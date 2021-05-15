import { User } from "../data/database";
import { isServer } from "./isServer";
import { find } from "lodash";

export const getUser = (users: User[]): any => {
  const userId = !isServer() && localStorage.getItem("user_id");
  const user = find(users, { id: userId });

  return user || {};
};
