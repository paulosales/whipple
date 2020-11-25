import { DatabaseAction, DatabaseState } from "../../../types"
import {
  DATABASE_CHANGE_VERSION,
  DATABASE_LOADED,
  DATABASE_LOADING,
  DATABASE_LOAD_FAILED,
  DATABASE_NOT_SUPPORTED,
} from "../actions"

const INITIAL_STATE: DatabaseState = {
  supported: true,
  loaded: false,
  loading: false,
  version: 0,
}

export default (
  state: DatabaseState = INITIAL_STATE,
  action: DatabaseAction
): DatabaseState => {
  if (action.type === DATABASE_CHANGE_VERSION) {
    return { ...state, version: <number>action.payload }
  } else if (action.type === DATABASE_LOADING) {
    return { ...state, loading: true, loaded: false }
  } else if (action.type === DATABASE_LOADED) {
    return { ...state, loading: false, loaded: true }
  } else if (action.type === DATABASE_LOAD_FAILED) {
    return { ...state, loading: false, loaded: false }
  } else if (action.type === DATABASE_NOT_SUPPORTED) {
    return { ...state, loading: false, loaded: false, supported: false }
  } else {
    return state
  }
}
