import styled from "styled-components"
import { LoadingProps } from "../types"

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
