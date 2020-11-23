import { store } from "../redux/store"

export type RootStateType = ReturnType<typeof store.getState>

export interface PollingStationActionType {
  type: string
  payload: number | string
}

export interface DatabaseActionType {
  type: string
  payload?: number
}

export interface DatabaseStateType {
  supported: boolean
  loading: boolean
  loaded: boolean
  version: number
}

export interface PollingStationType {
  id: number
  zone: number
  pollingStationNumber: number
  place: string
  address?: string
  neighborhood?: string
  city: string
  changedTo?: PollingStationType
  distributedPollingStationsNumbers?: number[]
  distributedPollingStations?: PollingStationType[]
}

export interface PollingStationQueryStateType {
  zone: string
  pollingStationNumber: string
  quering: boolean
  queryResult?: PollingStationType
}

export interface PollingStationQueryActionType {
  type: string
  payload?: string | PollingStationType
}

export interface PollingStationCardProps {
  pollingStation: PollingStationType
}

export interface PollingStationCardIdProps {
  changed?: boolean
}

export interface LoadingProps {
  visible?: boolean
}

export interface DataInfoType {
  version: number
  recordsCount: number
  dataFiles: DataFileType[]
}

export interface DataFileType {
  version: number
  description: string
  size: number
  createdAt: string
  file: string
}

export interface ConfigurationType {
  id: number
  key: string
  value: string
}
