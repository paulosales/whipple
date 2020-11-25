import styled from "styled-components"
import { LoadingProps } from "../types"
import { fadeInAnimation } from "./animations"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Header =  styled.div`
  width: 310px;
  animation-name: ${fadeInAnimation};
  animation-duration: 300ms;
  animation-timing-function: ease-in-out;
`

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--theme-color-04-bg);
`

export const HeaderTitle =  styled.h1`
  margin-block-start: 0.33em;
  margin-block-end: 0.33em;
  margin-left: 0.33em;
`

export const HeaderSubtitle =  styled.h4`
    margin-block-start: 0.33em;
    margin-block-end: 0.33em;
`

export const Loading = styled.div<LoadingProps>`
  width: 310px;
  padding: 15px;
  justify-content: center;
  align-items: center;

  display: ${(props) => (props.visible ? "flex" : "none")};
`

export const LoadingIcon = styled.div`
  font-size: 2rem;
  padding: 5px;
`

export const LoadingMessage = styled.div``
