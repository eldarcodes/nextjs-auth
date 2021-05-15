import { database as defaultDatabase, IDatabase } from "../data/database";
import { isServer } from "../utils/isServer";

const localStorageDatabase = !isServer() && localStorage.getItem("database");

const database = JSON.parse(localStorageDatabase) || defaultDatabase;

function databaseReducer(state = database, action) {
  switch (action.type) {
    case "SET_DATABASE": {
      return { ...state, ...action.payload };
    }
    default:
      return state;
  }
}

export const setDatabase = (payload) => {
  localStorage.setItem("database", JSON.stringify(payload));

  return {
    type: "SET_DATABASE",
    payload,
  };
};
export default databaseReducer;
