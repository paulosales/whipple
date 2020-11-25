import { combineReducers, createStore } from "redux"
import { devToolsEnhancer } from "redux-devtools-extension"
import databaseReducer from "./database/reducers"
import pollingStationQueryReducer from "./polling-station-query/reducers"
import menuReducer from "./menu/reducers"

export const store = createStore(
  combineReducers({
    database: databaseReducer,
    pollingStationQuery: pollingStationQueryReducer,
    menu: menuReducer,
  }),
  devToolsEnhancer({ name: "whipple" })
)

export type RootState = ReturnType<typeof store.getState>
