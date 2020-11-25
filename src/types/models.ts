export interface PollingStation {
  id: number
  zone: number
  pollingStationNumber: number
  place: string
  address?: string
  neighborhood?: string
  city: string
  changedTo?: PollingStation
  distributedPollingStationsNumbers?: number[]
  distributedPollingStations?: PollingStation[]
}
export interface DataInfo {
  version: number
  recordsCount: number
  dataFiles: DataFile[]
}
export interface DataFile {
  version: number
  description: string
  size: number
  createdAt: string
  file: string
}
export interface Configuration {
  id: number
  key: string
  value: string
}
