import styled from "styled-components"
import { MenuProps } from "../../types/props"

export const MenuContainer = styled.nav<MenuProps>`
  position: absolute;
  background-color: var(--theme-color-04-bg);
  box-sizing: border-box;
  width: 100vw;
  overflow-y: hidden;
  height: ${(props) => (props.opened ? "calc(100vh - 60px)" : "0px")};
  opacity: ${(props) => (props.opened ? 1 : 0)};
  transition: all 400ms ease-in-out;
  user-select: none;
`

export const MenuItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const MenuItem = styled.li`
  list-style: none;
  padding: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 10px;
  width: 200px;
  cursor: pointer;

  a {
    color: var(--white);
    text-decoration: none;
  }
`
