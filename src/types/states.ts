import { PollingStation } from "./models"

export interface MenuState {
  opened: boolean
}

export interface DatabaseState {
  supported: boolean
  loading: boolean
  loaded: boolean
  version: number
}

export interface PollingStationQueryState {
  zone: string
  pollingStationNumber: string
  quering: boolean
  queryResult?: PollingStation
}
