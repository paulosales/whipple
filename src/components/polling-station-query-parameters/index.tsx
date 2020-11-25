import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  POLLING_STATION_NUMBER_CHANGED,
  POLLING_STATION_QUERY_CLEARED,
  POLLING_STATION_QUERY_FINISHED,
  POLLING_STATION_QUERY_STARTED,
  POLLING_STATION_ZONE_CHANGED,
} from "../../redux/polling-station-query/actions"
import { RootState } from "../../redux/store"
import pollingStationService from "../../service/polling-station-service"
import { PollingStationQueryState } from "../../types"
import {
  PollingStationQueryForm,
  PollingStationInput,
  QueryButton,
} from "./styles"

const PollingStationQueryParameters: React.FC = () => {
  const dispatch = useDispatch()
  const zoneInputRef = useRef<HTMLInputElement>(null)
  const pollingStationNumberInputRef = useRef<HTMLInputElement>(null)

  const { zone, pollingStationNumber } = useSelector(
    (state: RootState): PollingStationQueryState =>
      state.pollingStationQuery
  )

  const zoneChanged = (value: string) => {
    dispatch({
      type: POLLING_STATION_ZONE_CHANGED,
      payload: value,
    })
  }

  const pollingStationNumberChanged = (value: string) => {
    dispatch({
      type: POLLING_STATION_NUMBER_CHANGED,
      payload: value,
    })
  }

  const queryPollingStation = async (e: React.MouseEvent): Promise<void> => {
    e.preventDefault()
    dispatch({ type: POLLING_STATION_QUERY_STARTED })

    if (zone.trim() === "") {
      if (null !== zoneInputRef && null !== zoneInputRef.current) {
        zoneInputRef.current.focus()
        dispatch({type: POLLING_STATION_QUERY_CLEARED})
        return
      }
    }

    if (pollingStationNumber.trim() === "") {
      if (
        null !== pollingStationNumberInputRef &&
        null !== pollingStationNumberInputRef.current
      ) {
        pollingStationNumberInputRef.current.focus()
        dispatch({type: POLLING_STATION_QUERY_CLEARED})
        return
      }
    }

    const pollingStation = await pollingStationService.findPollingStation(
      Number.parseInt(zone),
      Number.parseInt(pollingStationNumber)
    )
    dispatch({ type: POLLING_STATION_QUERY_FINISHED, payload: pollingStation })
  }

  return (
    <PollingStationQueryForm>
      <PollingStationInput
        type="number"
        id="zoneQueryInput"
        ref={zoneInputRef}
        placeholder="Zona"
        value={zone}
        onChange={(e) => zoneChanged(e.target.value)}
      />
      <PollingStationInput
        type="number"
        id="pollingStationNumberInput"
        ref={pollingStationNumberInputRef}
        placeholder="Seção"
        value={pollingStationNumber}
        onChange={(e) => pollingStationNumberChanged(e.target.value)}
      />
      <QueryButton onClick={(e) => queryPollingStation(e)}>
        <FontAwesomeIcon icon={faSearch}/>
      </QueryButton>
    </PollingStationQueryForm>
  )
}

export default PollingStationQueryParameters
