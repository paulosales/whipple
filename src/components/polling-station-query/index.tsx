import React from "react"
import PollingStationQueryParameters from "./polling-station-query-parameters"
import PollingStationQueryResult from "./polling-station-query-result"

const PollingStatinoQuery: React.FC = () => {
  return (
    <div>
      <PollingStationQueryParameters />
      <PollingStationQueryResult />
    </div>
  )
}

export default PollingStatinoQuery
