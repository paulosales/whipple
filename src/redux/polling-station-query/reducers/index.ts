import {
  PollingStationQueryAction,
  PollingStationQueryState,
  PollingStation,
} from "../../../types"
import {
  POLLING_STATION_NUMBER_CHANGED,
  POLLING_STATION_QUERY_STARTED,
  POLLING_STATION_QUERY_FINISHED,
  POLLING_STATION_ZONE_CHANGED,
  POLLING_STATION_QUERY_CLEARED,
} from "../actions"

const INITIAL_STATE: PollingStationQueryState = {
  zone: "",
  pollingStationNumber: "",
  quering: false,
}

export default (
  state: PollingStationQueryState = INITIAL_STATE,
  action: PollingStationQueryAction
): PollingStationQueryState => {
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
      queryResult: <PollingStation>action.payload,
    }
  } else if (action.type === POLLING_STATION_QUERY_CLEARED) {
    return {
      ...state,
      quering: false,
      queryResult: undefined,
    }
  } else {
    return state
  }
}
