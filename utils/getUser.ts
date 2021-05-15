import { database, User } from "../data/database";
import { isServer } from "./isServer";
import { find } from "lodash";

export const getUser = (): User | null => {
  const userId = !isServer() && localStorage.getItem("user_id");
  const user = find(database.users, { id: userId });

  return user;
};
