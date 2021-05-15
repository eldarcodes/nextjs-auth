import { isServer } from "./isServer";
import { find } from "lodash";
import { useSelector } from "react-redux";
import { ReduxDatabase } from "../store";

export const isAdmin = (): boolean => {
  const users = useSelector(
    (state: ReduxDatabase) => state.databaseReducer.users
  );

  const userId = !isServer() && localStorage.getItem("user_id");
  const foundUser = find(users, { id: userId });

  if (!foundUser) {
    return false;
  }

  if (foundUser.role === "admin") {
    return true;
  }

  return false;
};
