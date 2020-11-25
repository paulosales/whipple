import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import PollingStationCard from "../polling-station-card"
import { PollingStationQueryResultContainer } from "./styles"

const PollingStationQueryResult: React.FC = () => {
  const pollingStation = useSelector(
    (state: RootState) => state.pollingStationQuery.queryResult
  )

  return (
    <PollingStationQueryResultContainer>
      {pollingStation !== undefined ? (
        <PollingStationCard pollingStation={pollingStation} />
      ) : (
        ""
      )}
    </PollingStationQueryResultContainer>
  )
}

export default PollingStationQueryResult
