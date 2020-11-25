import { PollingStation } from "./models";

export interface PollingStationAction {
  type: string
  payload: number | string
}

export interface DatabaseAction {
  type: string
  payload?: number
}

export interface PollingStationQueryAction {
  type: string
  payload?: string | PollingStation
}

export interface MenuAction {
  type: string
}
