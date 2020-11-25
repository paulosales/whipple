import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import { MenuState } from "../../types"
import { MenuContainer, MenuItems, MenuItem } from "./styled"

const Menu: React.FC = () => {
  const menu = useSelector((state: RootState): MenuState => state.menu)

  return (
    <MenuContainer opened={menu.opened}>
      <MenuItems>
        <MenuItem>Sobre o Wipple...</MenuItem>
      </MenuItems>
    </MenuContainer>
  )
}


export default Menu