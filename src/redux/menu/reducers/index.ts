import { MenuState, MenuAction } from "../../../types";
import { MENU_TOGGLE } from "../action";

export default (state: MenuState, action: MenuAction): MenuState => {
  if(action.type === MENU_TOGGLE) {
    return {...state, opened: !state.opened}
  } else {
    return state
  }
}
