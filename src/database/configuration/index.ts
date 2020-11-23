import { ConfigurationType } from "../../types"
import db from "../index"

const TABLE_NAME = "configuration"

const getDataVersion = async (): Promise<number> => {
  const versionConfiguration: ConfigurationType = await db
    .table(TABLE_NAME)
    .get({ key: "data-version" })
  return versionConfiguration ? Number.parseInt(versionConfiguration.value) : 0
}

const setDataVersion = async (dataVersion: number): Promise<void> => {
  const versionConfiguration: ConfigurationType = await db
    .table(TABLE_NAME)
    .get({ key: "data-version" })
  if (versionConfiguration) {
    versionConfiguration.value = dataVersion.toString()
    await db
      .table(TABLE_NAME)
      .put(versionConfiguration, versionConfiguration.id)
  } else {
    await db.table(TABLE_NAME).add({ key: "data-version", value: dataVersion })
  }
}

const deleteAllRecords = async (): Promise<void> => {
  db.table(TABLE_NAME).clear()
}

export default { getDataVersion, setDataVersion, deleteAllRecords }
