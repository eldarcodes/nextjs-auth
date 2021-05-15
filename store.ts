import { combineReducers, createStore, Store } from "redux";
import databaseReducer from "./redux/database-reducer";
import { IDatabase } from "./data/database";
import { isServer } from "./utils/isServer";

const rootReducer = combineReducers({
  databaseReducer,
});

export interface ReduxDatabase {
  databaseReducer: IDatabase;
}

const devTools = !isServer() && (window as any).__REDUX_DEVTOOLS_EXTENSION__;

const store: Store<IDatabase> = createStore(
  rootReducer,
  devTools && devTools()
);

export default store;
