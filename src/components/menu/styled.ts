import styled from "styled-components";
import { MenuProps } from "../../types/props";

export const MenuContainer = styled.nav<MenuProps>`
  position: absolute;
  background-color: var(--theme-color-04-bg);
  box-sizing: border-box;
  width: 100vw;
  overflow-y: hidden;
  height: ${props => props.opened?"auto":"0px"};
`

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const MenuItem = styled.li`
  list-style: none;
  padding: 5px;
`
