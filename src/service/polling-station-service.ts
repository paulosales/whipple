import { PollingStationType } from "../types"
import pollingStationDB from "../database/polling-station"

const findPollingStation = async (
  zone: number,
  pollingStationNumber: number
): Promise<PollingStationType> => {
  const pollingStation = await pollingStationDB.findPollingStation(
    zone,
    pollingStationNumber
  )
  if (pollingStation !== undefined && pollingStation.changedTo) {
    const newPollingStation = await pollingStationDB.findPollingStation(
      pollingStation.changedTo.zone,
      pollingStation.changedTo.pollingStationNumber
    )
    pollingStation.place = newPollingStation.place
    pollingStation.address = newPollingStation.address
    pollingStation.city = newPollingStation.city
    pollingStation.neighborhood = newPollingStation.neighborhood
  }
  if (pollingStation !== undefined && pollingStation.distributedPollingStationsNumbers?.length) {
    pollingStation.distributedPollingStations = []

    for(const distributedPollingStationNumber of pollingStation.distributedPollingStationsNumbers) {
      pollingStation.distributedPollingStations.push(await pollingStationDB.findPollingStation(pollingStation.zone, distributedPollingStationNumber))
    }
  }
  return pollingStation
}

export default { findPollingStation }
