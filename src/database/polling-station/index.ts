import db from "../index"
import { PollingStation } from "../../types"

const TABLE_NAME = "pollingStations"

const fillPollingStationTable = async (
  pollingStations: PollingStation[]
): Promise<void> => {
  await db.table(TABLE_NAME).bulkAdd(pollingStations)
}

const findPollingStation = async (
  zone: number,
  pollingStationNumber: number
): Promise<PollingStation> => {
  return await db.table(TABLE_NAME).get({ zone, pollingStationNumber })
}

const deleteAllRecords = async (): Promise<void> => {
  db.table(TABLE_NAME).clear()
}

export default { fillPollingStationTable, findPollingStation, deleteAllRecords }
