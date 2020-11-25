import { PollingStation } from "./models";

export interface PollingStationCardProps {
  pollingStation: PollingStation
}

export interface PollingStationCardIdProps {
  changed?: boolean
}

export interface LoadingProps {
  visible?: boolean
}
