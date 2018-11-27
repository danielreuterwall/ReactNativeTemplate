import { persistStore, persistReducer, Persistor } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import { StatsState, stats } from "../stats/StatsStore";

const persistConfig = {
  key: "store",
  storage
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({
    stats
  })
);

export interface ApplicationState {
  stats: StatsState;
}

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export const persistor = persistStore(store);
