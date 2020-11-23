import Dexie from "dexie"
import pako from "pako"
import debug from "debug"
import { store } from "../redux/store"
import {
  DATABASE_NOT_SUPPORTED,
  DATABASE_CHANGE_VERSION,
  DATABASE_LOADING,
  DATABASE_LOAD_FAILED,
  DATABASE_LOADED,
} from "../redux/database/actions"
import { DataInfoType, PollingStationType } from "../types"
import configurationTable from "./configuration"
import pollingStationTable from "./polling-station"

const log = debug("whipple:database:log")

const db = new Dexie("whipple")
db.version(1).stores({
  pollingStations: "++id,[zone+pollingStationNumber]",
  configuration: "++id,key",
})

const decompressData = (compressedData: Uint8Array) => {
  return pako.inflate(compressedData, { to: "string" })
}

const getDataInfo = async (): Promise<DataInfoType> => {
  log("Loading data info...")
  const response = await fetch("/data/index.json")
  if (response.ok) {
    log("Data info loaded.")
    return await response.json()
  } else {
    log("Data info load fail.")
    throw new Error(
      `The server sends HTTP status ${response.status}. 200 was expected.`
    )
  }
}

const syncLocalData = async () => {
  log("Local data synchronization starting...")
  const dataInfo = await getDataInfo()
  const dataVersion = await configurationTable.getDataVersion()
  store.dispatch({ type: DATABASE_CHANGE_VERSION, payload: dataVersion })
  if (dataVersion < dataInfo.version) {
    log("Local data is outdated")
    store.dispatch({ type: DATABASE_LOADING })
    configurationTable.deleteAllRecords()
    pollingStationTable.deleteAllRecords()
    const response = await fetch("/data/polling-stations.json.data")

    if (response.ok) {
      log("Polling station data loaded with success.")
      const bodyData = await response.blob()
      const jsonData = decompressData(
        new Uint8Array(await bodyData.arrayBuffer())
      )
      const pollingStations: PollingStationType[] = JSON.parse(jsonData)
      try {
        await pollingStationTable.fillPollingStationTable(pollingStations)
        await configurationTable.setDataVersion(dataInfo.version)
        store.dispatch({ type: DATABASE_LOADED })
      } catch (e) {
        store.dispatch({ type: DATABASE_LOAD_FAILED })
      }
    } else {
      log("Polling station data loaded failed.")
      store.dispatch({ type: DATABASE_LOAD_FAILED })
    }
  } else {
    log("Local data is updated.")
  }
}

export const mountLocalDatabase = async (): Promise<Error | undefined> => {
  log("Mounting local database")
  try {
    await db.open()
    await syncLocalData()
  } catch (error) {
    log("Mounting local database error " + error)
    if (error.name === Dexie.errnames.MissingAPI) {
      store.dispatch({ type: DATABASE_NOT_SUPPORTED })
    }
    return error
  }
}

export default db
