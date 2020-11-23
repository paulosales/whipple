import { combineReducers, createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import databaseReducer from "./database/reducers"
import pollingStationQueryReducer from "./polling-station-query/reducers"

export const store = createStore(
  combineReducers({
    database: databaseReducer,
    pollingStationQuery: pollingStationQueryReducer,
  }),
  devToolsEnhancer({ name: "whipple" })
)

export type RootState = ReturnType<typeof store.getState>
