import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { MENU_TOGGLE } from "../../redux/menu/action"
import { RootState } from "../../redux/store"
import { MenuState } from "../../types"
import { HamburgerMeat, HamburgerMenu } from "./styles"

const Menu: React.FC = () => {
  const menu = useSelector((state: RootState): MenuState => state.menu)

  const dispatch = useDispatch()

  const clickMenu = () => {
    dispatch({ type: MENU_TOGGLE })
  }

  return (
    <HamburgerMenu
      viewBox="0 0 100 100"
      width="60"
      className={menu.opened ? "active" : ""}
      onClick={() => clickMenu()}
    >
      <HamburgerMeat
        className="top"
        d="m 30,33 h 40 c 0,0 8.5,-0.68551 8.5,10.375 0,8.292653 -6.122707,9.002293 -8.5,6.625 l -11.071429,-11.071429"
      />
      <HamburgerMeat className="middle" d="m 70,50 h -40" />
      <HamburgerMeat
        className="bottom"
        d="m 30,67 h 40 c 0,0 8.5,0.68551 8.5,-10.375 0,-8.292653 -6.122707,-9.002293 -8.5,-6.625 l -11.071429,11.071429"
      />
    </HamburgerMenu>
  )
}

export default Menu
