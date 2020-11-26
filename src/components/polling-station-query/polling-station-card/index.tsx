import React from "react"
import { PollingStationCardProps } from "../../../types"
import {
  PollingStationId,
  Place,
  PollingStationContainer,
  Address,
} from "./styles"

const PollingStationCard: React.FC<PollingStationCardProps> = (
  props: PollingStationCardProps
) => {
  const { pollingStation } = props
  const changed =
    pollingStation?.changedTo !== undefined ||
    (pollingStation?.distributedPollingStations?.length !== undefined &&
      pollingStation?.distributedPollingStations?.length > 0)

  const addressParts = []
  if (pollingStation?.address) {
    addressParts.push(pollingStation?.address)
  }
  if (pollingStation?.neighborhood) {
    addressParts.push(pollingStation?.neighborhood)
  }
  if (pollingStation?.city) {
    addressParts.push(pollingStation?.city)
  }

  return (
    <PollingStationContainer>
      <PollingStationId changed={changed}>
        <div>{pollingStation?.zone}</div>
        <div>{pollingStation?.pollingStationNumber}</div>
      </PollingStationId>
      <PollingStationId changed={false}>
        <div>{pollingStation?.changedTo?.zone}</div>
        <div>{pollingStation?.changedTo?.pollingStationNumber}</div>
      </PollingStationId>
      {pollingStation?.distributedPollingStations?.map(
        (distributedPollingStation) => {
          return (
            <PollingStationId
              key={distributedPollingStation.id}
              changed={false}
            >
              <div>{distributedPollingStation?.zone}</div>
              <div>{distributedPollingStation?.pollingStationNumber}</div>
            </PollingStationId>
          )
        }
      )}
      <Place>{pollingStation?.place}</Place>
      <Address>{addressParts.join(", ")}</Address>
    </PollingStationContainer>
  )
}

export default PollingStationCard
