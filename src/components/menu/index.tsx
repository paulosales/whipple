import {
  faInfoCircle,
  faSearch,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { MENU_TOGGLE } from "../../redux/menu/action"
import { RootState } from "../../redux/store"
import { MenuState } from "../../types"
import { MenuContainer, MenuItems, MenuItem } from "./styled"

const Menu: React.FC = () => {
  const menu = useSelector((state: RootState): MenuState => state.menu)
  const dispatch = useDispatch()

  const toggleMenu = () => {
    dispatch({ type: MENU_TOGGLE })
  }

  return (
    <MenuContainer opened={menu.opened}>
      <MenuItems>
        <MenuItem onClick={() => toggleMenu()}>
          <Link to="/">
            <FontAwesomeIcon icon={faSearch} /> Consulta de seções
          </Link>
        </MenuItem>
        <MenuItem onClick={() => toggleMenu()}>
          <Link to="/about-whipple">
            <FontAwesomeIcon icon={faInfoCircle} /> Sobre o Whipple
          </Link>
        </MenuItem>
        <MenuItem onClick={() => toggleMenu()}>
          <Link to="/about-author">
            <FontAwesomeIcon icon={faUserCircle} /> Sobre o autor
          </Link>
        </MenuItem>
      </MenuItems>
    </MenuContainer>
  )
}

export default Menu
