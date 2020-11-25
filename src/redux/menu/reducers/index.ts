import { MenuState, MenuAction } from "../../../types"
import { MENU_TOGGLE } from "../action"

const INITIAL_STATE: MenuState = {
  opened: false,
}

export default (
  state: MenuState = INITIAL_STATE,
  action: MenuAction
): MenuState => {
  if (action.type === MENU_TOGGLE) {
    return { ...state, opened: !state.opened }
  } else {
    return state
  }
}
