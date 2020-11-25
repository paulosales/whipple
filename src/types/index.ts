import { store } from "../redux/store"

export type RootStateType = ReturnType<typeof store.getState>

export type {
  MenuState,
  DatabaseState,
  PollingStationQueryState,
} from "./states"

export type {
  PollingStationAction,
  DatabaseAction,
  PollingStationQueryAction,
  MenuAction,
} from "./actions"

export type {
  LoadingProps,
  PollingStationCardIdProps,
  PollingStationCardProps,
} from "./props"

export type {
  Configuration,
  DataFile,
  DataInfo,
  PollingStation,
} from "./models"
