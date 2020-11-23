import {
  PollingStationQueryActionType,
  PollingStationQueryStateType,
  PollingStationType,
} from "../../../types"
import {
  POLLING_STATION_NUMBER_CHANGED,
  POLLING_STATION_QUERY_STARTED,
  POLLING_STATION_QUERY_FINISHED,
  POLLING_STATION_ZONE_CHANGED,
} from "../actions"

const INITIAL_STATE: PollingStationQueryStateType = {
  zone: "",
  pollingStationNumber: "",
  quering: false,
}

export default (
  state: PollingStationQueryStateType = INITIAL_STATE,
  action: PollingStationQueryActionType
): PollingStationQueryStateType => {
  if (action.type === POLLING_STATION_ZONE_CHANGED) {
    return { ...state, zone: <string>action.payload }
  } else if (action.type === POLLING_STATION_NUMBER_CHANGED) {
    return { ...state, pollingStationNumber: <string>action.payload }
  } else if (action.type === POLLING_STATION_QUERY_STARTED) {
    return { ...state, quering: true }
  } else if (action.type === POLLING_STATION_QUERY_FINISHED) {
    return {
      ...state,
      quering: false,
      queryResult: <PollingStationType>action.payload,
    }
  } else {
    return state
  }
}
